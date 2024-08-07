import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../../Footer/Footer';

function WomenFashion() {
  const [womens, setWomens] = useState([]);
  const [currentUser, setcurrentUser] = useState('')

  const loadWomens = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/womens`);
      setWomens(response.data.data);
    } catch (error) {
      console.error('Error fetching womens fashion data:', error);
    }
  };

  useEffect(() => {
    loadWomens();
  }, []);

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
      <div style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <h4 className="w-title p-3 mt-5 text-center" style={{ color: "rgb(45, 101, 123)" }}>Womens Fashion</h4>
      <div className="">
        <div className="row px-5" style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {womens.map((women, i) => (
            <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4">
              <WomenFashionItem
                image={women.image}
                title={women.title}
                description={women.description}
                price={women.price}
                onBuyNow={() => handleBuyNow(women)}
              />
            </div>
          ))}
        </div>
      </div><br/><br/>
      <Footer />
    </div>
  );
}

const WomenFashionItem = ({ image, title, description, price, onBuyNow }) => {
  return (
    <div className="card h-100">
      <img src={image} alt="womenfashion" className="card-img-top" height="250px" style={{ objectFit: 'cover' }} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <h5 className="card-text text-center">₹{price}</h5>
        <button type='button' onClick={onBuyNow} className='atc-btn d-block my-0 mx-auto mt-3 border border-0 py-1 px-2 my-1 mx-3 rounded' style={{ backgroundColor: "rgb(83, 155, 183)" }}>Buy Now</button>
      </div>
    </div>
  );
};

export default WomenFashion;