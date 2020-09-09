import React from "react";
import NewContact from "./NewContact";

function Menu({
	handleContactFormData,
	contactData,
	allContacts,
	setAllContacts,
	handleSubmit,
	editing,
	currentContact
}) {
	return (
		<div
			style={{
				backgroundColor: "#EAECEE",
				marginTop: "4rem",
				padding: "2rem",
				display: "flex",
				justifyContent: "center"
			}}>
			<NewContact
				handleContactFormData={handleContactFormData}
				contactData={contactData}
				allContacts={allContacts}
				setAllContacts={setAllContacts}
				handleSubmit={handleSubmit}
				editing={editing}
				currentContact={currentContact}
			/>
		</div>
	);
}

export default Menu;
