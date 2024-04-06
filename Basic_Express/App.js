
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); 


const app = express();

app.use(bodyParser.json());


app.get('/get', (req, res) => {
  res.send('GET request received');
});


app.post('/post', (req, res) => {
  const data = req.body;
  res.send(`POST request received with data: ${data}`);
});


app.listen(7000, () => {
  console.log('Server is listening on port:',7000);
});
