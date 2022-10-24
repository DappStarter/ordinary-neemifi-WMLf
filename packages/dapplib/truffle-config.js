require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remember smile grace hero flower spoon'; 
let testAccounts = [
"0xa3a4266ff15aa42e38a1c33c9dfc61e3c58f939e1b54fa96f1330cc0aad70330",
"0x2d6f7bb324a6b083e10a4714f58415cbd6c27484e2edaefd271349183b6a8b2b",
"0x014c996c5bbf6cfa02dd7db7aca2d119539d716a03dbe47f85069ac3bac7531d",
"0xf52036c30b6938ca57064c124c21e48038090259e10fe7bb466506a91159c7fb",
"0xda0437cb477a7c351335210c637bdb06841a50443c516555c00c613de32a3774",
"0xf46f49dbb3e4b94d4b4d52995e830d59352be98bad756c90541b65b4d7b6c448",
"0x0c4abe5621839400d07ab696d0a8aa0f38ed342a104bcbe9667945b01c97886d",
"0xe9d5d9035635f2e4b088c4e7515655c23a6a8af8a83294bbc58008100106bc3c",
"0x2517e7a43e9f9e9c19040ddd08b0d9fbd7179fdd237e52df7340f4ddccc3c892",
"0xf662189574174b751a50e8099b3b3c6dfa9f4851ea3fd698be28d09de108b193"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

