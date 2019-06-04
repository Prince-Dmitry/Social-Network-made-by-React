import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

	let dialogsElements = props.dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
	let messagesElements = props.messageData.map( m => <Message message={m.message} id={m.id}/> );

	 return(<div className={classes.dialogs}>
	  			<div className="dialogItems">
	  				<div className={classes.dialogsItems}>
	  					{ dialogsElements }
	  				</div>
		        </div>
		        <div className={classes.messages}>
					{ messagesElements }
		        </div>
        </div>)
}

export default Dialogs;
