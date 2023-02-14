const express = require('express');
const app = express();
const port = 3001;
const morgan = require('morgan');
const path = require("path");

const allRouter = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('[:date] :status :method :url :response-time ms   // :remote-addr'));
app.use(allRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});