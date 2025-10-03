import React, { useState, useEffect, useRef } from 'react'
import './Skills.css'
import SkillsCard from './SkillsCard.jsx'
import ReactIcon from './react.svg'
import PythonIcon from './python.svg'
import NodeIcon from './node.svg'
import JSIcon from './javascript.svg'
import HtmlIcon from './html.svg'
import CssIcon from './css.svg'
import BTIcon from './bootstrap.svg'
import Light from './light.svg'
import Git from './git.svg'

const Skills = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const skillsData = [
    {
      icon: ReactIcon,
      name: "React",
      shortline: "Build dynamic, responsive UIs with React's component-based magic",
      color: "#61DAFB",
      level: 70
    },
    {
      icon: PythonIcon,
      name: "Python",
      shortline: "Scripts, automation, and data tasks with clean Python code",
      color: "#3776AB",
      level: 65
    },
    {
      icon: JSIcon,
      name: "JavaScript",
      shortline: "Power interactivity and logic with clean, efficient code",
      color: "#F7DF1E",
      level: 70
    },
    {
      icon: HtmlIcon,
      name: "HTML",
      shortline: "Craft clean, semantic markup for solid web foundations",
      color: "#E34F26",
      level: 95
    },
    {
      icon: CssIcon,
      name: "CSS",
      shortline: "Style it up with modern, responsive, sleek designs",
      color: "#1572B6",
      level: 95
    },
    {
      icon: BTIcon,
      name: "Bootstrap",
      shortline: "Rapidly design responsive layouts with Bootstrap's grid",
      color: "#7952B3",
      level: 90
    },
    {
      icon: Git,
      name: "GitHub",
      shortline: "Can work on GitHub with a team or solo. I know all the basics",
      color: "#181717",
      level: 85
    },
    {
      icon: Light,
      name: "Learning",
      shortline: "Quickly picking up new tools, frameworks, and concepts as needed",
      color: "#FF6B6B",
      level: 100
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id={id} className={`skills ${isVisible ? 'visible' : ''}`} ref={containerRef}>
      {/* Background Effects */}
      <div className="skills-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      {/* Header Section */}
      <div className="skills-header-section">
        <div className="skills-header-wrapper">
          <h2 className="skills_header">
            Here's my current tech stack 
            <span className="replacable"> and what I'm confident using.</span>
          </h2>
          <div className="skills-subtitle">
            Hover over each skill to see more details
          </div>
        </div>
      </div>

      {/* Skills Container */}
      <div className="skills_domain">
        <div className="skills_skills">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-wrapper">
              <SkillsCard
                className="skills_skillscard"
                iconx={skill.icon}
                name={skill.name}
                shortline={skill.shortline}
                color={skill.color}
                level={skill.level}
                index={index}
                isVisible={isVisible}
              />
            </div>
          ))}
        </div>

        {/* Simple Progress Indicator */}
        <div className="scroll-progress">
          <div className="progress-text">
            Scroll to explore all {skillsData.length} skills
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="tech-particles">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}>
            <div className="particle-inner"></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
