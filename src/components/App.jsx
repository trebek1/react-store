import React, { Component } from 'react';
import {Link} from 'react-router';

export default class App extends Component {

  	render() {
    return (	
        <div>
      		Something Goes here<br/>
      		<div><Link to="/login">Login</Link></div>
      		<div><Link to="/products">products</Link></div>
      	 </div>
    );
  }
}

