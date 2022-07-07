const HDWalletProvider = require("@qtumproject/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    regtest: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "http://localhost:23889",
      }),
      network_id: "*",
      gasPrice: "0x5d21dba000"
    },
    testnet: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "https://testnet-janus.qiswap.com/api/",
      }),
      network_id: "*",
      gasPrice: "0x5d21dba000"
    },
    mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "https://janus.qiswap.com/api/",
      }),
      network_id: "*",
      gasPrice: "0x5d21dba000"
    },
  },
  compilers: {
    solc: {
      version: "^0.8.0",
      settings: {
        optimizer: {
          enabled: true,
          runs: 1,
        },
      },
    },
  },
};
