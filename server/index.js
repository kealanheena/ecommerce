const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json);

mongoose.connect('mongodb://127.0.0.1.27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('connected to mongoDB');
});

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
