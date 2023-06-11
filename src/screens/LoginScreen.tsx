import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useTranslation from "../i18n"
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";

type Props = StackScreenProps<AuthStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login functionality here
  };

  return (
    <View>
      <Text>{t("login")}</Text>
      <TextInput
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder={t("password")}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title={t("login")} onPress={handleLogin} />
      <Button
        title={t("register")}
        onPress={() => navigation.navigate("Register")}
      />
      <Button
        title={t("recoverPassword")}
        onPress={() => navigation.navigate("Recover")}
      />
    </View>
  );
};

export default LoginScreen;
