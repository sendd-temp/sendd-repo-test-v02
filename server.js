const express = require('express');

const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const itemsPool = require('./DBConfig');

app.get('/', (req, res) => {
    res.send('Simple API homepage');
})




// --------------
// Transactions
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
    const { asset_name } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO assets (asset_name) VALUES ($1) RETURNING *',
            [asset_name]
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