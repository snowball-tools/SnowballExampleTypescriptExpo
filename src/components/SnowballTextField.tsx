import React, { FC } from "react";
import styled from "styled-components/native";
import { TextInput, TextInputProps } from "react-native";

interface TextFieldProps extends TextInputProps {
  error?: boolean;
}

const SnowballStyledTextField = styled(TextInput)<TextFieldProps>`
  height: 50px;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
  color: #333;
  border-width: 1px;
  border-color: ${(props) => (props.error ? "red" : "#ddd")};
  background-color: #fff;
`;

const SnowballTextField: FC<TextFieldProps> = ({ error, ...props }) => {
  return <SnowballStyledTextField error={error} {...props} />;
};

export default SnowballTextField;
