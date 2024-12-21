const mongoose = require('mongoose');

// Define Schema
const regSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phonenumber: { type: String, required:true },
  password: { type: String, required: true },
});

// Export Model
module.exports = mongoose.model('Reg', regSchema);
