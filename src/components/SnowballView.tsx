import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

type SnowballPaddingValue = number | string;

interface SnowballViewProps extends ViewProps {
  padding?: SnowballPaddingValue;
  paddingTop?: SnowballPaddingValue;
  paddingBottom?: SnowballPaddingValue;
  paddingLeft?: SnowballPaddingValue;
  paddingRight?: SnowballPaddingValue;
  paddingVertical?: SnowballPaddingValue;
  paddingHorizontal?: SnowballPaddingValue;
  children?: React.ReactNode;
}

const SnowballView: React.FC<SnowballViewProps> = ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingVertical,
  paddingHorizontal,
  children,
  style,
  ...props
}) => {
  const paddingStyle = StyleSheet.create({
    padding: {
      padding: padding,
      paddingTop: paddingTop || paddingVertical,
      paddingBottom: paddingBottom || paddingVertical,
      paddingLeft: paddingLeft || paddingHorizontal,
      paddingRight: paddingRight || paddingHorizontal,
    },
  });

  return (
    <View style={[paddingStyle.padding, styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SnowballView;
