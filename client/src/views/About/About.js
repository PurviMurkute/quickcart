import React from 'react';
import './About.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Aboutimg from './about.jpeg';

function About() {
  return (
    <div className='mt-5'>
      <Navbar />
      <div className='about-content'>
        <div className='div'></div>

        <h4 className='about-heading'><b>About Us</b></h4>
        <div className='img-p-container'>
          <img src={Aboutimg} alt='aboutimg' className='about-img' /><br /><br />
          <h6 className='about-para'><i>Welcome to QUICKCART, your number one destination for fashion and everything. Our mission is to provide a seamless and enjoyable shopping experience, offering a wide range of high-quality products at competitive prices.</i></h6>
          <br />
          <h6 className='about-para'><i>At QUICKCART, we believe in the power of choice. That's why we carefully curate our collections to ensure you find exactly what you're looking for, whether it's the latest trends in fashion, cutting-edge technology, or unique items to enhance your home. Our dedicated team is always here to help, from guiding you through your purchase to ensuring timely delivery and providing excellent after-sales support.</i></h6>
        </div>
        <div className='greeting-para'>
          <h5>We are not just a store; we are a community of like-minded individuals who share a love for quality products and exceptional service. Thank you for choosing QUICKCART. We look forward to serving you and making your shopping experience truly extraordinary.</h5>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About