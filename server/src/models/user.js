



const mongoose = require('mongoose');
module.exports = mongoose.model('User', { email: String, password: String, secretQuestion1: String, secretAnswer1: String, secretQuestion2: String, secretAnswer2: String});



