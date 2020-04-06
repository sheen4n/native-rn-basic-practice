import React, { useReducer } from "react";

import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  // todo: fix this
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: "change", payload: 1 });
        }}
      ></Button>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "change", payload: -1 });
        }}
      ></Button>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
