import { GraduationCap, Calendar } from "lucide-react";
import "./Portfolio.css";

export function AcademicJourney() {
  const academics = [
     {
      degree: "Matriculation",
      institution: "D.A.V Public School ,Hehal Ranchi ,Jharkhand",
      year: "2021",
      description: "Completed X at D.A.V. Public School, Hehal, achieving a 91.8% academic record under the CBSE board. This early achievement in a competitive academic environment established a high-standard foundation in core disciplines and analytical reasoning. It instilled the necessary discipline and work ethic that served as the catalyst for my transition into specialized Computer Engineering and my current pursuit of professional excellence in the tech industry"
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "Birla Institue of technology Mesra, Ranchi, Jharkhand ",
      year: "2021-2024",
      description: "Began my technical career with a Diploma in Computer Engineering, achieving a 95.8% academic record. This rigorous foundation in engineering fundamentals and programming led to my current pursuit of a B.Tech in Computer Science Engineering. My early academic success shaped a disciplined, analytical approach to complex technical problem-solving."
    },
    {
      degree: "B.Tech in Computer Science Engineering ",
      institution: "Ramgarh Engineering College , Ramgarh ,Jharkhand",
      year: "2024-2027",
      description: "3rd-year Computer Science Engineering candidate at Ramgarh Engineering College, specializing in scalable system design and data-driven architectures. Leveraging advanced proficiency in Data Structures, Algorithms, and Database Management to transition academic concepts into professional-grade applications. Focused on refining technical documentation and collaborative engineering practices through hands-on project development and industry-standard Software Engineering principles."
    }
  ];

  return (
    <section id="academic" className="section section-alternate">
      <div className="container">
        <h2 className="section-title glow-text">Academic Journey </h2>
        
        <div className="academic-grid">
          {academics.map((academic, index) => (
            <div key={index} className="academic-card">
              <div className="academic-header">
                <div className="academic-icon">
                  <GraduationCap size={32} />
                </div>
                <div className="academic-info">
                  <h3>{academic.degree}</h3>
                  <div className="academic-year">
                    <Calendar size={14} />
                    <span>{academic.year}</span>
                  </div>
                </div>
              </div>
              <div className="academic-institution">{academic.institution}</div>
              <p className="academic-description">{academic.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
