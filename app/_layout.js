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
            onPress={() => router.push("/About")}
            name="book-information-variant"
            size={24}
            color="black"
          />
        ),
      }}
    >
      <Stack.Screen name="index" options={{ title: "Welcome!" }} />
      <Stack.Screen name="FirstScreen" options={{ title: "Title" }} />
      <Stack.Screen name="SecondScreen" options={{ title: "Title!" }} />
      <Stack.Screen name="ThirdScreen" options={{ title: "Title!" }} />
      <Stack.Screen name="FourthScreen" options={{ title: "Title!" }} />
      <Stack.Screen name="FAQsScreen" options={{ title: "FAQs!" }} />
      <Stack.Screen name="About" options={{ presentation: "About" }} />
    </Stack>
  );
}
