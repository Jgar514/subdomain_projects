import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Contact, Hero, Navbar, Works, StarsCanvas } from "./components";
import Nav from "./components/Nav";

const App = () => {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			setTheme("dark");
		} else {
			setTheme("dark");
		}
	}, []);

	const handleThemeSwitch = () => {
		setTheme(theme === "dark" ? "light" : "dark");
	};

	useEffect(() => {
		if (theme === "dark") {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
	}, [theme]);

	const sun = (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
		</svg>
	);

	const moon = (
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
			<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
		</svg>
	);

	return (
		<BrowserRouter>
			<div className="bg-white-100 dark:bg-black text-content ">
				<button type="button" onClick={handleThemeSwitch} className="fixed  right-20 top-5 bg-blue-600 dark:bg-yellow-400 text-lg p-1 rounded-md z-50">
					{theme === "dark" ? sun : moon}
				</button>
				<Nav />
				<Hero />
				<div className="w-full  h-full bg-gray-400">
					<div className="h-20  p-4 dark:bg-gray-700 bg-[#ebebeb] border-b-2 py-8  dark:border-yellow-400 border-black z-20">
						<p className="text-[60px] dark:bg-gray-600  italic bg-white  dark:text-yellow-400 text-black py-0 w-fit border-4 dark:border-white border-red-600 rounded-xl px-2">PROJECTS</p>
					</div>
					<StarsCanvas />
					<Works />
				</div>
				{/* <About /> */}
				{/* <Experience /> */}
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
