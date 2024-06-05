import { Tabs,Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import AppProvider from "../../context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AppProvider>
        <Stack>
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='jobBoard' options={{headerShown: false}}/>
    </Stack>
    </AppProvider>
    
  );
}