import { combineReducers } from 'redux'

import stocks from './stocks'
import price from './price'
import selectedStock from './selectedStock'

export default combineReducers({ stocks, price, selectedStock })
