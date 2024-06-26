import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";


const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.settingsHeader}>
          <Text style={styles.text}>Settings</Text>
        </View>

        <View style={styles.settingsListContainer}>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Language</Text>
            <Text>Profile</Text>
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>My Profile</Text>
            <Text>Profile</Text>
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Contact Us</Text>
            <Text>Profile</Text>
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Change Password</Text>
            <Text>Profile</Text>
          </View>
          <View style={styles.settingsList}>
            <Text style={styles.text1}>Privacy Policy</Text>
            <Text>Profile</Text>
          </View>


          <View>
            
            <Text>Theme</Text>

          </View>
        </View>

        {/* Bottom Navigation */}
     
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
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
});
