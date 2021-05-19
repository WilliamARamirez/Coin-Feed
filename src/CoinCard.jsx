import React, { Component } from 'react';


class CoinCard extends Component {
  render(){
    return(
      <div id='card'>
        <div id='data'>
          {(this.props.coinImage) ?  <img src={this.props.coinImage}/> :'logo'}
          </div><div id='data'>{this.props.coinSymbol}</div><div id='data'>{this.props.coinName} </div><div id='data'>{this.props.coinPrice}</div><div id='data'>{this.props.coinMarketCap}</div><div id='data'>{this.props.Ath}</div><div id='data'>{this.props.coin200d} </div><div></div>
        
        <div id='name'>
               
          <div id='symbol'>
            
          </div>
        </div>
      </div>
   
    
   
    )

  }
  
}
export default CoinCard