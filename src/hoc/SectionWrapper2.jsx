import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper2 = (Component, idName) =>
	function HOC() {
		return (
			<div>
				<span className="hash-span2" id={idName}>
					&nbsp;
				</span>
				<Component />
			</div>
		);
	};

export default SectionWrapper2;
