import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import {
	FormControl,
	InputLabel,
	Input,
	FormHelperText
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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

function NewContact() {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Typography
				variant="h5"
				style={{ margin: "1rem", textAlign: "center" }}
				onClick={handleOpen}>
				Add a New Contact
			</Typography>
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
					<div className={classes.paper} style={{ padding: "3rem" }}>
						<Typography variant="h6" id="transition-modal-title">
							Add a new contact
						</Typography>
						<form id="transition-modal-description">
							<div>
								<TextField id="standard-basic" label="First Name" />
							</div>
							<div>
								<TextField
									id="standard-basic"
									label="Last Name"
									style={{ marginTop: "2em" }}
								/>
							</div>
							<div>
								<FormControl style={{ marginTop: "2em" }}>
									<InputLabel htmlFor="my-input">Email address</InputLabel>
									<Input id="my-input" aria-describedby="my-helper-text" />
									<FormHelperText id="my-helper-text">
										We'll never share your email.
									</FormHelperText>
								</FormControl>
							</div>
							<div>
								<FormControl style={{ marginTop: "2em" }}>
									<InputLabel htmlFor="my-input">Phone Number</InputLabel>
									<Input id="my-input" aria-describedby="my-helper-text" />
								</FormControl>
							</div>
						</form>
					</div>
				</Fade>
			</Modal>
		</div>
	);
}

export default NewContact;
