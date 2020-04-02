import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const ColourCounter = ({ colour, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text style={styles.textStyles}>{colour}</Text>
      <Button title={`Increase ${colour}`} onPress={onIncrease} />
      <Button title={`Decrease ${colour}`} onPress={onDecrease} />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyles: { margin: 10 }
});

export default ColourCounter;
