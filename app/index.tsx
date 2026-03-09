import React from "react";
import { StyleSheet, View } from "react-native";

import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";

export default function Index() {
  return (
    <View style={styles.container}>
      <ToDoList />
      <ToDoForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
});
