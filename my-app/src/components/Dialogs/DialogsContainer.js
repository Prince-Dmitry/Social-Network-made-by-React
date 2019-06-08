import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Dialogs from './Dialogs';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const DialogsContainer = (props) => {

	let state = props.store.getState();

	let onSendMessageClick = () => {
		props.store.dispatch(sendMessageCreator());
	}

	let onNewMessageChange = (body) => {
		props.store.dispatch(updateNewMessageBodyCreator(body));
	}

	 return(<Dialogs updateNewMessageBodyCreator={onNewMessageChange} sendMessageCreator={onSendMessageClick} state={state}/>);
}

export default DialogsContainer;
