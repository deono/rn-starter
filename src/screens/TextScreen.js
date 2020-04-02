import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text style={styles.textStyles}>Enter your name below: </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={textValue => setName(textValue)}
        value={name}
      />
      <Text style={styles.textStyles}>My name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20
  },
  textInput: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5
  }
});

export default TextScreen;
