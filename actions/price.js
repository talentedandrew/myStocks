import { ADD_PRICE } from './'

export function addPrice(price) {
	return {
		type: ADD_PRICE,
		price
	}
}
