import headerMe from '../img/headerNoBackground.gif';

function Header() {
	return (
		<div className="header">
			<div className="header-text-animation">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Junior Frontend</p>
			</div>
			<div className="header-text">
				<p className="text">
					I use react to develop pages.
					<span>
						This project is a resume template that can be used as the project home page or resume page.
					</span>
				</p>
			</div>
			<div className="header-gif">
				<img alt="developer" src={headerMe} />
			</div>
		</div>
	);
}
export default Header;
