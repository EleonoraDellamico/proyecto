import GitHub from '../img/githubWhite.png';
import Link from '../img/linkedin2.png';
import Twitter from '../img/twitterpng.png';
import Email from '../img/Email.png';
import Heart from '../img/heart.png';
import Brain from '../img/brain.png';

function Portfolio() {
	return (
		<footer>
			<div className="container__footer">
				<div className="container__title">
					<h2 className="title" id="footer__title">
						Contact me
					</h2>
				</div>
				<div className="container_link__footer">
					<img className="link__footer" src={GitHub} alt="gitHub" />
					<img className="link__footer" src={Link} alt="gitHub" />
					<img className="link__footer" src={Twitter} alt="gitHub" />
					<img className="link__footer" src={Email} alt="gitHub" />
				</div>
				<div className="container__small">
					<small className="small">Made with </small>
					<img className="link__small" alt="heart" src={Heart} />
					<small className="small">and</small>
					<img className="link__small" alt="brain" src={Brain} />
					<small className="small">By Eli</small>
				</div>
			</div>
		</footer>
	);
}
export default Portfolio;
