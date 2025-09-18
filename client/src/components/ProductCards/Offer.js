import React from 'react';
import { Link } from 'react-router-dom';

function Offer({image, logo, category, discount}) {

  return (
    <Link to={`/offers/${category}`} className='card' style={{backgroundColor: "rgb(242, 242, 242)"}}>
      <div className='offer-brand'>
      <img src={image} alt='offer-img' className='card-img-top' height="190px" style={{ objectFit: 'cover' }} />
      <img src={logo} alt='brand-logo' className='card-img d-block my-0 mx-auto' style={{ height: '50px', width: '130px'}}/>
      <p className='card-text text-center m-3'>{category}</p>
      <h4 className='card-text text-center mb-3'>{discount}</h4>
      </div>
    </Link>
  )
}

export default Offer;