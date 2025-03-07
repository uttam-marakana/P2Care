import React from "react";
import { MdGroups } from "react-icons/md";
import { MdLibraryAddCheck } from "react-icons/md";
import { Link } from "react-router-dom";
import about_img from "../assets/img/group110.png";

const About = () => {
  return (
    <div className="container">
      <div className="about-cont">
        <div className="about-left">
          <div className="about">
            <h4 className=" ">About Us</h4>
            <h2 className="">
              We Provide Best Doctor Consultation For You
            </h2>
            <p className="about-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              dignissim lectus
            </p>
            <div className="about-icon-group">
              <div>
                <div className="about-icon-sect">
                  <MdLibraryAddCheck className="abt-i" />
                  <h5>All Types of Doctors</h5>
                </div>
                <p>Lorem ipsum dolor sit amet adipiscing elit sed doesmo</p>
              </div>
              <div>
                <div className="about-icon-sect">
                  <MdLibraryAddCheck className="abt-i" />
                  <h5>Get Quick Appointment</h5>
                </div>
                <p>Lorem ipsum dolor sit amet adipiscing elit sed doesmo</p>
              </div>
            </div>
            <button className="about-btn">
              <Link to="/appointment">Book Now</Link>
            </button>
          </div>
        </div>

        <div className="about-right">
          <div className="about-img-group">
            <div className="about-img">
              <img className="img-fluid" src={about_img} alt="img" />
            </div>
            <div className="about-patients">
              <MdGroups />
              <h5 className="">2,200 {" "}+</h5>
              <p className="text-dark">Satisfied Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
