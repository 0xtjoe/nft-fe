import { Contract, providers, utils } from "ethers";

import { CONTRACTS, RPC_URL } from "../utils/const";
import UNftAbi from "../abis/unft.json";

const provider = new providers.JsonRpcProvider(RPC_URL);
const UNftContract = new Contract(CONTRACTS.UNFT, UNftAbi, provider);

export const getMintValue = async (): Promise<string> => {
  const mintValue = await UNftContract.mintValue();
  return utils.formatEther(mintValue);
};

export const getCurrentId = async (): Promise<string> => {
  const currentId = await UNftContract.getCurrentId();
  return currentId.toString();
};

export const getNftName = async (): Promise<string> => {
  const nftName = await UNftContract.name();
  return nftName.toString();
};