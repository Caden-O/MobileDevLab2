import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const ToDoForm = () => {
  return (
    <View>
      <TextInput style={styles.textBox} placeholder="Add a new task..." />
      <Button title="Add" />
    </View>
  );
};

export default ToDoForm;

const styles = StyleSheet.create({
  textBox: {
    fontSize: 20,
  },
});
