import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Trends from '../../components/Trends/Trends';
import Offers from '../../components/Offers/Offers';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';


function Home() {

  const [offers, setoffers] = useState([]);

  const loadOffers = async () => {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/offers`)

    setoffers(response.data.data)
  }

  useEffect(() => {
    loadOffers()
  }, [])

  return (
    <div>
      <Navbar />

      <div className='position-relative mt-5'>
        <img src='shop.jpg' alt='shopping-img' className='shop-img ' width='100%' />
        <div className='wlc-msg position-absolute pt-2 my-4 mx-5 text-center shadow rounded' style={{ width: '1000px', height: '150px', color: 'rgb(45, 101, 123)', top: '0', left: '200px', backgroundColor: 'rgb(168, 211, 228)' }}>
          <h3><i><b><u> WELCOME TO QUICKCART </u></b>
            <br />🛍️ Discover a world of style and elegance with our curated collections 🛍️</i></h3><br />
          <h6 className='text-center'>We are thrilled to have you here at QuickCart, your ultimate shopping destination. Explore our extensive collection of the latest fashion trends, cutting-edge technology, and unique home essentials.</h6>
        </div>
      </div>

      <h4 className='text-center fst-italic mt-3 mt-5 p-2' style={{ color: "rgb(45, 101, 123)" }}><b>POPULAR IN OUR STORE</b></h4>
      <Trends />
      <h4 className='text-center fst-italic m-3 mt-5 p-2' style={{ color: "rgb(45, 101, 123)" }}><b>OFFERS ON TOP BRANDS</b></h4>

      <div className="container">
        <div className="row px-5 py-3 my-3" style={{ backgroundColor: "rgb(83, 155, 183)" }}>
          {offers.map((offer, i) => {
            const {
              image,
              logo,
              category,
              discount
            } = offer

            return (
              <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4"><Offers
                image={image}
                logo={logo}
                category={category}
                discount={discount}
                loadOffers={loadOffers}
              />
              </div>
            )
          })
          }
        </div>
      </div>

      <Footer />

    </div>
  )
}

export default Home