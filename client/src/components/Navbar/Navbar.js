import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import toast, { Toaster } from 'react-hot-toast';

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      console.log('User data found:', userData);
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    toast.success('Logged out successfully');
    setTimeout(() => {
      window.location.href = '/login';
    }, 3000);
  };

  return (
    <div>
      <nav className='navbar fixed-top d-flex justify-content-start shadow py-1' style={{ backgroundColor: "rgb(83, 155, 183)" }}>
        <img src='q.png' alt='logo' className='shop-logo' />
        <Link to='/' className='nav-item bg-dark mt-3 mx-5 py-0 px-2 rounded text-decoration-none' style={{ color: 'rgb(116, 196, 227)' }}>Home</Link>
        <Link to='/About' className='nav-item bg-dark mt-3 mx-5 py-0 px-2 rounded text-decoration-none' style={{ color: 'rgb(116, 196, 227)' }}>About</Link>
        <Link to='/Contact' className='nav-item bg-dark mt-3 mx-5 rounded py-0 px-2 text-decoration-none' style={{ color: 'rgb(116, 196, 227)' }}>Contact</Link>
        {!user ? (
          <Link to='/login' className='home-logout'>
            <h5>Login</h5>
          </Link>
        ) : (

          <span className='home-logout' onClick={handleLogout}>
            <h5>Logout</h5>
          </span>
        )}
      </nav>
      <Toaster />
    </div>
  );
}

export default Navbar;
