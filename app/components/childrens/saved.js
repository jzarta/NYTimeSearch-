// React variable
var React = require('react');

// History component
var Saved = React.createClass({

	// Here we render the function
	render: function(){
		console.log("Im the start of Saved.");
		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Search History</h3>
				</div>
				<div className="panel-body text-center">

					{/* Here we use a map function to loop through an array in JSX*/}
					{this.props.saved.map(function(search, i)
						{
							return <p key={i}>{search.title} - {search.date}</p> 
						}
					)}
				</div>
			</div>
		)
		console.log("Last Saved.");
	}
});

module.exports = Saved;