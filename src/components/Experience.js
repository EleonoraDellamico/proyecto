import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { Link, Route, Switch } from 'react-router-dom';

function Experience(props) {
	return (
		<div className="container__experience">
			<div className="container__experienceTitle">
				<h2 className="title">Experience</h2>
			</div>
			<div className="container__experienceDetails">
				<h2 className="title">Student Frontend Developer</h2>
				<h5 className="title__detailsCompany">Company:Adalab</h5>
				<h5 className="title__detailsCompany">sept 2020 – dic 2020</h5>
				<h5 className="title__detailsCompany">Madrid</h5>
			</div>
			<div className="container__experienceInfo">
				<p className="text">
					Adalab it is a training program that provides the knowledge and tools for front-end web development:
				</p>
				<ul className="experience__list">
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>
						Layout design: HTML5, CSS3, Flexbox, CSS Grid, responsive design , SASS,animation y design for
						components.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Development frameworks web: Bootstrap.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Knowledge: JavaScrip.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>ES6 y creation of SPAs con React.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Version control: Git, GitHub.{' '}
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Development experience using Agile y SCRUM.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Developer tools: Atom, Gulp,Terminal.
					</li>
					<li className="text">
						<ArrowRightIcon fontSize="small" color="secondary" margin-right="9px">
							add_circle
						</ArrowRightIcon>Communication tools teamwork: Slack, Trello, GitHub.
					</li>
				</ul>
			</div>
			<div className="btn__experience">
				<Link to={`/curriculum/`}>
					<Button variant="outlined" color="secondary">
						More information
					</Button>
				</Link>
			</div>
		</div>
	);
}
export default Experience;
