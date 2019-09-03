import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SearchScreen from "./src/screen/SearchScreen";
import RestaurantShow from "./src/screen/RestaurantShow";
import HomeScreen from "./src/screen/HomeScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: RestaurantShow,
    Home: HomeScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Native Restaurant"
    }
  }
);

export default createAppContainer(navigator);
