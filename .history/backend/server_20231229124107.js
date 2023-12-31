const express= require('express');
const client = require('./connection.js');
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config()



app.listen(4000, ()=>{
  console.log("Sever is now listening at port 3000");
})

client.connect()


app.get('/user', (req, res)=>{
  client.query(`Select * from users`, (response, err)=>{
    if(!err){
      res.send(response)
    }
  });
  client.end
})
