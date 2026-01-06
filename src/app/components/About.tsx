import "./Portfolio.css";
// 1. Import your image file properly
import profilePic from "@/PIYUSH 2.jpeg";
export function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">About Me</h2>
        
        <div className="about-grid">
          <div className="about-image-wrapper">
            <div className="image-glow"></div>
            <img 
              src={profilePic}
              alt="Piyush Kumar"
              className="about-image"
            />
          </div>

          <div className="about-content">
            <p className="about-text">
              Computer Science Engineering student at Ramgarh Engineering College with a strong technical foundation and a focus on building efficient, data-driven applications.
            </p>
            <p className="about-text">
            
     <li>
      <strong>System Reliability:</strong> I don’t just write code; I ensure it works under pressure. My focus is on the full SDLC/STLC lifecycle, from initial logic to comprehensive manual testing and documentation.
    </li>
    <li>
      <strong>Public Sector Exposure:</strong> My internship at the National Informatics Centre (NIC) taught me the importance of building secure, scalable solutions that serve large-scale user bases.
    </li>
    <li>
      <strong>Strategic Problem Solving:</strong> I enjoy the "discussion" phase of engineering. Whether it's debating technical architectures or participating in tech-fests, I value teamwork and clear communication in every project.
    </li>
    
    <li>
      <strong>Professional Integrity:</strong> I believe in professional email etiquette and detailed technical documentation, ensuring that every project is maintainable and understandable for future developers.
    </li>
            </p>
            <p className="about-text">
              When I'm not coding, you can find me exploring new design trends, contributing 
              to open-source projects, or sharing my knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
