import React from "react";
import { View, Text, StyleSheet } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      {/* <Text style={styles.textStyle}>one</Text>
      <Text style={styles.textStyle}>two</Text>
      <Text style={styles.textTwoStyle}>three</Text> */}
      <View style={styles.boxOneStyle} />
      <View style={styles.boxTwoStyle} />
      <View style={styles.boxThreeStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: 200
  },
  textStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "red",
    flex: 1,
    ...StyleSheet.absoluteFillObject
  },
  boxOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: "steelblue"
  },
  boxTwoStyle: {
    height: 100,
    width: 100,
    alignSelf: "flex-end",
    backgroundColor: "skyblue"
  },
  boxThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: "powderblue"
  }
});

export default BoxScreen;
