import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import useTranslation from "../i18n";

import { HomeStackParamList } from "../navigation/StackParamList";
import { SnowballText, SnowballView } from "../components";

type Props = StackScreenProps<HomeStackParamList, "Home">;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <SnowballView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <SnowballText>{t("Home")}</SnowballText>
    </SnowballView>
  );
};

export default HomeScreen;
