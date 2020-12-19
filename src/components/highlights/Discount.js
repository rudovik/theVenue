import React, { useState, useEffect } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

const Discount = () => {
  const [discountStart, setDiscountStart] = useState(0)
  const discountEnd = 30

  const percentage = () => {
    if (discountStart < discountEnd) {
      setDiscountStart(discountStart + 1)
    }
  }

  useEffect(() => {
    setTimeout(percentage, 30)
    // eslint-disable-next-line
  }, [discountStart])

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>
        <Fade onReveal={() => percentage()}>
          <div className='discount_percentage'>
            <span>{discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right>
          <div className='discount_description'>
            <h3>Purchase tickets before 20th JUNE</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
              aliquam qui veritatis quasi, sunt doloremque consectetur fuga.
            </p>
            <div>button</div>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
