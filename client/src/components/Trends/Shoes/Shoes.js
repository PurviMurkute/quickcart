import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Footer/Footer';

function Shoes() {

  const [shoes, setShoes] = useState([]);
  const [currentUser, setcurrentUser] = useState('')

  const loadShoes = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/shoes`)

    setShoes(response.data.data)
  }

  useEffect(() => {
    loadShoes()
  }, [])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setcurrentUser(currentUser)
    }
  }, [])

  const handleBuyNow = () => {
    if (currentUser) {
      window.location.href = '/order';
    } else {
      window.location.href = '/login';
    }
  };

  return (
    <div>
      <div className='' style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <h4 className='p-3 mt-5 text-center' style={{ color: "rgb(45, 101, 123)" }}>Shoes</h4>

      <div className=''>
        <div className='row px-5' style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {shoes.map((shoescard, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 my-4">
              <ShoesCard
                image={shoescard.image}
                title={shoescard.title}
                brand={shoescard.brand}
                price={shoescard.price}
                onBuyNow={() => handleBuyNow(shoescard)}
              />
            </div>
          ))
          }
        </div>
      </div><br/><br/>
      <Footer />
    </div>
  );
};

const ShoesCard = ({ image, title, brand, price, onBuyNow }) => {

  return (

    <div className='card h-100 '>
        <img src={image} alt='shoesimg' className='card-image-top' height='270px' style={{ objectFit: 'cover' }} />
        <div className='card-body'>
          <h4 className='card-title text-center'>{title}</h4>
          <p className='card-text text-center'>{brand}</p>
          <h5 className='card-text text-center'>₹{price}</h5>
          <button type='button' onClick={onBuyNow} className='atc-btn d-block my-0 mx-auto mt-3 border border-0 py-1 px-2 my-1 mx-3 rounded' style={{ backgroundColor: "rgb(83, 155, 183)" }}>Buy Now</button>
        </div>
      </div>
    
  )
}

export default Shoes