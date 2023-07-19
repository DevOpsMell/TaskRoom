const mongoose = require('mongoose')

// connection string
const connectDB = () => {
  const connectionString = process.env.MONGO_URI
  if (!connectionString) {
    console.error('connection string is undefined')
    process.exit(1)
  }
  const db = mongoose.connection
  db.on('error', (error) => {
    console.error(error)
    process.exit(2)
  })
  db.on('connected', () => {
    console.log('✅DB connected✅')
  })
  db.on('disconnected', () => {
    console.log('❌DB disconnected❌')
  })
  mongoose.set('strictQuery', true)
  return mongoose.connect(connectionString)
}

const dbLoader = async () => {
  try {
    await connectDB()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

module.exports = dbLoader