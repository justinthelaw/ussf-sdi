const express = require('express')
const app = express()
// const users = require('./users.json')
const usersData = require('./usersData.json')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    if (req.query.name) {
        let requestedUser = usersData.filter((user) => {
            let username = user.name.join("").toLowerCase();
            if (username.match(req.query.name.toLowerCase().split(" ").join(""))) {
                return user
            }
        })
        res.status(200).send(requestedUser)
    } else {
        res.status(200).send(usersData)
    }
})

app.get('/:id', (req, res) => {
    const data = usersData[req.params.id - 1]
    res.status(200).send(data)
    console.log(`> request for ${data.name.join(" ")} completed`)
})

app.post('/', (req, res) => {
    let newUser = Object.assign(req.body)
    newUser.id = usersData.length + 1
    newUser.name = newUser.name.split(" ")
    newUser.notes = newUser.notes.split(" | ")

    if (newUser.name && newUser.profilePic && newUser.lastCalled && newUser.timesCalled && newUser.notes) {
        res.status(200).send(`${newUser.name.join(" ")}, with id #${newUser.id}, has been added to the user list!`)

        usersData.push(newUser)

        fs.writeFile("usersData.json", JSON.stringify(usersData), (err) => {
            err ? console.log(err) : console.log(`> ${newUser.name.join(" ")}, with id #${newUser.id}, has been saved to file!`)
        })
    } else {
        res.status(406).send(`New user data must be an object with the following key value pairs: {\n  "name": <firstName> <lastName>,\n  "profilePic": <string url>,\n  "lastCalled": <string date>,\n  "timesCalled": <number>,\n  "notes": <string> | <string>, ...\n}`)
    }
})

const port = 5001
app.listen(port, () => console.log(`Express Params CFU6 listening at http://localhost:${port}`))
