import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, User, ArrowLeft, Chrome, Apple as AppleIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface SignUpScreenProps {
  onSignUp: () => void;
  onBack: () => void;
  onLogin: () => void;
}

export function SignUpScreen({ onSignUp, onBack, onLogin }: SignUpScreenProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="px-6 pt-16 pb-8">
        <button onClick={onBack} className="mb-6">
          <ArrowLeft size={24} />
        </button>
        
        <h1 className="text-3xl font-semibold mb-2">Create Account</h1>
        <p className="text-muted-foreground">Join us and start your healthy journey</p>
      </div>
      
      {/* Form */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-4 mb-8">
          <Input
            label="Full Name"
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            icon={<User size={20} />}
          />
          
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            icon={<Mail size={20} />}
          />
          
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            icon={<Lock size={20} />}
          />
        </div>
        
        <Button fullWidth size="lg" onClick={onSignUp} className="mb-6">
          Continue
        </Button>
        
        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Social Sign Up */}
        <div className="space-y-3 mb-8">
          <Button fullWidth variant="outline" icon={<Chrome size={20} />}>
            Continue with Google
          </Button>
          <Button fullWidth variant="outline" icon={<AppleIcon size={20} />}>
            Continue with Apple
          </Button>
        </div>
        
        {/* Login Link */}
        <p className="text-center text-sm text-muted-foreground pb-8">
          Already have an account?{' '}
          <button onClick={onLogin} className="text-primary font-medium">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
}
