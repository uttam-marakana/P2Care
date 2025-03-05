import React from "react";
import { FaStar } from "react-icons/fa";

const Doctor_List = ({ img, title, sec, profile, rating }) => {
  return (
    <div
      className="card doctorlist m-3 mt-5 mb-5 shadow-sm"
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top img-1" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{sec}</p>
        <div className="ratingstar mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={index < rating ? "text-warning" : "text-secondary"}
            />
          ))}
        </div>
        <a href={profile} className="btn btn-primary">
          View Profile
        </a>
      </div>
    </div>
  );
};

export default Doctor_List;
