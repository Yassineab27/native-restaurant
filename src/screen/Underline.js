import React from "react";
import { View, StyleSheet } from "react-native";

const Underline = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "75%",
    backgroundColor: "#ccc",
    marginVertical: 15,
    marginLeft: "auto",
    marginRight: "auto"
  }
});

export default Underline;
