import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Image
        source={{
          uri:
            "https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg"
        }}
        style={styles.backgroundImage}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Search")}
      >
        <Feather style={styles.icon} name="search" />
        <Text style={styles.text}>Search for restaurants</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    opacity: 0.5
  },
  button: {
    position: "absolute",
    top: 200,
    left: 50,
    flexDirection: "row"
  },
  text: {
    fontSize: 20,
    backgroundColor: "orange",
    padding: 8
  },
  icon: {
    fontSize: 30,
    backgroundColor: "black",
    color: "orange",
    alignSelf: "center",
    padding: 8
  }
});

export default HomeScreen;
