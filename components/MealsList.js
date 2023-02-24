import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import MealItemTile from "../components/MealItemTile";

const MealsList = ({ meals }) => {
  const navigation = useNavigation();
  const renderItemHandler = (itemData) => {
    const meal = itemData.item;

    const selectMealItemHandler = () => {
      navigation.navigate("MealDetails", { mealId: meal.id });
    };

    const mealItemProps = {
      title: meal.title,
      imageUrl: meal.imageUrl,
      duration: meal.duration,
      complexity: meal.complexity,
      affordability: meal.affordability,
      onPress: selectMealItemHandler,
    };
    return <MealItemTile {...mealItemProps} />;
  };
  return (
    <View style={styles.rootContainer}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderItemHandler}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 16,
  },
});
