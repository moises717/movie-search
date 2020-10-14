import React from "react";
import reactDOM from "react-dom";
import { App } from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
reactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("app")
);
