const express= require('express');
const client = require('./connection.js');
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
dotenv.config()


app.listen(3300, ()=>{
  console.log("Sever is now listening at port 3000");
})

client.connect()