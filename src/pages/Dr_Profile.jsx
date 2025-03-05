import React from "react";
import { FaChevronRight, FaStar } from "react-icons/fa";
import Aboutdr from "./Aboutdr";

const Dr_Profile = () => {
  return (
    <>
      <div className="bg-dark py-3">
        <div className="container d-flex align-items-center">
          <a href="/" className="text-white fw-bold me-2">
            Home
          </a>
          <FaChevronRight className="text-white" />
          <a href="/doctoreprofile" className="text-white fw-bold ms-2">
            DR. Addition Smith
          </a>
        </div>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-3 text-center">
            <img
              src="assets/img/member41.png"
              alt="Doctor"
              className="img-fluid rounded"
              height="175px"
              width="188px"
            />
          </div>

          <div className="col-md-9">
            <div className="row">
              <div className="col-md-6">
                <h5 className="fw-bold mb-2">DR. Addition Smith</h5>
                <p className="mb-1">Dr. Code: 123</p>
                <p>Dept. Code: 253</p>
              </div>
              <div className="col-md-6 text-center">
                <div className="text-warning">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>
                <p className="fw-bold mt-1">5 (125) Reviews</p>
              </div>
            </div>

            <div className="text-end mt-3">
              <button className="btn btn-primary">Book An Appointment</button>
            </div>

            <div className="mt-3">
              <p className="fw-bold">Specialties:</p>
              <div className="d-flex flex-wrap gap-3">
                <span className="badge bg-secondary">Obstetrician</span>
                <span className="badge bg-secondary">Gynecologist</span>
                <span className="badge bg-secondary">
                  Cosmetic Gynecology & IVF Specialist
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <nav className="nav nav-pills nav-fill border-bottom pb-2">
          <a href="/aboutdoc" className="nav-link fw-bold text-dark">
            Overview
          </a>
          <a href="/drreview" className="nav-link fw-bold text-dark">
            Reviews
          </a>
          <a href="/drarticle" className="nav-link fw-bold text-dark">
            Articles
          </a>
        </nav>
      </div>

      <Aboutdr />
    </>
  );
};

export default Dr_Profile;
