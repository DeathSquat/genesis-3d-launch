import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import * as THREE from "three";

interface FloatingChainProps {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}

const FloatingChain = ({ position, scale = 1, speed = 1 }: FloatingChainProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
    
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.z += 0.005 * speed;
    }
  });

  return (
    <group position={position}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} scale={scale}>
        <meshStandardMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.8}
          emissive="#4c1d95"
          emissiveIntensity={0.2}
        />
      </Torus>
      <Torus ref={mesh2Ref} args={[1, 0.3, 16, 32]} scale={scale} position={[1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial
          color="#a855f7"
          roughness={0.1}
          metalness={0.9}
          emissive="#7c3aed"
          emissiveIntensity={0.3}
        />
      </Torus>
    </group>
  );
};

export default FloatingChain;