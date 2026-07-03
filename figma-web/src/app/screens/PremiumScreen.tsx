import React, { useState } from 'react';
import { ArrowLeft, Crown, Check, Sparkles, TrendingUp, FileText, Camera, Download, X } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface PremiumScreenProps {
  onBack: () => void;
}

export function PremiumScreen({ onBack }: PremiumScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'yearly'>('yearly');
  
  const features = [
    { icon: Sparkles, title: 'AI-Powered Insights', desc: 'Get personalized nutrition recommendations' },
    { icon: TrendingUp, title: 'Advanced Analytics', desc: 'Detailed progress tracking and forecasting' },
    { icon: FileText, title: 'Weekly AI Reports', desc: 'Comprehensive health and nutrition analysis' },
    { icon: Camera, title: 'Food Recognition', desc: 'Snap a photo to log meals instantly' },
    { icon: Download, title: 'Export Reports', desc: 'Download and share your progress (PDF)' },
    { icon: Crown, title: 'Priority Support', desc: '24/7 premium customer support' },
  ];
  
  const plans = [
    {
      id: 'monthly',
      name: 'Monthly',
      price: '$9.99',
      period: '/month',
      badge: null,
    },
    {
      id: 'yearly',
      name: 'Yearly',
      price: '$79.99',
      period: '/year',
      badge: 'Save 33%',
      savings: '$39.89/year',
    },
  ];
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-accent to-primary px-6 pt-16 pb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24" />
        
        <div className="relative">
          <button onClick={onBack} className="mb-6 text-white">
            <ArrowLeft size={24} />
          </button>
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Crown size={32} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-semibold text-white">Premium</h1>
              <p className="text-white/80">Unlock your full potential</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-6 -mt-6 pb-24 space-y-6">
        {/* Plan Selection */}
        <Card className="border-2 border-accent/30">
          <h2 className="font-semibold mb-4">Choose Your Plan</h2>
          <div className="space-y-3">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id as 'monthly' | 'yearly')}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left relative ${
                  selectedPlan === plan.id
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-white'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 right-4 px-3 py-1 bg-accent text-white text-xs font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{plan.name}</h3>
                    </div>
                    {plan.savings && (
                      <p className="text-xs text-primary font-medium">Save {plan.savings}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </Card>
        
        {/* Features */}
        <div>
          <h2 className="font-semibold mb-4">Premium Features</h2>
          <Card>
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 pb-4 ${
                      index < features.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                    <Check size={20} className="text-primary flex-shrink-0 mt-2" />
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
        
        {/* Comparison */}
        <div>
          <h2 className="font-semibold mb-4">Free vs Premium</h2>
          <Card>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Basic meal tracking</span>
                <div className="flex gap-8">
                  <Check size={18} className="text-primary" />
                  <Check size={18} className="text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">AI-powered insights</span>
                <div className="flex gap-8">
                  <X size={18} className="text-muted-foreground" />
                  <Check size={18} className="text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Food photo recognition</span>
                <div className="flex gap-8">
                  <X size={18} className="text-muted-foreground" />
                  <Check size={18} className="text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Weekly AI reports</span>
                <div className="flex gap-8">
                  <X size={18} className="text-muted-foreground" />
                  <Check size={18} className="text-primary" />
                </div>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm">Export & share reports</span>
                <div className="flex gap-8">
                  <X size={18} className="text-muted-foreground" />
                  <Check size={18} className="text-primary" />
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border text-center">
              <div className="text-xs text-muted-foreground mb-2">Starting at</div>
              <div className="flex items-center justify-around">
                <div>
                  <div className="text-sm font-semibold">Free</div>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-primary">$6.66</div>
                  <div className="text-xs text-muted-foreground">/month (yearly)</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
        
        {/* CTA */}
        <div className="sticky bottom-6">
          <Button fullWidth variant="premium" size="lg">
            Start 7-Day Free Trial
          </Button>
          <p className="text-xs text-center text-muted-foreground mt-3">
            Cancel anytime. No commitment required.
          </p>
        </div>
      </div>
    </div>
  );
}
