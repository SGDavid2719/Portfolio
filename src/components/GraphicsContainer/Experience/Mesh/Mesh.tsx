import * as THREE from "three";
import useAppStore, { Section } from "../../../../store/app-store";
import { useEffect, useState } from "react";

interface Mesh {
	nodes: THREE.Mesh;
	bakedTexture: THREE.Texture;
	section?: Section;
}

export function Mesh({ nodes, bakedTexture, section }: Mesh) {
	const setShowSection = useAppStore((state) => state.setShowSection);

	const [hovered, setHovered] = useState(false);

	useEffect(() => {
		document.body.style.cursor = hovered ? "pointer" : "auto";
	}, [hovered]);

	return (
		<mesh
			geometry={nodes.geometry}
			position={nodes.position}
			rotation={nodes.rotation}
			onClick={() => section && setShowSection(section)}
			onPointerOver={() => setHovered(true)}
			onPointerOut={() => setHovered(false)}
		>
			<meshBasicMaterial map={bakedTexture} />
		</mesh>
	);
}
