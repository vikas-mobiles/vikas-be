import express from 'express';
import Order from '../models/Order.js';

const router = express.Router();

router.post('/', (req, res) => { // Ensure this matches the endpoint you're calling
  const { productId, name, phoneNumber, address, quantity } = req.body;

  // Validate input data
  if (!productId || !name || !phoneNumber || !address || !quantity) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  // Create a new order
  const newOrder = new Order({
    productId,
    quantity,
    name,
    phoneNumber,
    address,
  });

  // Save order to the database
  newOrder.save()
    .then(() => {
      res.status(201).json({ message: 'Order placed successfully!' });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Failed to place order. Please try again.' });
    });
});

export default router;
