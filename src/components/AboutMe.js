import { Button } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Eli from '../img/Eli.jpeg';
//import Icon from '@material-ui/core/Icon';

function AboutMe() {
	return (
		<div className="container__personalInfo">
			<div className="personalInfo">
				<h2 className="title">About Me</h2>
				<p className="text">
					Me llamo Eleonora y soy Junior Frontend. Fue durante mi experiencia trabajando en una startup en la
					cual me acerqué por primera vez al mundo tecnológico y al diseño web. Me llamó mucho la atención,
					ver cómo desde una línea de código se reflejaba algo bonito en la pantalla, por ese motivo decidí
					lanzarme en este nuevo mundo.
				</p>
				<div className="container__photo">
					<img alt="girl" src={Eli} className="photo__aboutMe" />
				</div>
			</div>
			<div className="aboutMe__contact">
				<h2 className="title">My contact</h2>
				<p className="text">City: Madrid</p>
				<p className="text">Phone: +34 602726345</p>
				<p className="text">email: eleonoradellamico4@gmail.com</p>
			</div>
			<Button variant="contained" color="default" startIcon={<CloudDownloadIcon />}>
				<a
					href="https://drive.google.com/file/d/15tRruG2eUCaDzYXY-p8MOAR1eBTM21lF/view?usp=sharing"
					download="Eleonora__DellAmico__CV"
				>
					Download CV
				</a>
			</Button>
		</div>
	);
}
export default AboutMe;
