import { ADD_STOCKS } from '../actions'

export default function(state = [], action) {
	const { type, stocks } = action

	switch (type) {
		case ADD_STOCKS:
			return { ...state, ...stocks }
		default:
			return state
	}
}
