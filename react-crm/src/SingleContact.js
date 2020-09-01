import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	Avatar,
	Paper,
	Typography,
	Container,
	Button
} from "@material-ui/core";
import { deepOrange, deepPurple } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
	root: {
		display: "flex",
		"& > *": {
			margin: theme.spacing(1)
		}
	},
	paperRoot: {
		display: "flex",
		flexWrap: "wrap",
		"& > *": {
			margin: theme.spacing(1),
			width: theme.spacing(57),
			height: theme.spacing(10)
		}
	},
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7)
	},
	orange: {
		color: theme.palette.getContrastText(deepOrange[500]),
		backgroundColor: deepOrange[500]
	},
	purple: {
		color: theme.palette.getContrastText(deepPurple[500]),
		backgroundColor: deepPurple[500]
	}
}));

function SingleContact() {
	const classes = useStyles();

	return (
		<Container maxWidth="sm">
			<div className={classes.root}>
				<div className={classes.paperRoot}>
					<Paper elevation={3} style={{ padding: "2rem", display: "flex" }}>
						<div>
							<Avatar
								className={classes.large}
								style={{ marginBottom: "1em", marginRight: "2em" }}>
								H
							</Avatar>
						</div>
						<div>
							<Typography>Name</Typography>
							<Typography>Phone Number</Typography>
							<Typography>Email</Typography>
						</div>
						<div style={{ marginLeft: "7em" }}>
							<Button>Edit</Button>
							<Button>Delete</Button>
						</div>
					</Paper>
				</div>
			</div>
		</Container>
	);
}

export default SingleContact;
