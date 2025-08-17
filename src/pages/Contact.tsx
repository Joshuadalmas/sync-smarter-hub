import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Headphones, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
    priority: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", company: "", subject: "", message: "", priority: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our support team",
      contact: "support@aischeduler.com",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      color: "text-success"
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant help when you need it",
      contact: "Available 24/7",
      color: "text-info"
    },
    {
      icon: Users,
      title: "Enterprise Sales",
      description: "Custom solutions for your organization",
      contact: "enterprise@aischeduler.com",
      color: "text-warning"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market St, Suite 400",
      zipcode: "San Francisco, CA 94102",
      timezone: "PST (UTC-8)"
    },
    {
      city: "New York", 
      address: "456 Broadway, Floor 12",
      zipcode: "New York, NY 10013",
      timezone: "EST (UTC-5)"
    },
    {
      city: "London",
      address: "789 Oxford St, Level 5",
      zipcode: "London W1C 1DX, UK",
      timezone: "GMT (UTC+0)"
    }
  ];

  const faqs = [
    {
      q: "How quickly do you respond to support requests?",
      a: "We respond to all support requests within 2 hours during business hours, and within 24 hours on weekends."
    },
    {
      q: "Do you offer phone support?",
      a: "Yes! Phone support is available for all paid plans. Enterprise customers get dedicated phone lines."
    },
    {
      q: "Can I schedule a demo?",
      a: "Absolutely! Use the contact form or email enterprise@aischeduler.com to schedule a personalized demo."
    },
    {
      q: "Do you have technical documentation?",
      a: "Yes, we have comprehensive API docs, integration guides, and best practices available in our developer portal."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <Badge variant="secondary">Get In Touch</Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              We're Here to Help
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have questions about AI Scheduler? Need help getting started? Our team is ready to assist you.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <Card className="lg:col-span-2 bg-gradient-glass backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        required
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        className="bg-secondary border-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority">Priority</Label>
                      <Select onValueChange={(value) => handleInputChange("priority", value)}>
                        <SelectTrigger className="bg-secondary border-primary/20">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                          <SelectItem value="urgent">Urgent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      required
                      className="bg-secondary border-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={6}
                      className="bg-secondary border-primary/20"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Methods & Info */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Headphones className="h-5 w-5 text-info" />
                    <span>Get in Touch</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="p-3 rounded-lg bg-gradient-secondary hover:bg-accent transition-all duration-300">
                      <div className="flex items-start space-x-3">
                        <method.icon className={`h-5 w-5 mt-1 ${method.color}`} />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm">{method.title}</h3>
                          <p className="text-xs text-muted-foreground">{method.description}</p>
                          <p className="text-sm font-medium text-primary">{method.contact}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-success" />
                    <span>Support Hours</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Monday - Friday</span>
                    <span className="text-sm font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Saturday</span>
                    <span className="text-sm font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Sunday</span>
                    <span className="text-sm font-medium">Emergency Only</span>
                  </div>
                  <div className="pt-2 border-t border-primary/10">
                    <p className="text-xs text-muted-foreground">
                      Enterprise customers have 24/7 priority support
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Office Locations */}
          <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Our Offices</span>
              </CardTitle>
              <CardDescription>Visit us at one of our global locations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {offices.map((office, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gradient-secondary hover:bg-accent transition-all duration-300">
                    <h3 className="font-semibold text-primary mb-2">{office.city}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.zipcode}</p>
                      <p className="font-medium text-foreground">{office.timezone}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Quick answers to common questions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-medium text-primary">{faq.q}</h3>
                    <p className="text-sm text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Contact */}
          <Card className="bg-gradient-to-r from-destructive/10 to-warning/10 border-destructive/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-lg mb-2">Emergency Support</h3>
              <p className="text-muted-foreground mb-4">
                For critical issues affecting your production environment, contact our emergency line:
              </p>
              <Button variant="destructive">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +1 (555) 911-HELP
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;