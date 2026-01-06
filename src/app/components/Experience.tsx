import { Award, Calendar, CheckCircle } from "lucide-react";
import "./Portfolio.css";

export function Experience() {
  const experiences = [
  {
    title: "Member of Editorial Board",
    organization: "'SPANDAN' BIT Mesra's E-Magazine",
    date: "Volume 1-2",
    description: "Contributed to the design and content curation of the official institute e-magazine. Focused on technical documentation, creative writing, and collaborative editorial workflows on canva."
  },
  {
    title: "Technical Intern",
    organization: "National Informatics Centre (NIC)",
    date: "July 2025",
    description: "Gained 6 weeks of hands-on experience at the Jharkhand State Unit. Focused on public-sector technology infrastructure and state-level digital service units."
  },
  {
    title: "Airport Authority of India Intern",
    organization: "Birsa Munda Airport, Ranchi",
    date: "June 2023",
    description: "Completed 4 weeks of technical exposure at the Ranchi Airport. Analyzed networking and operational technology systems under Cmputer Navigation and Surviellance  used in aviation infrastructure."
  },
  {
    title: "Computer Hardware Training",
    organization: "Birla Institute of Technology (BIT) Mesra",
    date: "February 2024",
    description: "Underwent specialized hardware training at BIT Mesra, gaining a deep understanding of computer architecture, troubleshooting, and system maintenance."
  },
  
  {
    title: "Technology Job Simulation",
    organization: "Deloitte",
    date: "November 2025",
    description: "Completed a comprehensive technology simulation focused on real-world business challenges and technical problem-solving within a professional consulting framework."
  },
  {
    title: "Azure Administrator Associate",
    organization: "Microsoft",
    date: "January 2025",
    description: "Certified Microsoft Azure Administrator. Specialized in managing cloud identity, governance, storage, compute, and virtual networks in a secure cloud environment."
  },
  
];

  return (
    <section id="experience" className="section section-dark">
      <div className="container">
        <h2 className="section-title glow-text">Experience & Certifications</h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="cert-badge">
                <Award size={40} />
              </div>
              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-org">
                <CheckCircle size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                {exp.organization}
              </div>
              <p className="experience-description">{exp.description}</p>
              <div className="experience-date">
                <Calendar size={14} />
                <span>{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
