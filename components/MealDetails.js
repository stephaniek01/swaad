import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetails = ({ duration, complexity, affordability }) => {
  return (
    <View style={styles.mealInformationContainer}>
      <Text style={styles.mealInformation}>{duration} m</Text>
      <Text style={styles.mealInformation}>{complexity.toUpperCase()}</Text>
      <Text style={styles.mealInformation}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  mealInformationContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
