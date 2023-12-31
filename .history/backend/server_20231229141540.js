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

app.post('/users/add', (req, res) => {
  const user = req.body;
  if (user.id && user.firstname && user.lastname && user.location) {
    let insertQuery = 
      `insert into users(id, firstname, lastname, location) values(${user.id}, '${user.firstname}', '${user.lastname}', '${user.location}')`
    ;

    client.query(insertQuery, (err, result) => {
      if (!err) {
        res.send('Insertion was successful');
      } else {
        console.error(err.message);
        res.status(500).send('Internal server error');
      }
    });
  } else {
    res.status(400).send('Bad request: Missing required fields');
  }
});

app.put('/users/update/:id', (req, res)=>{
  const user=req.body;
  if(user.id && user.firstname && user.lastname && user.location){
    const changeQuery=`update users set firstname='${user.firstname}', lastname='${user.lastname}', location ='${user.location}' where id=${req.params.id}`

    client.query(changeQuery, (err, result)=>{
      if(!err){
        res.send("updated successfully")
      }
      else{
        res.send(console.log(err))
      }
    })
  }
  else{
    res.status(400).send('Bad request: Missing required fields');
  }
  
})