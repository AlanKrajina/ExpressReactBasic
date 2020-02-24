// backend API

const express = require('express');

const app = express();


// route and json data
app.get('/api/boxers', (req, res) => {
  const boxers = [
    {id: 1, firstName: 'Anthony', lastName: 'Joshua'},
    {id: 2, firstName: 'Tyson', lastName: 'Fury'},
    {id: 3, firstName: 'Deontay', lastName: 'Wilder'},
  ];

  res.json(boxers);
});


// port configuration
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);