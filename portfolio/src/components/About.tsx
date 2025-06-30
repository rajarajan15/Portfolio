
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const downloadResume = () => {
    // In a real implementation, this would trigger a download
    console.log('Downloading resume...');
  };

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and writing clean, efficient code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=600&fit=crop"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20"></div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  My Journey
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my final year in Integrated M.Sc. Software Systems at CIT. Gained hands-on experience through projects and a full stack internship at Wimera Systems.
                  Worked on smart factory systems and secure collaboration tools using the MEAN stack.
                  Built real-world apps like MusePlay, Spam Mail Detector, AgroSense, and many more blending academics with impact.
                  Passionate about solving problems with clean, scalable full stack solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  What I Do
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I specialize in full-stack web development with a focus on modern JavaScript frameworks. 
                  From crafting pixel-perfect user interfaces to designing scalable backend architectures, 
                  I enjoy every aspect of the development process. I'm particularly passionate about 
                  performance optimization and accessibility.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  My Values
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and following best practices. 
                  Collaboration, continuous learning, and attention to detail are at the core of my approach. 
                  I'm always eager to take on new challenges and contribute to meaningful projects.
                </p>
              </CardContent>
            </Card>

            <div className="pt-4">
              <a href="/Rajarajan_Resume.pdf" download>
                <Button size="lg" className="w-full sm:w-auto">
                  Download My Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
