import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Image
} from "react-native";
import {
  FontAwesome,
  Entypo,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import yelp from "../api/yelp";

const RestaurantShow = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const id = navigation.getParam("id");

  useEffect(() => {
    getRestaurant(id);
  }, []);

  const getRestaurant = async id => {
    try {
      const response = await yelp.get(`/${id}`);
      setRestaurant(response.data);
    } catch (err) {
      setErrorMessage("Something went wrong..");
    }
  };

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.view}>
        <Text style={styles.name}>{restaurant.name}</Text>
        <Text style={styles.rating}>
          {restaurant.rating} <FontAwesome name="star-o" />
        </Text>
        <Text style={styles.phone}>
          <Entypo name="phone" /> {restaurant.display_phone}
        </Text>
        <Text style={styles.address}>
          <Entypo name="address" /> {restaurant.location.address1} -{" "}
          {restaurant.location.city} - {restaurant.location.country}
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Visit Website{" "}
          <MaterialCommunityIcons style={styles.icon} name="web" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  },
  errorMessage: {
    color: "red",
    fontSize: 22
  },
  view: {
    backgroundColor: "#F0EEEE",
    padding: 10,
    margin: 10,
    alignItems: "center"
  },
  name: {
    fontSize: 22
  },
  rating: {
    color: "orange"
  },
  button: {
    flexDirection: "row",
    justifyContent: "center"
  },
  buttonText: {
    backgroundColor: "orange",
    color: "#fff",
    fontSize: 20,
    padding: 10,
    marginHorizontal: 10
  },
  icon: {
    fontSize: 20,
    color: "black"
  }
});

export default RestaurantShow;
