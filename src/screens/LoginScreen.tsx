import React from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import { SnowballText, SnowballView } from "../components";

type Props = StackScreenProps<AuthStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SnowballView>
      <SnowballText>{t("Login")}</SnowballText>
    </SnowballView>
  );
};

export default LoginScreen;
