import { Tabs,Stack } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
 

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="(home)"
        options={{ headerShown: false, animation: "ios" }}
      />
      <Stack.Screen
        name="(pages)"
        options={{ headerShown: false, animation: "ios" }}
      />
      <Stack.Screen name="explore" />
    </Stack>
  );
}
