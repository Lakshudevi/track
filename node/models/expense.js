const mongoose = require('mongoose');

// Define Schema
const expenseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  description: { type: String, required: true },
});

// Export Model
module.exports = mongoose.model('Expense', expenseSchema);
