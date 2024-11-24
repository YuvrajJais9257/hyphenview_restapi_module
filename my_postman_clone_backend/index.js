const express=require('express');
const mysql = require('mysql2');
const cors=require('cors');
const bodyParser=require('body-parser');

const app=express();
const PORT=process.env.PORT || 5002;

app.use(cors());
app.use(bodyParser.json());

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Admin123*',
    database:'hyphenview_new_release_test'    
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.post('/api/saveRequest', (req, res) => {
    const {name, url, method, headers, body, params, authDetails} = req.body;
    const query = `INSERT INTO requests (name, url, method, headers, body, params, authDetails) VALUES (?, ?, ?, ?, ?, ?, ?)`;

    // db.query(query, [name, url, method, JSON.stringify(headers), body, JSON.stringify(params)], (error, results) => {
    //     if (error) {
    //         return res.status(500).json({ error: 'Error saving request' });
    //     }
    //     res.status(200).json({ message: `Request "${name}" saved successfully!` });
    // });

    db.query(query, [name, url, method, JSON.stringify(headers), body, JSON.stringify(params), JSON.stringify(authDetails)], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Error saving request' });
        }
        res.status(200).json({ message: `Request "${name}" saved successfully!` });
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})