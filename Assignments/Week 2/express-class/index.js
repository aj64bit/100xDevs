const express = require("express");
const app = express();

app.get('/', (req, res) => {
    // res.send('hello');
    const n = Number(req.query.n);
    const m = Number(req.query.m);
    const ms = n + m;
    res.send("Helloww " + ms.toString());
});

app.listen(3005)


// route
// http://localhost:3005/?n=2&m=23342