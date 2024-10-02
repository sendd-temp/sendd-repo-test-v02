// ======================
// From OKX 2024-10-01
// https://www.okx.com/web3/build/docs/waas/nodejs-environment


// !!!!! BUT: This seems to relate to web3 Dapp rather than REST API??

// 1. Import the necessary Node.js libraries
// First, import the necessary Node.js libraries and set up your environment variables.

const cryptoJS = require('crypto-js'); // Import encryption modules for subsequent encryption calculations
const { Web3 } = require('web3'); // Import the Web3 library for interacting with Ethereum
const fetch = (...args) =>
import('node-fetch').then(({ default: fetch }) => fetch(...args)); // Import the fetch library for making HTTP requests

// 2. Set your environment variables#
// Define base variables for subsequent requests and API urls, and initialize Web3. Web3 is a set of libraries that allow you to interact with local or remote Ethereum nodes using HTTP, IPC, or WebSocket.
const apiBaseUrl = 'https://www.okx.com/'; // Define the underlying path of the request
const web3RpcUrl = 'https://.....pro'; // The URL for the Ethereum node you want to connect to
const privateKey = '0x...xxx'; // Set the private key of your wallet (replace '0x...xxx' with your actual private key). NEVER SHARE THIS WITH ANYONE!
const chainId = '1';
const fromTokenAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';    // Native token address
const toTokenAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

const userWalletAddress = '0x...35'; // User wallet address
const secretKey = '31...D2'; // The key obtained from the previous application
const apiKey = '42d0fd46-6f11-4681-a64a-9ba17d99d406'; // The api Key obtained from the previous application
const passphrase = '*********'; // The password created when applying for the key
const date = new Date(); // Get the current time
const timestamp = date.toISOString(); // Convert the current time to the desired format
const web3 = new Web3(new Web3.providers.HttpProvider(web3RpcUrl)); //Establishing web3 link


// 3. Define helper functions
// Define helper functions that will be used to interact with the OKX API.

// Construct full API request URL
const getRequestUrl = (apiBaseUrl, api, queryParams) => {
    return apiBaseUrl + api + '?' + new URLSearchParams(queryParams).toString();
  };
  const apiRequestUrl = getRequestUrl(apiBaseUrl, '/swap', swapParams);


// 4. Assemble the header parameters#
// Set the header properties. All the parameters are generic except for the apiRequestUrl parameter, which is generated based on different requests.
const headersParams = {
    'Content-Type': 'application/json',
    'OK-ACCESS-KEY': apiKey,
    'OK-ACCESS-SIGN': cryptoJS.enc.Base64.stringify(
      cryptoJS.HmacSHA256(timestamp + 'GET' + '/api/v5/dex/aggregator/xxx?xxx=xxx', secretKey)
    ),
    'OK-ACCESS-TIMESTAMP': timestamp,
    'OK-ACCESS-PASSPHRASE': passphrase,
  };

// ======================

