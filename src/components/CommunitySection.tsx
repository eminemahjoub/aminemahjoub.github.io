import { Users, Heart, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { community } from "@/data/portfolio";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Community & <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Building tech communities and empowering innovation across Tunisia
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {community.map((item, index) => (
              <Card
                key={item.id}
                className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-bold">{item.role}</h3>
                        <p className="text-sm font-semibold text-primary">
                          {item.organization}
                        </p>
                      </div>
                      <Badge
                        variant="outline"
                        className="bg-muted flex-shrink-0 self-start"
                      >
                        {item.period}
                      </Badge>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">
                    Passionate About Community Impact
                  </h3>
                  <p className="text-muted-foreground max-w-2xl">
                    Organized numerous AI, Blockchain, and IoT workshops nationwide,
                    fostering innovation and collaboration across Tunisia's tech ecosystem
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
