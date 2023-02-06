import { ethers } from "hardhat";

async function main() {
  const MetadriveFiles = await ethers.getContractFactory("MetadriveFiles");
  const metadriveFile = await MetadriveFiles.deploy();
  await metadriveFile.deployed();
  console.log("MetadriveFiles contract deployed to", metadriveFile.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
