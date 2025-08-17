import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Mail, Sparkles, Users, Zap, Clock } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  console.log("HeroSection component is rendering...");
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-info/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-success/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-semibold uppercase tracking-wide">AI-Powered Scheduling</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                  Smart Meeting
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                  Scheduling
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Let our AI agents handle your calendar, send smart reminders, and optimize your time. 
                Focus on what matters while we manage your meetings.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="premium" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                <Calendar className="h-6 w-6 text-primary mb-2" />
                <h3 className="font-semibold text-sm">Smart Calendar</h3>
                <p className="text-xs text-muted-foreground">AI-powered scheduling optimization</p>
              </Card>
              <Card className="p-4 bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                <Mail className="h-6 w-6 text-info mb-2" />
                <h3 className="font-semibold text-sm">Auto Reminders</h3>
                <p className="text-xs text-muted-foreground">Intelligent email notifications</p>
              </Card>
              <Card className="p-4 bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                <Zap className="h-6 w-6 text-success mb-2" />
                <h3 className="font-semibold text-sm">Instant Sync</h3>
                <p className="text-xs text-muted-foreground">Google Calendar integration</p>
              </Card>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">10K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-info">500K+</div>
                <div className="text-sm text-muted-foreground">Meetings Scheduled</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage}
                alt="AI-powered meeting scheduling interface"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
              
              {/* Floating Cards */}
              <Card className="absolute top-4 right-4 p-3 bg-gradient-glass backdrop-blur-md border-success/30 animate-bounce">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-success" />
                  <span className="text-sm font-medium">+15 meetings today</span>
                </div>
              </Card>
              
              <Card className="absolute bottom-4 left-4 p-3 bg-gradient-glass backdrop-blur-md border-info/30 animate-pulse">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-info" />
                  <span className="text-sm font-medium">3h saved this week</span>
                </div>
              </Card>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-primary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-r from-info to-success rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;