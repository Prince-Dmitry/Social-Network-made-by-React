import React from 'react';
//import { rerenderEntireTree } from '../render';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
		_state: {
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
			],
			newMessageBody: '',
			newPostText: 'it-ne-pizdi'
		},

		getState() {
			return this._state;
		},

		_callSubscriber() {
			console.log('State is changed');
		},

		subscribe (observer) {
			this._callSubscriber = observer;
		},


		dispatch (action) {
			if (action.type === ADD_POST) {
				let newPost = {
					id: 5,
					message: this._state.newPostText,
					likesCount: 0
				};
				this._state.posts.push(newPost);
				this._state.newPostText = '';
				this._callSubscriber(this._state);
			} else if (action.type === UPDATE_NEW_POST_TEXT) {
				this._state.newPostText = action.newText;
				this._callSubscriber(this._state);
			} else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
				this._state.newMessageBody = action.body;
				this._callSubscriber(this._state);
			} else if (action.type === SEND_MESSAGE) {
				let body = this._state.newMessageBody;
				this._state.newMessageBody = "";
				this._state.messageData.push({id: 6, message: body});
				this._callSubscriber(this._state);
			}
		} 
}

export let addPostActionCreator = () => ({type: ADD_POST});

export let updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export let sendMessageCreator = () => ({type: SEND_MESSAGE});

export let updateNewMessageBodyCreator = (bod) => ({type: UPDATE_NEW_MESSAGE_BODY, body: bod});

export default store;
window.store = store;