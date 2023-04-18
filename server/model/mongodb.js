const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/hotelmanagement', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('connected to mongodb successfully....'))
    .catch(err => console.log('failed to connect to mongodb', err));

//Connecting Node and MongoDB
require('./user.model');
