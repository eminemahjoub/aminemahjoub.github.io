import { GraduationCap, CheckCircle2, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/portfolio";

export const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Education & <span className="text-gradient">Academic Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Building a strong foundation in computer science and intelligent systems
            </p>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={edu.id}
                className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <GraduationCap className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{edu.degree}</h3>
                        <p className="text-lg font-semibold text-primary">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className={
                            edu.status === "In Progress"
                              ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                              : "bg-green-500/10 text-green-500 border-green-500/20"
                          }
                        >
                          {edu.status === "In Progress" ? (
                            <Clock className="h-3 w-3 mr-1" />
                          ) : (
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                          )}
                          {edu.status}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted">
                          {edu.period}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
