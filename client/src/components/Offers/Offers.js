import React from 'react'

function Offers({image, logo, category, discount}) {


  return (
    <div className='card'>
      <div className='offer-brand'>
      <img src={image} alt='offer-img' className='card-img-top' height="200px" style={{ objectFit: 'cover' }} />
      <img src={logo} alt='brand-logo' className='card-img d-block my-0 mx-auto' style={{ height: '80px', width: '150px'}}/>
      <p className='card-text text-center m-3'>{category}</p>
      <h3 className='card-text text-center mb-3'>{discount}</h3>
      </div>
    </div>
  )
}

export default Offers;
