import React, { useEffect, useState } from 'react';
import { ChevronDown, Download, Github, Linkedin, Twitter, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import './App.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Emotion Detection AI",
    description: "Real-time emotion detection using computer vision and ML with webcam integration",
    tech: ["Python", "OpenCV", "TensorFlow", "Streamlit"],
    link: "#"
  },
  {
    id: 2,
    title: "Acne Health Predictor",
    description: "ML-powered skin health analysis and prediction system with real-time recommendations",
    tech: ["Python", "Machine Learning", "Streamlit", "Computer Vision"],
    link: "#"
  },
  {
    id: 3,
    title: "WhatsApp/Email Automation",
    description: "Intelligent messaging automation using LangChain and NLP",
    tech: ["Python", "LangChain", "NLP", "API Integration"],
    link: "#"
  },
  {
    id: 4,
    title: "Stock Price Prediction",
    description: "AI-driven stock market analysis and prediction application",
    tech: ["Python", "TensorFlow", "Pandas", "Streamlit"],
    link: "#"
  },
  {
    id: 5,
    title: "AI System Assistant",
    description: "Voice-controlled AI assistant with app launching and messaging capabilities",
    tech: ["Python", "Speech Recognition", "NLP", "System Integration"],
    link: "#"
  },
  {
    id: 6,
    title: "CI/CD DevOps Platform",
    description: "Full-stack web application with Docker containerization and Kubernetes deployment",
    tech: ["Docker", "Kubernetes", "Jenkins", "React", "Node.js"],
    link: "#"
  }
];

const roles = [
  "AI/ML Enthusiast",
  "Web Developer",
  "Optimizing CI/CD Pipelines",
  "DevOps Practitioner",
  "Cloud & Docker Explorer"
];

const skills = {
  "Languages": ["Python", "Java", "C++", "C", "HTML", "CSS", "JavaScript", "SQL", "React"],
  "Frameworks & DevOps": ["Jenkins", "Docker", "Kubernetes", "MongoDB", "Express"],
  "Tools": ["Streamlit", "Minikube", "Kubectl", "Git", "GitHub Actions", "Postman", "VS Code", "Netlify"]
};

function App() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showAbout, setShowAbout] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [showProjects, setShowProjects] = useState(false);
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const fullName = "Hi, I'm Deepali Verma";

  useEffect(() => {
    // Typewriter effect
    let index = 0;
    const typewriterInterval = setInterval(() => {
      setTypewriterText(fullName.slice(0, index + 1));
      index++;
      if (index >= fullName.length) {
        clearInterval(typewriterInterval);
        setTimeout(() => setShowAbout(true), 500);
      }
    }, 100);

    return () => clearInterval(typewriterInterval);
  }, []);

  useEffect(() => {
    // Role rotation
    if (showAbout) {
      const roleInterval = setInterval(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 1000);

      return () => clearInterval(roleInterval);
    }
  }, [showAbout]);

  useEffect(() => {
    // Show projects after about section
    if (showAbout) {
      setTimeout(() => setShowProjects(true), 1000);
    }
  }, [showAbout]);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="wave-container">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>

      {/* Fixed DV Logo */}
      <div className="fixed top-8 left-8 z-50">
        <div className="logo-container">
          <span className="text-4xl font-bold text-blue-300">DV</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-8 right-8 z-50">
        <div className="flex space-x-6">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Home</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
          <button onClick={() => scrollToSection('skills')} className="nav-link">Skills</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Projects</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4">
        <div className="hero-card">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Profile Photo */}
            <div className="profile-photo-container">
              <div className="profile-photo">
                <img 
                  src="/photo.jpg" 
                  alt="Deepali Verma" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="typewriter">{typewriterText}</span>
                <span className="cursor">|</span>
              </h1>
              
              {showAbout && (
                <div className="role-container">
                  <div className="text-xl md:text-2xl text-blue-300 mb-6">
                    {roles.map((role, index) => (
                      <div
                        key={index}
                        className={`role-text ${index === currentRole ? 'active' : ''}`}
                      >
                        {role}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {showAbout && (
            <div className="scroll-indicator">
              <ChevronDown className="w-6 h-6 animate-bounce" />
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      {showAbout && (
        <section id="about" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="about-card">
              <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
              <p className="text-lg leading-relaxed text-center">
                I am Deepali Verma, an AI/ML and DevOps enthusiast with a strong passion for building scalable, 
                intelligent, and automation-driven applications. With experience in MLOps, full-stack development, 
                cloud-native tools, and CI/CD pipelines, I blend intelligence with engineering for real-world solutions.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {showProjects && (
        <section id="skills" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-card">
                  <h3 
                    className="text-xl font-semibold mb-4 cursor-pointer flex items-center justify-between"
                    onClick={() => setExpandedSkill(expandedSkill === category ? null : category)}
                  >
                    {category}
                    <ChevronDown 
                      className={`w-5 h-5 transition-transform ${expandedSkill === category ? 'rotate-180' : ''}`}
                    />
                  </h3>
                  <div className={`skill-items ${expandedSkill === category ? 'expanded' : ''}`}>
                    {items.map((skill, index) => (
                      <span key={index} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {showProjects && (
        <section id="projects" className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  className="project-card"
                  onClick={() => setSelectedProject(project)}
                >
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag">+{project.tech.length - 3}</span>
                    )}
                  </div>
                  <div className="mt-4 flex items-center text-blue-300 hover:text-blue-200">
                    <span className="mr-2">View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {showProjects && (
        <section id="contact" className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="contact-card">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-300" />
                    <span>deepaliverma440@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-300" />
                    <span>+91 8529301089</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    <span>Jaipur, Rajasthan</span>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="contact-card">
                <h3 className="text-xl font-semibold mb-6">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="#" className="social-link">
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </a>
                  <a href="https://github.com/Deepali73" className="social-link">
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a href="http://www.linkedin.com/in/deepali-verma-075978257" className="social-link">
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://x.com/DeepaliVer13316?s=08" className="social-link">
                    <Twitter className="w-5 h-5" />
                    <span>Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
              <button onClick={() => setSelectedProject(null)} className="text-gray-400 hover:text-white">
                ×
              </button>
            </div>
            <p className="text-gray-300 mb-6">{selectedProject.description}</p>
            <div className="mb-6">
              <h4 className="font-semibold mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {selectedProject.link && (
              <a href={selectedProject.link} className="inline-flex items-center text-blue-300 hover:text-blue-200">
                <span className="mr-2">View Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;