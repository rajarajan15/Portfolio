import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const Experience = () => {
  const internship = {
    role: "Full Stack Developer Intern",
    company: "Wimera Systems, Bangalore",
    duration: "July 2024 – November 2024",
    points: [
      "Built a role-based Excel editor with shift-based editing windows and cell-level access, improving secure collaboration.",
      "Developed a visual Smart Factory system using JointJS with zone/station setup and live order-triggered workflows.",
      "Integrated MongoDB backend for real-time data sync across roles, reducing coordination delays by 50%."
    ]
  };

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical exposure through full stack development during my industry internship.
          </p>
        </div>

        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="flex items-center space-x-2">
              <Briefcase className="w-5 h-5 text-primary" />
              <CardTitle>{internship.role} – {internship.company}</CardTitle>
            </div>
            <span className="text-sm text-muted-foreground">{internship.duration}</span>
          </CardHeader>
          <CardContent className="space-y-3 pt-0">
            {internship.points.map((point, index) => (
              <div key={index} className="text-sm text-muted-foreground">
                • {point}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
