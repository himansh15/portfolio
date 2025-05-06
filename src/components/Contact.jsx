import React from "react";
import "./Contact.css";

const Contact = () => (
  <section id="contact">
    <div className="contact-overlay">
      <div className="contact-card">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:hranjan1520@gmail.com">hranjan1520@gmail.com</a></p>
        <p>
          <a href="https://www.linkedin.com/in/himanshranjan/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {" | "}
          <a href="https://github.com/himansh15" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </p>
      </div>
    </div>
  </section>
);

export default Contact;
