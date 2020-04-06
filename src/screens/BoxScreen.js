import React from "react";
import { Text, View, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    ...StyleSheet.absoluteFillObject,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  viewOneStyle: {
    width: 50,
    height: 50,
    backgroundColor: "rgb(255,0,0)"
  },
  viewTwoStyle: {
    width: 50,
    height: 50,
    backgroundColor: "rgb(0,255,0)",
    marginTop: 50
  },
  viewThreeStyle: {
    borderColor: "blue",
    borderWidth: 3,
    width: 50,
    height: 50,
    backgroundColor: "rgb(0,0,255)"
  }
});

export default BoxScreen;
