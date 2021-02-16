import Video from '../img/production ID_3963239.mp4';

function Header() {
	return (
		<div className="header">
			<video src={Video} muted autoPlay loop className="video" />
			<div className="header-text-animation">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Junior Frontend</p>
			</div>
		</div>
	);
}
export default Header;
