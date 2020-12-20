import React from 'react'
import MyButton from '../UI/MyButton'

import Zoom from 'react-reveal/Zoom'

const Pricing = () => {
  const prices = [100, 150, 250]
  const positions = ['Balcony', 'Medium', 'Star']
  const descriptions = [
    ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis omnis enim.',
    'Sequi labore dolore quibusdam itaque explicabo corrupti velit laborum.',
    'Totam ab. Provident asperiores qui itaque. Vitae est sapiente animi.',
  ]
  const linkto = ['http://sales/b', 'http://sales/b', 'http://sales/b']
  const delays = [500, 0, 500]

  const showBoxes = () =>
    prices.map((box, i) => (
      <Zoom key={i} delay={delays[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>${prices[i]}</span>
              <span>{positions[i]}</span>
            </div>
            <div className='pricing_description'>{descriptions[i]}</div>
            <div className='pricing_buttons'>
              <MyButton
                text='Purchase'
                bck='#ffa800'
                color='#ffffff'
                link={linkto[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))

  return (
    <div className='bck_black'>
      <div className='center_wrapper pricing_section'>
        <h2>Pricing</h2>
        <div className='pricing_wrapper'>{showBoxes()}</div>
      </div>
    </div>
  )
}

export default Pricing
