import React, { Component } from 'react';
import './style.css';


class Loader extends Component {


  render(){
    return(
      <div className="loader-container">
        <div className="dot1"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
      </div>
    )
  }

}

export default Loader;

