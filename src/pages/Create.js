import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	btn: {
		fontSize: 60,
		backgroundColor: 'violet',
		'&:hover': {
			backgroundColor: 'blue',
		},
	},
	title: {
		textDecoration: 'underline',
		marginBottom: 20,
	},
});

export default function Create() {
	const classes = useStyles();

	return (
		<Container>
			<Typography
				className={classes.title}
				variant="h6"
				component="h2"
				gutterBottom
				color="textSecondary"
			>
				Create a New Note
			</Typography>
			<Button
				className={classes.btn}
				onClick={() => console.log('You clicked me!')}
				type="submit"
				color="secondary"
				variant="contained"
				endIcon={<KeyboardArrowRightIcon />}
			>
				Submit
			</Button>

			{/* icons */}
			{/* <br />
			<AcUnitOutlinedIcon />
			<AcUnitOutlinedIcon color="secondary" fontSize="large" />
			<AcUnitOutlinedIcon color="secondary" fontSize="small" />
			<AcUnitOutlinedIcon color="action" fontSize="small" />
			<AcUnitOutlinedIcon color="error" fontSize="small" />
			<AcUnitOutlinedIcon color="disabled" fontSize="small" /> */}
		</Container>
	);
}
