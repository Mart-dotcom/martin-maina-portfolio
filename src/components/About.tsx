
import { cn } from "@/lib/utils";

const About = () => {
  const certifications = [
    {
      title: "Certificate in Data Science & Analytics",
      institution: "HP Life",
      year: "2025"
    },
    {
      title: "Certificate in NIST CYBERSECURITY Framework",
      institution: "Alison Institute",
      year: "2024"
    },
    {
      title: "Bachelor of Business Information Technology",
      institution: "Jomo Kenyatta University of Agriculture and Technology",
      year: "2022"
    },
    {
      title: "Certificate in Computer Systems Operations",
      institution: "Unity College of Professional Studies",
      year: "2016"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-portfolio-slate mb-4">
              Hello! I'm a passionate software developer and project manager with expertise in web development, 
              data science, and cybersecurity. My journey in technology started with a foundation in computer systems 
              operations and grew through academic achievement and continuous learning.
            </p>
            <p className="text-portfolio-slate mb-4">
              I specialize in creating responsive web applications and managing software projects from 
              conception to completion. With a strong background in business information technology, 
              I bring a unique perspective that bridges technical expertise with business needs.
            </p>
            <p className="text-portfolio-slate">
              My approach combines clean code principles with effective project management methodologies, 
              ensuring that I deliver high-quality solutions that meet client requirements on time and within budget.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-portfolio-navy mb-4">Education & Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "border-l-4 border-portfolio-green pl-4 py-2 animate-slide-in",
                    "opacity-0"
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h4 className="text-lg font-medium text-portfolio-navy">{cert.title}</h4>
                  <p className="text-portfolio-slate">{cert.institution} | {cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
