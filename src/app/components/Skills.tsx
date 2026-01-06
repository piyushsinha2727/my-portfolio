import { Code, Palette, Database, Smartphone, Zap } from "lucide-react";
import "./Portfolio.css";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    skills: ["HTML ","React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["MySQL","MongoDB"]
  },
  {
    icon: Palette,
    title: "Design",
    skills: ["Figma", "Flutter", "UI/UX", "Responsive Design"]
  },
  
 
  {
    icon: Zap,
    title: "Tools & Others",
    skills: ["Git", "VS Code","VS Studios", "Ecllipse"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section section-gradient">
      <div className="skills-background">
        <div className="bg-blob blob-1"></div>
        <div className="bg-blob blob-2"></div>
      </div>

      <div className="container">
        <h2 className="section-title glow-text">Skills & Expertise</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="skill-card">
                <div className="skill-icon-wrapper">
                  <Icon className="skill-icon" size={24} />
                </div>
                
                <h3 className="skill-title">{skill.title}</h3>
                
                <ul className="skill-list">
                  {skill.skills.map((item, idx) => (
                    <li key={idx} className="skill-item">
                      <span className="skill-dot"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
