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
        <div className="appoint">
          <div className="prt-1">
            <img src={Apointment_img} alt="img" height="362px" width="100%" />
            <div className="container">
              <div className="booking_1">
                <div className="d-flex">
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
      </div>
    </>
  );
}

export default Appointment;
