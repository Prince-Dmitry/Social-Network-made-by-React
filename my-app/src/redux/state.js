import React from 'react';
//import { rerenderEntireTree } from '../render';
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

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
			sidebar: [],
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

			this._state = profileReducer (this._state, action);
			this._state = dialogsReducer (this._state, action);
			this._state.sidebar = sidebarReducer (this._state, action);
			this._callSubscriber(this._state);
		} 
}

export default store;
window.store = store;