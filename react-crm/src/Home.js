import React, { useState } from "react";
import Menu from "./Menu";
import Header from "./Header";

function Home({
	handleSubmit,
	handleContactFormData,
	contactData,
	allContacts,
	setAllContacts
}) {
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
		<div>
			<Header />
			<Menu
				handleContactFormData={handleContactFormData}
				contactData={contactData}
				allContacts={allContacts}
				setAllContacts={setAllContacts}
				handleSubmit={handleSubmit}
			/>
		</div>
	);
}

export default Home;
