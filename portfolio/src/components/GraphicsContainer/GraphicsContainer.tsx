import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";

export function GraphicsContainer() {
	return (
		<>
			<Canvas
				flat
				camera={{
					fov: 35,
					near: 0.1,
					far: 100,
					position: [0, 5, 10],
				}}
				frameloop="demand"
			>
				<color args={["#171715"]} attach="background" />
				<Experience />
			</Canvas>
		</>
	);
}
