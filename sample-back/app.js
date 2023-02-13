const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');

const router = require('./routes/index');

app.use(morgan('[:date] :status :method :url :response-time ms   // :remote-addr'));
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});