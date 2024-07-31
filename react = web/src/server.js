const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');
const User = require('./models/User');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('YOUR_MONGODB_URL', { useNewUrlParser: true, useUnifiedTopology: true });

// Routes
app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// User authentication routes
app.post('/login', async (req, res) => {
  // Handle login logic
});

app.post('/register', async (req, res) => {
  // Handle registration logic
});

app.listen(5000, () => console.log('Server running on port 5000'));
