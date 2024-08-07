import React, { useState } from 'react';
import axios from 'axios';
import toast, {Toaster} from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


function Signup() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    dob: ""
  })

  const signup = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
      name: user.name,
      email: user.email,
      password: user.password,
      dob: user.dob
    })

    if (response.data.success) {
      toast.success(response.data.message)

      setUser({
        name: '',
        email: '',
        password: '',
        dob: ''
      })
    }
    else {
      toast.error(response.data.message)
    }
  }

  return (
    <div className='user-container'>
      <Navbar/>
      <div className='div'></div>
      <h4 className='greetings'><b>Welcome! Let's Get You Registered</b></h4>
      <div>
      <form className='user-form'>
        <h1 className='reg-heading'>Register Now</h1>
        <label for="name">Name:</label>
        <input
          type='text'
          placeholder='Enter your Fullname'
          className='input-box'
          value={user.name}
          onChange={(e) => {
            setUser({ ...user, name: e.target.value })
          }}
        />
        <label for="email">Email:</label>
        <input
          type='email'
          placeholder='Enter Your Email'
          className='input-box'
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value })
          }}
        />
        <label for="password">Password:</label>
        <input
          type='password'
          placeholder='Enter Your Password'
          className='input-box'
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value })
          }}
        />

        <button
          type='button'
          className='btn'
          onClick={signup}
        >
          Register
        </button>
        <Link to='/login' className='link'>Already have an account? Login</Link>
      </form>
      </div>
      <Toaster />
      <Footer/>
    </div>
  )
}

export default Signup