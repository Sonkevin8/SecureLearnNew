const express = require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());

const db=mysql.createConnection({
    host : 'localhost',
    user :"root",  
    password : "",
    database : "securelearn_db"
})

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