
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl animate-fade-in">
          <p className="text-portfolio-green font-mono mb-2">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-portfolio-navy mb-4">
            Your Name.
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-slate mb-6">
            I build things for the web.
          </h2>
          <p className="text-lg text-portfolio-slate max-w-2xl mb-8">
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center text-portfolio-slate hover:text-portfolio-green transition-colors">
          <span className="mb-2 text-sm">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
