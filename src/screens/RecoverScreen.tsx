import React, { useState } from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import {
  SnowballButton,
  SnowballStack,
  SnowballTextField,
  SnowballView,
} from "../components";

type Props = StackScreenProps<AuthStackParamList, "Recover">;

const RecoverScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleRecover = () => {
    // Add recover functionality here
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
        <SnowballButton title={t("recoverPassword")} onPress={handleRecover} />
        <SnowballButton
          title={t("login")}
          onPress={() => navigation.navigate("Login")}
        />
      </SnowballStack>
    </SnowballView>
  );
};

export default RecoverScreen;
