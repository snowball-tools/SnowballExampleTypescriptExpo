import React, { useContext } from "react";
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
    <View style={[paddingStyle.padding, style]} {...props}>
      {children}
    </View>
  );
};

export default SnowballView;
