import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import ColourCounter from "../components/ColourCounter";

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
  const { type, payload } = action;
  // state: { red: num, green: num, blue: num}
  // action: {type: 'CHANGE_RED' || 'CHANGE_GREEN' || 'CHANGE_BLUE',
  // payload: 15 || -15 }
  switch (type) {
    case "CHANGE_RED":
      return state.red + payload > 255 || state.red + payload < 0
        ? state
        : { ...state, red: state.red + payload };
    case "CHANGE_BLUE":
      return state.blue + payload > 255 || state.blue + payload < 0
        ? state
        : { ...state, blue: state.blue + payload };
    case "CHANGE_GREEN":
      return state.green + payload > 255 || state.green + payload < 0
        ? state
        : { ...state, green: state.green + payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const initialState = { red: 0, green: 0, blue: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { red, green, blue } = state;

  return (
    <View>
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "CHANGE_RED", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_RED", payload: -1 * COLOR_INCREMENT })
        }
        colour="Red"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_GREEN", payload: -1 * COLOR_INCREMENT })
        }
        colour="Green"
      />
      <ColourCounter
        onIncrease={() =>
          dispatch({ type: "CHANGE_BLUE", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "CHANGE_BLUE", payload: -1 * COLOR_INCREMENT })
        }
        colour="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default SquareScreen;
