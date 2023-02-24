import React from "react";
import { Text, View } from "react-native";

const MealDetailsList = ({ list }) => {
  return (
    <View>
      {list.map((listItem) => (
        <View key={listItem}>
          <Text>{listItem}</Text>
        </View>
      ))}
    </View>
  );
};

export default MealDetailsList;
