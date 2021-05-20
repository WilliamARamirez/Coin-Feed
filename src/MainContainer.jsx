import React, { Component } from 'react';
import CoinCard from './CoinCard.jsx';

class MainContainer extends Component {
 

  constructor() {
    super();
    
    this.state = {
      coinData:{}
    };
  }

  componentDidMount() {
    fetch(this.props.coinUrl)
      .then((response) => response.json())
      .then((data) => {
        
        console.log('data' , data)
        this.setState({coinData :data})
        console.log('new coinData: ', coinData)
      })
      .catch((err)=> console.log('fetch error', err))
    }
render(){
  const coinArr = []
  coinArr.push(<CoinCard coinId='Id' coinName='Name' coinSymbol='Symbol'coinImage={false} coinPrice='Price' coinMarketCap='MarketCap' coinAth='All Time High'
       coin200d='200 Day Roi'/>

  )
  for(let i = 0; i< this.state.coinData.length; i++){
    coinArr.push(<CoinCard coinId={this.state.coinData[i].id} coinName={this.state.coinData[i].name} coinSymbol={this.state.coinData[i].symbol} coinImage={this.state.coinData[i].image} coinPrice={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.coinData[i].current_price)} coinMarketCap={
      new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.coinData[i].market_cap)
      } coinAth={
        new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.coinData[i].ath)
        } coin200d={
          new Intl.NumberFormat('en-US', { style: 'percent'}).format(this.state.coinData[i].price_change_percentage_200d_in_currency)
          }/>

    )
  }
  return(
    <div>
      <h1>This the main container component!</h1>
      {coinArr}    
    </div>
  )
}

}

export default MainContainer