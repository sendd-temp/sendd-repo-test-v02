// From Binance 2024-10-01
// https://binance.github.io/binance-connector-node/


// const { Spot } = require('@binance/connector')
import pkg from '@binance/connector';
const { Spot } = pkg;


 
const apiKey = 'N8M7SFhJ4mOGsvmBJ8bpyHxugdRyHo45pLVaLiFtQdZeMp7f5NUJ6riPn4i3tCIT'
const apiSecret = 'O1LxqbzHb4ABtSOyMnNLo7m4qBUiqDylPDZ8BTPSifTneJptsa21OXr3LWqab1jw'
const client = new Spot(apiKey, apiSecret)
 
// Get account information
client.account().then(response => client.logger.log(response.data))
 
// Place a new order
client.newOrder('BNBUSDT', 'BUY', 'LIMIT', {
  price: '350',
  quantity: 1,
  timeInForce: 'GTC'
}).then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))
