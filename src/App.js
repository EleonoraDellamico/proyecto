import './App.css';
import Home from './pages/home/home';
// import MoreProjects from './components/MoreProjects/moreProjects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Switch>
				<Route component={Home} path="/" exact />
				{/* <Route component={MoreProjects} path="/MoreProjects" exact /> */}
			</Switch>
		</Router>
	);
}

export default App;
