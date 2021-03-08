import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import TitleSkills from "./components/TitleSkills/TitleSkills";
import ProgressBar from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";
import Curriculum from "./components/Curriculum/Curriculum";
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
		<Route path ="/curriculum">
			<Curriculum/>
			</Route>
		</Switch> 
		<div className="container__skills">
			<div className="container__titleSkills">
				<h2 className="title">Skills</h2>
			</div>
			<TitleSkills title="Html"/>
        <ProgressBar done="80" />
			<TitleSkills title="Css"/>
		<ProgressBar done="80" />
			<TitleSkills title="JavaScript"/>
		<ProgressBar done="60" />
			<TitleSkills title="React"/>
		<ProgressBar done="60" />
		</div>
      	<Portfolio/>
		<Footer/>
		 </Router> 

		</>
	);
}

export default App;
