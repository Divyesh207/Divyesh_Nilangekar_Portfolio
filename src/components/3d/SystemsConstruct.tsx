"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface SystemsCoreProps {
  isStatic?: boolean;
}

function SystemsCore({ isStatic = false }: SystemsCoreProps) {
  const groupRef = useRef<THREE.Group>(null);
  const ringRef = useRef<THREE.Group>(null);
  const pointerTarget = useRef({ x: 0, y: 0 });

  // Handle pointer tracking safely via window events
  React.useEffect(() => {
    if (isStatic) return;

    const handlePointerMove = (e: MouseEvent) => {
      // Normalized coordinates [-1, 1]
      pointerTarget.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointerTarget.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isStatic]);

  // Create clean architectural geometries with wireframe edges for technical precision
  const boxGeom = useMemo(() => new THREE.BoxGeometry(1.6, 0.28, 1.6), []);
  const boxEdges = useMemo(() => new THREE.EdgesGeometry(boxGeom), [boxGeom]);

  const coreGeom = useMemo(() => new THREE.BoxGeometry(0.85, 0.85, 0.85), []);
  const coreEdges = useMemo(() => new THREE.EdgesGeometry(coreGeom), [coreGeom]);

  const orbitGeom = useMemo(() => new THREE.RingGeometry(2.1, 2.12, 64), []);

  useFrame((state, delta) => {
    if (isStatic || !groupRef.current) return;

    const time = state.clock.getElapsedTime();

    // Subtle natural rotation
    groupRef.current.rotation.y += delta * 0.18;
    groupRef.current.rotation.x = Math.sin(time * 0.4) * 0.08;

    // Smooth dampening towards pointer
    const targetRotY = pointerTarget.current.x * 0.4;
    const targetRotX = -pointerTarget.current.y * 0.3;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      groupRef.current.rotation.y + targetRotY * 0.02,
      0.05
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotX,
      0.05
    );

    // Subtle gentle floating oscillation
    groupRef.current.position.y = Math.sin(time * 0.8) * 0.12;

    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.1;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.5) * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Central Architecture Core */}
      <mesh geometry={coreGeom}>
        <meshStandardMaterial
          color="#0c0e14"
          roughness={0.3}
          metalness={0.8}
          polygonOffset
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
        />
      </mesh>
      <lineSegments geometry={coreEdges}>
        <lineBasicMaterial color="#10b981" transparent opacity={0.65} />
      </lineSegments>

      {/* Layer 1: Base Tier Plate */}
      <group position={[0, -0.75, 0]}>
        <mesh geometry={boxGeom}>
          <meshStandardMaterial color="#12151c" roughness={0.4} metalness={0.6} />
        </mesh>
        <lineSegments geometry={boxEdges}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.25} />
        </lineSegments>
      </group>

      {/* Layer 2: Top Tier Plate */}
      <group position={[0, 0.75, 0]}>
        <mesh geometry={boxGeom}>
          <meshStandardMaterial color="#12151c" roughness={0.4} metalness={0.6} />
        </mesh>
        <lineSegments geometry={boxEdges}>
          <lineBasicMaterial color="#ffffff" transparent opacity={0.25} />
        </lineSegments>
      </group>

      {/* Outer Data Bus Orbit Ring */}
      <group ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <mesh geometry={orbitGeom}>
          <meshBasicMaterial color="#ffffff" side={THREE.DoubleSide} transparent opacity={0.15} />
        </mesh>
      </group>

      {/* Precision Datum Corner Nodes */}
      {[
        [-0.9, -0.9, -0.9],
        [0.9, -0.9, -0.9],
        [-0.9, 0.9, -0.9],
        [0.9, 0.9, -0.9],
        [-0.9, -0.9, 0.9],
        [0.9, -0.9, 0.9],
        [-0.9, 0.9, 0.9],
        [0.9, 0.9, 0.9],
      ].map((pos, idx) => (
        <mesh key={idx} position={pos as [number, number, number]}>
          <boxGeometry args={[0.04, 0.04, 0.04]} />
          <meshBasicMaterial color="#10b981" transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

interface SystemsConstructProps {
  isStatic?: boolean;
}

export function SystemsConstruct({ isStatic = false }: SystemsConstructProps) {
  return (
    <div className="w-full h-full relative pointer-events-none select-none">
      <Canvas
        camera={{ position: [0, 0.2, 5.2], fov: 38 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[8, 12, 6]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-8, -6, -4]} intensity={0.4} color="#a1a1aa" />
        <pointLight position={[0, 0, 2]} color="#10b981" intensity={0.8} distance={6} />
        <SystemsCore isStatic={isStatic} />
      </Canvas>
    </div>
  );
}
