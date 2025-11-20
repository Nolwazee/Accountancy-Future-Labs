import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Lightbulb, Users, TrendingUp } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const heroImage = "/assets/hero-bg.jpg";


const Home = () => {
  const highlights = [
    {
      icon: Brain,
      title: "AI & VR Innovation",
      description: "Pioneering immersive technologies in accounting education",
    },
    {
      icon: Lightbulb,
      title: "Research Excellence",
      description: "Leading-edge research in educational technology",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Expert researchers, developers, and educators",
    },
    {
      icon: TrendingUp,
      title: "Real-World Impact",
      description: "Transforming audit and accounting practices",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Intelligent & Simulated Accountancy Research Group
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Transforming Accountancy Education Through AI and Immersive Simulations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/projects">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-smooth">
                  Explore Our Projects
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold mb-2">Based at Durban University of Technology</p>
            <h2 className="text-3xl font-bold mb-2">Faculty of Accounting & Informatics</h2>
            <p className="text-muted-foreground">Specializing in VR, AI, Audit Simulations & EdTech Innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-none shadow-medium hover:shadow-large transition-smooth">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground mb-8">
              ISARG is dedicated to revolutionizing accountancy education through cutting-edge research in artificial intelligence, virtual reality, and intelligent simulation systems. We bridge the gap between traditional accounting education and modern technological innovation.
            </p>
            <Link to="/about">
              <Button variant="outline" size="lg">
                Discover Our Vision
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
