const mongoose = require('mongoose');

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('Using cached database connection');
    return cachedDb;
  }

  console.log('Creating new database connection to:', uri.split('@')[1]?.split('?')[0]);
  
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
  });

  cachedDb = db;
  console.log('Database connected successfully');
  return db;
}

module.exports = { connectToDatabase };
