const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('🚀 Node App deployed using AWS CI/CD Pipeline');
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});
