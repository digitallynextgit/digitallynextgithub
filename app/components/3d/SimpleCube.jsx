'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import * as THREE from 'three';

// Fallback cube if model doesn't load
export function SimpleCube() {
  const meshRef = useRef();
  
  useEffect(() => {
    if (meshRef.current) {
      // GSAP animation
      gsap.to(meshRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }
  }, []);

  // Additional subtle rotation animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial 
        color="#dc3333" 
        metalness={0.7} 
        roughness={0.2} 
        envMapIntensity={1}
      />
    </mesh>
  );
}

// 3D Model Component with error handling
export function Model({ onError }) {
  const groupRef = useRef();
  
  // Try to load the model with error handling
  let scene;
  try {
    const gltf = useGLTF('/3d/cube.glb');
    scene = gltf.scene;
  } catch (error) {
    console.error('Error loading model:', error);
    if (onError) {
      // Call the error handler only once on first render
      React.useEffect(() => {
        onError();
      }, []);
    }
    return <SimpleCube />;
  }
  
  useEffect(() => {
    if (groupRef.current) {
      // GSAP animation
      gsap.to(groupRef.current.rotation, {
        y: Math.PI * 2,
        duration: 15,
        repeat: -1,
        ease: "power1.inOut"
      });
      
      gsap.to(groupRef.current.position, {
        y: 0.2,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  // Additional subtle movement
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
  });

  // If no scene was loaded, show the fallback
  if (!scene) {
    return <SimpleCube />;
  }

  return (
    <group ref={groupRef}>
      <primitive 
        object={scene} 
        scale={1.8} 
        position={[0, -0.5, 0]} 
      />
    </group>
  );
}

export default SimpleCube; 