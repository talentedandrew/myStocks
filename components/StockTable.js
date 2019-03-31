import React, { Fragment, Component } from 'react'
import styles from '../styles/stocktable.scss'
import StocksShimmer from './StocksShimmer'
let Chart

class StockTable extends Component {
	state = {
		appIsMounted: false,
		search: ''
	}
	async componentDidMount() {
		let result = await import('react-apexcharts')
		Chart = result.default
		this.setState({
			appIsMounted: true
		})
	}
	setSearch(search) {
		this.setState({
			search
		})
	}
	render() {
		const { stocks = {}, price = {}, selectedStock = '', setStock } = this.props
		return (
			<Fragment>
				<div className="StockTable">
					<div className="menu">
						{Object.keys(stocks).length > 0 && (
							<div className="search">
								<input
									type="text"
									value={this.state.search}
									placeholder="Search by stock name"
									onChange={e => this.setSearch(e.target.value)}
								/>
								{this.state.search && (
									<a
										className="clear"
										onClick={() =>
											this.setState({
												search: ''
											})
										}
									>
										x
									</a>
								)}
							</div>
						)}
						{Object.keys(stocks).length == 0 && <StocksShimmer />}
						{Object.keys(stocks)
							.filter(
								stock =>
									stock && stock.toLowerCase().includes(this.state.search)
							)
							.map((stock, key) => {
								const status =
									price[stock] &&
									price[stock][price[stock].length - 2] > stocks[stock].price
										? 'red'
										: 'green'
								const options = {
									colors: ['#21ce99'],
									tooltip: {
										enabled: false
									},
									chart: {
										zoom: {
											enabled: false
										},
										toolbar: {
											show: false
										}
									},
									dataLabels: {
										enabled: false
									},
									stroke: {
										curve: 'straight'
									},
									fill: {
										colors: '#21ce99'
									},
									grid: {
										show: false
									},
									xaxis: {
										labels: {
											show: false
										},
										axisBorder: {
											show: false
										}
									},
									yaxis: {
										labels: {
											show: false
										},
										axisBorder: {
											show: false
										}
									}
								}
								const series = [
									{
										// name: 'Desktops',
										data: price[stock]
									}
								]
								return (
									<div
										key={key}
										className={`${selectedStock === stock ? 'active' : ''}`}
										onClick={() => setStock(stock)}
									>
										<div className="name">{stocks[stock].name}</div>
										<div className="chart">
											{price[stock] &&
												price[stock].length > 3 &&
												this.state.appIsMounted && (
													<Chart
														options={options}
														series={series}
														type="line"
														width={150}
														height={100}
													/>
												)}
											{price[stock] && price[stock].length <= 3 && (
												<div className="shimmer" />
											)}
										</div>
										<div className={`price ${status}`}>
											{Number(stocks[stock].price).toFixed(2)}
										</div>
										<div className="text-clear" />
									</div>
								)
							})}
					</div>
				</div>
				<style jsx>{styles}</style>
			</Fragment>
		)
	}
}

export default StockTable
