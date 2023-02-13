const express = require('express');
const app = express();
const port = 3001;

const router = require('./routes/index');

// app.get('/', (req, res) => {
//   res.send('Hello world');
// });

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});