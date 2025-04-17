import React from "react";
import "./Process.scss";

const Process = () => {
  return (
    <div className="section">
      <div className="title-1">Easy process</div>
      <div className="container-1">
        <div className="text-1">
          We specialize in helping you turn complex challenges into smart,
          scalable solutions.
        </div>
        <div className="process">
          <div className="container-2">
            <div className="title-2">01 YOU ENVISION</div>
            <img className="process-img" src="ask.png" alt="" />
          </div>
          <div className="container-2">
            <div className="title-2">02 WE PLAN</div>
            <img className="process-img" src="proceed.png" alt="" />
          </div>
          <div className="container-2">
            <div className="title-2">03 WE BUILD</div>
            <img className="process-img" src="negociate.png" alt="" />
          </div>
          <div className="container-2">
            <div className="title-2">04 YOU SUCCEED</div>
            <img className="process-img" src="get.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
