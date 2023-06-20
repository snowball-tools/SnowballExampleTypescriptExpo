import React from "react";
import useTranslation from "../i18n";
import { StackScreenProps } from "@react-navigation/stack";
import { SnowballView } from "../components";
import { AuthStackParamList } from "../navigation/StackParamList";
import { getEnvVariable, EnvVariables } from "../utils/env";

const projectId = getEnvVariable(EnvVariables.WALLETCONNECT_PROJECT_ID);

const providerMetadata = {
  name: getEnvVariable(EnvVariables.WALLETCONNECT_PROJECT_NAME),
  description: "snowball tools example app",
  url: "https://www.snowballtools.xyz",
  icons: [
    "https://raw.githubusercontent.com/snowball-tools/SnowballSwiftKit/14e8903bf090d4928f32326b61e6c3545b7547e0/Sources/SnowballAssetKit/Resources/WalletAssets.xcassets/snowball_circle.imageset/snowball_circle.svg",
  ],
  redirect: {
    native: "snowballtools://",
    universal: "snowballtools.xyz",
  },
};

type Props = StackScreenProps<AuthStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return <SnowballView padding={10}></SnowballView>;
};

export default LoginScreen;
