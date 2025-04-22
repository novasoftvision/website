import React from "react";
import "./MessageReceived.scss";

const MessageReceived = () => {
  return (
    <div className="message-received">
      <div className="section">
        <div className="container-1 container-top">
          <h1 className="title-1">Thank you!</h1>
          <p className="text-1">
            We have received your message. We’ll get back to you shortly.
          </p>
        <button className="btn-main-page" onClick={() => window.location.href = "/"}>
            Go to Main Page
        </button>
        </div>
      </div>
    </div>
  );
};

export default MessageReceived;
