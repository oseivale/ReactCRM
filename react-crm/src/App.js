import React, { useState, useEffect } from "react";
import AllContacts from "./AllContacts";
import Home from "./Home";

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
		setAllContacts(
			allContacts.filter(item => {
				if (item.id !== id) {
					return item;
				}
			})
		);
	};

	return (
		<div className="App">
			<Home
				handleContactFormData={handleContactFormData}
				contactData={contactData}
				allContacts={allContacts}
				setAllContacts={setAllContacts}
				handleSubmit={handleSubmit}
			/>

			<AllContacts
				contactData={contactData}
				allContacts={allContacts}
				deleteContact={deleteContact}
			/>
		</div>
	);
}

export default App;
