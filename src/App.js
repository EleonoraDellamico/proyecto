import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LinearProgressWithLabel from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
	return (<>
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
		<LinearProgressWithLabel/>
		<Portfolio/>
		<Footer/>
		</>
	);
}

export default App;
