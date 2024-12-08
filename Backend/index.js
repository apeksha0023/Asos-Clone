require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const productRouter =require('./routes/product.route');
const connection = require('./config/db.js');
const userRouter = require('./routes/user.route')
const razorRouter = require('./routes/razor.route')

app.use(express.json());
app.use(cors({
    origin:'*'
}));

app.get('/',(req,res)=>{
    return res.send('Server is running')
});


app.use('/product',productRouter)
app.use('/user',userRouter)
app.use('/razor', razorRouter)


app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log(`server is live and connected to port ${process.env.PORT}`)
    } catch (error) {
        console.log(`Error occured connecting to server ${error.message}`)
    }
})
