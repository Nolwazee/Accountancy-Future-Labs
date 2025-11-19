import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cuboid, Bot, Globe, FileText } from "lucide-react";

const Projects = () => {
  const flagshipProjects = [
    {
      icon: Cuboid,
      title: "VR Warehouse Stock-Taking Simulation",
      status: "Active",
      description: "An immersive 3D virtual reality environment that simulates real warehouse operations. Students practice stock counts, controls testing, and audit verification procedures in a safe, repeatable learning space.",
      features: [
        "Realistic warehouse environment with diverse inventory items",
        "Interactive stock counting and verification tasks",
        "Controls testing scenarios with built-in audit procedures",
        "Performance tracking and feedback system",
      ],
    },
    {
      icon: Bot,
      title: "Generative AI Tutor for Auditing",
      status: "Active",
      description: "An intelligent tutoring system powered by AI that generates personalized study materials, practice questions, and detailed explanations for auditing concepts and procedures.",
      features: [
        "Auto-generated lecture notes and summaries",
        "Customized multiple-choice questions with explanations",
        "Contextual examples based on student progress",
        "Adaptive difficulty based on performance analytics",
      ],
    },
    {
      icon: Globe,
      title: "Web-Based Warehouse Management System",
      status: "Active",
      description: "A comprehensive web application that simulates enterprise-level warehouse operations, providing hands-on experience with inventory management, audit trails, and verification processes.",
      features: [
        "Complete inventory tracking and management",
        "Audit workflow simulation with documentation",
        "Real-time movement and verification tracking",
        "Reporting and analytics dashboard",
      ],
    },
    {
      icon: FileText,
      title: "Audit Process Simulation App",
      status: "In Development",
      description: "A digital platform that recreates the complete audit process within a simulated business environment, from planning through fieldwork to reporting.",
      features: [
        "End-to-end audit process workflow",
        "Client scenario simulations with realistic data",
        "Working paper templates and documentation tools",
        "Risk assessment and materiality calculations",
      ],
    },
  ];

  const futureProjects = [
    {
      title: "Risk Management Simulation",
      description: "Interactive scenarios for enterprise risk assessment and management strategies",
    },
    {
      title: "Integrated Audit Dashboard",
      description: "Real-time analytics platform for audit performance and quality metrics",
    },
    {
      title: "Learning Analytics Engine",
      description: "Advanced data analytics for personalized learning pathways and interventions",
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Flagship Projects</h1>
              <p className="text-xl text-muted-foreground">
                Innovative solutions transforming accounting education
              </p>
            </div>
          </div>
        </section>

        {/* Flagship Projects */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-8">
              {flagshipProjects.map((project, index) => (
                <Card key={index} className="shadow-medium hover:shadow-large transition-smooth">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <project.icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-2xl">{project.title}</CardTitle>
                      </div>
                      <Badge 
                        variant={project.status === "Active" ? "default" : "secondary"}
                        className="mt-1"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{project.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Future Projects */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Future Initiatives</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {futureProjects.map((project, index) => (
                  <Card key={index} className="shadow-medium">
                    <CardHeader>
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Outcomes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Project Outcomes & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Hands-on experience with modern audit tools</li>
                      <li>• Safe environment to practice complex procedures</li>
                      <li>• Personalized learning and instant feedback</li>
                      <li>• Better preparation for professional practice</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Educators</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Enhanced teaching resources and materials</li>
                      <li>• Data-driven insights on student performance</li>
                      <li>• Scalable solutions for large classes</li>
                      <li>• Integration with existing curriculum</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Industry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Graduates with practical technology skills</li>
                      <li>• Reduced training time for new hires</li>
                      <li>• Alignment with industry best practices</li>
                      <li>• Collaboration opportunities for innovation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Research</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Novel methodologies and frameworks</li>
                      <li>• Publications and conference presentations</li>
                      <li>• Open-source contributions to EdTech</li>
                      <li>• Foundation for future innovations</li>
                    </ul>
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

export default Projects;
