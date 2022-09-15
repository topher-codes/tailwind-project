import logo from './logo.svg';
import './App.css';
import Example from './components/example';

function App() {
	return (
		<div className="App">
			<header className="App-header flex flex-col">
				<p className="text-6xl border-l-fu">Welcome</p>
				<div>
					<Example />
				</div>
			</header>
		</div>
	);
}

export default App;
