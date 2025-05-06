import React from "react";
import "./About.css";
import profilePic from '../assets/passport.png'; // adjust path if needed


const About = () => (
  <section id="about" className="about-section">
    <div className="overlay">
      <div className="about-container fade-in">
      <img
  src={profilePic}
  alt="Himanshu Ranjan"
  className="profile-photo"
/>


        <h2>About Me</h2>

        <p>
          I am a motivated and detail-oriented software developer currently pursuing my Master of Computer Applications at Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, with a current CGPA of 7.84. I bring a blend of academic knowledge and practical experience, having interned at HighRadius Technologies, where I utilized Salesforce CRM to enhance client data management and improve lead generation strategies.
        </p>

        <p>
          My technical expertise spans ReactJS, NodeJS, ExpressJS, and MongoDB, with a strong command of Java, Python, MySQL, HTML, CSS, and JavaScript. One of my key projects, a Personal Finance Tracker, demonstrates my ability to design and develop full-stack applications, implement secure authentication, and integrate data visualization features to enhance user experience.
        </p>

        <p>
          I am passionate about continuous learning, problem-solving, and delivering high-quality solutions. Open to relocation across India, I am actively seeking opportunities in software development where I can contribute meaningfully and grow professionally.
        </p>

        <a
          href="https://in.docworkspace.com/d/sIELE4qKsAqe_18AG" // Place resume in public/files folder
          download
          className="resume-button"
        >
          Download Resume
        </a>

        <div className="skills-badges">
          <span className="badge react">ReactJS</span>
          <span className="badge node">NodeJS</span>
          <span className="badge mongo">MongoDB</span>
          <span className="badge java">Java</span>
          <span className="badge python">Python</span>
          <span className="badge sql">MySQL</span>
          <span className="badge js">JavaScript</span>
        </div>

        {/* Optional Timeline Placeholder */}
        {/* <div className="timeline">
          <p>Timeline section (internships, education) can go here later.</p>
        </div> */}
      </div>
    </div>
  </section>
);

export default About;

