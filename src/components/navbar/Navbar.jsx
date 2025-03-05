import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo2.png";

function Navbar() {
  return (
    <>
      {/* <header className=""> */}
      {/* //---- Banner Start ----//*/}
      <div className="w-100 ">
        <Link to="mailto:" className="">
          <IoIosMail className="mx-1 " />
          contact123@gmail.com
        </Link >
      </div>
      <div className="d-flex px-5 justify-content-between padd">
        <img src={Logo} alt="logo" width="163px" height="90px" />
        <div className="contact align-content-center">
          <div className="d-flex">
            <div className="mail">
              <p>Send Us Mail</p>
              <Link to="mailto:" className="text-dark">
                <IoIosMail />
                contact123@gmail.com
              </Link >
            </div>
            <div className="contact_number ms-5">
              <p>Call To Us</p>
              <Link to="tel:+" className="text-dark">
                <FaPhoneAlt />
                01234569872
              </Link >
            </div>
          </div>
        </div>
      </div>
      {/* //---- Banner End ----//*/}

      {/* //---- Navbar Start ----// */}
      <nav className="navbar navbar-expand-lg bg-light">
        <div className=" container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="container navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ">
                <Link
                  className="nav-link active text-dark"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/dr-profile">
                  Doctor
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/services">
                  Service_Areas
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/blogs">
                  Blog
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/book-appointment">
                  Book_Appointment
                </Link>
              </li>
              <li className="nav-item ps-3">
                <Link className="nav-link text-dark" to="/hospital">
                  Contact Us{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* //---- Navbar End ----// */}
    </>
  );
}

export default Navbar;
