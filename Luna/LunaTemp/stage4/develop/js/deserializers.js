var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.JointSpring' )
  var i2421 = data
  i2420.spring = i2421[0]
  i2420.damper = i2421[1]
  i2420.targetPosition = i2421[2]
  return i2420
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.JointMotor' )
  var i2423 = data
  i2422.m_TargetVelocity = i2423[0]
  i2422.m_Force = i2423[1]
  i2422.m_FreeSpin = i2423[2]
  return i2422
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2424 = root || request.c( 'UnityEngine.JointLimits' )
  var i2425 = data
  i2424.m_Min = i2425[0]
  i2424.m_Max = i2425[1]
  i2424.m_Bounciness = i2425[2]
  i2424.m_BounceMinVelocity = i2425[3]
  i2424.m_ContactDistance = i2425[4]
  i2424.minBounce = i2425[5]
  i2424.maxBounce = i2425[6]
  return i2424
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.JointDrive' )
  var i2427 = data
  i2426.m_PositionSpring = i2427[0]
  i2426.m_PositionDamper = i2427[1]
  i2426.m_MaximumForce = i2427[2]
  return i2426
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2429 = data
  i2428.m_Spring = i2429[0]
  i2428.m_Damper = i2429[1]
  return i2428
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2430 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2431 = data
  i2430.m_Limit = i2431[0]
  i2430.m_Bounciness = i2431[1]
  i2430.m_ContactDistance = i2431[2]
  return i2430
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2432 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2433 = data
  i2432.m_ExtremumSlip = i2433[0]
  i2432.m_ExtremumValue = i2433[1]
  i2432.m_AsymptoteSlip = i2433[2]
  i2432.m_AsymptoteValue = i2433[3]
  i2432.m_Stiffness = i2433[4]
  return i2432
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2435 = data
  i2434.m_LowerAngle = i2435[0]
  i2434.m_UpperAngle = i2435[1]
  return i2434
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2437 = data
  i2436.m_MotorSpeed = i2437[0]
  i2436.m_MaximumMotorTorque = i2437[1]
  return i2436
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2439 = data
  i2438.m_DampingRatio = i2439[0]
  i2438.m_Frequency = i2439[1]
  i2438.m_Angle = i2439[2]
  return i2438
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2441 = data
  i2440.m_LowerTranslation = i2441[0]
  i2440.m_UpperTranslation = i2441[1]
  return i2440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2442 = root || new pc.UnityMaterial()
  var i2443 = data
  i2442.name = i2443[0]
  request.r(i2443[1], i2443[2], 0, i2442, 'shader')
  i2442.renderQueue = i2443[3]
  i2442.enableInstancing = !!i2443[4]
  var i2445 = i2443[5]
  var i2444 = []
  for(var i = 0; i < i2445.length; i += 1) {
    i2444.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2445[i + 0]) );
  }
  i2442.floatParameters = i2444
  var i2447 = i2443[6]
  var i2446 = []
  for(var i = 0; i < i2447.length; i += 1) {
    i2446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2447[i + 0]) );
  }
  i2442.colorParameters = i2446
  var i2449 = i2443[7]
  var i2448 = []
  for(var i = 0; i < i2449.length; i += 1) {
    i2448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2449[i + 0]) );
  }
  i2442.vectorParameters = i2448
  var i2451 = i2443[8]
  var i2450 = []
  for(var i = 0; i < i2451.length; i += 1) {
    i2450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2451[i + 0]) );
  }
  i2442.textureParameters = i2450
  var i2453 = i2443[9]
  var i2452 = []
  for(var i = 0; i < i2453.length; i += 1) {
    i2452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2453[i + 0]) );
  }
  i2442.materialFlags = i2452
  return i2442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2457 = data
  i2456.name = i2457[0]
  i2456.value = i2457[1]
  return i2456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2461 = data
  i2460.name = i2461[0]
  i2460.value = new pc.Color(i2461[1], i2461[2], i2461[3], i2461[4])
  return i2460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2465 = data
  i2464.name = i2465[0]
  i2464.value = new pc.Vec4( i2465[1], i2465[2], i2465[3], i2465[4] )
  return i2464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2469 = data
  i2468.name = i2469[0]
  request.r(i2469[1], i2469[2], 0, i2468, 'value')
  return i2468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2473 = data
  i2472.name = i2473[0]
  i2472.enabled = !!i2473[1]
  return i2472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2475 = data
  i2474.name = i2475[0]
  i2474.width = i2475[1]
  i2474.height = i2475[2]
  i2474.mipmapCount = i2475[3]
  i2474.anisoLevel = i2475[4]
  i2474.filterMode = i2475[5]
  i2474.hdr = !!i2475[6]
  i2474.format = i2475[7]
  i2474.wrapMode = i2475[8]
  i2474.alphaIsTransparency = !!i2475[9]
  i2474.alphaSource = i2475[10]
  return i2474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2477 = data
  i2476.position = new pc.Vec3( i2477[0], i2477[1], i2477[2] )
  i2476.scale = new pc.Vec3( i2477[3], i2477[4], i2477[5] )
  i2476.rotation = new pc.Quat(i2477[6], i2477[7], i2477[8], i2477[9])
  return i2476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i2478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i2479 = data
  request.r(i2479[0], i2479[1], 0, i2478, 'sharedMesh')
  return i2478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i2480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i2481 = data
  request.r(i2481[0], i2481[1], 0, i2480, 'additionalVertexStreams')
  i2480.enabled = !!i2481[2]
  request.r(i2481[3], i2481[4], 0, i2480, 'sharedMaterial')
  var i2483 = i2481[5]
  var i2482 = []
  for(var i = 0; i < i2483.length; i += 2) {
  request.r(i2483[i + 0], i2483[i + 1], 2, i2482, '')
  }
  i2480.sharedMaterials = i2482
  i2480.receiveShadows = !!i2481[6]
  i2480.shadowCastingMode = i2481[7]
  i2480.sortingLayerID = i2481[8]
  i2480.sortingOrder = i2481[9]
  i2480.lightmapIndex = i2481[10]
  i2480.lightmapSceneIndex = i2481[11]
  i2480.lightmapScaleOffset = new pc.Vec4( i2481[12], i2481[13], i2481[14], i2481[15] )
  i2480.lightProbeUsage = i2481[16]
  i2480.reflectionProbeUsage = i2481[17]
  return i2480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2487 = data
  i2486.name = i2487[0]
  i2486.tagId = i2487[1]
  i2486.enabled = !!i2487[2]
  i2486.isStatic = !!i2487[3]
  i2486.layer = i2487[4]
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2489 = data
  i2488.name = i2489[0]
  i2488.halfPrecision = !!i2489[1]
  i2488.vertexCount = i2489[2]
  i2488.aabb = i2489[3]
  var i2491 = i2489[4]
  var i2490 = []
  for(var i = 0; i < i2491.length; i += 1) {
    i2490.push( !!i2491[i + 0] );
  }
  i2488.streams = i2490
  i2488.vertices = i2489[5]
  var i2493 = i2489[6]
  var i2492 = []
  for(var i = 0; i < i2493.length; i += 1) {
    i2492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2493[i + 0]) );
  }
  i2488.subMeshes = i2492
  var i2495 = i2489[7]
  var i2494 = []
  for(var i = 0; i < i2495.length; i += 16) {
    i2494.push( new pc.Mat4().setData(i2495[i + 0], i2495[i + 1], i2495[i + 2], i2495[i + 3],  i2495[i + 4], i2495[i + 5], i2495[i + 6], i2495[i + 7],  i2495[i + 8], i2495[i + 9], i2495[i + 10], i2495[i + 11],  i2495[i + 12], i2495[i + 13], i2495[i + 14], i2495[i + 15]) );
  }
  i2488.bindposes = i2494
  var i2497 = i2489[8]
  var i2496 = []
  for(var i = 0; i < i2497.length; i += 1) {
    i2496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2497[i + 0]) );
  }
  i2488.blendShapes = i2496
  return i2488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2503 = data
  i2502.triangles = i2503[0]
  return i2502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2509 = data
  i2508.name = i2509[0]
  var i2511 = i2509[1]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2511[i + 0]) );
  }
  i2508.frames = i2510
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i2512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i2513 = data
  request.r(i2513[0], i2513[1], 0, i2512, 'animatorController')
  request.r(i2513[2], i2513[3], 0, i2512, 'avatar')
  i2512.updateMode = i2513[4]
  i2512.hasTransformHierarchy = !!i2513[5]
  i2512.applyRootMotion = !!i2513[6]
  var i2515 = i2513[7]
  var i2514 = []
  for(var i = 0; i < i2515.length; i += 2) {
  request.r(i2515[i + 0], i2515[i + 1], 2, i2514, '')
  }
  i2512.humanBones = i2514
  i2512.enabled = !!i2513[8]
  return i2512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i2519 = data
  i2518.enabled = !!i2519[0]
  request.r(i2519[1], i2519[2], 0, i2518, 'sharedMaterial')
  var i2521 = i2519[3]
  var i2520 = []
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 2, i2520, '')
  }
  i2518.sharedMaterials = i2520
  i2518.receiveShadows = !!i2519[4]
  i2518.shadowCastingMode = i2519[5]
  i2518.sortingLayerID = i2519[6]
  i2518.sortingOrder = i2519[7]
  i2518.lightmapIndex = i2519[8]
  i2518.lightmapSceneIndex = i2519[9]
  i2518.lightmapScaleOffset = new pc.Vec4( i2519[10], i2519[11], i2519[12], i2519[13] )
  i2518.lightProbeUsage = i2519[14]
  i2518.reflectionProbeUsage = i2519[15]
  request.r(i2519[16], i2519[17], 0, i2518, 'sharedMesh')
  var i2523 = i2519[18]
  var i2522 = []
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 2, i2522, '')
  }
  i2518.bones = i2522
  i2518.updateWhenOffscreen = !!i2519[19]
  i2518.localBounds = i2519[20]
  request.r(i2519[21], i2519[22], 0, i2518, 'rootBone')
  var i2525 = i2519[23]
  var i2524 = []
  for(var i = 0; i < i2525.length; i += 1) {
    i2524.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i2525[i + 0]) );
  }
  i2518.blendShapesWeights = i2524
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i2528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i2529 = data
  i2528.weight = i2529[0]
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2531 = data
  i2530.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2531[0], i2530.main)
  i2530.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2531[1], i2530.colorBySpeed)
  i2530.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2531[2], i2530.colorOverLifetime)
  i2530.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2531[3], i2530.emission)
  i2530.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2531[4], i2530.rotationBySpeed)
  i2530.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2531[5], i2530.rotationOverLifetime)
  i2530.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2531[6], i2530.shape)
  i2530.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2531[7], i2530.sizeBySpeed)
  i2530.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2531[8], i2530.sizeOverLifetime)
  i2530.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2531[9], i2530.textureSheetAnimation)
  i2530.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2531[10], i2530.velocityOverLifetime)
  i2530.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2531[11], i2530.noise)
  i2530.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2531[12], i2530.inheritVelocity)
  i2530.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2531[13], i2530.forceOverLifetime)
  i2530.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2531[14], i2530.limitVelocityOverLifetime)
  i2530.useAutoRandomSeed = !!i2531[15]
  i2530.randomSeed = i2531[16]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2532 = root || new pc.ParticleSystemMain()
  var i2533 = data
  i2532.duration = i2533[0]
  i2532.loop = !!i2533[1]
  i2532.prewarm = !!i2533[2]
  i2532.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[3], i2532.startDelay)
  i2532.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[4], i2532.startLifetime)
  i2532.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[5], i2532.startSpeed)
  i2532.startSize3D = !!i2533[6]
  i2532.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[7], i2532.startSizeX)
  i2532.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[8], i2532.startSizeY)
  i2532.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[9], i2532.startSizeZ)
  i2532.startRotation3D = !!i2533[10]
  i2532.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[11], i2532.startRotationX)
  i2532.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[12], i2532.startRotationY)
  i2532.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[13], i2532.startRotationZ)
  i2532.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2533[14], i2532.startColor)
  i2532.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2533[15], i2532.gravityModifier)
  i2532.simulationSpace = i2533[16]
  request.r(i2533[17], i2533[18], 0, i2532, 'customSimulationSpace')
  i2532.simulationSpeed = i2533[19]
  i2532.useUnscaledTime = !!i2533[20]
  i2532.scalingMode = i2533[21]
  i2532.playOnAwake = !!i2533[22]
  i2532.maxParticles = i2533[23]
  i2532.emitterVelocityMode = i2533[24]
  i2532.stopAction = i2533[25]
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2534 = root || new pc.MinMaxCurve()
  var i2535 = data
  i2534.mode = i2535[0]
  i2534.curveMin = new pc.AnimationCurve( { keys_flow: i2535[1] } )
  i2534.curveMax = new pc.AnimationCurve( { keys_flow: i2535[2] } )
  i2534.curveMultiplier = i2535[3]
  i2534.constantMin = i2535[4]
  i2534.constantMax = i2535[5]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2536 = root || new pc.MinMaxGradient()
  var i2537 = data
  i2536.mode = i2537[0]
  i2536.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2537[1], i2536.gradientMin)
  i2536.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2537[2], i2536.gradientMax)
  i2536.colorMin = new pc.Color(i2537[3], i2537[4], i2537[5], i2537[6])
  i2536.colorMax = new pc.Color(i2537[7], i2537[8], i2537[9], i2537[10])
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2539 = data
  i2538.mode = i2539[0]
  var i2541 = i2539[1]
  var i2540 = []
  for(var i = 0; i < i2541.length; i += 1) {
    i2540.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2541[i + 0]) );
  }
  i2538.colorKeys = i2540
  var i2543 = i2539[2]
  var i2542 = []
  for(var i = 0; i < i2543.length; i += 1) {
    i2542.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2543[i + 0]) );
  }
  i2538.alphaKeys = i2542
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2544 = root || new pc.ParticleSystemColorBySpeed()
  var i2545 = data
  i2544.enabled = !!i2545[0]
  i2544.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2545[1], i2544.color)
  i2544.range = new pc.Vec2( i2545[2], i2545[3] )
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2549 = data
  i2548.color = new pc.Color(i2549[0], i2549[1], i2549[2], i2549[3])
  i2548.time = i2549[4]
  return i2548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2553 = data
  i2552.alpha = i2553[0]
  i2552.time = i2553[1]
  return i2552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2554 = root || new pc.ParticleSystemColorOverLifetime()
  var i2555 = data
  i2554.enabled = !!i2555[0]
  i2554.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2555[1], i2554.color)
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2556 = root || new pc.ParticleSystemEmitter()
  var i2557 = data
  i2556.enabled = !!i2557[0]
  i2556.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2557[1], i2556.rateOverTime)
  i2556.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2557[2], i2556.rateOverDistance)
  var i2559 = i2557[3]
  var i2558 = []
  for(var i = 0; i < i2559.length; i += 1) {
    i2558.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2559[i + 0]) );
  }
  i2556.bursts = i2558
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2562 = root || new pc.ParticleSystemBurst()
  var i2563 = data
  i2562.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2563[0], i2562.count)
  i2562.cycleCount = i2563[1]
  i2562.minCount = i2563[2]
  i2562.maxCount = i2563[3]
  i2562.repeatInterval = i2563[4]
  i2562.time = i2563[5]
  return i2562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2564 = root || new pc.ParticleSystemRotationBySpeed()
  var i2565 = data
  i2564.enabled = !!i2565[0]
  i2564.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2565[1], i2564.x)
  i2564.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2565[2], i2564.y)
  i2564.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2565[3], i2564.z)
  i2564.separateAxes = !!i2565[4]
  i2564.range = new pc.Vec2( i2565[5], i2565[6] )
  return i2564
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2566 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2567 = data
  i2566.enabled = !!i2567[0]
  i2566.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[1], i2566.x)
  i2566.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[2], i2566.y)
  i2566.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2567[3], i2566.z)
  i2566.separateAxes = !!i2567[4]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2568 = root || new pc.ParticleSystemShape()
  var i2569 = data
  i2568.enabled = !!i2569[0]
  i2568.shapeType = i2569[1]
  i2568.randomDirectionAmount = i2569[2]
  i2568.sphericalDirectionAmount = i2569[3]
  i2568.randomPositionAmount = i2569[4]
  i2568.alignToDirection = !!i2569[5]
  i2568.radius = i2569[6]
  i2568.radiusMode = i2569[7]
  i2568.radiusSpread = i2569[8]
  i2568.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2569[9], i2568.radiusSpeed)
  i2568.radiusThickness = i2569[10]
  i2568.angle = i2569[11]
  i2568.length = i2569[12]
  i2568.boxThickness = new pc.Vec3( i2569[13], i2569[14], i2569[15] )
  i2568.meshShapeType = i2569[16]
  request.r(i2569[17], i2569[18], 0, i2568, 'mesh')
  request.r(i2569[19], i2569[20], 0, i2568, 'meshRenderer')
  request.r(i2569[21], i2569[22], 0, i2568, 'skinnedMeshRenderer')
  i2568.useMeshMaterialIndex = !!i2569[23]
  i2568.meshMaterialIndex = i2569[24]
  i2568.useMeshColors = !!i2569[25]
  i2568.normalOffset = i2569[26]
  i2568.arc = i2569[27]
  i2568.arcMode = i2569[28]
  i2568.arcSpread = i2569[29]
  i2568.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2569[30], i2568.arcSpeed)
  i2568.donutRadius = i2569[31]
  i2568.position = new pc.Vec3( i2569[32], i2569[33], i2569[34] )
  i2568.rotation = new pc.Vec3( i2569[35], i2569[36], i2569[37] )
  i2568.scale = new pc.Vec3( i2569[38], i2569[39], i2569[40] )
  return i2568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2570 = root || new pc.ParticleSystemSizeBySpeed()
  var i2571 = data
  i2570.enabled = !!i2571[0]
  i2570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2571[1], i2570.x)
  i2570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2571[2], i2570.y)
  i2570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2571[3], i2570.z)
  i2570.separateAxes = !!i2571[4]
  i2570.range = new pc.Vec2( i2571[5], i2571[6] )
  return i2570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2572 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2573 = data
  i2572.enabled = !!i2573[0]
  i2572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[1], i2572.x)
  i2572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[2], i2572.y)
  i2572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2573[3], i2572.z)
  i2572.separateAxes = !!i2573[4]
  return i2572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2574 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2575 = data
  i2574.enabled = !!i2575[0]
  i2574.mode = i2575[1]
  i2574.animation = i2575[2]
  i2574.numTilesX = i2575[3]
  i2574.numTilesY = i2575[4]
  i2574.useRandomRow = !!i2575[5]
  i2574.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2575[6], i2574.frameOverTime)
  i2574.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2575[7], i2574.startFrame)
  i2574.cycleCount = i2575[8]
  i2574.rowIndex = i2575[9]
  i2574.flipU = i2575[10]
  i2574.flipV = i2575[11]
  i2574.spriteCount = i2575[12]
  var i2577 = i2575[13]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 2) {
  request.r(i2577[i + 0], i2577[i + 1], 2, i2576, '')
  }
  i2574.sprites = i2576
  return i2574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2580 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2581 = data
  i2580.enabled = !!i2581[0]
  i2580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[1], i2580.x)
  i2580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[2], i2580.y)
  i2580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[3], i2580.z)
  i2580.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[4], i2580.radial)
  i2580.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[5], i2580.speedModifier)
  i2580.space = i2581[6]
  i2580.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[7], i2580.orbitalX)
  i2580.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[8], i2580.orbitalY)
  i2580.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[9], i2580.orbitalZ)
  i2580.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[10], i2580.orbitalOffsetX)
  i2580.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[11], i2580.orbitalOffsetY)
  i2580.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2581[12], i2580.orbitalOffsetZ)
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2582 = root || new pc.ParticleSystemNoise()
  var i2583 = data
  i2582.enabled = !!i2583[0]
  i2582.separateAxes = !!i2583[1]
  i2582.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[2], i2582.strengthX)
  i2582.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[3], i2582.strengthY)
  i2582.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[4], i2582.strengthZ)
  i2582.frequency = i2583[5]
  i2582.damping = !!i2583[6]
  i2582.octaveCount = i2583[7]
  i2582.octaveMultiplier = i2583[8]
  i2582.octaveScale = i2583[9]
  i2582.quality = i2583[10]
  i2582.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[11], i2582.scrollSpeed)
  i2582.scrollSpeedMultiplier = i2583[12]
  i2582.remapEnabled = !!i2583[13]
  i2582.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[14], i2582.remapX)
  i2582.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[15], i2582.remapY)
  i2582.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[16], i2582.remapZ)
  i2582.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[17], i2582.positionAmount)
  i2582.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[18], i2582.rotationAmount)
  i2582.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2583[19], i2582.sizeAmount)
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2584 = root || new pc.ParticleSystemInheritVelocity()
  var i2585 = data
  i2584.enabled = !!i2585[0]
  i2584.mode = i2585[1]
  i2584.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2585[2], i2584.curve)
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2586 = root || new pc.ParticleSystemForceOverLifetime()
  var i2587 = data
  i2586.enabled = !!i2587[0]
  i2586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[1], i2586.x)
  i2586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[2], i2586.y)
  i2586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2587[3], i2586.z)
  i2586.space = i2587[4]
  i2586.randomized = !!i2587[5]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2588 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2589 = data
  i2588.enabled = !!i2589[0]
  i2588.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[1], i2588.limit)
  i2588.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[2], i2588.limitX)
  i2588.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[3], i2588.limitY)
  i2588.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[4], i2588.limitZ)
  i2588.dampen = i2589[5]
  i2588.separateAxes = !!i2589[6]
  i2588.space = i2589[7]
  i2588.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2589[8], i2588.drag)
  i2588.multiplyDragByParticleSize = !!i2589[9]
  i2588.multiplyDragByParticleVelocity = !!i2589[10]
  return i2588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2591 = data
  i2590.enabled = !!i2591[0]
  request.r(i2591[1], i2591[2], 0, i2590, 'sharedMaterial')
  var i2593 = i2591[3]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 2) {
  request.r(i2593[i + 0], i2593[i + 1], 2, i2592, '')
  }
  i2590.sharedMaterials = i2592
  i2590.receiveShadows = !!i2591[4]
  i2590.shadowCastingMode = i2591[5]
  i2590.sortingLayerID = i2591[6]
  i2590.sortingOrder = i2591[7]
  i2590.lightmapIndex = i2591[8]
  i2590.lightmapSceneIndex = i2591[9]
  i2590.lightmapScaleOffset = new pc.Vec4( i2591[10], i2591[11], i2591[12], i2591[13] )
  i2590.lightProbeUsage = i2591[14]
  i2590.reflectionProbeUsage = i2591[15]
  request.r(i2591[16], i2591[17], 0, i2590, 'mesh')
  i2590.meshCount = i2591[18]
  i2590.activeVertexStreamsCount = i2591[19]
  i2590.alignment = i2591[20]
  i2590.renderMode = i2591[21]
  i2590.sortMode = i2591[22]
  i2590.lengthScale = i2591[23]
  i2590.velocityScale = i2591[24]
  i2590.cameraVelocityScale = i2591[25]
  i2590.normalDirection = i2591[26]
  i2590.sortingFudge = i2591[27]
  i2590.minParticleSize = i2591[28]
  i2590.maxParticleSize = i2591[29]
  i2590.pivot = new pc.Vec3( i2591[30], i2591[31], i2591[32] )
  request.r(i2591[33], i2591[34], 0, i2590, 'trailMaterial')
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2595 = data
  request.r(i2595[0], i2595[1], 0, i2594, 'clip')
  request.r(i2595[2], i2595[3], 0, i2594, 'outputAudioMixerGroup')
  i2594.playOnAwake = !!i2595[4]
  i2594.loop = !!i2595[5]
  i2594.time = i2595[6]
  i2594.volume = i2595[7]
  i2594.pitch = i2595[8]
  i2594.enabled = !!i2595[9]
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i2597 = data
  i2596.enabled = !!i2597[0]
  i2596.isTrigger = !!i2597[1]
  request.r(i2597[2], i2597[3], 0, i2596, 'material')
  request.r(i2597[4], i2597[5], 0, i2596, 'sharedMesh')
  i2596.convex = !!i2597[6]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2599 = data
  i2598.enabled = !!i2599[0]
  i2598.aspect = i2599[1]
  i2598.orthographic = !!i2599[2]
  i2598.orthographicSize = i2599[3]
  i2598.backgroundColor = new pc.Color(i2599[4], i2599[5], i2599[6], i2599[7])
  i2598.nearClipPlane = i2599[8]
  i2598.farClipPlane = i2599[9]
  i2598.fieldOfView = i2599[10]
  i2598.depth = i2599[11]
  i2598.clearFlags = i2599[12]
  i2598.cullingMask = i2599[13]
  i2598.rect = i2599[14]
  request.r(i2599[15], i2599[16], 0, i2598, 'targetTexture')
  i2598.usePhysicalProperties = !!i2599[17]
  i2598.focalLength = i2599[18]
  i2598.sensorSize = new pc.Vec2( i2599[19], i2599[20] )
  i2598.lensShift = new pc.Vec2( i2599[21], i2599[22] )
  i2598.gateFit = i2599[23]
  return i2598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i2600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i2601 = data
  i2600.center = new pc.Vec3( i2601[0], i2601[1], i2601[2] )
  i2600.size = new pc.Vec3( i2601[3], i2601[4], i2601[5] )
  i2600.enabled = !!i2601[6]
  i2600.isTrigger = !!i2601[7]
  request.r(i2601[8], i2601[9], 0, i2600, 'material')
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2603 = data
  i2602.pivot = new pc.Vec2( i2603[0], i2603[1] )
  i2602.anchorMin = new pc.Vec2( i2603[2], i2603[3] )
  i2602.anchorMax = new pc.Vec2( i2603[4], i2603[5] )
  i2602.sizeDelta = new pc.Vec2( i2603[6], i2603[7] )
  i2602.anchoredPosition3D = new pc.Vec3( i2603[8], i2603[9], i2603[10] )
  i2602.rotation = new pc.Quat(i2603[11], i2603[12], i2603[13], i2603[14])
  i2602.scale = new pc.Vec3( i2603[15], i2603[16], i2603[17] )
  return i2602
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i2604 = root || request.c( 'UICrosshairItem' )
  var i2605 = data
  request.r(i2605[0], i2605[1], 0, i2604, 'CrosshairRectTransform')
  i2604._distanceMax = i2605[2]
  i2604._distanceMin = i2605[3]
  i2604._speedShrink = i2605[4]
  i2604._currentSpeed = i2605[5]
  i2604._rateOnMove = i2605[6]
  i2604._rateOnAttack = i2605[7]
  return i2604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2607 = data
  i2606.cullTransparentMesh = !!i2607[0]
  return i2606
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.Image' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'm_Sprite')
  i2608.m_Type = i2609[2]
  i2608.m_PreserveAspect = !!i2609[3]
  i2608.m_FillCenter = !!i2609[4]
  i2608.m_FillMethod = i2609[5]
  i2608.m_FillAmount = i2609[6]
  i2608.m_FillClockwise = !!i2609[7]
  i2608.m_FillOrigin = i2609[8]
  i2608.m_UseSpriteMesh = !!i2609[9]
  i2608.m_PixelsPerUnitMultiplier = i2609[10]
  request.r(i2609[11], i2609[12], 0, i2608, 'm_Material')
  i2608.m_Maskable = !!i2609[13]
  i2608.m_Color = new pc.Color(i2609[14], i2609[15], i2609[16], i2609[17])
  i2608.m_RaycastTarget = !!i2609[18]
  i2608.m_RaycastPadding = new pc.Vec4( i2609[19], i2609[20], i2609[21], i2609[22] )
  return i2608
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i2610 = root || request.c( 'BulletTrail' )
  var i2611 = data
  i2610.Speed = i2611[0]
  i2610.LifeTime = i2611[1]
  request.r(i2611[2], i2611[3], 0, i2610, '_trail')
  i2610._trailStartScale = new pc.Vec3( i2611[4], i2611[5], i2611[6] )
  i2610._trailMaxScale = new pc.Vec3( i2611[7], i2611[8], i2611[9] )
  i2610._trailLengthAtMaxScale = i2611[10]
  return i2610
}

