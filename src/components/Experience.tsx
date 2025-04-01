
import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Web Developer",
      period: "2021 - Present",
      responsibilities: [
        "Lead a team of 5 developers in building and maintaining client websites",
        "Implemented CI/CD pipeline, reducing deployment time by 30%",
        "Developed custom CMS solutions for enterprise clients",
        "Collaborated with design team to create responsive, accessible interfaces"
      ]
    },
    {
      company: "Digital Innovations",
      position: "Project Manager",
      period: "2019 - 2021",
      responsibilities: [
        "Managed end-to-end delivery of software projects for 10+ clients",
        "Implemented agile methodologies, improving team efficiency by 25%",
        "Coordinated between development, design, and client teams",
        "Established project documentation standards and quality assurance processes"
      ]
    },
    {
      company: "WebCraft Studios",
      position: "Frontend Developer",
      period: "2017 - 2019",
      responsibilities: [
        "Built responsive websites and web applications using React and Vue.js",
        "Collaborated with back-end developers to integrate user-facing elements",
        "Optimized applications for maximum speed and scalability",
        "Implemented A/B tests to improve user experience and conversion rates"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Work Experience</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
          <div className="lg:col-span-1">
            <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible space-x-4 lg:space-x-0 lg:space-y-2 pb-4 lg:pb-0">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-4 py-3 text-left transition-all whitespace-nowrap lg:whitespace-normal",
                    "border-b-2 lg:border-l-2 lg:border-b-0 border-gray-200",
                    activeTab === index 
                      ? "border-portfolio-green text-portfolio-navy font-medium bg-gray-50"
                      : "hover:bg-gray-50 hover:text-portfolio-navy"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white p-6 rounded-lg shadow-sm animate-fade-in">
            <h3 className="text-xl font-semibold text-portfolio-navy">
              {experiences[activeTab].position}{" "}
              <span className="text-portfolio-green">@ {experiences[activeTab].company}</span>
            </h3>
            
            <div className="flex items-center mt-2 mb-4 text-portfolio-slate">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{experiences[activeTab].period}</span>
            </div>
            
            <ul className="space-y-4">
              {experiences[activeTab].responsibilities.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-start text-portfolio-slate animate-slide-in opacity-0"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Briefcase className="w-5 h-5 text-portfolio-green mr-2 mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
