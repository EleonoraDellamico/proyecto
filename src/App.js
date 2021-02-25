import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import LinearProgressWithLabel from "./components/Skills"

function App() {
	return (<>
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
		<LinearProgressWithLabel/>
		</>
	);
}

export default App;
