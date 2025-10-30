import { Award, BookOpen, Code, Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { certifications } from "@/data/portfolio";

const categoryIcons: Record<string, any> = {
  "AI/ML": Code,
  "Web Development": Code,
  Programming: Code,
  Management: Briefcase,
  Design: BookOpen,
  "Software Engineering": Code,
  Blockchain: Code,
};

const categoryColors: Record<string, string> = {
  "AI/ML": "bg-blue-500/10 text-blue-500 border-blue-500/20",
  "Web Development": "bg-green-500/10 text-green-500 border-green-500/20",
  Programming: "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Management: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  Design: "bg-pink-500/10 text-pink-500 border-pink-500/20",
  "Software Engineering": "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
  Blockchain: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
};

export const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & <span className="text-gradient">Training</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Continuous learning across AI, development, and management
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = categoryIcons[cert.category] || Award;
              return (
                <Card
                  key={cert.id}
                  className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="outline" className="bg-muted">
                        {cert.year}
                      </Badge>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-2">{cert.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {cert.issuer}
                      </p>
                      <Badge
                        variant="outline"
                        className={categoryColors[cert.category]}
                      >
                        {cert.category}
                      </Badge>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
