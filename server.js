const express = require('express');

const app = express();
app.use(express.json());
/*
app.use(express.json({ extended: false }));
*/

const dotenv = require('dotenv');
dotenv.config();

const itemsPool = require('./DBConfig');

app.get('/', (req, res) => {
    res.send('Simple API homepage');
})




// --------------
// Assets
// --------------

// Fetch all assets
app.get('/api/assets', async(req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM assets'
        );
        res.json({ allItems });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

// Create new asset
app.post('/api/assets', async (req, res) => {
    const { asset_name, asset_code, asset_type } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO assets (asset_name, asset_code, asset_type) VALUES ($1, $2, $3)',
            [asset_name, asset_code, asset_type]
        );
        res.json({ 
            message: "New asset added!",
            item: newItem.rows
         });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})






// --------------
// Transactions
// --------------

// Fetch all transactions
app.get('/api/transactions', async(req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM transactions'
        );
        res.json({ allItems });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

// Create new transaction
app.post('/api/transactions', async (req, res) => {
    const { account_from, account_to, amount_from_fullunits, amount_to_fullunits, asset_id_from, asset_id_to, transaction_description, transaction_code } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO transactions (account_from, account_to, amount_from_fullunits, amount_to_fullunits, asset_id_from, asset_id_to, transaction_description, transaction_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
            [account_from, account_to, amount_from_fullunits, amount_to_fullunits, asset_id_from, asset_id_to, transaction_description, transaction_code]
        );
        res.json({ 
            message: "New transaction added!",
            item: newItem.rows
         });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})





// --- old placeholder for testing as tends to work
app.get('/api/items', async(req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM items'
        );
        res.json({ allItems });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

// --- old placeholder for testing as tends to work
app.post('/api/items', async (req, res) => {
    const { description } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO items (description) VALUES ($1) RETURNING *',
            [description]
        );
        res.json({ 
            message: "New item added!",
            item: newItem.rows
         });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})







app.listen(5070, () => {
    console.log("Server running on port 5070");
})