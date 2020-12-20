import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8386.748675492738!2d28.79401526735072!3d51.32224866260012!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472987f8b974aae1%3A0xc133be32ddf9c30a!2sOvruch%2C%20Zhytomyr%20Oblast%2C%2011101!5e0!3m2!1sen!2sua!4v1608466466436!5m2!1sen!2sua'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen=''
        aria-hidden='false'
        tabIndex='0'
        title='map'
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
