import React from 'react'
import './Page4.css'
const Page4 = () => {
  return (
    <div>

      <div className='page4Container'>
        <h1 className='page4Head'>The value in what we offer</h1>

        <div className='page4Parent'>

          <div className='child1'>
            <div className='roundDiv'><i class="fas fa-shipping-fast"> </i></div>
            <p>International tracked shipping</p>
          </div>

          <div className='child2'>
            <div className='roundDiv'>
              <i class="fas fa-ring"></i>
              </div>
            <p>18K Gold and Recycled Silver</p>
          </div>

          <div className='child3'>
            <div className='roundDiv'>
              <i class="fas fa-leaf"></i>
            </div>
            <p>Sustainable and ethically-sourced and produced</p>
          </div>

          <div className='child4'>
            <div className='roundDiv'>
              <i class="fas fa-calendar-check"></i>
            </div>
            <p>Sustainable and ethically-sourced and produced</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page4
