const express = require('express');
const mongooose = require('mongoose');


const app = express();

app.get('/', (req, res) => {
  res.send('it works');
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});