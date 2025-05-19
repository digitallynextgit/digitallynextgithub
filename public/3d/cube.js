import * as THREE from 'three';

export function createCube() {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshStandardMaterial({ 
    color: '#dc3333',
    metalness: 0.5,
    roughness: 0.2
  });
  const cube = new THREE.Mesh(geometry, material);
  
  return cube;
}

export function animateCube(cube) {
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
} 