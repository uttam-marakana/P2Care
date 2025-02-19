import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo2.png";

function Navbar() {
  return (
    <>
      <header className="">
        <div className="w-100 ">
          <a href="mailto:" className="display-flex justify-content-end">
            <IoIosMail />
            contact123@gmail.com
          </a>
        </div>

        <div className="d-flex px-5 justify-content-between ">
          <img src={Logo} alt="logo" width="163px" height="90px" />
          <div className="contact align-content-center">
            <div className="d-flex">
              <div className="mail">
                <p>Send Us Mail</p>
                <a href="mailto:" className="text-dark">
                  <IoIosMail />
                  contact123@gmail.com
                </a>
              </div>
              <div className="contact_number ms-5">
                <p>Call To Us</p>
                <a href="tel:+" className="text-dark">
                  <FaPhoneAlt />
                  01234569872
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav className="navbar container-fluid navbar-expand-lg bg-body-tertiary  ">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-dark"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/doctoreprofile">
                    Doctor
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/services">
                    Service Areas
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/blog">
                    Blog
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/bookAppointment">
                    Book Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark" to="/hospital">
                    Contact Us{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
