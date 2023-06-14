import React from 'react';
import { Text, StyleSheet, TextProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | 'bold' | 'normal' | undefined;
type FontType = 'bold' | 'italic' | 'regular';

type SwiftUIFontStyle = 'largeTitle' | 'title' | 'headline' | 'subheadline' | 'body' | 'callout' | 'footnote' | 'caption';

type SnowballTextProps = {
  children: React.ReactNode;
  fontStyle?: SwiftUIFontStyle;
  fontType?: FontType;
  icon?: {
    name: React.ComponentProps<typeof Ionicons>['name'];
    position?: 'left' | 'right';
  };
} & TextProps;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

const swiftUIFontStyles: Record<SwiftUIFontStyle, { fontSize: number; fontWeight?: FontWeight }> = {
  largeTitle: { fontSize: 34, fontWeight: '300' },
  title: { fontSize: 28, fontWeight: '400' },
  headline: { fontSize: 17, fontWeight: '700' },
  subheadline: { fontSize: 15, fontWeight: '400' },
  body: { fontSize: 17, fontWeight: '400' },
  callout: { fontSize: 16, fontWeight: '400' },
  footnote: { fontSize: 13, fontWeight: '400' },
  caption: { fontSize: 12, fontWeight: '400' },
};

const fontTypes: Record<FontType, { fontWeight?: FontWeight; fontStyle?: 'italic' }> = {
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  regular: {},
};

const SnowballText: React.FC<SnowballTextProps> = ({
  children,
  fontStyle = 'body',
  fontType = 'regular',
  icon,
  ...props
}) => {
  return (
    <View style={styles.container}>
      {icon?.position === 'left' && <Ionicons name={icon.name} size={24} />}
      <Text style={[swiftUIFontStyles[fontStyle], fontTypes[fontType], { fontFamily: 'San Francisco' }]} {...props}>
        {children}
      </Text>
      {icon?.position === 'right' && <Ionicons name={icon.name} size={24} />}
    </View>
  );
};

export default SnowballText;
