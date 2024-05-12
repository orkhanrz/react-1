import React from "react";

class Counter extends React.Component {
	state = {
		count: 0,
	};

	updateCount(action) {
		if (action === "inc") {
			this.setState({ count: this.state.count + 1 });
		}

		if (action === "dec" && this.state.count > 0) {
			this.setState({ count: this.state.count - 1 });
		}
	}

	render() {
		return (
			<div className="counter">
				<h1>Counter</h1>
				<div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
					<button onClick={() => this.updateCount("dec")}>-</button>
					<p>{this.state.count}</p>
					<button onClick={() => this.updateCount("inc")}>+</button>
				</div>
			</div>
		);
	}
}

export default Counter;
