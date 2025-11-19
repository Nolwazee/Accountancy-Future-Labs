import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail } from "lucide-react";

const Team = () => {
  const teamCategories = [
    {
      title: "Research Leadership",
      members: [
        {
          name: "Proff. Olive Stumke",
          role: "Research Group Leader",
          initials: "FN",
          image: "/src/assets/Proff.jpg",
          bio: "Leading innovative research in AI and immersive technologies for accounting education at DUT.",
          email: "OliveS@dut.ac.za",
        },
      ],
    },
    {
      title: "Core Research Team",
      members: [
       
      
        {
          name: "Mr Fanie Ndlovu",
          role: "VR/AR Developer",
          initials: "FN",
          image: "/src/assets/FN.jpg",
          bio: "Creating immersive simulation environments for audit training.",
        },
        {
          name: "Mrs. Ugeshnie Moodley",
          role: "Educational Researcher",
          initials: "UM",
          image: "/src/assets/UM.jpg",
          bio: "Investigating pedagogical approaches and learning outcomes in technology-enhanced education.",
        },
      ],
    },
    {
      title: "Technical Development Team",
      members: [
        {
          name: "Mhlengi Nkabinde",
          role: "Full-Stack Developer",
          initials: "D1",
          image: "/src/assets/Mhlengi.jpeg",
          bio: "Building web-based warehouse management and audit simulation platforms.",
        },
           {
          name: "Nomfundo Manyoni",
          role: "Full-Stack Developer",
          initials: "D2",
          image: "/src/assets/Nomfundo.jpeg",
          bio: "Building web-based warehouse management and audit simulation platforms.",
        },
        {
          name: "Qiniso Mthethwa",
          role: "VR Engineer",
          initials: "D3",
           image: "/src/assets/Qiniso.jpeg",
          bio: "Implementing 3D environments and interactive VR experiences.",
        },
          {
          name: "Siphesihle Mkhize",
          role: "VR Engineer",
          initials: "D4",
          image: "/src/assets/Siphesihle.jpeg",
          bio: "Implementing 3D environments and interactive VR experiences.",
        },
        {
          name: "Mpendulo Xulu",
          role: "AI Engineer",
          initials: "D5",
          image: "/src/assets/Mpendulo.jpg",
          bio: "Integrating machine learning models and AI capabilities into educational tools.",
        },
      ],
    },
    {
      title: "Media Team",
      members: [
        {
          name: "Siyanda Magubane",
          role: "Videographer",
          initials: "M1",
          image: "/src/assets/Siyanda.jpg",
          bio: "Producing engaging visual content and sharpening digital storytelling.",
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
            {/* Research Leadership Centered */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{teamCategories[0].title}</h2>
              <div className="flex justify-center">
                {teamCategories[0].members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="shadow-medium hover:shadow-large transition-smooth w-full max-w-sm">
                    <CardHeader>
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="w-20 h-20 mb-4 bg-gradient-primary">
                          {member.image ? (
                            <AvatarImage
                              src={member.image}
                              alt={member.name}
                              className="object-cover w-full h-full rounded-full"
                            />
                          ) : null}
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
            {/* Core Research Team Centered */}
            <div className="max-w-6xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">{teamCategories[1].title}</h2>
              <div className="flex justify-center flex-wrap gap-6">
                {teamCategories[1].members.map((member, memberIndex) => (
                  <Card key={memberIndex} className="shadow-medium hover:shadow-large transition-smooth w-full max-w-sm">
                    <CardHeader>
                      <div className="flex flex-col items-center text-center">
                        <Avatar className="w-20 h-20 mb-4 bg-gradient-primary">
                          {member.image ? (
                            <AvatarImage
                              src={member.image}
                              alt={member.name}
                              className="object-cover w-full h-full rounded-full"
                            />
                          ) : null}
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
            {/* Other Team Sections */}
            <div className="max-w-6xl mx-auto space-y-16">
              {teamCategories.slice(2).map((category, catIndex) => (
                <div key={catIndex}>
                  <h2 className="text-3xl font-bold mb-8 text-center">{category.title}</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.members.map((member, memberIndex) => (
                      <Card key={memberIndex} className="shadow-medium hover:shadow-large transition-smooth">
                        <CardHeader>
                          <div className="flex flex-col items-center text-center">
                            <Avatar className="w-20 h-20 mb-4 bg-gradient-primary">
                              {member.image ? (
                                <AvatarImage
                                  src={member.image}
                                  alt={member.name}
                                  className="object-cover w-full h-full rounded-full"
                                />
                              ) : null}
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
