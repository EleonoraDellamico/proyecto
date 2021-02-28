import Video from '../img/yellow.mp4';
import Btn from '../img/btn.png';
//import Photo from '../img/abstract.jpg';

function Header() {
	return (
		<div className="header">
			<video src={Video} muted autoPlay loop className="video" />
			<div className="header-text-animation">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Junior Frontend</p>
			</div>
			<div className="container__btn">
				<button>
					<a href="#about">
						<img src={Btn} alt="button" />
					</a>
				</button>
			</div>
		</div>
	);
}
export default Header;
