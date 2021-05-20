const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  coinName: {type: String, required: true},
  marketCap: {type: Number, required: true},
  coinPrice: {type: Number, required: true},
  logo: {type: String, required: true}
})

const Coin = mongoose.model('Coin', studentSchema);
module.exports = Coin;