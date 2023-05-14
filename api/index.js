const express = require('express');
const res = require('express/lib/response');
const app = express();


app.get('/api', (req, res) => {
  const response = { status: "Successfully deploying API" };
  res.send(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;