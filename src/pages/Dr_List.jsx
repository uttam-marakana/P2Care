import React from "react";
import Doctor2 from "../components/Doctor2";
import Feedback from "./Feedback";

const specialists = [
  { img: "assets/img/psychiatry.png", name: "Psychiatry" },
  { img: "assets/img/general.png", name: "Child Care" },
  { img: "assets/img/dentist.png", name: "Dentist" },
  { img: "assets/img/baby.png", name: "Pediatrics" },
];

const doctors = [
  {
    img: "assets/img/member.png",
    name: "DR. Addition Smith",
    specialty: "Dentist",
    profile: "/doctoreprofile",
  },
  {
    img: "assets/img/member.png",
    name: "DR. Addition Smith",
    specialty: "Dentist",
    profile: "/doctoreprofile",
  },
  {
    img: "assets/img/member.png",
    name: "DR. Addition Smith",
    specialty: "Dentist",
    profile: "/doctoreprofile",
  },
  {
    img: "assets/img/member.png",
    name: "DR. Addition Smith",
    specialty: "Dentist",
    profile: "/doctoreprofile",
  },
  {
    img: "assets/img/member.png",
    name: "DR. Addition Smith",
    specialty: "Dentist",
    profile: "/doctoreprofile",
  },
];

const Dr_List = () => {
  return (
    <>
      <div className="position-relative">
        <img
          src="assets/img/femaledoc.png"
          className="w-100"
          alt="Doctor"
          height="695px"
        />
        <div className="position-absolute top-50 start-50 translate-middle text-white text-center">
          <h1 className="fw-bold">
            Search Best <br /> Doctors at Best <br /> Locations
          </h1>
          <div className="d-flex justify-content-center gap-4 mt-4">
            <h3>
              400+ <br />
              <span className="text-dark">Doctors</span>
            </h3>
            <h3>
              50+ <br />
              <span className="text-dark">Specialists</span>
            </h3>
            <h3>
              45+ <br />
              <span className="text-dark">Cities</span>
            </h3>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <label className="fw-bold">Specialist</label>
            <select className="form-select">
              <option value="">Select a Specialist</option>
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
              ].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-5">
            <label className="fw-bold">Specialist</label>
            <select className="form-select">
              <option value="">Select a Specialist</option>
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
              ].map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="col-md-2 d-flex align-items-end">
            <button className="btn btn-primary w-100">Search</button>
          </div>
        </div>
      </div>

      <div className="container text-center my-5">
        <div className="row justify-content-center">
          {specialists.map((item, index) => (
            <div key={index} className="col-md-3">
              <div className="card border-0 shadow-sm p-3">
                <img
                  src={item.img}
                  width="45px"
                  height="45px"
                  alt={item.name}
                />
                <p className="fw-bold mt-2">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container text-center my-5">
        <h3 className="mb-4">Specialist Doctors in Your Area</h3>
        <div className="row justify-content-center">
          {doctors.map((doctor, index) => (
            <div key={index} className="col-md-2">
              <Doctor2
                img={doctor.img}
                title={doctor.name}
                sec={doctor.specialty}
                profile={doctor.profile}
              />
            </div>
          ))}
        </div>
      </div>

      <Feedback />
    </>
  );
};

export default Dr_List;
