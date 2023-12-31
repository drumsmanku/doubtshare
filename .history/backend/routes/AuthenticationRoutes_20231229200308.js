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

    client.query(newUserQuery).then(()=>{
      const token = jwt.sign({ email:email }, process.env.JWT_SECRET_KEY, {expiresIn: 3600 });
     res.json({ message: 'User registered successfully!' }, token);
    })
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  
  const findUserQuery = {
    text: 'SELECT * FROM users WHERE email = $1',
    values: [email],
  };
  
  try {
    const userResult = await client.query(findUserQuery);
    
    if (userResult.rows.length > 0) {
      const user = userResult.rows[0];

      const match = await bcrypt.compare(password, user.password);

      if (match) {
        // Create token
        const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET_KEY, { expiresIn: 3600 });
        
        res.status(200).json({ message: 'Logged in successfully!', token });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    } else {
      res.status(404).json({ message: 'User does not exist' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports=router