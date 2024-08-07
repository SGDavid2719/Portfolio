import { Center, useTexture, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Mesh } from "./Mesh/Mesh";

export default function Experience() {
	const { nodes } = useGLTF("./model/Model.glb");
	const bakedTexture = useTexture("./model/Bake.jpg");
	bakedTexture.flipY = false;

	return (
		<>
			<Center position={[0, 0.5, 0]}>
				<Mesh nodes={nodes.W as THREE.Mesh} bakedTexture={bakedTexture} />

				<Mesh
					nodes={nodes.X as THREE.Mesh}
					bakedTexture={bakedTexture}
					section="EXPERIENCE"
				/>

				<Mesh
					nodes={nodes.P as THREE.Mesh}
					bakedTexture={bakedTexture}
					section="PROJECTS"
				/>

				<Mesh
					nodes={nodes.C as THREE.Mesh}
					bakedTexture={bakedTexture}
					section="CONTACT"
				/>

				<Mesh
					nodes={nodes.K as THREE.Mesh}
					bakedTexture={bakedTexture}
					section="KNOWLEDGE"
				/>
			</Center>
		</>
	);
}
