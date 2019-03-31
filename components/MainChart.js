import React, { Fragment, Component } from 'react'
import styles from '../styles/mainchart.scss'
let Chart

class MainChart extends Component {
	state = {
		appIsMounted: false
	}
	async componentDidMount() {
		let result = await import('react-apexcharts')
		Chart = result.default
		this.setState({
			appIsMounted: true
		})
	}
	render() {
		const { stocks = {}, price = {}, selectedStock } = this.props
		const options = {
			colors: ['#21ce99'],
			tooltip: {
				enabled: true,
				style: {
					fontSize: '12px',
					fontFamily: "'Open Sans', sans-serif"
				},
				x: {
					show: true,
					formatter: function(val, opts) {
						return `$${Number(val).toFixed(2)}`
					}
				},
				y: {
					title: {
						formatter: seriesName => seriesName
					}
				},
				marker: {
					show: true
				}
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
				enabled: true,
				formatter: function(val, opts) {
					return `$${Number(val).toFixed(2)}`
				}
			},
			stroke: {
				curve: 'straight'
			},
			grid: {
				show: true
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
				name: selectedStock.toUpperCase(),
				data: price[selectedStock]
			}
		]
		return (
			<Fragment>
				<div className="stockchart">
					{stocks[selectedStock] && (
						<h1 className="price">{`$${Number(
							stocks[selectedStock].price
						).toFixed(2)}`}</h1>
					)}
					<div className="chart">
						{price[selectedStock] && (
							<Chart
								options={options}
								series={series}
								type="line"
								width={'100%'}
								height={300}
							/>
						)}
					</div>
					<div className="about">
						<h1>{selectedStock && selectedStock.toUpperCase()}</h1>
						{selectedStock && <p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu
							enim mauris. Integer et viverra tellus. Curabitur eros arcu,
							ornare ac vestibulum vitae, congue et felis. Nullam aliquam
							accumsan eros. Nullam interdum vel justo sed maximus. Aliquam
							dolor sapien, ornare a ex non, aliquam faucibus arcu. Phasellus
							porta viverra accumsan.
						</p>}
					</div>
				</div>
				<style jsx>{styles}</style>
			</Fragment>
		)
	}
}

export default MainChart
