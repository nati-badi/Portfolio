import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, MeshDistortMaterial, Float, useCursor } from '@react-three/drei';
import * as THREE from 'three';

export default function InteractiveName3D() {
  const meshRef = useRef<THREE.Group>(null);
  const materialRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);
  const mouse = useRef(new THREE.Vector2(0, 0));
  
  useCursor(hovered);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    // Smooth mouse tracking
    mouse.current.lerp(state.mouse, 0.1);
    
    // Dramatic tilt and position shift based on mouse
    const targetRotationX = hovered ? -mouse.current.y * 0.5 : 0;
    const targetRotationY = hovered ? mouse.current.x * 0.5 : 0;
    const targetZ = hovered ? 1 : 0;
    
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetRotationX, 0.08);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.08);
    meshRef.current.position.z = THREE.MathUtils.lerp(meshRef.current.position.z, targetZ, 0.08);

    // Dynamic scale pulsing
    const targetScale = hovered ? 1.15 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    
    // Material animation update
    if (materialRef.current) {
        materialRef.current.distort = THREE.MathUtils.lerp(
            materialRef.current.distort, 
            hovered ? 0.45 : 0.05, 
            0.1
        );
        materialRef.current.speed = THREE.MathUtils.lerp(
            materialRef.current.speed, 
            hovered ? 5 : 1, 
            0.1
        );
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        <Text
          font="https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff"
          fontSize={1.1}
          maxWidth={10}
          lineHeight={1}
          letterSpacing={0.08}
          textAlign="center"
          position={[0, 0, 0]}
        >
          NATNAEL BADIGO
          <MeshDistortMaterial
            ref={materialRef}
            color={hovered ? "#3b82f6" : "#ffffff"}
            speed={1}
            distort={0.05}
            roughness={0}
            metalness={1}
            emissive={hovered ? "#1e40af" : "#000000"}
            emissiveIntensity={hovered ? 2 : 0}
          />
        </Text>
      </Float>
      
      {/* Dynamic Aura */}
      <mesh position={[0, 0, -0.8]} scale={hovered ? [1.2, 1.2, 1] : [1, 1, 1]}>
        <planeGeometry args={[10, 3]} />
        <meshBasicMaterial 
          color="#3b82f6" 
          transparent 
          opacity={hovered ? 0.3 : 0} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
