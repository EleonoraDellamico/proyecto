import Video from '../img/videoHeader.mp4';

function Header() {
	return (
		<div className="header">
			<video muted autoPlay loop className="video">
				<source src={Video} />
			</video>
			<div className="header-text-animation">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Junior Frontend</p>
			</div>
		</div>
	);
}
export default Header;
