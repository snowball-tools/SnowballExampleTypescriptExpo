import React from 'react';
import { View, ViewStyle } from 'react-native';

type SnowballStackProps = {
  children?: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  distribution?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  alignment?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  spacing?: number;
  style?: ViewStyle;
};

const SnowballStack: React.FC<SnowballStackProps> = ({
  children,
  orientation = 'vertical',
  distribution = 'flex-start',
  alignment = 'stretch',
  spacing = 0,
  style,
}) => {
  const flexDirection = orientation === 'horizontal' ? 'row' : 'column';
  const justifyContent = distribution;
  const alignItems = alignment;

  // Wrap each child with a View to apply spacing
  const childrenWithSpacing = React.Children.map(children, (child, index) => (
    <View style={{ [flexDirection === 'row' ? 'marginRight' : 'marginBottom']: index !== React.Children.count(children) - 1 ? spacing : 0 }}>
      {child}
    </View>
  ));

  return (
    <View style={[{ flexDirection, justifyContent, alignItems }, style]}>
      {childrenWithSpacing}
    </View>
  );
};

export default SnowballStack;

