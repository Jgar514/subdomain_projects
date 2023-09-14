import React from "react";

import Tilt from "react-parallax-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

import { BsArrowDownRight } from "react-icons/bs";

const ProjectCard = ({ index, name, preview, description, tags, image, source_code_link, show_project_link, url, title, b1 }) => {
	return (
		<div className=" mt-5 mb-0 ">
			<div className="flex flex-col gap-2 w-full sm:w-[360px]   border-b-2 border-t-2 dark:border-red-700 border-black  rounded-xl  dark:bg-gray-700 bg-gray-200 pb-2 pt-0 shadow-lg dark:shadow-[#f7f7f7]  ">
				<h1 className="text-[26px] px-4 py-2 w-fit text-black bg-gray-50 bg-opacity-80 rounded-lg border-2 border-black">{title}</h1>
				<div className="w-full relative pt-2 bg-gray-800 pb-2 ">
					<img onClick={() => window.open(show_project_link, "_blank")} src={image} alt={name} className="border-2 border-black" />
					<div className="h-1/6 absolute flex w-full bottom-2  justify-end">
						<div className="w-fit h-full absolute flex  items-center  rounded justify-end bottom-0 bg-gray-950 gap-4 opacity-80 px-4">
							<span className="text-white  text-lg text-bold   ">{url}</span>
						</div>
					</div>
				</div>
				{/* <div className="h-15 w-full border-black border-2 flex justify-center">
					<div className="w-full bg-yellow-50 flex  items-center p-2">
						<p className="text-black">Description</p>
					</div>
				</div> */}
				<div onClick={() => window.open(show_project_link, "_blank")} className="cursor-pointer">
					<div className="h-10 w-full  flex justify-center">
						<div className="w-3/5 bg-yellow-50 flex justify-center items-center rounded-full border-black shadow-black shadow-2xl border-2">
							<p className="text-black ">{b1}</p>
						</div>
					</div>
				</div>
				<div onClick={() => window.open(source_code_link, "_blank")} className="cursor-pointer">
					<div className="h-10 w-full  flex justify-center">
						<div className="w-3/5 bg-yellow-50 flex justify-center items-center rounded-full border-black border-2 shadow-black shadow-2xl">
							<p className="text-black">Read More</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
	// return (
	// 	<motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
	// 		<Tilt
	// 			options={{
	// 				max: 45,
	// 				scale: 1,
	// 				speed: 450,
	// 			}}
	// 			className="bg-purple-400 py-2 rounded-2x1 sm:w-[360px] w-full"
	// 		>
	// 			<div onClick={() => window.open(show_project_link, "_blank")} className="relative w-full h-[230px]">
	// 				<div className="mt-3">
	// 					<h3 className="text-white font-bold text-[26px]">{name}</h3>
	// 					{/* <p className="mt-4 ml-4 text-secondaryred text-[16px]">{preview}</p> */}
	// 				</div>
	// 				<div>
	// 					<img src={image} alt={name} className="w-full h-auto object-scale-down   mt-0" />
	// 				</div>

	// 				<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
	// 					<div onClick={() => window.open(source_code_link, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
	// 						<img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
	// 						<div className="flex flex-col z-20 bg-orange-400">
	// 				<div>Test1</div>
	// 				<div>Test2</div>
	// 			</div>
	// 					</div>
	// 				</div>
	// 			</div>
	// 			{/* <div className="mt-0  bg-yellow-700">
	// 				<p className="mt-4 text-secondary text-[14px]">{description}</p>
	// 			</div> */}
	// 			{/* <div className="mt-4 flex flex-wrap gap-2">
	// 				{tags.map((tag) => (
	// 					<p key={tag.name} className={`text-[14px] ${tag.color}`}>
	// 						#{tag.name}
	// 					</p>
	// 				))}
	// 			</div> */}

	// 		</Tilt>
	// 	</motion.div>
	// );
};

const Works = () => {
	return (
		<>
			<div id="works" className="h-full w-full  flex flex-wrap py-20 mt-6">
				{/* <div className="w-full flex">
				<motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
					idk
					In this course, you'll learn the following: - ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model - React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React - TailwindCSS - a popular utility-first CSS styling framework.
				</motion.p>
			</div> */}

				<div className="mt-0 flex justify-evenly   flex-wrap gap-8">
					{projects.map((project, index) => (
						<ProjectCard key={`project-${index}`} index={index} {...project} />
					))}
				</div>
			</div>
		</>
	);
};

export default Works;
