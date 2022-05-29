const HDWalletProvider = require("@qtumproject/hdwallet-provider");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      // provider: () => new HDWalletProvider("frost shop innocent nothing affair length news hold tray pride wash car", "http://localhost:23889"),
      provider: () => new HDWalletProvider("frost shop innocent nothing affair length news hold tray pride wash car", "ws://localhost:23889"),
      network_id: "*",
      // from: "0x7926223070547d2d15b2ef5e7383e541c338ffe9",
      gasPrice: "0x5d21dba000"
    }
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
