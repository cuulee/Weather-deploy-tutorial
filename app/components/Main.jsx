var React = require('react');
var Nav = require('Nav');


// var Main = React.createClass ({
// 	render: function () {
// 		return (
// 			<div>
// 				<Nav/>
// 				<h2>Main Component</h2>
// 				{this.props.children}
// 			</div>
// 		);
// 	}
// });

//this components does not depend on the state, stateless

var Main = (props) => {
	return (
		<div>
				<Nav/>
				<h2>Main Component</h2>
				{props.children}
		</div>
	)
};

module.exports = Main;