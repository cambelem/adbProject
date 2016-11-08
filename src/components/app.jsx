import React, { Component } from 'react';

class App extends Component {
	render() {
		var i = "Hello";
		if (i === "Hello"){
		i = 1;
		} else {
		i = 0;
		}
		return (
			<div>
			<div className="row">
			<div className="col-md-6">
			<h1>This is a test <s>with</s> horizon and react.</h1>
			</div>
			<div className="col-md-6">
			<div className="btn-group" role="group" aria-label="...">
				<button type="button" className="btn btn-default">Left</button>
				<button type="button" className="btn btn-default">Middle</button>
				<button type="button" className="btn btn-default">Right</button>
			</div>
			<h2> Testing webpack watch.. {i}</h2>
			</div>
			</div>
			</div>
		);
	}
}

export default App;
