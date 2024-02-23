var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i7254 = root || request.c( 'UnityEngine.JointSpring' )
  var i7255 = data
  i7254.spring = i7255[0]
  i7254.damper = i7255[1]
  i7254.targetPosition = i7255[2]
  return i7254
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i7256 = root || request.c( 'UnityEngine.JointMotor' )
  var i7257 = data
  i7256.m_TargetVelocity = i7257[0]
  i7256.m_Force = i7257[1]
  i7256.m_FreeSpin = i7257[2]
  return i7256
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i7258 = root || request.c( 'UnityEngine.JointLimits' )
  var i7259 = data
  i7258.m_Min = i7259[0]
  i7258.m_Max = i7259[1]
  i7258.m_Bounciness = i7259[2]
  i7258.m_BounceMinVelocity = i7259[3]
  i7258.m_ContactDistance = i7259[4]
  i7258.minBounce = i7259[5]
  i7258.maxBounce = i7259[6]
  return i7258
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i7260 = root || request.c( 'UnityEngine.JointDrive' )
  var i7261 = data
  i7260.m_PositionSpring = i7261[0]
  i7260.m_PositionDamper = i7261[1]
  i7260.m_MaximumForce = i7261[2]
  return i7260
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i7262 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i7263 = data
  i7262.m_Spring = i7263[0]
  i7262.m_Damper = i7263[1]
  return i7262
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i7264 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i7265 = data
  i7264.m_Limit = i7265[0]
  i7264.m_Bounciness = i7265[1]
  i7264.m_ContactDistance = i7265[2]
  return i7264
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i7266 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i7267 = data
  i7266.m_ExtremumSlip = i7267[0]
  i7266.m_ExtremumValue = i7267[1]
  i7266.m_AsymptoteSlip = i7267[2]
  i7266.m_AsymptoteValue = i7267[3]
  i7266.m_Stiffness = i7267[4]
  return i7266
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i7268 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i7269 = data
  i7268.m_LowerAngle = i7269[0]
  i7268.m_UpperAngle = i7269[1]
  return i7268
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i7270 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i7271 = data
  i7270.m_MotorSpeed = i7271[0]
  i7270.m_MaximumMotorTorque = i7271[1]
  return i7270
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i7272 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i7273 = data
  i7272.m_DampingRatio = i7273[0]
  i7272.m_Frequency = i7273[1]
  i7272.m_Angle = i7273[2]
  return i7272
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i7274 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i7275 = data
  i7274.m_LowerTranslation = i7275[0]
  i7274.m_UpperTranslation = i7275[1]
  return i7274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i7276 = root || new pc.UnityMaterial()
  var i7277 = data
  i7276.name = i7277[0]
  request.r(i7277[1], i7277[2], 0, i7276, 'shader')
  i7276.renderQueue = i7277[3]
  i7276.enableInstancing = !!i7277[4]
  var i7279 = i7277[5]
  var i7278 = []
  for(var i = 0; i < i7279.length; i += 1) {
    i7278.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i7279[i + 0]) );
  }
  i7276.floatParameters = i7278
  var i7281 = i7277[6]
  var i7280 = []
  for(var i = 0; i < i7281.length; i += 1) {
    i7280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i7281[i + 0]) );
  }
  i7276.colorParameters = i7280
  var i7283 = i7277[7]
  var i7282 = []
  for(var i = 0; i < i7283.length; i += 1) {
    i7282.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i7283[i + 0]) );
  }
  i7276.vectorParameters = i7282
  var i7285 = i7277[8]
  var i7284 = []
  for(var i = 0; i < i7285.length; i += 1) {
    i7284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i7285[i + 0]) );
  }
  i7276.textureParameters = i7284
  var i7287 = i7277[9]
  var i7286 = []
  for(var i = 0; i < i7287.length; i += 1) {
    i7286.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i7287[i + 0]) );
  }
  i7276.materialFlags = i7286
  return i7276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i7290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i7291 = data
  i7290.name = i7291[0]
  i7290.value = i7291[1]
  return i7290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i7294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i7295 = data
  i7294.name = i7295[0]
  i7294.value = new pc.Color(i7295[1], i7295[2], i7295[3], i7295[4])
  return i7294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i7298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i7299 = data
  i7298.name = i7299[0]
  i7298.value = new pc.Vec4( i7299[1], i7299[2], i7299[3], i7299[4] )
  return i7298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i7302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i7303 = data
  i7302.name = i7303[0]
  request.r(i7303[1], i7303[2], 0, i7302, 'value')
  return i7302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i7306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i7307 = data
  i7306.name = i7307[0]
  i7306.enabled = !!i7307[1]
  return i7306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i7308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i7309 = data
  i7308.name = i7309[0]
  i7308.width = i7309[1]
  i7308.height = i7309[2]
  i7308.mipmapCount = i7309[3]
  i7308.anisoLevel = i7309[4]
  i7308.filterMode = i7309[5]
  i7308.hdr = !!i7309[6]
  i7308.format = i7309[7]
  i7308.wrapMode = i7309[8]
  i7308.alphaIsTransparency = !!i7309[9]
  i7308.alphaSource = i7309[10]
  return i7308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i7310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i7311 = data
  i7310.position = new pc.Vec3( i7311[0], i7311[1], i7311[2] )
  i7310.scale = new pc.Vec3( i7311[3], i7311[4], i7311[5] )
  i7310.rotation = new pc.Quat(i7311[6], i7311[7], i7311[8], i7311[9])
  return i7310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i7312 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i7313 = data
  request.r(i7313[0], i7313[1], 0, i7312, 'animatorController')
  request.r(i7313[2], i7313[3], 0, i7312, 'avatar')
  i7312.updateMode = i7313[4]
  i7312.hasTransformHierarchy = !!i7313[5]
  i7312.applyRootMotion = !!i7313[6]
  var i7315 = i7313[7]
  var i7314 = []
  for(var i = 0; i < i7315.length; i += 2) {
  request.r(i7315[i + 0], i7315[i + 1], 2, i7314, '')
  }
  i7312.humanBones = i7314
  i7312.enabled = !!i7313[8]
  return i7312
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i7318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i7319 = data
  i7318.enabled = !!i7319[0]
  request.r(i7319[1], i7319[2], 0, i7318, 'sharedMaterial')
  var i7321 = i7319[3]
  var i7320 = []
  for(var i = 0; i < i7321.length; i += 2) {
  request.r(i7321[i + 0], i7321[i + 1], 2, i7320, '')
  }
  i7318.sharedMaterials = i7320
  i7318.receiveShadows = !!i7319[4]
  i7318.shadowCastingMode = i7319[5]
  i7318.sortingLayerID = i7319[6]
  i7318.sortingOrder = i7319[7]
  i7318.lightmapIndex = i7319[8]
  i7318.lightmapSceneIndex = i7319[9]
  i7318.lightmapScaleOffset = new pc.Vec4( i7319[10], i7319[11], i7319[12], i7319[13] )
  i7318.lightProbeUsage = i7319[14]
  i7318.reflectionProbeUsage = i7319[15]
  request.r(i7319[16], i7319[17], 0, i7318, 'sharedMesh')
  var i7323 = i7319[18]
  var i7322 = []
  for(var i = 0; i < i7323.length; i += 2) {
  request.r(i7323[i + 0], i7323[i + 1], 2, i7322, '')
  }
  i7318.bones = i7322
  i7318.updateWhenOffscreen = !!i7319[19]
  i7318.localBounds = i7319[20]
  request.r(i7319[21], i7319[22], 0, i7318, 'rootBone')
  var i7325 = i7319[23]
  var i7324 = []
  for(var i = 0; i < i7325.length; i += 1) {
    i7324.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i7325[i + 0]) );
  }
  i7318.blendShapesWeights = i7324
  return i7318
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i7330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i7331 = data
  i7330.weight = i7331[0]
  return i7330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i7332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i7333 = data
  i7332.name = i7333[0]
  i7332.tagId = i7333[1]
  i7332.enabled = !!i7333[2]
  i7332.isStatic = !!i7333[3]
  i7332.layer = i7333[4]
  return i7332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i7334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i7335 = data
  i7334.name = i7335[0]
  i7334.halfPrecision = !!i7335[1]
  i7334.vertexCount = i7335[2]
  i7334.aabb = i7335[3]
  var i7337 = i7335[4]
  var i7336 = []
  for(var i = 0; i < i7337.length; i += 1) {
    i7336.push( !!i7337[i + 0] );
  }
  i7334.streams = i7336
  i7334.vertices = i7335[5]
  var i7339 = i7335[6]
  var i7338 = []
  for(var i = 0; i < i7339.length; i += 1) {
    i7338.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i7339[i + 0]) );
  }
  i7334.subMeshes = i7338
  var i7341 = i7335[7]
  var i7340 = []
  for(var i = 0; i < i7341.length; i += 16) {
    i7340.push( new pc.Mat4().setData(i7341[i + 0], i7341[i + 1], i7341[i + 2], i7341[i + 3],  i7341[i + 4], i7341[i + 5], i7341[i + 6], i7341[i + 7],  i7341[i + 8], i7341[i + 9], i7341[i + 10], i7341[i + 11],  i7341[i + 12], i7341[i + 13], i7341[i + 14], i7341[i + 15]) );
  }
  i7334.bindposes = i7340
  var i7343 = i7335[8]
  var i7342 = []
  for(var i = 0; i < i7343.length; i += 1) {
    i7342.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i7343[i + 0]) );
  }
  i7334.blendShapes = i7342
  return i7334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i7348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i7349 = data
  i7348.triangles = i7349[0]
  return i7348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i7354 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i7355 = data
  i7354.name = i7355[0]
  var i7357 = i7355[1]
  var i7356 = []
  for(var i = 0; i < i7357.length; i += 1) {
    i7356.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i7357[i + 0]) );
  }
  i7354.frames = i7356
  return i7354
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i7358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i7359 = data
  request.r(i7359[0], i7359[1], 0, i7358, 'sharedMesh')
  return i7358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i7360 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i7361 = data
  request.r(i7361[0], i7361[1], 0, i7360, 'additionalVertexStreams')
  i7360.enabled = !!i7361[2]
  request.r(i7361[3], i7361[4], 0, i7360, 'sharedMaterial')
  var i7363 = i7361[5]
  var i7362 = []
  for(var i = 0; i < i7363.length; i += 2) {
  request.r(i7363[i + 0], i7363[i + 1], 2, i7362, '')
  }
  i7360.sharedMaterials = i7362
  i7360.receiveShadows = !!i7361[6]
  i7360.shadowCastingMode = i7361[7]
  i7360.sortingLayerID = i7361[8]
  i7360.sortingOrder = i7361[9]
  i7360.lightmapIndex = i7361[10]
  i7360.lightmapSceneIndex = i7361[11]
  i7360.lightmapScaleOffset = new pc.Vec4( i7361[12], i7361[13], i7361[14], i7361[15] )
  i7360.lightProbeUsage = i7361[16]
  i7360.reflectionProbeUsage = i7361[17]
  return i7360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i7364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i7365 = data
  i7364.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i7365[0], i7364.main)
  i7364.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i7365[1], i7364.colorBySpeed)
  i7364.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i7365[2], i7364.colorOverLifetime)
  i7364.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i7365[3], i7364.emission)
  i7364.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i7365[4], i7364.rotationBySpeed)
  i7364.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i7365[5], i7364.rotationOverLifetime)
  i7364.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i7365[6], i7364.shape)
  i7364.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i7365[7], i7364.sizeBySpeed)
  i7364.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i7365[8], i7364.sizeOverLifetime)
  i7364.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i7365[9], i7364.textureSheetAnimation)
  i7364.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i7365[10], i7364.velocityOverLifetime)
  i7364.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i7365[11], i7364.noise)
  i7364.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i7365[12], i7364.inheritVelocity)
  i7364.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i7365[13], i7364.forceOverLifetime)
  i7364.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i7365[14], i7364.limitVelocityOverLifetime)
  i7364.useAutoRandomSeed = !!i7365[15]
  i7364.randomSeed = i7365[16]
  return i7364
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i7366 = root || new pc.ParticleSystemMain()
  var i7367 = data
  i7366.duration = i7367[0]
  i7366.loop = !!i7367[1]
  i7366.prewarm = !!i7367[2]
  i7366.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[3], i7366.startDelay)
  i7366.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[4], i7366.startLifetime)
  i7366.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[5], i7366.startSpeed)
  i7366.startSize3D = !!i7367[6]
  i7366.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[7], i7366.startSizeX)
  i7366.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[8], i7366.startSizeY)
  i7366.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[9], i7366.startSizeZ)
  i7366.startRotation3D = !!i7367[10]
  i7366.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[11], i7366.startRotationX)
  i7366.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[12], i7366.startRotationY)
  i7366.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[13], i7366.startRotationZ)
  i7366.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7367[14], i7366.startColor)
  i7366.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7367[15], i7366.gravityModifier)
  i7366.simulationSpace = i7367[16]
  request.r(i7367[17], i7367[18], 0, i7366, 'customSimulationSpace')
  i7366.simulationSpeed = i7367[19]
  i7366.useUnscaledTime = !!i7367[20]
  i7366.scalingMode = i7367[21]
  i7366.playOnAwake = !!i7367[22]
  i7366.maxParticles = i7367[23]
  i7366.emitterVelocityMode = i7367[24]
  i7366.stopAction = i7367[25]
  return i7366
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i7368 = root || new pc.MinMaxCurve()
  var i7369 = data
  i7368.mode = i7369[0]
  i7368.curveMin = new pc.AnimationCurve( { keys_flow: i7369[1] } )
  i7368.curveMax = new pc.AnimationCurve( { keys_flow: i7369[2] } )
  i7368.curveMultiplier = i7369[3]
  i7368.constantMin = i7369[4]
  i7368.constantMax = i7369[5]
  return i7368
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i7370 = root || new pc.MinMaxGradient()
  var i7371 = data
  i7370.mode = i7371[0]
  i7370.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7371[1], i7370.gradientMin)
  i7370.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i7371[2], i7370.gradientMax)
  i7370.colorMin = new pc.Color(i7371[3], i7371[4], i7371[5], i7371[6])
  i7370.colorMax = new pc.Color(i7371[7], i7371[8], i7371[9], i7371[10])
  return i7370
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i7372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i7373 = data
  i7372.mode = i7373[0]
  var i7375 = i7373[1]
  var i7374 = []
  for(var i = 0; i < i7375.length; i += 1) {
    i7374.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i7375[i + 0]) );
  }
  i7372.colorKeys = i7374
  var i7377 = i7373[2]
  var i7376 = []
  for(var i = 0; i < i7377.length; i += 1) {
    i7376.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i7377[i + 0]) );
  }
  i7372.alphaKeys = i7376
  return i7372
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i7378 = root || new pc.ParticleSystemColorBySpeed()
  var i7379 = data
  i7378.enabled = !!i7379[0]
  i7378.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7379[1], i7378.color)
  i7378.range = new pc.Vec2( i7379[2], i7379[3] )
  return i7378
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i7382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i7383 = data
  i7382.color = new pc.Color(i7383[0], i7383[1], i7383[2], i7383[3])
  i7382.time = i7383[4]
  return i7382
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i7386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i7387 = data
  i7386.alpha = i7387[0]
  i7386.time = i7387[1]
  return i7386
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i7388 = root || new pc.ParticleSystemColorOverLifetime()
  var i7389 = data
  i7388.enabled = !!i7389[0]
  i7388.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i7389[1], i7388.color)
  return i7388
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i7390 = root || new pc.ParticleSystemEmitter()
  var i7391 = data
  i7390.enabled = !!i7391[0]
  i7390.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7391[1], i7390.rateOverTime)
  i7390.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7391[2], i7390.rateOverDistance)
  var i7393 = i7391[3]
  var i7392 = []
  for(var i = 0; i < i7393.length; i += 1) {
    i7392.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i7393[i + 0]) );
  }
  i7390.bursts = i7392
  return i7390
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i7396 = root || new pc.ParticleSystemBurst()
  var i7397 = data
  i7396.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7397[0], i7396.count)
  i7396.cycleCount = i7397[1]
  i7396.minCount = i7397[2]
  i7396.maxCount = i7397[3]
  i7396.repeatInterval = i7397[4]
  i7396.time = i7397[5]
  return i7396
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i7398 = root || new pc.ParticleSystemRotationBySpeed()
  var i7399 = data
  i7398.enabled = !!i7399[0]
  i7398.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7399[1], i7398.x)
  i7398.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7399[2], i7398.y)
  i7398.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7399[3], i7398.z)
  i7398.separateAxes = !!i7399[4]
  i7398.range = new pc.Vec2( i7399[5], i7399[6] )
  return i7398
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i7400 = root || new pc.ParticleSystemRotationOverLifetime()
  var i7401 = data
  i7400.enabled = !!i7401[0]
  i7400.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7401[1], i7400.x)
  i7400.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7401[2], i7400.y)
  i7400.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7401[3], i7400.z)
  i7400.separateAxes = !!i7401[4]
  return i7400
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i7402 = root || new pc.ParticleSystemShape()
  var i7403 = data
  i7402.enabled = !!i7403[0]
  i7402.shapeType = i7403[1]
  i7402.randomDirectionAmount = i7403[2]
  i7402.sphericalDirectionAmount = i7403[3]
  i7402.randomPositionAmount = i7403[4]
  i7402.alignToDirection = !!i7403[5]
  i7402.radius = i7403[6]
  i7402.radiusMode = i7403[7]
  i7402.radiusSpread = i7403[8]
  i7402.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7403[9], i7402.radiusSpeed)
  i7402.radiusThickness = i7403[10]
  i7402.angle = i7403[11]
  i7402.length = i7403[12]
  i7402.boxThickness = new pc.Vec3( i7403[13], i7403[14], i7403[15] )
  i7402.meshShapeType = i7403[16]
  request.r(i7403[17], i7403[18], 0, i7402, 'mesh')
  request.r(i7403[19], i7403[20], 0, i7402, 'meshRenderer')
  request.r(i7403[21], i7403[22], 0, i7402, 'skinnedMeshRenderer')
  i7402.useMeshMaterialIndex = !!i7403[23]
  i7402.meshMaterialIndex = i7403[24]
  i7402.useMeshColors = !!i7403[25]
  i7402.normalOffset = i7403[26]
  i7402.arc = i7403[27]
  i7402.arcMode = i7403[28]
  i7402.arcSpread = i7403[29]
  i7402.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7403[30], i7402.arcSpeed)
  i7402.donutRadius = i7403[31]
  i7402.position = new pc.Vec3( i7403[32], i7403[33], i7403[34] )
  i7402.rotation = new pc.Vec3( i7403[35], i7403[36], i7403[37] )
  i7402.scale = new pc.Vec3( i7403[38], i7403[39], i7403[40] )
  return i7402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i7404 = root || new pc.ParticleSystemSizeBySpeed()
  var i7405 = data
  i7404.enabled = !!i7405[0]
  i7404.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7405[1], i7404.x)
  i7404.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7405[2], i7404.y)
  i7404.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7405[3], i7404.z)
  i7404.separateAxes = !!i7405[4]
  i7404.range = new pc.Vec2( i7405[5], i7405[6] )
  return i7404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i7406 = root || new pc.ParticleSystemSizeOverLifetime()
  var i7407 = data
  i7406.enabled = !!i7407[0]
  i7406.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7407[1], i7406.x)
  i7406.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7407[2], i7406.y)
  i7406.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7407[3], i7406.z)
  i7406.separateAxes = !!i7407[4]
  return i7406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i7408 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i7409 = data
  i7408.enabled = !!i7409[0]
  i7408.mode = i7409[1]
  i7408.animation = i7409[2]
  i7408.numTilesX = i7409[3]
  i7408.numTilesY = i7409[4]
  i7408.useRandomRow = !!i7409[5]
  i7408.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7409[6], i7408.frameOverTime)
  i7408.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7409[7], i7408.startFrame)
  i7408.cycleCount = i7409[8]
  i7408.rowIndex = i7409[9]
  i7408.flipU = i7409[10]
  i7408.flipV = i7409[11]
  i7408.spriteCount = i7409[12]
  var i7411 = i7409[13]
  var i7410 = []
  for(var i = 0; i < i7411.length; i += 2) {
  request.r(i7411[i + 0], i7411[i + 1], 2, i7410, '')
  }
  i7408.sprites = i7410
  return i7408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i7414 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i7415 = data
  i7414.enabled = !!i7415[0]
  i7414.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[1], i7414.x)
  i7414.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[2], i7414.y)
  i7414.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[3], i7414.z)
  i7414.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[4], i7414.radial)
  i7414.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[5], i7414.speedModifier)
  i7414.space = i7415[6]
  i7414.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[7], i7414.orbitalX)
  i7414.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[8], i7414.orbitalY)
  i7414.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[9], i7414.orbitalZ)
  i7414.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[10], i7414.orbitalOffsetX)
  i7414.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[11], i7414.orbitalOffsetY)
  i7414.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7415[12], i7414.orbitalOffsetZ)
  return i7414
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i7416 = root || new pc.ParticleSystemNoise()
  var i7417 = data
  i7416.enabled = !!i7417[0]
  i7416.separateAxes = !!i7417[1]
  i7416.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[2], i7416.strengthX)
  i7416.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[3], i7416.strengthY)
  i7416.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[4], i7416.strengthZ)
  i7416.frequency = i7417[5]
  i7416.damping = !!i7417[6]
  i7416.octaveCount = i7417[7]
  i7416.octaveMultiplier = i7417[8]
  i7416.octaveScale = i7417[9]
  i7416.quality = i7417[10]
  i7416.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[11], i7416.scrollSpeed)
  i7416.scrollSpeedMultiplier = i7417[12]
  i7416.remapEnabled = !!i7417[13]
  i7416.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[14], i7416.remapX)
  i7416.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[15], i7416.remapY)
  i7416.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[16], i7416.remapZ)
  i7416.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[17], i7416.positionAmount)
  i7416.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[18], i7416.rotationAmount)
  i7416.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7417[19], i7416.sizeAmount)
  return i7416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i7418 = root || new pc.ParticleSystemInheritVelocity()
  var i7419 = data
  i7418.enabled = !!i7419[0]
  i7418.mode = i7419[1]
  i7418.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7419[2], i7418.curve)
  return i7418
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i7420 = root || new pc.ParticleSystemForceOverLifetime()
  var i7421 = data
  i7420.enabled = !!i7421[0]
  i7420.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[1], i7420.x)
  i7420.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[2], i7420.y)
  i7420.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7421[3], i7420.z)
  i7420.space = i7421[4]
  i7420.randomized = !!i7421[5]
  return i7420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i7422 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i7423 = data
  i7422.enabled = !!i7423[0]
  i7422.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[1], i7422.limit)
  i7422.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[2], i7422.limitX)
  i7422.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[3], i7422.limitY)
  i7422.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[4], i7422.limitZ)
  i7422.dampen = i7423[5]
  i7422.separateAxes = !!i7423[6]
  i7422.space = i7423[7]
  i7422.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i7423[8], i7422.drag)
  i7422.multiplyDragByParticleSize = !!i7423[9]
  i7422.multiplyDragByParticleVelocity = !!i7423[10]
  return i7422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i7424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i7425 = data
  i7424.enabled = !!i7425[0]
  request.r(i7425[1], i7425[2], 0, i7424, 'sharedMaterial')
  var i7427 = i7425[3]
  var i7426 = []
  for(var i = 0; i < i7427.length; i += 2) {
  request.r(i7427[i + 0], i7427[i + 1], 2, i7426, '')
  }
  i7424.sharedMaterials = i7426
  i7424.receiveShadows = !!i7425[4]
  i7424.shadowCastingMode = i7425[5]
  i7424.sortingLayerID = i7425[6]
  i7424.sortingOrder = i7425[7]
  i7424.lightmapIndex = i7425[8]
  i7424.lightmapSceneIndex = i7425[9]
  i7424.lightmapScaleOffset = new pc.Vec4( i7425[10], i7425[11], i7425[12], i7425[13] )
  i7424.lightProbeUsage = i7425[14]
  i7424.reflectionProbeUsage = i7425[15]
  request.r(i7425[16], i7425[17], 0, i7424, 'mesh')
  i7424.meshCount = i7425[18]
  i7424.activeVertexStreamsCount = i7425[19]
  i7424.alignment = i7425[20]
  i7424.renderMode = i7425[21]
  i7424.sortMode = i7425[22]
  i7424.lengthScale = i7425[23]
  i7424.velocityScale = i7425[24]
  i7424.cameraVelocityScale = i7425[25]
  i7424.normalDirection = i7425[26]
  i7424.sortingFudge = i7425[27]
  i7424.minParticleSize = i7425[28]
  i7424.maxParticleSize = i7425[29]
  i7424.pivot = new pc.Vec3( i7425[30], i7425[31], i7425[32] )
  request.r(i7425[33], i7425[34], 0, i7424, 'trailMaterial')
  return i7424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i7428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i7429 = data
  request.r(i7429[0], i7429[1], 0, i7428, 'clip')
  request.r(i7429[2], i7429[3], 0, i7428, 'outputAudioMixerGroup')
  i7428.playOnAwake = !!i7429[4]
  i7428.loop = !!i7429[5]
  i7428.time = i7429[6]
  i7428.volume = i7429[7]
  i7428.pitch = i7429[8]
  i7428.enabled = !!i7429[9]
  return i7428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i7430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i7431 = data
  i7430.enabled = !!i7431[0]
  i7430.isTrigger = !!i7431[1]
  request.r(i7431[2], i7431[3], 0, i7430, 'material')
  request.r(i7431[4], i7431[5], 0, i7430, 'sharedMesh')
  i7430.convex = !!i7431[6]
  return i7430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i7432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i7433 = data
  i7432.enabled = !!i7433[0]
  i7432.aspect = i7433[1]
  i7432.orthographic = !!i7433[2]
  i7432.orthographicSize = i7433[3]
  i7432.backgroundColor = new pc.Color(i7433[4], i7433[5], i7433[6], i7433[7])
  i7432.nearClipPlane = i7433[8]
  i7432.farClipPlane = i7433[9]
  i7432.fieldOfView = i7433[10]
  i7432.depth = i7433[11]
  i7432.clearFlags = i7433[12]
  i7432.cullingMask = i7433[13]
  i7432.rect = i7433[14]
  request.r(i7433[15], i7433[16], 0, i7432, 'targetTexture')
  i7432.usePhysicalProperties = !!i7433[17]
  i7432.focalLength = i7433[18]
  i7432.sensorSize = new pc.Vec2( i7433[19], i7433[20] )
  i7432.lensShift = new pc.Vec2( i7433[21], i7433[22] )
  i7432.gateFit = i7433[23]
  return i7432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i7434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i7435 = data
  i7434.center = new pc.Vec3( i7435[0], i7435[1], i7435[2] )
  i7434.size = new pc.Vec3( i7435[3], i7435[4], i7435[5] )
  i7434.enabled = !!i7435[6]
  i7434.isTrigger = !!i7435[7]
  request.r(i7435[8], i7435[9], 0, i7434, 'material')
  return i7434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i7436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i7437 = data
  i7436.pivot = new pc.Vec2( i7437[0], i7437[1] )
  i7436.anchorMin = new pc.Vec2( i7437[2], i7437[3] )
  i7436.anchorMax = new pc.Vec2( i7437[4], i7437[5] )
  i7436.sizeDelta = new pc.Vec2( i7437[6], i7437[7] )
  i7436.anchoredPosition3D = new pc.Vec3( i7437[8], i7437[9], i7437[10] )
  i7436.rotation = new pc.Quat(i7437[11], i7437[12], i7437[13], i7437[14])
  i7436.scale = new pc.Vec3( i7437[15], i7437[16], i7437[17] )
  return i7436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i7438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i7439 = data
  i7438.enabled = !!i7439[0]
  i7438.planeDistance = i7439[1]
  i7438.referencePixelsPerUnit = i7439[2]
  i7438.isFallbackOverlay = !!i7439[3]
  i7438.renderMode = i7439[4]
  i7438.renderOrder = i7439[5]
  i7438.sortingLayerName = i7439[6]
  i7438.sortingOrder = i7439[7]
  i7438.scaleFactor = i7439[8]
  request.r(i7439[9], i7439[10], 0, i7438, 'worldCamera')
  i7438.overrideSorting = !!i7439[11]
  i7438.pixelPerfect = !!i7439[12]
  i7438.targetDisplay = i7439[13]
  i7438.overridePixelPerfect = !!i7439[14]
  return i7438
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i7440 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i7441 = data
  i7440.m_UiScaleMode = i7441[0]
  i7440.m_ReferencePixelsPerUnit = i7441[1]
  i7440.m_ScaleFactor = i7441[2]
  i7440.m_ReferenceResolution = new pc.Vec2( i7441[3], i7441[4] )
  i7440.m_ScreenMatchMode = i7441[5]
  i7440.m_MatchWidthOrHeight = i7441[6]
  i7440.m_PhysicalUnit = i7441[7]
  i7440.m_FallbackScreenDPI = i7441[8]
  i7440.m_DefaultSpriteDPI = i7441[9]
  i7440.m_DynamicPixelsPerUnit = i7441[10]
  i7440.m_PresetInfoIsWorld = !!i7441[11]
  return i7440
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i7442 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i7443 = data
  i7442.m_IgnoreReversedGraphics = !!i7443[0]
  i7442.m_BlockingObjects = i7443[1]
  i7442.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i7443[2] )
  return i7442
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i7444 = root || request.c( 'EndCardController' )
  var i7445 = data
  i7444.alwaysShowEndcardTESTING = !!i7445[0]
  i7444.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i7445[1], i7444.EndCardOpenedEvent)
  i7444._backgroundColor = new pc.Color(i7445[2], i7445[3], i7445[4], i7445[5])
  request.r(i7445[6], i7445[7], 0, i7444, '_backgroundTexture')
  request.r(i7445[8], i7445[9], 0, i7444, '_iconTexture')
  i7444._iconColor = new pc.Color(i7445[10], i7445[11], i7445[12], i7445[13])
  request.r(i7445[14], i7445[15], 0, i7444, '_buttonTexture')
  i7444._buttonColor = new pc.Color(i7445[16], i7445[17], i7445[18], i7445[19])
  i7444._endCardDescriptionText = i7445[20]
  i7444._CTAButtonText = i7445[21]
  i7444._useBestFitOnCTA = !!i7445[22]
  i7444._CTAFontColor = new pc.Color(i7445[23], i7445[24], i7445[25], i7445[26])
  i7444._descriptionFontColor = new pc.Color(i7445[27], i7445[28], i7445[29], i7445[30])
  request.r(i7445[31], i7445[32], 0, i7444, '_CTAFont')
  request.r(i7445[33], i7445[34], 0, i7444, '_descriptionFont')
  i7444._CTAFontSize = i7445[35]
  i7444._descriptionFontSize = i7445[36]
  i7444._centerDescriptionX = !!i7445[37]
  i7444._centerDescriptionY = !!i7445[38]
  i7444._centerButtonX = !!i7445[39]
  i7444._centerButtonY = !!i7445[40]
  i7444._descriptionPositionX = i7445[41]
  i7444._descriptionPositionY = i7445[42]
  i7444._buttonPositionX = i7445[43]
  i7444._buttonPositionY = i7445[44]
  i7444._CTAFontSizeLandscape = i7445[45]
  i7444._descriptionFontSizeLandscape = i7445[46]
  i7444._centerDescriptionXLandscape = !!i7445[47]
  i7444._centerDescriptionYLandscape = !!i7445[48]
  i7444._centerButtonXLandscape = !!i7445[49]
  i7444._centerButtonYLandscape = !!i7445[50]
  i7444._descriptionPositionXLandscape = i7445[51]
  i7444._descriptionPositionYLandscape = i7445[52]
  i7444._buttonPositionXLandscape = i7445[53]
  i7444._buttonPositionYLandscape = i7445[54]
  i7444._centerIconX = !!i7445[55]
  i7444._centerIconY = !!i7445[56]
  i7444._iconPositionX = i7445[57]
  i7444._iconPositionY = i7445[58]
  i7444._iconSize = i7445[59]
  i7444._roundEdgesOnIcon = !!i7445[60]
  i7444._centerIconXLandscape = !!i7445[61]
  i7444._centerIconYLandscape = !!i7445[62]
  i7444._iconPositionXLandscape = i7445[63]
  i7444._iconPositionYLandscape = i7445[64]
  i7444._iconSizeLandscape = i7445[65]
  i7444._roundEdgesOnIconLandscape = !!i7445[66]
  i7444._endCardClickableOptions = i7445[67]
  i7444._buttonAnimationType = i7445[68]
  i7444._endCardPortraitAnimationType = i7445[69]
  i7444._endCardLandscapeAnimationType = i7445[70]
  request.r(i7445[71], i7445[72], 0, i7444, '_backgroundImage')
  request.r(i7445[73], i7445[74], 0, i7444, '_CTAButton')
  request.r(i7445[75], i7445[76], 0, i7444, '_ScreenCTAButton')
  request.r(i7445[77], i7445[78], 0, i7444, '_CTAButtonTextText')
  request.r(i7445[79], i7445[80], 0, i7444, '_EndCardDescriptionTextText')
  request.r(i7445[81], i7445[82], 0, i7444, '_maskIcon')
  request.r(i7445[83], i7445[84], 0, i7444, '_iconRect')
  request.r(i7445[85], i7445[86], 0, i7444, '_iconRectMask')
  request.r(i7445[87], i7445[88], 0, i7444, '_descriptionRect')
  request.r(i7445[89], i7445[90], 0, i7444, '_buttonRect')
  request.r(i7445[91], i7445[92], 0, i7444, '_CTAButtonAnimator')
  request.r(i7445[93], i7445[94], 0, i7444, '_endCardAnimator')
  request.r(i7445[95], i7445[96], 0, i7444, '_iconImage')
  request.r(i7445[97], i7445[98], 0, i7444, '_CTAButtonImage')
  return i7444
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i7446 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i7447 = data
  i7446.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7447[0], i7446.m_PersistentCalls)
  return i7446
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i7448 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i7449 = data
  var i7451 = i7449[0]
  var i7450 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i7451.length; i += 1) {
    i7450.add(request.d('UnityEngine.Events.PersistentCall', i7451[i + 0]));
  }
  i7448.m_Calls = i7450
  return i7448
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i7454 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i7455 = data
  request.r(i7455[0], i7455[1], 0, i7454, 'm_Target')
  i7454.m_TargetAssemblyTypeName = i7455[2]
  i7454.m_MethodName = i7455[3]
  i7454.m_Mode = i7455[4]
  i7454.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i7455[5], i7454.m_Arguments)
  i7454.m_CallState = i7455[6]
  return i7454
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i7456 = root || request.c( 'EndCardSetScale' )
  var i7457 = data
  return i7456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i7458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i7459 = data
  i7458.cullTransparentMesh = !!i7459[0]
  return i7458
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i7460 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i7461 = data
  request.r(i7461[0], i7461[1], 0, i7460, 'm_Texture')
  i7460.m_UVRect = UnityEngine.Rect.MinMaxRect(i7461[2], i7461[3], i7461[4], i7461[5])
  request.r(i7461[6], i7461[7], 0, i7460, 'm_Material')
  i7460.m_Maskable = !!i7461[8]
  i7460.m_Color = new pc.Color(i7461[9], i7461[10], i7461[11], i7461[12])
  i7460.m_RaycastTarget = !!i7461[13]
  i7460.m_RaycastPadding = new pc.Vec4( i7461[14], i7461[15], i7461[16], i7461[17] )
  return i7460
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i7462 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i7463 = data
  i7462.m_AspectMode = i7463[0]
  i7462.m_AspectRatio = i7463[1]
  return i7462
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i7464 = root || request.c( 'UnityEngine.UI.Mask' )
  var i7465 = data
  i7464.m_ShowMaskGraphic = !!i7465[0]
  return i7464
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i7466 = root || request.c( 'UnityEngine.UI.Image' )
  var i7467 = data
  request.r(i7467[0], i7467[1], 0, i7466, 'm_Sprite')
  i7466.m_Type = i7467[2]
  i7466.m_PreserveAspect = !!i7467[3]
  i7466.m_FillCenter = !!i7467[4]
  i7466.m_FillMethod = i7467[5]
  i7466.m_FillAmount = i7467[6]
  i7466.m_FillClockwise = !!i7467[7]
  i7466.m_FillOrigin = i7467[8]
  i7466.m_UseSpriteMesh = !!i7467[9]
  i7466.m_PixelsPerUnitMultiplier = i7467[10]
  request.r(i7467[11], i7467[12], 0, i7466, 'm_Material')
  i7466.m_Maskable = !!i7467[13]
  i7466.m_Color = new pc.Color(i7467[14], i7467[15], i7467[16], i7467[17])
  i7466.m_RaycastTarget = !!i7467[18]
  i7466.m_RaycastPadding = new pc.Vec4( i7467[19], i7467[20], i7467[21], i7467[22] )
  return i7466
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i7468 = root || request.c( 'UnityEngine.UI.Text' )
  var i7469 = data
  i7468.m_FontData = request.d('UnityEngine.UI.FontData', i7469[0], i7468.m_FontData)
  i7468.m_Text = i7469[1]
  request.r(i7469[2], i7469[3], 0, i7468, 'm_Material')
  i7468.m_Maskable = !!i7469[4]
  i7468.m_Color = new pc.Color(i7469[5], i7469[6], i7469[7], i7469[8])
  i7468.m_RaycastTarget = !!i7469[9]
  i7468.m_RaycastPadding = new pc.Vec4( i7469[10], i7469[11], i7469[12], i7469[13] )
  return i7468
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i7470 = root || request.c( 'UnityEngine.UI.FontData' )
  var i7471 = data
  request.r(i7471[0], i7471[1], 0, i7470, 'm_Font')
  i7470.m_FontSize = i7471[2]
  i7470.m_FontStyle = i7471[3]
  i7470.m_BestFit = !!i7471[4]
  i7470.m_MinSize = i7471[5]
  i7470.m_MaxSize = i7471[6]
  i7470.m_Alignment = i7471[7]
  i7470.m_AlignByGeometry = !!i7471[8]
  i7470.m_RichText = !!i7471[9]
  i7470.m_HorizontalOverflow = i7471[10]
  i7470.m_VerticalOverflow = i7471[11]
  i7470.m_LineSpacing = i7471[12]
  return i7470
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i7472 = root || request.c( 'UnityEngine.UI.Button' )
  var i7473 = data
  i7472.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i7473[0], i7472.m_OnClick)
  i7472.m_Navigation = request.d('UnityEngine.UI.Navigation', i7473[1], i7472.m_Navigation)
  i7472.m_Transition = i7473[2]
  i7472.m_Colors = request.d('UnityEngine.UI.ColorBlock', i7473[3], i7472.m_Colors)
  i7472.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i7473[4], i7472.m_SpriteState)
  i7472.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i7473[5], i7472.m_AnimationTriggers)
  i7472.m_Interactable = !!i7473[6]
  request.r(i7473[7], i7473[8], 0, i7472, 'm_TargetGraphic')
  return i7472
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i7474 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i7475 = data
  i7474.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i7475[0], i7474.m_PersistentCalls)
  return i7474
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i7476 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i7477 = data
  request.r(i7477[0], i7477[1], 0, i7476, 'm_ObjectArgument')
  i7476.m_ObjectArgumentAssemblyTypeName = i7477[2]
  i7476.m_IntArgument = i7477[3]
  i7476.m_FloatArgument = i7477[4]
  i7476.m_StringArgument = i7477[5]
  i7476.m_BoolArgument = !!i7477[6]
  return i7476
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i7478 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i7479 = data
  i7478.m_Mode = i7479[0]
  i7478.m_WrapAround = !!i7479[1]
  request.r(i7479[2], i7479[3], 0, i7478, 'm_SelectOnUp')
  request.r(i7479[4], i7479[5], 0, i7478, 'm_SelectOnDown')
  request.r(i7479[6], i7479[7], 0, i7478, 'm_SelectOnLeft')
  request.r(i7479[8], i7479[9], 0, i7478, 'm_SelectOnRight')
  return i7478
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i7480 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i7481 = data
  i7480.m_NormalColor = new pc.Color(i7481[0], i7481[1], i7481[2], i7481[3])
  i7480.m_HighlightedColor = new pc.Color(i7481[4], i7481[5], i7481[6], i7481[7])
  i7480.m_PressedColor = new pc.Color(i7481[8], i7481[9], i7481[10], i7481[11])
  i7480.m_SelectedColor = new pc.Color(i7481[12], i7481[13], i7481[14], i7481[15])
  i7480.m_DisabledColor = new pc.Color(i7481[16], i7481[17], i7481[18], i7481[19])
  i7480.m_ColorMultiplier = i7481[20]
  i7480.m_FadeDuration = i7481[21]
  return i7480
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i7482 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i7483 = data
  request.r(i7483[0], i7483[1], 0, i7482, 'm_HighlightedSprite')
  request.r(i7483[2], i7483[3], 0, i7482, 'm_PressedSprite')
  request.r(i7483[4], i7483[5], 0, i7482, 'm_SelectedSprite')
  request.r(i7483[6], i7483[7], 0, i7482, 'm_DisabledSprite')
  return i7482
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i7484 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i7485 = data
  i7484.m_NormalTrigger = i7485[0]
  i7484.m_HighlightedTrigger = i7485[1]
  i7484.m_PressedTrigger = i7485[2]
  i7484.m_SelectedTrigger = i7485[3]
  i7484.m_DisabledTrigger = i7485[4]
  return i7484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i7486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i7487 = data
  i7486.m_Alpha = i7487[0]
  i7486.m_Interactable = !!i7487[1]
  i7486.m_BlocksRaycasts = !!i7487[2]
  i7486.m_IgnoreParentGroups = !!i7487[3]
  i7486.enabled = !!i7487[4]
  return i7486
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i7488 = root || request.c( 'UICrosshairItem' )
  var i7489 = data
  request.r(i7489[0], i7489[1], 0, i7488, 'CrosshairRectTransform')
  i7488._distanceMax = i7489[2]
  i7488._distanceMin = i7489[3]
  i7488._speedShrink = i7489[4]
  i7488._currentSpeed = i7489[5]
  i7488._rateOnMove = i7489[6]
  i7488._rateOnAttack = i7489[7]
  return i7488
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i7490 = root || request.c( 'BulletTrail' )
  var i7491 = data
  i7490.Speed = i7491[0]
  i7490.LifeTime = i7491[1]
  request.r(i7491[2], i7491[3], 0, i7490, '_trail')
  i7490._trailStartScale = new pc.Vec3( i7491[4], i7491[5], i7491[6] )
  i7490._trailMaxScale = new pc.Vec3( i7491[7], i7491[8], i7491[9] )
  i7490._trailLengthAtMaxScale = i7491[10]
  return i7490
}

