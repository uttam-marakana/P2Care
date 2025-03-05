import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Doctor_Card = ({ img, title, sec, profile }) => {
  return (
    <div
      className="card doctorlist_1 m-3 mt-4 shadow-sm"
      style={{ width: "18rem" }}
    >
      <img src={img} className="card-img-top img-1" alt={title} />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="text-primary">{sec}</p>
        <div className="ratingstar mb-3">
          {[...Array(5)].map((_, index) => (
            <FaStar key={index} className="text-warning" />
          ))}
        </div>
        <Link to={profile} className="btn btn-primary">
          View Profile
        </Link >
      </div>
    </div>
  );
};

export default Doctor_Card;
