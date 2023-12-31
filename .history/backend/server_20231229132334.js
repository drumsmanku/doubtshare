const express= require('express');
const client = require('./connection.js');
const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const cors=require('cors');

const app=express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
dotenv.config()



app.listen(4000, ()=>{
  console.log("Sever is now listening at port 3000");
})

client.connect()


app.get('/users', (req, res)=>{
  client.query(`Select * from users`, (err, result)=>{
    if(!err){
      res.send(result.rows)
    }
  });
  client.end
})

app.get('/users/:id', (req, res)=>{
  client.query(`select * from users where id=${req.params.id}`, (err, result)=>{
    if(!err){
      res.send(result.rows);
    }
    
  })
  client.end
})

app.post('/users', (req, res)=> {
  const user = req.body;
  let insertQuery = `insert into users(id, firstname, lastname, location) 
                     values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`

  client.query(insertQuery, (err, result)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ console.log(err.message) }
  })
  client.end;
})