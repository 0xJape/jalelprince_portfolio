const { connectToDatabase } = require('./db');
const Experience = require('../server/models/Experience');

module.exports = async (req, res) => {
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
      const experience = await Experience.find().sort({ order: 1, startDate: -1 });
      res.status(200).json(experience);
    } else if (req.method === 'POST') {
      const exp = await Experience.create(req.body);
      res.status(201).json(exp);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Experience API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
