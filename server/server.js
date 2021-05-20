const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const PORT = 3000;
const coinController = require('../DB/CoinController.js')



mongoose.connect('mongodb+srv://soloProject:Vn0yHEdg76WUBkp9@cluster0.ghlyl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const coinRouter = express.Router();
app.use('/coin', coinRouter);

coinRouter.post('/coin', coinController.createCoin)
coinRouter.get('/:coinName', coinController.getCoin);
coinRouter.delete('/:coinName', coinController.deleteCoin);


app.use(express.static('dist'));




app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))