import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
  Image,
  useColorScheme,
} from "react-native";
import React, { useState } from "react";
import Toggle from "../Components/Toggle";

const Settings = ({ navigation }) => {
  const scheme = useColorScheme();
  const styles = scheme === "dark" ? darkStyles : lightStyles;

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.settingsHeader}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <View style={styles.settingsListContainer}>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Language</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>My Profile</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Contact Us</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Change Password</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Privacy Policy</Text>
            <Image
              style={styles.settingsIcon}
              source={require("../assets/icons8-right-arrow-100.png")}
            />
          </View>

          <View style={styles.settingsTheme}>
            <Text style={styles.text1}>Theme</Text>
            <Toggle />
          </View>
        </View>

        {/* Bottom Navigation */}
        <Text onPress={() => navigation.navigate("Home")}>Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const lightStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
    justifyContent: "space-between",
    alignItems: "start",
    height: "100%",
    gap: 20,
  },
  settingsHeader: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  settingsListContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    width: "100%",
    gap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 15,
    fontWeight: "500",
  },
  settingsList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderBottomWidth: 0.5,
    borderColor: "gray",
    padding: 10,
  },
  bottomText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  settingsTheme: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  settingsIcon: {
    width: 20,
    height: 20,
  },
});
