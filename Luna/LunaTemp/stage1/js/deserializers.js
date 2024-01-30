var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2390 = root || request.c( 'UnityEngine.JointSpring' )
  var i2391 = data
  i2390.spring = i2391[0]
  i2390.damper = i2391[1]
  i2390.targetPosition = i2391[2]
  return i2390
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2392 = root || request.c( 'UnityEngine.JointMotor' )
  var i2393 = data
  i2392.m_TargetVelocity = i2393[0]
  i2392.m_Force = i2393[1]
  i2392.m_FreeSpin = i2393[2]
  return i2392
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2394 = root || request.c( 'UnityEngine.JointLimits' )
  var i2395 = data
  i2394.m_Min = i2395[0]
  i2394.m_Max = i2395[1]
  i2394.m_Bounciness = i2395[2]
  i2394.m_BounceMinVelocity = i2395[3]
  i2394.m_ContactDistance = i2395[4]
  i2394.minBounce = i2395[5]
  i2394.maxBounce = i2395[6]
  return i2394
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2396 = root || request.c( 'UnityEngine.JointDrive' )
  var i2397 = data
  i2396.m_PositionSpring = i2397[0]
  i2396.m_PositionDamper = i2397[1]
  i2396.m_MaximumForce = i2397[2]
  return i2396
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2398 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2399 = data
  i2398.m_Spring = i2399[0]
  i2398.m_Damper = i2399[1]
  return i2398
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2400 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2401 = data
  i2400.m_Limit = i2401[0]
  i2400.m_Bounciness = i2401[1]
  i2400.m_ContactDistance = i2401[2]
  return i2400
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2403 = data
  i2402.m_ExtremumSlip = i2403[0]
  i2402.m_ExtremumValue = i2403[1]
  i2402.m_AsymptoteSlip = i2403[2]
  i2402.m_AsymptoteValue = i2403[3]
  i2402.m_Stiffness = i2403[4]
  return i2402
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2405 = data
  i2404.m_LowerAngle = i2405[0]
  i2404.m_UpperAngle = i2405[1]
  return i2404
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2406 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2407 = data
  i2406.m_MotorSpeed = i2407[0]
  i2406.m_MaximumMotorTorque = i2407[1]
  return i2406
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2408 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2409 = data
  i2408.m_DampingRatio = i2409[0]
  i2408.m_Frequency = i2409[1]
  i2408.m_Angle = i2409[2]
  return i2408
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2411 = data
  i2410.m_LowerTranslation = i2411[0]
  i2410.m_UpperTranslation = i2411[1]
  return i2410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2412 = root || new pc.UnityMaterial()
  var i2413 = data
  i2412.name = i2413[0]
  request.r(i2413[1], i2413[2], 0, i2412, 'shader')
  i2412.renderQueue = i2413[3]
  i2412.enableInstancing = !!i2413[4]
  var i2415 = i2413[5]
  var i2414 = []
  for(var i = 0; i < i2415.length; i += 1) {
    i2414.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2415[i + 0]) );
  }
  i2412.floatParameters = i2414
  var i2417 = i2413[6]
  var i2416 = []
  for(var i = 0; i < i2417.length; i += 1) {
    i2416.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2417[i + 0]) );
  }
  i2412.colorParameters = i2416
  var i2419 = i2413[7]
  var i2418 = []
  for(var i = 0; i < i2419.length; i += 1) {
    i2418.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2419[i + 0]) );
  }
  i2412.vectorParameters = i2418
  var i2421 = i2413[8]
  var i2420 = []
  for(var i = 0; i < i2421.length; i += 1) {
    i2420.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2421[i + 0]) );
  }
  i2412.textureParameters = i2420
  var i2423 = i2413[9]
  var i2422 = []
  for(var i = 0; i < i2423.length; i += 1) {
    i2422.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2423[i + 0]) );
  }
  i2412.materialFlags = i2422
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2427 = data
  i2426.name = i2427[0]
  i2426.value = i2427[1]
  return i2426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2431 = data
  i2430.name = i2431[0]
  i2430.value = new pc.Color(i2431[1], i2431[2], i2431[3], i2431[4])
  return i2430
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2435 = data
  i2434.name = i2435[0]
  i2434.value = new pc.Vec4( i2435[1], i2435[2], i2435[3], i2435[4] )
  return i2434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2439 = data
  i2438.name = i2439[0]
  request.r(i2439[1], i2439[2], 0, i2438, 'value')
  return i2438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2443 = data
  i2442.name = i2443[0]
  i2442.enabled = !!i2443[1]
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2445 = data
  i2444.name = i2445[0]
  i2444.width = i2445[1]
  i2444.height = i2445[2]
  i2444.mipmapCount = i2445[3]
  i2444.anisoLevel = i2445[4]
  i2444.filterMode = i2445[5]
  i2444.hdr = !!i2445[6]
  i2444.format = i2445[7]
  i2444.wrapMode = i2445[8]
  i2444.alphaIsTransparency = !!i2445[9]
  i2444.alphaSource = i2445[10]
  return i2444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2447 = data
  i2446.position = new pc.Vec3( i2447[0], i2447[1], i2447[2] )
  i2446.scale = new pc.Vec3( i2447[3], i2447[4], i2447[5] )
  i2446.rotation = new pc.Quat(i2447[6], i2447[7], i2447[8], i2447[9])
  return i2446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2449 = data
  request.r(i2449[0], i2449[1], 0, i2448, 'animatorController')
  request.r(i2449[2], i2449[3], 0, i2448, 'avatar')
  i2448.updateMode = i2449[4]
  i2448.hasTransformHierarchy = !!i2449[5]
  i2448.applyRootMotion = !!i2449[6]
  var i2451 = i2449[7]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 2) {
  request.r(i2451[i + 0], i2451[i + 1], 2, i2450, '')
  }
  i2448.humanBones = i2450
  i2448.enabled = !!i2449[8]
  return i2448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2455 = data
  i2454.name = i2455[0]
  i2454.tagId = i2455[1]
  i2454.enabled = !!i2455[2]
  i2454.isStatic = !!i2455[3]
  i2454.layer = i2455[4]
  return i2454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2457 = data
  i2456.enabled = !!i2457[0]
  request.r(i2457[1], i2457[2], 0, i2456, 'sharedMaterial')
  var i2459 = i2457[3]
  var i2458 = []
  for(var i = 0; i < i2459.length; i += 2) {
  request.r(i2459[i + 0], i2459[i + 1], 2, i2458, '')
  }
  i2456.sharedMaterials = i2458
  i2456.receiveShadows = !!i2457[4]
  i2456.shadowCastingMode = i2457[5]
  i2456.sortingLayerID = i2457[6]
  i2456.sortingOrder = i2457[7]
  i2456.lightmapIndex = i2457[8]
  i2456.lightmapSceneIndex = i2457[9]
  i2456.lightmapScaleOffset = new pc.Vec4( i2457[10], i2457[11], i2457[12], i2457[13] )
  i2456.lightProbeUsage = i2457[14]
  i2456.reflectionProbeUsage = i2457[15]
  request.r(i2457[16], i2457[17], 0, i2456, 'sharedMesh')
  var i2461 = i2457[18]
  var i2460 = []
  for(var i = 0; i < i2461.length; i += 2) {
  request.r(i2461[i + 0], i2461[i + 1], 2, i2460, '')
  }
  i2456.bones = i2460
  i2456.updateWhenOffscreen = !!i2457[19]
  i2456.localBounds = i2457[20]
  request.r(i2457[21], i2457[22], 0, i2456, 'rootBone')
  var i2463 = i2457[23]
  var i2462 = []
  for(var i = 0; i < i2463.length; i += 1) {
    i2462.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2463[i + 0]) );
  }
  i2456.blendShapesWeights = i2462
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2469 = data
  i2468.weight = i2469[0]
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2471 = data
  i2470.name = i2471[0]
  i2470.halfPrecision = !!i2471[1]
  i2470.vertexCount = i2471[2]
  i2470.aabb = i2471[3]
  var i2473 = i2471[4]
  var i2472 = []
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.push( !!i2473[i + 0] );
  }
  i2470.streams = i2472
  i2470.vertices = i2471[5]
  var i2475 = i2471[6]
  var i2474 = []
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2475[i + 0]) );
  }
  i2470.subMeshes = i2474
  var i2477 = i2471[7]
  var i2476 = []
  for(var i = 0; i < i2477.length; i += 16) {
    i2476.push( new pc.Mat4().setData(i2477[i + 0], i2477[i + 1], i2477[i + 2], i2477[i + 3],  i2477[i + 4], i2477[i + 5], i2477[i + 6], i2477[i + 7],  i2477[i + 8], i2477[i + 9], i2477[i + 10], i2477[i + 11],  i2477[i + 12], i2477[i + 13], i2477[i + 14], i2477[i + 15]) );
  }
  i2470.bindposes = i2476
  var i2479 = i2471[8]
  var i2478 = []
  for(var i = 0; i < i2479.length; i += 1) {
    i2478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2479[i + 0]) );
  }
  i2470.blendShapes = i2478
  return i2470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2485 = data
  i2484.triangles = i2485[0]
  return i2484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2491 = data
  i2490.name = i2491[0]
  var i2493 = i2491[1]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2493[i + 0]) );
  }
  i2490.frames = i2492
  return i2490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2495 = data
  request.r(i2495[0], i2495[1], 0, i2494, 'sharedMesh')
  return i2494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'additionalVertexStreams')
  i2496.enabled = !!i2497[2]
  request.r(i2497[3], i2497[4], 0, i2496, 'sharedMaterial')
  var i2499 = i2497[5]
  var i2498 = []
  for(var i = 0; i < i2499.length; i += 2) {
  request.r(i2499[i + 0], i2499[i + 1], 2, i2498, '')
  }
  i2496.sharedMaterials = i2498
  i2496.receiveShadows = !!i2497[6]
  i2496.shadowCastingMode = i2497[7]
  i2496.sortingLayerID = i2497[8]
  i2496.sortingOrder = i2497[9]
  i2496.lightmapIndex = i2497[10]
  i2496.lightmapSceneIndex = i2497[11]
  i2496.lightmapScaleOffset = new pc.Vec4( i2497[12], i2497[13], i2497[14], i2497[15] )
  i2496.lightProbeUsage = i2497[16]
  i2496.reflectionProbeUsage = i2497[17]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2501 = data
  i2500.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2501[0], i2500.main)
  i2500.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2501[1], i2500.colorBySpeed)
  i2500.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2501[2], i2500.colorOverLifetime)
  i2500.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2501[3], i2500.emission)
  i2500.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2501[4], i2500.rotationBySpeed)
  i2500.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2501[5], i2500.rotationOverLifetime)
  i2500.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2501[6], i2500.shape)
  i2500.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2501[7], i2500.sizeBySpeed)
  i2500.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2501[8], i2500.sizeOverLifetime)
  i2500.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2501[9], i2500.textureSheetAnimation)
  i2500.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2501[10], i2500.velocityOverLifetime)
  i2500.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2501[11], i2500.noise)
  i2500.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2501[12], i2500.inheritVelocity)
  i2500.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2501[13], i2500.forceOverLifetime)
  i2500.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2501[14], i2500.limitVelocityOverLifetime)
  i2500.useAutoRandomSeed = !!i2501[15]
  i2500.randomSeed = i2501[16]
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2502 = root || new pc.ParticleSystemMain()
  var i2503 = data
  i2502.duration = i2503[0]
  i2502.loop = !!i2503[1]
  i2502.prewarm = !!i2503[2]
  i2502.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[3], i2502.startDelay)
  i2502.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[4], i2502.startLifetime)
  i2502.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[5], i2502.startSpeed)
  i2502.startSize3D = !!i2503[6]
  i2502.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[7], i2502.startSizeX)
  i2502.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[8], i2502.startSizeY)
  i2502.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[9], i2502.startSizeZ)
  i2502.startRotation3D = !!i2503[10]
  i2502.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[11], i2502.startRotationX)
  i2502.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[12], i2502.startRotationY)
  i2502.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[13], i2502.startRotationZ)
  i2502.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2503[14], i2502.startColor)
  i2502.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2503[15], i2502.gravityModifier)
  i2502.simulationSpace = i2503[16]
  request.r(i2503[17], i2503[18], 0, i2502, 'customSimulationSpace')
  i2502.simulationSpeed = i2503[19]
  i2502.useUnscaledTime = !!i2503[20]
  i2502.scalingMode = i2503[21]
  i2502.playOnAwake = !!i2503[22]
  i2502.maxParticles = i2503[23]
  i2502.emitterVelocityMode = i2503[24]
  i2502.stopAction = i2503[25]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2504 = root || new pc.MinMaxCurve()
  var i2505 = data
  i2504.mode = i2505[0]
  i2504.curveMin = new pc.AnimationCurve( { keys_flow: i2505[1] } )
  i2504.curveMax = new pc.AnimationCurve( { keys_flow: i2505[2] } )
  i2504.curveMultiplier = i2505[3]
  i2504.constantMin = i2505[4]
  i2504.constantMax = i2505[5]
  return i2504
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2506 = root || new pc.MinMaxGradient()
  var i2507 = data
  i2506.mode = i2507[0]
  i2506.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2507[1], i2506.gradientMin)
  i2506.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2507[2], i2506.gradientMax)
  i2506.colorMin = new pc.Color(i2507[3], i2507[4], i2507[5], i2507[6])
  i2506.colorMax = new pc.Color(i2507[7], i2507[8], i2507[9], i2507[10])
  return i2506
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2509 = data
  i2508.mode = i2509[0]
  var i2511 = i2509[1]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2511[i + 0]) );
  }
  i2508.colorKeys = i2510
  var i2513 = i2509[2]
  var i2512 = []
  for(var i = 0; i < i2513.length; i += 1) {
    i2512.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2513[i + 0]) );
  }
  i2508.alphaKeys = i2512
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2514 = root || new pc.ParticleSystemColorBySpeed()
  var i2515 = data
  i2514.enabled = !!i2515[0]
  i2514.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2515[1], i2514.color)
  i2514.range = new pc.Vec2( i2515[2], i2515[3] )
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2519 = data
  i2518.color = new pc.Color(i2519[0], i2519[1], i2519[2], i2519[3])
  i2518.time = i2519[4]
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2523 = data
  i2522.alpha = i2523[0]
  i2522.time = i2523[1]
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2524 = root || new pc.ParticleSystemColorOverLifetime()
  var i2525 = data
  i2524.enabled = !!i2525[0]
  i2524.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2525[1], i2524.color)
  return i2524
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2526 = root || new pc.ParticleSystemEmitter()
  var i2527 = data
  i2526.enabled = !!i2527[0]
  i2526.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[1], i2526.rateOverTime)
  i2526.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2527[2], i2526.rateOverDistance)
  var i2529 = i2527[3]
  var i2528 = []
  for(var i = 0; i < i2529.length; i += 1) {
    i2528.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2529[i + 0]) );
  }
  i2526.bursts = i2528
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2532 = root || new pc.ParticleSystemBurst()
  var i2533 = data
  i2532.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[0], i2532.count)
  i2532.cycleCount = i2533[1]
  i2532.minCount = i2533[2]
  i2532.maxCount = i2533[3]
  i2532.repeatInterval = i2533[4]
  i2532.time = i2533[5]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2534 = root || new pc.ParticleSystemRotationBySpeed()
  var i2535 = data
  i2534.enabled = !!i2535[0]
  i2534.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[1], i2534.x)
  i2534.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[2], i2534.y)
  i2534.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2535[3], i2534.z)
  i2534.separateAxes = !!i2535[4]
  i2534.range = new pc.Vec2( i2535[5], i2535[6] )
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2536 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2537 = data
  i2536.enabled = !!i2537[0]
  i2536.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[1], i2536.x)
  i2536.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[2], i2536.y)
  i2536.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2537[3], i2536.z)
  i2536.separateAxes = !!i2537[4]
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2538 = root || new pc.ParticleSystemShape()
  var i2539 = data
  i2538.enabled = !!i2539[0]
  i2538.shapeType = i2539[1]
  i2538.randomDirectionAmount = i2539[2]
  i2538.sphericalDirectionAmount = i2539[3]
  i2538.randomPositionAmount = i2539[4]
  i2538.alignToDirection = !!i2539[5]
  i2538.radius = i2539[6]
  i2538.radiusMode = i2539[7]
  i2538.radiusSpread = i2539[8]
  i2538.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2539[9], i2538.radiusSpeed)
  i2538.radiusThickness = i2539[10]
  i2538.angle = i2539[11]
  i2538.length = i2539[12]
  i2538.boxThickness = new pc.Vec3( i2539[13], i2539[14], i2539[15] )
  i2538.meshShapeType = i2539[16]
  request.r(i2539[17], i2539[18], 0, i2538, 'mesh')
  request.r(i2539[19], i2539[20], 0, i2538, 'meshRenderer')
  request.r(i2539[21], i2539[22], 0, i2538, 'skinnedMeshRenderer')
  i2538.useMeshMaterialIndex = !!i2539[23]
  i2538.meshMaterialIndex = i2539[24]
  i2538.useMeshColors = !!i2539[25]
  i2538.normalOffset = i2539[26]
  i2538.arc = i2539[27]
  i2538.arcMode = i2539[28]
  i2538.arcSpread = i2539[29]
  i2538.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2539[30], i2538.arcSpeed)
  i2538.donutRadius = i2539[31]
  i2538.position = new pc.Vec3( i2539[32], i2539[33], i2539[34] )
  i2538.rotation = new pc.Vec3( i2539[35], i2539[36], i2539[37] )
  i2538.scale = new pc.Vec3( i2539[38], i2539[39], i2539[40] )
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2540 = root || new pc.ParticleSystemSizeBySpeed()
  var i2541 = data
  i2540.enabled = !!i2541[0]
  i2540.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2541[1], i2540.x)
  i2540.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2541[2], i2540.y)
  i2540.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2541[3], i2540.z)
  i2540.separateAxes = !!i2541[4]
  i2540.range = new pc.Vec2( i2541[5], i2541[6] )
  return i2540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2542 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2543 = data
  i2542.enabled = !!i2543[0]
  i2542.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[1], i2542.x)
  i2542.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[2], i2542.y)
  i2542.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2543[3], i2542.z)
  i2542.separateAxes = !!i2543[4]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2544 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2545 = data
  i2544.enabled = !!i2545[0]
  i2544.mode = i2545[1]
  i2544.animation = i2545[2]
  i2544.numTilesX = i2545[3]
  i2544.numTilesY = i2545[4]
  i2544.useRandomRow = !!i2545[5]
  i2544.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[6], i2544.frameOverTime)
  i2544.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2545[7], i2544.startFrame)
  i2544.cycleCount = i2545[8]
  i2544.rowIndex = i2545[9]
  i2544.flipU = i2545[10]
  i2544.flipV = i2545[11]
  i2544.spriteCount = i2545[12]
  var i2547 = i2545[13]
  var i2546 = []
  for(var i = 0; i < i2547.length; i += 2) {
  request.r(i2547[i + 0], i2547[i + 1], 2, i2546, '')
  }
  i2544.sprites = i2546
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2550 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2551 = data
  i2550.enabled = !!i2551[0]
  i2550.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[1], i2550.x)
  i2550.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[2], i2550.y)
  i2550.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[3], i2550.z)
  i2550.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[4], i2550.radial)
  i2550.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[5], i2550.speedModifier)
  i2550.space = i2551[6]
  i2550.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[7], i2550.orbitalX)
  i2550.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[8], i2550.orbitalY)
  i2550.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[9], i2550.orbitalZ)
  i2550.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[10], i2550.orbitalOffsetX)
  i2550.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[11], i2550.orbitalOffsetY)
  i2550.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2551[12], i2550.orbitalOffsetZ)
  return i2550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2552 = root || new pc.ParticleSystemNoise()
  var i2553 = data
  i2552.enabled = !!i2553[0]
  i2552.separateAxes = !!i2553[1]
  i2552.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[2], i2552.strengthX)
  i2552.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[3], i2552.strengthY)
  i2552.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[4], i2552.strengthZ)
  i2552.frequency = i2553[5]
  i2552.damping = !!i2553[6]
  i2552.octaveCount = i2553[7]
  i2552.octaveMultiplier = i2553[8]
  i2552.octaveScale = i2553[9]
  i2552.quality = i2553[10]
  i2552.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[11], i2552.scrollSpeed)
  i2552.scrollSpeedMultiplier = i2553[12]
  i2552.remapEnabled = !!i2553[13]
  i2552.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[14], i2552.remapX)
  i2552.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[15], i2552.remapY)
  i2552.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[16], i2552.remapZ)
  i2552.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[17], i2552.positionAmount)
  i2552.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[18], i2552.rotationAmount)
  i2552.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2553[19], i2552.sizeAmount)
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2554 = root || new pc.ParticleSystemInheritVelocity()
  var i2555 = data
  i2554.enabled = !!i2555[0]
  i2554.mode = i2555[1]
  i2554.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2555[2], i2554.curve)
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2556 = root || new pc.ParticleSystemForceOverLifetime()
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2557[1], i2556.x)
  i2556.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2557[2], i2556.y)
  i2556.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2557[3], i2556.z)
  i2556.space = i2557[4]
  i2556.randomized = !!i2557[5]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2558 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2559 = data
  i2558.enabled = !!i2559[0]
  i2558.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[1], i2558.limit)
  i2558.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[2], i2558.limitX)
  i2558.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[3], i2558.limitY)
  i2558.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[4], i2558.limitZ)
  i2558.dampen = i2559[5]
  i2558.separateAxes = !!i2559[6]
  i2558.space = i2559[7]
  i2558.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2559[8], i2558.drag)
  i2558.multiplyDragByParticleSize = !!i2559[9]
  i2558.multiplyDragByParticleVelocity = !!i2559[10]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2561 = data
  i2560.enabled = !!i2561[0]
  request.r(i2561[1], i2561[2], 0, i2560, 'sharedMaterial')
  var i2563 = i2561[3]
  var i2562 = []
  for(var i = 0; i < i2563.length; i += 2) {
  request.r(i2563[i + 0], i2563[i + 1], 2, i2562, '')
  }
  i2560.sharedMaterials = i2562
  i2560.receiveShadows = !!i2561[4]
  i2560.shadowCastingMode = i2561[5]
  i2560.sortingLayerID = i2561[6]
  i2560.sortingOrder = i2561[7]
  i2560.lightmapIndex = i2561[8]
  i2560.lightmapSceneIndex = i2561[9]
  i2560.lightmapScaleOffset = new pc.Vec4( i2561[10], i2561[11], i2561[12], i2561[13] )
  i2560.lightProbeUsage = i2561[14]
  i2560.reflectionProbeUsage = i2561[15]
  request.r(i2561[16], i2561[17], 0, i2560, 'mesh')
  i2560.meshCount = i2561[18]
  i2560.activeVertexStreamsCount = i2561[19]
  i2560.alignment = i2561[20]
  i2560.renderMode = i2561[21]
  i2560.sortMode = i2561[22]
  i2560.lengthScale = i2561[23]
  i2560.velocityScale = i2561[24]
  i2560.cameraVelocityScale = i2561[25]
  i2560.normalDirection = i2561[26]
  i2560.sortingFudge = i2561[27]
  i2560.minParticleSize = i2561[28]
  i2560.maxParticleSize = i2561[29]
  i2560.pivot = new pc.Vec3( i2561[30], i2561[31], i2561[32] )
  request.r(i2561[33], i2561[34], 0, i2560, 'trailMaterial')
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2565 = data
  request.r(i2565[0], i2565[1], 0, i2564, 'clip')
  request.r(i2565[2], i2565[3], 0, i2564, 'outputAudioMixerGroup')
  i2564.playOnAwake = !!i2565[4]
  i2564.loop = !!i2565[5]
  i2564.time = i2565[6]
  i2564.volume = i2565[7]
  i2564.pitch = i2565[8]
  i2564.enabled = !!i2565[9]
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.isTrigger = !!i2567[1]
  request.r(i2567[2], i2567[3], 0, i2566, 'material')
  request.r(i2567[4], i2567[5], 0, i2566, 'sharedMesh')
  i2566.convex = !!i2567[6]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2569 = data
  i2568.enabled = !!i2569[0]
  i2568.aspect = i2569[1]
  i2568.orthographic = !!i2569[2]
  i2568.orthographicSize = i2569[3]
  i2568.backgroundColor = new pc.Color(i2569[4], i2569[5], i2569[6], i2569[7])
  i2568.nearClipPlane = i2569[8]
  i2568.farClipPlane = i2569[9]
  i2568.fieldOfView = i2569[10]
  i2568.depth = i2569[11]
  i2568.clearFlags = i2569[12]
  i2568.cullingMask = i2569[13]
  i2568.rect = i2569[14]
  request.r(i2569[15], i2569[16], 0, i2568, 'targetTexture')
  i2568.usePhysicalProperties = !!i2569[17]
  i2568.focalLength = i2569[18]
  i2568.sensorSize = new pc.Vec2( i2569[19], i2569[20] )
  i2568.lensShift = new pc.Vec2( i2569[21], i2569[22] )
  i2568.gateFit = i2569[23]
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2571 = data
  i2570.center = new pc.Vec3( i2571[0], i2571[1], i2571[2] )
  i2570.size = new pc.Vec3( i2571[3], i2571[4], i2571[5] )
  i2570.enabled = !!i2571[6]
  i2570.isTrigger = !!i2571[7]
  request.r(i2571[8], i2571[9], 0, i2570, 'material')
  return i2570
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i2572 = root || request.c( 'PlayerView' )
  var i2573 = data
  request.r(i2573[0], i2573[1], 0, i2572, '_mainRoot')
  request.r(i2573[2], i2573[3], 0, i2572, '_head')
  i2572._sensitivity = i2573[4]
  i2572._slerpFactor = i2573[5]
  i2572._viewHorizontalThreshold = new pc.Vec2( i2573[6], i2573[7] )
  i2572._viewVerticalThreshold = new pc.Vec2( i2573[8], i2573[9] )
  i2572._initRotate = new pc.Vec2( i2573[10], i2573[11] )
  i2572._totalRotate = new pc.Vec2( i2573[12], i2573[13] )
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2575 = data
  i2574.playAutomatically = !!i2575[0]
  request.r(i2575[1], i2575[2], 0, i2574, 'clip')
  var i2577 = i2575[3]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 2, i2576, '')
  }
  i2574.clips = i2576
  i2574.wrapMode = i2575[4]
  i2574.enabled = !!i2575[5]
  return i2574
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i2580 = root || request.c( 'WeaponController' )
  var i2581 = data
  i2580.Mask = UnityEngine.LayerMask.FromIntegerValue( i2581[0] )
  i2580.damage = i2581[1]
  request.r(i2581[2], i2581[3], 0, i2580, '_muzzleTrans')
  request.r(i2581[4], i2581[5], 0, i2580, '_animation')
  request.r(i2581[6], i2581[7], 0, i2580, 'bullet')
  request.r(i2581[8], i2581[9], 0, i2580, '_muzzleFlash')
  request.r(i2581[10], i2581[11], 0, i2580, 'audioClip')
  request.r(i2581[12], i2581[13], 0, i2580, 'audioSource')
  i2580.SphereRadius = i2581[14]
  request.r(i2581[15], i2581[16], 0, i2580, 'Effect')
  return i2580
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i2582 = root || request.c( 'BulletTrail' )
  var i2583 = data
  i2582.Speed = i2583[0]
  i2582.LifeTime = i2583[1]
  request.r(i2583[2], i2583[3], 0, i2582, '_trail')
  i2582._trailStartScale = new pc.Vec3( i2583[4], i2583[5], i2583[6] )
  i2582._trailMaxScale = new pc.Vec3( i2583[7], i2583[8], i2583[9] )
  i2582._trailLengthAtMaxScale = i2583[10]
  return i2582
}

