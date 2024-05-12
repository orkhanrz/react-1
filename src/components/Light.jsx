import { Component } from "react";

class Light extends Component {
	state = {
		turnedOn: false,
	};

	render() {
		return (
			<div className="light">
				<h1>Light</h1>
				<div
					className={`lamp ${this.state.turnedOn ? "active" : ""}`}
					onClick={() => this.setState({ turnedOn: !this.state.turnedOn })}
				>
					<div className="bulbTop"></div>
					<div className="bulbBottom">
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
					<div className="bulbHand"></div>
				</div>
			</div>
		);
	}
}

export default Light;
