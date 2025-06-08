
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Certifications() {
  return (
    <section id="certifications" className="section-container bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" />
        
        <Card className="border border-border animate-fade-in">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <CardTitle>Prompt Engineering for ChatGPT</CardTitle>
              <div className="flex items-center gap-2">
                <span className="text-primary font-medium">Vanderbilt University</span>
                <span className="text-sm text-muted-foreground">Jan 2025 – Mar 2025</span>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
