const express = require('express');
require('dotenv').config();
require('./db');

const app = express();
const PORT = process.env.PORT || 8000;
const userRouter = require('./routes/user');

app.use(express.json());
app.use('/api/user', userRouter);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});