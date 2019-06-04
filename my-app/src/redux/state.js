import React from 'react';
import { rerenderEntireTree } from '../render';

let state = {
	posts: [
		{id: 1, message: 'Hi, how are you?', likesCount: 11},
  		{id: 2, message: 'Die, die, die my darlling', likesCount: 1},
  		{id: 3, message: 'I wanna see you in hell'},
  		{id: 4, message: 'Just shot up your pretty mount'},
  		{id: 5, message: 'Kill your mother, fuck your dog'}
	],
	dialogsData: [
		{id: 1, name: 'Dimon'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Pokemon'},
		{id: 6, name: 'Bulbazavre'}
	],
	messageData: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Go down'},
		{id: 3, message: 'Hail Hitler'}
	]
}

export let addPost = (postMessage) => {
	let newPost = {
		id: 5,
		message: postMessage,
		likesCount: 0
	};

	state.posts.push(newPost);
	rerenderEntireTree(state);
}

export default state;