import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/img/logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container d-flex">
          <div className="nsettler">
            <h4 className="mb-4">Subscribe Our Newsletter</h4>
            <p className=" text-wrap">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et eiusmod.
            </p>
          </div>
          <div className="email-sect">
            <form>
              <input
                type="email"
                name="email"
                id="email"
                className="email-btn text-light p-2"
                placeholder="Your Email"
              />
              <button type="submit" className="subscribe ms-3 p-2">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="container borderLine d-flex">
          <div className="w-25 d-flex flex-column">
            <img src={Logo} alt="" />
            <p className=" fw-bold">
              Lorem ipsum dolor sit amet, consectet <br /> adipiscing elit, sed
              do eiusmod tempor <br /> incididunt ut labore et dolore.
            </p>
            <div className="d-flex align-items-center">
              <div className="i_box me-2">
                <Link to="/#">
                  <span>
                    <AiFillInstagram />
                  </span>
                </Link >
              </div>
              <div className="i_box me-2">
                <Link to="/#">
                  <span>
                    <FaFacebook />
                  </span>
                </Link >
              </div>
              <div className="i_box">
                <Link to="/#">
                  <span>
                    <FaLinkedin />
                  </span>
                </Link >
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="d-flex justify-content-evenly">
              <ul className="fcont fcont_1">
                <p className="fw-bold">Quick Links</p>
                <li>
                  <Link to="/about">About Us</Link >
                </li>
                <li>
                  <Link to="/services">Services</Link >
                </li>
                <li>
                  <Link to="/dr-list">Doctors</Link >
                </li>
                <li>
                  <Link to="/contact">Contact</Link >
                </li>
              </ul>
              <ul className="fcont">
                <p className="fw-bold">Useful Links</p>
                <li>
                  <Link to="/#">Privacy Policy</Link >
                </li>
                <li>
                  <Link to="/#">T & C</Link >
                </li>
                <li>
                  <Link to="/#">Desclaimer</Link >
                </li>
                <li>
                  <Link to="/#">FAQ</Link >
                </li>
              </ul>
            </div>
          </div>
          <div className="w-25">
            <div className="cut">
              <div className="d-flex">
                <div className="call">
                  <Link to="/#">
                    <FaPhoneAlt />
                  </Link >
                </div>
                <div className="cut-1">
                  <h6>Call Us Today</h6>
                  <p className="text-dark">+91 3256523561</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h5 className="container borderLine pt-3">
          Copyright &copy; <em>2023.</em> All rights reserved.
        </h5>
      </div>
    </>
  );
}

export default Footer;
