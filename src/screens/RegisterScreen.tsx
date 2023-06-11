import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useTranslation from "../i18n"
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";

type Props = StackScreenProps<AuthStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add register functionality here
  };

  return (
    <View>
      <Text>{t("register")}</Text>
      <TextInput
        placeholder={t("email") || "email"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder={t("password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={t("register")} onPress={handleRegister} />
      <Button title={t("login")} onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default RegisterScreen;
