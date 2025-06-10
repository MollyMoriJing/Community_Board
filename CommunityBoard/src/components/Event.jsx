import React from "react";

const Event = (props) => {
  return (
    <div className="Event">
      <div className="event-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="event-content">
        <h3>{props.title}</h3>
        <p><strong>Date:</strong> {props.date}</p>
        <p><strong>Time:</strong> {props.time}</p>
        <p><strong>Location:</strong> {props.location}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          View Details →
        </a>
      </div>
    </div>
  );
};

export default Event;