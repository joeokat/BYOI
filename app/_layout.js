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
            onPress={() => router.push("modal")}
            name="book-information-variant"
            size={24}
            color="#1e2632"
          />
        ),
      }}
    >
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "About",
          headerStyle: { backgroundColor: "#212121" },
          headerTitleStyle: { fontWeight: "bold" },
          headerTintColor: "#ffbb1c",
          headerRight: () => (
            <MaterialCommunityIcons
              name="book-information-variant"
              size={24}
              color="#ffbb1c"
            />
          ),
        }}
      />
      <Stack.Screen name="index" options={{ title: "Reference: WiKiHow" }} />
      <Stack.Screen
        name="FirstScreen"
        options={{ title: "Waking Your Conscious" }}
      />
      <Stack.Screen
        name="SecondScreen"
        options={{ title: "Conquering Your World " }}
      />
      <Stack.Screen
        name="ThirdScreen"
        options={{ title: "Changing Your Perspective " }}
      />
      <Stack.Screen
        name="FourthScreen"
        options={{ title: "Settling In for Good " }}
      />
      <Stack.Screen name="FAQsScreen" options={{ title: "FAQs" }} />
    </Stack>
  );
}
