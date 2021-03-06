import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantItem = ({ restaurant }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: restaurant.image_url }} />
      <Text>{restaurant.name}</Text>
      <Text>
        {restaurant.rating} Stars, {restaurant.review_count}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 15,
    marginBottom: 5
  },
  name: {
    fontWeight: "bold"
  }
});

export default RestaurantItem;
