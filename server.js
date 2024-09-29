const express = require('express');

const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const itemsPool = require('./DBConfig');

app.get('/', (req, res) => {
    res.send('Simple API homepage');
})

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


// Fetch list of assets TEST
app.get('/api/assets_test', async(req, res) => {
    try {
        const allItems = await itemsPool.query(
            'SELECT * FROM assets_test'
        );
        res.json({ allItems });
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message)
    }
})

// --- old - delete
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

// Create new asset
app.post('/api/assets_test', async (req, res) => {
    const { asset_name } = req.body;
    try {
        const newItem = await itemsPool.query(
            'INSERT INTO assets_test (asset_name) VALUES ($1) RETURNING *',
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

app.listen(5070, () => {
    console.log("Server running on port 5070");
})