
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, url: '#', label: 'GitHub' },
    { icon: <Linkedin className="w-5 h-5" />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, url: '#', label: 'Twitter' },
    { icon: <Instagram className="w-5 h-5" />, url: '#', label: 'Instagram' }
  ];

  return (
    <footer className="py-10 bg-white dark:bg-portfolio-cyber-black border-t border-gray-200 dark:border-portfolio-cyber-blue/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-portfolio-navy dark:text-portfolio-white cyber-text">
              <span className="text-portfolio-green dark:text-portfolio-cyber-pink">{'<'}</span>
              MARTIN MAINA
              <span className="text-portfolio-green dark:text-portfolio-cyber-pink">{'/>'}</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-portfolio-slate dark:text-portfolio-cyber-teal hover:text-portfolio-green dark:hover:text-portfolio-cyber-pink transition-colors duration-300"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-portfolio-slate dark:text-portfolio-white text-sm">
            © {currentYear} Martin Maina. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
