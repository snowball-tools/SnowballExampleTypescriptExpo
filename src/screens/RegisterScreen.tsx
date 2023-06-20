import React from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import { SnowballText, SnowballView } from "../components";

type Props = StackScreenProps<AuthStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SnowballView padding={10}>
      <SnowballText>{t("Register")}</SnowballText>
    </SnowballView>
  );
};

export default RegisterScreen;
