import React from 'react';
import { ChevronRight, User, Target, Bell, Lock, HelpCircle, FileText, Crown, LogOut, Settings } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

interface ProfileScreenProps {
  onPremium: () => void;
  onSettings: () => void;
}

export function ProfileScreen({ onPremium, onSettings }: ProfileScreenProps) {
  const userStats = [
    { label: 'Current Weight', value: '74.3 kg', change: '-0.9 kg' },
    { label: 'Goal Weight', value: '72.0 kg', change: '2.3 kg to go' },
    { label: 'Days Active', value: '42', change: 'Great streak!' },
  ];
  
  const menuSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', action: () => {} },
        { icon: Target, label: 'Goals & Preferences', action: () => {} },
        { icon: Bell, label: 'Notifications', action: () => {} },
      ],
    },
    {
      title: 'App',
      items: [
        { icon: Settings, label: 'Settings', action: onSettings },
        { icon: Lock, label: 'Privacy & Security', action: () => {} },
        { icon: HelpCircle, label: 'Help & Support', action: () => {} },
        { icon: FileText, label: 'Terms & Privacy Policy', action: () => {} },
      ],
    },
  ];
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-emerald-600 px-6 pt-16 pb-12">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-white text-2xl font-semibold">
            JD
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white mb-1">John Doe</h1>
            <p className="text-white/80">john.doe@email.com</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {userStats.map((stat) => (
            <Card key={stat.label} className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <div className="text-white/80 text-xs mb-1">{stat.label}</div>
              <div className="text-white font-semibold mb-0.5">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.change}</div>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="px-6 -mt-6 space-y-6">
        {/* Premium Upsell */}
        <Card className="bg-gradient-to-br from-accent to-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
          <div className="relative">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <Crown size={24} />
                <h3 className="font-semibold text-lg">Upgrade to Premium</h3>
              </div>
            </div>
            <p className="text-white/90 text-sm mb-4 leading-relaxed">
              Unlock AI-powered insights, personalized meal plans, and advanced analytics
            </p>
            <Button
              variant="secondary"
              size="sm"
              onClick={onPremium}
              className="bg-white text-primary hover:bg-white/90"
            >
              Learn More
            </Button>
          </div>
        </Card>
        
        {/* Menu Sections */}
        {menuSections.map((section) => (
          <div key={section.title}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
              {section.title}
            </h2>
            <Card>
              {section.items.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className={`w-full flex items-center justify-between py-3 ${
                      index < section.items.length - 1 ? 'border-b border-border' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-muted-foreground" />
                      <span className="font-medium">{item.label}</span>
                    </div>
                    <ChevronRight size={20} className="text-muted-foreground" />
                  </button>
                );
              })}
            </Card>
          </div>
        ))}
        
        {/* App Version */}
        <div className="text-center text-sm text-muted-foreground py-4">
          NutriAI Version 1.0.0
        </div>
        
        {/* Logout */}
        <Button
          fullWidth
          variant="outline"
          icon={<LogOut size={20} />}
          className="text-destructive border-destructive"
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}
