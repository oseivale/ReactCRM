import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

function Header() {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6">
					<Link
						style={{
							color: "white",
							textDecoration: "none"
						}}
						to="/">
						React CRM App
					</Link>
				</Typography>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
