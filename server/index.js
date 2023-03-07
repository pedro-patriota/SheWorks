const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

// create our express app
const app = express()
app.use(cors());

// middleware
app.use(express.json())

app.use(bodyParser.urlencoded({ extended: true }));

const chat_inside = require('./Routes/Chat_Inside')
app.use('/chat_inside', chat_inside)

app.listen(3001, () => {
    console.log("running server on 3001")
});