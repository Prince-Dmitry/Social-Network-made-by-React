const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
		posts: [
			{id: 1, message: 'Hi, how are you?', likesCount: 11},
		  	{id: 2, message: 'Die, die, die my darlling', likesCount: 1},
		  	{id: 3, message: 'I wanna see you in hell'},
		  	{id: 4, message: 'Just shot up your pretty mount'},
		  	{id: 5, message: 'Kill your mother, fuck your dog'}
		],
		newPostText: 'it-ne-pizdi'
};

const profileReducer = (state = initialState, action) => {
	if (action.type === ADD_POST) {
		let newPost = {
			id: 5,
			message: state.newPostText,
			likesCount: 0
		};
		state.posts.push(newPost);
		state.newPostText = '';
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			state.newPostText = action.newText;
		}
	return state;
} 

export default profileReducer;
export let addPostActionCreator = () => ({type: ADD_POST});
export let updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});