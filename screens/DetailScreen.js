import React, { useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, Button } from "react-native";
import Swiper from "react-native-swiper";
import example from "../assets/images/example.jpg";
import Hyperlink from "react-native-hyperlink";
import openURL from "../util/openUrl";
import { DetailModal } from "../components/DetailModal";

const images = [
  { data: example, description: "Description 1" },
  { data: example, description: "Description 2" },
  { data: example, description: "Description 3" },
];

const data = [
  {
    id: "1",
    text: "Item 1",
    skills: ["React", "TypeScript", "Git"],
    description: "Description 1",
    workPeriod: "23.11.08 ~ 23.11.15 (2주)",
    link: "http://www.example.com",
  },
];

const ListItem = ({ item }) => (
  <View style={styles.listItem}>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>-스킬:</Text>

      {item.skills.map((item, index) => (
        <View key={index}>
          <Text style={{ ...styles.detailText, marginHorizontal: 3 }}>
            {item}
          </Text>
        </View>
      ))}
    </View>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>-설명:</Text>
      <Text style={styles.detailText}>{item.description}</Text>
    </View>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>-작업기간:</Text>
      <Text style={styles.detailText}>{item.workPeriod}</Text>
    </View>
    <View style={styles.itemRowContainer}>
      <Text style={styles.detailText}>-링크:</Text>
      {/* <Hyperlink
        linkStyle={styles.hyperlinkStyle}
        onPress={(url) => openURL(url)}
      > */}
      <Text style={styles.contentStyle}>{item.link}</Text>
      {/* </Hyperlink> */}
    </View>
    <DetailModal />
  </View>
);

const DetailScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
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
      <Swiper
        style={styles.wrapper}
        showsButtons={true}
        paginationStyle={styles.pagination}
      >
        {images.map((image, index) => (
          <View key={index} style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image.data} />
            </View>
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
    marginVertical: 3,
  },
  detailText: {
    fontSize: 20,
  },
  hyperlinkStyle: {
    fontSize: 16,
    color: "#505050",
  },
  contentStyle: {
    fontSize: 18,
    color: "#111111",
  },
  imageContainer: {
    borderColor: "black",
    borderWidth: 2,
    marginVertical: 3,
  },
  pagination: {
    bottom: 10,
  },
});

export default DetailScreen;
