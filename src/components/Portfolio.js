import Photo from '../img/ciak.jpg';
import PhotoOne from '../img/card.jpg';
import PhotoTwo from '../img/laptop.jpg';
import GitHub from '../img/github.png';
import Link from '../img/link.png';
import Button from '@material-ui/core/Button';

function Portfolio() {
	return (
		<div className="container__portfolio">
			<div className="container__titlePortfolio">
				<h2 className="title">Portfolio</h2>
			</div>
			<div className="container__imgPortfolio">
				<img className="portfolioImg" src={Photo} alt="Cinema" />
				<div className="info__imgPortfolio">
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Link} alt="gitHub" />
				</div>
			</div>
			<div className="container__imgPortfolio">
				<img className="portfolioImg" src={PhotoOne} alt="Cards" />
				<div className="info__imgPortfolio">
					<img className="link__portfolio" src={GitHub} alt="gitHub" />
					<img className="link__portfolio" src={Link} alt="gitHub" />
				</div>
			</div>
			<div className="container__imgPortfolio">
				<img className="portfolioImg" src={PhotoTwo} alt="Laptop" />
				<div className="info__imgPortfolio">
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