Deserializers["Effect"] = function (request, data, root) {
  var i7492 = root || request.c( 'Effect' )
  var i7493 = data
  var i7495 = i7493[0]
  var i7494 = []
  for(var i = 0; i < i7495.length; i += 2) {
  request.r(i7495[i + 0], i7495[i + 1], 2, i7494, '')
  }
  i7492.particles = i7494
  i7492._lifeTime = i7493[1]
  return i7492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i7498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i7499 = data
  i7498.name = i7499[0]
  i7498.atlasId = i7499[1]
  i7498.mipmapCount = i7499[2]
  i7498.hdr = !!i7499[3]
  i7498.size = i7499[4]
  i7498.anisoLevel = i7499[5]
  i7498.filterMode = i7499[6]
  i7498.wrapMode = i7499[7]
  var i7501 = i7499[8]
  var i7500 = []
  for(var i = 0; i < i7501.length; i += 4) {
    i7500.push( UnityEngine.Rect.MinMaxRect(i7501[i + 0], i7501[i + 1], i7501[i + 2], i7501[i + 3]) );
  }
  i7498.rects = i7500
  return i7498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i7504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i7505 = data
  i7504.name = i7505[0]
  i7504.index = i7505[1]
  i7504.startup = !!i7505[2]
  return i7504
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i7506 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i7507 = data
  request.r(i7507[0], i7507[1], 0, i7506, 'm_FirstSelected')
  i7506.m_sendNavigationEvents = !!i7507[2]
  i7506.m_DragThreshold = i7507[3]
  return i7506
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i7508 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i7509 = data
  i7508.m_HorizontalAxis = i7509[0]
  i7508.m_VerticalAxis = i7509[1]
  i7508.m_SubmitButton = i7509[2]
  i7508.m_CancelButton = i7509[3]
  i7508.m_InputActionsPerSecond = i7509[4]
  i7508.m_RepeatDelay = i7509[5]
  i7508.m_ForceModuleActive = !!i7509[6]
  i7508.m_SendPointerHoverToParent = !!i7509[7]
  return i7508
}

