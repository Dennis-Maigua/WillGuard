require('dotenv').config();
require('./db');

const express = require('express');
const cors = require('cors');
const userRouter = require('./routes/user');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());
app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});