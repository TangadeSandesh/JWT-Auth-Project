const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const mysql = require('mysql')
const cookieParser = require('cookie-parser')

const app =express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db= mysql.createConnection({
    host:"localhost",
    user:"user",
    password:"Mysandesh@123",
    database:"jwtDB"
})

db.connect((err)=>{
    if (err) throw err;
    console.log("connected to the JWT database");
});


app.listen(5000, () =>{
    console.log("running.....");
})

