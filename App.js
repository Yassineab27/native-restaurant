import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import SearchScreen from "./src/screen/SearchScreen";
import RestaurantShow from "./src/screen/RestaurantShow";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: RestaurantShow
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Restaurant Search"
    }
  }
);

export default createAppContainer(navigator);
