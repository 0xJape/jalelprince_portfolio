const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const education = await Education.find().sort({ order: 1, startDate: -1 });
    res.json(education);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create education entry
router.post('/', async (req, res) => {
  const education = new Education(req.body);
  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update education entry
router.put('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json(education);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete education entry
router.delete('/:id', async (req, res) => {
  try {
    const education = await Education.findByIdAndDelete(req.params.id);
    if (!education) {
      return res.status(404).json({ message: 'Education not found' });
    }
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
