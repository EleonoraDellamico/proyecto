import './App.css';
import Home from './pages/home/home';
import Curriculum from './components/Curriculum/Curriculum';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={Curriculum} path="/curriculum" exact />
			</Switch>
		</Router>
	);
}

export default App;
