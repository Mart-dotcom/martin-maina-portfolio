
import { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectCategories = ['All', 'E-Commerce', 'Mobile App', 'Product Management'];
  
  const projects = [
    {
      title: "Lucrebag E-Commerce Platform",
      description: "A fully responsive e-commerce platform with M-Pesa and card payment integration, optimized for mobile and SEO.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB", "M-Pesa API", "Google Analytics", "Facebook Pixel"],
      category: "E-Commerce",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "iCare Store Platform",
      description: "An online store platform with inventory management, customer accounts, and integrated payment processing.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Payment APIs", "A/B Testing"],
      category: "E-Commerce",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Parcel Delivery App",
      description: "A Grab-style delivery app for Kenya with real-time GPS tracking, automated rating systems, and M-Pesa integration.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      technologies: ["Flutter", "Firebase", "Google Maps API", "M-Pesa", "React Native"],
      category: "Mobile App",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Agile Project Management",
      description: "Implementation of Agile/Scrum methodologies for software development teams, including sprint planning and tracking.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      technologies: ["JIRA", "Trello", "Agile/Scrum", "Sprint Planning", "Product Roadmapping"],
      category: "Product Management",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Custom analytics dashboard for tracking user behavior, performance metrics, and conversion optimization.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
      technologies: ["Google Analytics", "A/B Testing", "Data Visualization", "Dashboard Design"],
      category: "Product Management",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "M-Pesa Integration System",
      description: "Streamlined payment processing system using M-Pesa for e-commerce and mobile applications in Kenya.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
      technologies: ["M-Pesa API", "Node.js", "Payment Processing", "Security Protocols", "Transaction Logging"],
      category: "E-Commerce",
      links: {
        live: "#",
        github: "#"
      }
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Featured Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {projectCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-md font-medium transition-all",
                activeFilter === category 
                  ? "bg-portfolio-navy text-white" 
                  : "bg-white text-portfolio-navy hover:bg-gray-100"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={cn(
                "project-card animate-slide-up opacity-0",
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold text-portfolio-navy mb-2">{project.title}</h3>
                <p className="text-portfolio-slate mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs bg-portfolio-lightest-navy text-portfolio-green rounded px-2 py-1 mr-2 mb-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.links.github} 
                    className="text-portfolio-navy hover:text-portfolio-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a 
                    href={project.links.live} 
                    className="text-portfolio-navy hover:text-portfolio-green transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <span className="flex-grow"></span>
                  <span className="text-sm text-portfolio-slate flex items-center">
                    <Code className="h-4 w-4 mr-1" />
                    {project.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
