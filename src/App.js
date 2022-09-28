import './App.css';
import Navbar from './components/navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<header className="App-header flex flex-col">
				<p className="text-6xl border-l-fu">Welcome</p>
				<div>Hello</div>
			</header>
		</div>
	);
}

export default App;
