import React from "react";
import { MdGroups } from "react-icons/md";

const About = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div className="w-50 mx-5">
          <div className="about">
            <h4 className="text-info mb-3">About Us</h4>
            <h2 className="mb-4">
              We Provide Best Doctor <br /> Consultation For You
            </h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
              dignissim lectus
            </p>
            <div className="d-flex">
              <div className="me-5">
                <h5>All Types of Doctors</h5>
                <p>
                  Lorem ipsum dolor sit amet <br />
                  adipiscing elit sed doesmo
                </p>
              </div>
              <div>
                <h5>Get Quick Appointment</h5>
                <p>
                  Lorem ipsum dolor sit <br /> amet adipiscing elit sed doesmo
                </p>
              </div>
            </div>
            <a
              href="/appointment"
              className="btn btn-primary ms-2 mt-4 py-2 px-4 fs-5"
            >
              Book Now
            </a>
          </div>
        </div>

        <div className="w-50">
          <div className="prt">
            <div className="ptgroup">
              <img src="assets/img/group110.png" alt="img" />
            </div>
            <div className="patint">
              <div className="ppl_group">
                <MdGroups />
              </div>
              <h5 className="ms-5 text-info text-center">2,200+</h5>
              <p>Satisfied Patients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
