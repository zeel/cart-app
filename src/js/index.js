import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import reducer from './reducers/index';
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

ReactDOM.render( < Provider store = {
		store
	} >
	< App / >
	< /Provider>,
	document.getElementById('app'));