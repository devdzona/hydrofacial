import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String, // URL for the image
  category: String,
});

export default mongoose.model('Product', ProductSchema);