import React from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const ToDoList = () => {
  return (
    <ScrollView>
      <Pressable style={styles.toDoItem}>
        <View>
          <Text style={styles.toDoText}>Do Laundry</Text>
        </View>
      </Pressable>
      <Pressable style={styles.toDoItem}>
        <View>
          <Text style={styles.toDoText}>Go to the Gym</Text>
        </View>
      </Pressable>
      <Pressable style={styles.toDoItem}>
        <View>
          <Text style={styles.toDoText}>Walk Dog</Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  toDoItem: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    backgroundColor: "#73b4ff",
  },
  toDoText: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
});
