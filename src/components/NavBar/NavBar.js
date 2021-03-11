/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';

function navBar() {
	return (
		<div className="container-navBar">
			<nav className="navBar-menu">
				<ul className="navBar__list">
					<li>
						<a id="#navBar-link" className="smoothscroll selected" href="#">
							Home
						</a>
					</li>
					<li>
						<a id="#navBar-link" className="smoothscroll" href="#about">
							About Me
						</a>
					</li>
					<li>
						<a id="#navBar-link" className="smoothscroll" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<a id="#navBar-link" className="smoothscroll" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navBar;
