
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, User } from 'lucide-react';

const Skills = () => {
  const technicalSkills = [
    {
      category: "Frontend",
      skills: ["Angular", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Next.js"]
    },
    {
      category: "Programming Languages",
      skills: ["C", "C++", "Python"]
    }
    ,
    {
      category: "Backend & Databases",
      skills: ["Node.js", "Express.js", "FastAPI", "MongoDB", "MySQL", "Redis"]
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Azure", "Linux"]
    },
    {
      category: "Mobile & Others",
      skills: ["React Native", "RESTful APIs"]
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Team Leadership",
    "Communication",
    "Project Management",
    "Critical Thinking",
    "Adaptability",
    "Mentoring",
    "Time Management"
  ];

  const skillLevels = [
    { skill: "React/TypeScript", level: 80 },
    { skill: "Angular", level: 80 },
    { skill: "Node.js", level: 85 },
    { skill: "Database Design", level: 80 },
    { skill: "System Architecture", level: 80 },
    { skill: "Mobile Development", level: 70 }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Technical Skills */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-2">
                <Code className="w-5 h-5 text-primary" />
                <CardTitle>Technical Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((category, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-primary mb-3">{category.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="hover:bg-primary/10 transition-colors">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <Card className="h-full">
              <CardHeader className="flex flex-row items-center space-y-0 space-x-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle>Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skill Proficiency */}
        <Card>
          <CardHeader>
            <CardTitle>Skill Proficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skillLevels.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-sm text-muted-foreground">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
