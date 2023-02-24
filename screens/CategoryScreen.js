import React from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

// every Stack.Screen component gets the "navigation" prop from @react-navigation
// if u want to use the navigation prop in a component that isnt a Stack.Screen component,
// then u can use the useNavigationHook provided by react-navigation/native

const CategoryScreen = ({ navigation }) => {
  const renderItemHandler = (itemData) => {
    const onPressHandler = () => {
      // go to the specified component, we can also send data to this screen
      navigation.navigate("MealsOverview", { categoryId: itemData.item.id });
    };

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        imageUrl={itemData.item.imageUrl}
        onPress={onPressHandler}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderItemHandler}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoryScreen;
