import React, { useState } from "react";
import AllContacts from "./AllContacts";
import Header from "./Header";
import Menu from "./Menu";
import { Container } from "@material-ui/core";

function App() {
	const initialContactData = {
		id: null,
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: ""
	};

	const [contactData, setContactData] = useState(initialContactData);
	const [allContacts, setAllContacts] = useState([]);
	const [editing, setEditing] = useState(false);
	const [currentContact, setCurrentContact] = useState(initialContactData);

	const handleContactFormData = event => {
		setContactData({
			...contactData,
			[event.target.name]: event.target.value
		});
	};

	const handleSubmit = event => {
		event.preventDefault();
		setAllContacts(allContacts.concat(contactData));
		console.log(allContacts);
	};

	const deleteContact = id => {
		setAllContacts(allContacts.filter(item => item.id !== id));
	};

	const editContact = contact => {
		setEditing(true);

		setCurrentContact({
			id: contact.id,
			firstName: contact.firstName,
			lastName: contact.lastName,
			email: contact.email,
			phoneNumber: contact.phoneNumber
		});
	};

	return (
		<Container>
			<Header />
			<Menu
				handleContactFormData={handleContactFormData}
				contactData={contactData}
				allContacts={allContacts}
				setAllContacts={setAllContacts}
				handleSubmit={handleSubmit}
				editing={editing}
				currentContact={currentContact}
				editContact={editContact}
			/>
			<AllContacts
				contactData={contactData}
				allContacts={allContacts}
				deleteContact={deleteContact}
				editContact={editContact}
			/>
		</Container>
	);
}

export default App;
