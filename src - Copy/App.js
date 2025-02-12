import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./styles.css";

const education = [
  { degree: "PG-DAC - CDAC Sunbeam Pune", institution: "Post-Graduation Diploma in Advanced Computing", duration: "March 2024 – August 2024" },
  { degree: "B.Tech in Electronics and Communication", institution: "Shivaji University Kolhapur", duration: "Aug 2019 – Aug 2023" },
  { degree: "12th Science", institution: "Private High School & Junior College, Kolhapur", duration: "June 2018 – May 2019" }
];

const skills = {
  "Technologies/Frameworks": ["Spring Boot", "Hibernate", "React JS"],
  "Languages": ["Java", "Linux", ".NET", "SQL", "Bash", "OS", "DevOps"],
  "Databases": ["MySQL"],
  "Developer Tools": ["Visual Studio", "Spring Tool Suite", "Git", "Docker"],
  "Concepts": ["DSA", "OOP", "SDLC", "Agile"]
};

const projects = [
  {
    title: "Question Paper Generator",
    technologies: "React JS, Firebase",
    details: [
      "Developed a platform to streamline question paper creation for educational institutions.",
      "Built a user-friendly interface ensuring smooth navigation and interactions.",
      "Designed Firebase database structure to manage questions, papers, and user data.",
      "Implemented authentication using Firebase Authentication for secure access."
    ],
    image: "https://img-cdn.pixlr.com/image-generator/history/67a8acc8ac3feea353d39c63/79e82015-664b-401e-b94a-4f0b4c84274f/preview.webp",
    github: "https://github.com/Mandar2107/Question-paper-Gernrator"
  },
  {
    title: "Institute Management System",
    technologies: "React JS, Spring Boot, MySQL",
    details: [
      "Built a system to manage student and teacher tasks, marks, and administrative functionalities.",
      "Developed a structured MySQL database design for managing institute data.",
      "Implemented secure authentication and authorization using JWT.",
      "Designed a responsive front-end using React."
    ],
    image: "https://img-cdn.pixlr.com/image-generator/history/67a8ad1619f5a9825a6d210a/6a6cf65f-84d4-4af2-8e60-d0f174e9cc08/preview.webp",
    github: "https://github.com/vishalm6566/Institute-Managment-System"
  }
];

const App = () => {
  return (
    <>
      {/* Navbar */}
      <nav>
        <h1>Mandar Wagale</h1>
        <div>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <img src="/images/Mandar photo.JPG" alt="Mandar Wagale" className="profile-img" />
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to My Portfolio
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
          Software Engineer | Full-Stack Developer
        </motion.p>
      </section>

      {/* Education Section */}
      <section id="education">
        <h1>Education</h1>
        <div className="education-container">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h2 className="education-title">{edu.degree}</h2>
              <p>{edu.institution}</p>
              <p>{edu.duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills">
        <h1>Technical Skills</h1>
        {Object.entries(skills).map(([category, skillList], index) => (
          <div key={index} className="skills-category">
            <h2>{category}</h2>
            <div className="skills-container">
              {skillList.map((skill, i) => (
                <span key={i} className="skill-box">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h1>Projects</h1>
        <div className="project-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-img" />
              <h2>{project.title}</h2>
              <p><strong>Technologies:</strong> {project.technologies}</p>
              <ul>
                {project.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            <button> <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h1>Contact Me</h1>
        <div className="contact-container">
          <p><FaPhone /> <strong>Phone:</strong> 7019436119</p>
          <p><FaEnvelope /> <strong>Email:</strong> <a href="mailto:mandarwagale0@gmail.com">mandarwagale0@gmail.com</a></p>
          <p><FaLinkedin /> <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/mandar-wagale">linkedin.com/in/mandar-wagale</a></p>
          <p><FaGithub /> <strong>GitHub:</strong> <a href="https://github.com/Mandar2107">github.com/Mandar2107</a></p>
        </div>
      </section>
    </>
  );
};

export default App;
