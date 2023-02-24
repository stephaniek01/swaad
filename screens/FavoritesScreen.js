import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

import { MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList";

const FavoritesScreen = () => {
  const favoriteMealIds = useSelector((state) => state.favorites.ids);

  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealIds.includes(meal.id)
  );

  if (favoriteMeals.length === 0)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You do not have any favorites yet</Text>
      </View>
    );

  return <MealsList meals={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "#ddd",
  },
});
