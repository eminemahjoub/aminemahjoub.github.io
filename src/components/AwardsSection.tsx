import { Trophy, Award as AwardIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { awards } from "@/data/portfolio";

export const AwardsSection = () => {
  return (
    <section id="awards" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Awards & <span className="text-gradient">Recognition</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Honored for innovation and excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <Card
                key={award.id}
                className="p-6 bg-card card-glow border-primary/20 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-primary" />
                    </div>
                  </div>

                  <div className="flex-grow space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-bold leading-tight">
                        {award.title}
                      </h3>
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20 flex-shrink-0"
                      >
                        {award.year}
                      </Badge>
                    </div>

                    <p className="text-sm font-semibold text-primary">
                      {award.organization}
                    </p>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {award.description}
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
