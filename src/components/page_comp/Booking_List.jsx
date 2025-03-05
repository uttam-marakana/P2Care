import React from "react";

const Booking_List = ({ no, tag, detail }) => {
  return (
    <div className="card text-center m-5 p-3 shadow-sm">
      <div className="bg-primary text-white rounded-circle d-inline-block p-3 mb-3">
        <h5 className="m-0">{no}</h5>
      </div>
      <div className="card-body">
        <h6 className="fw-bold mb-2">{tag}</h6>
        <p className="card-text">{detail}</p>
      </div>
    </div>
  );
};

export default Booking_List;
