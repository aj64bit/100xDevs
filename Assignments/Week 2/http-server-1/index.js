const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


app.get('/listen', (req, res) => {
    res.send("Hello");
})

app.get('/go', (req, res) => {
    res.send("You are lost")
})

app.get('/went', (req, res) => {
    res.status(609).send("get lost in mountains");
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/authhead', function (req, res) {
    console.log(req.body);
    res.send("Recived");
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})