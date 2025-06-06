export const E2E_CONFIG = {
  Animator: {
    additive: {
      category: "Animator",
      caseFileName: "animator-additive",
      threshold: 0.1
    },
    blendShape: {
      category: "Animator",
      caseFileName: "animator-blendShape",
      threshold: 0.1
    },
    blendShapeQuantization: {
      category: "Animator",
      caseFileName: "animator-blendShape-quantization",
      threshold: 0.1
    },
    crossfade: {
      category: "Animator",
      caseFileName: "animator-crossfade",
      threshold: 0.1
    },
    customAnimationClip: {
      category: "Animator",
      caseFileName: "animator-customAnimationClip",
      threshold: 0.1
    },
    customBlendShape: {
      category: "Animator",
      caseFileName: "animator-customBlendShape",
      threshold: 0.1
    },
    multiSubMeshBlendShape: {
      category: "Animator",
      caseFileName: "animator-multiSubMeshBlendShape",
      threshold: 0.1
    },
    event: {
      category: "Animator",
      caseFileName: "animator-event",
      threshold: 0.1
    },
    play: {
      category: "Animator",
      caseFileName: "animator-play",
      threshold: 0.1
    },
    playBackWards: {
      category: "Animator",
      caseFileName: "animator-play-backwards",
      threshold: 0.1
    },
    playBeforeActive: {
      category: "Animator",
      caseFileName: "animator-play-beforeActive",
      threshold: 0.1
    },
    reuse: {
      category: "Animator",
      caseFileName: "animator-reuse",
      threshold: 0.1
    },
    stateMachineScript: {
      category: "Animator",
      caseFileName: "animator-stateMachineScript",
      threshold: 0.1
    },
    stateMachine: {
      category: "Animator",
      caseFileName: "animator-stateMachine",
      threshold: 0.1
    }
  },
  GLTF: {
    meshopt: {
      category: "GLTF",
      caseFileName: "gltf-meshopt",
      threshold: 0.1
    },
    blendShape: {
      category: "GLTF",
      caseFileName: "gltf-blendshape",
      threshold: 0.1
    }
  },

  Material: {
    blendMode: {
      category: "Material",
      caseFileName: "material-blendMode",
      threshold: 0.1
    },
    "blinn-phong": {
      category: "Material",
      caseFileName: "material-blinn-phong",
      threshold: 0.1
    },
    "pbr-clearcoat": {
      category: "Material",
      caseFileName: "material-pbr-clearcoat",
      threshold: 0.1
    },
    pbr: {
      category: "Material",
      caseFileName: "material-pbr",
      threshold: 0.1
    },
    shaderLab: {
      category: "Material",
      caseFileName: "material-shaderLab",
      threshold: 0.1
    },
    shaderLabMRT: {
      category: "Material",
      caseFileName: "shaderLab-mrt",
      threshold: 0.1
    },
    shaderReplacement: {
      category: "Material",
      caseFileName: "material-shaderReplacement",
      threshold: 0.1
    },
    unlit: {
      category: "Material",
      caseFileName: "material-unlit",
      threshold: 0.1
    },
    "shaderLab-renderState": {
      category: "Material",
      caseFileName: "shaderLab-renderState",
      threshold: 0.1
    },
    LUT: {
      category: "Material",
      caseFileName: "material-LUT",
      threshold: 0.1
    }
  },
  Texture: {
    sRGB: {
      category: "Texture",
      caseFileName: "texture-sRGB-KTX2",
      threshold: 0.1
    },
    R8G8: {
      category: "Texture",
      caseFileName: "texture-R8G8",
      threshold: 0.1
    }
  },
  Shadow: {
    basic: {
      category: "Shadow",
      caseFileName: "shadow-basic",
      threshold: 0.1
    },
    transparent: {
      category: "Shadow",
      caseFileName: "shadow-transparent",
      threshold: 0.1
    }
  },
  Primitive: {
    capsule: {
      category: "Primitive",
      caseFileName: "primitive-capsule",
      threshold: 0.1
    },
    cone: {
      category: "Primitive",
      caseFileName: "primitive-cone",
      threshold: 0.1
    },
    cuboid: {
      category: "Primitive",
      caseFileName: "primitive-cuboid",
      threshold: 0.1
    },
    cylinder: {
      category: "Primitive",
      caseFileName: "primitive-cylinder",
      threshold: 0.1
    },
    plane: {
      category: "Primitive",
      caseFileName: "primitive-plane",
      threshold: 0.1
    },
    sphere: {
      category: "Primitive",
      caseFileName: "primitive-sphere",
      threshold: 0.1
    },
    torus: {
      category: "Primitive",
      caseFileName: "primitive-torus",
      threshold: 0.1
    }
  },
  Camera: {
    opaqueTexture: {
      category: "Camera",
      caseFileName: "camera-opaque-texture",
      threshold: 0.1
    },
    fxaa: {
      category: "Camera",
      caseFileName: "camera-fxaa",
      threshold: 0.01
    }
  },
  Physics: {
    "physx-collision": {
      category: "Physics",
      caseFileName: "physx-collision",
      threshold: 0.1
    },
    "LitePhysics Collision Group": {
      category: "Physics",
      caseFileName: "litePhysics-collision-group",
      threshold: 0.1
    },
    "PhysXPhysics Collision Group": {
      category: "Physics",
      caseFileName: "physx-collision-group",
      threshold: 0.1
    },
    "PhysXPhysics Custom Url": {
      category: "Physics",
      caseFileName: "physx-customUrl",
      threshold: 0.1
    }
  },
  Particle: {
    particleDream: {
      category: "Particle",
      caseFileName: "particleRenderer-dream",
      threshold: 0.1
    },
    forceOverLifetime: {
      category: "Particle",
      caseFileName: "particleRenderer-force",
      threshold: 0.1
    },
    textureSheetAnimation: {
      category: "Particle",
      caseFileName: "particleRenderer-textureSheetAnimation",
      threshold: 0.1
    },
    particleShapeMesh: {
      category: "Particle",
      caseFileName: "particleRenderer-shape-mesh",
      threshold: 0.1
    },
    particleEmissive: {
      category: "Particle",
      caseFileName: "particleRenderer-emissive",
      threshold: 0.1
    }
  },
  PostProcess: {
    HDRBloomACES: {
      category: "PostProcess",
      caseFileName: "postProcess-HDR-bloom-ACES",
      threshold: 0.1
    },
    HDRBloomNeutral: {
      category: "PostProcess",
      caseFileName: "postProcess-HDR-bloom-neutral",
      threshold: 0.1
    },
    LDRBloomNeutral: {
      category: "PostProcess",
      caseFileName: "postProcess-LDR-bloom-neutral",
      threshold: 0.1
    },
    customPass: {
      category: "PostProcess",
      caseFileName: "postProcess-customPass",
      threshold: 0.1
    }
  },
  SpriteMask: {
    CustomStencil: {
      category: "SpriteMask",
      caseFileName: "spriteMask-customStencil",
      threshold: 0.1
    }
  },
  Text: {
    TypedText: {
      category: "Text",
      caseFileName: "text-typed",
      threshold: 0.1
    }
  },
  Other: {
    ProjectLoader: {
      category: "Advance",
      caseFileName: "project-loader",
      threshold: 0.1
    },
    MultiSceneClear: {
      category: "Advance",
      caseFileName: "multi-scene-clear",
      threshold: 0.1
    },
    MultiSceneNoClear: {
      category: "Advance",
      caseFileName: "multi-scene-no-clear",
      threshold: 0.1
    },
    MultiCameraNoClear: {
      category: "Advance",
      caseFileName: "multi-camera-no-clear",
      threshold: 0.1
    },

    CanvasTransparency: {
      category: "Advance",
      caseFileName: "canvas-transparency",
      threshold: 0.01
    }
  }
};
