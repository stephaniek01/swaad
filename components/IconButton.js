import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const IconButton = ({ name, color, onPress }) => {
  return (
    <View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <Ionicons name={name} size={24} color={color} />
      </Pressable>
    </View>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.25,
  },
});