Deserializers["Effect"] = function (request, data, root) {
  var i2612 = root || request.c( 'Effect' )
  var i2613 = data
  var i2615 = i2613[0]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 2) {
  request.r(i2615[i + 0], i2615[i + 1], 2, i2614, '')
  }
  i2612.particles = i2614
  i2612._lifeTime = i2613[1]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2619 = data
  i2618.name = i2619[0]
  i2618.atlasId = i2619[1]
  i2618.mipmapCount = i2619[2]
  i2618.hdr = !!i2619[3]
  i2618.size = i2619[4]
  i2618.anisoLevel = i2619[5]
  i2618.filterMode = i2619[6]
  i2618.wrapMode = i2619[7]
  var i2621 = i2619[8]
  var i2620 = []
  for(var i = 0; i < i2621.length; i += 4) {
    i2620.push( UnityEngine.Rect.MinMaxRect(i2621[i + 0], i2621[i + 1], i2621[i + 2], i2621[i + 3]) );
  }
  i2618.rects = i2620
  return i2618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2625 = data
  i2624.name = i2625[0]
  i2624.index = i2625[1]
  i2624.startup = !!i2625[2]
  return i2624
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2627 = data
  request.r(i2627[0], i2627[1], 0, i2626, 'm_FirstSelected')
  i2626.m_sendNavigationEvents = !!i2627[2]
  i2626.m_DragThreshold = i2627[3]
  return i2626
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2629 = data
  i2628.m_HorizontalAxis = i2629[0]
  i2628.m_VerticalAxis = i2629[1]
  i2628.m_SubmitButton = i2629[2]
  i2628.m_CancelButton = i2629[3]
  i2628.m_InputActionsPerSecond = i2629[4]
  i2628.m_RepeatDelay = i2629[5]
  i2628.m_ForceModuleActive = !!i2629[6]
  i2628.m_SendPointerHoverToParent = !!i2629[7]
  return i2628
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i2630 = root || request.c( 'ObjectPool' )
  var i2631 = data
  return i2630
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i2632 = root || request.c( 'PathSigleton' )
  var i2633 = data
  var i2635 = i2633[0]
  var i2634 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i2635.length; i += 2) {
  request.r(i2635[i + 0], i2635[i + 1], 1, i2634, '')
  }
  i2632._paths = i2634
  var i2637 = i2633[1]
  var i2636 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i2637.length; i += 2) {
  request.r(i2637[i + 0], i2637[i + 1], 1, i2636, '')
  }
  i2632._pathsParachute = i2636
  return i2632
}

