import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const Team = () => {
  const teamCategories = [
    {
      title: "Research Leadership",
      members: [
        {
          name: "Dr. Fanie Ndlovu",
          role: "Research Group Leader",
          initials: "FN",
          bio: "Leading innovative research in AI and immersive technologies for accounting education at DUT.",
          email: "faniendlovu@dut.ac.za",
        },
      ],
    },
    {
      title: "Core Research Team",
      members: [
        {
          name: "Research Associate",
          role: "AI Systems Specialist",
          initials: "RA",
          bio: "Developing generative AI tutoring systems and learning analytics platforms.",
        },
        {
          name: "Research Associate",
          role: "VR/AR Developer",
          initials: "RB",
          bio: "Creating immersive simulation environments for audit training.",
        },
        {
          name: "Research Associate",
          role: "Educational Researcher",
          initials: "RC",
          bio: "Investigating pedagogical approaches and learning outcomes in technology-enhanced education.",
        },
      ],
    },
    {
      title: "Technical Development Team",
      members: [
        {
          name: "Developer",
          role: "Full-Stack Developer",
          initials: "D1",
          bio: "Building web-based warehouse management and audit simulation platforms.",
        },
        {
          name: "Developer",
          role: "VR Engineer",
          initials: "D2",
          bio: "Implementing 3D environments and interactive VR experiences.",
        },
        {
          name: "Developer",
          role: "AI Engineer",
          initials: "D3",
          bio: "Integrating machine learning models and AI capabilities into educational tools.",
        },
      ],
    },
    {
      title: "Student Researchers (EPIP Group)",
      members: [
        {
          name: "Student Researcher",
          role: "Postgraduate Researcher",
          initials: "S1",
          bio: "Contributing to VR simulation development and user experience research.",
        },
        {
          name: "Student Researcher",
          role: "Undergraduate Researcher",
          initials: "S2",
          bio: "Supporting data collection and analysis for learning analytics studies.",
        },
        {
          name: "Student Researcher",
          role: "Undergraduate Researcher",
          initials: "S3",
          bio: "Assisting with testing and validation of educational platforms.",
        },
      ],
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
              <p className="text-xl text-muted-foreground">
                Meet the experts driving innovation in accounting education
              </p>
            </div>
          </div>
        </section>

        {/* Team Sections */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto space-y-16">
              {teamCategories.map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.members.map((member, memberIndex) => (
                      <Card key={memberIndex} className="shadow-medium hover:shadow-large transition-smooth">
                        <CardHeader>
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="w-20 h-20 mb-4 bg-gradient-primary">
                              <AvatarFallback className="text-primary-foreground text-xl font-semibold">
                                {member.initials}
                              </AvatarFallback>
                            </Avatar>
                            <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                            <p className="text-sm text-primary font-medium">{member.role}</p>
                          </div>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                          {member.email && (
                            <a 
                              href={`mailto:${member.email}`}
                              className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                            >
                              <Mail className="w-4 h-4" />
                              Contact
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Join Our Team</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Students</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Gain research experience, develop technical skills, and contribute to cutting-edge projects.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Undergraduate opportunities</li>
                      <li>• Postgraduate supervision</li>
                      <li>• EPIP participation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Researchers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Collaborate on innovative projects at the intersection of technology and education.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Research partnerships</li>
                      <li>• Co-publications</li>
                      <li>• Shared resources</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle>For Industry</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Partner with us to develop practical solutions and train future professionals.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Industry collaboration</li>
                      <li>• Pilot studies</li>
                      <li>• Internship programs</li>
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

export default Team;
