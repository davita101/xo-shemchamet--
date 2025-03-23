import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const res = mongoose.connect(process.env.MONGODB_URI)
    console.log('Mongo is connected')
  } catch (error) {
    console.log('Mongo not connected')
  }
}
