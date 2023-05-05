import React from "react";
import { Stack, useRouter } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ffe030" },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: "#1e2632",
        headerRight: () => (
          <MaterialCommunityIcons
            onPress={() => router.replace("/About")}
            name="book-information-variant"
            size={24}
            color="#1e2632"
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "" }} />
      <Stack.Screen
        name="FirstScreen"
        options={{ title: "Waking Your Conscious" }}
      />
      <Stack.Screen name="SecondScreen" options={{ title: "" }} />
      <Stack.Screen name="ThirdScreen" options={{ title: "" }} />
      <Stack.Screen name="FourthScreen" options={{ title: "" }} />
      <Stack.Screen name="FAQsScreen" options={{ title: "FAQs" }} />
      <Stack.Screen name="About" options={{ title: "About" }} />
    </Stack>
  );
}
