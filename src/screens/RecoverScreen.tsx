import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import useTranslation from "../i18n"
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";

type Props = StackScreenProps<AuthStackParamList, "Recover">;

const RecoverScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");

  const handleRecover = () => {
    // Add recover functionality here
  };

  return (
    <View>
      <Text>{t("recoverPassword")}</Text>
      <TextInput
        placeholder={t("email")}
        value={email}
        onChangeText={setEmail}
      />
      <Button title={t("recoverPassword")} onPress={handleRecover} />
      <Button title={t("login")} onPress={() => navigation.navigate("Login")} />
    </View>
  );
};

export default RecoverScreen;
