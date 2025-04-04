
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-portfolio-green dark:text-portfolio-cyber-teal font-mono mb-2">Welcome to</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy dark:text-portfolio-white mb-4">
            Swaiy Express Kenya.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate dark:text-portfolio-light-slate mb-6">
            Fast, Reliable Delivery.
          </h2>
          <p className="text-lg text-portfolio-slate dark:text-portfolio-light-slate max-w-2xl mb-8">
            A Grab-style delivery app for Kenya with real-time GPS tracking, automated rating systems, 
            and M-Pesa integration. We bridge the gap between businesses and customers with reliable 
            delivery solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              Our Services
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-portfolio-slate hover:text-portfolio-green dark:text-portfolio-light-slate dark:hover:text-portfolio-cyber-teal transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
