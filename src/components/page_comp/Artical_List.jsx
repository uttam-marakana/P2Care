import React, { Component } from "react";

const Articl = ({ img, title, details, more }) => {
  return (
    <div className="card w-100 shadow-sm">
      <img src={img} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{details}</p>
        <a href="/err" className="btn btn-primary">
          {more}
        </a>
      </div>
    </div>
  );
};

export default Articl;
