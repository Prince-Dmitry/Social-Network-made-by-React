import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { addPost } from './redux/redux-store';
import { subscribe } from './redux/redux-store';


//addPost('Nasvai team');

export let rerenderEntireTree = (state) => {
	ReactDOM.render(<App AppState={ state } dispatch={store.dispatch.bind(store)} store={store}/>, document.getElementById('root'));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

rerenderEntireTree(store.getState());

store.subscribe(() => {
	let state = store.getState();
	rerenderEntireTree(state);
});

serviceWorker.unregister();
