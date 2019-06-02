import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
	let path = "/dialogs/" + props.id;

	return (<div className={classes.dialog + ' ' + classes.active}>
		        <NavLink to={path}>{props.name}</NavLink>
		    </div>
		)
}

const Message = (props) => {
	return (<div className={classes.dialog}>
			{props.message}</div>)
}

const Dialogs = (props) => {
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

	let dialogsElements = dialogsData.map( d => <DialogItem name={d.name} id={d.id}/> );
	let messagesElements = messageData.map( m => <Message message={m.message} id={m.id}/> );

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
