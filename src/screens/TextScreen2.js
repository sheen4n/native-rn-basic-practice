import React, { useState } from "react";

import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  // todo: fix this
  return (
    <View>
      <Text> Enter name:</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        onChangeText={value => {
          setName(value);
        }}
        value={name}
      ></TextInput>
      <Text>Your name is {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "black",
    borderWidth: 1
  }
});

export default TextScreen;
