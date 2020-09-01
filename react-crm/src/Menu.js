import React from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NewContact from "./NewContact";

function Menu() {
	return (
		<Container
			maxWidth="sm"
			style={{
				backgroundColor: "#EAECEE",
				marginTop: "4rem",
				padding: "2rem"
			}}>
			<NewContact />
			<Typography variant="h5" style={{ margin: "1rem", textAlign: "center" }}>
				<Link to="all-contacts">View Existing contacts</Link>
			</Typography>
		</Container>
	);
}

export default Menu;
