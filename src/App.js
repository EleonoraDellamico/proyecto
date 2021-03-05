import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import ProgressBar from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
// import Curriculum from "./components/Curriculum";
import {  BrowserRouter as Router, Switch, Route} from 'react-router-dom';









function App() {

	return (
	<>
		{/* <Router>	 */}
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
	{/* 	<Switch>
		<Route path ="/curriculum" component={Curriculum}/>
		</Switch> */}
        <ProgressBar />
      	<Portfolio/>
		<Footer/>
		{/* </Router> */}

		</>
	);
}

export default App;
