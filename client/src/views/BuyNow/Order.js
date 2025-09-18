import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Order.css';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

function Order() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: ""
  })

  const order = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/order`, {
      name: user.name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      paymentMethod: user.paymentMethod
    })

    if (response.data.success) {
      toast.success(response.data.message)

      setUser({
        name: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: ''
      })
    }
    else {
      toast.error(response.data.message)
    }
  }
  return (
    <div className='contact-container'>
      <Navbar/>
      <div className='div'></div>
      <h4 className='contact-msg'><b>Complete Your Purchase..!</b></h4>
      <form className='contact-form'>
      <h4 className='contact-heading'><b>Order Now</b></h4>
        <input
          type='text'
          placeholder='Enter your Fullname'
          className='input-box'
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value })
          }}
        />
        <input
          type='email'
          placeholder='Enter Your Email'
          className='input-box'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }}
        />
        <input
          type='phone'
          placeholder='Enter Your Phone Number'
          className='input-box'
          value={user.phone}
          onChange={(e) => {
            setUser({ ...user, phone: e.target.value })
          }}
        />
        <input
          type='address'
          placeholder='Enter Your address'
          className='input-box'
          value={user.address}
          onChange={(e) => {
            setUser({ ...user, address: e.target.value })
          }}
        />
        <select
        type='payment method'
          placeholder='Payment Method'
          className='input-box'
          value={user.paymentMethod}
          onChange={(e) => {
            setUser({ ...user, paymentMethod: e.target.value })
          }}
          >
          <option value=''>Payment Method</option>
          <option value='cash-on-dilevery'>Cash on Dilevery</option>
        </select>


        <button
          type='button'
          className='btn'
          onClick={order}
        >
          place order
        </button>
      </form>

      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Order