import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text style={styles.textStyles}>Enter your password: </Text>
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={textValue => setPassword(textValue)}
        value={password}
      />
      <Text style={styles.subTextStyles}>
        {password.length < 5 && (
          <Text>Password must be longer than 5 chars</Text>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 20
  },
  subTextStyles: {
    marginLeft: 15,
    fontSize: 12
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
