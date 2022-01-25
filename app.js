const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = 3000;
const student = require('./models/students')
const grade = require('./models/grades')
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
const fs = require('fs-extra');
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/mySchool').then(() => {
    app.listen(port, () => {
        console.info(`Example app listening at http://localhost:${port}`)
    });
}).catch(e => console.error(e));

let students;
app.get('/creatingStudent', (req, res) => {
    students = new student({
        name: "yosi",
        grade: 100,
        age: 22,
    })
    students.save((err, student) => {
        console.log(err);
        console.log(student);
        res.send('inserted one student')
    })
});
app.get('/students/:name', async (req, res) => {
    console.log(req.params.name);
    let nameStudents = req.params.name // {name: 'john',grades:85}
    const students = await student.findOne({
        name: nameStudents
    }, (err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.json(nameStudents.name);
        }
    });
    students.save((err, student) => {
        console.log(err);
        console.log(student);
        res.send("student details are kept");
    });
});

app.get('/students', (req, res) => {
    let findStudents = student.find((err, students) => {
        findStudents = new student(req.body.name);
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    })
})

app.get('/grades', (req, res) => {
    let StudentsID = req.params.id
    const grades = new grade({
        student_id: StudentsID,
        grade: 100
    })
    grades.save((err, grades) => {
        console.log(err);
        console.log(grades);
        res.json(grades)
    })
});

app.delete('/studentDel/:name', (req, res) => {
    let nameStudents = req.params.name // {name: 'john',grades:85}
    student.deleteOne({
        name: nameStudents
    }, (err, students) => {
        if (err) {
            console.log(err);
        } else {
            res.json(students);
        }
    });
})

app.delete('/studentIdDel/:id', (req, res) => {
    let idStudents = req.params.id // {id: '61edb8a52ede740c1dadd6b2'}
    student.deleteOne({
        _id: idStudents
    }).then((studentIdDel) => {
        res.json(studentIdDel);
    }).catch((err) => res.json(err))
})