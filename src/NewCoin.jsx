import React, { Component } from 'react';




class NewCoin extends Component {
  newCoin;

  constructor(props) {
      super(props);
      this.state = {
        coinName: '',
        logo: 'Optional',
        marketCap: 0,
        coinPrice: 0,
        logoArrIndex:0,
        logoArr : [
          'https://codesmith.io/assets/codesmith-logo.ico','https://i.pinimg.com/originals/60/4f/1d/604f1d917c501b93b237d145b7d5dc3c.png','https://cdn.iconscout.com/icon/free/png-256/rocket-2632147-2180264.png','https://storage.googleapis.com/job-listing-logos/8f303230-d5e6-4e36-bc5d-3f91b8c6afd9.png','https://quickpump.dev/qp_shizzle/uploads/2021/02/flash.png','https://gblobscdn.gitbook.com/spaces%2F-LeGDgApX5LA1FGVGo-z%2Favatar.png?alt=media','https://guarda.com/assets/images/yec-wallet__yec-icon.png']
      }
       //this is the binding of the form actions
      this.onClickMarketCap = this.onClickMarketCap.bind(this);
      this.onClickPrice = this.onClickPrice.bind(this);
      this.onCoinNamechange = this.onCoinNamechange.bind(this);
      this.onLogochange = this.onLogochange.bind(this);
      this.onSaveBtn = this.onSaveBtn.bind(this);
    }

    

    onClickMarketCap() {
      this.setState({marketCap: Math.floor(Math.random() * 9999999999)})
    }
    onClickPrice() {
      this.setState({
        coinPrice: Math.floor(this.state.marketCap /(Math.random() * 9999999))
      })
    }
    onCoinNamechange(event) {
      this.setState({coinName : event.target.value})
    }
    onLogochange(event) {
      this.setState({logo : event.target.value})
    }
      
    onSaveBtn(){
      let {coinName, logo, marketCap, coinPrice, logoArr, logoArrIndex} = this.state;
      // check if name is empty
        if (coinName === '') {
          setNameError('required');
      } if (logo === 'Optional'){
        logo = logoArr[logoArrIndex]
        this.setState({logoArrIndex: logoArrIndex +1})
      } if (!marketCap) {
          setNameError('marketCap is required');
      } if (!coinPrice) {
          setNameError('coinPrice is required');
      }

        const symbol = coinName.replace(/[aeiou]/ig, '').toLowerCase().substr(0, 2)
        const body = {
          coinName, 
          logo, 
          marketCap, 
          coinPrice,
          symbol 
        }
        console.log('this is in the save DB Button functionality')
        fetch('/coin', {
          method: 'POST',
          headers: {'Content-Type': 'Application/JSON' },
          body: JSON.stringify(body)
        })
          .then(resp => resp.json())
          .then((data) => {
            console.log(data)})
          .catch(err => console.log('CreateCoin fetch in NewCoin.jsx: ERROR: ', err))
      }
    
  
  
  render(){
    return(
     <>
      <div id='addCoin'>
      <div>
        <button id='saveBtn' onClick={this.onSaveBtn}>
          Add A Coin
         </button>
        </div>
        <div>
        <label>
          Coin Name:
          </label>
        
          <input
              name="Coin Name"
              type="text"
              value={this.state.coinName}
              onChange={this.onCoinNamechange}
            />
            </div>
      <div>
          <label>
            Logo:
            </label>
            <input
              name="Logo"
              type="text"
              value={this.state.logo}
              onChange={this.onLogochange}
            />
          
          </div>
      <div>
        <button id='btn' onClick={this.onClickMarketCap}>
          Generate Market Cap
        </button>
       {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.marketCap)}
      </div>
      
      <div >
        <button id='btn' onClick={this.onClickPrice}>
          Generate Coin Price
         </button>
         {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(this.state.coinPrice)}
        </div>
      
      </div>
      </>
    )
  }

}
  

export default NewCoin