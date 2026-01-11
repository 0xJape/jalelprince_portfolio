const mongoose = require('mongoose');

let cachedDb = null;

async function connectToDatabase(uri) {
  if (cachedDb && mongoose.connection.readyState === 1) {
    console.log('Using cached database connection');
    return cachedDb;
  }

  console.log('Creating new database connection');
  
  // Disable buffering to get immediate errors instead of timeouts
  mongoose.set('bufferCommands', false);
  
  const db = await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 30000,
    bufferCommands: false,
    maxPoolSize: 1, // Limit connection pool for serverless
  });

  cachedDb = db;
  console.log('Database connected successfully');
  return db;
}

module.exports = { connectToDatabase };
