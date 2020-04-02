import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, count: state.count + payload };
    case DECREMENT:
      return { ...state, count: state.count - payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: INCREMENT, payload: 1 })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: DECREMENT, payload: 1 })}
      />
      <Text style={styles.textStyles}>Current count: {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyles: { fontSize: 16, margin: 10 }
});

export default CounterScreen;
