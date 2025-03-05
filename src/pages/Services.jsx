import React from "react";
import Service_List from "../components/page_comp/Service_List";
import "../App.css";

function Services() {
  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div className="services">
          <h4>Services</h4>
          <h2>Our Specialities</h2>
        </div>
        <button className="btn btn-primary fs-5">View All</button>
      </div>

      <div className="row mt-4">
        <div className="col-md-3">
          <Service_List
            img="assets/img/general.png"
            tag="Child Care"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-3">
          <Service_List
            img="assets/img/psychiatry.png"
            tag="Psychiatry"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-3">
          <Service_List
            img="assets/img/dentist.png"
            tag="Dentist"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-3">
          <Service_List
            img="assets/img/baby.png"
            tag="Pediatrics"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
