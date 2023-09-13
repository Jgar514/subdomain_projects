import { motion } from "framer-motion";

import { styles } from "../styles";
import { MyLife } from "./canvas";
import { SectionWrapper2 } from "../hoc";

const Hero = () => {
	return (
		<section
			className={`flex flex-col w-full h-[50%] md:h-full mx-auto  overlow-hidden mt-0 px-0 pt-0
		`}
		>
			<div className=" md: md:flex-col md:border-2  lg:flex lg:justify-center lg:items-center   w-full h-full rounded-2xl bg-white dark:bg-transparent   ">
				<MyLife />

				{/* <div className={`${styles.paddingX} relative  max-w-7xl mx-auto flex flex-row items-start gap-5 bg-gray pt-4 md:mt-[-10]`}> */}
				{/* <div className="flex flex-col justify-center items-center mt-5">
						<div className="w-5 h-5 rounded-full bg-[#686C45]" />
						<div className="w-1 sm:h-80 h-20 bg-[#686C45]" />
					</div> */}

				<div className=" flex flex-col justify-end items-end w-full h-fit md:py-0 py-4 dark:bg-gray-700 bg-[#ebebeb]  px-0 lg:rounded-3xl  ">
					<div className="flex w-full  h-10   "></div>
					<h1
						className={`${styles.heroHeadText} text-black bg-[white] 
					bg-opacity-70 px-4 py-4 rounded-l-xl border-black border-2 dark:border-white dark:border-2 `}
					>
						<span className=" font-sans italic text-[ ]">Joshua Garvey</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 dark:text-white-100 text-black`}>
						My Work
						{/* My work <br className="sm:block hidden" /> interfaces and web applications */}
					</p>
					{/* <div className="flex  w-full h-full mt-0 justify-center items-center bg-">
						<div className="w-[35px] h-[64px] rounded-3xl border-4 border-black flex justify-center items-start p-2">
							<motion.div
								animate={{
									y: [0, 24, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "loop",
								}}
								className="w-3 h-3 rounded-full bg-black mb-1"
							/>
						</div>
					</div> */}
				</div>
				{/* </div> */}
			</div>
		</section>
	);
};

export default Hero;
