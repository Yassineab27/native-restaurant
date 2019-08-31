import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "./SearchBar";
import yelp from "../api/yelp";

import RestaurantList from "./RestaurantList";

const SearchScreen = props => {
  const [term, setTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    searchApi("chicken");
  }, []);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      setRestaurants(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong.");
    }
  };

  const filterRestaurantsPrice = price => {
    return restaurants.filter(restaurant => {
      return restaurant.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={value => setTerm(value)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessageStyle}>{errorMessage}</Text>
      ) : null}
      <ScrollView>
        <RestaurantList
          restaurants={filterRestaurantsPrice("$")}
          title="Low Prices"
        />
        <RestaurantList
          restaurants={filterRestaurantsPrice("$$")}
          title="Medium"
        />
        <RestaurantList
          restaurants={filterRestaurantsPrice("$$$")}
          title="High Prices"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessageStyle: {
    color: "red"
  }
});

export default SearchScreen;
