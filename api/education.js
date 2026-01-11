const { connectToDatabase } = require('./db');
const Education = require('../server/models/Education');

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
      const education = await Education.find().sort({ order: 1, startDate: -1 });
      res.status(200).json(education);
    } else if (req.method === 'POST') {
      const edu = await Education.create(req.body);
      res.status(201).json(edu);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Education API error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
