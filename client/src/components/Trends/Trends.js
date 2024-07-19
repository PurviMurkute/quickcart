import React from 'react';
import './Trends.css';
import { Link } from 'react-router-dom';

function Trends() {
    return (

        <div className='row' style={{ backgroundColor: 'rgb(83, 155, 183)'}}>
            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/fashion'>
                <img src='f1.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Fashion..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/skincare'>
                <img src='sc1.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>SkinCare..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/shoes'>
                <img src='shoes.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Variety of Shoes..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/haircare'>
                <img src='haircare.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>HairCare..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/accesories'>
                <img src='accesories.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Accesories..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/watches'>
                <img src='watch.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Watches..</h4>
            </div>

            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/makeup'>
                <img src='makeup.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Makeup..</h4>
            </div>
            
            <div className='col col-sm-6 col-md-6 col-lg-3 d-flex justify-content-center'>
                <Link to='/homedecor'>
                <img src='homedecor.avif' alt='trending-img' className='card-img my-3 p-2 rounded border border-dark shadow bg-light' />
                </Link>
                <h4 className='position-absolute fst-italic mt-5'>Home Decor..</h4>
            </div>
        </div>
    )
}

export default Trends