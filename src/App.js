import Color from "./components/Color";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Light from './components/Light';
import EcoClass from "./components/EcoClass";

function App() {
	return (
		<div className="App">
			<Counter />
            <Color />
            <Toggle />
		    <Light />
			<EcoClass />
		</div>
	);
}

export default App;
