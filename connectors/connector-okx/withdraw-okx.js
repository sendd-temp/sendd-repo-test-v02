/*
// ==========================

// ----
// Authentication
// From OKX 202-10-01
// https://www.okx.com/docs-v5/en/#overview-rest-authentication-making-requests

REST Authentication
Making Requests
All private REST requests must contain the following headers:

OK-ACCESS-KEY The API Key as a String.

OK-ACCESS-SIGN The Base64-encoded signature (see Signing Messages subsection for details).

OK-ACCESS-TIMESTAMP The UTC timestamp of your request .e.g : 2020-12-08T09:08:57.715Z

OK-ACCESS-PASSPHRASE The passphrase you specified when creating the APIKey.

Request bodies should have content type application/json and be in valid JSON format.

Signature
Signing Messages

The OK-ACCESS-SIGN header is generated as follows:

Create a prehash string of timestamp + method + requestPath + body (where + represents String concatenation).
Prepare the SecretKey.
Sign the prehash string with the SecretKey using the HMAC SHA256.
Encode the signature in the Base64 format.
Example: sign=CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(timestamp + 'GET' + '/api/v5/account/balance?ccy=BTC', SecretKey))

The timestamp value is the same as the OK-ACCESS-TIMESTAMP header with millisecond ISO format, e.g. 2020-12-08T09:08:57.715Z.

The request method should be in UPPERCASE: e.g. GET and POST.

The requestPath is the path of requesting an endpoint.

Example: /api/v5/account/balance

The body refers to the String of the request body. It can be omitted if there is no request body (frequently the case for GET requests).

Example: {"instId":"BTC-USDT","lever":"5","mgnMode":"isolated"}

 `GET` request parameters are counted as requestpath, not body
The SecretKey is generated when you create an APIKey.

Example: 22582BD0CFF14C41EDBF1AB98506286D

// ----
// Withdrawal
// From OKX 2024-10-01
// https://www.okx.com/docs-v5/en/#funding-account-rest-api-withdrawal
// This is for HTTP (Node example not available)

# on-chain withdrawal
POST /api/v5/asset/withdrawal
body
{
    "amt":"1",
    "fee":"0.0005",
    "dest":"4",
    "ccy":"BTC",
    "chain":"BTC-Bitcoin",
    "toAddr":"17DKe3kkkkiiiiTvAKKi2vMPbm1Bz3CMKw"
}

# Specific entity users need to provide receiver's info
POST /api/v5/asset/withdrawal
body
{
    "amt":"1",
    "fee":"0.0005",
    "dest":"4",
    "ccy":"BTC",
    "chain":"BTC-Bitcoin",
    "toAddr":"17DKe3kkkkiiiiTvAKKi2vMPbm1Bz3CMKw",
    "rcvrInfo":{
        "walletType":"exchange",
        "exchId":"did:ethr:0xfeb4f99829a9acdf52979abee87e83addf22a7e1",
        "rcvrFirstName":"Bruce",
        "rcvrLastName":"Wayne"
    }
}



// OKX Withdrawal response example
{
    "code": "0",
    "msg": "",
    "data": [{
        "amt": "0.1",
        "wdId": "67485",
        "ccy": "BTC",
        "clientId": "",
        "chain": "BTC-Bitcoin"
    }]
}




// ==========================
*/




// ==========================
// Our code:

// Fetch API used to process the API call response
//const fetch = require('node-fetch');
import fetch from 'node-fetch';


// ----------------
// Withdrawal API call to OKX

const timestamp = Date().toISOString();
const url = 'https://www.okx.com/api/v5/asset/withdrawal';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'OK-ACCESS-KEY': 'd85e7426-c456-4cad-9696-09ab12e42afc', // The API Key as a String.
    'OK-ACCESS-SIGN': 'CE6693501CFA2AF979D901438F7EECD9', // The Base64-encoded signature (see Signing Messages subsection for details).
    'OK-ACCESS-TIMESTAMP': timestamp, // The UTC timestamp of your request .e.g : 2020-12-08T09:08:57.715Z
    'OK-ACCESS-PASSPHRASE': 'S3ndOKX-api@2o2a!' // The passphrase you specified when creating the APIKey.  
},
  body: JSON.stringify({
    "amt":"1",
    "fee":"0.0005",
    "dest":"4",
    "ccy":"BTC",
    "chain":"BTC-Bitcoin",
    "toAddr":"17DKe3kkkkiiiiTvAKKi2vMPbm1Bz3CMKw"
  })
};

