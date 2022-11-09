import React from "react";

function Color(props) {
  return (
    <div className="main">
      <div className="Cards" style={{ backgroundColor: props.code }}>
        <div className="Title">
          <h6>{props.title}</h6>
          <p>{props.color}</p>
        </div>
      </div>

     
    </div>
  );
  }

export default Color;