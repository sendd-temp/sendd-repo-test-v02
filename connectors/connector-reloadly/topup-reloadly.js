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
// Airtime Top-up API call spec from Reloadly
const url = 'https://topups.reloadly.com/topups';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/com.reloadly.topups-v1+json',
    Authorization: authorization
    // Authorization: 'Bearer eyJraWQiOiIwMDA1YzFmMC0xMjQ3LTRmNmUtYjU2ZC1jM2ZkZDVmMzhhOTIiLCJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNDg4NSIsImlzcyI6Imh0dHBzOi8vcmVsb2FkbHkuYXV0aDAuY29tLyIsImh0dHBzOi8vcmVsb2FkbHkuY29tL3NhbmRib3giOmZhbHNlLCJodHRwczovL3JlbG9hZGx5LmNvbS9wcmVwYWlkVXNlcklkIjoiMjQ4ODUiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhdWQiOiJodHRwczovL3RvcHVwcy1oczI1Ni5yZWxvYWRseS5jb20iLCJuYmYiOjE3Mjc2NzcwOTMsImF6cCI6IjI0ODg1Iiwic2NvcGUiOiJzZW5kLXRvcHVwcyByZWFkLW9wZXJhdG9ycyByZWFkLXByb21vdGlvbnMgcmVhZC10b3B1cHMtaGlzdG9yeSByZWFkLXByZXBhaWQtYmFsYW5jZSByZWFkLXByZXBhaWQtY29tbWlzc2lvbnMiLCJleHAiOjE3MzI4NjQ2OTMsImh0dHBzOi8vcmVsb2FkbHkuY29tL2p0aSI6IjVmMDAzMTIyLTllMzAtNGQ1Zi1iYjY3LWQ5MTk0MDAwZTk1ZCIsImlhdCI6MTcyNzY3NzA5MywianRpIjoiMWMxOTMyZTQtMTVmNy00ODY2LTkyM2EtNGFhYjQ3ZDE4MGJhIn0.z5OlpwaFMGmG7JFW_Uau4gSqCyHHo3oFyLFPpyZzT0k'
  },
  body: JSON.stringify({
    operatorId: '535',
    amount: '5.00',
    useLocalAmount: true,
    customIdentifier: 'This is example identifier 130',
    recipientEmail: 'peter@nauta.com.cu',
    recipientPhone: {countryCode: 'GB', number: '447951731337'},
    senderPhone: {countryCode: 'CA', number: '11231231231'}
  })
};

/*
fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
*/
// ----------------



// ----------------
// Export the top-up response to another module

let topupresponse;

const getTopup = async () => {
    const response = await fetch(url, options);
    return await response.json();
  };

const topupjson = await getTopup();
console.log(topupjson.message + ' ' + topupjson.timeStamp);


//export default topupresponse = await getTopup();
export default topupresponse = await topupjson;
console.log(topupresponse);

