import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRegisterData } from "../redux/features/register/registerSlice";
import "./table.css";

const EventTable = () => {
  const dispatch = useDispatch();
  const { registers, reloading } = useSelector((state) => state.register);

  useEffect(() => {
    dispatch(getRegisterData());
  }, [dispatch]);

  return (
    <div>
      <div className="container etable w-75">
        <h2 className="text-center fw-bold mb-4">Registered Events</h2>
        <table className="table ">
          <thead className="td">
            <tr className="">
              <th className="">Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Date</th>
              <th>Event Accessibility</th>
              <th>Location</th>
              <th>Duration</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {registers.map((r, index) => (
              <tr className="td" key={index}>
                <td className="">{r.username}</td>
                <td>{r.email}</td>
                <td>{r.title}</td>
                <td>{r.dated}</td>
                <td>{r.event_acc}</td>
                <td>{r.location}</td>
                <td>{r.duration}</td>
                <td>{r.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventTable;
