import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { SnowballText, SnowballView } from "../components";
import useTranslation from "../i18n";

import { HomeStackParamList } from "../navigation/StackParamList";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SnowballView>
      <SnowballText>{t("Welcome to Home Screen!")}</SnowballText>
    </SnowballView>
  );
};

export default HomeScreen;
