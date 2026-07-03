import React, { useState } from 'react';
import { Mail, Lock, ArrowLeft, Chrome, Apple as AppleIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

interface LoginScreenProps {
  onLogin: () => void;
  onBack: () => void;
  onSignUp: () => void;
  onForgotPassword: () => void;
}

export function LoginScreen({ onLogin, onBack, onSignUp, onForgotPassword }: LoginScreenProps) {
  const [formData, setFormData] = useState({
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
        
        <h1 className="text-3xl font-semibold mb-2">Welcome Back</h1>
        <p className="text-muted-foreground">Log in to continue your journey</p>
      </div>
      
      {/* Form */}
      <div className="flex-1 px-6 overflow-y-auto">
        <div className="space-y-4 mb-4">
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
        
        <button
          onClick={onForgotPassword}
          className="text-sm text-primary font-medium mb-8"
        >
          Forgot Password?
        </button>
        
        <Button fullWidth size="lg" onClick={onLogin} className="mb-6">
          Log In
        </Button>
        
        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>
        
        {/* Social Login */}
        <div className="space-y-3 mb-8">
          <Button fullWidth variant="outline" icon={<Chrome size={20} />}>
            Continue with Google
          </Button>
          <Button fullWidth variant="outline" icon={<AppleIcon size={20} />}>
            Continue with Apple
          </Button>
        </div>
        
        {/* Sign Up Link */}
        <p className="text-center text-sm text-muted-foreground pb-8">
          Don't have an account?{' '}
          <button onClick={onSignUp} className="text-primary font-medium">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}
