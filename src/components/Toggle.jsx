import React from "react";

class Toggle extends React.Component {
	state = {
		loggedIn: false,
	};

	render() {
		return (
			<div className="toggle">
				<h1>Toggle Switch</h1>
				<div
					className={`toggleWrapper ${this.state.loggedIn ? "active" : ""}`}
					onClick={() => {
						this.setState({ loggedIn: !this.state.loggedIn });
					}}
				>
					<div className="toggleBtn"></div>
				</div>
				<p>Current state: {this.state.loggedIn ? "On" : "Off"}</p>
			</div>
		);
	}
}

export default Toggle;
