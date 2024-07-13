import { Tabs,Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import AppProvider from "../../context";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <AppProvider>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false, animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="jobBoard"
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="alumini"
          options={{ headerShown: false, animation: "fade_from_bottom" }}
        />
        <Stack.Screen
          name="CourseLesson"
          options={{ headerShown: false, animation: "slide_from_right" }}
        />
      </Stack>
    </AppProvider>
  );
}