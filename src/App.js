import React from "react";
import {
	Route,
	BrowserRouter,
	Routes as Switch,
} from "react-router-dom/dist/index.js";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	Home,
	StudentSignIn,
	ProfSignIn,
	ProfPage,
} from "./components/pages/index.js";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Navbar />
			<Switch>
				<Route path="/" exact element={<Home />}></Route>
				<Route
					path="/student"
					exact
					element={<StudentSignIn />}
				></Route>
				<Route
					path="/prof-sign-in"
					exact
					element={<ProfSignIn />}
				></Route>
				<Route path="/prof-page" exact element={<ProfPage />}></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
