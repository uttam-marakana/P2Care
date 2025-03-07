import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import FeedBack_img from "../assets/img/testimonial.png";

const FeedBack = () => {
  return (
    <div className="container">
      <div className="feedback-sect">
        <h4>Patients Feedback</h4>
        <h2 className="mb-3">Positive Feedback From Our Patients</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec vel
          dignissim lectus. Pellentesque
        </p>
      </div>

      <div className="feedback-btn">
        <button className="dr-btn">
          <FaChevronLeft />
        </button>
        <button className="dr-btn">
          <FaChevronRight />
        </button>
      </div>

      <div className="feedback-list">
        <div className="col-md-6">
          <div className="feedback-user-img">
            <img className="img-fluid" src={FeedBack_img} alt="Testimonial" />
          </div>
          <div className="feedback-details">
            <h2 className="text-info mt-3">Leela Rogers</h2>
            <h5>Businessman</h5>
            <p>
              Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et Lorem ipsum dolor sit amet, consectet adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedBack;
