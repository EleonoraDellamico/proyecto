import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ProgressBar from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Curriculum from "./components/Curriculum";
import { Link, Route, Switch } from 'react-router-dom';









function App() {

	return (
	<>
			
		<NavBar />
		<Header/>
		<AboutMe/>
		<Switch>
		<Experience/>
			<Route exact path="/" component={Curriculum}/>
		</Switch>
        <ProgressBar />
      	<Portfolio/>
		<Footer/>

		</>
	);
}

export default App;
