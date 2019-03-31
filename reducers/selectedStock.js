import { SET_SELECTED_STOCK } from '../actions'

export default function(state = '', action) {
	const { type, stock } = action

	switch (type) {
		case SET_SELECTED_STOCK:
			return stock
		default:
			return state
	}
}
