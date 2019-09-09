const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://thalalhassan:thalalhassan@webapp-a2odf.mongodb.net/test?retryWrites=true&w=majority');



const Schema = mongoose.Schema;

var newBookData = new Schema({
    Title:String,
    Author:String,
    Genre:String,
    ImageUrl:String


});

var bookData= mongoose.model('Book-Data',newBookData);
module.exports = bookData;
