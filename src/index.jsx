import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {getProducts} from './utils/routes.jsx';

//Redux 
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reducers from 'Reducers';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';	

//components 
import App from 'App';
import Login from './components/Login';
import Wrapper from './components/Wrapper';
import Products from './components/Products';

// Create the store 
const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
);

//Call Async Call here to load redux store with data from database 
console.log("this is products ", getProducts());
 

// Sync History and Store 
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render((
	 <Provider store={store}>
		<Router history={history}>
			<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
				<Route path="/login" pageId="Login" component={Login}/>
				<Route path="/products" pageId="Products" component={Products}/>
			</Route>
		</Router>
	</Provider>), document.getElementById('root'));
	
