import React from "react";
import { BiClinic } from "react-icons/bi";
import { BsCalendar4Event } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const Patients_Details = () => {
  return (
    <div className="container mt-4 col-lg-6 offset-lg-3">
      <div className="border p-4 rounded shadow-sm bg-white">
        <div className="pb-2 mb-3 border-bottom">
          <h6 className="fs-5 d-flex align-items-center">
            <BiClinic className="me-2" /> In-Clinic Appointment
          </h6>
        </div>

        <div className="row border-bottom py-2">
          <div className="col">
            <BsCalendar4Event className="me-1" /> On{" "}
            <span className="text-muted">Dec 27, 2023</span>
          </div>
          <div className="col text-end">
            <CiClock2 className="me-1" /> At{" "}
            <span className="text-muted">9:30 AM</span>
          </div>
          <div className="text-end mt-2">
            <Link className="text-primary text-decoration-none">
              Change Date & Time
            </Link>
          </div>
        </div>

        <div className="d-flex align-items-center py-3 border-bottom">
          <img
            className="img-fluid rounded-circle"
            src="assets/img/doctor.png"
            width="60"
            height="60"
            alt="Dr. John Doe"
          />
          <div className="ms-3">
            <h6 className="mb-1">Dr. John Doe</h6>
            <p className="text-muted mb-0">Cardio Specialist</p>
          </div>
        </div>

        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default Patients_Details;
