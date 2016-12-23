var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req, res) => res.status(200).send('Hello there!'));

app.listen(port, () => console.log('Listening on port ', port));

app.post('/hello', (req, res, next) => {
    var userName = req.body.user_name;
    var botPayload = {
        text: 'Hello ' + userName + ', welcome to the my chanel ;) Have fun!'
    };

    return userName !== 'slackbot' ? res.status(200).json(botPayload)
        : res.status(200).end();
});