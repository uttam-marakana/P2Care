import React from "react";
import Service_List from "../components/page_comp/Service_List";
import "../App.css";

import General_img from "../assets/img/general.png";
import Psychiatry_img from "../assets/img/psychiatry.png";
import Dentist_img from "../assets/img/dentist.png";
import Baby_img from "../assets/img/baby.png";

function Services() {
  return (
    <div className="container ">
      <div className="serv-menu">
        <div className="services">
          <h4>Services</h4>
          <p>Our Specialities</p>
        </div>
        <div className="serv-btn">
          <button className="">View All</button>
        </div>
      </div>

      <div className="serv-list">
        <div className="col-md-5">
          <Service_List
            img={General_img}
            tag="Child Care"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-5">
          <Service_List
            img={Psychiatry_img}
            tag="Psychiatry"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-5">
          <Service_List
            img={Dentist_img}
            tag="Dentist"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
        <div className="col-md-5">
          <Service_List
            img={Baby_img}
            tag="Pediatrics"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          />
        </div>
      </div>
    </div>
  );
}

export default Services;
