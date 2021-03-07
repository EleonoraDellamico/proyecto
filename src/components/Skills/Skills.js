import React from 'react';
import './style.css';

const ProgressBar = ({ done }) => {
	const [ style, setStyle ] = React.useState({});
	setTimeout(() => {
		const newStyle = {
			opacity: 1,
			width: `${done}%`
		};
		setStyle(newStyle);
	}, 1000);
	return (
		<div className="container__skills">
			<div className="container__bars">
				<div className="container__titleSkills">
					<h2 className="title">Skills</h2>
				</div>
				<div className="container__text">
					<h2 name="text" className="text">
						{done.text}
					</h2>
				</div>
				<div className="progress">
					<div className="progress-done" style={style}>
						Junior
					</div>
				</div>
				{/* <div className="container__text">
		    <h2 className="text">Css</h2>
	          </div>
		           <div className="containerStyles">
			     <div className=" fillerStyles" id="css_bar">
				<span className="labelStyles">Junior</span>
			</div>
		</div>
		<div className="container__text">
		    <h2 className="text">Javascript</h2>
	          </div>
		           <div className="containerStyles">
			     <div className=" fillerStyles" id="js_bar">
				<span className="labelStyles">Junior</span>
			</div>
		</div>
		<div className="container__text">
		    <h2 className="text">React</h2>
	          </div>
		           <div className="containerStyles">
			     <div className=" fillerStyles" id="react_bar">
				<span className="labelStyles">Junior</span>
			</div>
		</div> */}
			</div>
		</div>
	);
};

export default ProgressBar;
