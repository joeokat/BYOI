import { Tabs,Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import AppProvider from "../../context";

export default function stackLayout() {
  const colorScheme = useColorScheme();

  return (
    <AppProvider>
      <Stack>
        
      </Stack>
    </AppProvider>
  );
}