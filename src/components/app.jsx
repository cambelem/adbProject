import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div>
			
			<h1>This is a test <s>with</s> horizon and react.</h1>
			
			<div className="btn-group" role="group" aria-label="...">
				<button type="button" className="btn btn-default">Left</button>
				<button type="button" className="btn btn-default">Middle</button>
				<button type="button" className="btn btn-default">Right</button>
			</div>
			</div>
		);
	}
}

export default App;
