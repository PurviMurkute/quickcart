import React from 'react'

function Offers({image, logo, category, discount}) {


  return (
    <div className='border'>
      <img src={image} alt='offer-img' className='offer-img' />
      <img src={logo} alt='brand-logo' className='brand-logo' />
      <p className='offer-category'>{category}</p>
      <h3>{discount}</h3>
    </div>
  )
}

export default Offers;
