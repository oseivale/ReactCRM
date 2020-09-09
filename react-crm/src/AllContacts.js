import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { v4 } from "uuid";
import {
	Avatar,
	Paper,
	Typography,
	Container,
	Button,
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
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
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center"
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		border: "0.5px solid grey",
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	}
}));

function AllContacts({
	allContacts,
	deleteContact,
	editContact,
	handleContactFormData,
	initialContactData,
	handleSubmit,
	contactData,
	setAllContacts,
	useEdit
}) {
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const [editing, setEditing] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const updateContact = (id, updatedContact) => {
		setAllContacts(
			allContacts.map(contact => (contact.id === id ? updatedContact : contact))
		);
	};

	return (
		<>
			<Typography
				variant="h4"
				style={{ textAlign: "center", marginTop: "2rem" }}>
				Total Contacts: {allContacts.length}
			</Typography>
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
										<Button onClick={handleOpen}>Edit</Button>

										<div>
											<Modal
												aria-labelledby="transition-modal-title"
												aria-describedby="transition-modal-description"
												className={classes.modal}
												open={open}
												onClose={handleClose}
												closeAfterTransition
												BackdropComponent={Backdrop}
												BackdropProps={{
													timeout: 500
												}}>
												<Fade in={open}>
													<div
														className={classes.paper}
														style={{ padding: "3rem" }}>
														<Typography
															variant="h6"
															id="transition-modal-title">
															Edit contact
														</Typography>

														<form id="transition-modal-description">
															<div>
																<TextField
																	id="standard-basic"
																	label="First Name"
																	name="firstName"
																	defaultValue={contact.firstName}
																	onChange={handleContactFormData}
																/>
															</div>
															<div>
																<TextField
																	id="standard-basic"
																	label="Last Name"
																	style={{ marginTop: "2em" }}
																	name="lastName"
																	defaultValue={contact.lastName}
																	onChange={handleContactFormData}
																/>
															</div>
															<div>
																<FormControl style={{ marginTop: "2em" }}>
																	<InputLabel htmlFor="my-input">
																		Email address
																	</InputLabel>
																	<Input
																		id="my-input"
																		aria-describedby="my-helper-text"
																		name="email"
																		defaultValue={contact.email}
																		onChange={handleContactFormData}
																	/>
																	<FormHelperText id="my-helper-text">
																		We'll never share your email.
																	</FormHelperText>
																</FormControl>
															</div>
															<div>
																<FormControl style={{ marginTop: "2em" }}>
																	<InputLabel htmlFor="my-input">
																		Phone Number
																	</InputLabel>
																	<Input
																		id="my-input"
																		aria-describedby="my-helper-text"
																		name="phoneNumber"
																		defaultValue={contact.phoneNumber}
																		onChange={handleContactFormData}
																	/>
																</FormControl>
															</div>
															<Button
																variant="contained"
																color="primary"
																style={{ marginTop: "2rem" }}
																onSubmit={() => editContact(contact)}>
																Edit Contact
															</Button>
														</form>
													</div>
												</Fade>
											</Modal>
										</div>

										<Button onClick={() => deleteContact(contact.id)}>
											Delete
										</Button>
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
