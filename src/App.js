import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LinearProgressWithLabel from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
	return (<>
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
		<LinearProgressWithLabel/>
		<Portfolio/>
		</>
	);
}

export default App;
