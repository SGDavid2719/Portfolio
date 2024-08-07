import { Canvas } from "@react-three/fiber";
import Experience from "./Experience/Experience";
import { ExperienceModal } from "../ExperienceModal/ExperienceModal";
import { ProjectsModal } from "../ProjectsModal/ProjectsModal";
import { ContactModal } from "../ContactModal/ContactModal";
import { KnowledgeModal } from "../KnowledgeModal/KnowledgeModal";

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
			<ExperienceModal />
			<ProjectsModal />
			<ContactModal />
			<KnowledgeModal />
		</>
	);
}
