const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userSchema=require('./schema')

dotenv.config();

const app = express();


app.use(express.json());

app.get('/', (req, res) => {
    res.send('pong');
});


app.post('/signup', async (req, res) => {
  


    try {
        const { name, email, password, dateofbirth } = req.body;

        if (!name) {
            return res.status(400).send("Username cannot be empty");
        }
        if (!email) {
            return res.status(400).send("Email cannot be empty");
        }
        if (password.length < 8 || password.length > 16) {
            return res.status(400).send("Password length should be between 8 and 16 characters");
        }
    
        res.status(201).json({ message: "User registered successfully",name,email,password,dateofbirth });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


const PORT = 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('MongoDB Connected');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    });
