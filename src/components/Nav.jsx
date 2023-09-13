import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { logo1, menu, close } from "../assets";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail, AiOutlineSend, AiOutlineMenu, AiOutlineInstagram } from "react-icons/ai";
import { BiMoon, BiSun } from "react-icons/bi";
// import { Box, Button, useTheme, Typography, IconButton } from "@mui/material";
// import { tokens } from "../theme";

const Nav = (props) => {
	const [active, setActive] = useState("");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="sticky top-0    drop-shadow shadow-blue-600 bg-gray-300 z-30 border-b-2 dark:bg-[#121212] border-black dark:border-white">
			<div className="flex justify-between ">
				{/* <img src={logo1} alt="logo" className="w-[28px] h-[28px] object-fill " /> */}

				<h1 className="bg text-xl dark:text-white text-black p-5">Joshua Garvey</h1>

				<img src={toggle ? close : menu} alt="menu" className="w-[28px] h-full bg- black dark:bg-transparent object-contain cursor-pointer  z-50 mr-6 my-auto pt-" onClick={() => setToggle(!toggle)} />

				<div className={`${!toggle ? "hidden" : "flex"} p-0 black-gradient w-screen h-[645px] absolute z-40  right-0 mx-0 my-0 min-w-[140px] dark:border-yellow-400 border-blue-600 border-2  rounded-xl overscroll-none lg:w-1/2`}>
					<div className="flex flex-row w-full">
						<div className=" w-1/4 flex items-center">
							<div className="h-3/4  w-full  justify-center">
								{" "}
								<div className="text-6xl w-full flex flex-col justify-center items-center gap-8 bg-gray-400 h-full px-4 py-auto rounded-r-2xl ">
									<button role="link" onClick={() => openInNewTab("https://github.com/Jgar514")}>
										<AiFillGithub />
									</button>
									{/* <a href="https://github.com/Jgar514">
						<AiFillGithub />
					</a> */}
									<button role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/josh-garvey-05944825a/")}>
										<AiFillLinkedin />
									</button>
									<button role="link" onClick={() => openInNewTab("https://www.instagram.com/joshgarvey/")}>
										<AiOutlineInstagram />
									</button>
								</div>
							</div>
						</div>
						<div className="w-3/4  flex justify-start px-10 py-10">
							<ul className="list-none flex justify-start items-start flex-col gap-4 ">
								{navLinks.map((Link) => (
									<li
										key={Link.id}
										className={`${active === Link.title ? "text-white" : "text-red"} font-poppins font-medium cursor-pointer text-[26px]`}
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
			</div>
		</nav>
	);
};
export default Nav;
