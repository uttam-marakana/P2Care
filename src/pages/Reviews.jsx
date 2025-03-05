import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="container">
      <div className="review text-center">
        <p className="review-cont">
          Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <div className="row justify-content-center align-items-center mt-4">
          <div className="col-auto">
            <img
              src="assets/img/testimonial.png"
              width="77px"
              height="77px"
              alt="Testimonial"
            />
          </div>
          <div className="col-auto text-start">
            <h5 className="text-info mb-0">Leela Rogers</h5>
            <p className="fs-6">Businessman</p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="d-flex justify-content-end mt-4">
        <button className="indicator btn btn-light me-3">
          <FaChevronLeft />
        </button>
        <button className="indicator btn btn-light">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