Deserializers["UIManager"] = function (request, data, root) {
  var i7510 = root || request.c( 'UIManager' )
  var i7511 = data
  i7510.url = i7511[0]
  request.r(i7511[1], i7511[2], 0, i7510, 'InGame')
  request.r(i7511[3], i7511[4], 0, i7510, 'TotalBotText')
  i7510.initBot = i7511[5]
  request.r(i7511[6], i7511[7], 0, i7510, 'process')
  request.r(i7511[8], i7511[9], 0, i7510, 'gameProcess')
  request.r(i7511[10], i7511[11], 0, i7510, 'tapToPlay')
  return i7510
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i7512 = root || request.c( 'UnityEngine.UI.Outline' )
  var i7513 = data
  i7512.m_EffectColor = new pc.Color(i7513[0], i7513[1], i7513[2], i7513[3])
  i7512.m_EffectDistance = new pc.Vec2( i7513[4], i7513[5] )
  i7512.m_UseGraphicAlpha = !!i7513[6]
  return i7512
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i7514 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i7515 = data
  i7514.m_Spacing = i7515[0]
  i7514.m_ChildForceExpandWidth = !!i7515[1]
  i7514.m_ChildForceExpandHeight = !!i7515[2]
  i7514.m_ChildControlWidth = !!i7515[3]
  i7514.m_ChildControlHeight = !!i7515[4]
  i7514.m_ChildScaleWidth = !!i7515[5]
  i7514.m_ChildScaleHeight = !!i7515[6]
  i7514.m_ReverseArrangement = !!i7515[7]
  i7514.m_Padding = UnityEngine.RectOffset.FromPaddings(i7515[8], i7515[9], i7515[10], i7515[11])
  i7514.m_ChildAlignment = i7515[12]
  return i7514
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i7516 = root || request.c( 'BotParachute' )
  var i7517 = data
  request.r(i7517[0], i7517[1], 0, i7516, '_animator')
  request.r(i7517[2], i7517[3], 0, i7516, '_muzzle')
  request.r(i7517[4], i7517[5], 0, i7516, 'bullet')
  i7516.target = new pc.Vec3( i7517[6], i7517[7], i7517[8] )
  i7516.moveIndex = i7517[9]
  i7516.isMoveDone = !!i7517[10]
  i7516.isDie = !!i7517[11]
  i7516.isMove = !!i7517[12]
  i7516.parachuteDone = !!i7517[13]
  i7516.isTakeDame = !!i7517[14]
  i7516.maxHealth = i7517[15]
  request.r(i7517[16], i7517[17], 0, i7516, 'healthBarRenderer')
  request.r(i7517[18], i7517[19], 0, i7516, '_audioSource')
  request.r(i7517[20], i7517[21], 0, i7516, '_hitSource')
  return i7516
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i7518 = root || request.c( 'ParachuteController' )
  var i7519 = data
  i7518.Speed = i7519[0]
  request.r(i7519[1], i7519[2], 0, i7518, '_botController')
  i7518.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i7519[3] )
  request.r(i7519[4], i7519[5], 0, i7518, 'ParachuteScale')
  i7518.scaleAmount = i7519[6]
  i7518.velocity = new pc.Vec3( i7519[7], i7519[8], i7519[9] )
  i7518._distanceOpenParachute = i7519[10]
  i7518._distanceCloseParachute = i7519[11]
  return i7518
}

