import React, { Component } from "react";
import { Link } from "react-router-dom";

const Artical_List = ({ img, title, details, more }) => {
  return (
    <div className="card w-100 shadow-sm">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{details}</p>
        <Link to="/err" className="btn btn-primary">
          {more}
        </Link >
      </div>
    </div>
  );
};

export default Artical_List;
