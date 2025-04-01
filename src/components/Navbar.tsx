
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-bold text-portfolio-navy">
          <span className="text-portfolio-green">{'<'}</span>
          PORTFOLIO
          <span className="text-portfolio-green">{'/>'}</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover-link text-portfolio-navy font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#resume" 
            className="border border-portfolio-green text-portfolio-green px-4 py-2 rounded-md hover:bg-portfolio-green/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-portfolio-navy focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl font-medium text-portfolio-navy hover:text-portfolio-green"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#resume" 
          className="border border-portfolio-green text-portfolio-green px-6 py-2 rounded-md hover:bg-portfolio-green/10 transition-colors duration-300 mt-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
