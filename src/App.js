import Color from "./components/Color";
import Counter from "./components/Counter";
import Toggle from "./components/Toggle";
import Light from './components/Light';
import Eco from "./components/Eco";

function App() {
	return (
		<div className="App">
			<Counter />
            <Color />
            <Toggle />
		    <Light />
			<Eco />
		</div>
	);
}

export default App;
