import React, { Fragment } from 'react'
import styles from '../styles/stocksShimmer.scss'

const StocksShimmer = ({ stars }) => (
	<Fragment>
		<div className="stockShimmer">
			<span className="name" />
			<span className="chart" />
			<span className="price" />
		</div>
		<div className="stockShimmer">
			<span className="name" />
			<span className="chart" />
			<span className="price" />
		</div>
		<div className="stockShimmer">
			<span className="name" />
			<span className="chart" />
			<span className="price" />
		</div>
		<div className="stockShimmer">
			<span className="name" />
			<span className="chart" />
			<span className="price" />
		</div>
		<div className="stockShimmer">
			<span className="name" />
			<span className="chart" />
			<span className="price" />
		</div>
		<style jsx>{styles}</style>
	</Fragment>
)

export default StocksShimmer
