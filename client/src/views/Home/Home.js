import React, { useEffect, useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import Offer from "../../components/ProductCards/Offer";
import axios from "axios";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [offers, setoffers] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadOffers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/offers`
      );

      setoffers(response.data.data);
    } catch (error) {
      toast.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      toast.loading("Waking up server...", { id: "server-toast" });
    } else {
      toast.dismiss("server-toast");
      toast.success("Server waked up");
    }
  }, [loading]);

  useEffect(() => {
    loadOffers();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="">
        <div
          className="container home-front-view"
          style={{ backgroundColor: "rgb(242, 242, 242)" }}
        >
          <div
            className="col-6 home-container"
            style={{ backgroundColor: "rgb(83, 155, 183)" }}
          >
            <img src="img2.avif" alt="home-img" className="home-img1" />
            <img src="img3.avif" alt="home-img" className="home-img2" />
            <img src="img1.avif" alt="home-img" className="home-img3" />
          </div>
          <div
            className="col-6 wlc-msg text-center p-2 "
            style={{ color: "rgb(45, 101, 123)" }}
          >
            <h4 className="q-wlc">
              <i className="text-center">
                <b className="fs-4 greeting-msg text-center">
                  {" "}
                  WELCOME TO QUICKCART{" "}
                  <p>Your One-Stop Destination for Fashion & Lifestyle!</p>{" "}
                </b>
                <br />
                <p className="fs-4 about-quickcart">
                  🛍️ Discover a world of style and elegance with our curated
                  collections 🛍️
                </p>
              </i>
            </h4>
            <br />
            <h6 className="wlc-description text-center fs-6">
              Discover the latest trends and exclusive styles, curated just for
              you. Whether you're looking for fashion-forward clothing, timeless
              accessories, or must-have beauty products, we've got you covered.
              Shop with ease and enjoy seamless browsing, fast shipping, and
              unbeatable prices. Elevate your wardrobe today and make every
              outfit count. Your next style upgrade is just a click away!
              <br />
              <br />
              <p className="fs-5">Happy Shopping!</p>
            </h6>
            <hr />
          </div>
        </div>
        <div className="container">
          <h5
            className="popular-heading text-center fst-italic mt-5 p-3 fw-bold"
            style={{ color: "rgb(45, 101, 123)" }}
          >
            WHY SHOP WITH US?
          </h5>
          <div className="feature-container">
            <div
              className="features rounded shadow "
              style={{ backgroundColor: "rgb(83, 155, 183)" }}
            >
              <img
                src="quality-icon.png"
                alt="icon"
                className="feature-icon rounded"
              />
              <h5 className="feature-title text-center text-white fw-bold">
                High-Quality Products
              </h5>
              <p className="feature-description text-center text-white">
                We prioritize quality and durability in every item we offer.
              </p>
            </div>
            <div
              className="features rounded shadow "
              style={{ backgroundColor: "rgb(83, 155, 183)" }}
            >
              <img
                src="exclusivedeals-icon.png"
                alt="icon"
                className="feature-icon rounded"
              />
              <h5 className="feature-title text-center text-white fw-bold">
                Exclusive Deals
              </h5>
              <p className="feature-description text-center text-white">
                Enjoy fantastic discounts and seasonal promotions that make
                luxury more affordable.
              </p>
            </div>
            <div
              className="features rounded shadow "
              style={{ backgroundColor: "rgb(83, 155, 183)" }}
            >
              <img
                src="shipping-icon.png"
                alt="icon"
                className="feature-icon rounded"
              />
              <h5 className="feature-title text-center text-white fw-bold">
                Fast & Reliable Shipping
              </h5>
              <p className="feature-description text-center text-white">
                Get your favorite items delivered right to your doorstep in no
                time.
              </p>
            </div>
            <div
              className="features rounded shadow "
              style={{ backgroundColor: "rgb(83, 155, 183)" }}
            >
              <img
                src="exchange-icon.png"
                alt="icon"
                className="feature-icon rounded"
              />
              <h5 className="feature-title text-center text-white fw-bold">
                Easy Returns & Exchanges
              </h5>
              <p className="feature-description text-center text-white">
                Shop with confidence knowing that we have a hassle-free return
                policy.
              </p>
            </div>
          </div>
        </div>

        <h5
          className="popular-heading text-center text-white fst-italic mt-3 p-2 fw-bold"
          style={{ backgroundColor: "rgb(83, 155, 183)" }}
        >
          POPULAR IN OUR STORE
        </h5>
        <div
          className="container trend-cards"
          style={{ backgroundColor: "rgb(242, 242, 242)" }}
        >
          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5  ms-5">
              Fashion..
            </h4>
            <Link to="/fashion">
              <img
                src="f1.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5  ms-5">
              SkinCare..
            </h4>
            <Link to="/products/skincare">
              <img
                src="sc1.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              Shoes..
            </h4>
            <Link to="/products/shoes">
              <img
                src="shoes.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              HairCare..
            </h4>
            <Link to="/products/haircare">
              <img
                src="haircare.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              Accesories..
            </h4>
            <Link to="/products/accesories">
              <img
                src="accesories.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              Watches..
            </h4>
            <Link to="/products/watches">
              <img
                src="watch.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              Makeup..
            </h4>
            <Link to="/products/makeup">
              <img
                src="makeup.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>

          <div className="popular-cards">
            <h4 className="popular-title position-absolute fst-italic mt-5 ms-5">
              Home Decor..
            </h4>
            <Link to="/products/HomeDecor">
              <img
                src="homedecor.avif"
                alt="trending-img"
                className="card-img my-3 p-1 rounded border border-dark shadow bg-light"
              />
            </Link>
          </div>
        </div>
        <h5
          className="offer-heading text-center text-white fst-italic m-3 mt-3 p-2 fw-bold"
          style={{ backgroundColor: "rgb(83, 155, 183)" }}
        >
          OFFERS ON TOP BRANDS
        </h5>

        <div className="container">
          <div className="offer-container row px-5 py-3 my-3">
            {offers.map((offer, i) => {
              const { _id, image, logo, category, discount } = offer;

              return (
                <div
                  key={i}
                  className="col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 my-3 shadow rounded"
                >
                  <Offer
                    _id={_id}
                    image={image}
                    logo={logo}
                    category={category}
                    discount={discount}
                    loadOffers={loadOffers}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;
