import React from 'react'
import "./Page5.css";
import page5Img from '../img/page5-img.jpg'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
const Page5 = () => {
  return (
    <div>
           <div className='page5Container'>

              <div className='page5Parent'>

                <div className='page5Child1'>
                  <img src={page5Img} height="50%"></img>
                </div>

                <div className='page5Child2'>
                    <p>
                      <span>PHONE</span><br></br>
                      <span>(123) 456-7890</span>
                    </p>

                    <p>
                      <span>EMAIL</span><br></br>
                      <span>hello@reallygreatsite.com</span>
                    </p>

                    <p>
                      <span>SOCIAL</span><br></br>
                      <span><FaFacebook />&nbsp;&nbsp;< IoLogoInstagram/>&nbsp;&nbsp;< IoLogoTwitter/></span>
                    </p>
                    
                    </div>
              </div>
           </div>



    </div>
  )
}

export default Page5
