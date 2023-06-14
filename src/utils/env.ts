import {
  WALLETCONNECT_PROJECT_ID,
  WALLETCONNECT_PROJECT_NAME,
  ALCHEMY_ID,
} from "@env";

// needs work
export enum EnvVariables {
  WALLETCONNECT_PROJECT_ID = "WALLETCONNECT_PROJECT_ID",
  WALLETCONNECT_PROJECT_NAME = "WALLETCONNECT_PROJECT_NAME",
  ALCHEMY_ID = "ALCHEMY_ID",
}

// needs work
export const getEnvVariable = (envVariables: EnvVariables): string => {
  switch (envVariables) {
    case EnvVariables.WALLETCONNECT_PROJECT_ID:
      return WALLETCONNECT_PROJECT_ID;
    case EnvVariables.WALLETCONNECT_PROJECT_NAME:
      return WALLETCONNECT_PROJECT_NAME;
    case EnvVariables.ALCHEMY_ID:
      return ALCHEMY_ID;
    default:
      throw new Error("Invalid env variable");
  }
};
