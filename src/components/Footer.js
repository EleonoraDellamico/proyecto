import GitHub from '../img/githubWhite.png';
import Link from '../img/linkedin2.png';
import Twitter from '../img/twitterpng.png';
import Email from '../img/Email.png';
import Heart from '../img/heart.png';
import Brain from '../img/brain.png';
import Btn2 from '../img/flechaFooter.png';

function Portfolio() {
	return (
		<footer>
			<div className="container__footer">
				<div className="container__btn" id="btn__up">
					<button>
						<a href="#about">
							<img src={Btn2} alt="button" />
						</a>
					</button>
				</div>
				<div className="container__title">
					<a name="contact">
						{' '}
						<h2 className="title" id="footer__title">
							Contact me
						</h2>
					</a>
				</div>
				<div className="container_link__footer">
					<a title="GitHub" href="https://github.com/EleonoraDellamico" target="_blank">
						{' '}
						<img className="link__footer" src={GitHub} alt="gitHub" />{' '}
					</a>
					<a title="Linkedin" href="https://www.linkedin.com/in/eleonora-dell-amico/" target="_blank">
						<img className="link__footer" src={Link} alt="gitHub" />
					</a>
					<a title="Twitter" href="https://twitter.com/eli_ucora" target="_blank">
						<img className="link__footer" src={Twitter} alt="gitHub" />
					</a>
					<a title="mail" href="mailto:eleonoradellamico4@gmail.com" target="_blank">
						<img className="link__footer" src={Email} alt="gitHub" />
					</a>
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
