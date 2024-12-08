
const express =require('express')
userRouter = express.Router();
const User = require('../models/user.model')
const bcrypt =require('bcryptjs')
const jwt = require('jsonwebtoken')

userRouter.post('/Signup',async(req,res)=>{
    const {username,email,password,role} =req.body;
    if(!username || !email || !password){
        return res.status(400).json({ message: 'All fields are required' });
    }
    try {
        const existingUser = await User.findOne({email})
        if(existingUser) return res.status(400).json({ message: 'Email already exists' });

        await bcrypt.hash(password, 8, async (err, hash) => {
      if (err) {
        return res.status(500).json({ message: `Error in hashing password: ${err.message}` });
      }

      const user = new User({ username, email, password: hash ,role: role || 'user'});
      try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (saveError) {
        res.status(500).json({ message: `Error saving user: ${saveError.message}` });
      }
    });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

userRouter.post('/Login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const accessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.SECRET_KEY,
      { expiresIn: '1h' }
    );

    res.json({ accessToken });
  } catch (error) {
    res.status(500).json({ message: `Server error: ${error.message}` });
  }
});
 
  

module.exports= userRouter;

