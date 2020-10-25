import React from 'react';
import { ColorProvider } from './src/contexts/ColorContext';
import { LanguageProvider } from './src/contexts/LanguageContext';
import MainScreen from './src/screens/MainScreen';
import CreateColorScreen from './src/screens/CreateColorScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useLocale } from './src/hooks';

const Stack = createStackNavigator();

const App = () => {
  const { text } = useLocale().state;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'colors'}
          component={MainScreen}
          options={{ title: text.colors, headerTitleAlign: 'center' }} />
        <Stack.Screen
          name={'create'}
          component={CreateColorScreen}
          options={{ title: text.create, headerTitleAlign: 'center' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () =>
  <ColorProvider>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ColorProvider>;
