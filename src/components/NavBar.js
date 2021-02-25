function navBar() {
	return (
		<div className="container-navBar">
			<nav className="navBar-menu">
				<ul className="navBar__list">
					<li>
						<a className="smoothscroll selected" href="#home">
							Home
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#about">
							About
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#Home">
							Resume
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#Home">
							Works
						</a>
					</li>
					<li>
						<a className="smoothscroll" href="#Home">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default navBar;
