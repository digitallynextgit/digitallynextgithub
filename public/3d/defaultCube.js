// Default fallback cube model
export default {
  metadata: {
    version: 4.5,
    type: 'Object',
    generator: 'Custom Fallback Model'
  },
  geometries: [
    {
      uuid: 'cube-geo',
      type: 'BoxGeometry',
      width: 1,
      height: 1,
      depth: 1,
      widthSegments: 1,
      heightSegments: 1,
      depthSegments: 1
    }
  ],
  materials: [
    {
      uuid: 'red-material',
      type: 'MeshStandardMaterial',
      color: '#dc3333',
      roughness: 0.2,
      metalness: 0.7,
      emissive: '#000000',
      side: 2
    }
  ],
  object: {
    uuid: 'cube-object',
    type: 'Mesh',
    name: 'DefaultCube',
    geometry: 'cube-geo',
    material: 'red-material',
    position: [0, 0, 0],
    rotation: [0, 0, 0],
    scale: [1.5, 1.5, 1.5]
  }
}; 