import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type SnowballButtonProps = {
  title: string;
  onPress: () => void;
};

const SnowballButton: React.FC<SnowballButtonProps> = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});

export default SnowballButton;
