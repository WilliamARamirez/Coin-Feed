import React, { Component } from 'react';
import {render} from 'react-dom'
import MainContainer from '/src/MainContainer.jsx';
import './dist/style.css';
const coinUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=200d'
class App extends Component {


  render(){
    return (
      <div>
        <h3>Add A Coin</h3>
        {/* <div id='moonLambo'>
        <img id='background_img' src='src/assets/download.jpeg'/>
        </div> */}
        <MainContainer coinUrl={coinUrl}/>
      </div>
    )
  }

}
export default App;