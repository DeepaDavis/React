import React from 'react'
import './Page2.css'
import bg2Image from '../img/bg-page2.jpg'
const Page2 = () => {
  return (
    <>
      <div className='page2Container'>
  
         <div className='page2Child1'>
          <h5 className='h5Child2'>Bringing your <br></br>vision to life</h5>
          <p className='paraChild2'>
                What's special about your product, service, or company? 
                Use this space to highlight the things that set you apart from your competition, 
                whether it's a special feature, a unique philosophy, or awards and recognition that you have received. 
                Think of this as your elevator pitch to get the reader's attention.
            </p>
         </div>

         <div className='page2Child2'> 
        <img src={bg2Image}></img>           
        </div>
      </div>

      
    </>
  )
}

export default Page2
