const HDWalletProvider = require("@qtumproject/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "ws://localhost:23889",
        // providerOrUrl: "http://localhost:23889",
        // derivationPath: "m/44'/2301'/0'/0/1",
      }),
      network_id: "*",
      // from: "0x7926223070547d2d15b2ef5e7383e541c338ffe9",
      gasPrice: "0x5d21dba000"
    },
    testnet: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "https://testnet-janus.qiswap.com/api/",
        // derivationPath: "m/44'/2301'/0'/0/1",
      }),
      network_id: "*",
      gasPrice: "0x5d21dba000"
    },
    mainnet: {
      provider: () => new HDWalletProvider({
        mnemonic: "",
        providerOrUrl: "https://janus.qiswap.com/api/",
        // derivationPath: "m/44'/2301'/0'/0/1"),
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
