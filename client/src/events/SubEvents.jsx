import React from "react";

const SubEvents = ({ datas }) => {
  return (
    <div className="subb-upcoming row">
      <div className="col-lg-6">
        <div className="imagess-container">
          <img
            src={datas.image}
            alt="Event"
            className="event-image w-100"
            style={{ height: "300px" }}
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="event-details d-flex flex-column justify-content-center h-100 ms-5">
          <h2>{datas.title}</h2>
          <p>Date: {datas.date}</p>
          <p>Timings: {datas.timings}</p>
          <p>Location: {datas.location}</p>
          <p>Category: {datas.category}</p>
        </div>
      </div>
    </div>
  );
};

export default SubEvents;
