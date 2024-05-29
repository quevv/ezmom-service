const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/index');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/account', apiRoutes.AccountRoutes);
app.use('/api/auth', apiRoutes.AuthRoutes);
app.use('/api/brand', apiRoutes.BrandRoutes);
app.use('/api/product', apiRoutes.ProductRoutes);
app.use('/api/baby', apiRoutes.BabyRoutes);



module.exports = app;