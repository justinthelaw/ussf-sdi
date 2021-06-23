const express = require('express')
const app = express()
const students = require('./students.json')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/students', (req, res) => {
    if (req.query.name) {
        students.filter((student => {
            let studentName = student.name.split("").join("").toLowerCase();
            if (studentName.match(req.query.name.split("").join("").toLowerCase())) {
                res.status(200).send(student)
            }
        }))

        console.log(`> Query for ${JSON.stringify(req.query)} has been completed`)
    } else {
        res.status(200).send(students)
    }
})

app.get('/students/:studentId', (req, res) => {
    if (students[req.params.studentId - 1]) {
        res.status(200).send(students[req.params.studentId - 1])
    } else {
        res.status(404).send(students)
    }

    console.log(`> Query for ${JSON.stringify(req.params)} has been completed`)
})

app.get('/grades/:studentId', (req, res) => {
    if (req.params.studentId) {
        res.status(200).send(students[req.params.studentId - 1])

        console.log(`> Query for ${JSON.stringify(req.params)} has been completed`)
    } else {
        res.status(404).send(students)
    }
})

app.post('/register', (req, res) => {
    res.status(200).send("POST")
})

const port = 5002
app.listen(port, () => console.log(`Express Params CFU7 listening at http://localhost:${port}`))