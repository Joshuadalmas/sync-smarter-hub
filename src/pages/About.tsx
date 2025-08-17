import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Brain, Target, Users, Lightbulb, ArrowRight, Award } from "lucide-react";

const About = () => {
  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      bio: "Former Google AI researcher with 10+ years in machine learning"
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", 
      bio: "Ex-Microsoft engineer specializing in distributed systems"
    },
    {
      name: "Emily Wang",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      bio: "Product leader from Slack with expertise in collaboration tools"
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-First Innovation", 
      description: "We believe artificial intelligence should make work more human, not less.",
      color: "text-primary"
    },
    {
      icon: Target,
      title: "Precision & Efficiency",
      description: "Every feature is designed to save time and eliminate scheduling friction.",
      color: "text-info"
    },
    {
      icon: Users,
      title: "People-Centered Design",
      description: "Technology serves people, not the other way around. We build for humans first.",
      color: "text-success"
    },
    {
      icon: Lightbulb,
      title: "Continuous Learning",
      description: "Our AI agents get smarter with every interaction, constantly improving your experience.",
      color: "text-warning"
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", description: "Professionals worldwide" },
    { label: "Meetings Scheduled", value: "2M+", description: "Automated bookings" },
    { label: "Time Saved", value: "100K+", description: "Hours recovered" },
    { label: "Countries", value: "45+", description: "Global reach" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Badge variant="secondary" className="mx-auto">
              About AI Scheduler
            </Badge>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Revolutionizing How the World Schedules
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2023, AI Scheduler was born from a simple frustration: scheduling shouldn't be so hard. 
              We're on a mission to give everyone their time back through intelligent automation.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 text-center hover:shadow-glass transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="font-semibold">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary">Our Mission</Badge>
                <h2 className="text-4xl font-bold">
                  Making AI Work
                  <span className="block bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                    For Everyone
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe the best technology is invisible. Our AI agents handle the complexity 
                  of scheduling while you focus on what matters most - meaningful connections and productive meetings.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-success" />
                    <span>Winner: Best AI Product 2024</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="h-5 w-5 text-info" />
                    <span>Featured in TechCrunch & Product Hunt</span>
                  </div>
                </div>
                <Button variant="hero" className="group">
                  Join Our Mission
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              
              <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
                <CardContent className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-center">Our Impact</h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-success/10 border border-success/20">
                      <div className="text-success font-semibold">Environmental Impact</div>
                      <div className="text-sm text-muted-foreground">Reduced travel by 40% through smart virtual meeting suggestions</div>
                    </div>
                    <div className="p-4 rounded-lg bg-info/10 border border-info/20">
                      <div className="text-info font-semibold">Productivity Boost</div>
                      <div className="text-sm text-muted-foreground">Users report 3x faster meeting coordination</div>
                    </div>
                    <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                      <div className="text-primary font-semibold">Work-Life Balance</div>
                      <div className="text-sm text-muted-foreground">Average 5 hours saved per week per user</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary">Our Values</Badge>
              <h2 className="text-4xl font-bold">What Drives Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide every decision we make and every feature we build.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-lg bg-gradient-glass ${value.color}`}>
                        <value.icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <Badge variant="secondary">Our Team</Badge>
              <h2 className="text-4xl font-bold">Meet the Minds Behind AI Scheduler</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A diverse team of engineers, designers, and AI researchers from top tech companies.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300 text-center">
                  <CardContent className="p-8 space-y-4">
                    <Avatar className="w-24 h-24 mx-auto">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.role}</p>
                    </div>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold">Ready to Transform Your Scheduling?</h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of professionals who've already discovered the power of AI-driven scheduling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="premium" size="lg">
                Contact Sales
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;