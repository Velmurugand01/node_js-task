const express = require('express');
const app = express();
const { validateUserPayload } = require('./Validate');

app.post('/api/users', validateUserPayload, (req, res) => {
  res.json({ message: 'User created successfully!' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => {
  console.log('Server is listening on port:', 3000);
});
