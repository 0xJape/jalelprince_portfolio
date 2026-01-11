const { connectToDatabase } = require('./db');
const Profile = require('../server/models/Profile');

module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    
    if (!mongoUri) {
      console.error('MONGODB_URI not set');
      return res.status(500).json({ error: 'Database configuration missing' });
    }

    await connectToDatabase(mongoUri);

    if (req.method === 'GET') {
      const profile = await Profile.findOne();
      console.log('Profile fetched:', profile ? 'found' : 'not found');
      res.status(200).json(profile);
    } else if (req.method === 'POST') {
      const profile = await Profile.findOneAndUpdate({}, req.body, { 
        new: true, 
        upsert: true 
      });
      res.status(200).json(profile);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Profile API error:', error.message, error.stack);
    res.status(500).json({ error: 'Internal server error', details: error.message });
  }
};
