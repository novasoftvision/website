import React from "react";
import "./Contact.scss";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    alert("Your message has been sent successfully!");
  };

  return (
    <div id="contact" className="section">
      <div className="title-1">Contact Us</div>
      <div className="container-1 contact">
        <div className="container-1 container-contact">
          <div className="text-1">
            <strong>Tell us about your challenge ! </strong>Our team will get
            back to you with tailored insights, <strong>fast</strong>.
          </div>
          <div className="contact-info">
            <img className="contact-img" src="location.png" alt="" />
            <div className="text-1 custom-padding">
              760 Place De Monaco Laval, Quebec, Canada
            </div>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="phone.png" alt="" />
            <div className="text-1 custom-padding">+1 (438)-458-0018</div>
          </div>
          <div className="contact-info">
            <img className="contact-img" src="email.png" alt="" />
            <div className="text-1 custom-padding">
              contact@novasoftvision.ca
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
        <form className="container-1 form" onSubmit={handleSubmit}>
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
        </form>
      </div>
    </div>
  );
};

export default Contact;
