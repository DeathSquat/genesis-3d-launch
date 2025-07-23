import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface FloatingChainProps {
  position: [number, number, number];
  scale?: number;
  speed?: number;
}

const FloatingChain = ({ position, scale = 1, speed = 1 }: FloatingChainProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.2;
      meshRef.current.rotation.y += 0.01 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.3;
    }
    
    if (materialRef.current) {
      materialRef.current.distort = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  return (
    <group position={position}>
      <Torus ref={meshRef} args={[1, 0.3, 16, 32]} scale={scale}>
        <MeshDistortMaterial
          ref={materialRef}
          color="#8b5cf6"
          distort={0.1}
          speed={2}
          roughness={0}
          metalness={0.8}
        />
      </Torus>
      <Torus args={[1, 0.3, 16, 32]} scale={scale} position={[1.5, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <MeshDistortMaterial
          color="#a855f7"
          distort={0.15}
          speed={1.5}
          roughness={0}
          metalness={0.9}
        />
      </Torus>
    </group>
  );
};

export default FloatingChain;