
import { useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const experiences = [
    {
      company: "Lucrebag E-Commerce",
      position: "Technical Product Manager",
      period: "2022 - Present",
      responsibilities: [
        "Led the development of Lucrebag's e-commerce platform, ensuring a seamless shopping experience",
        "Defined product roadmap, prioritized features, and managed agile sprints with developers and designers",
        "Integrated payment gateways (M-Pesa, card payments) and optimized for mobile usability and SEO",
        "Implemented Google Analytics & Facebook Pixel to track customer behavior and improve conversions",
        "Achieved 40% increase in traffic within three months and streamlined order fulfillment"
      ]
    },
    {
      company: "iCare Store",
      position: "Project Manager",
      period: "2020 - 2022",
      responsibilities: [
        "Managed the development and maintenance of the iCare online store platform",
        "Coordinated between development, design, and client teams using Agile/Scrum methodologies",
        "Established project documentation standards and quality assurance processes",
        "Implemented A/B tests to improve user experience and conversion rates"
      ]
    },
    {
      company: "Parcel Delivery App",
      position: "Product Development Lead",
      period: "2019 - Present",
      responsibilities: [
        "Spearheaded the development of a Grab-style parcel delivery app for the Kenyan market",
        "Coordinated with engineers, UI/UX designers, and logistics teams using Agile sprints",
        "Implemented real-time GPS tracking (Google Maps API), automated rating systems, and M-Pesa integration",
        "Successfully launched in Nairobi CBD, reducing delivery times by 30% and increasing driver efficiency",
        "Managed the product using JIRA/Trello for sprint tracking and implemented A/B testing for optimization"
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
