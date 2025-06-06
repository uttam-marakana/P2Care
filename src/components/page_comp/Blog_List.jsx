import React from "react";
import { Link } from "react-router-dom";

const Blog_List = ({ img, tag, detail, more }) => {
  return (
    <div className="card w-100 shadow-sm">
      <img src={img} className="card-img-top" alt={tag} />
      <div className="card-body">
        <h5 className="card-title fw-bold">{tag}</h5>
        <p className="card-text">{detail}</p>
        <Link to={more} className="btn btn-primary">
          Read More
        </Link >
      </div>
    </div>
  );
};

export default Blog_List;
