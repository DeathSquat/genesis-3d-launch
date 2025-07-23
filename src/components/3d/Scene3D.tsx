import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Float } from "@react-three/drei";
import GenesisLogo3D from "./GenesisLogo3D";
import FloatingChain from "./FloatingChain";
import ParticleField from "./ParticleField";

const Scene3D = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ 
          position: [0, 0, 8], 
          fov: 60,
          near: 0.1,
          far: 100 
        }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.6}
            color="#c084fc"
            castShadow
          />

          {/* Environment */}
          <Environment preset="night" />
          
          {/* Particle Field */}
          <ParticleField />
          
          {/* Main Genesis Logo */}
          <Float
            speed={1.5}
            rotationIntensity={0.2}
            floatIntensity={0.3}
          >
            <GenesisLogo3D />
          </Float>
          
          {/* Floating Chain Elements */}
          <FloatingChain position={[-4, 2, -2]} scale={0.6} speed={0.8} />
          <FloatingChain position={[4, -2, -3]} scale={0.8} speed={1.2} />
          <FloatingChain position={[3, 3, 1]} scale={0.4} speed={0.6} />
          <FloatingChain position={[-3, -3, 2]} scale={0.7} speed={1.5} />
          
          {/* Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;