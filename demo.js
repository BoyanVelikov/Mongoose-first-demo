const mongoose = require('mongoose');
const studentSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    facultyNumber: {type: String, required: true, unique: true},
    age: {type: Number, }
});

module.exports = mongoose.model('Student', studentSchema);