import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import reducer from './reducers/index';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';
import {
	createStore
} from 'redux';
import {
	Provider
} from 'react-redux';

const persistedState = localStorage.getItem('storyData') ? JSON.parse(localStorage.getItem('storyData')) : {},
	store = createStore(reducer, persistedState);

store.subscribe(() => {
	localStorage.setItem('storyData', JSON.stringify(store.getState()))
});

render( < Provider store = {
		store
	} >
	<Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
	< /Provider>,
	document.getElementById('app'));