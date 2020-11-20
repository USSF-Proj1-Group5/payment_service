const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const { allowedNodeEnvironmentFlags } = require("process")
const app = express()

//const cookieParser = require('cookie-parser')
//app.use(cookieParser())

const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//var pgp = require('pg-promise')(/* options */)
//var db = pgp('postgres://testuser:password@127.0.0.1/school')
const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'admin',
    password: 'admin',
    host: '172.25.0.2',
    database: 'payment_db',
})

//TEST EXPRESS WITH PING
app.get('/ping', (req,res) => {
    let toSend = 'PONGO';
    toSend = JSON.stringify(toSend)
    res.send(toSend)
})

// User Balances

// GET
// User balances
app.get('/user_balances', (req, res) => {
    pool.query('SELECT * FROM user_balances', (error, results) => {
    if (error) {
        res.status(500)
        throw error;
    }
    res.status(200).send(results.rows)
    })
})

// GET
// User balance (Singular)
app.get('/user_balances/:id', (req, res) => {
    pool.query(`SELECT * FROM user_balances WHERE userid=${req.params.id}`, (error, results) => {
    if (error) {
        res.status(500)
        throw error;
    }
    res.status(200).send(results.rows)
    })
})
// UPDATE
// User Balance

// POST
// User Balance
// requires a query parameter "balance"
app.post('/user_balances/:id?', (req, res) => {
    pool.query(`INSERT INTO user_balances (userid,balance) VALUES (${req.params.id},${req.query.balance})`, (error, results) => {
    if (error) {
        res.status(500)
        throw error;
    }
    res.status(200).send(results.rows)
    })
})

// Contractor Balances

// Transactions
app.get('/transactions', (req, res) => {
    pool.query('SELECT * FROM transactions', (error, results) => {
    if (error) {
        res.status(500)
        throw error;
    }
    res.status(200).send(results.rows)
    })
})


// GET
// All movies and search
/*app.get('/students', (req, res) => {
    db.one('SELECT * FROM students')
        .then((data)=>{
            res.send(data)
        })
});
*/
//POST
// Register a student in the database
/* 
Example Body:
{
    "name": "Test Student",
    "email": "test@school.edu"
}
*/ 
/*app.post('/register',(req,res)=>{
    console.log(req.body);
    if (req.body.name && req.body.email) {
       email.then(data=>{
            
            console.log(data);
            if (data.rowCount>0) { 
                res.send(`Successfully registered ${req.body.name}`);
            }else{
                res.send(`Unable to register ${req.body.name}`);
            }
        })
    }
})*/

app.listen(port, () => console.log(`Payment API Server listening at http://172.22.0.4/16:${port}`))