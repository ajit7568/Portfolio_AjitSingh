
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    institution: "NIT Srinagar",
    degree: "B.Tech in IT",
    period: "2019–2023",
    grade: "CGPA: 7.05"
  },
  {
    institution: "Navjeevan Public School, Sikar",
    degree: "12th",
    period: "2017–2018",
    grade: "84.60%"
  },
  {
    institution: "Jawahar Navodaya Vidyalaya, Sardarshahar",
    degree: "10th",
    period: "2014–2017",
    grade: "CGPA: 8.4"
  }
];

export default function Education() {
  return (
    <section id="education" className="section-container">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education" />
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="border border-border animate-fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <CardTitle>{edu.institution}</CardTitle>
                    <CardDescription>{edu.degree}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">{edu.period}</div>
                    <div className="font-medium text-primary">{edu.grade}</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