Deserializers["Effect"] = function (request, data, root) {
  var i2584 = root || request.c( 'Effect' )
  var i2585 = data
  var i2587 = i2585[0]
  var i2586 = []
  for(var i = 0; i < i2587.length; i += 2) {
  request.r(i2587[i + 0], i2587[i + 1], 2, i2586, '')
  }
  i2584.particles = i2586
  i2584._lifeTime = i2585[1]
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2591 = data
  i2590.pivot = new pc.Vec2( i2591[0], i2591[1] )
  i2590.anchorMin = new pc.Vec2( i2591[2], i2591[3] )
  i2590.anchorMax = new pc.Vec2( i2591[4], i2591[5] )
  i2590.sizeDelta = new pc.Vec2( i2591[6], i2591[7] )
  i2590.anchoredPosition3D = new pc.Vec3( i2591[8], i2591[9], i2591[10] )
  i2590.rotation = new pc.Quat(i2591[11], i2591[12], i2591[13], i2591[14])
  i2590.scale = new pc.Vec3( i2591[15], i2591[16], i2591[17] )
  return i2590
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i2592 = root || request.c( 'UICrosshairItem' )
  var i2593 = data
  request.r(i2593[0], i2593[1], 0, i2592, 'CrosshairRectTransform')
  i2592._distanceMax = i2593[2]
  i2592._distanceMin = i2593[3]
  i2592._speedShrink = i2593[4]
  i2592._currentSpeed = i2593[5]
  i2592._rateOnMove = i2593[6]
  i2592._rateOnAttack = i2593[7]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2595 = data
  i2594.cullTransparentMesh = !!i2595[0]
  return i2594
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2596 = root || request.c( 'UnityEngine.UI.Image' )
  var i2597 = data
  request.r(i2597[0], i2597[1], 0, i2596, 'm_Sprite')
  i2596.m_Type = i2597[2]
  i2596.m_PreserveAspect = !!i2597[3]
  i2596.m_FillCenter = !!i2597[4]
  i2596.m_FillMethod = i2597[5]
  i2596.m_FillAmount = i2597[6]
  i2596.m_FillClockwise = !!i2597[7]
  i2596.m_FillOrigin = i2597[8]
  i2596.m_UseSpriteMesh = !!i2597[9]
  i2596.m_PixelsPerUnitMultiplier = i2597[10]
  request.r(i2597[11], i2597[12], 0, i2596, 'm_Material')
  i2596.m_Maskable = !!i2597[13]
  i2596.m_Color = new pc.Color(i2597[14], i2597[15], i2597[16], i2597[17])
  i2596.m_RaycastTarget = !!i2597[18]
  i2596.m_RaycastPadding = new pc.Vec4( i2597[19], i2597[20], i2597[21], i2597[22] )
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2599 = data
  i2598.name = i2599[0]
  i2598.atlasId = i2599[1]
  i2598.mipmapCount = i2599[2]
  i2598.hdr = !!i2599[3]
  i2598.size = i2599[4]
  i2598.anisoLevel = i2599[5]
  i2598.filterMode = i2599[6]
  i2598.wrapMode = i2599[7]
  var i2601 = i2599[8]
  var i2600 = []
  for(var i = 0; i < i2601.length; i += 4) {
    i2600.push( UnityEngine.Rect.MinMaxRect(i2601[i + 0], i2601[i + 1], i2601[i + 2], i2601[i + 3]) );
  }
  i2598.rects = i2600
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2605 = data
  i2604.name = i2605[0]
  i2604.index = i2605[1]
  i2604.startup = !!i2605[2]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2607 = data
  i2606.enabled = !!i2607[0]
  i2606.type = i2607[1]
  i2606.color = new pc.Color(i2607[2], i2607[3], i2607[4], i2607[5])
  i2606.cullingMask = i2607[6]
  i2606.intensity = i2607[7]
  i2606.range = i2607[8]
  i2606.spotAngle = i2607[9]
  i2606.shadows = i2607[10]
  i2606.shadowNormalBias = i2607[11]
  i2606.shadowBias = i2607[12]
  i2606.shadowStrength = i2607[13]
  i2606.shadowResolution = i2607[14]
  i2606.lightmapBakeType = i2607[15]
  i2606.renderMode = i2607[16]
  request.r(i2607[17], i2607[18], 0, i2606, 'cookie')
  i2606.cookieSize = i2607[19]
  return i2606
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i2608 = root || request.c( 'ObjectPool' )
  var i2609 = data
  return i2608
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2610 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2611 = data
  request.r(i2611[0], i2611[1], 0, i2610, 'm_FirstSelected')
  i2610.m_sendNavigationEvents = !!i2611[2]
  i2610.m_DragThreshold = i2611[3]
  return i2610
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2613 = data
  i2612.m_HorizontalAxis = i2613[0]
  i2612.m_VerticalAxis = i2613[1]
  i2612.m_SubmitButton = i2613[2]
  i2612.m_CancelButton = i2613[3]
  i2612.m_InputActionsPerSecond = i2613[4]
  i2612.m_RepeatDelay = i2613[5]
  i2612.m_ForceModuleActive = !!i2613[6]
  i2612.m_SendPointerHoverToParent = !!i2613[7]
  return i2612
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i2614 = root || request.c( 'PathSigleton' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i2617.length; i += 2) {
  request.r(i2617[i + 0], i2617[i + 1], 1, i2616, '')
  }
  i2614._paths = i2616
  return i2614
}

