import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

	let state = props.store.getState();

	let dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
	let messagesElements = state.messageData.map( m => <Message message={m.message} id={m.id}/> );
	let newMessageBody = state.newMessageBody;

	let onSendMessageClick = () => {
		props.sendMessageCreator();
	}

	let onNewMessageChange = (event) => {
		let body = event.target.value;
		props.updateNewMessageBodyCreator(body);
	}

	 return(<div className={classes.dialogs}>
	  			<div className={classes.dialogsItems}>
	  				{ dialogsElements }
	  			</div>
		        <div className={classes.messages}>
					<div>{ messagesElements }</div>
					<div>
						<div><textarea   value={newMessageBody} 
								placeholder="Enter your message"
								onChange={onNewMessageChange}>
							</textarea>
						</div>
						<div><button onClick={onSendMessageClick}>Send</button></div>
					</div>
		        </div>
        </div>)
}

export default Dialogs;
