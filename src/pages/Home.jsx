import React from "react";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import Doctor_List from "../components/page_comp/Doctor_List";
import About from "./About";
import Appointment from "./Appointment";
import FeedBack from "./FeedBack";
import Blogs from "./Blogs";
import Services from "./Services";

//import Images
import Hero_img from "../assets/img/Group124.png";

function Home() {
  const navigate = useNavigate();

  const [selectDisease, setSelectDisease] = useState("Name or disease ");
  const [selectDoctor, setSelectDoctor] = useState("Doctor ");

  const locationHandler = async () => {
    try {
      await selectDisease();
      selectDoctor();
      navigate("/doctor");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero-sect">
        <div className="">
          <div className="hero-img">
            <img src={Hero_img} className="img-1 img-fluid" alt="img" />
          </div>
          <div className="hero-text">
            <h3>Welcome to P2Care</h3>
            <h1>Best Platform For Patients</h1>
            <h5>give our best to save patients </h5>
            <div className="hero-info ">
              <h3 className="hero-doc">
                <p>400+</p> <span>Doctors</span>
              </h3>
              <h3 className="hero-doc">
                <p>50+</p> <span>Specialist</span>
              </h3>
              <h3 className="hero-doc" style={{ borderRight: "none" }}>
                <p>45+</p>
                <span>Cities</span>
              </h3>
            </div>

            <div className="btn-space">
              <button className="hero-btn">
                <Link to="/appointment">Book Now</Link>
              </button>
            </div>

            <div className="hero-msg">
              <h4 className="mb-3 ">
                Book Appointments With Our Expert Doctors Near You
              </h4>
              <div className="hero-msg-point">
                <h6>
                  <FaCheckCircle className="hero-i" />
                  <p>Get consultation for 50+ diseases across India</p>
                </h6>
                <h6>
                  <FaCheckCircle className="hero-i" />
                  <p>In-person and online consultation with experienced Drs</p>
                </h6>
                <h6>
                  <FaCheckCircle className="hero-i" />
                  <p>Extensive medical assistance throughout your treatment</p>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-sect">
        <div className="search">
          <Formik
            initialValues={{
              selectDisease: "",
              selectDoctor: "",
              location: "",
            }}
            onSubmit={async (values, actions) => {
              locationHandler(values);
              actions.resetForm();
            }}
          >
            <form>
              <div className="search-form">
                <div className="search-input">
                  <label className="search-label" htmlFor="selectDisease">
                    Specialist
                  </label>
                  <select
                    id="selectDisease"
                    className="selector"
                    onChange={(e) => setSelectDisease(e.currentTarget.value)}
                  >
                    {[
                      "Name or disease",
                      "top-center",
                      "top-end",
                      "middle-start",
                      "middle-center",
                      "middle-end",
                      "bottom-start",
                      "bottom-center",
                      "bottom-end",
                    ].map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="search-input">
                  <label htmlFor="selectDoctor" className="search-label">
                    Search by
                  </label>
                  <select
                    id="selectDoctor"
                    className="selector"
                    onChange={(e) => setSelectDoctor(e.currentTarget.value)}
                  >
                    {[
                      "Doctor",
                      "top-center",
                      "top-end",
                      "middle-start",
                      "middle-center",
                      "middle-end",
                      "bottom-start",
                      "bottom-center",
                      "bottom-end",
                    ].map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="search-input">
                  <label htmlFor="location" className="search-label">
                    Locations
                  </label>
                  <input
                    type="text"
                    id="location"
                    className="selector"
                    placeholder="Enter your location"
                  />
                </div>

                <div className="search-btn-container">
                  <button type="submit" className="search-btn">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </Formik>
        </div>
      </div>

      {/* <div className="services">
        <Services />
      </div> */}

      {/* <div className="container">
        <div className="services mt-5">
          <h4>Doctors</h4>
          <h2>Select Your Doctor</h2>
        </div>
        <div className="text-end me-5 mt-5">
          <button className="indicator me-3">
            <FaChevronLeft />
          </button>
          <button className="indicator">
            <FaChevronRight />
          </button>
        </div>
        <div className="d-flex justify-content-center">
          <Doctor_List
            img="assets/img/member.png"
            title="DR. Addition Smith"
            sec="Dentist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img="assets/img/member.png"
            title="DR. Addition Smith"
            sec="Dentist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img="assets/img/member.png"
            title="DR. Addition Smith"
            sec="Dentist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img="assets/img/member.png"
            title="DR. Addition Smith"
            sec="Dentist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img="assets/img/member.png"
            title="DR. Addition Smith"
            sec="Dentist"
            profile="/doctoreprofile"
          />
        </div>
      </div> */}

      {/* <About /> */}
      {/* <Appointment /> */}
      {/* <FeedBack /> */}
      {/* <Blogs /> */}
    </>
  );
}

export default Home;
