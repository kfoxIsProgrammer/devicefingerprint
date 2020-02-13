const express = require('express')
const app = express()
const port = 3000
const { body,validationResult } = require('express-validator');
const { sanitizeBody } = require('express-validator');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');

app.get('/', (req, res) =>  res.sendFile(path.resolve('../home.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))



  app.post('/submit-form',function(request,response){
   console.log(request.body) 
   response.send("hi")



const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Foxer123',
  database: 'myusers'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

})
  