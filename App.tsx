import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DefaultRouter from './router';

export default function App() {
  return (
    <NavigationContainer>
      <DefaultRouter />
    </NavigationContainer>
  );
}