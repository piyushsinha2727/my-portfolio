import { ExternalLink, Github } from "lucide-react";
import "./Portfolio.css";

const projects = [
  {
    title: "Complaint Management System",
    description: "Developed a centralized platform to streamline the registration and tracking of user grievances through a structured digital workflow. Documented detailed test cases specifically for user registration and complaint filing to guarantee 100% data accuracy and system reliability.",
    image: "https://images.unsplash.com/photo-1677469684112-5dfb3aa4d3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njc0OTQwMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: [,"Ecllipse"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Public-Based-Complaint-Resolution-System",
    description: "Currently in the active development and testing phase, this project is designed as a centralized digital platform to facilitate transparent communication between citizens and administration for grievance redressal. ",
    image: "https://images.unsplash.com/photo-1623932078839-44eb01fbee63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmt8ZW58MXx8fHwxNzY3NDgwNTQxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["HTML", "CSS", "JavaScript","Python","MySQL","Google APIs"],
    liveLink: "https://piyushsinha2727.github.io/Public-Based-Complaint-Resolution-System/",
    githubLink: "https://github.com/piyushsinha2727/Public-Based-Complaint-Resolution-System"
  },
  {
    title: "Portfolio Development",
    description: " A high-performance, responsive web application developed to showcase my engineering journey and technical expertise. Built using React and TypeScript, the project utilizes Vite for a fast development experience and Tailwind CSS for a modern, sleek UI. ",
    image: "https://images.unsplash.com/photo-1666723043169-22e29545675c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NzU0Mzk0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["React", "Tailwind CSS", "Typescript","Supabase"],
    liveLink: "#",
    githubLink: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay"></div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={project.liveLink} className="project-link">
                    <ExternalLink size={18} />
                    <span>Live Demo</span>
                  </a>
                  
                  <a href={project.githubLink} className="project-link github">
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
