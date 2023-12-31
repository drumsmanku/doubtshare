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
router.get('/doubt/get-all', async (req, res) => {
  const { classgrade, subjecttype } = req.query;
  
  // Start with the base SQL query
  let query = 'SELECT * FROM doubts';
  const values = [];
  const conditions = [];
  
  // If classgrade is present, add it to the conditions and the values array
  if (classgrade) {
    values.push(classgrade);
    conditions.push(`classgrade = $${values.length}`); // Use the index of the value as the parameter placeholder
  }

  // If subjecttype is present, do the same as above
  if (subjecttype) {
    values.push(subjecttype);
    conditions.push(`subjecttype = $${values.length}`); // Parameter placeholder
  }

  // If there are any conditions, append them to the query
  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND '); // Join all conditions with ' AND '
  }

  // Run the parameterized query
  client.query(query, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Server error' });
    } else {
      res.status(200).json(result.rows);
    }
  });

  // Remember not to end the client if you want to reuse the connection
  // client.end(); // This should be handled differently, probably on server shutdown
});


module.exports=router