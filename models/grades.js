const mongoose = require("mongoose");

const grade = mongoose.model(
    "grades",
    new mongoose.Schema({
        student_id: {

            type: String,
        },
        grade: {
            required: true,
            type: Number,
        }
    })
);
module.exports = grade;