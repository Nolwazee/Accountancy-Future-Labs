import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Award, Users, Building } from "lucide-react";

const About = () => {
  const objectives = [
    "Develop immersive VR/AR audit simulations for experiential learning",
    "Create intelligent AI tutoring systems for accounting education",
    "Build practical digital audit and warehouse management platforms",
    "Advance learning analytics and data-driven educational insights",
    "Foster innovation in accounting pedagogy and curriculum design",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About ISARG</h1>
              <p className="text-xl text-muted-foreground">
                Pioneering the future of accountancy education through research and innovation
              </p>
            </div>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Who We Are</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                The Intelligent & Simulated Accountancy Research Group (ISARG) is a dynamic research collective dedicated to advancing accountancy education through artificial intelligence, virtual reality, and intelligent simulation systems. Based at Durban University of Technology's Faculty of Accounting & Informatics, we bring together researchers, educators, and technology developers to create innovative solutions for modern accounting education.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Target className="w-6 h-6 text-primary" />
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To transform accountancy education through intelligent systems and immersive simulations, preparing students for the digital age of audit and financial management.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Eye className="w-6 h-6 text-accent" />
                    Our Vision
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    To be the leading research group in Africa for AI-driven and simulation-based accounting education innovation, setting global standards for experiential learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Objectives */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Objectives</h2>
              </div>
              <div className="grid gap-4">
                {objectives.map((objective, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-medium transition-smooth">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-foreground font-semibold">{index + 1}</span>
                        </div>
                        <p className="text-muted-foreground pt-1">{objective}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Academic Home */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Building className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Our Academic Home</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">Durban University of Technology</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Faculty of Accounting & Informatics
              </p>
              <Card className="shadow-medium">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-xl mb-4">Alignment with ENVISION2030</h4>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary-foreground">P</span>
                      </div>
                      <h5 className="font-semibold mb-2">People</h5>
                      <p className="text-sm text-muted-foreground">Student-centered innovation</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-accent-foreground">I</span>
                      </div>
                      <h5 className="font-semibold mb-2">Innovation</h5>
                      <p className="text-sm text-muted-foreground">Research-driven solutions</p>
                    </div>
                    <div>
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl font-bold text-primary-foreground">I</span>
                      </div>
                      <h5 className="font-semibold mb-2">Impact</h5>
                      <p className="text-sm text-muted-foreground">Transforming education</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Enhanced learning through immersive experiences, AI-powered tutoring, and practical skill development.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Lecturers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Innovative teaching tools, data-driven insights, and cutting-edge resources for modern pedagogy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Industry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Work-ready graduates, collaborative research opportunities, and practical solutions to real challenges.
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

export default About;
