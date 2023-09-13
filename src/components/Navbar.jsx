import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo1, menu, close } from "../assets";
import { linkClasses } from "@mui/material";

const Navbar = () => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="">
			<div className="w-full flex flex-row justify-evenly items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img src={logo1} alt="logo" className="w-9 h-9 object-fill" />
				</Link>

				<p className="text-white dark:text-purple-600 text-[18px]font-bold cursor-pointer flex justify-center items-center  ">
					Joshua
					<br />
					Garvey
				</p>

				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((Link) => (
						<li key={Link.id} className={`${active === Link.title ? "text-white" : "text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={() => setActive(Link.title)}>
							<a href={`#${Link.id}`}>{Link.title}</a>
						</li>
					))}
				</ul>
				<div className="sm:hidden flex flex-1 justify-end items-center">
					<img src={toggle ? close : menu} alt="menu" className="w-[28px] h-28px object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

					<div className={`${!toggle ? "hidden" : "flex"} p-0 black-gradient w-screen h-screen absolute z-40 top-20 right-0 mx-0 my-0 min-w-[140px]   rounded-xl`}>
						<ul className="list-none flex justify-start items-start flex-col gap-4">
							{navLinks.map((Link) => (
								<li
									key={Link.id}
									className={`${active === Link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`}
									onClick={() => {
										setToggle(!toggle);
										setActive(Link.title);
									}}
								>
									<a href={`#${Link.id}`}>{Link.title}</a>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