Deserializers["BotController"] = function (request, data, root) {
  var i7520 = root || request.c( 'BotController' )
  var i7521 = data
  request.r(i7521[0], i7521[1], 0, i7520, '_animator')
  request.r(i7521[2], i7521[3], 0, i7520, '_muzzle')
  request.r(i7521[4], i7521[5], 0, i7520, 'bullet')
  i7520.target = new pc.Vec3( i7521[6], i7521[7], i7521[8] )
  i7520.moveIndex = i7521[9]
  i7520.isMoveDone = !!i7521[10]
  i7520.isDie = !!i7521[11]
  i7520.isTakeDame = !!i7521[12]
  i7520.maxHealth = i7521[13]
  request.r(i7521[14], i7521[15], 0, i7520, 'healthBarRenderer')
  request.r(i7521[16], i7521[17], 0, i7520, '_audioSource')
  request.r(i7521[18], i7521[19], 0, i7520, '_hitSource')
  return i7520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i7522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i7523 = data
  i7522.enabled = !!i7523[0]
  i7522.type = i7523[1]
  i7522.color = new pc.Color(i7523[2], i7523[3], i7523[4], i7523[5])
  i7522.cullingMask = i7523[6]
  i7522.intensity = i7523[7]
  i7522.range = i7523[8]
  i7522.spotAngle = i7523[9]
  i7522.shadows = i7523[10]
  i7522.shadowNormalBias = i7523[11]
  i7522.shadowBias = i7523[12]
  i7522.shadowStrength = i7523[13]
  i7522.shadowResolution = i7523[14]
  i7522.lightmapBakeType = i7523[15]
  i7522.renderMode = i7523[16]
  request.r(i7523[17], i7523[18], 0, i7522, 'cookie')
  i7522.cookieSize = i7523[19]
  return i7522
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i7524 = root || request.c( 'PlayerView' )
  var i7525 = data
  request.r(i7525[0], i7525[1], 0, i7524, '_mainRoot')
  request.r(i7525[2], i7525[3], 0, i7524, '_head')
  i7524._sensitivity = i7525[4]
  i7524._slerpFactor = i7525[5]
  i7524._viewHorizontalThreshold = new pc.Vec2( i7525[6], i7525[7] )
  i7524._viewVerticalThreshold = new pc.Vec2( i7525[8], i7525[9] )
  i7524._initRotate = new pc.Vec2( i7525[10], i7525[11] )
  i7524._totalRotate = new pc.Vec2( i7525[12], i7525[13] )
  return i7524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i7526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i7527 = data
  i7526.playAutomatically = !!i7527[0]
  request.r(i7527[1], i7527[2], 0, i7526, 'clip')
  var i7529 = i7527[3]
  var i7528 = []
  for(var i = 0; i < i7529.length; i += 2) {
  request.r(i7529[i + 0], i7529[i + 1], 2, i7528, '')
  }
  i7526.clips = i7528
  i7526.wrapMode = i7527[4]
  i7526.enabled = !!i7527[5]
  return i7526
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i7532 = root || request.c( 'WeaponController' )
  var i7533 = data
  i7532.Mask = UnityEngine.LayerMask.FromIntegerValue( i7533[0] )
  i7532.damage = i7533[1]
  request.r(i7533[2], i7533[3], 0, i7532, '_muzzleTrans')
  request.r(i7533[4], i7533[5], 0, i7532, '_animation')
  request.r(i7533[6], i7533[7], 0, i7532, 'bullet')
  request.r(i7533[8], i7533[9], 0, i7532, '_muzzleFlash')
  request.r(i7533[10], i7533[11], 0, i7532, 'audioClip')
  request.r(i7533[12], i7533[13], 0, i7532, 'audioSource')
  i7532.SphereRadius = i7533[14]
  request.r(i7533[15], i7533[16], 0, i7532, 'Effect')
  return i7532
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i7534 = root || request.c( 'SpawnBot' )
  var i7535 = data
  request.r(i7535[0], i7535[1], 0, i7534, '_botPrefab')
  i7534._spawnInterval = i7535[2]
  i7534._upper = i7535[3]
  return i7534
}

