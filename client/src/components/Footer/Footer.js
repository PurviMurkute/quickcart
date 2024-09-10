import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <footer className='row mt-5 p-3 row-cols-1 row-cols-sm-1 row-cols-md-4 fixed-end' style={{ backgroundColor: 'rgb(83, 155, 183)' }}>
                <div className='col'>
                    <h4 className='my-2 mx-3 d-flex justify-content-center link-body-emphasis'>Discover the story behind our brand & what drives us to deliver the best to our customers.</h4>
                </div>
                <div className='col'>
                    <h4 className='my-2 mx-3'>
                        FOLLOW US
                    </h4>
                    <ul className="nav flex-column">
                        <li className="my-1 mx-3 nav-item fs-5"><Link to="#" className="nav-link p-0 text-body-secondary">FaceBook</Link></li>
                        <li className="my-1 mx-3 nav-item fs-5"><Link to="#" className="nav-link p-0 text-body-secondary">Instagram</Link></li>
                        <li className="my-1 mx-3 nav-item fs-5"><Link to="#" className="nav-link p-0 text-body-secondary">Twitter(X)</Link></li>
                    </ul>
                </div>
                <div className='col'>
                    <h4 className='my-2 mx-3'>
                        SHOPPING
                    </h4>
                    <ul className="nav flex-column">
                        <li className="nav-item my-1 mx-3 text-decoration-none "><a href="/shoes">Shoes</a></li>
                        <li className="nav-item my-1 mx-3 text-decoration-none"><a href="/makeup">MakeUp</a></li>
                        <li className="nav-item my-1 mx-3 text-decoration-none"><a href="/accesories">Accesories</a></li>
                        <li className="nav-item my-1 mx-3 text-decoration-none"><a href="/skincare">SkinCare</a></li>

                    </ul>
                </div>
                <div className='col'>
                    <h4 className='my-2 mx-3'>CONTACT US</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item my-1 mx-3 fs-5"><a href="mailto:purvimurkute51@gmail.com" className="nav-link p-0 text-body-secondary">purvimurkute51@gmail.com</a></li>
                        <li className="nav-item my-1 mx-3 fs-5"><a href="tel:+917020568134" className="nav-link p-0 text-body-secondary">+91 7020568134</a></li>
                        <li className="nav-item my-1 mx-3 fs-5"><a href="/" className="nav-link p-0 text-body-secondary">Nagpur, 440016</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer