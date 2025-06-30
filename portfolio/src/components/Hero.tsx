
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // In a real implementation, this would trigger a download
    console.log('Downloading resume...');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          {/* <div className="mb-8 fade-in">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-primary/20">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
              />
            </div>
          </div> */}

          {/* Main Heading */}
          <div className="mb-6 slide-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Hey, I'm{' '}
              <span className="gradient-text">Rajarajan</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Full-Stack Developer crafting exceptional digital experiences with modern technologies
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I specialize in Angular, JavaScript, Node.js, ExpressJS, MongoDB and React to build scalable web applications that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 fade-in flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-3"
            >
              View My Work
            </Button>
            <a href="/Rajarajan_Resume.pdf" download>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3"
            >
              Download Resume
            </Button>
            </a>
          </div>

          {/* Social Links */}
          <div className="mb-12 fade-in flex justify-center space-x-6">
            <a
              href="https://github.com/rajarajan15"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/rajarajan-a-p/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:rajarajanpanneerselvam15@gmail.com"
              className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email Contact"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="fade-in">
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Scroll to About section"
            >
              <ArrowDown className="w-6 h-6 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
