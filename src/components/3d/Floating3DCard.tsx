import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

interface Floating3DCardProps {
  position: [number, number, number];
  color?: string;
  scale?: number;
  speed?: number;
}

const Floating3DCard = ({ 
  position, 
  color = "#8b5cf6", 
  scale = 1,
  speed = 1 
}: Floating3DCardProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.2;
    }
  });

  return (
    <RoundedBox
      ref={meshRef}
      args={[2, 3, 0.2]}
      position={position}
      scale={scale}
      radius={0.1}
      smoothness={4}
    >
      <meshStandardMaterial
        color={color}
        roughness={0.2}
        metalness={0.8}
        emissive={color}
        emissiveIntensity={0.1}
      />
    </RoundedBox>
  );
};

export default Floating3DCard;