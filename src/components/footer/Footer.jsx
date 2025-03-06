import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Logo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer">

        {/* Newsletter */}
        <div className="container newsletter">
          <div className="  ">
            <h4 className="mb-4">Subscribe Our Newsletter</h4>
            <p className="text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et eiusmod.
            </p>
          </div>
          <div className="email-sect">
            <form
              // onClick=""
              className="d-flex"
            >
              <input
                type="email"
                name="email"
                id="email"
                className="email-btn p-2"
                placeholder="Your Email"
              />
              <button type="submit" className="subscribe-btn ">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <div className="borderLine"></div>

        {/* Footer Content */}
        <footer className="footer">
          <div className="container footer-container ">
            <div className="footer-left">
              <div className="footer-logo">
                <img src={Logo} alt="logo" className="img-fluid " />
              </div>
              <p className="footer-text">
                Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </p>
              <div className="social-icons">
                <Link to="#" className="icon">
                  <FaFacebook />
                </Link>
                <Link to="#" className="icon">
                  <AiFillInstagram />
                </Link>
                <Link to="#" className="icon">
                  <FaXTwitter />
                </Link>
              </div>
            </div>

            {/* Social Links */}
            <div className="footer-links">
              <ul className="fcont">
                <p className="fw-bold">Quick Links</p>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/dr-list">Doctors</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <ul className="fcont">
                <p className="fw-bold">Useful Links</p>
                <li>
                  <Link to="/#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/#">T & C</Link>
                </li>
                <li>
                  <Link to="/#">Disclaimer</Link>
                </li>
                <li>
                  <Link to="/#">FAQ</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}

            <div className="footer-call">
              <div className="call-box">
                <div className="call-icon">
                  <FaPhoneAlt />
                </div>
                <div className="call-text">
                  <h6>Call Us Today</h6>
                  <p>+91 3256523561</p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Divider line */}
        <div className="borderLine"></div>

        {/* Copyright Section */}
        <h5 className="container pt-3">
          Copyright &copy; <em>2025.</em> All rights reserved.
        </h5>
      </div>
    </>
  );
}

export default Footer;
