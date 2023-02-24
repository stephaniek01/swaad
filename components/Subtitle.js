import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
    paddingVertical: 12,
    marginVertical: 12,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
