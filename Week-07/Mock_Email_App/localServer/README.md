# USAF-sdi-react-checkpoint

# API Routes

GET `/emails`:
```
    {
      "sender": "katie@galvanize.com",
      "recipient": "jane@galvanize.com" ,
      "subject": "Standup meeting",
      "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
        proud to say that they were perfectly normal, thank you very much.",
      "date": "2020-08-23T18:25:43.511Z",
      "id": 1
    }
```

GET `/emails/:id`:

e.g. `/emails/1`:

```
    {
      "sender": "katie@galvanize.com",
      "recipient": "jane@galvanize.com" ,
      "subject": "Standup meeting",
      "message": "Mr. and Mrs. Dursley, of number four, Privet Drive, were
        proud to say that they were perfectly normal, thank you very much.",
      "date": "2020-08-23T18:25:43.511Z",
      "id": 1
    }
```

GET `/search` with URI query:

e.g. `/search?query=meeting`:

```
    {
      "sender": "jean-marc@galvanize.com", "recipient": "jane@galvanize.com" ,
      "subject": "Retro meeting",
      "message": "They were the last people you’d expect to be involved
        in anything strange or mysterious, because they just didn’t hold with such nonsense.",
      "date": "2020-04-23T18:25:43.511Z",
      "id": 2},
```

POST `/send`:

```
  {
    "sender": String,
    "recipient": String,
    "subject": String,
    "message": String,
    "date": Date,
    "id": Number
  }