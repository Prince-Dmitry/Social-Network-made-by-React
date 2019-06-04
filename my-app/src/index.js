import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';

/*
let posts = [
  {id: 1, message: 'Hi, how are you?', likesCount: 11},
  {id: 2, message: 'Die, die, die my darlling', likesCount: 1},
  {id: 3, message: 'I wanna see you in hell'},
  {id: 4, message: 'Just shot up your pretty mount'},
  {id: 5, message: 'Kill your mother, fuck your dog'}
]

let dialogsData = [
	{id: 1, name: 'Dimon'},
	{id: 2, name: 'Andrey'},
	{id: 3, name: 'Sveta'},
	{id: 4, name: 'Sasha'},
	{id: 5, name: 'Pokemon'},
	{id: 6, name: 'Bulbazavre'}
]

let messageData = [
	{id: 1, message: 'Hi'},
	{id: 2, message: 'Go down'},
	{id: 3, message: 'Hail Hitler'}
]

*/

ReactDOM.render(<App AppState={state}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
