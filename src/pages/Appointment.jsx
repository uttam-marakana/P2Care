import React from "react";
import Booking_List from "../components/page_comp/Booking_List";
import Apointment_img from "../assets/img/doctor.png";

function Appointment() {
  return (
    <>
      <div className="container ">
        <div className="appointment-cont">
          <h4>Easy Appointment</h4>
          <h2 className="mb-3">Easy Step To Booking</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel
            dignissim lectus. Pellentesque
          </p>
        </div>
        <div className="appointment-card">
          <div className="appointment-pos">
            <div className="appointment-img">
              <img className="img-fluid" src={Apointment_img} alt="img" />
            </div>

            <div className="appointment-booking">
              <div className="appointment-list">
                <Booking_List
                  no="1"
                  tag="Search Your Disease"
                  detail="Lorem ipsum dolor sit, consectetur adipiscing elit."
                />
                <Booking_List
                  no="2"
                  tag="Search Your Disease"
                  detail="Lorem ipsum dolor sit, consectetur adipiscing elit."
                />
                <Booking_List
                  no="3"
                  tag="Search Your Disease"
                  detail="Lorem ipsum dolor sit, consectetur adipiscing elit."
                />
                <Booking_List
                  no="4"
                  tag="Search Your Disease"
                  detail="Lorem ipsum dolor sit, consectetur adipiscing elit."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Appointment;
