const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/api/hello', (req, res) => {
  const response = { name: "Khoaa" };
  res.send(response);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});