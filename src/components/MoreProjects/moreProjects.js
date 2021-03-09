import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Netflix from "../../img/Netflix.jpg";


const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 345, 
		marginLeft: "50px",
		marginTop: "50px"
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
}));

export default function RecipeReviewCard() {
	const classes = useStyles();
	const [ expanded, setExpanded ] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (<>
		<Card className={classes.root}>
			<CardHeader title="HTML&CSS" />
			<CardMedia className={classes.media} image={Netflix} title="Paella dish" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					this is a project made during Adalab
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
					</Typography>		
				</CardContent>
			</Collapse>
		</Card>
		<Card className={classes.root}>
			<CardHeader title="HTML&CSS" />
			<CardMedia className={classes.media} image={Netflix} title="Paella dish" />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					this is a project made during Adalab
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton>
			</CardActions>
			<Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>Method:</Typography>
					<Typography paragraph>
						Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.
					</Typography>		
				</CardContent>
			</Collapse>
		</Card>
		<div>
		<Link to="/">
				<Button variant="outlined" color="secondary">
					home
				</Button>
			</Link>
			</div>
			</>
	);
}
