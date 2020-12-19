import React from 'react'
import Slider from 'react-slick'

import slide_one from '../../resources/images/slide_one.jpg'
import slide_two from '../../resources/images/slide_two.jpg'
import slide_three from '../../resources/images/slide_three.jpg'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  }

  console.log(slide_one)

  return (
    <div className='carousel_wrapper'>
      <Slider {...settings}>
        <div>
          <div
            className='carousel_image'
            style={{
              background: `url(${slide_one})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_image'
            style={{
              background: `url(${slide_two})`,
            }}
          ></div>
        </div>
        <div>
          <div
            className='carousel_image'
            style={{
              background: `url(${slide_three})`,
            }}
          ></div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
