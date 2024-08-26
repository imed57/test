import { NodeHelper } from "./helpers/NodeHelper";
import avalanche from "./assets/tokens/AVAX.svg";

export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export enum NetworkId {
  // MAINNET = 1,
  // TESTNET_RINKEBY = 4,

  POLYGON = 137,
  POLYGON_TESTNET = 80001,

  //  FANTOM = 250,
  //  FANTOM_TESTNET = 4002,

  Localhost = 1337,
}

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  137: {
    WEI_ADDRESS: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    DAI_ADDRESS: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    TOKEN_ADDRESS: "0xe4CF872aDa5077A0fE4eF4210E800a38B7C0C28b",
    CLAIMS_ADDRESS: "0xf01BE68406373c0F2F0eed62544A1cb0D7145250",
    TITANO_ADDRESS: "0xe4CF872aDa5077A0fE4eF4210E800a38B7C0C28b",
    PRESALE_ADDRESS: "0x110A07C4E81B0084F9eA9f0521E61A4F0b8F98f9",
    UNISWAP_PAIR: "0x37e5c39d32306f51c441bab172292b5deb01ff24",
    TOKEN_URL: "https://i.ibb.co/XssNtyb/logo.png",
    TOKEN_SYMBOL: "YIELD",
    TOKEN_DECIMALS: "18",
  },
};

/**
 * Network details required to add a network to a user's wallet, as defined in EIP-3085 (https://eips.ethereum.org/EIPS/eip-3085)
 */

interface INativeCurrency {
  name: string;
  symbol: string;
  decimals?: number;
}

interface INetwork {
  chainName: string;
  chainId: number;
  nativeCurrency: INativeCurrency;
  rpcUrls: string[];
  blockExplorerUrls: string[];
  image: string;
  imageAltText: string;
  uri: () => string;
}

export const NETWORKS: { [key: number]: INetwork } = {
  137: {
    chainName: "Polygon",
    chainId: 137,
    nativeCurrency: {
      name: "Polygon",
      symbol: "MATIC",
    },
    rpcUrls: ["https://polygon-mainnet.infura.io/v3/26da974aa2074ddfa1fef7be309e00e1"],
    blockExplorerUrls: ["https://polygonscan.com/#/"],
    image: avalanche,
    imageAltText: "Avalanche Logo",
    uri: () => NodeHelper.getMainnetURI(43114),
  },
};
