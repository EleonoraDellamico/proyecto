import './App.css';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Experience from './components/Experience/Experience';
import TitleSkills from './components/TitleSkills/TitleSkills';
import ProgressBar from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<div>
			<NavBar />
			<Header />
			<AboutMe />
			<Experience />
			<div className="container__skills">
				<div className="container__titleSkills">
					<h2 className="title">Skills</h2>
				</div>
				<TitleSkills title="Html" />
				<ProgressBar done="80" />
				<TitleSkills title="Css" />
				<ProgressBar done="80" />
				<TitleSkills title="JavaScript" />
				<ProgressBar done="60" />
				<TitleSkills title="React" />
				<ProgressBar done="60" />
			</div>
			<div className="container__titlePortfolio">
				<a name="portfolio">
					<h2 className="title">Portfolio</h2>
				</a>
			</div>
			<Portfolio />
			<Footer />
		</div>
	);
}

export default App;
