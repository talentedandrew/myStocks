import React, { Fragment } from 'react'
import styles from '../styles/sidebar.scss'
const Sidebar = ({ count = 0 }) => (
	<Fragment>
		<div className="sidebar">
			<a className="logo"> My Stocks</a>
			<div className="menu">
				<span className="active">
					Stocks
					<span className="count">{count}</span>
				</span>
			</div>
		</div>
		<style jsx>{styles}</style>
	</Fragment>
)

export default Sidebar
