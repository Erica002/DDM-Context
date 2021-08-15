import React from 'react';
import { Routes } from './src/routes';
import { NavigationContainer } from '@react-navigation/native';
import { ResumeProvider } from './src/contexts/ResumeProvider';

export default function App() {
  return (
    <ResumeProvider>
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>
    </ResumeProvider>
  );
}
