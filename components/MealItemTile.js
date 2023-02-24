import React from "react";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Card from "./Card";
import MealDetails from "./MealDetails";

const MealItemTile = ({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  onPress,
}) => {
  return (
    <Card>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#111" }}
        style={({ pressed }) =>
          pressed && Platform.OS !== "android" ? styles.buttonPressed : null
        }
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.mealTitle}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </Card>
  );
};

export default MealItemTile;

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: "100%",
  },
  mealTitle: {
    paddingHorizontal: 16,
    paddingTop: 12,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.25,
  },
});
