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
			{props.message}
			</div>)
}

const Dialogs = () => {
	 return(<div className={classes.dialogs}>
	  			<div className="dialogItems">
		        	<DialogItem name="Dimon" id="1"/>
		        	<DialogItem name="Andrey" id="2"/>
		        	<DialogItem name="Sveta" id="3"/>
		        	<DialogItem name="Sasha" id="4"/>
		        	<DialogItem name="Pokemon" id="5"/>
		        	<DialogItem name="Bulbazavre" id="6"/>
		        </div>
		        <div className={classes.messages}>
		        	<Message message="Hi"/>
		        	<Message message="Go down"/>
		        	<Message message="Hail Hitler!"/>
		        </div>
        </div>)
}

export default Dialogs;
