import React, { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

import MealDetails from "../components/MealDetails";
import MealDetailsList from "../components/MealDetailsList";
import Subtitle from "../components/Subtitle";
import IconButton from "../components/IconButton";

import { MEALS } from "../data/dummy-data";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailsScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const favoriteMealIds = useSelector((state) => state.favorites.ids);
  const dispatch = useDispatch();

  const meal = MEALS.find((meal) => meal.id === mealId);

  const isFavorite = favoriteMealIds.includes(mealId);

  const changeFavoritesStatusHandler = () => {
    if (isFavorite) {
      // the object that is sent is the action.payload
      // the action.type is the reducer_name.function_name
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: () => (
        <IconButton
          color="#e3c00f"
          name={isFavorite ? "star" : "star-outline"}
          onPress={changeFavoritesStatusHandler}
        />
      ),
    });
  }, [meal.title, navigation, changeFavoritesStatusHandler]);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = meal;

  return (
    <ScrollView style={styles.rootContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image style={styles.image} source={{ uri: imageUrl }} />
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
      />
      <Subtitle>Ingredients</Subtitle>
      <MealDetailsList list={ingredients} />

      <Subtitle>Steps</Subtitle>
      <MealDetailsList list={steps} />
    </ScrollView>
  );
};

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
    marginVertical: 16,
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 8,
  },
});
