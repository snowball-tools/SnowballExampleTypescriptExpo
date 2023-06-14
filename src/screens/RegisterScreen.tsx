import React, { useState } from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import { SnowballStack, SnowballTextField, SnowballView } from "../components";
import SnowballButton from "../components/SnowballButton";

type Props = StackScreenProps<AuthStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Add register functionality here
  };

  return (
    <SnowballView padding={10}>
      <SnowballStack
        distribution="space-between"
        alignment="stretch"
        spacing={10}
      >
        <SnowballTextField
          placeholder={t("email") || "email"}
          value={email}
          onChangeText={setEmail}
        />
        <SnowballTextField
          placeholder={t("password")}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <SnowballButton title={t("register")} onPress={handleRegister} />
        <SnowballButton
          title={t("login")}
          onPress={() => navigation.navigate("Login")}
        />
      </SnowballStack>
    </SnowballView>
  );
};

export default RegisterScreen;
