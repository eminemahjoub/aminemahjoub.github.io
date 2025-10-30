import { FileText, BookOpen } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { publications } from "@/data/portfolio";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Publications & <span className="text-gradient">Writing</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Sharing knowledge on blockchain, AI, and IoT innovations
            </p>
          </div>

          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card
                key={pub.id}
                className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {pub.type === "Article" ? (
                        <FileText className="h-6 w-6 text-primary" />
                      ) : (
                        <BookOpen className="h-6 w-6 text-primary" />
                      )}
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <h3 className="text-xl font-bold">{pub.title}</h3>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {pub.type}
                        </Badge>
                        <Badge variant="secondary" className="bg-muted">
                          {pub.year}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {pub.description}
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
