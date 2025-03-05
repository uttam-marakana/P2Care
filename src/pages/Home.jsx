import React from "react";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
      <div className="group">
        <img
          src={Hero_img}
          className="img-1"
          alt="img"
          width="100%"
          height="695px"
        />
        <div className="text">
          <p>lorem ipsum</p>
          <h1>
            Best Platform <br /> For Patients
          </h1>
          <p>Lorem ipsum dolar lorem ipsum dolar</p>
          <div className="info d-flex m-3">
            <h3 className="doc">
              400+ <br /> Doctors
            </h3>
            <h3 className="spec">
              50+ <br /> Specialist
            </h3>
            <h3>
              45+ <br /> Cities
            </h3>
          </div>
          <a href="/appointment">
            <button className="ms-3 my-4 py-2 px-4 fs-5">Book Now</button>
          </a>
          <h4 className="mb-3">
            Book Appointments With Our Expert Doctors Near You
          </h4>
          <h6 className="mt-4">
            Get consultation for 50+ diseases across India
          </h6>
          <h6>In-person and online consultation with experienced doctors</h6>
          <h6>Extensive medical assistance throughout your treatment</h6>
        </div>
      </div>
      <div className="container serch">
        <Formik
          initialValues={{
            selectDisease: "",
            selectDoctor: "",
            map: "",
          }}
          onSubmit={async (values, actions) => {
            locationHandler(values);
            actions.resetForm();
          }}
        >
          <form>
            <div className="d-flex justify-content-between">
              <div className="d-flex">
                <div className="mx-4">
                  <label htmlFor="selectDisease">Specialist</label>
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
                <div className="mx-4">
                  <label htmlFor="selectDoctor">Search by</label>
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
                <div className="mx-4">
                  <label htmlFor="location">Locations</label>
                  <input
                    type="text"
                    id="location"
                    className="selector"
                    placeholder="Enter your location"
                  />
                </div>
              </div>
              <div>
                <button type="submit" className="btn fs-5 me-5">
                  Search
                </button>
              </div>
            </div>
          </form>
        </Formik>
      </div>
      <div className="services">
        <Services />
      </div>
      <div className="container">
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
      </div>
      <About />
      {/* <Appointment /> */}
      <FeedBack />
      {/* <Blogs /> */}
    </>
  );
}

export default Home;
