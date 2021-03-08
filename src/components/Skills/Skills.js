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
		<div className="container__bars">
			<div className="progress">
				<div className="progress-done" style={style}>
					Junior
				</div>
			</div>
		</div>
	);
};

export default ProgressBar;
