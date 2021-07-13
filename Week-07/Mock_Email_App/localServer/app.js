const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const emails = JSON.parse(fs.readFileSync('emails.json'));

app.get('/emails', (req, res) => res.json(emails));
app.get('/emails/:id', (req, res) => {
  res.send(
    emails.find((element) => element.id === parseInt(req.params.id, 10))
  );
});

app.get('/search', (req, res) => {
  const query = decodeURIComponent(req.query.query);
  const filteredEmails = emails.filter((email) =>
    email.subject.includes(query)
  );

  res.send(filteredEmails);
});

app.post('/send', function (req, res) {
  let result;
  const emailSender = req.body;
  if (
    emailSender.sender &&
    emailSender.recipient &&
    emailSender.subject &&
    emailSender.message
  ) {
    emails.push({
      sender: emailSender.sender,
      recipient: emailSender.recipient,
      subject: emailSender.subject,
      message: emailSender.message,
      date: new Date(),
      id: emails[emails.length - 1].id + 1,
    });

    result = {
      status: 'success',
      message: 'The message was successfully sent',
    };
  } else {
    result = {
      status: 'failed',
      message: 'The message was not sent',
    };
    res.status(400);
  }

  res.json(result);
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
