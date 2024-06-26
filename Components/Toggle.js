// ToggleSwitch.js
import React, { useState } from "react";
import { View, Text, StyleSheet, Switch, useColorScheme } from "react-native";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const scheme = useColorScheme();

  const styles = scheme === "dark" ? darkStyles : lightStyles;

  return (
    <Switch
      trackColor={{ false: "#767577", true: "green" }}
      thumbColor={isEnabled ? "white" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    color: "#000",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 24,
    color: "#fff",
  },
});

export default ToggleSwitch;
