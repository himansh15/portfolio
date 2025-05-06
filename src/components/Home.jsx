import React from "react";
import "./Home.css"; // Make sure to include this CSS file

const Home = () => (
  <section id="home" className="hero-section">
    <div className="overlay">
      <div className="content">
        <h1>
          I am <span className="highlight">Himanshu Ranjan</span>
        </h1>
        <h2>Aspiring Software Developer | MCA Candidate at KIIT University</h2>
        <p>
          Welcome to my portfolio. I am a final-year Master of Computer Applications student at KIIT University, driven by a passion for software development and building impactful web applications. With a strong foundation in full-stack development and hands-on experience through industry internships, I aim to create scalable, user-centric solutions. Explore my work and let’s connect to discuss how I can contribute to your next project.
        </p>
        <a href="#contact" className="cta-button">
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default Home;
