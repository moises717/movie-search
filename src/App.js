import React from "react";
import { Route, Switch } from "wouter";
import { Header } from "./Components/Header";

import { Home } from "./pages/Home";
import { Movie } from "./pages/Movie";

export const App = () => {
	return (
		<div>
			<Header />

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/movie/:idmovie" component={Movie} />
			</Switch>
		</div>
	);
};
