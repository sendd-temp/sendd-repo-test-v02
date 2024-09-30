// const fetch = require('node-fetch');
import fetch from 'node-fetch'


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

fetch(url, options)
	.then(res => res.json())
	.then(json => console.log(json))
	.catch(err => console.error('error:' + err));
