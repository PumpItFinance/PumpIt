require('dotenv').config();

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {

  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*'
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC, 
          process.env.INFURA_API
        );
      },
      gasPrice: 25000000000,
      network_id: 42
    },
    gorli: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONIC, 
          process.env.GOERLI_API
        );
      },
      gasPrice: 25000000000,
      network_id: '*'
    }
  },

/*




*/

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      },
      version: "0.6.2",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      //  optimizer: {
      //    enabled: false,
      //    runs: 200
      //  },
      //  evmVersion: "byzantium"
      // }
    },
  },
};
