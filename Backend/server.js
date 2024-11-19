const express = require('express');
const mysql=require('mysql');
const cors=require('cors');
const bodyParser = require('body-parser');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

const db=mysql.createConnection({
    host : 'localhost',
    user :"root",  
    password : "",
    database : "securelearn_db"
});

db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('MySQL connected');
  });

  app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

  // Vulnerable SQL query
  const sql = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Invalid credentials');
    }
  });
});






app.get('/',(req,res)=>{
    return res.json("From baCKEND sIDE");
})

app.get('/users',(req,res)=>{
    const sql = "SELECT * From users";
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})


app.listen(8081,()=>{
    console.log("listening");
})