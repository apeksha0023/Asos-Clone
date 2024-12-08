import React from 'react'


import './Body.css'; // Import the CSS file 
const Body = () => {
  return (
    <div>
        <div className='container'>
        <img className ="homepage1"src="https://res.cloudinary.com/dssiixcsn/image/upload/v1733478343/homepage_z9szes.png"alt="" />
          <div className='btn'>
            <button>SHOP WOMENS</button>
            <button>SHOP MENS</button>
           </div>
       </div>  
          <div className='card'>
              <img src="/images/img1.jpg" alt="" />
              <img src="/images/img2.jpg" alt="" />
              <img src="/images/img3.jpg" alt="" />
              <img src="/images/img4.jpg" alt="" />
          </div>
       
          <div className='label'>
               <img src="/images/label2.jpg" alt="" />
          </div>
      
        
          <div className='womenimg'>
            <img src="/images/women1.jpg" alt="" />
            <img src="/images/women2.jpg" alt="" />
            <img src="/images/women3.jpg" alt="" />
            <img src="/images/women4.jpg" alt="" />
          </div>
          
          <div className='shopbtn'>
            <button>SHOP-WOMEN'S BRAND</button>
          </div>

          <div className='menimg'>
            <img src="/images/men1.jpg" alt="" />
            <img src="/images/men2.jpg" alt="" />
            <img src="/images/men3.jpg" alt="" />
            <img src="/images/men4.jpg" alt="" />
          </div>
          
          <div className='shop1btn'>
            <button>SHOP-MEN'S BRAND</button>
          </div>


      
       </div>





   
  )
}

export default Body