// server.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/proxy', async (req, res) => {
    try {
        const response = await axios.get('https://news.google.com/');
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching the content');
    }
});

app.listen(PORT, () => {
    console.log(`Proxy server running at http://localhost:${PORT}`);
});