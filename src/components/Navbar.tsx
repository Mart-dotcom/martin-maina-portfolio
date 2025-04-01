
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeToggle from './ThemeToggle';

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
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-portfolio-cyber-black/90 backdrop-blur-sm shadow-sm dark:shadow-portfolio-cyber-teal/10 z-50 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="#" className="text-2xl font-bold text-portfolio-navy dark:text-portfolio-cyber-teal cyber-text">
          <span className="text-portfolio-green dark:text-portfolio-cyber-pink">{'<'}</span>
          PORTFOLIO
          <span className="text-portfolio-green dark:text-portfolio-cyber-pink">{'/>'}</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover-link text-portfolio-navy dark:text-portfolio-white font-medium dark:hover:text-portfolio-cyber-green transition-colors duration-300"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#resume" 
            className="border border-portfolio-green dark:border-portfolio-cyber-pink text-portfolio-green dark:text-portfolio-cyber-pink px-4 py-2 rounded-md hover:bg-portfolio-green/10 dark:hover:bg-portfolio-cyber-pink/10 transition-colors duration-300"
          >
            Resume
          </a>
          <ThemeToggle />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-portfolio-navy dark:text-portfolio-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed inset-0 bg-white dark:bg-portfolio-cyber-black z-40 flex flex-col items-center justify-center space-y-6 transition-all duration-300",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl font-medium text-portfolio-navy dark:text-portfolio-white hover:text-portfolio-green dark:hover:text-portfolio-cyber-pink"
            onClick={() => setIsMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#resume" 
          className="border border-portfolio-green dark:border-portfolio-cyber-pink text-portfolio-green dark:text-portfolio-cyber-pink px-6 py-2 rounded-md hover:bg-portfolio-green/10 dark:hover:bg-portfolio-cyber-pink/10 transition-colors duration-300 mt-4"
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
