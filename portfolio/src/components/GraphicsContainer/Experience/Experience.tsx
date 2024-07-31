import { Center, useTexture, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Experience() {
	const { nodes } = useGLTF("./model/Model.glb");

	const bakedTexture = useTexture("./model/Bake.jpg");
	bakedTexture.flipY = false;

	return (
		<>
			<Center position={[0, 0.5, 0]}>
				{nodes.W instanceof THREE.Mesh && (
					<mesh
						geometry={nodes.W.geometry}
						position={nodes.W.position}
						rotation={nodes.W.rotation}
					>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				)}

				{nodes.X instanceof THREE.Mesh && (
					<mesh
						geometry={nodes.X.geometry}
						position={nodes.X.position}
						rotation={nodes.X.rotation}
					>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				)}

				{nodes.P instanceof THREE.Mesh && (
					<mesh
						geometry={nodes.P.geometry}
						position={nodes.P.position}
						rotation={nodes.P.rotation}
					>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				)}

				{nodes.C instanceof THREE.Mesh && (
					<mesh
						geometry={nodes.C.geometry}
						position={nodes.C.position}
						rotation={nodes.C.rotation}
					>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				)}

				{nodes.K instanceof THREE.Mesh && (
					<mesh
						geometry={nodes.K.geometry}
						position={nodes.K.position}
						rotation={nodes.K.rotation}
					>
						<meshBasicMaterial map={bakedTexture} />
					</mesh>
				)}
			</Center>
		</>
	);
}
