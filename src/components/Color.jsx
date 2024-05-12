import React from "react";

class Color extends React.Component {
	state = {
		bgColor: "white",
	};

	changeColor(color) {
		this.setState({ bgColor: color });
	}

	render() {
		return (
			<div className="color">
				<h1>Color Picker</h1>
				<div
					className="colorDiv"
					style={{ width: "100px", height: "100px", backgroundColor: this.state.bgColor, marginBottom: '8px' }}
				></div>
				<button onClick={() => this.changeColor("red")}>Red</button>
				<button onClick={() => this.changeColor("green")}>Green</button>
				<button onClick={() => this.changeColor("blue")}>Blue</button>
			</div>
		);
	}
}

export default Color;
