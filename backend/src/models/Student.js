const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  address: {
    city: String,
    uf: String,
    region: String,
    street: String,
  },
  phone: Number,
  image: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
})

module.exports = mongoose.model("Student", StudentSchema);
