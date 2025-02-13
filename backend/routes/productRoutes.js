import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import Product from '../models/Product.js';

const router = express.Router();

// Create a rate limiter for product routes
const productLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again after 15 minutes.'
});

// GET all products
router.get('/', productLimiter, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: error.message });
  }
});

// GET product by slug
router.get('/:slug', productLimiter, async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product by slug:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST a new product with input validation and sanitization
router.post(
  '/',
  productLimiter,
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Product name is required'),
    body('description')
      .trim()
      .notEmpty()
      .withMessage('Product description is required'),
    body('price')
      .isNumeric()
      .withMessage('Product price must be a number'),
    body('image')
      .trim()
      .notEmpty()
      .withMessage('Product image is required'),
    body('category')
      .trim()
      .notEmpty()
      .withMessage('Product category is required'),
  ],
  async (req, res) => {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, description, price, image, category } = req.body;

    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
    });

    try {
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(400).json({ message: error.message });
    }
  }
);

// PATCH update product by ID
router.patch('/:id', productLimiter, async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,           // Return the updated document
      runValidators: true, // Apply schema validations
    });

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(400).json({ message: error.message });
  }
});

// DELETE product by ID
router.delete('/:id', productLimiter, async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
