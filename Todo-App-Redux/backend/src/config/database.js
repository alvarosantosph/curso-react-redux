const mongoose = require('mongoose')
mongoose.Promisse = global.Promisse
module.exports = mongoose.connect('mongodb://localhost/todo')