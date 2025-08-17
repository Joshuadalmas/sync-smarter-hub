import HeroSection from "@/components/HeroSection";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Mail, 
  Zap, 
  Shield, 
  Globe, 
  Clock,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  TrendingUp,
  Sparkles
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart AI Scheduling",
      description: "Our AI agents analyze calendars, preferences, and time zones to find the perfect meeting times automatically.",
      color: "text-primary"
    },
    {
      icon: Mail,
      title: "Automated Reminders",
      description: "Intelligent email notifications that adapt to each participant's communication style and preferences.",
      color: "text-info"
    },
    {
      icon: Zap,
      title: "Instant Google Sync",
      description: "Seamless two-way synchronization with Google Calendar ensures you're always up-to-date.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance, end-to-end encryption, and GDPR compliance.",
      color: "text-warning"
    },
    {
      icon: Globe,
      title: "Global Time Zones",
      description: "Automatically handles time zone conversions and suggests optimal meeting times across regions.",
      color: "text-info"
    },
    {
      icon: Clock,
      title: "Smart Availability",
      description: "AI learns your schedule patterns and suggests the most productive meeting times.",
      color: "text-success"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Liu",
      role: "VP of Operations, TechCorp",
      content: "AI Scheduler has saved our team 15 hours per week. The AI agents are incredibly smart at avoiding conflicts.",
      rating: 5,
      avatar: "JL"
    },
    {
      name: "David Rodriguez", 
      role: "Project Manager, StartupXYZ",
      content: "The games feature is genius! Our team actually looks forward to scheduling breaks now.",
      rating: 5,
      avatar: "DR"
    },
    {
      name: "Sarah Thompson",
      role: "CEO, InnovateNow",
      content: "From 50 employees to 200, AI Scheduler scaled perfectly with our growing meeting needs.",
      rating: 5,
      avatar: "ST"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="secondary">Powerful Features</Badge>
            <h2 className="text-4xl font-bold">
              Everything You Need for
              <span className="block bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Perfect Scheduling
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our AI-powered platform handles the complexity so you can focus on what matters most.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className={`p-3 rounded-lg bg-gradient-glass ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="secondary">How It Works</Badge>
            <h2 className="text-4xl font-bold">
              Three Simple Steps to
              <span className="block bg-gradient-to-r from-success to-primary bg-clip-text text-transparent">
                Effortless Scheduling
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Connect Your Calendar",
                description: "Link your Google Calendar and let our AI learn your preferences and availability patterns.",
                icon: Calendar
              },
              {
                step: "02", 
                title: "Set Your Preferences",
                description: "Configure meeting types, buffer times, and let our AI agents understand your ideal schedule.",
                icon: Sparkles
              },
              {
                step: "03",
                title: "Let AI Do the Rest",
                description: "Our agents automatically schedule meetings, send reminders, and optimize your calendar in real-time.",
                icon: Zap
              }
            ].map((step, index) => (
              <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 text-center hover:shadow-glass transition-all duration-300">
                <CardContent className="p-8 space-y-6">
                  <div className="text-4xl font-bold text-primary/30">{step.step}</div>
                  <div className="p-4 rounded-full bg-gradient-primary w-fit mx-auto">
                    <step.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-primary/5">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <Badge variant="secondary">Testimonials</Badge>
            <h2 className="text-4xl font-bold">
              Loved by Teams
              <span className="block bg-gradient-to-r from-warning to-primary bg-clip-text text-transparent">
                Around the World
              </span>
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-warning fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">4.9/5 from 2,000+ reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-warning fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-6">
            <Badge variant="secondary">Ready to Get Started?</Badge>
            <h2 className="text-4xl font-bold">
              Join 50,000+ Users Who've
              <span className="block bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                Transformed Their Scheduling
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Start your free trial today and experience the power of AI-driven scheduling.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="premium" size="lg">
              Watch Demo
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">30 Days</div>
              <div className="text-muted-foreground">Free Trial</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success">No Setup</div>
              <div className="text-muted-foreground">Required</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-info">Cancel</div>
              <div className="text-muted-foreground">Anytime</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
