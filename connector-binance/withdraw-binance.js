// From Binance 2024-10-01
// https://binance.github.io/binance-connector-node/
// https://binance-docs.github.io/apidocs/spot/en/#withdraw-user_data
// https://binance.github.io/binance-connector-node/module-Wallet.html
// This is the best one:
// https://github.com/binance/binance-connector-node/blob/master/examples/spot/wallet/withdraw.js


// Note: "Spot" is the name of the API and under Binance Spot API there are various sub-areas such as Wallet (under which for example Withdraw is)

// Note: Withdraw is only allowed from pre-specified IP addresses (configured in Binance web dashboard)


/* ---------
// This is the original example in GitHub
// https://github.com/binance/binance-connector-node/blob/master/examples/spot/wallet/withdraw.js

'use strict'

const Spot = require('../../../src/spot')

const apiKey = ''
const apiSecret = ''
const client = new Spot(apiKey, apiSecret)

client.withdraw(
  'BNB', // coin
  'bnb_address', // withdraw address
  1, // amount
  { // optional parameters
    network: 'BNB',
    name: 'address name',
    walletType: 0
  }
).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))

// -----------
*/



// ---------
// Modified for our use

'use strict'

// Was
//const Spot = require('../../../src/spot')
// We changed to
import pkg from '@binance/connector';
const { Spot } = pkg;



const apiKey = 'N8M7SFhJ4mOGsvmBJ8bpyHxugdRyHo45pLVaLiFtQdZeMp7f5NUJ6riPn4i3tCIT'
const apiSecret = 'O1LxqbzHb4ABtSOyMnNLo7m4qBUiqDylPDZ8BTPSifTneJptsa21OXr3LWqab1jw'
const client = new Spot(apiKey, apiSecret)


client.withdraw(
  'BNB', // coin
  '0x3Cb6Ebfe734ae79f66E7B7e7F560241e25a749a3', // withdraw address
  0.001, // amount
  { // optional parameters
    recvWindow: 60000 //ms, default is 5000 max is 60000
  }
).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))