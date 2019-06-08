const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
	newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

	if (action.type === UPDATE_NEW_MESSAGE_BODY) {
		state.newMessageBody = action.body;
	} else if (action.type === SEND_MESSAGE) {
		let body = state.newMessageBody;
		state.newMessageBody = "";
		state.messageData.push({id: 6, message: body});
	}

	return state;
}

export default dialogsReducer;
export let sendMessageCreator = () => ({type: SEND_MESSAGE});
export let updateNewMessageBodyCreator = (bod) => ({type: UPDATE_NEW_MESSAGE_BODY, body: bod});