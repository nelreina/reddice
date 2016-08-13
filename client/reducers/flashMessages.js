import shortid from 'shortid';

export default (state = [], action = {}) => {
	switch (action.type) {
		case 'ADD_FLASH_MESSAGE':
			const { type, text } = action.message;
			return [...state, { type, text, id: shortid.generate() } ] ;
		default:
			return state;
	}
};
