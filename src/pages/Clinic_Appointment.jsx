//

import React from "react";
import { BiClinic } from "react-icons/bi";

const Clinic_Appointment = () => {
  return (
    <div
      className="modal fade"
      id="Clinic_AppointmentModal"
      tabIndex="-1"
      aria-labelledby="Clinic_AppointmentLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5
              className="modal-title d-flex align-items-center"
              id="Clinic_AppointmentLabel"
            >
              <BiClinic className="me-2" /> Clinic Appointment
            </h5>
            <p className="mb-0 fw-bold text-primary">₹ 300 Fees</p>
          </div>

          <div className="modal-body">
            <p className="fw-bold">Book an appointment for Consultation</p>
            <h6 className="text-primary">Partha Dental Skin Hair</h6>
            <p className="text-success fw-bold">
              ₹ 300 <span className="text-muted"> - Max 30 mins wait</span>
            </p>
            <p className="text-secondary">Location: Marathahalli</p>

            {/* Carousel for Slot Availability */}
            <div
              id="carouselExampleDark"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {[
                  { day: "Today", slots: 15 },
                  { day: "Tomorrow", slots: 26 },
                  { day: "Thu, 28 Dec", slots: 10 },
                ].map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={index}
                  >
                    <div className="carousel-caption d-none d-md-block">
                      <h5>{item.day}</h5>
                      <p>{item.slots} Slots Available</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>

            {/* Available Time Slots */}
            <div className="mt-4">
              <h5>
                Morning <small className="text-muted">(2 Slots)</small>
              </h5>
              <hr />
              <h5>
                Afternoon <small className="text-muted">(4 Slots)</small>
              </h5>
            </div>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic_Appointment;
