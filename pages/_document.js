import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import styles from '../styles/base.scss'

export default class MyDocument extends Document {
	render() {
		return (
			<html style={{ background: '#EEE', color: '#444' }}>
				<Head>
					<meta
						name="viewport"
						content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
					/>
					<meta name="theme-color" content="#673ab7" />
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/img/favicon.ico" />
					<link
						href="https://fonts.googleapis.com/css?family=Open+Sans"
						rel="stylesheet"
					/>
					<style>{`
						body, html, #__next {
						width: 100%;
						height: 100%;
						min-height: 100%;
						margin: 0;
						
						}
						*{
							box-sizing: border-box;
							margin: 0;
							padding:0;
						}
					`}</style>
					<style jsx>{styles}</style>
				</Head>
				<body>
					<Main />
					<NextScript />
					{/* <script defer src="https://code.getmdl.io/1.3.0/material.min.js" /> */}
				</body>
			</html>
		)
	}
}
