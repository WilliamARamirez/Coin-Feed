import React, { Component } from 'react';
import MainContainer from './MainContainer.jsx';
import NewCoin from './NewCoin.jsx'

const coinUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=200d'
class MasterContainer extends Component {


  

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>

        <NewCoin />
        <MainContainer coinUrl={coinUrl}/>
        
      </div>
    );
  }
}
export default MasterContainer