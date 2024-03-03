import React, { useEffect } from "react";
import "./event.css";
import Navbar from "../homepage/navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getEventData } from "../redux/features/event/eventSlice";
import SubEvents from "./SubEvents";

const Event = () => {
  const dispatch = useDispatch();
  const { events, eeloading } = useSelector((state) => state.event);

  useEffect(() => {
    dispatch(getEventData());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <div className="background-container"></div>
      <div className="container mt-5 mx-auto w-75">
        <h1 className="fw-bold my-5 mx-auto text-center">UPCOMING EVENTS</h1>
        <div className="row justify-content-center">
          {eeloading ? (
            <p>Loading...</p>
          ) : (
            events.map((e, index) => (
              <div key={e.id} className="">
                <SubEvents datas={e} />
                {index !== events.length - 1 && <hr className="mt-5" />}{" "}
                {/* Add hr if not the last item */}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Event;
