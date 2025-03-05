import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LogoFull from "../../assets/img/logo2.png";
import LogoIcon from "../../assets/img/logo.png";

function Navbar() {
  return (
    <>
      {/* Banner Section */}

      <div className="banner-full">
        <div className="content-container">
          <div className="mail">
            <Link to="mailto:contact123@gmail.com">
              <IoIosMail className="icon me-2" />
              <p>contact123@gmail.com</p>
            </Link>
          </div>
          <div className="social">
            <Link to="#" className="icon">
              <TiSocialFacebook />
            </Link>
            <Link to="#" className="icon">
              <AiFillInstagram />
            </Link>
            <Link to="#" className="icon">
              <FaXTwitter />
            </Link>
          </div>
        </div>
      </div>

      {/* Logo & Contact Info Section */}

      <div className="nav-sect">
        <div className="">
          <img
            src={LogoFull}
            className="img-fluid"
            alt="logo"
            width="163px"
            height="90px"
          />
        </div>
        <div className="contact">
          <div className="contact_info">
            <div className="text-center">
              <p>Send Us Mail</p>
              <Link to="mailto:" className="text-dark">
                <IoIosMail className="cont-icon me-2" />
                contact123@gmail.com
              </Link>
            </div>
            <div className="text-center">
              <p>Call To Us</p>
              <Link to="tel:+" className="text-dark">
                <FaPhoneAlt className="cont-icon me-2" />
                01234569872
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}

      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-dark" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/dr-profile">
                  Doctor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/services">
                  Service Areas
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/book-appointment">
                  Book Appointment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/hospital">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
