import { ADD_STOCKS, SET_SELECTED_STOCK } from './'

export function addStocks(stocks) {
	return {
		type: ADD_STOCKS,
		stocks
	}
}

export function setSelectedStock(stock) {
	return {
		type: SET_SELECTED_STOCK,
		stock
	}
}

