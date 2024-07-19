import React from 'react';
import './Fashion.css';
import {Link} from 'react-router-dom';
import Footer from '../../Footer/Footer';


function Fashion() {
  return (
    <div className='fashion-container position-relative bg-light-subtle row position-relative'>
      <div className='' style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
      <div className='col-6'>
        <img src='f4.avif' alt='f-img' className='' width='100%' />
      </div>
      <div className='col-6'>
        <img src='f5.avif' alt='fashion-img' className='' width='100%' />
      </div>
      <h1 className='fas-title fw-bold position-absolute bg-light m-5 p-3 text-center' style={{ width: '390px', height: '170px', color: 'rgb(45, 101, 123)', top: '10px', left: '34%' }}><i>YOUR FASHION SEARCH STARTS HERE !</i></h1>

      <h4 className='para bg-light px-5 py-4 text-center shadow-lg d-block my-5 mx-auto fs-3' style={{ width: '1000px', height: '300px', color: 'rgb(45, 101, 123)'}}><i>
        Fashion is a dynamic and ever-evolving form of self-expression that reflects cultural, social, and individual identities. It encompasses clothing, accessories, and styles that are influenced by trends, history, and personal taste. Fashion not only shapes how people present themselves to the world but also serves as a medium for creativity and innovation. Through fashion, individuals can convey their personalities, beliefs, and emotions, making it a powerful tool for communication and connection.
      </i></h4>

      <Link to='/women'>
      <div className='women-fashion-container d-flex justify-content-center p-5 position-relative shadow-lg' style={{ backgroundColor: 'rgb(83, 155, 183)'}}>
        <div className='p-3'>
          <img src='f6.webp' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='f7.jpeg' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='f8.avif' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='fashionclothes.jpg' alt='fashion6' height='250px' width='170px'/>
        </div>
        <p className='position-absolute top-0 m-3 text-white'><b>WOMEN'S COLLECTION</b></p>
        <br/>
      </div>
      </Link>
      <br/>
      <hr/>
      <br/>
      <Link to='/men'>
      <div className='women-fashion-container d-flex justify-content-center p-5 position-relative shadow-lg' style={{ backgroundColor: 'rgb(83, 155, 183)'}}>
        <div className='p-3'>
          <img src='f9.webp' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='f10.webp' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='f11.avif' alt='fashion6' height='250px' width='170px'/>
        </div>
        <div className='p-3'>
          <img src='f12.jpeg' alt='fashion6' height='250px' width='170px'/>
        </div>
        <p className='position-absolute top-0 m-3 text-white'><b>MEN'S COLLECTION</b></p>
      </div>
      </Link>
      <Footer/>
    </div>
  )
}

export default Fashion