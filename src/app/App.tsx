import React, { useState } from 'react';
import { MobileFrame } from './components/MobileFrame';
import { BottomNav } from './components/BottomNav';

// Splash & Onboarding
import { SplashScreen } from './screens/SplashScreen';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { SignUpScreen } from './screens/SignUpScreen';
import { LoginScreen } from './screens/LoginScreen';
import { GenderSelection } from './screens/onboarding/GenderSelection';
import { PhysicalStats } from './screens/onboarding/PhysicalStats';
import { ActivityLevel } from './screens/onboarding/ActivityLevel';
import { HealthGoal } from './screens/onboarding/HealthGoal';
import { DietaryPreference } from './screens/onboarding/DietaryPreference';
import { FoodAllergies } from './screens/onboarding/FoodAllergies';

// Main App Screens
import { HomeScreen } from './screens/HomeScreen';
import { MealsScreen } from './screens/MealsScreen';
import { DietPlanScreen } from './screens/DietPlanScreen';
import { ProgressScreen } from './screens/ProgressScreen';
import { RecipesScreen } from './screens/RecipesScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { SettingsScreen } from './screens/SettingsScreen';
import { PremiumScreen } from './screens/PremiumScreen';

type AppScreen = 
  | 'splash'
  | 'welcome'
  | 'signup'
  | 'login'
  | 'gender'
  | 'stats'
  | 'activity'
  | 'goal'
  | 'diet'
  | 'allergies'
  | 'home'
  | 'meals'
  | 'dietPlan'
  | 'progress'
  | 'recipes'
  | 'profile'
  | 'settings'
  | 'premium';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('splash');
  const [activeTab, setActiveTab] = useState('home');
  const [onboardingData, setOnboardingData] = useState<any>({});
  
  // Navigation handlers
  const handleSplashComplete = () => setCurrentScreen('welcome');
  const handleGetStarted = () => setCurrentScreen('signup');
  const handleLogin = () => setCurrentScreen('login');
  const handleSignUp = () => setCurrentScreen('gender');
  const handleLoginComplete = () => setCurrentScreen('home');
  
  const handleOnboardingNext = (step: string, data: any) => {
    setOnboardingData({ ...onboardingData, [step]: data });
    
    const stepFlow: { [key: string]: AppScreen } = {
      gender: 'stats',
      stats: 'activity',
      activity: 'goal',
      goal: 'diet',
      diet: 'allergies',
    };
    
    const nextScreen = stepFlow[step];
    if (nextScreen) {
      setCurrentScreen(nextScreen);
    }
  };
  
  const handleOnboardingComplete = () => {
    setCurrentScreen('home');
  };
  
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const tabScreenMap: { [key: string]: AppScreen } = {
      home: 'home',
      meals: 'meals',
      progress: 'progress',
      recipes: 'recipes',
      profile: 'profile',
    };
    setCurrentScreen(tabScreenMap[tab] || 'home');
  };
  
  // Check if we're in the main app (showing bottom nav)
  const showBottomNav = ['home', 'meals', 'progress', 'recipes', 'profile'].includes(currentScreen);
  const showDietPlanTab = currentScreen === 'dietPlan';
  
  // Render appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      // Splash & Auth
      case 'splash':
        return <SplashScreen onComplete={handleSplashComplete} />;
      case 'welcome':
        return <WelcomeScreen onGetStarted={handleGetStarted} onLogin={handleLogin} />;
      case 'signup':
        return (
          <SignUpScreen
            onSignUp={handleSignUp}
            onBack={() => setCurrentScreen('welcome')}
            onLogin={handleLogin}
          />
        );
      case 'login':
        return (
          <LoginScreen
            onLogin={handleLoginComplete}
            onBack={() => setCurrentScreen('welcome')}
            onSignUp={() => setCurrentScreen('signup')}
            onForgotPassword={() => {}}
          />
        );
        
      // Onboarding Flow
      case 'gender':
        return (
          <GenderSelection
            onNext={(data) => handleOnboardingNext('gender', data)}
            onBack={() => setCurrentScreen('signup')}
          />
        );
      case 'stats':
        return (
          <PhysicalStats
            onNext={(data) => handleOnboardingNext('stats', data)}
            onBack={() => setCurrentScreen('gender')}
          />
        );
      case 'activity':
        return (
          <ActivityLevel
            onNext={(data) => handleOnboardingNext('activity', data)}
            onBack={() => setCurrentScreen('stats')}
          />
        );
      case 'goal':
        return (
          <HealthGoal
            onNext={(data) => handleOnboardingNext('goal', data)}
            onBack={() => setCurrentScreen('activity')}
          />
        );
      case 'diet':
        return (
          <DietaryPreference
            onNext={(data) => handleOnboardingNext('diet', data)}
            onBack={() => setCurrentScreen('goal')}
          />
        );
      case 'allergies':
        return (
          <FoodAllergies
            onComplete={handleOnboardingComplete}
            onBack={() => setCurrentScreen('diet')}
          />
        );
        
      // Main App Screens
      case 'home':
        return <HomeScreen onAddMeal={() => setCurrentScreen('meals')} onViewDietPlan={() => setCurrentScreen('dietPlan')} />;
      case 'meals':
        return <MealsScreen />;
      case 'dietPlan':
        return <DietPlanScreen />;
      case 'progress':
        return <ProgressScreen />;
      case 'recipes':
        return <RecipesScreen />;
      case 'profile':
        return (
          <ProfileScreen
            onPremium={() => setCurrentScreen('premium')}
            onSettings={() => setCurrentScreen('settings')}
          />
        );
      case 'settings':
        return <SettingsScreen onBack={() => setCurrentScreen('profile')} />;
      case 'premium':
        return <PremiumScreen onBack={() => setCurrentScreen('profile')} />;
        
      default:
        return <HomeScreen onAddMeal={() => setCurrentScreen('meals')} />;
    }
  };
  
  return (
    <MobileFrame showStatusBar={currentScreen !== 'splash'}>
      <div className="h-full relative">
        {renderScreen()}
        {showBottomNav && (
          <BottomNav activeTab={activeTab} onTabChange={handleTabChange} />
        )}
      </div>
    </MobileFrame>
  );
}