Deserializers["BotManager"] = function (request, data, root) {
  var i7536 = root || request.c( 'BotManager' )
  var i7537 = data
  return i7536
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i7538 = root || request.c( 'AudioManager' )
  var i7539 = data
  var i7541 = i7539[0]
  var i7540 = []
  for(var i = 0; i < i7541.length; i += 2) {
  request.r(i7541[i + 0], i7541[i + 1], 2, i7540, '')
  }
  i7538.AttackSounds = i7540
  var i7543 = i7539[1]
  var i7542 = []
  for(var i = 0; i < i7543.length; i += 2) {
  request.r(i7543[i + 0], i7543[i + 1], 2, i7542, '')
  }
  i7538.HitSounds = i7542
  return i7538
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i7546 = root || request.c( 'ConfigManager' )
  var i7547 = data
  var i7549 = i7547[0]
  var i7548 = []
  for(var i = 0; i < i7549.length; i += 1) {
    i7548.push( request.d('StepData', i7549[i + 0]) );
  }
  i7546._stepDatas = i7548
  return i7546
}

Deserializers["StepData"] = function (request, data, root) {
  var i7552 = root || request.c( 'StepData' )
  var i7553 = data
  i7552.NumberBot = i7553[0]
  i7552.NumberParachute = i7553[1]
  return i7552
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i7554 = root || request.c( 'GamePlayManager' )
  var i7555 = data
  request.r(i7555[0], i7555[1], 0, i7554, '_spawnBotNormal')
  request.r(i7555[2], i7555[3], 0, i7554, '_spawnBotParachute')
  return i7554
}

