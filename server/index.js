require('dotenv').config()
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_URL || mongodb://127.0.0.1.27017/ecommerce, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', (err) => console.log(err))
connection.once('open', () => console.log('connected to mongoDB'));

app.use(express.json())

const productsRouter = require('./routes/products')
app.use('/products', productsRouter)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

