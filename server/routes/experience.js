const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');

// Get all experience entries
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .select('*')
      .order('order', { ascending: true })
      .order('start_date', { ascending: false });
    
    if (error) throw error;
    res.json(data || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create experience entry
router.post('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .insert([req.body])
      .select()
      .single();
    
    if (error) throw error;
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update experience entry
router.put('/:id', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('experiences')
      .update(req.body)
      .eq('id', req.params.id)
      .select()
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Experience not found' });
      }
      throw error;
    }
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete experience entry
router.delete('/:id', async (req, res) => {
  try {
    const { error } = await supabase
      .from('experiences')
      .delete()
      .eq('id', req.params.id);
    
    if (error) throw error;
    res.json({ message: 'Experience deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
