var React = require('react');

// var About = React.createClass ({
// 	render: function () {
// 		return (
// 			<h3>About Component</h3>
// 		);
// 	}
// });

//this components does not depend on the state, stateless

var About = (props) => {
	return (
		<h3>About Component</h3>
	)
};

module.exports = About;