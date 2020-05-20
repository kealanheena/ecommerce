const express = require('express');
const router = express.Router();

// Get all products
router.get('/', (req, res) => {
  res.send("This is the get all route")
})

// Get one product
router.get('/:id', (req, res) => {

})

// Creating a product
router.post('/', (req, res) => {

})

// Updating a product
router.patch('/:id', (req, res) => {

})

// Deleting a product
router.delete('/:id', (req, res) => {

})

module.exports = router
 