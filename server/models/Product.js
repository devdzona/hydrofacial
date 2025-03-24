import mongoose from 'mongoose';
import slugify from 'slugify';
import sanitizeHtml from 'sanitize-html';

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
  images: {
    type: [String],
    required: [true, 'Product images are required'],
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: 'At least one image is required',
    },
  },
  category: {
    type: String,
    trim: true,
    required: [true, 'Product category is required'],
  },
  slug: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Virtual to construct full URLs for each image
ProductSchema.virtual('imageUrls').get(function () {
  return this.images.map(img => `http://localhost:5000/${img}`);
});

// Pre-save middleware to generate/update slug and sanitize inputs
ProductSchema.pre('save', async function (next) {
  if (this.isModified('name') || !this.slug) {
    let generatedSlug = slugify(this.name, { lower: true, strict: true });

    // Check if the generated slug already exists
    const existingProduct = await mongoose.models.Product.findOne({ slug: generatedSlug });
    if (existingProduct) {
      generatedSlug = `${generatedSlug}-2`;
    }
    this.slug = generatedSlug;
  }

  // Sanitize fields to remove unwanted HTML or scripts
  this.name = sanitizeHtml(this.name, { allowedTags: [] });
  this.description = sanitizeHtml(this.description, { allowedTags: [] });
  this.category = sanitizeHtml(this.category, { allowedTags: [] });

  next();
});

export default mongoose.model('Product', ProductSchema);
