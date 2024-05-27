const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/willguard')
    .then(() => console.log('Database is connected successfully!'))
    .catch(err => console.log(err));
