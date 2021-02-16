import Video from '../img/production ID_3963239.mp4';
import VideoLooper from 'react-video-looper';

function Header() {
	return (
		<div className="header">
			<video muted autoPlay loop className="video">
				<VideoLooper source src={Video} />
			</video>
			<div className="header-text-animation">
				<p className="text-animated">I'm Eleonora</p>
				<p className="text-animated">Junior Frontend</p>
			</div>
		</div>
	);
}
export default Header;
