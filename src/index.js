const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes')


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config(); 
connectDB()

const PORT = process.env.PORT == null ? 8000 : process.env.PORT

app.use('/api/auth', authRoutes);

app.listen(8000 , () => {
    console.log(` server is running on http://localhost:${PORT}`)
})