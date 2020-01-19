const React = require('react')
const ReactDOM = require('react-dom')

const Greeter = React.createClass({
	propTypes: {
		name: React.PropTypes.string.isRequired,
	},
	render() {
		return <p>Hello, {this.props.name}!</p>
	},
})
