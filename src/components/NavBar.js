function navBar() {
	return (
		<div className="container-navBar">
			<nav className="navBar-menu">
				<ul className="navBar__list">
					<li>
						<a className="smoothscroll selected" href="#">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							About Me
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#portfolio">
							Portfolio
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navBar;