Deserializers["Path"] = function (request, data, root) {
  var i2640 = root || request.c( 'Path' )
  var i2641 = data
  var i2643 = i2641[0]
  var i2642 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i2643.length; i += 2) {
  request.r(i2643[i + 0], i2643[i + 1], 1, i2642, '')
  }
  i2640.points = i2642
  return i2640
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i2646 = root || request.c( 'SpawnBot' )
  var i2647 = data
  request.r(i2647[0], i2647[1], 0, i2646, 'botPrefab')
  i2646.spawnInterval = i2647[2]
  i2646.UPPER = i2647[3]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2649 = data
  i2648.enabled = !!i2649[0]
  i2648.planeDistance = i2649[1]
  i2648.referencePixelsPerUnit = i2649[2]
  i2648.isFallbackOverlay = !!i2649[3]
  i2648.renderMode = i2649[4]
  i2648.renderOrder = i2649[5]
  i2648.sortingLayerName = i2649[6]
  i2648.sortingOrder = i2649[7]
  i2648.scaleFactor = i2649[8]
  request.r(i2649[9], i2649[10], 0, i2648, 'worldCamera')
  i2648.overrideSorting = !!i2649[11]
  i2648.pixelPerfect = !!i2649[12]
  i2648.targetDisplay = i2649[13]
  i2648.overridePixelPerfect = !!i2649[14]
  return i2648
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2650 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2651 = data
  i2650.m_UiScaleMode = i2651[0]
  i2650.m_ReferencePixelsPerUnit = i2651[1]
  i2650.m_ScaleFactor = i2651[2]
  i2650.m_ReferenceResolution = new pc.Vec2( i2651[3], i2651[4] )
  i2650.m_ScreenMatchMode = i2651[5]
  i2650.m_MatchWidthOrHeight = i2651[6]
  i2650.m_PhysicalUnit = i2651[7]
  i2650.m_FallbackScreenDPI = i2651[8]
  i2650.m_DefaultSpriteDPI = i2651[9]
  i2650.m_DynamicPixelsPerUnit = i2651[10]
  i2650.m_PresetInfoIsWorld = !!i2651[11]
  return i2650
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2652 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2653 = data
  i2652.m_IgnoreReversedGraphics = !!i2653[0]
  i2652.m_BlockingObjects = i2653[1]
  i2652.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2653[2] )
  return i2652
}

