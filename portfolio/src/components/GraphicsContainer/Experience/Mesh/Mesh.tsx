import * as THREE from "three";
import useAppStore, { Section } from "../../../../store/app-store";

interface Mesh {
	nodes: THREE.Mesh;
	bakedTexture: THREE.Texture;
	section?: Section;
}

export function Mesh({ nodes, bakedTexture, section }: Mesh) {
	const setShowSection = useAppStore((state) => state.setShowSection);

	return (
		<mesh
			geometry={nodes.geometry}
			position={nodes.position}
			rotation={nodes.rotation}
			onClick={() => section && setShowSection(section)}
		>
			<meshBasicMaterial map={bakedTexture} />
		</mesh>
	);
}
