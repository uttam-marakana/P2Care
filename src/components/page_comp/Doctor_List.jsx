import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Doctor_List = ({ img, title, sec, profile, rating }) => {
  return (
    <div
      className="card dr-card"
    >
      <img src={img} className="card-img-top dr-img" alt={title} />
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
        <Link to={profile} className="dr-view-btn">
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default Doctor_List;
