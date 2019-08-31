import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantItem from "./RestaurantItem";
import Underline from "./Underline";

const RestaurantList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.textStyles}>{title}</Text>
      <FlatList
        data={restaurants}
        keyExtractor={restaurant => restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Details", { id: item.id })}
            >
              <RestaurantItem restaurant={item} />
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <Underline />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginHorizontal: 5
  }
});

export default withNavigation(RestaurantList);
