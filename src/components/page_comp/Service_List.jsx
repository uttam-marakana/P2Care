import React from "react";

const Service_List = ({ img, tag, detail }) => {
  return (
    <div className="card text-center p-4 shadow-sm">
      <img
        src={img}
        className="mx-auto d-block mb-3"
        alt="Service Icon"
        width="80px"
        height="80px"
      />
      <div className="card-body">
        <h4 className="py-2 fw-bold">{tag}</h4>
        <p className="text-muted">{detail}</p>
      </div>
    </div>
  );
};

export default Service_List;