Deserializers["BotController"] = function (request, data, root) {
  var i2654 = root || request.c( 'BotController' )
  var i2655 = data
  request.r(i2655[0], i2655[1], 0, i2654, '_animator')
  request.r(i2655[2], i2655[3], 0, i2654, '_muzzle')
  request.r(i2655[4], i2655[5], 0, i2654, 'bullet')
  request.r(i2655[6], i2655[7], 0, i2654, 'target')
  i2654.moveIndex = i2655[8]
  i2654.isMoveDone = !!i2655[9]
  i2654.isDie = !!i2655[10]
  i2654.isTakeDame = !!i2655[11]
  i2654.maxHealth = i2655[12]
  request.r(i2655[13], i2655[14], 0, i2654, 'healthBarRenderer')
  return i2654
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i2656 = root || request.c( 'ParachuteController' )
  var i2657 = data
  i2656.gravity = i2657[0]
  i2656.dragForce = i2657[1]
  i2656.objectMass = i2657[2]
  i2656.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2657[3] )
  request.r(i2657[4], i2657[5], 0, i2656, 'ParachuteScale')
  request.r(i2657[6], i2657[7], 0, i2656, '_botController')
  return i2656
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i2658 = root || request.c( 'BotParachute' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, '_animator')
  request.r(i2659[2], i2659[3], 0, i2658, '_muzzle')
  request.r(i2659[4], i2659[5], 0, i2658, 'bullet')
  request.r(i2659[6], i2659[7], 0, i2658, 'target')
  i2658.moveIndex = i2659[8]
  i2658.isMoveDone = !!i2659[9]
  i2658.isDie = !!i2659[10]
  i2658.isMove = !!i2659[11]
  i2658.parachuteDone = !!i2659[12]
  i2658.isTakeDame = !!i2659[13]
  i2658.maxHealth = i2659[14]
  request.r(i2659[15], i2659[16], 0, i2658, 'healthBarRenderer')
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2661 = data
  i2660.enabled = !!i2661[0]
  i2660.type = i2661[1]
  i2660.color = new pc.Color(i2661[2], i2661[3], i2661[4], i2661[5])
  i2660.cullingMask = i2661[6]
  i2660.intensity = i2661[7]
  i2660.range = i2661[8]
  i2660.spotAngle = i2661[9]
  i2660.shadows = i2661[10]
  i2660.shadowNormalBias = i2661[11]
  i2660.shadowBias = i2661[12]
  i2660.shadowStrength = i2661[13]
  i2660.shadowResolution = i2661[14]
  i2660.lightmapBakeType = i2661[15]
  i2660.renderMode = i2661[16]
  request.r(i2661[17], i2661[18], 0, i2660, 'cookie')
  i2660.cookieSize = i2661[19]
  return i2660
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i2662 = root || request.c( 'PlayerView' )
  var i2663 = data
  request.r(i2663[0], i2663[1], 0, i2662, '_mainRoot')
  request.r(i2663[2], i2663[3], 0, i2662, '_head')
  i2662._sensitivity = i2663[4]
  i2662._slerpFactor = i2663[5]
  i2662._viewHorizontalThreshold = new pc.Vec2( i2663[6], i2663[7] )
  i2662._viewVerticalThreshold = new pc.Vec2( i2663[8], i2663[9] )
  i2662._initRotate = new pc.Vec2( i2663[10], i2663[11] )
  i2662._totalRotate = new pc.Vec2( i2663[12], i2663[13] )
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2665 = data
  i2664.playAutomatically = !!i2665[0]
  request.r(i2665[1], i2665[2], 0, i2664, 'clip')
  var i2667 = i2665[3]
  var i2666 = []
  for(var i = 0; i < i2667.length; i += 2) {
  request.r(i2667[i + 0], i2667[i + 1], 2, i2666, '')
  }
  i2664.clips = i2666
  i2664.wrapMode = i2665[4]
  i2664.enabled = !!i2665[5]
  return i2664
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i2670 = root || request.c( 'WeaponController' )
  var i2671 = data
  i2670.Mask = UnityEngine.LayerMask.FromIntegerValue( i2671[0] )
  i2670.damage = i2671[1]
  request.r(i2671[2], i2671[3], 0, i2670, '_muzzleTrans')
  request.r(i2671[4], i2671[5], 0, i2670, '_animation')
  request.r(i2671[6], i2671[7], 0, i2670, 'bullet')
  request.r(i2671[8], i2671[9], 0, i2670, '_muzzleFlash')
  request.r(i2671[10], i2671[11], 0, i2670, 'audioClip')
  request.r(i2671[12], i2671[13], 0, i2670, 'audioSource')
  i2670.SphereRadius = i2671[14]
  request.r(i2671[15], i2671[16], 0, i2670, 'Effect')
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2673 = data
  i2672.ambientIntensity = i2673[0]
  i2672.reflectionIntensity = i2673[1]
  i2672.ambientMode = i2673[2]
  i2672.ambientLight = new pc.Color(i2673[3], i2673[4], i2673[5], i2673[6])
  i2672.ambientSkyColor = new pc.Color(i2673[7], i2673[8], i2673[9], i2673[10])
  i2672.ambientGroundColor = new pc.Color(i2673[11], i2673[12], i2673[13], i2673[14])
  i2672.ambientEquatorColor = new pc.Color(i2673[15], i2673[16], i2673[17], i2673[18])
  i2672.fogColor = new pc.Color(i2673[19], i2673[20], i2673[21], i2673[22])
  i2672.fogEndDistance = i2673[23]
  i2672.fogStartDistance = i2673[24]
  i2672.fogDensity = i2673[25]
  i2672.fog = !!i2673[26]
  request.r(i2673[27], i2673[28], 0, i2672, 'skybox')
  i2672.fogMode = i2673[29]
  var i2675 = i2673[30]
  var i2674 = []
  for(var i = 0; i < i2675.length; i += 1) {
    i2674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2675[i + 0]) );
  }
  i2672.lightmaps = i2674
  i2672.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2673[31], i2672.lightProbes)
  i2672.lightmapsMode = i2673[32]
  i2672.mixedBakeMode = i2673[33]
  i2672.environmentLightingMode = i2673[34]
  i2672.ambientProbe = new pc.SphericalHarmonicsL2(i2673[35])
  i2672.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2673[36])
  i2672.useReferenceAmbientProbe = !!i2673[37]
  request.r(i2673[38], i2673[39], 0, i2672, 'customReflection')
  request.r(i2673[40], i2673[41], 0, i2672, 'defaultReflection')
  i2672.defaultReflectionMode = i2673[42]
  i2672.defaultReflectionResolution = i2673[43]
  i2672.sunLightObjectId = i2673[44]
  i2672.pixelLightCount = i2673[45]
  i2672.defaultReflectionHDR = !!i2673[46]
  i2672.hasLightDataAsset = !!i2673[47]
  i2672.hasManualGenerate = !!i2673[48]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2679 = data
  request.r(i2679[0], i2679[1], 0, i2678, 'lightmapColor')
  request.r(i2679[2], i2679[3], 0, i2678, 'lightmapDirection')
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2680 = root || new UnityEngine.LightProbes()
  var i2681 = data
  return i2680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2689 = data
  var i2691 = i2689[0]
  var i2690 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2691.length; i += 1) {
    i2690.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2691[i + 0]));
  }
  i2688.ShaderCompilationErrors = i2690
  i2688.name = i2689[1]
  i2688.guid = i2689[2]
  var i2693 = i2689[3]
  var i2692 = []
  for(var i = 0; i < i2693.length; i += 1) {
    i2692.push( i2693[i + 0] );
  }
  i2688.shaderDefinedKeywords = i2692
  var i2695 = i2689[4]
  var i2694 = []
  for(var i = 0; i < i2695.length; i += 1) {
    i2694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2695[i + 0]) );
  }
  i2688.passes = i2694
  var i2697 = i2689[5]
  var i2696 = []
  for(var i = 0; i < i2697.length; i += 1) {
    i2696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2697[i + 0]) );
  }
  i2688.usePasses = i2696
  var i2699 = i2689[6]
  var i2698 = []
  for(var i = 0; i < i2699.length; i += 1) {
    i2698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2699[i + 0]) );
  }
  i2688.defaultParameterValues = i2698
  request.r(i2689[7], i2689[8], 0, i2688, 'unityFallbackShader')
  i2688.readDepth = !!i2689[9]
  i2688.isCreatedByShaderGraph = !!i2689[10]
  i2688.usedBatchUniforms = i2689[11]
  return i2688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2703 = data
  i2702.shaderName = i2703[0]
  i2702.errorMessage = i2703[1]
  return i2702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2708 = root || new pc.UnityShaderPass()
  var i2709 = data
  i2708.id = i2709[0]
  i2708.subShaderIndex = i2709[1]
  i2708.name = i2709[2]
  i2708.passType = i2709[3]
  i2708.grabPassTextureName = i2709[4]
  i2708.usePass = !!i2709[5]
  i2708.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[6], i2708.zTest)
  i2708.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[7], i2708.zWrite)
  i2708.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[8], i2708.culling)
  i2708.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2709[9], i2708.blending)
  i2708.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2709[10], i2708.alphaBlending)
  i2708.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[11], i2708.colorWriteMask)
  i2708.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[12], i2708.offsetUnits)
  i2708.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[13], i2708.offsetFactor)
  i2708.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[14], i2708.stencilRef)
  i2708.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[15], i2708.stencilReadMask)
  i2708.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2709[16], i2708.stencilWriteMask)
  i2708.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2709[17], i2708.stencilOp)
  i2708.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2709[18], i2708.stencilOpFront)
  i2708.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2709[19], i2708.stencilOpBack)
  var i2711 = i2709[20]
  var i2710 = []
  for(var i = 0; i < i2711.length; i += 1) {
    i2710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2711[i + 0]) );
  }
  i2708.tags = i2710
  var i2713 = i2709[21]
  var i2712 = []
  for(var i = 0; i < i2713.length; i += 1) {
    i2712.push( i2713[i + 0] );
  }
  i2708.passDefinedKeywords = i2712
  var i2715 = i2709[22]
  var i2714 = []
  for(var i = 0; i < i2715.length; i += 1) {
    i2714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2715[i + 0]) );
  }
  i2708.passDefinedKeywordGroups = i2714
  var i2717 = i2709[23]
  var i2716 = []
  for(var i = 0; i < i2717.length; i += 1) {
    i2716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2717[i + 0]) );
  }
  i2708.variants = i2716
  var i2719 = i2709[24]
  var i2718 = []
  for(var i = 0; i < i2719.length; i += 1) {
    i2718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2719[i + 0]) );
  }
  i2708.excludedVariants = i2718
  i2708.hasDepthReader = !!i2709[25]
  return i2708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2721 = data
  i2720.val = i2721[0]
  i2720.name = i2721[1]
  return i2720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2723 = data
  i2722.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[0], i2722.src)
  i2722.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[1], i2722.dst)
  i2722.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2723[2], i2722.op)
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2725 = data
  i2724.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2725[0], i2724.pass)
  i2724.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2725[1], i2724.fail)
  i2724.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2725[2], i2724.zFail)
  i2724.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2725[3], i2724.comp)
  return i2724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2729 = data
  i2728.name = i2729[0]
  i2728.value = i2729[1]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2733 = data
  var i2735 = i2733[0]
  var i2734 = []
  for(var i = 0; i < i2735.length; i += 1) {
    i2734.push( i2735[i + 0] );
  }
  i2732.keywords = i2734
  i2732.hasDiscard = !!i2733[1]
  return i2732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2739 = data
  i2738.passId = i2739[0]
  i2738.subShaderIndex = i2739[1]
  var i2741 = i2739[2]
  var i2740 = []
  for(var i = 0; i < i2741.length; i += 1) {
    i2740.push( i2741[i + 0] );
  }
  i2738.keywords = i2740
  i2738.vertexProgram = i2739[3]
  i2738.fragmentProgram = i2739[4]
  i2738.readDepth = !!i2739[5]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2745 = data
  request.r(i2745[0], i2745[1], 0, i2744, 'shader')
  i2744.pass = i2745[2]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2749 = data
  i2748.name = i2749[0]
  i2748.type = i2749[1]
  i2748.value = new pc.Vec4( i2749[2], i2749[3], i2749[4], i2749[5] )
  i2748.textureValue = i2749[6]
  return i2748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2751 = data
  i2750.name = i2751[0]
  request.r(i2751[1], i2751[2], 0, i2750, 'texture')
  i2750.aabb = i2751[3]
  i2750.vertices = i2751[4]
  i2750.triangles = i2751[5]
  i2750.textureRect = UnityEngine.Rect.MinMaxRect(i2751[6], i2751[7], i2751[8], i2751[9])
  i2750.packedRect = UnityEngine.Rect.MinMaxRect(i2751[10], i2751[11], i2751[12], i2751[13])
  i2750.border = new pc.Vec4( i2751[14], i2751[15], i2751[16], i2751[17] )
  i2750.transparency = i2751[18]
  i2750.bounds = i2751[19]
  i2750.pixelsPerUnit = i2751[20]
  i2750.textureWidth = i2751[21]
  i2750.textureHeight = i2751[22]
  i2750.nativeSize = new pc.Vec2( i2751[23], i2751[24] )
  i2750.pivot = new pc.Vec2( i2751[25], i2751[26] )
  i2750.textureRectOffset = new pc.Vec2( i2751[27], i2751[28] )
  return i2750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2753 = data
  i2752.name = i2753[0]
  return i2752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2755 = data
  i2754.name = i2755[0]
  i2754.wrapMode = i2755[1]
  i2754.isLooping = !!i2755[2]
  i2754.length = i2755[3]
  var i2757 = i2755[4]
  var i2756 = []
  for(var i = 0; i < i2757.length; i += 1) {
    i2756.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2757[i + 0]) );
  }
  i2754.curves = i2756
  var i2759 = i2755[5]
  var i2758 = []
  for(var i = 0; i < i2759.length; i += 1) {
    i2758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2759[i + 0]) );
  }
  i2754.events = i2758
  i2754.halfPrecision = !!i2755[6]
  i2754.frameRate = i2755[7]
  i2754.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2755[8], i2754.localBounds)
  i2754.hasMuscleCurves = !!i2755[9]
  var i2761 = i2755[10]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( i2761[i + 0] );
  }
  i2754.clipMuscleConstant = i2760
  i2754.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2755[11], i2754.clipBindingConstant)
  return i2754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2765 = data
  i2764.path = i2765[0]
  i2764.componentType = i2765[1]
  i2764.property = i2765[2]
  i2764.keys = i2765[3]
  var i2767 = i2765[4]
  var i2766 = []
  for(var i = 0; i < i2767.length; i += 1) {
    i2766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2767[i + 0]) );
  }
  i2764.objectReferenceKeys = i2766
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2771 = data
  i2770.time = i2771[0]
  request.r(i2771[1], i2771[2], 0, i2770, 'value')
  return i2770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2775 = data
  i2774.functionName = i2775[0]
  i2774.floatParameter = i2775[1]
  i2774.intParameter = i2775[2]
  i2774.stringParameter = i2775[3]
  request.r(i2775[4], i2775[5], 0, i2774, 'objectReferenceParameter')
  i2774.time = i2775[6]
  return i2774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2777 = data
  i2776.center = new pc.Vec3( i2777[0], i2777[1], i2777[2] )
  i2776.extends = new pc.Vec3( i2777[3], i2777[4], i2777[5] )
  return i2776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2781 = data
  var i2783 = i2781[0]
  var i2782 = []
  for(var i = 0; i < i2783.length; i += 1) {
    i2782.push( i2783[i + 0] );
  }
  i2780.genericBindings = i2782
  var i2785 = i2781[1]
  var i2784 = []
  for(var i = 0; i < i2785.length; i += 1) {
    i2784.push( i2785[i + 0] );
  }
  i2780.pptrCurveMapping = i2784
  return i2780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2787 = data
  i2786.name = i2787[0]
  var i2789 = i2787[1]
  var i2788 = []
  for(var i = 0; i < i2789.length; i += 1) {
    i2788.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2789[i + 0]) );
  }
  i2786.states = i2788
  var i2791 = i2787[2]
  var i2790 = []
  for(var i = 0; i < i2791.length; i += 1) {
    i2790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2791[i + 0]) );
  }
  i2786.layers = i2790
  var i2793 = i2787[3]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2793[i + 0]) );
  }
  i2786.parameters = i2792
  i2786.animationClips = i2787[4]
  i2786.HasSubStateMachines = !!i2787[5]
  i2786.avatarUnsupported = i2787[6]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2797 = data
  i2796.cycleOffset = i2797[0]
  i2796.cycleOffsetParameter = i2797[1]
  i2796.cycleOffsetParameterActive = !!i2797[2]
  i2796.mirror = !!i2797[3]
  i2796.mirrorParameter = i2797[4]
  i2796.mirrorParameterActive = !!i2797[5]
  i2796.motionId = i2797[6]
  i2796.nameHash = i2797[7]
  i2796.fullPathHash = i2797[8]
  i2796.speed = i2797[9]
  i2796.speedParameter = i2797[10]
  i2796.speedParameterActive = !!i2797[11]
  i2796.tag = i2797[12]
  i2796.name = i2797[13]
  i2796.layer = i2797[14]
  i2796.writeDefaultValues = !!i2797[15]
  var i2799 = i2797[16]
  var i2798 = []
  for(var i = 0; i < i2799.length; i += 1) {
    i2798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2799[i + 0]) );
  }
  i2796.transitions = i2798
  var i2801 = i2797[17]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 2) {
  request.r(i2801[i + 0], i2801[i + 1], 2, i2800, '')
  }
  i2796.behaviours = i2800
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2805 = data
  i2804.fullPath = i2805[0]
  i2804.canTransitionToSelf = !!i2805[1]
  i2804.duration = i2805[2]
  i2804.exitTime = i2805[3]
  i2804.hasExitTime = !!i2805[4]
  i2804.hasFixedDuration = !!i2805[5]
  i2804.interruptionSource = i2805[6]
  i2804.offset = i2805[7]
  i2804.orderedInterruption = !!i2805[8]
  i2804.destinationStateNameHash = i2805[9]
  i2804.destinationStateMachineId = i2805[10]
  i2804.isExit = !!i2805[11]
  i2804.mute = !!i2805[12]
  i2804.solo = !!i2805[13]
  var i2807 = i2805[14]
  var i2806 = []
  for(var i = 0; i < i2807.length; i += 1) {
    i2806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2807[i + 0]) );
  }
  i2804.conditions = i2806
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2811 = data
  i2810.mode = i2811[0]
  i2810.parameter = i2811[1]
  i2810.threshold = i2811[2]
  return i2810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2817 = data
  i2816.blendingMode = i2817[0]
  i2816.defaultWeight = i2817[1]
  i2816.name = i2817[2]
  i2816.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2817[3], i2816.stateMachine)
  return i2816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2819 = data
  i2818.id = i2819[0]
  i2818.defaultStateNameHash = i2819[1]
  var i2821 = i2819[2]
  var i2820 = []
  for(var i = 0; i < i2821.length; i += 1) {
    i2820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2821[i + 0]) );
  }
  i2818.entryTransitions = i2820
  var i2823 = i2819[3]
  var i2822 = []
  for(var i = 0; i < i2823.length; i += 1) {
    i2822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2823[i + 0]) );
  }
  i2818.anyStateTransitions = i2822
  return i2818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2827 = data
  i2826.destinationStateNameHash = i2827[0]
  i2826.destinationStateMachineId = i2827[1]
  i2826.isExit = !!i2827[2]
  i2826.mute = !!i2827[3]
  i2826.solo = !!i2827[4]
  var i2829 = i2827[5]
  var i2828 = []
  for(var i = 0; i < i2829.length; i += 1) {
    i2828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2829[i + 0]) );
  }
  i2826.conditions = i2828
  return i2826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2833 = data
  i2832.defaultBool = !!i2833[0]
  i2832.defaultFloat = i2833[1]
  i2832.defaultInt = i2833[2]
  i2832.name = i2833[3]
  i2832.nameHash = i2833[4]
  i2832.type = i2833[5]
  return i2832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2835 = data
  var i2837 = i2835[0]
  var i2836 = []
  for(var i = 0; i < i2837.length; i += 1) {
    i2836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2837[i + 0]) );
  }
  i2834.files = i2836
  i2834.componentToPrefabIds = i2835[1]
  return i2834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2841 = data
  i2840.path = i2841[0]
  request.r(i2841[1], i2841[2], 0, i2840, 'unityObject')
  return i2840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2843 = data
  var i2845 = i2843[0]
  var i2844 = []
  for(var i = 0; i < i2845.length; i += 1) {
    i2844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2845[i + 0]) );
  }
  i2842.scriptsExecutionOrder = i2844
  var i2847 = i2843[1]
  var i2846 = []
  for(var i = 0; i < i2847.length; i += 1) {
    i2846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2847[i + 0]) );
  }
  i2842.sortingLayers = i2846
  var i2849 = i2843[2]
  var i2848 = []
  for(var i = 0; i < i2849.length; i += 1) {
    i2848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2849[i + 0]) );
  }
  i2842.cullingLayers = i2848
  i2842.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2843[3], i2842.timeSettings)
  i2842.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2843[4], i2842.physicsSettings)
  i2842.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2843[5], i2842.physics2DSettings)
  i2842.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2843[6], i2842.qualitySettings)
  i2842.enableRealtimeShadows = !!i2843[7]
  i2842.enableAutoInstancing = !!i2843[8]
  i2842.enableDynamicBatching = !!i2843[9]
  i2842.lightmapEncodingQuality = i2843[10]
  i2842.desiredColorSpace = i2843[11]
  var i2851 = i2843[12]
  var i2850 = []
  for(var i = 0; i < i2851.length; i += 1) {
    i2850.push( i2851[i + 0] );
  }
  i2842.allTags = i2850
  return i2842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2855 = data
  i2854.name = i2855[0]
  i2854.value = i2855[1]
  return i2854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2859 = data
  i2858.id = i2859[0]
  i2858.name = i2859[1]
  i2858.value = i2859[2]
  return i2858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2863 = data
  i2862.id = i2863[0]
  i2862.name = i2863[1]
  return i2862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2865 = data
  i2864.fixedDeltaTime = i2865[0]
  i2864.maximumDeltaTime = i2865[1]
  i2864.timeScale = i2865[2]
  i2864.maximumParticleTimestep = i2865[3]
  return i2864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2867 = data
  i2866.gravity = new pc.Vec3( i2867[0], i2867[1], i2867[2] )
  i2866.defaultSolverIterations = i2867[3]
  i2866.bounceThreshold = i2867[4]
  i2866.autoSyncTransforms = !!i2867[5]
  i2866.autoSimulation = !!i2867[6]
  var i2869 = i2867[7]
  var i2868 = []
  for(var i = 0; i < i2869.length; i += 1) {
    i2868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2869[i + 0]) );
  }
  i2866.collisionMatrix = i2868
  return i2866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2873 = data
  i2872.enabled = !!i2873[0]
  i2872.layerId = i2873[1]
  i2872.otherLayerId = i2873[2]
  return i2872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2875 = data
  request.r(i2875[0], i2875[1], 0, i2874, 'material')
  i2874.gravity = new pc.Vec2( i2875[2], i2875[3] )
  i2874.positionIterations = i2875[4]
  i2874.velocityIterations = i2875[5]
  i2874.velocityThreshold = i2875[6]
  i2874.maxLinearCorrection = i2875[7]
  i2874.maxAngularCorrection = i2875[8]
  i2874.maxTranslationSpeed = i2875[9]
  i2874.maxRotationSpeed = i2875[10]
  i2874.baumgarteScale = i2875[11]
  i2874.baumgarteTOIScale = i2875[12]
  i2874.timeToSleep = i2875[13]
  i2874.linearSleepTolerance = i2875[14]
  i2874.angularSleepTolerance = i2875[15]
  i2874.defaultContactOffset = i2875[16]
  i2874.autoSimulation = !!i2875[17]
  i2874.queriesHitTriggers = !!i2875[18]
  i2874.queriesStartInColliders = !!i2875[19]
  i2874.callbacksOnDisable = !!i2875[20]
  i2874.reuseCollisionCallbacks = !!i2875[21]
  i2874.autoSyncTransforms = !!i2875[22]
  var i2877 = i2875[23]
  var i2876 = []
  for(var i = 0; i < i2877.length; i += 1) {
    i2876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2877[i + 0]) );
  }
  i2874.collisionMatrix = i2876
  return i2874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2881 = data
  i2880.enabled = !!i2881[0]
  i2880.layerId = i2881[1]
  i2880.otherLayerId = i2881[2]
  return i2880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2883 = data
  var i2885 = i2883[0]
  var i2884 = []
  for(var i = 0; i < i2885.length; i += 1) {
    i2884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2885[i + 0]) );
  }
  i2882.qualityLevels = i2884
  var i2887 = i2883[1]
  var i2886 = []
  for(var i = 0; i < i2887.length; i += 1) {
    i2886.push( i2887[i + 0] );
  }
  i2882.names = i2886
  i2882.shadows = i2883[2]
  i2882.anisotropicFiltering = i2883[3]
  i2882.antiAliasing = i2883[4]
  i2882.lodBias = i2883[5]
  i2882.shadowCascades = i2883[6]
  i2882.shadowDistance = i2883[7]
  i2882.shadowmaskMode = i2883[8]
  i2882.shadowProjection = i2883[9]
  i2882.shadowResolution = i2883[10]
  i2882.softParticles = !!i2883[11]
  i2882.softVegetation = !!i2883[12]
  i2882.activeColorSpace = i2883[13]
  i2882.desiredColorSpace = i2883[14]
  i2882.masterTextureLimit = i2883[15]
  i2882.maxQueuedFrames = i2883[16]
  i2882.particleRaycastBudget = i2883[17]
  i2882.pixelLightCount = i2883[18]
  i2882.realtimeReflectionProbes = !!i2883[19]
  i2882.shadowCascade2Split = i2883[20]
  i2882.shadowCascade4Split = new pc.Vec3( i2883[21], i2883[22], i2883[23] )
  i2882.streamingMipmapsActive = !!i2883[24]
  i2882.vSyncCount = i2883[25]
  i2882.asyncUploadBufferSize = i2883[26]
  i2882.asyncUploadTimeSlice = i2883[27]
  i2882.billboardsFaceCameraPosition = !!i2883[28]
  i2882.shadowNearPlaneOffset = i2883[29]
  i2882.streamingMipmapsMemoryBudget = i2883[30]
  i2882.maximumLODLevel = i2883[31]
  i2882.streamingMipmapsAddAllCameras = !!i2883[32]
  i2882.streamingMipmapsMaxLevelReduction = i2883[33]
  i2882.streamingMipmapsRenderersPerFrame = i2883[34]
  i2882.resolutionScalingFixedDPIFactor = i2883[35]
  i2882.streamingMipmapsMaxFileIORequests = i2883[36]
  i2882.currentQualityLevel = i2883[37]
  return i2882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2891 = data
  i2890.name = i2891[0]
  var i2893 = i2891[1]
  var i2892 = []
  for(var i = 0; i < i2893.length; i += 1) {
    i2892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2893[i + 0]) );
  }
  i2890.tos = i2892
  var i2895 = i2891[2]
  var i2894 = []
  for(var i = 0; i < i2895.length; i += 1) {
    i2894.push( i2895[i + 0] );
  }
  i2890.constant = i2894
  i2890.isValid = !!i2891[3]
  i2890.isHuman = !!i2891[4]
  i2890.hasRootMotion = !!i2891[5]
  return i2890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2899 = data
  i2898.hash = i2899[0]
  i2898.path = i2899[1]
  return i2898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2903 = data
  i2902.weight = i2903[0]
  i2902.vertices = i2903[1]
  i2902.normals = i2903[2]
  i2902.tangents = i2903[3]
  return i2902
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[10],"56":[15],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[15],"80":[5],"81":[82],"83":[82],"34":[18],"84":[18],"85":[5,18],"86":[18,21],"87":[18],"88":[21,18],"89":[5],"90":[21,18],"91":[18],"92":[93],"94":[18],"95":[18],"36":[34],"23":[21,18],"96":[18],"35":[34],"97":[18],"98":[18],"99":[18],"100":[18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[18],"106":[21,18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[21,18],"112":[18],"113":[27],"114":[27],"28":[27],"115":[27],"116":[15],"117":[15],"118":[93],"119":[93]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","PathSigleton","Path","SpawnBot","UnityEngine.GameObject","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","ParachuteController","BotParachute","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "3.0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1618";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3558";

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

Deserializers.buildID = "e0740a8f-b838-4084-9b09-ae4a0bf87ba0";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

