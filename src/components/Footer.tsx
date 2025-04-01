
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
    <footer className="py-10 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold text-portfolio-navy">
              <span className="text-portfolio-green">{'<'}</span>
              SIMON MUTHII
              <span className="text-portfolio-green">{'/>'}</span>
            </a>
          </div>
          
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                className="text-portfolio-slate hover:text-portfolio-green transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="text-portfolio-slate text-sm">
            © {currentYear} Your Name. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
