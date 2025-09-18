import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from './../../components/Footer/Footer.js';
import {useNavigate, useParams} from "react-router-dom"
import toast from 'react-hot-toast';

function Products() {

  const [products, setProducts] = useState([]);
  const [currentUser, setcurrentUser] = useState('')

  const {category} =  useParams()

  const navigate = useNavigate();

  const loadProducts = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/products?category=${category}`)

    if(response.data.success){
      setProducts(response.data.data)
    }else{
      toast.error(response.data.message);
    }    
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    if(currentUser){
      setcurrentUser(currentUser)
    }
  }, [])

  const handleBuyNow = () => {
    if (currentUser) {
      navigate('/order');
    } else {
      navigate('/login');
    }
  };

  return (
    <div>
      <div className='' style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <h4 className='p-3 mt-5 text-center' style={{ color: "rgb(45, 101, 123)" }}>{category}</h4>

      <div className=''>
        <div className='row px-5' style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {products.map((product, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-3 my-4">
              <Productss
                image={product.image}
                title={product.title}
                description={product.description}
                quantity={product.quantity}
                producttype={product.category}
                price={product.price}
                onBuyNow={() => handleBuyNow(product)}
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

const Productss = ({ image, title, description, quantity, producttype, price, onBuyNow }) => {

  return (

    <div className='card h-100'>
        <img src={image} alt='SCproduct' className='card-image-top' height='250px' style={{ objectFit: 'cover' }} />
        <div className='card-body'>
          <h4 className='card-title text-center'>{title}</h4>
          <p className="card-text">{description}</p>
          <p className='card-text text-center'>({quantity})</p>
          <p className='card-text text-center'>{producttype}</p>
          <h5 className='card-text text-center'>₹{price}</h5>
          <button type='button' onClick={onBuyNow} className='atc-btn d-block my-0 mx-auto mt-3 border border-0 py-1 px-2 my-1 mx-3 rounded' style={{ backgroundColor: "rgb(83, 155, 183)" }}>Buy Now</button>
        </div>
      </div>
  )
}

export default Products