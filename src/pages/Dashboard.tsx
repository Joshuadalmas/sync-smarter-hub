import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Users, Clock, Plus, Settings, BarChart3 } from "lucide-react";

const Dashboard = () => {
  const upcomingMeetings = [
    { id: 1, title: "Product Strategy Review", time: "10:00 AM", attendees: 5, status: "confirmed" },
    { id: 2, title: "Client Onboarding Call", time: "2:30 PM", attendees: 3, status: "pending" },
    { id: 3, title: "Team Standup", time: "4:00 PM", attendees: 8, status: "confirmed" },
  ];

  const stats = [
    { title: "Total Meetings", value: "47", change: "+12%", icon: Calendar, color: "text-primary" },
    { title: "Hours Saved", value: "23.5", change: "+8%", icon: Clock, color: "text-success" },
    { title: "Emails Sent", value: "156", change: "+24%", icon: Mail, color: "text-info" },
    { title: "Team Members", value: "12", change: "+2", icon: Users, color: "text-warning" },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-muted-foreground mt-2">Welcome back! Here's your scheduling overview.</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="premium">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Schedule Meeting
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                      <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                      <Badge variant="secondary" className="mt-1">
                        {stat.change}
                      </Badge>
                    </div>
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Upcoming Meetings */}
            <Card className="lg:col-span-2 bg-gradient-glass backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Upcoming Meetings</span>
                </CardTitle>
                <CardDescription>Your scheduled meetings for today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-secondary hover:bg-accent transition-all duration-300">
                    <div>
                      <h3 className="font-medium text-foreground">{meeting.title}</h3>
                      <p className="text-sm text-muted-foreground">{meeting.time} • {meeting.attendees} attendees</p>
                    </div>
                    <Badge variant={meeting.status === 'confirmed' ? 'default' : 'secondary'}>
                      {meeting.status}
                    </Badge>
                  </div>
                ))}
                <Button variant="premium" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add New Meeting
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-gradient-glass backdrop-blur-md border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-info" />
                  <span>AI Insights</span>
                </CardTitle>
                <CardDescription>Smart recommendations for you</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-success/10 border border-success/20">
                  <p className="text-sm font-medium text-success">Optimal Time</p>
                  <p className="text-xs text-muted-foreground">Tuesday 2-4 PM shows highest attendance rates</p>
                </div>
                <div className="p-3 rounded-lg bg-info/10 border border-info/20">
                  <p className="text-sm font-medium text-info">Meeting Length</p>
                  <p className="text-xs text-muted-foreground">Consider 30min slots instead of 60min for better efficiency</p>
                </div>
                <div className="p-3 rounded-lg bg-warning/10 border border-warning/20">
                  <p className="text-sm font-medium text-warning">Schedule Gap</p>
                  <p className="text-xs text-muted-foreground">You have 2h free between meetings today</p>
                </div>
                <Button variant="glass" className="w-full">
                  View All Insights
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;