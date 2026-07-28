"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function GoldRing() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.08;
      ref.current.rotation.y += delta * 0.12;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref}>
        <torusGeometry args={[1.3, 0.045, 32, 128]} />
        <meshStandardMaterial color="#c9a227" metalness={0.85} roughness={0.25} emissive="#c9a227" emissiveIntensity={0.12} />
      </mesh>
    </Float>
  );
}

function NavyCore() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.06;
    }
  });
  return (
    <Float speed={1.1} rotationIntensity={0.2} floatIntensity={1.1}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[0.72, 1]} />
        <meshStandardMaterial color="#132a52" metalness={0.4} roughness={0.35} emissive="#0a1a33" emissiveIntensity={0.4} />
      </mesh>
    </Float>
  );
}

function SmallSatellite({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh position={position}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial color="#c9a227" metalness={0.6} roughness={0.3} emissive="#c9a227" emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

/**
 * The abstract navy/gold composition rendered inside HeroShowcase's Canvas.
 * Kept deliberately low-poly and light-weight (a handful of primitives, one
 * environment preset) — this is decorative depth, not a product visualization.
 */
export function HeroShowcaseScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 4.2], fov: 42 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#f5f3f0" />
      <directionalLight position={[-3, -2, -2]} intensity={0.3} color="#c9a227" />
      {/* Offset right-of-center so the composition sits beside the headline, not behind it. */}
      <group position={[1.35, 0.15, 0]}>
        <NavyCore />
        <GoldRing />
        <SmallSatellite position={[1.5, 0.9, -0.4]} />
        <SmallSatellite position={[-1.3, -0.8, 0.3]} />
      </group>
      <Environment preset="city" environmentIntensity={0.35} />
    </Canvas>
  );
}
