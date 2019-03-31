import { ADD_PRICE } from '../actions'

export default function(state = [], action) {
	const { type, price } = action

	switch (type) {
		case ADD_PRICE:
			let stateCopy = { ...state }
			Object.keys(price).forEach(p => {
				if (p in stateCopy) {
					stateCopy[p].push(price[p])
				} else {
					stateCopy[p] = [price[p]]
				}

				if (stateCopy[p].length > 10) stateCopy[p] = stateCopy[p].slice(-10)
			})

			return { ...stateCopy }
		default:
			return state
	}
}
