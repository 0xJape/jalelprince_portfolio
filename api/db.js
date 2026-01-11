const mongoose = require('mongoose');

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('Using cached database connection');
    return cachedDb;
  }

  console.log('Creating new database connection');
  
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
  });

  cachedDb = db;
  console.log('Database connected successfully');
  return db;
}

module.exports = { connectToDatabase };
