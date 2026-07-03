import React, { useState } from 'react';
import { ArrowLeft, Moon, Globe, Bell, Ruler } from 'lucide-react';
import { Card } from '../components/Card';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [units, setUnits] = useState('metric');
  const [language, setLanguage] = useState('english');
  
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-white px-6 pt-16 pb-6 sticky top-0 z-10 border-b border-border">
        <button onClick={onBack} className="mb-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-2xl font-semibold">Settings</h1>
      </div>
      
      <div className="px-6 pt-6 space-y-6">
        {/* Appearance */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
            Appearance
          </h2>
          <Card>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-between py-3"
            >
              <div className="flex items-center gap-3">
                <Moon size={20} className="text-muted-foreground" />
                <span className="font-medium">Dark Mode</span>
              </div>
              <div
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  darkMode ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </div>
            </button>
          </Card>
        </div>
        
        {/* Units */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
            Units
          </h2>
          <Card>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <Ruler size={20} className="text-muted-foreground" />
                <span className="font-medium">Measurement System</span>
              </div>
            </div>
            <div className="pt-3 space-y-2">
              <button
                onClick={() => setUnits('metric')}
                className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                  units === 'metric'
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-secondary/50'
                }`}
              >
                <div className="font-medium">Metric</div>
                <div className="text-sm text-muted-foreground">kg, cm, liters</div>
              </button>
              <button
                onClick={() => setUnits('imperial')}
                className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                  units === 'imperial'
                    ? 'bg-primary/10 border-2 border-primary'
                    : 'bg-secondary/50'
                }`}
              >
                <div className="font-medium">Imperial</div>
                <div className="text-sm text-muted-foreground">lbs, ft, oz</div>
              </button>
            </div>
          </Card>
        </div>
        
        {/* Language */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
            Language
          </h2>
          <Card>
            <div className="flex items-center justify-between py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <Globe size={20} className="text-muted-foreground" />
                <span className="font-medium">App Language</span>
              </div>
            </div>
            <div className="pt-3 space-y-2">
              {['English', 'Spanish', 'French', 'German'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang.toLowerCase())}
                  className={`w-full px-4 py-3 rounded-xl text-left transition-all ${
                    language === lang.toLowerCase()
                      ? 'bg-primary/10 border-2 border-primary'
                      : 'bg-secondary/50'
                  }`}
                >
                  <div className="font-medium">{lang}</div>
                </button>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Notifications */}
        <div>
          <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
            Notifications
          </h2>
          <Card>
            <button
              onClick={() => setNotifications(!notifications)}
              className="w-full flex items-center justify-between py-3 border-b border-border"
            >
              <div className="flex items-center gap-3">
                <Bell size={20} className="text-muted-foreground" />
                <span className="font-medium">Push Notifications</span>
              </div>
              <div
                className={`w-12 h-7 rounded-full transition-colors relative ${
                  notifications ? 'bg-primary' : 'bg-secondary'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </div>
            </button>
            
            {notifications && (
              <div className="pt-3 space-y-3">
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Meal Reminders</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Water Reminders</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">AI Insights</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-between py-2">
                  <span className="text-sm">Weekly Reports</span>
                  <input type="checkbox" defaultChecked className="w-5 h-5" />
                </div>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
