import React, { Component } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import DevTools from './DevTools'

export default class RootDev extends Component {
	render() {
		console.log(this.props)
		const { store } = this.props
		return (
			<Provider store={store}>
				<div>
					<App />
					<DevTools />
				</div>
			</Provider>
		)
	}
}
