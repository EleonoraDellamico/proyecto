import './style.css';

const TitleSkills = (props) => {
	return (
		<div className="container__text">
			<h2 name="text" className="text">
				{props.title}
			</h2>
		</div>
	);
};
export default TitleSkills;
