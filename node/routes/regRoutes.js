const express = require('express');
const router = express.Router();
const Reg = require('../models/reg');

// POST: Add a new reg
router.post('/regs', async (req, res) => {
  try {
    const { name, phonenumber, password } = req.body;
    const newReg = new Reg({ name, phonenumber, password });
    await newReg.save();
    res.status(201).json({ message: 'Reg created successfully', newReg });
  } catch (error) {
    res.status(400).json({ message: 'Error creating reg', error });
  }
});

// GET: Fetch all regs
router.get('/regs', async (req, res) => {
  try {
    const regs = await Reg.find();
    res.status(200).json(regs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching regs', error });
  }
});

// GET: Fetch a single reg by ID
router.get('/regs/:id', async (req, res) => {
  try {
    const reg = await Reg.findById(req.params.id);
    if (!reg) return res.status(404).json({ message: 'Reg not found' });
    res.status(200).json(reg);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reg', error });
  }
});

// DELETE: Delete an reg
router.delete('/regs/:id', async (req, res) => {
  try {
    const deletedReg = await Reg.findByIdAndDelete(req.params.id);
    if (!deletedReg) return res.status(404).json({ message: 'Reg not found' });
    res.status(200).json({ message: 'Reg deleted', deletedReg });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting reg', error });
  }
});

module.exports = router;
