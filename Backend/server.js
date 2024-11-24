const express = require('express');
const mysql = require('mysql');
const corsMiddleware = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(corsMiddleware());
app.use(express.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "",
    database: "securelearn_db"
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error:', err);
        console.error('Database connection error:', err);
        process.exit(1);
    }
    console.log('MySQL connected');
});

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // Vulnerable SQL query using direct string interpolation
    const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
    console.log(sql);
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).send('Server error');
        }
        if (result.length > 0) {
            res.send('Login successful');
        } else {
            res.send('Invalid credentials');
        }
    });
});

app.get('/', (_, res) => {
    return res.json("From backend side");
});

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("listening");
});
