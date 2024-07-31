import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import useAppStore from "../../store/app-store";
import Modal from "../UI/Modal/Modal";

export function GraphicsContainer() {
	const { showSection, setShowSection } = useAppStore((state) => ({
		showSection: state.showSection,
		setShowSection: state.setShowSection,
	}));

	console.log("showSection: ", showSection);

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
			<Modal
				isOpen={showSection != null}
				onClose={() => setShowSection(null)}
				title="Modal's title"
			>
				<p>Modal's content</p>
			</Modal>
		</>
	);
}
