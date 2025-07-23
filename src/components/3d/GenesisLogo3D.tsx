import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, MeshDistortMaterial, useTexture } from "@react-three/drei";
import * as THREE from "three";

const GenesisLogo3D = () => {
  const groupRef = useRef<THREE.Group>(null);
  const torus1Ref = useRef<THREE.Mesh>(null);
  const torus2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
    }
    
    if (torus1Ref.current && torus2Ref.current) {
      torus1Ref.current.rotation.z = state.clock.elapsedTime * 0.3;
      torus2Ref.current.rotation.z = -state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} scale={1.5}>
      {/* First chain link */}
      <Torus 
        ref={torus1Ref}
        args={[1.2, 0.4, 16, 32]} 
        position={[-0.8, 0.8, 0]}
        rotation={[Math.PI / 4, 0, 0]}
      >
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.1}
          speed={1}
          roughness={0.1}
          metalness={0.9}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
        />
      </Torus>
      
      {/* Second chain link */}
      <Torus 
        ref={torus2Ref}
        args={[1.2, 0.4, 16, 32]} 
        position={[0.8, -0.8, 0]}
        rotation={[-Math.PI / 4, 0, Math.PI / 2]}
      >
        <MeshDistortMaterial
          color="#a855f7"
          distort={0.15}
          speed={1.5}
          roughness={0.1}
          metalness={0.8}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </Torus>
      
      {/* Connecting element */}
      <Torus 
        args={[0.6, 0.2, 12, 24]} 
        position={[0, 0, 0]}
        rotation={[0, Math.PI / 4, 0]}
      >
        <MeshDistortMaterial
          color="#c084fc"
          distort={0.2}
          speed={2}
          roughness={0}
          metalness={1}
          emissive="#8b5cf6"
          emissiveIntensity={0.4}
        />
      </Torus>
    </group>
  );
};

export default GenesisLogo3D;