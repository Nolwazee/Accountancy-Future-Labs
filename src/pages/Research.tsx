import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cuboid, Bot, Database, BarChart, Lightbulb } from "lucide-react";

const Research = () => {
  const themes = [
    {
      icon: Cuboid,
      title: "Immersive Audit Simulations (VR/AR)",
      description: "Developing virtual and augmented reality environments for hands-on audit training, allowing students to practice stock-taking, controls testing, and audit procedures in realistic 3D spaces.",
      color: "bg-gradient-primary",
    },
    {
      icon: Bot,
      title: "Generative AI Tutors & Learning Systems",
      description: "Creating intelligent tutoring systems that generate personalized learning materials, practice questions, and adaptive feedback for accounting and auditing students.",
      color: "bg-gradient-accent",
    },
    {
      icon: Database,
      title: "Digital Audit & Warehouse Management Systems",
      description: "Building practical web-based platforms that simulate real-world audit workflows, inventory management, and verification processes for experiential learning.",
      color: "bg-gradient-primary",
    },
    {
      icon: BarChart,
      title: "Learning Analytics & Data-Driven Education",
      description: "Implementing analytics frameworks to track student progress, identify learning gaps, and optimize educational outcomes through data insights.",
      color: "bg-gradient-accent",
    },
    {
      icon: Lightbulb,
      title: "Innovation in Accounting Education",
      description: "Researching and implementing novel pedagogical approaches, curriculum innovations, and technology integration strategies to modernize accounting education.",
      color: "bg-gradient-primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Research Themes</h1>
              <p className="text-xl text-muted-foreground">
                Exploring the frontier of technology-enhanced accounting education
              </p>
            </div>
          </div>
        </section>

        {/* Research Themes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid gap-8">
                {themes.map((theme, index) => (
                  <Card key={index} className="shadow-medium hover:shadow-large transition-smooth">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${theme.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <theme.icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-xl">{theme.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{theme.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Research Approach */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Research Approach</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Interdisciplinary Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We bring together expertise from accounting, computer science, education technology, and cognitive science to create holistic solutions.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Practice-Based Research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Our research is grounded in real classroom experiences and industry needs, ensuring practical relevance and immediate applicability.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Student-Centered Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Students are active participants in our research, providing feedback, testing prototypes, and contributing to the development process.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>Open Science & Sharing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      We believe in sharing our findings, tools, and methodologies to advance the broader community of accounting education.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Research;
