import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function LinearProgressWithLabel(props) {
	return (
		<div className="container__bars">
			<div className="container__titleSkills">
				<h2 className="title">Skills</h2>
			</div>
			<div className="container__barsHtlm">
				<h2 className="text">Html</h2>
				<Box display="flex" alignItems="center">
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" {...props} />
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="yellow">{`${Math.round(props.value)}%`}</Typography>
					</Box>
				</Box>
			</div>
			<div className="container__barsCss">
				<h2 className="text">Css</h2>
				<Box display="flex" alignItems="center">
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" {...props} />
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
					</Box>
				</Box>
			</div>
			<div className="container__barsJs">
				<h2 className="text">javascript</h2>
				<Box display="flex" alignItems="center">
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" {...props} />
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
					</Box>
				</Box>
			</div>
			<div className="container__barsReact">
				<h2 className="text">React</h2>
				<Box display="flex" alignItems="center">
					<Box width="100%" mr={1}>
						<LinearProgress variant="determinate" {...props} />
					</Box>
					<Box minWidth={35}>
						<Typography variant="body2" color="textSecondary">{`${Math.round(props.value)}%`}</Typography>
					</Box>
				</Box>
			</div>
		</div>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
	value: PropTypes.number.isRequired
};

const useStyles = makeStyles({
	root: {
		height: '100%',
		width: '100%'
	}
});

export default function LinearWithValueLabel() {
	const classes = useStyles();
	const [ progress, setProgress ] = React.useState(10);

	React.useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => (prevProgress >= 70 ? 10 : prevProgress + 10));
		}, 800);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={classes.root}>
			<LinearProgressWithLabel value={progress} />
		</div>
	);
}
