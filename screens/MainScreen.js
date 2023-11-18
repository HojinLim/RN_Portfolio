import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import { dummy } from "../data/dummyData";

export const MainScreen = ({ navigation }) => {
  const onPress = (name) => {
    navigation.navigate("Detail", { name });
  };

  return (
    <View>
      <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() => onPress(item.name)}
          >
            <View style={styles.listContainer}>
              <Text style={styles.projectName}>{item.name}</Text>
              <Image style={styles.image} source={item.images} />
              <Text style={styles.detail}>{item.detail}</Text>
            </View>
          </Pressable>
        )}
        keyExtractor={(item) => item.createdAt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
    padding: 30,
  },
  image: {
    width: "100%",
    height: 300,
    borderColor: "black",
    borderWidth: 3,
  },
  projectName: {
    fontSize: 25,
    marginVertical: 10,
  },
  detail: {
    margin: 15,
    fontSize: 15,
    color: "gray",
    fontStyle: "italic",
  },
});
