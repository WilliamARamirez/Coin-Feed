import React, { Component } from 'react';
import {render} from 'react-dom'

import MasterContainer from '/src/MasterContainer.jsx';
import './dist/style.css';

class App extends Component {


  render(){
    return (
      <div>
        <h3>Add A Coin</h3>
        {/* <div id='moonLambo'>
        <img id='background_img' src='src/assets/download.jpeg'/>
        </div> */}
        <MasterContainer />
      </div>
    )
  }

}
export default App;