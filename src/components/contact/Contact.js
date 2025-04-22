import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <h1 className="title-1">Contact Us</h1>
      <div className="container-1 contact">
        <div className="container-1 container-contact">
          <div className="text-1">
            <p>
              <strong>Tell us about your challenge ! </strong>Our team will get
              back to you with tailored insights, <strong>fast</strong>.
            </p>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="location.png" alt="" />
            <div className="text-1 custom-padding">
              <p>760 Place De Monaco Laval, Quebec, Canada</p>
            </div>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="phone.png" alt="" />
            <div className="text-1 custom-padding">
              <p>+1 (438)-458-0018</p>
            </div>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="email.png" alt="" />
            <div className="text-1 custom-padding">
              <p>contact@novasoftvision.ca</p>
            </div>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="linkedin.png" alt="" />
            <div className="text-1 custom-padding">
              <a href="https://www.linkedin.com/company/novasoft-vision/">
                linkedin.com/company/novasoft-vision
              </a>
            </div>
          </div>
        </div>
        <form
          className="container-1 form"
          name="contact"
          method="POST"
          data-netlify="true"
          action="/MessageReceived"
        >
          {/* Hidden input for Netlify to recognize the form */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <div className="form-elem">
              <label htmlFor="company">Company</label>
              <input
                className="input"
                type="text"
                id="company"
                name="company"
                required
              />
            </div>
            <div className="form-elem">
              <label htmlFor="name">Name</label>
              <input
                className="input"
                type="text"
                id="name"
                name="name"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <div className="form-elem">
              <label htmlFor="email">Email</label>
              <input
                className="input"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="form-elem">
              <label htmlFor="phone">Phone</label>
              <input
                className="input"
                type="tel"
                id="phone"
                name="phone"
                required
              />
            </div>
          </div>
          <div className="form-desc">
            <label htmlFor="message">Message</label>
            <textarea
              className="input"
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <button className="contact-button" type="submit">
            Send
          </button>
          {/* FOR DEBUGGING
          <button
            className="contact-button"
            type="button"
            onClick={() => (window.location.href = "/MessageReceived")}
          >
            Go to Message Received
          </button>
          */}
        </form>
      </div>
    </div>
  );
};

export default Contact;