Deserializers["Path"] = function (request, data, root) {
  var i2620 = root || request.c( 'Path' )
  var i2621 = data
  var i2623 = i2621[0]
  var i2622 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2623.length; i += 2) {
  request.r(i2623[i + 0], i2623[i + 1], 1, i2622, '')
  }
  i2620.points = i2622
  return i2620
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i2626 = root || request.c( 'SpawnBot' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'botPrefab')
  i2626.spawnInterval = i2627[2]
  i2626.UPPER = i2627[3]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2629 = data
  i2628.enabled = !!i2629[0]
  i2628.planeDistance = i2629[1]
  i2628.referencePixelsPerUnit = i2629[2]
  i2628.isFallbackOverlay = !!i2629[3]
  i2628.renderMode = i2629[4]
  i2628.renderOrder = i2629[5]
  i2628.sortingLayerName = i2629[6]
  i2628.sortingOrder = i2629[7]
  i2628.scaleFactor = i2629[8]
  request.r(i2629[9], i2629[10], 0, i2628, 'worldCamera')
  i2628.overrideSorting = !!i2629[11]
  i2628.pixelPerfect = !!i2629[12]
  i2628.targetDisplay = i2629[13]
  i2628.overridePixelPerfect = !!i2629[14]
  return i2628
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2631 = data
  i2630.m_UiScaleMode = i2631[0]
  i2630.m_ReferencePixelsPerUnit = i2631[1]
  i2630.m_ScaleFactor = i2631[2]
  i2630.m_ReferenceResolution = new pc.Vec2( i2631[3], i2631[4] )
  i2630.m_ScreenMatchMode = i2631[5]
  i2630.m_MatchWidthOrHeight = i2631[6]
  i2630.m_PhysicalUnit = i2631[7]
  i2630.m_FallbackScreenDPI = i2631[8]
  i2630.m_DefaultSpriteDPI = i2631[9]
  i2630.m_DynamicPixelsPerUnit = i2631[10]
  i2630.m_PresetInfoIsWorld = !!i2631[11]
  return i2630
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2633 = data
  i2632.m_IgnoreReversedGraphics = !!i2633[0]
  i2632.m_BlockingObjects = i2633[1]
  i2632.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2633[2] )
  return i2632
}

