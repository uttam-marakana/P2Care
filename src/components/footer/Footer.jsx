import React from "react";
// import { Container } from 'react-bootstrap'
import { FaPhoneAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer container">
        <div className="d-flex">
          <div className="nsettler">
            <h4 className="mb-4">Subscribe Our Newsletter</h4>
            <p className=" fw-bold">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit,
              sed do eiusmod tempor <br /> incididunt ut labore et eiusmod.
            </p>
          </div>
          <div className="emailsec">
            <form>
              <input
                type="email"
                name="email"
                id="email"
                className="emailbtn text-light ps-5 p-3"
                placeholder="Your Email"
              />
              <button type="submit" className="subscribe ms-4 p-3">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="footer_2">
          <div className="d-flex">
            <div className="w-25">
              <img src="assets/img/logo1.png" alt="" />
              <p className=" fw-bold">
                Lorem ipsum dolor sit amet, consectet <br /> adipiscing elit,
                sed do eiusmod tempor <br /> incididunt ut labore et dolore.
              </p>
              <div className="d-flex">
                <div className="i_box me-2">
                  <a href="/err">
                    <span>
                      <AiFillInstagram />
                    </span>
                  </a>
                </div>
                <div className="i_box me-2">
                  <a href="/err">
                    <span>
                      <FaFacebook />
                    </span>
                  </a>
                </div>
                <div className="i_box">
                  <a href="/err">
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
                    <a href="/doctor">Doctors</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
                <ul className="fcont">
                  <p className="fw-bold">Useful Links</p>
                  <li>
                    <a href="/err">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/err">T & C</a>
                  </li>
                  <li>
                    <a href="/err">Desclaimer</a>
                  </li>
                  <li>
                    <a href="/err">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-25">
              <div className="cut">
                <div className="d-flex">
                  <div className="call">
                    <a href="/err">
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
        </div>
        <hr />
        <p>
          Copyright &copy; <em>2023.</em> All rights reserved.
        </p>
      </div>
    </>
  );
}

export default Footer;
