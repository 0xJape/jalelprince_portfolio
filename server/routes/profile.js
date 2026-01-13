const express = require('express');
const router = express.Router();
const { supabase } = require('../config/supabase');

// Get profile
router.get('/', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .limit(1)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        return res.status(404).json({ message: 'Profile not found' });
      }
      throw error;
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create or update profile
router.post('/', async (req, res) => {
  try {
    // Check if profile exists
    const { data: existing } = await supabase
      .from('profiles')
      .select('id')
      .limit(1)
      .single();
    
    if (existing) {
      // Update existing profile
      const { data, error } = await supabase
        .from('profiles')
        .update(req.body)
        .eq('id', existing.id)
        .select()
        .single();
      
      if (error) throw error;
      res.json(data);
    } else {
      // Create new profile
      const { data, error } = await supabase
        .from('profiles')
        .insert([req.body])
        .select()
        .single();
      
      if (error) throw error;
      res.json(data);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
