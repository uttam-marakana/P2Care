import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/img/logo1.png";

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
                <a href="/#">
                  <span>
                    <AiFillInstagram />
                  </span>
                </a>
              </div>
              <div className="i_box me-2">
                <a href="/#">
                  <span>
                    <FaFacebook />
                  </span>
                </a>
              </div>
              <div className="i_box">
                <a href="/#">
                  <span>
                    <FaLinkedin />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-50">
            <div className="d-flex justify-content-evenly">
              <ul className="fcont fcont_1">
                <p className="fw-bold">Quick Links</p>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/dr-list">Doctors</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
              <ul className="fcont">
                <p className="fw-bold">Useful Links</p>
                <li>
                  <a href="/#">Privacy Policy</a>
                </li>
                <li>
                  <a href="/#">T & C</a>
                </li>
                <li>
                  <a href="/#">Desclaimer</a>
                </li>
                <li>
                  <a href="/#">FAQ</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-25">
            <div className="cut">
              <div className="d-flex">
                <div className="call">
                  <a href="/#">
                    <FaPhoneAlt />
                  </a>
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
