# Fitness App

A React Native fitness & nutrition app (NutriAI) built with Expo, migrated from the [Figma Make template](https://www.figma.com/design/ZSk3qdhxmmsgHYJHW55fVB/AI-Powered-Diet---Nutrition-App--Community-).

## App Flow

```
Login (entry) ──┬── Log In ──────────────────────────► Main App (tabs)
                ├── Sign Up ──► Onboarding (6 steps) ──► Main App
                ├── Learn more ──► Welcome ──► Get Started ──► Sign Up ──► Onboarding
                └── Log Out (from Profile) ──► Login

Main App tabs: Home | Meals | Progress | Recipes | Profile
Stack screens: Diet Plan, Settings, Premium
```

## Project Structure

```
FitnessApp/
├── app/              # Expo Router screens
│   ├── index.tsx     # Login (first screen)
│   ├── welcome.tsx
│   ├── signup.tsx
│   ├── onboarding/   # 6-step onboarding flow
│   ├── (tabs)/       # Main app with bottom navigation
│   ├── diet-plan.tsx
│   ├── settings.tsx
│   └── premium.tsx
├── components/ui/    # Shared UI components
├── figma-web/        # Original Figma web export (reference)
└── assets/
```

## Getting Started

```bash
npm install
npm run web      # Web browser at http://localhost:8081
npm run ios      # iOS Simulator
npm run android  # Android Emulator
```

## Tech Stack

- Expo SDK 57 + Expo Router
- NativeWind (Tailwind CSS for React Native)
- Lucide React Native icons
