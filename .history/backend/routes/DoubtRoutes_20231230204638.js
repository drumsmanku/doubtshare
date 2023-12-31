const express = require('express');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const router=express.Router();
const client=require('../connection.js')


router.post('/doubt/add', async(req, res)=>{
  const { classgrade, languagepref, subjecttype, description } = req.body;
  try{
    const newDoubtQuery = {
      text: 'INSERT INTO doubts(classgrade, languagepref, subjecttype, description) VALUES($1, $2, $3, $4)',
      values: [classgrade, languagepref, subjecttype, description],
    };
    client.query(newDoubtQuery, (err, result)=>{
      if(!err){
        res.json({ message: 'Doubt created successfully!' });
      }
    })
  }
  catch(error){
    res.status(500).json({ error: error.message });
  }
})

module.exports=router