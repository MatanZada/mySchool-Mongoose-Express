const mongoose = require("mongoose");

const student = mongoose.model(
    "student",
    new mongoose.Schema({
        age: {
            required: true,
            type: Number,
        },
        name: {
            required: true,
            type: String,
        },
        grade: {
            required: true,
            type: Number,
        },
    })
);
module.exports = student;