import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 } from "uuid";
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

function AllContacts({ allContacts }) {
	const classes = useStyles();

	return (
		<>
			{allContacts.map(contact => {
				return (
					<Container maxWidth="sm" key={(contact.id = v4())}>
						<div className={classes.root}>
							<div className={classes.paperRoot}>
								<Paper
									elevation={3}
									style={{ padding: "2rem", display: "flex" }}>
									<div>
										<Avatar
											className={classes.large}
											style={{ marginBottom: "1em", marginRight: "2em" }}>
											{contact.firstName.charAt(0)}
											{contact.lastName.charAt(0)}
										</Avatar>
									</div>
									<div>
										<Typography>
											{contact.firstName} {contact.lastName}
										</Typography>
										<Typography>{contact.phoneNumber}</Typography>
										<Typography>{contact.email}</Typography>
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
			})}
		</>
	);
}

export default AllContacts;
