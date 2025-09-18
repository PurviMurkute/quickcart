import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

function Offers() {
  const [offers, setOffers] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/offers/${category}`
        );
        setOffers(response.data.data);
      } catch (error) {
        console.error("Failed to fetch offers:", error);
      }
    };

    loadOffers();
  }, [category]);
  

  return (
    <div>
      <div style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <h4 className="w-title p-3 mt-5 text-center" style={{ color: "rgb(45, 101, 123)" }}>
        Offers for {category}
      </h4>

      <div className="container-fluid">
        <div className="row px-5" style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {offers.map((offer, i) => (
            <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4">
              <OfferCard {...offer} />
            </div>
          ))}
        </div>
      </div>

      <br /><br />
      <Footer />
    </div>
  );
}

const OfferCard = ({ _id, image, title, quantity, actualprice, offerprice, discount }) => {
  return (
    <div className="card h-100">
      <img src={image} alt={title} className="card-img-top" height="250px" style={{ objectFit: 'cover' }} />
      <div className="card-body text-center">
        <h4 className="card-title">{title}</h4>
        <p>{quantity}</p>
        <h6>
          <del className="text-muted">₹{actualprice}</del>{' '}
          <span className="text-success">₹{offerprice}</span>{' '}
          <span className="text-danger">({discount})</span>
        </h6>
        <button
          type="button"
          className="atc-btn border-0 py-1 px-3 mt-3 rounded"
          style={{ backgroundColor: "rgb(45, 101, 123)", color: "white" }}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Offers;
