const express = require('express');
const app = express();
const fs = require('fs');

app.get('/vel', function (req, res) {
    fs.readFile('text', 'utf8', (err, data) => {
        if (err) {
            throw err;
        }
        
      else {
  
            const modifiedData = data.toUpperCase();
            res.send(modifiedData);
        }
    });
});


fs.writeFile('text', 'hey Buddy', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
