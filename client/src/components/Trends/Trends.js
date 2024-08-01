import React from 'react';
import './Trends.css';
import { Link } from 'react-router-dom';

function Trends() {
    return (

        <div className='popular-container row trend-cards' style={{ backgroundColor: 'rgb(83, 155, 183)'}}>
            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5  ms-5'>Fashion..</h4>
                <Link to='/fashion'>
                <img src='f1.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5  ms-5'>SkinCare..</h4>
                <Link to='/skincare'>
                <img src='sc1.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>Shoes..</h4>
                <Link to='/shoes'>
                <img src='shoes.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>HairCare..</h4>
                <Link to='/haircare'>
                <img src='haircare.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>Accesories..</h4>
                <Link to='/accesories'>
                <img src='accesories.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>Watches..</h4>
                <Link to='/watches'>
                <img src='watch.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>

            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>Makeup..</h4>
                <Link to='/makeup'>
                <img src='makeup.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>
            
            <div className='popular-cards col col-sm-6 col-md-6 col-lg-3'>
            <h4 className='popular-title position-absolute fst-italic mt-5 ms-5'>Home Decor..</h4>
                <Link to='/homedecor'>
                <img src='homedecor.avif' alt='trending-img' className='card-img my-3 p-1 rounded border border-dark shadow bg-light' />
                </Link>
            </div>
        </div>
    )
}

export default Trends