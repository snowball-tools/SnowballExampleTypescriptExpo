import React, { useState } from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import {
  SnowballTextField,
  SnowballButton,
  SnowballStack,
  SnowballView,
} from "../components";

type Props = StackScreenProps<AuthStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Add login functionality here
  };

  return (
    <SnowballView padding={10}>
      <SnowballStack
        distribution="space-between"
        alignment="stretch"
        spacing={10}
      >
        <SnowballTextField
          placeholder={t("email")}
          value={email}
          onChangeText={setEmail}
        />
        <SnowballTextField
          placeholder={t("password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <SnowballButton title={t("login")} onPress={handleLogin} />
        <SnowballButton
          title={t("register")}
          onPress={() => navigation.navigate("Register")}
        />
        <SnowballButton
          title={t("recoverPassword")}
          onPress={() => navigation.navigate("Recover")}
        />
      </SnowballStack>
    </SnowballView>
  );
};

export default LoginScreen;
