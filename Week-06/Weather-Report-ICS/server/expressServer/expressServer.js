// DEPENDENCIES
const fs = require('fs')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = `5001`

app.use(bodyParser.json())

app.post('/', function (req, res) {
    var body = req.body.report
    var name = req.body.name

    fs.writeFile(`./data/${name}.ics`, body, function (error) {
        if (error) {
            console.log('There was an error while writing the .ics file.')
            console.log(error)
        }
        res.status(200).json({
            message: "The .ics file has been successfully written"
        })
    })
})

app.get('/echo', function (req, res) {
    res.status(200).json({
        message: "The Weather Grabber express server is running properly!"
    })
})

app.get('/download/:name', function (req, res) {
    res.download(`./data/${req.params.name}.ics`, function (error) {
        if (error) console.log(error)
    })
})

// HTTP SERVER
app.listen(port, () => console.log(`> running express server on localhost:${port}`))