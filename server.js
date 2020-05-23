const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 5000;
const URI = 'mongodb://localhost:27017/ecommerce';

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('client/build'));

mongoose.connect(process.env.MONGODB_URI || URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Established Mongoose Default Connection');
});

mongoose.connection.on('error', (err) => {
  console.log(`Mongoose Default Connection Error : ${err}`);
});


app.get('/api', (req, res) => {
  res.json({ hello: 'there' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
