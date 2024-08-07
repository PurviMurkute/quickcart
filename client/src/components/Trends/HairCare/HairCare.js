import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Footer/Footer';

function HairCare() {

  const [haircareItems, setHaircareItems] = useState([]);
  const [currentUser, setcurrentUser] = useState('')

  const loadHaircare = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/haircare`)

    setHaircareItems(response.data.data)
  }

  useEffect(() => {
    loadHaircare()
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
      <h4 className='p-3 mt-5 text-center' style={{ color: "rgb(45, 101, 123)" }}>HairCare Items</h4>

      <div className=''>
        <div className='row px-5' style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {haircareItems.map((haircareitem, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 my-4">
              <HairCareitems
                image={haircareitem.image}
                title={haircareitem.title}
                quantity={haircareitem.quantity}
                category={haircareitem.category}
                price={haircareitem.price}
                onBuyNow={() => handleBuyNow(haircareitem)}
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

const HairCareitems = ({ image, title, quantity, category, price, onBuyNow }) => {

  return (

    <div className='card h-100'>
        <img src={image} alt='SCproduct' className='card-image-top' height='250px' style={{ objectFit: 'cover' }} />
        <div className='card-body'>
          <h4 className='card-title text-center'>{title}</h4>
          <p className='card-text text-center'>({quantity})</p>
          <p className='card-text text-center'>{category}</p>
          <h5 className='card-text text-center'>₹{price}</h5>
          <button type='button' onClick={onBuyNow} className='atc-btn d-block my-0 mx-auto mt-3 border border-0 py-1 px-2 my-1 mx-3 rounded' style={{ backgroundColor: "rgb(83, 155, 183)" }}>Buy Now</button>
        </div>
      </div>
    
  )
}

export default HairCare