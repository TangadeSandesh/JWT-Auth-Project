const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const mysql = require('mysql')
const cookieParser = require('cookie-parser')
const salt=10;

const app = express();
app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST", "GET"],
    credentials: true
}));
app.use(cookieParser());

const db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Mysandesh@123",
    database:"jwtDB"
})

db.connect((err)=>{
    if (err) throw err;
    console.log("connected to the JWT database");
});

app.post("/register", (req, res) => {
    const sql = "INSERT INTO users(`name`, `email`, `password`) VALUES(?,?,?)";
    bcrypt.hash(req.body.password, salt, (err, hash) => {
        if (err) {
            return res.json({ Error: "Error hashing password" });
        }
        const values = [req.body.name, req.body.email, hash];
        db.query(sql, values, (err, result) => {
            // console.log(result);
            if (err) {
                return res.json({ Error: "Error inserting data into the database" });
            }
            return res.json({ Status: "Success" });
        });
    });
});

app.post('/login', (req, res) =>{
    const sql='select * from users where email=?';
    db.query(sql, [req.body.email], (err, data) =>{
        if(err) return res.json({Error:"Login error in server"});
        if(data.length>0){
            bcrypt.compare(req.body.password, data[0].password, (err, response) => {
                if(err) return res.json({Error:"Password compare error"});
                if(response){
                    const name=data[0].name;
                    const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: '1d'});
                    res.cookie('token', token);
                    return res.json({Status:"Success"})
                }
                else{
                    return res.json({Error:"Password not matched"});
                }
            })
        }
        else{
            return res.json({Error:"No email existed"});
        }
    })
})


app.listen(5000, () =>{
    console.log("running.....");
})

