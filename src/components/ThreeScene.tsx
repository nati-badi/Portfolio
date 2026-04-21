import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 5000 }) {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        p[i * 3] = (Math.random() - 0.5) * 50;
        p[i * 3 + 1] = (Math.random() - 0.5) * 50;
        p[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return p;
  }, [count]);

  return (
    <Points positions={points} stride={3}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingShapes() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 10) / 4 + state.mouse.y / 10, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 10) / 4 + state.mouse.x / 10, 0.05);
  });

  return (
    <group ref={group}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Sphere args={[2, 64, 64]} position={[4, 2, -5]}>
          <MeshDistortMaterial
            color="#ffffff"
            transparent
            opacity={0.05}
            distort={0.3}
            speed={1.5}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>
      
      <Float speed={1} rotationIntensity={1} floatIntensity={1}>
        <Sphere args={[1.5, 64, 64]} position={[-6, -4, -10]}>
          <MeshDistortMaterial
            color="#3b82f6"
            transparent
            opacity={0.03}
            distort={0.4}
            speed={2}
            roughness={0.1}
          />
        </Sphere>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="fixed inset-0 -z-10 bg-ui-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.08)_0,transparent_60%)]" />
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[20, 20, 20]} intensity={0.5} />
        <FloatingShapes />
        <Particles count={2000} />
      </Canvas>
    </div>
  );
}
