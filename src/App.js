import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ProgressBar from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Curriculum from "./components/Curriculum";
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';









function App() {

	return (
	<>
		<Router>	
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
		<Switch>
		<Route path ="/curriculum" component={Curriculum}/>
		</Switch>
        <ProgressBar />
      	<Portfolio/>
		<Footer/>
		</Router>

		</>
	);
}

export default App;
