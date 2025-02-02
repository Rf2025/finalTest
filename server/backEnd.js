const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8200;


// 
const courseOption ={
    origin:['http://localhost:8200','https://ecommercev2-ytjg.onrender.com'],
    optionsSucessStatus:200,
};

app.use(cors(courseOption));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// Create connection to database
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database', err);
    } else {
        console.log('Connected to database');
    }
});

// Route to fetch products from the database
app.get('/product/items', (req, res) => {
    connection.query(process.env.FETCH_QUERY, (err, results) => {
        if (err) {
            console.error('Error fetching products', err);
            res.status(500).json({ error: 'Failed to fetch products' });
        } else {
            res.json(results);
        }
    });
});




app.post('/form', (req, res) => {
    const data = req.body;
    console.log('User data:', data);
    res.send('Received user data');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


