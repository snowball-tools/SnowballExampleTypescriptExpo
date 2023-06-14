import React from "react";
import { Text, StyleSheet, TextProps, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type SnowballTextProps = {
  children: React.ReactNode;
  icon?: {
    name: React.ComponentProps<typeof Ionicons>["name"];
    position?: "left" | "right";
  };
} & TextProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});

const SnowballText: React.FC<SnowballTextProps> = ({
  children,
  icon,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {icon?.position === "left" && <Ionicons name={icon.name} size={24} />}
      <Text style={[{ fontFamily: "times-new-roman-regular" }]} {...props}>
        {children}
      </Text>
      {icon?.position === "right" && <Ionicons name={icon.name} size={24} />}
    </View>
  );
};

export default SnowballText;
