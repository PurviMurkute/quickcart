import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import toast, { Toaster } from "react-hot-toast";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const [currentUser, setcurrentUser] = useState({});
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
      setcurrentUser(currentUser);
    }
  }, []);

  const handleLogout = () => {
    if (currentUser) {
      localStorage.removeItem("currentUser");
      toast.success("Logged out successfully");
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
  };

  const handleLogin = () => {
    if (!currentUser) {
      setTimeout(() => {
        window.location.href = "/login";
      }, 3000);
    }
  };

  return (
    <div>
      <nav
        className="fixed-top d-flex justify-content-between justify-content-md-start align-items-center shadow py-1 px-2"
        style={{ backgroundColor: "rgb(83, 155, 183)" }}
      >
        <img src="logo1.png" alt="logo" className="shop-logo" />
        <div className="d-none d-sm-flex align-items-center">
          <Link
            to="/"
            className="nav-item text-dark mt-3 px-3 text-decoration-none fw-bold"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-item text-dark mt-3 px-3 text-decoration-none fw-bold"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="nav-item text-dark mt-3 px-3 text-decoration-none fw-bold"
          >
            Contact
          </Link>
          <Link
            to="/products/Mens"
            className="nav-item text-dark mt-3 px-3 text-decoration-none fw-bold"
          >
            Men
          </Link>
          <Link
            to="/products/women"
            className="nav-item text-dark mt-3 px-3 text-decoration-none fw-bold"
          >
            Women
          </Link>
          {currentUser && currentUser._id ? (
            <span className="home-logout" onClick={handleLogout}>
              <h5>Logout</h5>
            </span>
          ) : (
            <Link to="/login" className="home-logout" onClick={handleLogin}>
              <h5>Login</h5>
            </Link>
          )}
        </div>
        <LuMenu
          className="fs-3 text-dark fw-bold d-block d-sm-none"
          style={{ cursor: "pointer" }}
          onClick={toggleMenu}
        />
      </nav>
      <div>
        {isMenuOpen && (
          <div
            className="position-fixed top-0 end-0 shadow-lg"
            style={{
              width: "80vw",
              height: "100vh",
              zIndex: 1050,
              backgroundColor: "rgb(83, 155, 183)",
              display: "flex",
              flexDirection: "column",
              paddingTop: "70px",
            }}
          >
            <button
              className="btn btn-close position-absolute top-0 end-0 m-3"
              onClick={toggleMenu}
              aria-label="Close"
              style={{ zIndex: 1060 }}
            ></button>
            <div className="d-flex flex-column justify-content-between px-4" style={{ height: "100%" }} >
              <div className="d-flex flex-column align-items-start w-100 gap-3 flex-grow-1">
                <Link
                  to="/"
                  className="nav-item text-dark my-2 text-decoration-none fw-bold"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-item text-dark my-2 text-decoration-none fw-bold"
                  onClick={toggleMenu}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="nav-item text-dark my-2 text-decoration-none fw-bold"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
                <Link
                  to="/products/Mens"
                  className="nav-item text-dark my-2 text-decoration-none fw-bold"
                  onClick={toggleMenu}
                >
                  Men
                </Link>
                <Link
                  to="/products/women"
                  className="nav-item text-dark my-2 text-decoration-none fw-bold"
                  onClick={toggleMenu}
                >
                  Women
                </Link>
              </div>
              <hr />
              <div className="flex-shrink-0 pb-4">
                {currentUser && currentUser._id ? (
                  <span
                    className="my-2"
                    onClick={() => {
                      handleLogout();
                      toggleMenu();
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <h5>Logout</h5>
                  </span>
                ) : (
                  <Link
                    to="/login"
                    className="my-2 text-decoration-none text-dark"
                    onClick={() => {
                      handleLogin();
                      toggleMenu();
                    }}
                  >
                    <h5>Login</h5>
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default Navbar;
