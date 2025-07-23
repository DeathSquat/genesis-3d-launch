import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

// Simple test component
const TestBox = () => {
  console.log("TestBox rendering");
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#8b5cf6" />
    </mesh>
  );
};

const Scene3D = () => {
  console.log("Scene3D rendering");
  
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 5], 
          fov: 60
        }}
        gl={{ 
          antialias: true, 
          alpha: true
        }}
        onCreated={({ gl }) => {
          console.log("Canvas created successfully");
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <TestBox />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;