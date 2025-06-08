
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Experience" />
        
        <Card className="border border-border animate-fade-in">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <CardTitle>Web Development Intern</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-primary font-medium">Raise Digital</span>
                <span className="text-sm text-muted-foreground">Mar 2022 – May 2022</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent>
            <p>
              Built responsive websites using HTML, CSS, JavaScript in a fast-paced, 
              remote team environment.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
