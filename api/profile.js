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
    await connectToDatabase(process.env.MONGODB_URI);

    if (req.method === 'GET') {
      const profile = await Profile.findOne();
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
    console.error('Profile API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
