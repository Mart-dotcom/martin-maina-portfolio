
import { useState } from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { cn } from '@/lib/utils';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const projectCategories = ['All', 'Web Development', 'Mobile', 'UI/UX', 'Data'];
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Web Development",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Project Management Dashboard",
      description: "A comprehensive dashboard for tracking project progress, managing tasks, and analyzing team performance.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      category: "Web Development",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Financial Analytics Platform",
      description: "An interactive platform for analyzing financial data with customizable reports and visualizations.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3",
      technologies: ["React", "Python", "Flask", "D3.js", "SQLite"],
      category: "Data",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Mobile Fitness App",
      description: "A cross-platform fitness application for tracking workouts, nutrition, and providing personalized recommendations.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3",
      technologies: ["React Native", "Firebase", "Expo", "Redux"],
      category: "Mobile",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "Healthcare Portal UX Design",
      description: "A comprehensive redesign of a healthcare portal focusing on accessibility and user experience.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3",
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      category: "UI/UX",
      links: {
        live: "#",
        github: "#"
      }
    },
    {
      title: "IoT Dashboard",
      description: "A real-time dashboard for monitoring and controlling IoT devices with data visualization.",
      image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3",
      technologies: ["React", "Node.js", "MQTT", "WebSockets", "Chart.js"],
      category: "Data",
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
