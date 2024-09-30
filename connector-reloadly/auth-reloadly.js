// Fetch API used to process the API call response
// const fetch = require('node-fetch');
import fetch from 'node-fetch';


// ----------------
// Get Access Token API call spec from Reloadly

const url = 'https://auth.reloadly.com/oauth/token';
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Accept: 'application/json'},
  body: JSON.stringify({
    client_id: 'IBFCzRPihaNXuTK7RLKQokUqUyIY3VZp',
    client_secret: '2kgBBbGVkm-mbJEcRe43OYDKTXIq8r-k8NkSMgexPqyx8j5GidiwGiycHIhjPhl',
    grant_type: 'client_credentials',
    audience: 'https://topups.reloadly.com'
  })
};

/* Original from Reloadly Dev Docs
fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
*/
// ----------------




// ----------------
// Export the access token to another module
let accesstokenresponse;

const getAccesstoken = async () => {
    const response = await fetch(url, options);
    return await response.json();
  };



export default accesstokenresponse = await getAccesstoken();
console.log(accesstokenresponse);
