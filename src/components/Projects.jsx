import React from "react";
import "./Projects.css"; // Make sure to include this CSS file

const Projects = () => (
  <section className="projects-section">
    <div className="overlay">
      <div className="projects-container">
        <h2>My Projects</h2>

        {/* Project 1 */}
        <div className="projects-card">
          <h3>💰 Personal Finance Tracker</h3>  <br/>
          <p> Technologies: MongoDB, Express.js, React.js, Node.js, Chart.js, Tailwind CSS <br/>

The Personal Finance Tracker is a full-stack web application designed to help users manage and visualize their income and expenses. Built using the MERN stack, the application provides a seamless experience for tracking financial transactions, generating insightful reports, and gaining better control over personal budgeting.<br/>

🔑 Key Features:<br/>
User Authentication: Secure sign-up and login functionality using JWT tokens and bcrypt password hashing.<br/>

Transaction Management: Users can add, edit, and delete both income and expense transactions.<br/>

Real-Time Charts: Integrated with Chart.js to visualize income vs. expenses and display trend analysis.<br/>

Date Filtering & Reports: Users can filter transactions by date and generate summarized financial reports.<br/>

Export to PDF/Excel: Offers downloadable reports for offline record-keeping.<br/>

Responsive UI: Designed a modern, mobile-friendly interface using React.js and Tailwind CSS.<br/>

Dark Mode: Allows users to switch between light and dark themes for better accessibility.<br/>

MongoDB Integration: All user data is stored and retrieved securely from MongoDB Atlas, using Mongoose for schema modeling.<br/>

🧱 Backend Contributions:<br/>
Built and tested RESTful APIs using Express.js.<br/>

Managed MongoDB connections and schema design for transaction data.<br/>

Implemented middleware for validation, authentication, and error handling.<br/>

Configured server environment using Node.js and dotenv for secure deployment.<br/>

🌐 Frontend Contributions:<br/>
Developed UI components using React.js with state management and props.<br/>

Integrated API endpoints for dynamic data fetching and form submissions.<br/>

Used react-chartjs-2 to render dynamic graphs based on transaction data.<br/>

🧪 Testing & Tools:<br/>
API testing using Postman to ensure endpoint reliability and correctness.<br/>

Implemented form validation and edge case handling to ensure data integrity.<br/>

🎯 Learning Outcomes:<br/>
Gained end-to-end experience with the MERN stack, from backend architecture to frontend UI.<br/>

Improved skills in API development, authentication workflows, and full-stack deployment.<br/>

Learned to create scalable and modular project structures following industry standards.<br/>
</p>
        </div>

        {/* Project 2 */}
        <div className="projects-card">
          <h3>📚 Digital Book Library Management System</h3>
          <p>Technologies: HTML, CSS, JavaScript<br/>

The Digital Book Library Management System is a responsive, browser-based application designed to manage a personal or small-scale digital library. Developed using pure front-end technologies, the system allows users to efficiently store, search, and manage book records. <br/>

🔑 Key Features:<br/>
Add New Books: Users can enter and submit book details including title, author, genre, and publication year.<br/>

Display Library: Dynamically renders the list of books with user-friendly styling and real-time updates using JavaScript DOM manipulation.<br/>

Delete Entries: Offers a simple interface to remove books from the list.<br/>

Search Functionality: Allows keyword-based filtering by title or author, providing instant results.<br/>

Data Persistence (Optional Enhancement): Can be extended using localStorage to save book records between sessions.<br/>

🎯 Learning Outcomes:<br/>
Strengthened understanding of JavaScript DOM manipulation, event handling, and data structures.<br/>

Gained practical experience in form handling and dynamic content rendering using vanilla JavaScript.<br/>

Designed a clean, responsive layout with HTML5 and modern CSS, including flexbox for structure.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;

