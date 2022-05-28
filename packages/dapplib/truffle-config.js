require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth shift pudding hockey arch sun gesture'; 
let testAccounts = [
"0x26ea88ff1b168d96454a395cf0d703ebd0cd54b9fbae00ea0a66266ec4775405",
"0xf3fd17c0d557af3861607402143f7021b1945689143e055d78e020ca3ad6795b",
"0xed3dae7ba9df908c97cbc12feb6e8f1f0760f0f9766836e6bb450d24699082ca",
"0xdf858cc5e8f817f15a23347a6b9ca562350660cb9556a21d9493badbf4fb845a",
"0x8976e853f620901da6ad3eceb12f200926e213c5ef79d06f9116f1cee2697005",
"0xbb3b45f01454d686a49699b1c9da8103f977929c2ef8063d62e178886784b853",
"0x91b93f10db414f075c3dfba7259758e049673f521914f477171298f1cba6726c",
"0xa2401efa9a4537c77b47b1b45787934b4a96fefec48d5552d696b5f5a892fff4",
"0x5759c405613287aa87c2cadc0e42e4467e7a98b47ed570cce27bc8f6f200545d",
"0xf5feaee4e38a858053142ff2fea65c111e35abed417669c4001864e3a859afe5"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


