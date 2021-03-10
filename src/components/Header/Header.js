import './style.css';
//import Btn from '../../img/btn.png';

function Header() {
	return (
		<div className="header">
			<div className="css-typing">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Frontend Junior</p>
				<p className="text-animated">Coding is Rock & Roll</p>
			</div>
			<div className="container__btn">
				<button>
					{/* <a href="#about"> */}
					<img
						src="https://img.icons8.com/android/24/ffffff/double-down.png"
						alt="button"
						className="btnHeader"
					/>
					{/* </a> */}
				</button>
			</div>
		</div>
	);
}
export default Header;
