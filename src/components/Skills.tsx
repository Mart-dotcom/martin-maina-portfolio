
import { Code, Database, Terminal, Layout, Server, Shield, LineChart, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

const Skills = () => {
  const skillCategories = [
    {
      title: "Technical Management",
      icon: <Briefcase className="w-6 h-6 text-portfolio-green" />,
      skills: ["Agile/Scrum", "JIRA", "Trello", "Sprint Planning", "Product Roadmapping", "Requirements Analysis", "Feature Prioritization"]
    },
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-portfolio-green" />,
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Flutter", "Responsive Design", "UI/UX"]
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6 text-portfolio-green" />,
      skills: ["Node.js", "Firebase", "RESTful APIs", "GraphQL", "Authentication Systems"]
    },
    {
      title: "Database & Cloud",
      icon: <Database className="w-6 h-6 text-portfolio-green" />,
      skills: ["MongoDB", "PostgreSQL", "Firebase", "Cloud Hosting", "AWS", "Data Management"]
    },
    {
      title: "Tools & Methods",
      icon: <Terminal className="w-6 h-6 text-portfolio-green" />,
      skills: ["Git", "GitHub", "VS Code", "CI/CD", "A/B Testing", "QA Processes"]
    },
    {
      title: "Data & Analytics",
      icon: <LineChart className="w-6 h-6 text-portfolio-green" />,
      skills: ["Google Analytics", "Facebook Pixel", "Conversion Tracking", "Data Visualization", "Performance Metrics"]
    },
    {
      title: "Cybersecurity",
      icon: <Shield className="w-6 h-6 text-portfolio-green" />,
      skills: ["NIST Framework", "Payment Security", "Authentication Systems", "Data Protection"]
    },
    {
      title: "Mobile Development",
      icon: <Code className="w-6 h-6 text-portfolio-green" />,
      skills: ["React Native", "Flutter", "Mobile UI/UX", "App Store Optimization", "Location Services", "Push Notifications"]
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
