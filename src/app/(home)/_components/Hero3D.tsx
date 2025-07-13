'use client';

import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
// biome-ignore lint/performance/noNamespaceImport: necessary
import * as THREE from 'three';

function BlackMagicCube() {
  // biome-ignore lint/style/noNonNullAssertion: necessary
  const group = useRef<THREE.Group>(null!);

  // Rotação suave para manter o cubo sempre visível e enfatizar 3D
  useFrame((_, delta) => {
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x += delta * 0.1;
  });

  // Prepara geometria, posições e material preto metálico
  const { geometry, material, cubes } = useMemo(() => {
    const geo = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const mat = new THREE.MeshPhysicalMaterial({
      color: '#282828',
      metalness: 1,
      roughness: 1,
      clearcoat: 1,
      clearcoatRoughness: 1,
    });
    const positions: [number, number, number][] = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          positions.push([x, y, z]);
        }
      }
    }
    return { geometry: geo, material: mat, cubes: positions };
  }, []);

  return (
    <group ref={group} scale={[0.7, 0.7, 0.7]}>
      {cubes.map((pos, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: it is necessary
        <mesh geometry={geometry} key={i} material={material} position={pos} />
      ))}
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="h-[200px] w-[200px] overflow-visible">
      <Canvas
        camera={{ position: [4, 4, 4], fov: 30 }}
        style={{ width: '100%', height: '100%' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1} position={[5, 5, 5]} />
        <Environment preset="studio" />
        <BlackMagicCube />
        <OrbitControls
          autoRotate
          autoRotateSpeed={3}
          enablePan={false}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}
