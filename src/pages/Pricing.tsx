import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "9",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 50 meetings/month",
        "Basic AI scheduling",
        "Email reminders",
        "Google Calendar sync",
        "Mobile app access",
        "Basic support"
      ],
      popular: false,
      variant: "premium" as const,
      icon: Zap,
      color: "text-primary"
    },
    {
      name: "Professional", 
      price: "29",
      period: "month",
      description: "Advanced features for growing businesses",
      features: [
        "Unlimited meetings",
        "Advanced AI agents",
        "Smart conflict resolution",
        "Team collaboration tools",
        "Priority support",
        "Custom integrations",
        "Analytics dashboard",
        "Meeting transcripts"
      ],
      popular: true,
      variant: "hero" as const,
      icon: Crown,
      color: "text-warning"
    },
    {
      name: "Enterprise",
      price: "99", 
      period: "month",
      description: "Full-scale solution for large organizations",
      features: [
        "Everything in Professional",
        "White-label solution",
        "API access",
        "Advanced security",
        "Dedicated account manager",
        "Custom AI training",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false,
      variant: "glass" as const,
      icon: Sparkles,
      color: "text-info"
    }
  ];

  const yearlyDiscounts = {
    "9": "7.50",
    "29": "24.17", 
    "99": "82.50"
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background to-primary/5 p-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex justify-center items-center space-x-2 text-primary">
              <Sparkles className="h-6 w-6 animate-pulse" />
              <Badge variant="secondary">30-Day Free Trial</Badge>
            </div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start free, then pick a plan that grows with your scheduling needs. All plans include our games zone!
            </p>
          </div>

          {/* Pricing Toggle */}
          <div className="flex justify-center">
            <Card className="p-1 bg-gradient-glass backdrop-blur-md border-primary/20">
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm" className="bg-primary text-primary-foreground">
                  Monthly
                </Button>
                <Button variant="ghost" size="sm">
                  Yearly
                  <Badge variant="secondary" className="ml-2">Save 17%</Badge>
                </Button>
              </div>
            </Card>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-glass backdrop-blur-md border-primary/20 hover:shadow-glass transition-all duration-500 hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="default" className="bg-gradient-primary shadow-glow">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className={`p-3 rounded-full bg-gradient-glass ${plan.color}`}>
                      <plan.icon className="h-8 w-8" />
                    </div>
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.description}</CardDescription>
                  </div>
                  <div className="space-y-1">
                    <div className="text-5xl font-bold">
                      ${plan.price}
                      <span className="text-base font-normal text-muted-foreground">/{plan.period}</span>
                    </div>
                    {yearlyDiscounts[plan.price as keyof typeof yearlyDiscounts] && (
                      <p className="text-sm text-muted-foreground">
                        ${yearlyDiscounts[plan.price as keyof typeof yearlyDiscounts]}/month billed yearly
                      </p>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-4 w-4 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.variant} 
                    size="lg" 
                    className="w-full"
                  >
                    {plan.price === "9" ? "Start Free Trial" : 
                     plan.price === "29" ? "Get Started" : 
                     "Contact Sales"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  q: "Can I cancel anytime?",
                  a: "Yes! You can cancel your subscription at any time with no cancellation fees."
                },
                {
                  q: "What's included in the free trial?",
                  a: "Full access to all Professional features for 30 days, including games zone access."
                },
                {
                  q: "Do you offer refunds?",
                  a: "We offer a 14-day money-back guarantee for all paid plans."
                },
                {
                  q: "Can I upgrade or downgrade?",
                  a: "Absolutely! Change your plan anytime and we'll prorate the difference."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-gradient-glass backdrop-blur-md border-primary/20">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-primary">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12">
            <h2 className="text-3xl font-bold">Ready to transform your scheduling?</h2>
            <p className="text-muted-foreground">Join thousands of teams already using AI Scheduler</p>
            <Button variant="hero" size="lg">
              Start Your Free Trial Today
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;