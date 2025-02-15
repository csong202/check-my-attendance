import React from "react";
import {
	createHashRouter,
	RouterProvider,
} from "react-router-dom/dist/index.js";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	Home,
	SignIn,
	StudentSignIn,
	ProfSignIn,
	ProfPage,
} from "./components/pages/index.js";

function App() {
	const navBarWrapper = (page) => (
		<>
			<Navbar />
			{page}
		</>
	);
	const router = createHashRouter([
		{
			path: "/",
			element: navBarWrapper(<Home />),
		},
		{
			path: "sign-in",
			element: navBarWrapper(<SignIn />),
		},
		{
			path: "student",
			element: navBarWrapper(<StudentSignIn />),
		},
		{
			path: "prof-sign-in",
			element: navBarWrapper(<ProfSignIn />),
		},
		{
			path: "prof-page",
			element: navBarWrapper(<ProfPage />),
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