Deserializers["PathManager"] = function (request, data, root) {
  var i7556 = root || request.c( 'PathManager' )
  var i7557 = data
  var i7559 = i7557[0]
  var i7558 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i7559.length; i += 1) {
    i7558.add(request.d('Path', i7559[i + 0]));
  }
  i7556._paths = i7558
  var i7561 = i7557[1]
  var i7560 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i7561.length; i += 1) {
    i7560.add(request.d('Path', i7561[i + 0]));
  }
  i7556._pathsParachute = i7560
  return i7556
}

Deserializers["Path"] = function (request, data, root) {
  var i7564 = root || request.c( 'Path' )
  var i7565 = data
  i7564.IsUse = !!i7565[0]
  var i7567 = i7565[1]
  var i7566 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i7567.length; i += 2) {
  request.r(i7567[i + 0], i7567[i + 1], 1, i7566, '')
  }
  i7564.WayPoints = i7566
  return i7564
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i7570 = root || request.c( 'ObjectPool' )
  var i7571 = data
  return i7570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i7572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i7573 = data
  i7572.ambientIntensity = i7573[0]
  i7572.reflectionIntensity = i7573[1]
  i7572.ambientMode = i7573[2]
  i7572.ambientLight = new pc.Color(i7573[3], i7573[4], i7573[5], i7573[6])
  i7572.ambientSkyColor = new pc.Color(i7573[7], i7573[8], i7573[9], i7573[10])
  i7572.ambientGroundColor = new pc.Color(i7573[11], i7573[12], i7573[13], i7573[14])
  i7572.ambientEquatorColor = new pc.Color(i7573[15], i7573[16], i7573[17], i7573[18])
  i7572.fogColor = new pc.Color(i7573[19], i7573[20], i7573[21], i7573[22])
  i7572.fogEndDistance = i7573[23]
  i7572.fogStartDistance = i7573[24]
  i7572.fogDensity = i7573[25]
  i7572.fog = !!i7573[26]
  request.r(i7573[27], i7573[28], 0, i7572, 'skybox')
  i7572.fogMode = i7573[29]
  var i7575 = i7573[30]
  var i7574 = []
  for(var i = 0; i < i7575.length; i += 1) {
    i7574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i7575[i + 0]) );
  }
  i7572.lightmaps = i7574
  i7572.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i7573[31], i7572.lightProbes)
  i7572.lightmapsMode = i7573[32]
  i7572.mixedBakeMode = i7573[33]
  i7572.environmentLightingMode = i7573[34]
  i7572.ambientProbe = new pc.SphericalHarmonicsL2(i7573[35])
  i7572.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i7573[36])
  i7572.useReferenceAmbientProbe = !!i7573[37]
  request.r(i7573[38], i7573[39], 0, i7572, 'customReflection')
  request.r(i7573[40], i7573[41], 0, i7572, 'defaultReflection')
  i7572.defaultReflectionMode = i7573[42]
  i7572.defaultReflectionResolution = i7573[43]
  i7572.sunLightObjectId = i7573[44]
  i7572.pixelLightCount = i7573[45]
  i7572.defaultReflectionHDR = !!i7573[46]
  i7572.hasLightDataAsset = !!i7573[47]
  i7572.hasManualGenerate = !!i7573[48]
  return i7572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i7578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i7579 = data
  request.r(i7579[0], i7579[1], 0, i7578, 'lightmapColor')
  request.r(i7579[2], i7579[3], 0, i7578, 'lightmapDirection')
  return i7578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i7580 = root || new UnityEngine.LightProbes()
  var i7581 = data
  return i7580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i7588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i7589 = data
  var i7591 = i7589[0]
  var i7590 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i7591.length; i += 1) {
    i7590.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i7591[i + 0]));
  }
  i7588.ShaderCompilationErrors = i7590
  i7588.name = i7589[1]
  i7588.guid = i7589[2]
  var i7593 = i7589[3]
  var i7592 = []
  for(var i = 0; i < i7593.length; i += 1) {
    i7592.push( i7593[i + 0] );
  }
  i7588.shaderDefinedKeywords = i7592
  var i7595 = i7589[4]
  var i7594 = []
  for(var i = 0; i < i7595.length; i += 1) {
    i7594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i7595[i + 0]) );
  }
  i7588.passes = i7594
  var i7597 = i7589[5]
  var i7596 = []
  for(var i = 0; i < i7597.length; i += 1) {
    i7596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i7597[i + 0]) );
  }
  i7588.usePasses = i7596
  var i7599 = i7589[6]
  var i7598 = []
  for(var i = 0; i < i7599.length; i += 1) {
    i7598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i7599[i + 0]) );
  }
  i7588.defaultParameterValues = i7598
  request.r(i7589[7], i7589[8], 0, i7588, 'unityFallbackShader')
  i7588.readDepth = !!i7589[9]
  i7588.isCreatedByShaderGraph = !!i7589[10]
  i7588.usedBatchUniforms = i7589[11]
  return i7588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i7602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i7603 = data
  i7602.shaderName = i7603[0]
  i7602.errorMessage = i7603[1]
  return i7602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i7608 = root || new pc.UnityShaderPass()
  var i7609 = data
  i7608.id = i7609[0]
  i7608.subShaderIndex = i7609[1]
  i7608.name = i7609[2]
  i7608.passType = i7609[3]
  i7608.grabPassTextureName = i7609[4]
  i7608.usePass = !!i7609[5]
  i7608.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[6], i7608.zTest)
  i7608.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[7], i7608.zWrite)
  i7608.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[8], i7608.culling)
  i7608.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7609[9], i7608.blending)
  i7608.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i7609[10], i7608.alphaBlending)
  i7608.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[11], i7608.colorWriteMask)
  i7608.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[12], i7608.offsetUnits)
  i7608.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[13], i7608.offsetFactor)
  i7608.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[14], i7608.stencilRef)
  i7608.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[15], i7608.stencilReadMask)
  i7608.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7609[16], i7608.stencilWriteMask)
  i7608.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7609[17], i7608.stencilOp)
  i7608.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7609[18], i7608.stencilOpFront)
  i7608.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i7609[19], i7608.stencilOpBack)
  var i7611 = i7609[20]
  var i7610 = []
  for(var i = 0; i < i7611.length; i += 1) {
    i7610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i7611[i + 0]) );
  }
  i7608.tags = i7610
  var i7613 = i7609[21]
  var i7612 = []
  for(var i = 0; i < i7613.length; i += 1) {
    i7612.push( i7613[i + 0] );
  }
  i7608.passDefinedKeywords = i7612
  var i7615 = i7609[22]
  var i7614 = []
  for(var i = 0; i < i7615.length; i += 1) {
    i7614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i7615[i + 0]) );
  }
  i7608.passDefinedKeywordGroups = i7614
  var i7617 = i7609[23]
  var i7616 = []
  for(var i = 0; i < i7617.length; i += 1) {
    i7616.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7617[i + 0]) );
  }
  i7608.variants = i7616
  var i7619 = i7609[24]
  var i7618 = []
  for(var i = 0; i < i7619.length; i += 1) {
    i7618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i7619[i + 0]) );
  }
  i7608.excludedVariants = i7618
  i7608.hasDepthReader = !!i7609[25]
  return i7608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i7620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i7621 = data
  i7620.val = i7621[0]
  i7620.name = i7621[1]
  return i7620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i7622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i7623 = data
  i7622.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7623[0], i7622.src)
  i7622.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7623[1], i7622.dst)
  i7622.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7623[2], i7622.op)
  return i7622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i7624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i7625 = data
  i7624.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7625[0], i7624.pass)
  i7624.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7625[1], i7624.fail)
  i7624.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7625[2], i7624.zFail)
  i7624.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i7625[3], i7624.comp)
  return i7624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i7628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i7629 = data
  i7628.name = i7629[0]
  i7628.value = i7629[1]
  return i7628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i7632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i7633 = data
  var i7635 = i7633[0]
  var i7634 = []
  for(var i = 0; i < i7635.length; i += 1) {
    i7634.push( i7635[i + 0] );
  }
  i7632.keywords = i7634
  i7632.hasDiscard = !!i7633[1]
  return i7632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i7638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i7639 = data
  i7638.passId = i7639[0]
  i7638.subShaderIndex = i7639[1]
  var i7641 = i7639[2]
  var i7640 = []
  for(var i = 0; i < i7641.length; i += 1) {
    i7640.push( i7641[i + 0] );
  }
  i7638.keywords = i7640
  i7638.vertexProgram = i7639[3]
  i7638.fragmentProgram = i7639[4]
  i7638.readDepth = !!i7639[5]
  return i7638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i7644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i7645 = data
  request.r(i7645[0], i7645[1], 0, i7644, 'shader')
  i7644.pass = i7645[2]
  return i7644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i7648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i7649 = data
  i7648.name = i7649[0]
  i7648.type = i7649[1]
  i7648.value = new pc.Vec4( i7649[2], i7649[3], i7649[4], i7649[5] )
  i7648.textureValue = i7649[6]
  return i7648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i7650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i7651 = data
  i7650.name = i7651[0]
  request.r(i7651[1], i7651[2], 0, i7650, 'texture')
  i7650.aabb = i7651[3]
  i7650.vertices = i7651[4]
  i7650.triangles = i7651[5]
  i7650.textureRect = UnityEngine.Rect.MinMaxRect(i7651[6], i7651[7], i7651[8], i7651[9])
  i7650.packedRect = UnityEngine.Rect.MinMaxRect(i7651[10], i7651[11], i7651[12], i7651[13])
  i7650.border = new pc.Vec4( i7651[14], i7651[15], i7651[16], i7651[17] )
  i7650.transparency = i7651[18]
  i7650.bounds = i7651[19]
  i7650.pixelsPerUnit = i7651[20]
  i7650.textureWidth = i7651[21]
  i7650.textureHeight = i7651[22]
  i7650.nativeSize = new pc.Vec2( i7651[23], i7651[24] )
  i7650.pivot = new pc.Vec2( i7651[25], i7651[26] )
  i7650.textureRectOffset = new pc.Vec2( i7651[27], i7651[28] )
  return i7650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i7652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i7653 = data
  i7652.name = i7653[0]
  return i7652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i7654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i7655 = data
  i7654.name = i7655[0]
  i7654.wrapMode = i7655[1]
  i7654.isLooping = !!i7655[2]
  i7654.length = i7655[3]
  var i7657 = i7655[4]
  var i7656 = []
  for(var i = 0; i < i7657.length; i += 1) {
    i7656.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i7657[i + 0]) );
  }
  i7654.curves = i7656
  var i7659 = i7655[5]
  var i7658 = []
  for(var i = 0; i < i7659.length; i += 1) {
    i7658.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i7659[i + 0]) );
  }
  i7654.events = i7658
  i7654.halfPrecision = !!i7655[6]
  i7654.frameRate = i7655[7]
  i7654.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i7655[8], i7654.localBounds)
  i7654.hasMuscleCurves = !!i7655[9]
  var i7661 = i7655[10]
  var i7660 = []
  for(var i = 0; i < i7661.length; i += 1) {
    i7660.push( i7661[i + 0] );
  }
  i7654.clipMuscleConstant = i7660
  i7654.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i7655[11], i7654.clipBindingConstant)
  return i7654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i7664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i7665 = data
  i7664.path = i7665[0]
  i7664.componentType = i7665[1]
  i7664.property = i7665[2]
  i7664.keys = i7665[3]
  var i7667 = i7665[4]
  var i7666 = []
  for(var i = 0; i < i7667.length; i += 1) {
    i7666.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i7667[i + 0]) );
  }
  i7664.objectReferenceKeys = i7666
  return i7664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i7670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i7671 = data
  i7670.functionName = i7671[0]
  i7670.floatParameter = i7671[1]
  i7670.intParameter = i7671[2]
  i7670.stringParameter = i7671[3]
  request.r(i7671[4], i7671[5], 0, i7670, 'objectReferenceParameter')
  i7670.time = i7671[6]
  return i7670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i7672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i7673 = data
  i7672.center = new pc.Vec3( i7673[0], i7673[1], i7673[2] )
  i7672.extends = new pc.Vec3( i7673[3], i7673[4], i7673[5] )
  return i7672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i7676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i7677 = data
  var i7679 = i7677[0]
  var i7678 = []
  for(var i = 0; i < i7679.length; i += 1) {
    i7678.push( i7679[i + 0] );
  }
  i7676.genericBindings = i7678
  var i7681 = i7677[1]
  var i7680 = []
  for(var i = 0; i < i7681.length; i += 1) {
    i7680.push( i7681[i + 0] );
  }
  i7676.pptrCurveMapping = i7680
  return i7676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i7684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i7685 = data
  i7684.time = i7685[0]
  request.r(i7685[1], i7685[2], 0, i7684, 'value')
  return i7684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i7686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i7687 = data
  i7686.name = i7687[0]
  i7686.ascent = i7687[1]
  i7686.originalLineHeight = i7687[2]
  i7686.fontSize = i7687[3]
  var i7689 = i7687[4]
  var i7688 = []
  for(var i = 0; i < i7689.length; i += 1) {
    i7688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i7689[i + 0]) );
  }
  i7686.characterInfo = i7688
  request.r(i7687[5], i7687[6], 0, i7686, 'texture')
  i7686.originalFontSize = i7687[7]
  return i7686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i7692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i7693 = data
  i7692.index = i7693[0]
  i7692.advance = i7693[1]
  i7692.bearing = i7693[2]
  i7692.glyphWidth = i7693[3]
  i7692.glyphHeight = i7693[4]
  i7692.minX = i7693[5]
  i7692.maxX = i7693[6]
  i7692.minY = i7693[7]
  i7692.maxY = i7693[8]
  i7692.uvBottomLeftX = i7693[9]
  i7692.uvBottomLeftY = i7693[10]
  i7692.uvBottomRightX = i7693[11]
  i7692.uvBottomRightY = i7693[12]
  i7692.uvTopLeftX = i7693[13]
  i7692.uvTopLeftY = i7693[14]
  i7692.uvTopRightX = i7693[15]
  i7692.uvTopRightY = i7693[16]
  return i7692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i7694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i7695 = data
  i7694.name = i7695[0]
  var i7697 = i7695[1]
  var i7696 = []
  for(var i = 0; i < i7697.length; i += 1) {
    i7696.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i7697[i + 0]) );
  }
  i7694.states = i7696
  var i7699 = i7695[2]
  var i7698 = []
  for(var i = 0; i < i7699.length; i += 1) {
    i7698.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i7699[i + 0]) );
  }
  i7694.layers = i7698
  var i7701 = i7695[3]
  var i7700 = []
  for(var i = 0; i < i7701.length; i += 1) {
    i7700.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i7701[i + 0]) );
  }
  i7694.parameters = i7700
  i7694.animationClips = i7695[4]
  i7694.HasSubStateMachines = !!i7695[5]
  i7694.avatarUnsupported = i7695[6]
  return i7694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i7704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i7705 = data
  i7704.cycleOffset = i7705[0]
  i7704.cycleOffsetParameter = i7705[1]
  i7704.cycleOffsetParameterActive = !!i7705[2]
  i7704.mirror = !!i7705[3]
  i7704.mirrorParameter = i7705[4]
  i7704.mirrorParameterActive = !!i7705[5]
  i7704.motionId = i7705[6]
  i7704.nameHash = i7705[7]
  i7704.fullPathHash = i7705[8]
  i7704.speed = i7705[9]
  i7704.speedParameter = i7705[10]
  i7704.speedParameterActive = !!i7705[11]
  i7704.tag = i7705[12]
  i7704.name = i7705[13]
  i7704.layer = i7705[14]
  i7704.writeDefaultValues = !!i7705[15]
  var i7707 = i7705[16]
  var i7706 = []
  for(var i = 0; i < i7707.length; i += 1) {
    i7706.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7707[i + 0]) );
  }
  i7704.transitions = i7706
  var i7709 = i7705[17]
  var i7708 = []
  for(var i = 0; i < i7709.length; i += 2) {
  request.r(i7709[i + 0], i7709[i + 1], 2, i7708, '')
  }
  i7704.behaviours = i7708
  return i7704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i7712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i7713 = data
  i7712.fullPath = i7713[0]
  i7712.canTransitionToSelf = !!i7713[1]
  i7712.duration = i7713[2]
  i7712.exitTime = i7713[3]
  i7712.hasExitTime = !!i7713[4]
  i7712.hasFixedDuration = !!i7713[5]
  i7712.interruptionSource = i7713[6]
  i7712.offset = i7713[7]
  i7712.orderedInterruption = !!i7713[8]
  i7712.destinationStateNameHash = i7713[9]
  i7712.destinationStateMachineId = i7713[10]
  i7712.isExit = !!i7713[11]
  i7712.mute = !!i7713[12]
  i7712.solo = !!i7713[13]
  var i7715 = i7713[14]
  var i7714 = []
  for(var i = 0; i < i7715.length; i += 1) {
    i7714.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7715[i + 0]) );
  }
  i7712.conditions = i7714
  return i7712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i7718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i7719 = data
  i7718.mode = i7719[0]
  i7718.parameter = i7719[1]
  i7718.threshold = i7719[2]
  return i7718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i7724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i7725 = data
  i7724.blendingMode = i7725[0]
  i7724.defaultWeight = i7725[1]
  i7724.name = i7725[2]
  i7724.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i7725[3], i7724.stateMachine)
  return i7724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i7726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i7727 = data
  i7726.id = i7727[0]
  i7726.defaultStateNameHash = i7727[1]
  var i7729 = i7727[2]
  var i7728 = []
  for(var i = 0; i < i7729.length; i += 1) {
    i7728.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i7729[i + 0]) );
  }
  i7726.entryTransitions = i7728
  var i7731 = i7727[3]
  var i7730 = []
  for(var i = 0; i < i7731.length; i += 1) {
    i7730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i7731[i + 0]) );
  }
  i7726.anyStateTransitions = i7730
  return i7726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i7734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i7735 = data
  i7734.destinationStateNameHash = i7735[0]
  i7734.destinationStateMachineId = i7735[1]
  i7734.isExit = !!i7735[2]
  i7734.mute = !!i7735[3]
  i7734.solo = !!i7735[4]
  var i7737 = i7735[5]
  var i7736 = []
  for(var i = 0; i < i7737.length; i += 1) {
    i7736.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i7737[i + 0]) );
  }
  i7734.conditions = i7736
  return i7734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i7740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i7741 = data
  i7740.defaultBool = !!i7741[0]
  i7740.defaultFloat = i7741[1]
  i7740.defaultInt = i7741[2]
  i7740.name = i7741[3]
  i7740.nameHash = i7741[4]
  i7740.type = i7741[5]
  return i7740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i7742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i7743 = data
  var i7745 = i7743[0]
  var i7744 = []
  for(var i = 0; i < i7745.length; i += 1) {
    i7744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i7745[i + 0]) );
  }
  i7742.files = i7744
  i7742.componentToPrefabIds = i7743[1]
  return i7742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i7748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i7749 = data
  i7748.path = i7749[0]
  request.r(i7749[1], i7749[2], 0, i7748, 'unityObject')
  return i7748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i7750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i7751 = data
  var i7753 = i7751[0]
  var i7752 = []
  for(var i = 0; i < i7753.length; i += 1) {
    i7752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i7753[i + 0]) );
  }
  i7750.scriptsExecutionOrder = i7752
  var i7755 = i7751[1]
  var i7754 = []
  for(var i = 0; i < i7755.length; i += 1) {
    i7754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i7755[i + 0]) );
  }
  i7750.sortingLayers = i7754
  var i7757 = i7751[2]
  var i7756 = []
  for(var i = 0; i < i7757.length; i += 1) {
    i7756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i7757[i + 0]) );
  }
  i7750.cullingLayers = i7756
  i7750.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i7751[3], i7750.timeSettings)
  i7750.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i7751[4], i7750.physicsSettings)
  i7750.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i7751[5], i7750.physics2DSettings)
  i7750.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7751[6], i7750.qualitySettings)
  i7750.enableRealtimeShadows = !!i7751[7]
  i7750.enableAutoInstancing = !!i7751[8]
  i7750.enableDynamicBatching = !!i7751[9]
  i7750.lightmapEncodingQuality = i7751[10]
  i7750.desiredColorSpace = i7751[11]
  var i7759 = i7751[12]
  var i7758 = []
  for(var i = 0; i < i7759.length; i += 1) {
    i7758.push( i7759[i + 0] );
  }
  i7750.allTags = i7758
  return i7750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i7762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i7763 = data
  i7762.name = i7763[0]
  i7762.value = i7763[1]
  return i7762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i7766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i7767 = data
  i7766.id = i7767[0]
  i7766.name = i7767[1]
  i7766.value = i7767[2]
  return i7766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i7770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i7771 = data
  i7770.id = i7771[0]
  i7770.name = i7771[1]
  return i7770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i7772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i7773 = data
  i7772.fixedDeltaTime = i7773[0]
  i7772.maximumDeltaTime = i7773[1]
  i7772.timeScale = i7773[2]
  i7772.maximumParticleTimestep = i7773[3]
  return i7772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i7774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i7775 = data
  i7774.gravity = new pc.Vec3( i7775[0], i7775[1], i7775[2] )
  i7774.defaultSolverIterations = i7775[3]
  i7774.bounceThreshold = i7775[4]
  i7774.autoSyncTransforms = !!i7775[5]
  i7774.autoSimulation = !!i7775[6]
  var i7777 = i7775[7]
  var i7776 = []
  for(var i = 0; i < i7777.length; i += 1) {
    i7776.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i7777[i + 0]) );
  }
  i7774.collisionMatrix = i7776
  return i7774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i7780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i7781 = data
  i7780.enabled = !!i7781[0]
  i7780.layerId = i7781[1]
  i7780.otherLayerId = i7781[2]
  return i7780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i7782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i7783 = data
  request.r(i7783[0], i7783[1], 0, i7782, 'material')
  i7782.gravity = new pc.Vec2( i7783[2], i7783[3] )
  i7782.positionIterations = i7783[4]
  i7782.velocityIterations = i7783[5]
  i7782.velocityThreshold = i7783[6]
  i7782.maxLinearCorrection = i7783[7]
  i7782.maxAngularCorrection = i7783[8]
  i7782.maxTranslationSpeed = i7783[9]
  i7782.maxRotationSpeed = i7783[10]
  i7782.baumgarteScale = i7783[11]
  i7782.baumgarteTOIScale = i7783[12]
  i7782.timeToSleep = i7783[13]
  i7782.linearSleepTolerance = i7783[14]
  i7782.angularSleepTolerance = i7783[15]
  i7782.defaultContactOffset = i7783[16]
  i7782.autoSimulation = !!i7783[17]
  i7782.queriesHitTriggers = !!i7783[18]
  i7782.queriesStartInColliders = !!i7783[19]
  i7782.callbacksOnDisable = !!i7783[20]
  i7782.reuseCollisionCallbacks = !!i7783[21]
  i7782.autoSyncTransforms = !!i7783[22]
  var i7785 = i7783[23]
  var i7784 = []
  for(var i = 0; i < i7785.length; i += 1) {
    i7784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i7785[i + 0]) );
  }
  i7782.collisionMatrix = i7784
  return i7782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i7788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i7789 = data
  i7788.enabled = !!i7789[0]
  i7788.layerId = i7789[1]
  i7788.otherLayerId = i7789[2]
  return i7788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i7790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i7791 = data
  var i7793 = i7791[0]
  var i7792 = []
  for(var i = 0; i < i7793.length; i += 1) {
    i7792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i7793[i + 0]) );
  }
  i7790.qualityLevels = i7792
  var i7795 = i7791[1]
  var i7794 = []
  for(var i = 0; i < i7795.length; i += 1) {
    i7794.push( i7795[i + 0] );
  }
  i7790.names = i7794
  i7790.shadows = i7791[2]
  i7790.anisotropicFiltering = i7791[3]
  i7790.antiAliasing = i7791[4]
  i7790.lodBias = i7791[5]
  i7790.shadowCascades = i7791[6]
  i7790.shadowDistance = i7791[7]
  i7790.shadowmaskMode = i7791[8]
  i7790.shadowProjection = i7791[9]
  i7790.shadowResolution = i7791[10]
  i7790.softParticles = !!i7791[11]
  i7790.softVegetation = !!i7791[12]
  i7790.activeColorSpace = i7791[13]
  i7790.desiredColorSpace = i7791[14]
  i7790.masterTextureLimit = i7791[15]
  i7790.maxQueuedFrames = i7791[16]
  i7790.particleRaycastBudget = i7791[17]
  i7790.pixelLightCount = i7791[18]
  i7790.realtimeReflectionProbes = !!i7791[19]
  i7790.shadowCascade2Split = i7791[20]
  i7790.shadowCascade4Split = new pc.Vec3( i7791[21], i7791[22], i7791[23] )
  i7790.streamingMipmapsActive = !!i7791[24]
  i7790.vSyncCount = i7791[25]
  i7790.asyncUploadBufferSize = i7791[26]
  i7790.asyncUploadTimeSlice = i7791[27]
  i7790.billboardsFaceCameraPosition = !!i7791[28]
  i7790.shadowNearPlaneOffset = i7791[29]
  i7790.streamingMipmapsMemoryBudget = i7791[30]
  i7790.maximumLODLevel = i7791[31]
  i7790.streamingMipmapsAddAllCameras = !!i7791[32]
  i7790.streamingMipmapsMaxLevelReduction = i7791[33]
  i7790.streamingMipmapsRenderersPerFrame = i7791[34]
  i7790.resolutionScalingFixedDPIFactor = i7791[35]
  i7790.streamingMipmapsMaxFileIORequests = i7791[36]
  i7790.currentQualityLevel = i7791[37]
  return i7790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i7798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i7799 = data
  i7798.name = i7799[0]
  var i7801 = i7799[1]
  var i7800 = []
  for(var i = 0; i < i7801.length; i += 1) {
    i7800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i7801[i + 0]) );
  }
  i7798.tos = i7800
  var i7803 = i7799[2]
  var i7802 = []
  for(var i = 0; i < i7803.length; i += 1) {
    i7802.push( i7803[i + 0] );
  }
  i7798.constant = i7802
  i7798.isValid = !!i7799[3]
  i7798.isHuman = !!i7799[4]
  i7798.hasRootMotion = !!i7799[5]
  return i7798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i7806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i7807 = data
  i7806.hash = i7807[0]
  i7806.path = i7807[1]
  return i7806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i7810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i7811 = data
  i7810.weight = i7811[0]
  i7810.vertices = i7811[1]
  i7810.normals = i7811[2]
  i7810.tangents = i7811[3]
  return i7810
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[5],"71":[14],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[14],"95":[9],"96":[97],"98":[97],"18":[17],"99":[17],"100":[9,17],"101":[17,31],"102":[17],"103":[31,17],"104":[9],"105":[31,17],"106":[17],"107":[108],"109":[17],"110":[17],"21":[18],"33":[31,17],"32":[17],"20":[18],"111":[17],"112":[17],"45":[17],"113":[17],"114":[17],"115":[17],"116":[17],"28":[17],"117":[17],"25":[31,17],"118":[17],"119":[17],"120":[17],"121":[17],"27":[31,17],"122":[17],"123":[40],"124":[40],"41":[40],"125":[40],"126":[14],"127":[14],"128":[108],"129":[108]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","GamePlayManager","UICrosshairItem","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","UnityEngine.GameObject","UnityEngine.UI.Outline","UnityEngine.UI.HorizontalLayoutGroup","BotParachute","ParachuteController","UnityEngine.LODGroup","BotController","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","BotManager","AudioManager","ConfigManager","PathManager","ObjectPool","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "24.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "20146";

Deserializers.projectId = "19d6020580d862e46a5b6b7a32992276";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1585";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3495";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = false;

Deserializers.buildID = "d8dacfa8-5802-40e2-bde9-aabef182741b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

