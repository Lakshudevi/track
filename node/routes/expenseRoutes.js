const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// POST: Add a new expense
router.post('/expenses', async (req, res) => {
  try {
    const { amount, date, description } = req.body;
    const newExpense = new Expense({ amount, date, description });
    await newExpense.save();
    res.status(201).json({ message: 'Expense created successfully', newExpense });
  } catch (error) {
    res.status(400).json({ message: 'Error creating expense', error });
  }
});

// GET: Fetch all expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});

// GET: Fetch a single expense by ID
router.get('/expenses/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json(expense);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expense', error });
  }
});

// DELETE: Delete an expense
router.delete('/expenses/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndDelete(req.params.id);
    if (!deletedExpense) return res.status(404).json({ message: 'Expense not found' });
    res.status(200).json({ message: 'Expense deleted', deletedExpense });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting expense', error });
  }
});

module.exports = router;
