import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from "react-native";
import React from "react";
// import { Transfer } from "../Mock/TransferOptions";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        {/* Profile display */}
        <View style={styles.profile}>
          <View style={styles.profileDisplay}>
            <Image
              style={styles.profileIcon}
              source={require("../assets/profile.png")}
            />
            <View style={styles.profileText}>
              <Text style={styles.greeting}>Welcome Back</Text>
              <Text style={styles.name}>Eric Atsu</Text>
            </View>
          </View>

          <View style={styles.search}>
            <Image
              style={styles.searchIcon}
              source={require("../assets/search.png")}
            />
          </View>
        </View>

        {/* card */}
        {/* <View style={styles.card}> */}
        <Image
          style={styles.cardImage}
          source={require("../assets/Card.png")}
        />
        {/* </View> */}

        {/* Transfer options */}
        <View style={styles.flatlistContainer}>
          {/* <FlatList
            style={styles.flatList}
            data={Transfer}
            renderItem={({ item }) => (
              <View style={styles.flatListChild}>
                <Image source={item.image} />
              </View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          /> */}
          <View style={styles.imageMainContainer}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/send.png")}
              />
            </View>
            <Text>Sent</Text>
          </View>

          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/recieve.png")}
              />
            </View>
            <Text>Receive</Text>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/loan.png")}
              />
            </View>
            <Text>Loan</Text>
          </View>
          <View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.transferIcon}
                source={require("../assets/topUp.png")}
              />
            </View>
            <Text>TopUp</Text>
          </View>
        </View>

        {/* Transaction */}
        <View>
          <FlatList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    padding: 20,
    justifyContent: "start",
    alignItems: "start",
    gap: 30,
  },
  profile: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  profileDisplay: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  profileIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileText: {
    flexDirection: "column",
    gap: 5,
  },
  greeting: {},
  name: {},
  search: {},
  searchIcon: {
    width: 30,
    height: 30,
  },
  //   card: {
  //     width: "100%",
  //     height: 250,
  //     borderRadius: 10,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     backgroundColor: "red",
  //   },
  cardImage: {
    height: 230,
    width: "100%",
    borderRadius: 30,
  },
  flatlistContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  imageContainer: {
    backgroundColor: "#EBEBEF",
    padding: 15,
    borderRadius: 30,
  },

  transferIcon: {
    width: 30,
    height: 30,
    padding: 10,
    borderRadius: 30,
    resizeMode: "contain",
  },
  imageMainContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  //   flatList: {
  //     backgroundColor: "red",
  // },
  //   flatListChild: {
  //     backgroundColor: "green",
  //     width:"110%",
  //     height: 50,
  //     borderRadius: 10,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     gap: 10,
  //   },
});
