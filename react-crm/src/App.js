import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import AllContacts from "./AllContacts";
import SingleContact from "./SingleContact";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="all-contacts" element={<AllContacts />} />
					<Route path="all-contacts/:id" element={<SingleContact />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
