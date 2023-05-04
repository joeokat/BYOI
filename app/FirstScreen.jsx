import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FirstScreen() {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },

  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
});
