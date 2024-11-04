import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Footer from '../../components/Footer/Footer';

function Offers() {
    const [offers, setOffers] = useState([]);
    const {id} = useParams();

    const loadOffers = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/offers/id=${id}`)

        setOffers(response.data.data)
    }

    useEffect(() => {
        loadOffers()
    }, [])


    return (
        <div>
            <p>{id}</p>
            <div style={{ height: '25px', backgroundColor: 'rgb(83, 155, 183)' }}></div>
            <h4 className="w-title p-3 mt-5 text-center" style={{ color: "rgb(45, 101, 123)" }}>Offers</h4>
            <div className="">
                <div className="row px-5" style={{ backgroundColor: "rgb(83, 155, 183)" }}>
                    {offers.map((offer, i) => (
                        <div key={i} className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-4">
                            <Offeritems
                                _id={offer._id}
                                image={offer.image}
                                title={offer.title}
                                quantity={offer.quantity}
                                actualprice={offer.actualprice}
                                offerprice={offer.offerprice}
                                discount={offer.discount}
                                
                            />
                        </div>
                    ))}
                </div>
            </div><br /><br />
            <Footer />
        </div>
    )
};

const Offeritems = ({ _id, image, title, quantity, actualprice, offerprice, discount }) => {
    return (
        <div className="card h-100">
            <p>{_id}</p>
            <img src={image} alt="offers" className="card-img-top" height="250px" style={{ objectFit: 'cover' }} />
            <div className="card-body">
                <h4 className="card-title text-center">{title}</h4>
                <p className='text-center'>{quantity}</p>
                <h6 className='text-center'>
                <del className="card-text">₹{actualprice}</del>
                <span className="card-text">  ₹{offerprice}</span>
                <span className=''>  ({discount})</span>
                </h6>
                <button type='button' className='atc-btn d-block my-0 mx-auto mt-3 border border-0 py-1 px-2 my-1 mx-3 rounded' style={{ backgroundColor: "rgb(83, 155, 183)" }}>Buy Now</button>
            </div>
        </div>
    );
};

export default Offers