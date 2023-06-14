import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../navigation/StackParamList";
import { Web3Modal, Web3Button } from "@web3modal/react-native";
import { SnowballView } from "../components";
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
  return (
    <SnowballView padding={10}>
      <Web3Button />
      <Web3Modal projectId={projectId} providerMetadata={providerMetadata} />
    </SnowballView>
  );
};

export default LoginScreen;
