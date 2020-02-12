const express = require('express')
const app = express()
const port = 3000
var path = require('path');

app.get('/', (req, res) =>  res.sendFile(path.resolve('../home.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))