
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "IntegriProct",
      description: "IntegriProct is a smart and flexible exam proctoring system designed for digital classroom environments. It offers rule-based and AI-powered proctoring features to maintain test integrity and support both teachers and students.",
      image: "/image1.png",
      technologies: ["NextJs", "Node.js", "Python", "MongoDB"],
      sourceCode: "https://github.com/rajarajan15/IntegriProct"
    },
    {
      title: "AgroSense",
      description: "An IoT-based Crop Prediction System that integrates real-time sensor data with intelligent algorithms to recommend the most suitable crops for farming. It is designed to assist farmers in making data-driven decisions using environmental inputs collected from IoT devices deployed in the field.",
      image: "/image2.png",
      technologies: ["React", "Python (Flask, Sklearn)", "ThingSpeak", "Sensors" ],
      sourceCode: "https://github.com/rajarajan15/AgroSense"
    },
    {
      title: "MusePlay",
      description: "MusePlay is a simple and user-friendly music player with an automatic volume adjustment feature, built using React and Material UI.",
      image: "/image3.png",
      technologies: ["React"],
      liveDemo: "https://muse-play.vercel.app/",
      sourceCode: "https://github.com/rajarajan15/MusePlay"
    },
    {
      title: "Factory-Flow (Intern Project)",
      description: "A low-code no-code platform for building factory flows and integrating with IoT devices. It allows users to create custom workflows and connect various devices without extensive coding knowledge.",
      image: "/image4.png",
      technologies: ["Angular", "JointJS", "Node.js", "ExpressJS", "MongoDB"],
      sourceCode: "https://github.com/rajarajan15/Factory-Flow"
    },
    {
      title: "Label-Creation (Intern Project)",
      description: "A low-code no-code platform for creating and managing labels for various applications. It provides a user-friendly interface for designing labels without requiring extensive coding skills.",
      image: "/image5.png",
      technologies: ["Angular", "JointJS", "Node.js", "ExpressJS", "MongoDB"],
      sourceCode: "https://github.com/rajarajan15/Label-Creation"
    }
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <Button size="sm" asChild className="flex-1">
                    <a
                      aria-disabled={!project.liveDemo}
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
