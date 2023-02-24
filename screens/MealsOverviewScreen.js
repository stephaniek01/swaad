import React, { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

import { MEALS, CATEGORIES } from "../data/dummy-data";

// Every components declared as a screen using Stack.Screen gets a route prop
// just like useNavigation we alos get a useRoute hook to access the route object in components that are not declared as Screens
const MealsOverviewScreen = ({ route, navigation }) => {
  // route.params contains the object sent to it through the navigate("ScreenName",{object}) fuction
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  const meals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return <MealsList meals={meals} />;
};

export default MealsOverviewScreen;
