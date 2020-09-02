import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import NewContact from "./NewContact";

function Menu({
	handleContactFormData,
	contactData,
	allContacts,
	setAllContacts,
	handleSubmit
}) {
	return (
		<Container
			maxWidth="sm"
			style={{
				backgroundColor: "#EAECEE",
				marginTop: "4rem",
				padding: "2rem"
			}}>
			<NewContact
				handleContactFormData={handleContactFormData}
				contactData={contactData}
				allContacts={allContacts}
				setAllContacts={setAllContacts}
				handleSubmit={handleSubmit}
			/>
		</Container>
	);
}

export default Menu;
