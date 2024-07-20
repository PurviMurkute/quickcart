import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import Trends from '../../components/Trends/Trends';
import Offers from '../../components/Offers/Offers';
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

function Home() {

  const [offers, setoffers] = useState([])

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
        <div className='wlc-msg position-absolute bg-light pt-2 my-4 mx-5 text-center shadow rounded' style={{ width: '1000px', height: '150px', color: 'rgb(45, 101, 123)', top: '0', left: '200px' }}>
          <h3><i><b><u> WELCOME TO QUICKCART </u></b>
            <br />🛍️ Discover a world of style and elegance with our curated collections 🛍️</i></h3><br />

          <button type='button' className='btn bg-dark py-1 px-2 text-decoration-none rounded shadow fs-6' style={{ color: 'rgb(116, 196, 227)', }}>Explore More</button>

        </div>

      </div>
      <h3 className='text-center fst-italic mt-3 mt-5 p-2' style={{ color: "rgb(45, 101, 123)" }}><b>TRENDING IN OUR STORE</b></h3>
      <Trends />
      <h3 className='text-center fst-italic m-3 mt-5 p-2' style={{ color: "rgb(45, 101, 123)" }}><b>OFFERS ON TOP BRANDS</b></h3>

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