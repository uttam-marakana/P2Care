import React from "react";

const Booking_List = ({ no, tag, detail }) => {
  return (
    <div className=" appointment-list-card">
      <div className="appointment-list-no">
        <h5 className="m-0">{no}</h5>
      </div>
      <div className="appointment-list-detail">
        <h6>{tag}</h6>
        <p>{detail}</p>
      </div>
    </div>
  );
};

export default Booking_List;