Deserializers["BotController"] = function (request, data, root) {
  var i2634 = root || request.c( 'BotController' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, '_animator')
  request.r(i2635[2], i2635[3], 0, i2634, '_muzzle')
  request.r(i2635[4], i2635[5], 0, i2634, 'bullet')
  request.r(i2635[6], i2635[7], 0, i2634, 'target')
  i2634.moveIndex = i2635[8]
  i2634.isMoveDone = !!i2635[9]
  i2634.isDie = !!i2635[10]
  i2634.isTakeDame = !!i2635[11]
  i2634.maxHealth = i2635[12]
  request.r(i2635[13], i2635[14], 0, i2634, 'healthBarRenderer')
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2637 = data
  i2636.ambientIntensity = i2637[0]
  i2636.reflectionIntensity = i2637[1]
  i2636.ambientMode = i2637[2]
  i2636.ambientLight = new pc.Color(i2637[3], i2637[4], i2637[5], i2637[6])
  i2636.ambientSkyColor = new pc.Color(i2637[7], i2637[8], i2637[9], i2637[10])
  i2636.ambientGroundColor = new pc.Color(i2637[11], i2637[12], i2637[13], i2637[14])
  i2636.ambientEquatorColor = new pc.Color(i2637[15], i2637[16], i2637[17], i2637[18])
  i2636.fogColor = new pc.Color(i2637[19], i2637[20], i2637[21], i2637[22])
  i2636.fogEndDistance = i2637[23]
  i2636.fogStartDistance = i2637[24]
  i2636.fogDensity = i2637[25]
  i2636.fog = !!i2637[26]
  request.r(i2637[27], i2637[28], 0, i2636, 'skybox')
  i2636.fogMode = i2637[29]
  var i2639 = i2637[30]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2639[i + 0]) );
  }
  i2636.lightmaps = i2638
  i2636.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2637[31], i2636.lightProbes)
  i2636.lightmapsMode = i2637[32]
  i2636.mixedBakeMode = i2637[33]
  i2636.environmentLightingMode = i2637[34]
  i2636.ambientProbe = new pc.SphericalHarmonicsL2(i2637[35])
  i2636.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2637[36])
  i2636.useReferenceAmbientProbe = !!i2637[37]
  request.r(i2637[38], i2637[39], 0, i2636, 'customReflection')
  request.r(i2637[40], i2637[41], 0, i2636, 'defaultReflection')
  i2636.defaultReflectionMode = i2637[42]
  i2636.defaultReflectionResolution = i2637[43]
  i2636.sunLightObjectId = i2637[44]
  i2636.pixelLightCount = i2637[45]
  i2636.defaultReflectionHDR = !!i2637[46]
  i2636.hasLightDataAsset = !!i2637[47]
  i2636.hasManualGenerate = !!i2637[48]
  return i2636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2643 = data
  request.r(i2643[0], i2643[1], 0, i2642, 'lightmapColor')
  request.r(i2643[2], i2643[3], 0, i2642, 'lightmapDirection')
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2644 = root || new UnityEngine.LightProbes()
  var i2645 = data
  return i2644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2653 = data
  var i2655 = i2653[0]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2655.length; i += 1) {
    i2654.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2655[i + 0]));
  }
  i2652.ShaderCompilationErrors = i2654
  i2652.name = i2653[1]
  i2652.guid = i2653[2]
  var i2657 = i2653[3]
  var i2656 = []
  for(var i = 0; i < i2657.length; i += 1) {
    i2656.push( i2657[i + 0] );
  }
  i2652.shaderDefinedKeywords = i2656
  var i2659 = i2653[4]
  var i2658 = []
  for(var i = 0; i < i2659.length; i += 1) {
    i2658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2659[i + 0]) );
  }
  i2652.passes = i2658
  var i2661 = i2653[5]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2661[i + 0]) );
  }
  i2652.usePasses = i2660
  var i2663 = i2653[6]
  var i2662 = []
  for(var i = 0; i < i2663.length; i += 1) {
    i2662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2663[i + 0]) );
  }
  i2652.defaultParameterValues = i2662
  request.r(i2653[7], i2653[8], 0, i2652, 'unityFallbackShader')
  i2652.readDepth = !!i2653[9]
  i2652.isCreatedByShaderGraph = !!i2653[10]
  i2652.usedBatchUniforms = i2653[11]
  return i2652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2667 = data
  i2666.shaderName = i2667[0]
  i2666.errorMessage = i2667[1]
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2672 = root || new pc.UnityShaderPass()
  var i2673 = data
  i2672.id = i2673[0]
  i2672.subShaderIndex = i2673[1]
  i2672.name = i2673[2]
  i2672.passType = i2673[3]
  i2672.grabPassTextureName = i2673[4]
  i2672.usePass = !!i2673[5]
  i2672.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[6], i2672.zTest)
  i2672.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[7], i2672.zWrite)
  i2672.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[8], i2672.culling)
  i2672.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2673[9], i2672.blending)
  i2672.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2673[10], i2672.alphaBlending)
  i2672.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[11], i2672.colorWriteMask)
  i2672.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[12], i2672.offsetUnits)
  i2672.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[13], i2672.offsetFactor)
  i2672.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[14], i2672.stencilRef)
  i2672.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[15], i2672.stencilReadMask)
  i2672.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2673[16], i2672.stencilWriteMask)
  i2672.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2673[17], i2672.stencilOp)
  i2672.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2673[18], i2672.stencilOpFront)
  i2672.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2673[19], i2672.stencilOpBack)
  var i2675 = i2673[20]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2675[i + 0]) );
  }
  i2672.tags = i2674
  var i2677 = i2673[21]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( i2677[i + 0] );
  }
  i2672.passDefinedKeywords = i2676
  var i2679 = i2673[22]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2679[i + 0]) );
  }
  i2672.passDefinedKeywordGroups = i2678
  var i2681 = i2673[23]
  var i2680 = []
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2681[i + 0]) );
  }
  i2672.variants = i2680
  var i2683 = i2673[24]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2683[i + 0]) );
  }
  i2672.excludedVariants = i2682
  i2672.hasDepthReader = !!i2673[25]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2685 = data
  i2684.val = i2685[0]
  i2684.name = i2685[1]
  return i2684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2687 = data
  i2686.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[0], i2686.src)
  i2686.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[1], i2686.dst)
  i2686.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2687[2], i2686.op)
  return i2686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2689 = data
  i2688.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2689[0], i2688.pass)
  i2688.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2689[1], i2688.fail)
  i2688.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2689[2], i2688.zFail)
  i2688.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2689[3], i2688.comp)
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2693 = data
  i2692.name = i2693[0]
  i2692.value = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2697 = data
  var i2699 = i2697[0]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( i2699[i + 0] );
  }
  i2696.keywords = i2698
  i2696.hasDiscard = !!i2697[1]
  return i2696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2703 = data
  i2702.passId = i2703[0]
  i2702.subShaderIndex = i2703[1]
  var i2705 = i2703[2]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( i2705[i + 0] );
  }
  i2702.keywords = i2704
  i2702.vertexProgram = i2703[3]
  i2702.fragmentProgram = i2703[4]
  i2702.readDepth = !!i2703[5]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2709 = data
  request.r(i2709[0], i2709[1], 0, i2708, 'shader')
  i2708.pass = i2709[2]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2713 = data
  i2712.name = i2713[0]
  i2712.type = i2713[1]
  i2712.value = new pc.Vec4( i2713[2], i2713[3], i2713[4], i2713[5] )
  i2712.textureValue = i2713[6]
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2715 = data
  i2714.name = i2715[0]
  request.r(i2715[1], i2715[2], 0, i2714, 'texture')
  i2714.aabb = i2715[3]
  i2714.vertices = i2715[4]
  i2714.triangles = i2715[5]
  i2714.textureRect = UnityEngine.Rect.MinMaxRect(i2715[6], i2715[7], i2715[8], i2715[9])
  i2714.packedRect = UnityEngine.Rect.MinMaxRect(i2715[10], i2715[11], i2715[12], i2715[13])
  i2714.border = new pc.Vec4( i2715[14], i2715[15], i2715[16], i2715[17] )
  i2714.transparency = i2715[18]
  i2714.bounds = i2715[19]
  i2714.pixelsPerUnit = i2715[20]
  i2714.textureWidth = i2715[21]
  i2714.textureHeight = i2715[22]
  i2714.nativeSize = new pc.Vec2( i2715[23], i2715[24] )
  i2714.pivot = new pc.Vec2( i2715[25], i2715[26] )
  i2714.textureRectOffset = new pc.Vec2( i2715[27], i2715[28] )
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2717 = data
  i2716.name = i2717[0]
  return i2716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.wrapMode = i2719[1]
  i2718.isLooping = !!i2719[2]
  i2718.length = i2719[3]
  var i2721 = i2719[4]
  var i2720 = []
  for(var i = 0; i < i2721.length; i += 1) {
    i2720.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2721[i + 0]) );
  }
  i2718.curves = i2720
  var i2723 = i2719[5]
  var i2722 = []
  for(var i = 0; i < i2723.length; i += 1) {
    i2722.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2723[i + 0]) );
  }
  i2718.events = i2722
  i2718.halfPrecision = !!i2719[6]
  i2718.frameRate = i2719[7]
  i2718.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2719[8], i2718.localBounds)
  i2718.hasMuscleCurves = !!i2719[9]
  var i2725 = i2719[10]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2718.clipMuscleConstant = i2724
  i2718.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2719[11], i2718.clipBindingConstant)
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2729 = data
  i2728.path = i2729[0]
  i2728.componentType = i2729[1]
  i2728.property = i2729[2]
  i2728.keys = i2729[3]
  var i2731 = i2729[4]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2731[i + 0]) );
  }
  i2728.objectReferenceKeys = i2730
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2735 = data
  i2734.time = i2735[0]
  request.r(i2735[1], i2735[2], 0, i2734, 'value')
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2739 = data
  i2738.functionName = i2739[0]
  i2738.floatParameter = i2739[1]
  i2738.intParameter = i2739[2]
  i2738.stringParameter = i2739[3]
  request.r(i2739[4], i2739[5], 0, i2738, 'objectReferenceParameter')
  i2738.time = i2739[6]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2741 = data
  i2740.center = new pc.Vec3( i2741[0], i2741[1], i2741[2] )
  i2740.extends = new pc.Vec3( i2741[3], i2741[4], i2741[5] )
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2745 = data
  var i2747 = i2745[0]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( i2747[i + 0] );
  }
  i2744.genericBindings = i2746
  var i2749 = i2745[1]
  var i2748 = []
  for(var i = 0; i < i2749.length; i += 1) {
    i2748.push( i2749[i + 0] );
  }
  i2744.pptrCurveMapping = i2748
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2751 = data
  i2750.name = i2751[0]
  var i2753 = i2751[1]
  var i2752 = []
  for(var i = 0; i < i2753.length; i += 1) {
    i2752.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2753[i + 0]) );
  }
  i2750.states = i2752
  var i2755 = i2751[2]
  var i2754 = []
  for(var i = 0; i < i2755.length; i += 1) {
    i2754.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2755[i + 0]) );
  }
  i2750.layers = i2754
  var i2757 = i2751[3]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2757[i + 0]) );
  }
  i2750.parameters = i2756
  i2750.animationClips = i2751[4]
  i2750.HasSubStateMachines = !!i2751[5]
  i2750.avatarUnsupported = i2751[6]
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2761 = data
  i2760.cycleOffset = i2761[0]
  i2760.cycleOffsetParameter = i2761[1]
  i2760.cycleOffsetParameterActive = !!i2761[2]
  i2760.mirror = !!i2761[3]
  i2760.mirrorParameter = i2761[4]
  i2760.mirrorParameterActive = !!i2761[5]
  i2760.motionId = i2761[6]
  i2760.nameHash = i2761[7]
  i2760.fullPathHash = i2761[8]
  i2760.speed = i2761[9]
  i2760.speedParameter = i2761[10]
  i2760.speedParameterActive = !!i2761[11]
  i2760.tag = i2761[12]
  i2760.name = i2761[13]
  i2760.layer = i2761[14]
  i2760.writeDefaultValues = !!i2761[15]
  var i2763 = i2761[16]
  var i2762 = []
  for(var i = 0; i < i2763.length; i += 1) {
    i2762.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2763[i + 0]) );
  }
  i2760.transitions = i2762
  var i2765 = i2761[17]
  var i2764 = []
  for(var i = 0; i < i2765.length; i += 2) {
  request.r(i2765[i + 0], i2765[i + 1], 2, i2764, '')
  }
  i2760.behaviours = i2764
  return i2760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2769 = data
  i2768.fullPath = i2769[0]
  i2768.canTransitionToSelf = !!i2769[1]
  i2768.duration = i2769[2]
  i2768.exitTime = i2769[3]
  i2768.hasExitTime = !!i2769[4]
  i2768.hasFixedDuration = !!i2769[5]
  i2768.interruptionSource = i2769[6]
  i2768.offset = i2769[7]
  i2768.orderedInterruption = !!i2769[8]
  i2768.destinationStateNameHash = i2769[9]
  i2768.destinationStateMachineId = i2769[10]
  i2768.isExit = !!i2769[11]
  i2768.mute = !!i2769[12]
  i2768.solo = !!i2769[13]
  var i2771 = i2769[14]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2771[i + 0]) );
  }
  i2768.conditions = i2770
  return i2768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2775 = data
  i2774.mode = i2775[0]
  i2774.parameter = i2775[1]
  i2774.threshold = i2775[2]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2781 = data
  i2780.blendingMode = i2781[0]
  i2780.defaultWeight = i2781[1]
  i2780.name = i2781[2]
  i2780.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2781[3], i2780.stateMachine)
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2783 = data
  i2782.id = i2783[0]
  i2782.defaultStateNameHash = i2783[1]
  var i2785 = i2783[2]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2785[i + 0]) );
  }
  i2782.entryTransitions = i2784
  var i2787 = i2783[3]
  var i2786 = []
  for(var i = 0; i < i2787.length; i += 1) {
    i2786.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2787[i + 0]) );
  }
  i2782.anyStateTransitions = i2786
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2791 = data
  i2790.destinationStateNameHash = i2791[0]
  i2790.destinationStateMachineId = i2791[1]
  i2790.isExit = !!i2791[2]
  i2790.mute = !!i2791[3]
  i2790.solo = !!i2791[4]
  var i2793 = i2791[5]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2793[i + 0]) );
  }
  i2790.conditions = i2792
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2797 = data
  i2796.defaultBool = !!i2797[0]
  i2796.defaultFloat = i2797[1]
  i2796.defaultInt = i2797[2]
  i2796.name = i2797[3]
  i2796.nameHash = i2797[4]
  i2796.type = i2797[5]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2799 = data
  var i2801 = i2799[0]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2801[i + 0]) );
  }
  i2798.files = i2800
  i2798.componentToPrefabIds = i2799[1]
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2805 = data
  i2804.path = i2805[0]
  request.r(i2805[1], i2805[2], 0, i2804, 'unityObject')
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2809[i + 0]) );
  }
  i2806.scriptsExecutionOrder = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2811[i + 0]) );
  }
  i2806.sortingLayers = i2810
  var i2813 = i2807[2]
  var i2812 = []
  for(var i = 0; i < i2813.length; i += 1) {
    i2812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2813[i + 0]) );
  }
  i2806.cullingLayers = i2812
  i2806.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2807[3], i2806.timeSettings)
  i2806.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2807[4], i2806.physicsSettings)
  i2806.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2807[5], i2806.physics2DSettings)
  i2806.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2807[6], i2806.qualitySettings)
  i2806.enableRealtimeShadows = !!i2807[7]
  i2806.enableAutoInstancing = !!i2807[8]
  i2806.enableDynamicBatching = !!i2807[9]
  i2806.lightmapEncodingQuality = i2807[10]
  i2806.desiredColorSpace = i2807[11]
  var i2815 = i2807[12]
  var i2814 = []
  for(var i = 0; i < i2815.length; i += 1) {
    i2814.push( i2815[i + 0] );
  }
  i2806.allTags = i2814
  return i2806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2819 = data
  i2818.name = i2819[0]
  i2818.value = i2819[1]
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2823 = data
  i2822.id = i2823[0]
  i2822.name = i2823[1]
  i2822.value = i2823[2]
  return i2822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2827 = data
  i2826.id = i2827[0]
  i2826.name = i2827[1]
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2829 = data
  i2828.fixedDeltaTime = i2829[0]
  i2828.maximumDeltaTime = i2829[1]
  i2828.timeScale = i2829[2]
  i2828.maximumParticleTimestep = i2829[3]
  return i2828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2831 = data
  i2830.gravity = new pc.Vec3( i2831[0], i2831[1], i2831[2] )
  i2830.defaultSolverIterations = i2831[3]
  i2830.bounceThreshold = i2831[4]
  i2830.autoSyncTransforms = !!i2831[5]
  i2830.autoSimulation = !!i2831[6]
  var i2833 = i2831[7]
  var i2832 = []
  for(var i = 0; i < i2833.length; i += 1) {
    i2832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2833[i + 0]) );
  }
  i2830.collisionMatrix = i2832
  return i2830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2837 = data
  i2836.enabled = !!i2837[0]
  i2836.layerId = i2837[1]
  i2836.otherLayerId = i2837[2]
  return i2836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2839 = data
  request.r(i2839[0], i2839[1], 0, i2838, 'material')
  i2838.gravity = new pc.Vec2( i2839[2], i2839[3] )
  i2838.positionIterations = i2839[4]
  i2838.velocityIterations = i2839[5]
  i2838.velocityThreshold = i2839[6]
  i2838.maxLinearCorrection = i2839[7]
  i2838.maxAngularCorrection = i2839[8]
  i2838.maxTranslationSpeed = i2839[9]
  i2838.maxRotationSpeed = i2839[10]
  i2838.baumgarteScale = i2839[11]
  i2838.baumgarteTOIScale = i2839[12]
  i2838.timeToSleep = i2839[13]
  i2838.linearSleepTolerance = i2839[14]
  i2838.angularSleepTolerance = i2839[15]
  i2838.defaultContactOffset = i2839[16]
  i2838.autoSimulation = !!i2839[17]
  i2838.queriesHitTriggers = !!i2839[18]
  i2838.queriesStartInColliders = !!i2839[19]
  i2838.callbacksOnDisable = !!i2839[20]
  i2838.reuseCollisionCallbacks = !!i2839[21]
  i2838.autoSyncTransforms = !!i2839[22]
  var i2841 = i2839[23]
  var i2840 = []
  for(var i = 0; i < i2841.length; i += 1) {
    i2840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2841[i + 0]) );
  }
  i2838.collisionMatrix = i2840
  return i2838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2845 = data
  i2844.enabled = !!i2845[0]
  i2844.layerId = i2845[1]
  i2844.otherLayerId = i2845[2]
  return i2844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2847 = data
  var i2849 = i2847[0]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2849[i + 0]) );
  }
  i2846.qualityLevels = i2848
  var i2851 = i2847[1]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( i2851[i + 0] );
  }
  i2846.names = i2850
  i2846.shadows = i2847[2]
  i2846.anisotropicFiltering = i2847[3]
  i2846.antiAliasing = i2847[4]
  i2846.lodBias = i2847[5]
  i2846.shadowCascades = i2847[6]
  i2846.shadowDistance = i2847[7]
  i2846.shadowmaskMode = i2847[8]
  i2846.shadowProjection = i2847[9]
  i2846.shadowResolution = i2847[10]
  i2846.softParticles = !!i2847[11]
  i2846.softVegetation = !!i2847[12]
  i2846.activeColorSpace = i2847[13]
  i2846.desiredColorSpace = i2847[14]
  i2846.masterTextureLimit = i2847[15]
  i2846.maxQueuedFrames = i2847[16]
  i2846.particleRaycastBudget = i2847[17]
  i2846.pixelLightCount = i2847[18]
  i2846.realtimeReflectionProbes = !!i2847[19]
  i2846.shadowCascade2Split = i2847[20]
  i2846.shadowCascade4Split = new pc.Vec3( i2847[21], i2847[22], i2847[23] )
  i2846.streamingMipmapsActive = !!i2847[24]
  i2846.vSyncCount = i2847[25]
  i2846.asyncUploadBufferSize = i2847[26]
  i2846.asyncUploadTimeSlice = i2847[27]
  i2846.billboardsFaceCameraPosition = !!i2847[28]
  i2846.shadowNearPlaneOffset = i2847[29]
  i2846.streamingMipmapsMemoryBudget = i2847[30]
  i2846.maximumLODLevel = i2847[31]
  i2846.streamingMipmapsAddAllCameras = !!i2847[32]
  i2846.streamingMipmapsMaxLevelReduction = i2847[33]
  i2846.streamingMipmapsRenderersPerFrame = i2847[34]
  i2846.resolutionScalingFixedDPIFactor = i2847[35]
  i2846.streamingMipmapsMaxFileIORequests = i2847[36]
  i2846.currentQualityLevel = i2847[37]
  return i2846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2855 = data
  i2854.name = i2855[0]
  var i2857 = i2855[1]
  var i2856 = []
  for(var i = 0; i < i2857.length; i += 1) {
    i2856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2857[i + 0]) );
  }
  i2854.tos = i2856
  var i2859 = i2855[2]
  var i2858 = []
  for(var i = 0; i < i2859.length; i += 1) {
    i2858.push( i2859[i + 0] );
  }
  i2854.constant = i2858
  i2854.isValid = !!i2855[3]
  i2854.isHuman = !!i2855[4]
  i2854.hasRootMotion = !!i2855[5]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2863 = data
  i2862.hash = i2863[0]
  i2862.path = i2863[1]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2867 = data
  i2866.weight = i2867[0]
  i2866.vertices = i2867[1]
  i2866.normals = i2867[2]
  i2866.tangents = i2867[3]
  return i2866
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[6],"54":[15],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[15],"78":[10],"79":[80],"81":[80],"40":[27],"82":[27],"83":[10,27],"84":[27,29],"85":[27],"86":[29,27],"87":[10],"88":[29,27],"89":[27],"90":[91],"92":[27],"93":[27],"42":[40],"31":[29,27],"94":[27],"41":[40],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[27],"104":[29,27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[29,27],"110":[27],"111":[35],"112":[35],"36":[35],"113":[35],"114":[15],"115":[15],"116":[91],"117":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","BulletTrail","Effect","UnityEngine.RectTransform","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","ObjectPool","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PathSigleton","Path","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "Luna";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1620";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3486";

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

Deserializers.buildID = "3defa8bf-cc04-4701-b935-384cdd77ec46";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

