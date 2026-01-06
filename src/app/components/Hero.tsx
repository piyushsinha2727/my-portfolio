import { ArrowDown, Sparkles } from "lucide-react";
import "./Portfolio.css";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero">
      <div className="hero-background">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <Sparkles size={16} style={{ color: '#22d3ee' }} />
          <span style={{ color: '#67e8f9', fontSize: '0.875rem' }}>Welcome to my portfolio 🚀 </span>
        </div>

        <h1 className="hero-title">
          Hi, I'm <span className="glow-text">Piyush Kumar</span>
        </h1>

        <p className="hero-subtitle">
        Computer Science Engineer | Full Stack Developer
        </p>

        <p className="hero-description">
          Specializing in Java-based systems and web development. 
          Passionate about solving problems through code and design.
        </p>

        <button onClick={scrollToAbout} className="cta-button">
          <span>Explore My Journey</span>
          <ArrowDown size={20} className="arrow-icon" />
        </button>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
}
