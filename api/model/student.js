const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    product:String,
    quantity:Number
})

module.exports = mongoose.model('Student',studentSchema);