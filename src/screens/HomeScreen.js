import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button
        onPress={() => navigate("Components")}
        title="Go to Components Demo"
        style={styles.button}
      />
      <Button
        style={styles.button}
        title="Go to List Demo"
        onPress={() => navigate("List")}
      />
      <Button
        style={styles.button}
        title="Go to Image Demo"
        onPress={() => navigate("Image")}
      />
      <Button
        style={styles.button}
        title="Go to Counter Demo"
        onPress={() => navigate("Counter")}
      />
      <Button
        style={styles.button}
        title="Go to Colour Demo"
        onPress={() => navigate("Colour")}
      />
      <Button
        style={styles.button}
        title="Go to Square Demo"
        onPress={() => navigate("Square")}
      />
      <Button
        style={styles.button}
        title="Go to Text Demo"
        onPress={() => navigate("Text")}
      />
      {/* <TouchableOpacity onPress={() => navigate("ListScreen")}>
        <Text style={styles.touchText}>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    marginBottom: 10
  },
  touchText: {
    fontSize: 30,
    marginTop: 10
  }
});

export default HomeScreen;
