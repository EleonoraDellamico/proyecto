import Photo from '../img/Netflix_logo.svg';
import PhotoOne from '../img/card.jpg';
import PhotoTwo from '../img/gameCard.jpg';
import GitHub from '../img/github.png';
import Link from '../img/link.png';
import Button from '@material-ui/core/Button';
//CRERA JSON PARA REUTILAZR CODIGO
function Portfolio() {
	return (
		<div className="container__portfolio">
			<div className="container__titlePortfolio">
				<a name="portfolio">
					<h2 className="title">Portfolio</h2>
				</a>
			</div>
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/Cinema/" target="_blank">
					<img className="portfolioImg" src={Photo} alt="Cinema" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text">Design&layout Html Css Netflix</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Link} alt="gitHub" />
				</div>
			</div>
			<div className="container__imgPortfolio">
				<a href="https://martreyz.github.io/project-promo-k-module-3-team-4/#/" taget="_blank">
					<img className="portfolioImg" src={PhotoOne} alt="Cards" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text">React project: Visting cards</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Link} alt="gitHub" />
				</div>
			</div>
			<div className="container__imgPortfolio">
				<a href="https://eleonoradellamico.github.io/LearnJavaScrip_MemoryGame/" target="_blank">
					{' '}
					<img className="portfolioImg" src={PhotoTwo} alt="Laptop" />
				</a>
				<div className="info__imgPortfolio">
					<p className="text">Play memory card with JS!</p>
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Link} alt="gitHub" />
				</div>
			</div>
			<div className="btn__experience">
				<Button variant="outlined" color="secondary">
					More projects
				</Button>
			</div>
		</div>
	);
}
export default Portfolio;
