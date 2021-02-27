import './App.css';
import NavBar from './components/NavBar';
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import ProgressBar from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";






function App() {

	return (<>
		<NavBar />
		<Header/>
		<AboutMe/>
		<Experience/>
        <ProgressBar />
      	<Portfolio/>
		<Footer/>
		</>
	);
}

export default App;
