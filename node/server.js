const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const regRoutes = require('./routes/regRoutes');

const cors = require('cors'); // Import CORS

const app = express();
const PORT = 8080;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all requests


// MongoDB Connection
mongoose
  .connect('mongodb+srv://lakshmidevi:SLDLakshmi29@cluster0.datir.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Routes
app.use('/api', expenseRoutes);
app.use('/api', regRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
