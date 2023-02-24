import React from "react";
import { View, StyleSheet } from "react-native";

const Card = ({ children, style }) => {
  const customStyle = style ? style : [];

  return <View style={[styles.card, ...customStyle]}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 16,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 8,
    backgroundColor: "white",
    borderRadius: 10,
    // so that the ripple effect does not go outside the rounded edges
    // overflow is visible for IOS because if it was hidden it would hide all the shadow properties
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
