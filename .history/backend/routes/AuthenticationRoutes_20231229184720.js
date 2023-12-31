const express = require('express');
const bcrypt = require("bcrypt");
const jwt=require('jsonwebtoken');
const router=express.Router();
const client=require('../connection.js')

const saltRounds = 10; // the cost factor for hashing

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUserQuery = {
      text: 'INSERT INTO users(name, email, password) VALUES($1, $2, $3)',
      values: [name, email, hashedPassword],
    };

    // Insert new user with hashed password into the database
    await pool.query(newUserQuery);
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports=router