
import { useState } from 'react';
import { Mail, Phone, Send, MapPin, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-portfolio-navy dark:bg-portfolio-cyber-black text-white relative">
      <div className="dark:circuit-bg absolute inset-0 pointer-events-none"></div>
      <div className="container mx-auto px-4 relative">
        <h2 className="text-3xl font-bold mb-6 pb-1 border-b border-portfolio-green dark:border-portfolio-cyber-teal inline-block text-white dark:cyber-heading">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-green dark:text-portfolio-cyber-teal dark:cyber-heading">Let's Connect</h3>
            <p className="text-portfolio-light-slate dark:text-portfolio-white mb-8">
              I'm currently available for freelance work and full-time opportunities. 
              If you have a project that needs some creative coding or you're looking 
              for a developer to join your team, feel free to contact me.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-light-navy dark:bg-portfolio-cyber-dark rounded-full flex items-center justify-center dark:border dark:border-portfolio-cyber-blue/30">
                  <Mail className="text-portfolio-green dark:text-portfolio-cyber-teal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-portfolio-light-slate dark:text-portfolio-cyber-blue">Email</h4>
                  <a 
                    href="mailto:martinmaina.g.k@gmail.com" 
                    className="text-portfolio-lightest-slate dark:text-portfolio-white hover:text-portfolio-green dark:hover:text-portfolio-cyber-teal transition-colors"
                  >
                    martinmaina.g.k@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-light-navy dark:bg-portfolio-cyber-dark rounded-full flex items-center justify-center dark:border dark:border-portfolio-cyber-blue/30">
                  <Phone className="text-portfolio-green dark:text-portfolio-cyber-teal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-portfolio-light-slate dark:text-portfolio-cyber-blue">Phone</h4>
                  <a 
                    href="tel:+254712895991" 
                    className="text-portfolio-lightest-slate dark:text-portfolio-white hover:text-portfolio-green dark:hover:text-portfolio-cyber-teal transition-colors"
                  >
                    +254 712 895 991
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-portfolio-light-navy dark:bg-portfolio-cyber-dark rounded-full flex items-center justify-center dark:border dark:border-portfolio-cyber-blue/30">
                  <MapPin className="text-portfolio-green dark:text-portfolio-cyber-teal" />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm text-portfolio-light-slate dark:text-portfolio-cyber-blue">Location</h4>
                  <p className="text-portfolio-lightest-slate dark:text-portfolio-white">Nairobi, Kenya</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-portfolio-light-navy dark:bg-portfolio-cyber-dark/60 rounded-lg p-6 animate-slide-up opacity-0 dark:cyber-card dark:border-portfolio-cyber-teal/30" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-semibold mb-6 text-portfolio-green dark:text-portfolio-cyber-teal dark:cyber-heading">Send a Message</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-portfolio-lightest-slate dark:text-portfolio-white mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-lightest-navy dark:bg-portfolio-cyber-black border border-portfolio-lightest-navy dark:border-portfolio-cyber-blue/40 rounded-md text-portfolio-lightest-slate dark:text-portfolio-white focus:outline-none focus:ring-2 focus:ring-portfolio-green dark:focus:ring-portfolio-cyber-teal"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-portfolio-lightest-slate dark:text-portfolio-white mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-portfolio-lightest-navy dark:bg-portfolio-cyber-black border border-portfolio-lightest-navy dark:border-portfolio-cyber-blue/40 rounded-md text-portfolio-lightest-slate dark:text-portfolio-white focus:outline-none focus:ring-2 focus:ring-portfolio-green dark:focus:ring-portfolio-cyber-teal"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-portfolio-lightest-slate dark:text-portfolio-white mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-lightest-navy dark:bg-portfolio-cyber-black border border-portfolio-lightest-navy dark:border-portfolio-cyber-blue/40 rounded-md text-portfolio-lightest-slate dark:text-portfolio-white focus:outline-none focus:ring-2 focus:ring-portfolio-green dark:focus:ring-portfolio-cyber-teal"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-portfolio-lightest-slate dark:text-portfolio-white mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-portfolio-lightest-navy dark:bg-portfolio-cyber-black border border-portfolio-lightest-navy dark:border-portfolio-cyber-blue/40 rounded-md text-portfolio-lightest-slate dark:text-portfolio-white focus:outline-none focus:ring-2 focus:ring-portfolio-green dark:focus:ring-portfolio-cyber-teal"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-300",
                  "bg-portfolio-green text-portfolio-navy dark:bg-portfolio-cyber-teal dark:text-portfolio-cyber-black dark:hover:bg-portfolio-cyber-green",
                  isSubmitting && "opacity-70 cursor-not-allowed",
                  !isSubmitting && "dark:hover:shadow-[0_0_15px_rgba(1,255,195,0.5)]"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
