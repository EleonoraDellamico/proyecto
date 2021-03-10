import { Button } from '@material-ui/core';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Eli from '../../img/Eli.jpeg';
import './style.css';
//import Icon from '@material-ui/core/Icon';

function AboutMe() {
	return (<>
			<div className="container__title">
				<a name="about">
					<h2 className="title">About Me</h2>
				</a>
				</div>
				<div className="container__personalInfo">
					<div className="personalInfo__text">
				   <p className="text">
					I'm Eleonora becoming a Frontend developer after an amazing experience working in a start-up and
					digging deeper into Web sites and UX. In addition, I'm a sociologist holding a master degree in
					Human Resources. I think study human behavior it's extremely important in this job for this reason I
					did different courses about User Research CX Research and UX Testing in Platzi. My studies and
					experience working closely with people from different parts of the world make me an empathetic
					person. I believe in the energy generated from teamwork. I like to describe myself as an observant
					and committed professional.
				</p>
				</div>
				<div className="container__photo">
					<img alt="girl" src={Eli} className="photo__aboutMe" />
				</div>
			</div>
			<div className="aboutMe__contact">
				<h2 className="title">My contact</h2>
				<p className="text">City: Madrid</p>
				<p className="text">Phone: +34 602726345</p>
				<a target="_blank" className="email" href="mailto:eleonoradellamico4@gmail.com">
					eleonoradellamico4@gmail.com
				</a>
			</div>
			<div className="btn__aboutMe">
				<Button variant="contained" color="default" startIcon={<CloudDownloadIcon />}>
					<a target="_blank"
						href="https://drive.google.com/file/d/15tRruG2eUCaDzYXY-p8MOAR1eBTM21lF/view?usp=sharing"
						download="Eleonora__DellAmico__CV"
					>
						Download CV
					</a>
				</Button>
			</div>
		</>
	);
}
export default AboutMe;
