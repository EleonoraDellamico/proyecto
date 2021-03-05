import './style.css';
import Btn from '../../img/btn.png';

function Header() {
	return (
		<div className="header">
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
