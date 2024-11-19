import mongoose from 'mongoose';
import slugify from 'slugify';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Product name is required']
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Product description is required']
  },
  price: {
    type: Number,
    min: 0,
    required: [true, 'Product price is required']
  },
  image: {
    type: String,
    required: [true, 'Product image is required']
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Product category is required']
  },
  slug: {
    type: String,
    unique: true // Ensure slug is unique
  },
  createdAt: {
    type: Date,
    unique: true,
    default: Date.now
  }
});

// Pre-save middleware to generate slug from name
ProductSchema.pre('save', async function (next) {
  if (!this.slug && this.name) {
    let slug = slugify(this.name, { lower: true, strict: true });

    // Check for existing slugs in the database
    const existingProduct = await mongoose.models.Product.findOne({ slug });
    if (existingProduct) {
      slug = `${slug}-2`;
    }

    this.slug = slug;
  }
  next();
});

export default mongoose.model('Product', ProductSchema);
