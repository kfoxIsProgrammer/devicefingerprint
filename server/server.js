'user strict';
const express = require('express') //Main api used
const app = express()// app object
const port = 3000// Port number used
const mysql = require('mysql');


const { body,validationResult } = require('express-validator'); //WIll be used to validate queries
const { sanitizeBody } = require('express-validator');// Will be used to fix queries

var bodyParser = require('body-parser');// Used to get objects json objects from clients
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');// Get relative path to this file

app.get('/', (req, res) =>  res.sendFile(path.resolve('../home.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))







//Script ran when form is sent from home.html
  app.post('/submit-form',function(request,response){

[
  	 body('exampleInputEmail1')
    .isEmail()
    .normalizeEmail(),
  body('text')
    .not().isEmpty()
    .trim()
    .escape(),
  body('notifyOnReply').toBoolean()
] ;
  console.log(request.body.exampleInputEmail1) 
   response.send("hi")


// Mysql database connection, will refactor this to hide credentials later

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'myusers'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});

connection.query('SELECT * from users where email = ?',[request.body.exampleInputEmail1], function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0])
	console.log(request.body)
})








//var clean_user = sanitizeBody.sanitize(request.body.exampleInputEmail1);

//console.log(sanitizeBody.sanitize(request.body.exampleInputEmail1));
//Need to get info from database about users credentials and compare for logging in
//Then need to compare device fingerprint for validation

})
  