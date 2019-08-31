import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";

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
      setErrorMessage("Something went wrong.");
    }
  };

  if (!restaurant) {
    return null;
  }

  return (
    <View>
      <FlatList
        data={restaurant.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantShow;
