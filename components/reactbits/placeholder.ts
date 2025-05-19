"use client";

/**
 * This file provides placeholders for the 3D assets needed by the Lanyard component.
 * In a real application, you would replace these with actual 3D models and textures.
 */

// Simple placeholder functions for GLB and texture loading
export const createPlaceholderGLB = () => {
  // Create a basic placeholder mesh
  return {
    nodes: {
      card: {
        geometry: {
          type: "PlaneGeometry",
          parameters: { width: 2, height: 3 },
        },
      },
      clip: {
        geometry: {
          type: "BoxGeometry",
          parameters: { width: 0.5, height: 0.2, depth: 0.1 },
        },
      },
      clamp: {
        geometry: {
          type: "BoxGeometry",
          parameters: { width: 0.3, height: 0.1, depth: 0.1 },
        },
      },
    },
    materials: {
      base: { map: { anisotropy: 16 } },
      metal: { roughness: 0.3 },
    },
  };
};

// Placeholder for lanyard texture
export const createPlaceholderTexture = () => {
  return {
    wrapS: 1000, // RepeatWrapping
    wrapT: 1000, // RepeatWrapping,
    repeat: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      set: (_x: number, _y: number) => {},
    },
  };
};

// Mock useGLTF and useTexture for testing without actual assets
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockUseGLTF = (_path: string) => createPlaceholderGLB();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const mockUseTexture = (_path: string) => createPlaceholderTexture();
