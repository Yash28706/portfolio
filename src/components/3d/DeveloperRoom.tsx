import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshWobbleMaterial, Text, Sparkles, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface DeveloperRoomProps {
  scrollOffset?: number;
}

export const DeveloperRoomScene: React.FC<DeveloperRoomProps> = () => {
  const groupRef = useRef<THREE.Group>(null);
  const hologramRef = useRef<THREE.Mesh>(null);
  const laptopRef = useRef<THREE.Group>(null);

  // Mouse parallax and slow rotation
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (groupRef.current) {
      // Gentle slow rotation + mouse parallax
      groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.15 + (state.pointer.x * 0.2);
      groupRef.current.rotation.x = Math.cos(t * 0.15) * 0.05 + (-state.pointer.y * 0.1);
    }

    if (hologramRef.current) {
      hologramRef.current.rotation.x = t * 0.5;
      hologramRef.current.rotation.y = t * 0.8;
    }

    if (laptopRef.current) {
      laptopRef.current.position.y = Math.sin(t * 1.5) * 0.08 + 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.8, 0]}>
      {/* Ambient & Cyberpunk Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00F5FF" />
      <pointLight position={[-5, 3, -5]} intensity={1.2} color="#FF4D9D" />
      <pointLight position={[0, -2, 3]} intensity={0.8} color="#6C63FF" />
      <spotLight position={[0, 8, 2]} angle={0.6} penumbra={1} intensity={2} color="#00F5FF" />

      {/* Main Desk Surface */}
      <mesh position={[0, 0, 0]} receiveShadow castShadow>
        <boxGeometry args={[4.2, 0.1, 1.8]} />
        <meshStandardMaterial color="#0b1120" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Desk RGB Edge Trim */}
      <mesh position={[0, -0.05, 0.91]}>
        <boxGeometry args={[4.22, 0.04, 0.04]} />
        <meshBasicMaterial color="#00F5FF" />
      </mesh>
      <mesh position={[0, -0.05, -0.91]}>
        <boxGeometry args={[4.22, 0.04, 0.04]} />
        <meshBasicMaterial color="#FF4D9D" />
      </mesh>

      {/* Desk Legs */}
      <mesh position={[-1.9, -0.9, 0.7]}>
        <boxGeometry args={[0.08, 1.7, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} />
      </mesh>
      <mesh position={[1.9, -0.9, 0.7]}>
        <boxGeometry args={[0.08, 1.7, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} />
      </mesh>
      <mesh position={[-1.9, -0.9, -0.7]}>
        <boxGeometry args={[0.08, 1.7, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} />
      </mesh>
      <mesh position={[1.9, -0.9, -0.7]}>
        <boxGeometry args={[0.08, 1.7, 0.08]} />
        <meshStandardMaterial color="#1e293b" metalness={0.9} />
      </mesh>

      {/* CENTER MONITOR */}
      <group position={[0, 0.75, -0.4]}>
        {/* Screen Bezel */}
        <mesh castShadow>
          <boxGeometry args={[1.8, 1.05, 0.06]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        {/* Screen Display */}
        <mesh position={[0, 0, 0.032]}>
          <planeGeometry args={[1.72, 0.98]} />
          <meshBasicMaterial color="#030712" />
        </mesh>
        {/* Screen Code Glowing Text */}
        <Text
          position={[-0.75, 0.3, 0.035]}
          fontSize={0.065}
          color="#00F5FF"
          anchorX="left"
          anchorY="top"
          font="https://fonts.gstatic.com/s/firacode/v22/u-4eGENR1Bi-Ww48N7Ww.woff"
        >
          {`const developer = {\n  name: "Kurmapu Yaswanth",\n  status: "3D Portfolio Active",\n  stack: ["React", "Three.js", "Node"]\n};`}
        </Text>
        {/* Stand */}
        <mesh position={[0, -0.6, -0.05]}>
          <cylinderGeometry args={[0.04, 0.06, 0.35, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.8} />
        </mesh>
        <mesh position={[0, -0.75, 0]}>
          <boxGeometry args={[0.4, 0.03, 0.3]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} />
        </mesh>
      </group>

      {/* LEFT MONITOR (Angled) */}
      <group position={[-1.6, 0.7, -0.2]} rotation={[0, 0.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.9, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0.027]}>
          <planeGeometry args={[1.32, 0.82]} />
          <meshBasicMaterial color="#090d16" />
        </mesh>
        <Text
          position={[-0.55, 0.25, 0.03]}
          fontSize={0.055}
          color="#FF4D9D"
          anchorX="left"
          anchorY="top"
        >
          {`// Terminal Dashboard\n$ npm run build\n✔ Bundled in 1.2s\n✔ 100% Cyber-Aesthetic`}
        </Text>
      </group>

      {/* RIGHT MONITOR (Angled) */}
      <group position={[1.6, 0.7, -0.2]} rotation={[0, -0.35, 0]}>
        <mesh castShadow>
          <boxGeometry args={[1.4, 0.9, 0.05]} />
          <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.8} />
        </mesh>
        <mesh position={[0, 0, 0.027]}>
          <planeGeometry args={[1.32, 0.82]} />
          <meshBasicMaterial color="#06121e" />
        </mesh>
        <Text
          position={[-0.55, 0.25, 0.03]}
          fontSize={0.055}
          color="#6C63FF"
          anchorX="left"
          anchorY="top"
        >
          {`// 3D Matrix Stream\n[System Metrics]\nGPU: 60 FPS | WebGL 2.0\nMemory: Optimized`}
        </Text>
      </group>

      {/* FLOATING LAPTOP (Interactive & Animated) */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <group ref={laptopRef} position={[0, 0.2, 0.35]} rotation={[0.05, 0, 0]}>
          {/* Laptop Base */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[0.9, 0.03, 0.6]} />
            <meshStandardMaterial color="#1e293b" metalness={0.9} roughness={0.2} />
          </mesh>
          {/* Keyboard RGB Glow */}
          <mesh position={[0, 0.016, 0.05]}>
            <planeGeometry args={[0.8, 0.35]} rotation={[-Math.PI / 2, 0, 0]} />
            <meshBasicMaterial color="#00F5FF" opacity={0.8} transparent />
          </mesh>
          {/* Laptop Screen Lid */}
          <group position={[0, 0.015, -0.3]} rotation={[-0.35, 0, 0]}>
            <mesh position={[0, 0.28, 0]}>
              <boxGeometry args={[0.9, 0.55, 0.02]} />
              <meshStandardMaterial color="#0f172a" metalness={0.9} />
            </mesh>
            <mesh position={[0, 0.28, 0.012]}>
              <planeGeometry args={[0.85, 0.5]} />
              <meshBasicMaterial color="#0284c7" />
            </mesh>
            {/* Glowing Logo on Lid Back */}
            <mesh position={[0, 0.28, -0.012]}>
              <circleGeometry args={[0.06, 32]} />
              <meshBasicMaterial color="#FF4D9D" />
            </mesh>
          </group>
        </group>
      </Float>

      {/* NEON RGB KEYBOARD */}
      <group position={[0, 0.06, 0.45]}>
        <mesh>
          <boxGeometry args={[1.2, 0.03, 0.4]} />
          <meshStandardMaterial color="#090d16" roughness={0.4} />
        </mesh>
        {/* RGB Underglow */}
        <mesh position={[0, -0.01, 0]}>
          <boxGeometry args={[1.24, 0.01, 0.44]} />
          <meshBasicMaterial color="#FF4D9D" />
        </mesh>
      </group>

      {/* COFFEE MUG WITH STEAM */}
      <group position={[-1.2, 0.12, 0.3]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.08, 0.07, 0.18, 32]} />
          <meshStandardMaterial color="#f43f5e" roughness={0.3} />
        </mesh>

        {/* Coffee Liquid */}
        <mesh position={[0, 0.08, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.01, 32]} />
          <meshStandardMaterial color="#3f1d0b" roughness={0.1} />
        </mesh>
        
        {/* Steam Particles */}
        <Sparkles count={15} scale={0.4} size={2} speed={0.4} color="#ffffff" position={[0, 0.2, 0]} />
      </group>

      {/* POTTED CYBER PLANT */}
      <group position={[1.3, 0.2, 0.3]}>
        {/* Pot */}
        <mesh castShadow>
          <cylinderGeometry args={[0.12, 0.08, 0.22, 16]} />
          <meshStandardMaterial color="#334155" metalness={0.5} />
        </mesh>
        {/* Leaves */}
        <mesh position={[0, 0.2, 0]}>
          <sphereGeometry args={[0.16, 16, 16]} />
          <meshStandardMaterial color="#10b981" roughness={0.5} />
        </mesh>
      </group>

      {/* FLOATING HOLOGRAPHIC GEOMETRY */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1}>
        <mesh ref={hologramRef} position={[0, 2.2, 0]}>
          <torusKnotGeometry args={[0.3, 0.08, 128, 32]} />
          <MeshWobbleMaterial color="#00F5FF" wireframe factor={0.6} speed={2} />
        </mesh>
      </Float>

      {/* FLOATING CODE SNIPPETS & PARTICLES */}
      <Sparkles count={120} scale={[6, 4, 6]} size={3} speed={0.6} color="#00F5FF" />
      <Sparkles count={80} scale={[6, 4, 6]} size={2} speed={0.8} color="#FF4D9D" />
    </group>
  );
};
