const express = require('express');
const router = express.Router();
const Product = require('../models/product')

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Get one product
router.get('/:id', getProduct, (req, res) => {
  res.send(res.product)
})

// Creating a product
router.post('/', async (req, res) => {
  try {
    Product.create({
      name: req.body.name,
      price: req.body.price,
      img: req.body.img
    }, function(err, product) {
      if(err) return handleError(err);
    });
    res.status(201).json({ message: "Saved product"} )
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

// Updating a product
router.patch('/:id',  getProduct, async (req, res) => {
  if(req.body.name != null) {
    res.product.name = req.body.name
  }
  if(req.body.price != null) {
    res.product.price = req.body.price
  }
  if(req.body.img != null) {
    res.product.img = req.body.img
  }
  try {
    await Product.replaceOne(
      { _id: req.params.id },
      res.product,
      function(err, result) {
        if (err) {
          res.send(err);
        } else {
          res.send(result);
        }
      }
    )
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Deleting a product
router.delete('/:id',  getProduct, async (req, res) => {
  try {
    await Product.findOneAndDelete( { _id: req.params.id } )
    res.json( { message: "Deleted Product" })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

// Middleware
async function getProduct(req, res, next) {
  let product
  try {
    product = await Product.findById(req.params.id)
    if(product == null) {
      return res.status(404).json({ message: 'Cannot find product' })
    }
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }

  res.product = product
  next()
}

module.exports = router
 