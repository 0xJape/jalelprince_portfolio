const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');

// Get all education entries
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('education')
      .select('*')
      .order('order', { ascending: true })
      .order('start_date', { ascending: false });
    
    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create education entry
router.post('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('education')
      .insert([req.body])
      .select()
      .single();
    
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update education entry
router.put('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('education')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Education not found' });
      }
      throw error;
    }
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete education entry
router.delete('/:id', async (req, res) => {
  try {
    const { error } = await supabase
      .from('education')
      .delete()
      .eq('id', req.params.id);
    
    if (error) throw error;
    res.json({ message: 'Education deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
