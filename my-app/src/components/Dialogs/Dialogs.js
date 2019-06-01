import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = () => {
	 return(<div className={classes.dialogs}>
	  			<div className="dialogItems">
		        	<div className={classes.dialog + ' ' + classes.active}>
		        		Dimon
		        	</div>
		           	<div className={classes.dialog}>
		        		Andrey
		        	</div>
		           	<div className={classes.dialog}>
		        		Sveta
		        	</div>
		          	<div className={classes.dialog}>
		        		Sasha
		        	</div>
		           	<div className={classes.dialog}>
		        		Pokemon
		        	</div>
		        </div>
		        <div className={classes.messages}>
		        	<div className={classes.message}>Hi</div>
		        	<div className={classes.message}>Go home</div>
		        	<div className={classes.message}>Be cool</div>
		        </div>
        </div>)
}

export default Dialogs;
