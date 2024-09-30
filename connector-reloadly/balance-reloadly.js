// Fetch API used to process the API call response
//const fetch = require('node-fetch');
import fetch from 'node-fetch';


// ----------------
// Fetch Access Token from Reloadly
import accesstokenresponse from './auth-reloadly.js';
const response = await accesstokenresponse;

// Extract only the access_token property from the JSON response
const accesstoken = response.access_token;
//console.log(accesstoken);
// ----------------



// Construct authorization string
const authorization = 'Bearer ' + accesstoken;



// ----------------
// Balance check API call spec from Reloadly
const url = 'https://topups.reloadly.com/accounts/balance';
const options = {
  method: 'GET',
  headers: {
    Accept: 'application/com.reloadly.topups-v1+json',
    Authorization: authorization
    // Authorization: 'Bearer eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNDg4NSIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHkuYXV0aDAuY29tLyIsImh0dHBzOi8vcmVsb2FkbHkuY29tL3NhbmRib3giOmZhbHNlLCJodHRwczovL3JlbG9hZGx5LmNvbS9wcmVwYWlkVXNlcklkIjoiMjQ4ODUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhdWQiOiJodHRwczovL3RvcHVwcy1oczI1Ni5yZWxvYWRseS5jb20iLCJuYmYiOjE3Mjc2NzcwOTMsImF6cCI6IjI0ODg1Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MzI4NjQ2OTMsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjVmMDAzMTIyLTllMzAtNGQ1Zi1iYjY3LWQ5MTk0MDAwZTk1ZCIsImlhdCI6MTcyNzY3NzA5MywianRpIjoiMWMxOTMyZTQtMTVmNy00ODY2LTkyM2EtNGFhYjQ3ZDE4MGJhIn0.z5OlpwaFMGmG7JFW_Uau4gSqCyHHo3oFyLFPpyZzT0k'
  }
};

/*
fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
*/
// ----------------


// ----------------
// Export the account balance to another module

let balanceresponse;

const getBalance = async () => {
    const response = await fetch(url, options);
    return await response.json();
  };

const balancejson = await getBalance();
console.log(balancejson.currencyCode + ' ' + balancejson.balance);


//export default balanceresponse = await getBalance();
export default balanceresponse = await balancejson;
console.log(balanceresponse);
