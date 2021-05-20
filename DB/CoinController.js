const Coin = require('./CoinModels.js');

const coinController = {}


coinController.createCoin(req, res){
Coin.create({coinName, marketCap, coinPrice, logo })
  .then((data)=>{
    res.send(data)
  })
  .catch((err)=>{res.status(400).send('coinController.createCoin error')})
}

coinController.getCoin(req, res){
  const name = req.body.name
  console.log('coinController.getCoin name: ',name)
  Coin.find({coinName : name})
    .then((data)=>{
      if(!data.length){
        console.log('Did not find the coin you were looking for!')
      }
      if(data.length){
        console.log('Mongo found the coin you were looking for')
    }}
    )
    .catch((err)=>{res.status(400).send('coinController.getCoin error')})
  }


  coinController.deleteCoin(req, res){
    const name = req.body.name
    console.log('coinController.deleteCoin name: ',name)
    Coin.Student.deleteOne({coinName :name })
    .then((data)=> res.status(200).send("Coin deleted successfully!"))
      .catch((err)=>{res.status(400).send('coinController.deleteCoin error')})
    }

    module.exports = CoinController;