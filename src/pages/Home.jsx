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
import Dr_img from "../assets/img/member.png";

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
          <div className="img-banner">
            <img src={Hero_img} className="hero-img img-fluid" alt="img" />
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
                  <label className="search-label" htmlFor="selectDoctor">
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
                  <label className="search-label" htmlFor="location">
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

      {/* Service Section */}
      <div className="service-sect">
        <Services />
      </div>

      {/* Doctor Section */}
      <div className="container">
        <div className="dr-sect">
          <div className="text-center">
            <h4>Doctors</h4>
            <p>Select Your Doctor</p>
          </div>
          <div className="">
            <button className="dr-btn">
              <FaChevronLeft />
            </button>
            <button className="dr-btn">
              <FaChevronRight />
            </button>
          </div>
        </div>
        <div className="dr-list">
          <Doctor_List
            img={Dr_img}
            title="DR. Julius"
            sec="Dentist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img={Dr_img}
            title="DR. Yami"
            sec="surgen"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img={Dr_img}
            title="DR. Clark"
            sec="authopedic"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img={Dr_img}
            title="DR. Mark"
            sec="TB specialist"
            profile="/doctoreprofile"
          />
          <Doctor_List
            img={Dr_img}
            title="DR. Smith"
            sec="cancer specialist"
            profile="/doctoreprofile"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="about-sect">
        <About />
      </div>

      {/* Appointment Section */}
      <div className="appointment-sect">
        <Appointment />
      </div>

      {/* FeedBack Section */}
      <div className="feedback-sect">
        <FeedBack />
      </div>

      {/* Blog Section */}
      <div className="blog-sect">{/* <Blogs /> */}</div>
    </>
  );
}

export default Home;
