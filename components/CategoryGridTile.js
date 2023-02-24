import React from "react";
import {
  ImageBackground,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "./Card";

const CategoryGridTile = ({ title, color, imageUrl, onPress }) => {
  return (
    <Card style={[styles.gridItem, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <ImageBackground
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageBackground}
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </Pressable>
    </Card>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  imageBackground: {
    opacity: 0.25,
  },
  gridItem: {
    margin: 16,
    height: 150,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.25,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
    // fontWeight: 'bold',
  }
});
