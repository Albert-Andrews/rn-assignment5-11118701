import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./Components/StackNavigator";
import { StyleSheet, useColorScheme } from "react-native";
import React from "react";

export default function App() {
  const scheme = useColorScheme();
  const styles = scheme === "dark" ? darkStyles : lightStyles;


  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
