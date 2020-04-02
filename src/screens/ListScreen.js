import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Deon", id: "1", age: 43 },
    { name: "Marisa", id: "2", age: 42 },
    { name: "Scott", id: "3", age: 39 },
    { name: "Nicky", id: "4", age: 36 },
    { name: "Bryony", id: "5", age: 38 },
    { name: "Joel", id: "6", age: 40 },
    { name: "Tania", id: "7", age: 37 },
    { name: "Pierre", id: "8", age: 40 },
    { name: "Craig", id: "9", age: 41 },
    { name: "Andrea", id: "10", age: 32 }
  ];
  return (
    <FlatList
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item, index }) => {
        return (
          <Text
            style={styles.textStyle}
          >{`${item.name} - Age: ${item.age}`}</Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 25,
    marginLeft: 20,
    fontSize: 16
  }
});

export default ListScreen;
