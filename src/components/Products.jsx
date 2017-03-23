import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Products extends Component {
  	render() {
    return (
    	<div>	
	        <div className="product-list">
	      		products here
	      	 </div>
	      	 <div><Link to="/">home</Link></div>
	    </div>
    );
  }
}
