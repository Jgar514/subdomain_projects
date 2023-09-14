import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { useHelper, SpotLight } from "@react-three/drei";
import * as THREE from "three";

function Lights() {
	const light = useRef();
	useHelper(light, THREE.SpotLightHelper, "yellow");
	return <spotLight ref={light} intensity={0.2} position={[12, 12, 5.4]} shadow-mapSize-width={1024} shadow-mapSize-height={1024} castShadow={true} shadow-bias={-0.001} target-position={[3, 4.7, 2.5]} />;
}

const Room = () => {
	const room = useGLTF("./models/june20.glb");
	// useHelper(spotLight, SpotLightHelper, "teal");
	return (
		<mesh receiveShadow>
			<hemisphereLight intensity={0.5} groundColor="black" />
			<directionalLight intensity={1.5} target-position={[3, 4.7, 2.5]} castShadow position={[12, 6, 5.4]} color="white" />
			{/* <directionalLight castShadow /> */}
			{/* <pointLight intensity={3} /> */}
			{/* <SpotLight
				distance={5}
				angle={0.15}
				attenuation={5}
				anglePower={5} // Diffuse-cone anglePower (default: 5)
			/> */}
			<Lights />

			<primitive object={room.scene} scale={1.2} position={[0, -0, 4]} receiveShadow />
		</mesh>
	);
};

const MyLife = () => {
	return (
		<div className=" h-[300px] mt-0 md:h-[70%] lg:h-[500px] lg:w-full lg:border-r-0  rounded border-b border-t-0 lg:border-0 lg:border-t-2 border-2 dark:border-r-0 dark:border-l-0  dark:border-white border-black border-double px-0 pt-2 pb-4  md:border-4 ">
			<Canvas frameLoop="demand" shadows camera={{ position: [0, 24, 28], fov: 50 }} gL={{ preserveDrawingBuffer: true }}>
				<Suspense fallback={<CanvasLoader />}>
					<OrbitControls enableZoom={false} enableDamping={true} />
					<gridHelper args={[40, 40, 0xff0000, "#686C45"]} />
					{/* <gridHelper size={[80]} /> */}
					<axesHelper args={[25]} />

					<Room />
				</Suspense>
				<Preload all />
			</Canvas>
			<div className=" w-full relative flex bottom-4 justify-center bg-black z-10 bg-opacity-50">
				<p className="text-xl ">Drag To Move</p>
			</div>
		</div>
	);
};

export default MyLife;
