import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  typechain: {
    outDir: "typechain-types/src",
  },
  networks: {
    mumbai: {
      url: process.env.MUMBAI_URLS,
      accounts: [process.env.PRIVATE_KEYS],
    },
  },
};

export default config;
