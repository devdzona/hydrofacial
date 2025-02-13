import mongoose from 'mongoose';
import slugify from 'slugify';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Product name is required'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Product description is required'],
  },
  price: {
    type: Number,
    min: 0,
    required: [true, 'Product price is required'],
  },
  image: {
    type: String,
    required: [true, 'Product image is required'],
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Product category is required'],
  },
  slug: {
    type: String,
    unique: true, // Ensure slug is unique
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Pre-save middleware to generate/update slug from name if modified or not set
ProductSchema.pre('save', async function (next) {
  if (this.isModified('name') || !this.slug) {
    let slug = slugify(this.name, { lower: true, strict: true });

    // Check for existing products with the same slug
    const existingProduct = await mongoose.models.Product.findOne({ slug });
    if (existingProduct) {
      slug = `${slug}-2`;
    }

    this.slug = slug;
  }
  next();
});

export default mongoose.model('Product', ProductSchema);
