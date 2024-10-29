// routes/contactRoutes.js
import express from 'express';

const router = express.Router();

// GET /api/contacts - Retrieve all contacts (Add this route)
router.get('/', async (req, res) => {
  try {
    // Fetch contacts from the database if implemented (e.g., Contact.find())
    res.json({ message: 'Retrieved contacts successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving contacts' });
  }
});

// POST /api/contacts - Create a new contact entry
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please provide name, email, and message' });
  }

  try {
    // Save the contact info to the database or handle it as needed.
    res.status(201).json({ message: 'Message received successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
