import { Button } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
//import Icon from '@material-ui/core/Icon';

function AboutMe() {
	return (
		<div className="container__personalInfo">
			<div className="personalInfo">
				<h2 className="title">About Me</h2>
				<p className="text">
					Sociologist holding a Master Degree in Human Resources, after an amazing experience working in a
					start-up and digging deeper into Web sites and UX, I decided to take a great step towards the IT
					World and become a Front End Developer. 💻⌨ My studies and experience working closely with people
					from different parts of the world make me an empathetic person. I love the energy generated from the
					teamwork. I like to describe myself as an observant and committed professional. My motto is “'If
					we're growing, we're always going to be out of our comfort zone.' (John Maxwell).
				</p>
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
