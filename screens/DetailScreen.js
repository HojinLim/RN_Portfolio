import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Swiper from "react-native-swiper";

const images = [
  { uri: "https://example.com/image1.jpg", description: "Description 1" },
  { uri: "https://example.com/image2.jpg", description: "Description 2" },
  { uri: "https://example.com/image3.jpg", description: "Description 3" },
];

const data = [
  {
    id: "1",
    text: "Item 1",
    skills: ["React", "TypeScript", "Git"],
    description: "Description 1",
  },
];

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>스킬:</Text>

      {item.skills.map((item, index) => (
        <View key={index}>
          <Text style={{ ...styles.detailText, marginHorizontal: 3 }}>
            {item}
          </Text>
        </View>
      ))}
    </View>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>설명:</Text>
      <Text style={styles.detailText}>{item.description}</Text>
    </View>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>설명:</Text>
      <Text style={styles.detailText}>{item.description}</Text>
    </View>
  </View>
);

const DetailScreen = ({ navigation, route }) => {
  const name = route.params.name;
  return (
    <View style={styles.container}>
      <Text style={styles.projectName}>This is {name}</Text>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
      <Swiper style={styles.wrapper} showsButtons={true}>
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image style={styles.image} source={{ uri: image.uri }} />
            <Text>{image.description}</Text>
          </View>
        ))}
      </Swiper>
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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
  projectName: {
    fontSize: 25,
    marginVertical: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemRowContainer: {
    flexDirection: "row",
  },
  detailText: {
    fontSize: 20,
  },
});

export default DetailScreen;
