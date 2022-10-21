require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  defaultNetwork:"hardhat",
  networks:{
    hardhat:{},
    goerli:
    {
      url:'YOUR_NODE_URL',
      accounts:['YOUR_ACCOUNT_CODE'],
saveDeployments:true,
    },
    
  },
  solidity: "0.8.17",
  namedAccounts:
  {
    deployer:{
      default:0
    }
  }
};
