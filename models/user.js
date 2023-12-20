const mongoose = require('mongoose');

const Score = mongoose.Schema({
  value: Number,
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('User', {
    username: {
        type: String,
        required: true,
        min: 3,
        max: 20,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
      },
      password: {
        type: String,
        required: true
      },
      age:{
        type: Number,
        required: true,
      },
      scores: [Score],
      personality: {
        type: String,
        required: false
      }
});


module.exports = User