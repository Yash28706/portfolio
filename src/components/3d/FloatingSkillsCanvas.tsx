import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { SKILLS, Skill } from '../../data/portfolioData';

interface SkillSphereProps {
  skill: Skill;
  position: [number, number, number];
}

const SkillSphere: React.FC<SkillSphereProps> = ({ skill, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.008;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
      <group position={position}>
        <Sphere
          ref={meshRef}
          args={[0.55, 32, 32]}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          scale={hovered ? 1.25 : 1}
        >
          <MeshDistortMaterial
            color={hovered ? '#00F5FF' : skill.iconColor}
            emissive={hovered ? '#00F5FF' : skill.iconColor}
            emissiveIntensity={hovered ? 0.8 : 0.25}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </Sphere>

        <Text
          position={[0, 0, 0.6]}
          fontSize={0.22}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/spacegrotesk/v16/V8mQoQDjQSkFtoMM3T6r8E7BF5U0.woff"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
};

export const FloatingSkillsCanvas: React.FC = () => {
  // Compute positions in 3D grid layout
  const getPosition = (index: number): [number, number, number] => {
    const cols = 5;
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = (col - 2) * 1.8;
    const y = (1 - row) * 1.6;
    const z = (Math.sin(index) * 0.5);
    return [x, y, z];
  };

  return (
    <div className="w-full h-[550px] relative rounded-2xl overflow-hidden glass-panel border border-[#00F5FF]/20 shadow-cyber-neon">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 50 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00F5FF" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#FF4D9D" />

        {SKILLS.map((skill, index) => (
          <SkillSphere key={skill.name} skill={skill} position={getPosition(index)} />
        ))}

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} maxPolarAngle={Math.PI / 1.8} minPolarAngle={Math.PI / 3} />
      </Canvas>
      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none text-xs text-cyan-400/70 uppercase tracking-widest font-mono">
        ✦ Drag to Rotate 3D Skill Orbs • Hover to Ignite Glow ✦
      </div>
    </div>
  );
};
