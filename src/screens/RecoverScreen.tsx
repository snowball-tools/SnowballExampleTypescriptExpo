import React, { useState } from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import { SnowballText, SnowballView } from "../components";

type Props = StackScreenProps<AuthStackParamList, "Recover">;

const RecoverScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SnowballView padding={10}>
      <SnowballText>{t("Recover")}</SnowballText>
    </SnowballView>
  );
};

export default RecoverScreen;
