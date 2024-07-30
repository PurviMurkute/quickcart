import React, {useState} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Contact.css';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';

function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const contact = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/contact`, {
      name: user.name,
      email: user.email,
      phone: user.phone,
      message: user.message
    })

    if (response.data.success) {
      toast.success(response.data.message)

      setUser({
        name: '',
        email: '',
        phone: '',
        message: ''
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
      <h4 className='contact-msg'><b>WANT TO KNOW MORE? <br/> REACH OUT TO US!</b></h4>
      <form className='contact-form'>
      <h4 className='contact-heading'><b>Contact Us</b></h4>
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
          type='message'
          placeholder='Enter Your Message'
          className='input-box'
          value={user.message}
          onChange={(e) => {
            setUser({ ...user, message: e.target.value })
          }}
        />

        <button
          type='button'
          className='btn'
          onClick={contact}
        >
          Submit
        </button>
      </form>

      <div className='contact-greeting-para'>
        <h5>We're Here to Help!</h5>
          <h6>At QUICKCART, your satisfaction is our top priority. Whether you have a question about our products, need assistance with an order, or just want to share your shopping experience, our dedicated customer support team is here to help. Feel free to reach out to us through the contact form above, and we’ll get back to you as soon as possible. We value your feedback and are committed to providing the best service possible to make your shopping experience with us exceptional. Thank you for choosing QUICKCART!</h6>
        </div>

      <Footer/>
      <Toaster/>
    </div>
  )
}

export default Contact