import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.end("hello");
});

app.listen(3333, function(req, res) {
    console.log("server started");
});


