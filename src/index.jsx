import React from 'react';
import ReactDOM from 'react-dom';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';

//Redux 
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import reducers from 'Reducers'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// Sync History and Store 
const history = syncHistoryWithStore(browserHistory, store)

//components 
import App from 'App';
import Login from './components/Login';
import Wrapper from './components/Wrapper';


const store = createStore(
  combineReducers({
    ...reducers,
    routing: routerReducer
  })
)

ReactDOM.render((
	 <Provider store={store}>
		<Router history={history}>
			<Route path="/" pageId="wrapper" component={Wrapper}>
				<IndexRoute pageId="index" component={App}/>
				<Route path="/login" pageId="Login" component={Login}/>
			</Route>
		</Router>
	</Provider>), document.getElementById('root'));
	
