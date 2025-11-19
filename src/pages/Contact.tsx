import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Building } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);
      
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Get in touch with ISARG for collaborations, inquiries, or opportunities
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Building className="w-6 h-6 text-primary" />
                      Our Location
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold mb-1">Durban University of Technology</p>
                        <p className="text-sm text-muted-foreground">
                          Faculty of Accounting & Informatics<br />
                          Durban, South Africa
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medium">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-primary" />
                      Email Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a 
                      href="mailto:isarg@dut.ac.za" 
                      className="text-primary hover:underline"
                    >
                      isarg@dut.ac.za
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">
                      We typically respond within 2-3 business days
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium bg-gradient-subtle">
                  <CardHeader>
                    <CardTitle>Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p><strong>Students:</strong> Research supervision and project involvement</p>
                    <p><strong>Researchers:</strong> Collaboration and co-publication opportunities</p>
                    <p><strong>Industry:</strong> Pilot studies and partnership programs</p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="shadow-medium">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                        maxLength={255}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry, interest in collaboration, or any questions you have..."
                        rows={6}
                        required
                        maxLength={1000}
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        {formData.message.length}/1000 characters
                      </p>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Connect With Us</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="shadow-medium text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">Student Inquiries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interested in joining our research group or participating in projects? Reach out to discuss opportunities.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">Research Collaboration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Looking to collaborate on research, share resources, or co-author publications? Let's connect.
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-medium text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">Industry Partnerships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Interested in pilot studies, technical co-development, or internship programs? Get in touch.
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

export default Contact;
