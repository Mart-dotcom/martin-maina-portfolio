
import { Code, Database, Terminal, Layout, Server, Shield, LineChart, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-portfolio-green" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue.js", "Tailwind CSS", "Bootstrap"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-portfolio-green" />,
      skills: ["Node.js", "Express", "PHP", "Python", "Java", "RESTful APIs", "GraphQL"]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6 text-portfolio-green" />,
      skills: ["SQL", "MongoDB", "PostgreSQL", "AWS", "Firebase", "Docker", "Kubernetes"]
    },
    {
      title: "Tools & Methods",
      icon: <Terminal className="w-6 h-6 text-portfolio-green" />,
      skills: ["Git", "GitHub", "VS Code", "NPM", "Webpack", "Jest", "CI/CD"]
    },
    {
      title: "Project Management",
      icon: <Briefcase className="w-6 h-6 text-portfolio-green" />,
      skills: ["Agile", "Scrum", "JIRA", "Trello", "Kanban", "Requirements Analysis"]
    },
    {
      title: "Data & Analytics",
      icon: <LineChart className="w-6 h-6 text-portfolio-green" />,
      skills: ["Python Data Science Stack", "SQL Queries", "Data Visualization", "Excel", "Tableau"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6 text-portfolio-green" />,
      skills: ["NIST Framework", "Security Audits", "Network Security", "Authentication Systems"]
    },
    {
      title: "Languages",
      icon: <Code className="w-6 h-6 text-portfolio-green" />,
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "Java", "SQL", "HTML", "CSS"]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white p-6 rounded-lg shadow-md border-t-4 border-portfolio-green animate-slide-up opacity-0",
                "hover:shadow-lg transition-all duration-300"
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold text-portfolio-navy ml-2">{category.title}</h3>
              </div>
              <div className="flex flex-wrap">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
