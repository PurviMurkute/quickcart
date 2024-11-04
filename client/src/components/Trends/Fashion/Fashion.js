import React from 'react';
import './Fashion.css';
import { Link } from 'react-router-dom';
import Footer from '../../Footer/Footer';


function Fashion() {
  return (
    <div className='fashion-container position-relative bg-light-subtle row '>
      <div className='' style={{ height: '30px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <div className='f-container'>
        <div className='col-6'>
          <img src='f4.avif' alt='f-img' className='fashion1-img' width='90%' height='90%' />
        </div>
        <div className='col-6'>
          <img src='f5.avif' alt='fashion-img' className='fashion-img' width='90%' height='90%' />
        </div>
        <h1 className='fas-title fw-bold position-absolute bg-light m-5 p-3 text-center fs-4 rounded' style={{ color: 'rgb(45, 101, 123)' }}><i>YOUR FASHION SEARCH STARTS HERE !</i></h1>
      </div>
      <div className='fashion-para-container'>
        <h4 className='para bg-light px-3 py-3 text-center shadow my-3 fs-4' style={{ color: 'rgb(45, 101, 123)' }}><i>
          Fashion is a dynamic and ever-evolving form of self-expression that reflects cultural, social, and individual identities. It encompasses clothing, accessories, and styles that are influenced by trends, history, and personal taste. Fashion not only shapes how people present themselves to the world but also serves as a medium for creativity and innovation. Through fashion, individuals can convey their personalities, beliefs, and emotions, making it a powerful tool for communication and connection.
        </i></h4>
      </div>

      <Link to='/products/women'>
        <div className='fashionpage-container d-flex justify-content-center p-5 position-relative shadow-lg' style={{ backgroundColor: 'rgb(83, 155, 183)' }}>
            <img src='f6.webp' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='f7.jpeg' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='f8.avif' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='fashionclothes.jpg' alt='fashion6' className='f-img p-3'  height='250px' width='170px' />
          <p className='position-absolute top-0 m-3 text-white'><b>WOMEN'S COLLECTION</b></p>
          <br />
        </div>
      </Link>
      <br />
      <hr />
      <br />
      <Link to='/products/Mens'>
        <div className='fashionpage-container d-flex justify-content-center p-5 position-relative shadow-lg' style={{ backgroundColor: 'rgb(83, 155, 183)' }}>
            <img src='f9.webp' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='f10.webp' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='f11.avif' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
            <img src='f12.jpeg' alt='fashion6' className='f-img p-3' height='250px' width='170px' />
          <p className='position-absolute top-0 m-3 text-white'><b>MEN'S COLLECTION</b></p>
        </div>
      </Link>
      <Footer />
    </div>
  )
}

export default Fashion