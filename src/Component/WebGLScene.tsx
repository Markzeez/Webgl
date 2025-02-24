import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

const WebGLScene: React.FC = () => {
  return (
    <Canvas className="h-screen">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial attach="material" color="orange" />
      </Sphere>
      <OrbitControls />
    </Canvas>
  );
};

export default WebGLScene;
