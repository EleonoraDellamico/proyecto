import Photo from '../../img/Netflix.jpg';
import PhotoOne from '../../img/Card.png';
import PhotoTwo from '../../img/gameCard.jpg';
import Music from '../../img/Music.png';
import Quote from '../../img/Quote.png';
import RickMorty from '../../img/Rick_Morty.png';
import GitHub from '../../img/github.png';
import Enlace from '../../img/link.png';
/* import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'; */
import './style.css';


//CRERA JSON PARA REUTILAZR CODIGO
function Portfolio() {

	return (<>
		<div className="container__general">
			<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/Cinema/" target="_blank">
					<img className="portfolioImg" src={Photo} alt="Netflix App" />
				</a>
				</div>
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">Design&layout Html Css Netflix</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
			</div>
			<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://martreyz.github.io/project-promo-k-module-3-team-4/#/" target="_blank">
					<img className="portfolioImg" src={PhotoOne} alt="Visiting Cards" />
				</a>
					</div>
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">React project: Visting cards</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
		</div>
		<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/LearnJavaScrip_MemoryGame/" target="_blank">
					{' '}
					<img className="portfolioImg" src={PhotoTwo} alt="Cards" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">Play memory card with JS!</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
			</div>
			</div>
			<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/Spotify__React/" target="_blank">
					<img className="portfolioImg" src={Music} alt="SpotifyApp" />
				</a> 
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">Spotify with React!</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
			</div>
			</div>
			<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/randomQuote_REACT/" target="_blank">
					{' '}
					<img className="portfolioImg" src={Quote} alt="Quote" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">Random Quote with React</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
			</div>
			</div>
			<div className="container__portfolio">
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/Rick_Morty_React/#/" target="_blank">
				
					<img className="portfolioImg" src={RickMorty} alt="Laptop" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text textPortfolio">Rick and Morty with React!</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Enlace} alt="gitHub" />
				</div>
			</div>
			</div>
			</div>
			{/* <div className="btn__experience">
				<Link to="/moreProjects">
					<Button variant="outlined" color="secondary">
						More Projects
					</Button>
				</Link>
			</div> */}
			
</>
	);
}
export default Portfolio;
