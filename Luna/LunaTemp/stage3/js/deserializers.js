var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointSpring' )
  var i485 = data
  i484.spring = i485[0]
  i484.damper = i485[1]
  i484.targetPosition = i485[2]
  return i484
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor' )
  var i487 = data
  i486.m_TargetVelocity = i487[0]
  i486.m_Force = i487[1]
  i486.m_FreeSpin = i487[2]
  return i486
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointLimits' )
  var i489 = data
  i488.m_Min = i489[0]
  i488.m_Max = i489[1]
  i488.m_Bounciness = i489[2]
  i488.m_BounceMinVelocity = i489[3]
  i488.m_ContactDistance = i489[4]
  i488.minBounce = i489[5]
  i488.maxBounce = i489[6]
  return i488
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointDrive' )
  var i491 = data
  i490.m_PositionSpring = i491[0]
  i490.m_PositionDamper = i491[1]
  i490.m_MaximumForce = i491[2]
  return i490
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i493 = data
  i492.m_Spring = i493[0]
  i492.m_Damper = i493[1]
  return i492
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i495 = data
  i494.m_Limit = i495[0]
  i494.m_Bounciness = i495[1]
  i494.m_ContactDistance = i495[2]
  return i494
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i497 = data
  i496.m_ExtremumSlip = i497[0]
  i496.m_ExtremumValue = i497[1]
  i496.m_AsymptoteSlip = i497[2]
  i496.m_AsymptoteValue = i497[3]
  i496.m_Stiffness = i497[4]
  return i496
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i499 = data
  i498.m_LowerAngle = i499[0]
  i498.m_UpperAngle = i499[1]
  return i498
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i501 = data
  i500.m_MotorSpeed = i501[0]
  i500.m_MaximumMotorTorque = i501[1]
  return i500
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i503 = data
  i502.m_DampingRatio = i503[0]
  i502.m_Frequency = i503[1]
  i502.m_Angle = i503[2]
  return i502
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i505 = data
  i504.m_LowerTranslation = i505[0]
  i504.m_UpperTranslation = i505[1]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i539 = data
  i538.name = i539[0]
  i538.width = i539[1]
  i538.height = i539[2]
  i538.mipmapCount = i539[3]
  i538.anisoLevel = i539[4]
  i538.filterMode = i539[5]
  i538.hdr = !!i539[6]
  i538.format = i539[7]
  i538.wrapMode = i539[8]
  i538.alphaIsTransparency = !!i539[9]
  i538.alphaSource = i539[10]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i541 = data
  i540.position = new pc.Vec3( i541[0], i541[1], i541[2] )
  i540.scale = new pc.Vec3( i541[3], i541[4], i541[5] )
  i540.rotation = new pc.Quat(i541[6], i541[7], i541[8], i541[9])
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i543 = data
  request.r(i543[0], i543[1], 0, i542, 'sharedMesh')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i545 = data
  request.r(i545[0], i545[1], 0, i544, 'additionalVertexStreams')
  i544.enabled = !!i545[2]
  request.r(i545[3], i545[4], 0, i544, 'sharedMaterial')
  var i547 = i545[5]
  var i546 = []
  for(var i = 0; i < i547.length; i += 2) {
  request.r(i547[i + 0], i547[i + 1], 2, i546, '')
  }
  i544.sharedMaterials = i546
  i544.receiveShadows = !!i545[6]
  i544.shadowCastingMode = i545[7]
  i544.sortingLayerID = i545[8]
  i544.sortingOrder = i545[9]
  i544.lightmapIndex = i545[10]
  i544.lightmapSceneIndex = i545[11]
  i544.lightmapScaleOffset = new pc.Vec4( i545[12], i545[13], i545[14], i545[15] )
  i544.lightProbeUsage = i545[16]
  i544.reflectionProbeUsage = i545[17]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i551 = data
  i550.name = i551[0]
  i550.tagId = i551[1]
  i550.enabled = !!i551[2]
  i550.isStatic = !!i551[3]
  i550.layer = i551[4]
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i553 = data
  i552.name = i553[0]
  i552.halfPrecision = !!i553[1]
  i552.vertexCount = i553[2]
  i552.aabb = i553[3]
  var i555 = i553[4]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( !!i555[i + 0] );
  }
  i552.streams = i554
  i552.vertices = i553[5]
  var i557 = i553[6]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i557[i + 0]) );
  }
  i552.subMeshes = i556
  var i559 = i553[7]
  var i558 = []
  for(var i = 0; i < i559.length; i += 16) {
    i558.push( new pc.Mat4().setData(i559[i + 0], i559[i + 1], i559[i + 2], i559[i + 3],  i559[i + 4], i559[i + 5], i559[i + 6], i559[i + 7],  i559[i + 8], i559[i + 9], i559[i + 10], i559[i + 11],  i559[i + 12], i559[i + 13], i559[i + 14], i559[i + 15]) );
  }
  i552.bindposes = i558
  var i561 = i553[8]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i561[i + 0]) );
  }
  i552.blendShapes = i560
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i567 = data
  i566.triangles = i567[0]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i573 = data
  i572.name = i573[0]
  var i575 = i573[1]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i575[i + 0]) );
  }
  i572.frames = i574
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'animatorController')
  request.r(i577[2], i577[3], 0, i576, 'avatar')
  i576.updateMode = i577[4]
  i576.hasTransformHierarchy = !!i577[5]
  i576.applyRootMotion = !!i577[6]
  var i579 = i577[7]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.humanBones = i578
  i576.enabled = !!i577[8]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i583 = data
  i582.enabled = !!i583[0]
  request.r(i583[1], i583[2], 0, i582, 'sharedMaterial')
  var i585 = i583[3]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.sharedMaterials = i584
  i582.receiveShadows = !!i583[4]
  i582.shadowCastingMode = i583[5]
  i582.sortingLayerID = i583[6]
  i582.sortingOrder = i583[7]
  i582.lightmapIndex = i583[8]
  i582.lightmapSceneIndex = i583[9]
  i582.lightmapScaleOffset = new pc.Vec4( i583[10], i583[11], i583[12], i583[13] )
  i582.lightProbeUsage = i583[14]
  i582.reflectionProbeUsage = i583[15]
  request.r(i583[16], i583[17], 0, i582, 'sharedMesh')
  var i587 = i583[18]
  var i586 = []
  for(var i = 0; i < i587.length; i += 2) {
  request.r(i587[i + 0], i587[i + 1], 2, i586, '')
  }
  i582.bones = i586
  i582.updateWhenOffscreen = !!i583[19]
  i582.localBounds = i583[20]
  request.r(i583[21], i583[22], 0, i582, 'rootBone')
  var i589 = i583[23]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i589[i + 0]) );
  }
  i582.blendShapesWeights = i588
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i593 = data
  i592.weight = i593[0]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i595 = data
  i594.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i595[0], i594.main)
  i594.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i595[1], i594.colorBySpeed)
  i594.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i595[2], i594.colorOverLifetime)
  i594.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i595[3], i594.emission)
  i594.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i595[4], i594.rotationBySpeed)
  i594.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i595[5], i594.rotationOverLifetime)
  i594.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i595[6], i594.shape)
  i594.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i595[7], i594.sizeBySpeed)
  i594.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i595[8], i594.sizeOverLifetime)
  i594.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i595[9], i594.textureSheetAnimation)
  i594.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i595[10], i594.velocityOverLifetime)
  i594.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i595[11], i594.noise)
  i594.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i595[12], i594.inheritVelocity)
  i594.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i595[13], i594.forceOverLifetime)
  i594.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i595[14], i594.limitVelocityOverLifetime)
  i594.useAutoRandomSeed = !!i595[15]
  i594.randomSeed = i595[16]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i596 = root || new pc.ParticleSystemMain()
  var i597 = data
  i596.duration = i597[0]
  i596.loop = !!i597[1]
  i596.prewarm = !!i597[2]
  i596.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[3], i596.startDelay)
  i596.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[4], i596.startLifetime)
  i596.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[5], i596.startSpeed)
  i596.startSize3D = !!i597[6]
  i596.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[7], i596.startSizeX)
  i596.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[8], i596.startSizeY)
  i596.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[9], i596.startSizeZ)
  i596.startRotation3D = !!i597[10]
  i596.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[11], i596.startRotationX)
  i596.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[12], i596.startRotationY)
  i596.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[13], i596.startRotationZ)
  i596.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i597[14], i596.startColor)
  i596.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i597[15], i596.gravityModifier)
  i596.simulationSpace = i597[16]
  request.r(i597[17], i597[18], 0, i596, 'customSimulationSpace')
  i596.simulationSpeed = i597[19]
  i596.useUnscaledTime = !!i597[20]
  i596.scalingMode = i597[21]
  i596.playOnAwake = !!i597[22]
  i596.maxParticles = i597[23]
  i596.emitterVelocityMode = i597[24]
  i596.stopAction = i597[25]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i598 = root || new pc.MinMaxCurve()
  var i599 = data
  i598.mode = i599[0]
  i598.curveMin = new pc.AnimationCurve( { keys_flow: i599[1] } )
  i598.curveMax = new pc.AnimationCurve( { keys_flow: i599[2] } )
  i598.curveMultiplier = i599[3]
  i598.constantMin = i599[4]
  i598.constantMax = i599[5]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i600 = root || new pc.MinMaxGradient()
  var i601 = data
  i600.mode = i601[0]
  i600.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i601[1], i600.gradientMin)
  i600.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i601[2], i600.gradientMax)
  i600.colorMin = new pc.Color(i601[3], i601[4], i601[5], i601[6])
  i600.colorMax = new pc.Color(i601[7], i601[8], i601[9], i601[10])
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i603 = data
  i602.mode = i603[0]
  var i605 = i603[1]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i605[i + 0]) );
  }
  i602.colorKeys = i604
  var i607 = i603[2]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i607[i + 0]) );
  }
  i602.alphaKeys = i606
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i608 = root || new pc.ParticleSystemColorBySpeed()
  var i609 = data
  i608.enabled = !!i609[0]
  i608.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i609[1], i608.color)
  i608.range = new pc.Vec2( i609[2], i609[3] )
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i613 = data
  i612.color = new pc.Color(i613[0], i613[1], i613[2], i613[3])
  i612.time = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i617 = data
  i616.alpha = i617[0]
  i616.time = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemColorOverLifetime()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[1], i618.color)
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemEmitter()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.rateOverTime)
  i620.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.rateOverDistance)
  var i623 = i621[3]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i623[i + 0]) );
  }
  i620.bursts = i622
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemBurst()
  var i627 = data
  i626.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[0], i626.count)
  i626.cycleCount = i627[1]
  i626.minCount = i627[2]
  i626.maxCount = i627[3]
  i626.repeatInterval = i627[4]
  i626.time = i627[5]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemRotationBySpeed()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  i628.range = new pc.Vec2( i629[5], i629[6] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemRotationOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.separateAxes = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemShape()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.shapeType = i633[1]
  i632.randomDirectionAmount = i633[2]
  i632.sphericalDirectionAmount = i633[3]
  i632.randomPositionAmount = i633[4]
  i632.alignToDirection = !!i633[5]
  i632.radius = i633[6]
  i632.radiusMode = i633[7]
  i632.radiusSpread = i633[8]
  i632.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[9], i632.radiusSpeed)
  i632.radiusThickness = i633[10]
  i632.angle = i633[11]
  i632.length = i633[12]
  i632.boxThickness = new pc.Vec3( i633[13], i633[14], i633[15] )
  i632.meshShapeType = i633[16]
  request.r(i633[17], i633[18], 0, i632, 'mesh')
  request.r(i633[19], i633[20], 0, i632, 'meshRenderer')
  request.r(i633[21], i633[22], 0, i632, 'skinnedMeshRenderer')
  i632.useMeshMaterialIndex = !!i633[23]
  i632.meshMaterialIndex = i633[24]
  i632.useMeshColors = !!i633[25]
  i632.normalOffset = i633[26]
  i632.arc = i633[27]
  i632.arcMode = i633[28]
  i632.arcSpread = i633[29]
  i632.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[30], i632.arcSpeed)
  i632.donutRadius = i633[31]
  i632.position = new pc.Vec3( i633[32], i633[33], i633[34] )
  i632.rotation = new pc.Vec3( i633[35], i633[36], i633[37] )
  i632.scale = new pc.Vec3( i633[38], i633[39], i633[40] )
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemSizeBySpeed()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[1], i634.x)
  i634.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.y)
  i634.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[3], i634.z)
  i634.separateAxes = !!i635[4]
  i634.range = new pc.Vec2( i635[5], i635[6] )
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemSizeOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.separateAxes = !!i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.mode = i639[1]
  i638.animation = i639[2]
  i638.numTilesX = i639[3]
  i638.numTilesY = i639[4]
  i638.useRandomRow = !!i639[5]
  i638.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[6], i638.frameOverTime)
  i638.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.startFrame)
  i638.cycleCount = i639[8]
  i638.rowIndex = i639[9]
  i638.flipU = i639[10]
  i638.flipV = i639[11]
  i638.spriteCount = i639[12]
  var i641 = i639[13]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.sprites = i640
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[4], i644.radial)
  i644.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[5], i644.speedModifier)
  i644.space = i645[6]
  i644.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[7], i644.orbitalX)
  i644.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[8], i644.orbitalY)
  i644.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[9], i644.orbitalZ)
  i644.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[10], i644.orbitalOffsetX)
  i644.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[11], i644.orbitalOffsetY)
  i644.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[12], i644.orbitalOffsetZ)
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemNoise()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.separateAxes = !!i647[1]
  i646.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.strengthX)
  i646.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.strengthY)
  i646.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[4], i646.strengthZ)
  i646.frequency = i647[5]
  i646.damping = !!i647[6]
  i646.octaveCount = i647[7]
  i646.octaveMultiplier = i647[8]
  i646.octaveScale = i647[9]
  i646.quality = i647[10]
  i646.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[11], i646.scrollSpeed)
  i646.scrollSpeedMultiplier = i647[12]
  i646.remapEnabled = !!i647[13]
  i646.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[14], i646.remapX)
  i646.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[15], i646.remapY)
  i646.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[16], i646.remapZ)
  i646.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[17], i646.positionAmount)
  i646.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[18], i646.rotationAmount)
  i646.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[19], i646.sizeAmount)
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemInheritVelocity()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.mode = i649[1]
  i648.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[2], i648.curve)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemForceOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[1], i650.x)
  i650.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[2], i650.y)
  i650.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i651[3], i650.z)
  i650.space = i651[4]
  i650.randomized = !!i651[5]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.limit)
  i652.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.limitX)
  i652.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[3], i652.limitY)
  i652.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[4], i652.limitZ)
  i652.dampen = i653[5]
  i652.separateAxes = !!i653[6]
  i652.space = i653[7]
  i652.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[8], i652.drag)
  i652.multiplyDragByParticleSize = !!i653[9]
  i652.multiplyDragByParticleVelocity = !!i653[10]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i655 = data
  i654.enabled = !!i655[0]
  request.r(i655[1], i655[2], 0, i654, 'sharedMaterial')
  var i657 = i655[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.sharedMaterials = i656
  i654.receiveShadows = !!i655[4]
  i654.shadowCastingMode = i655[5]
  i654.sortingLayerID = i655[6]
  i654.sortingOrder = i655[7]
  i654.lightmapIndex = i655[8]
  i654.lightmapSceneIndex = i655[9]
  i654.lightmapScaleOffset = new pc.Vec4( i655[10], i655[11], i655[12], i655[13] )
  i654.lightProbeUsage = i655[14]
  i654.reflectionProbeUsage = i655[15]
  request.r(i655[16], i655[17], 0, i654, 'mesh')
  i654.meshCount = i655[18]
  i654.activeVertexStreamsCount = i655[19]
  i654.alignment = i655[20]
  i654.renderMode = i655[21]
  i654.sortMode = i655[22]
  i654.lengthScale = i655[23]
  i654.velocityScale = i655[24]
  i654.cameraVelocityScale = i655[25]
  i654.normalDirection = i655[26]
  i654.sortingFudge = i655[27]
  i654.minParticleSize = i655[28]
  i654.maxParticleSize = i655[29]
  i654.pivot = new pc.Vec3( i655[30], i655[31], i655[32] )
  request.r(i655[33], i655[34], 0, i654, 'trailMaterial')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'clip')
  request.r(i659[2], i659[3], 0, i658, 'outputAudioMixerGroup')
  i658.playOnAwake = !!i659[4]
  i658.loop = !!i659[5]
  i658.time = i659[6]
  i658.volume = i659[7]
  i658.pitch = i659[8]
  i658.enabled = !!i659[9]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i661 = data
  i660.enabled = !!i661[0]
  i660.isTrigger = !!i661[1]
  request.r(i661[2], i661[3], 0, i660, 'material')
  request.r(i661[4], i661[5], 0, i660, 'sharedMesh')
  i660.convex = !!i661[6]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i663 = data
  i662.enabled = !!i663[0]
  i662.aspect = i663[1]
  i662.orthographic = !!i663[2]
  i662.orthographicSize = i663[3]
  i662.backgroundColor = new pc.Color(i663[4], i663[5], i663[6], i663[7])
  i662.nearClipPlane = i663[8]
  i662.farClipPlane = i663[9]
  i662.fieldOfView = i663[10]
  i662.depth = i663[11]
  i662.clearFlags = i663[12]
  i662.cullingMask = i663[13]
  i662.rect = i663[14]
  request.r(i663[15], i663[16], 0, i662, 'targetTexture')
  i662.usePhysicalProperties = !!i663[17]
  i662.focalLength = i663[18]
  i662.sensorSize = new pc.Vec2( i663[19], i663[20] )
  i662.lensShift = new pc.Vec2( i663[21], i663[22] )
  i662.gateFit = i663[23]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i665 = data
  i664.center = new pc.Vec3( i665[0], i665[1], i665[2] )
  i664.size = new pc.Vec3( i665[3], i665[4], i665[5] )
  i664.enabled = !!i665[6]
  i664.isTrigger = !!i665[7]
  request.r(i665[8], i665[9], 0, i664, 'material')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i667 = data
  i666.pivot = new pc.Vec2( i667[0], i667[1] )
  i666.anchorMin = new pc.Vec2( i667[2], i667[3] )
  i666.anchorMax = new pc.Vec2( i667[4], i667[5] )
  i666.sizeDelta = new pc.Vec2( i667[6], i667[7] )
  i666.anchoredPosition3D = new pc.Vec3( i667[8], i667[9], i667[10] )
  i666.rotation = new pc.Quat(i667[11], i667[12], i667[13], i667[14])
  i666.scale = new pc.Vec3( i667[15], i667[16], i667[17] )
  return i666
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i668 = root || request.c( 'UICrosshairItem' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'CrosshairRectTransform')
  i668._distanceMax = i669[2]
  i668._distanceMin = i669[3]
  i668._speedShrink = i669[4]
  i668._currentSpeed = i669[5]
  i668._rateOnMove = i669[6]
  i668._rateOnAttack = i669[7]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i671 = data
  i670.cullTransparentMesh = !!i671[0]
  return i670
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.UI.Image' )
  var i673 = data
  request.r(i673[0], i673[1], 0, i672, 'm_Sprite')
  i672.m_Type = i673[2]
  i672.m_PreserveAspect = !!i673[3]
  i672.m_FillCenter = !!i673[4]
  i672.m_FillMethod = i673[5]
  i672.m_FillAmount = i673[6]
  i672.m_FillClockwise = !!i673[7]
  i672.m_FillOrigin = i673[8]
  i672.m_UseSpriteMesh = !!i673[9]
  i672.m_PixelsPerUnitMultiplier = i673[10]
  request.r(i673[11], i673[12], 0, i672, 'm_Material')
  i672.m_Maskable = !!i673[13]
  i672.m_Color = new pc.Color(i673[14], i673[15], i673[16], i673[17])
  i672.m_RaycastTarget = !!i673[18]
  i672.m_RaycastPadding = new pc.Vec4( i673[19], i673[20], i673[21], i673[22] )
  return i672
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i674 = root || request.c( 'BulletTrail' )
  var i675 = data
  i674.Speed = i675[0]
  i674.LifeTime = i675[1]
  request.r(i675[2], i675[3], 0, i674, '_trail')
  i674._trailStartScale = new pc.Vec3( i675[4], i675[5], i675[6] )
  i674._trailMaxScale = new pc.Vec3( i675[7], i675[8], i675[9] )
  i674._trailLengthAtMaxScale = i675[10]
  return i674
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i676 = root || request.c( 'PlayerView' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, '_mainRoot')
  request.r(i677[2], i677[3], 0, i676, '_head')
  i676._sensitivity = i677[4]
  i676._slerpFactor = i677[5]
  i676._viewHorizontalThreshold = new pc.Vec2( i677[6], i677[7] )
  i676._viewVerticalThreshold = new pc.Vec2( i677[8], i677[9] )
  i676._initRotate = new pc.Vec2( i677[10], i677[11] )
  i676._totalRotate = new pc.Vec2( i677[12], i677[13] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i679 = data
  i678.playAutomatically = !!i679[0]
  request.r(i679[1], i679[2], 0, i678, 'clip')
  var i681 = i679[3]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.clips = i680
  i678.wrapMode = i679[4]
  i678.enabled = !!i679[5]
  return i678
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i684 = root || request.c( 'WeaponController' )
  var i685 = data
  i684.Mask = UnityEngine.LayerMask.FromIntegerValue( i685[0] )
  i684.damage = i685[1]
  request.r(i685[2], i685[3], 0, i684, '_muzzleTrans')
  request.r(i685[4], i685[5], 0, i684, '_animation')
  request.r(i685[6], i685[7], 0, i684, 'bullet')
  request.r(i685[8], i685[9], 0, i684, '_muzzleFlash')
  request.r(i685[10], i685[11], 0, i684, 'audioClip')
  request.r(i685[12], i685[13], 0, i684, 'audioSource')
  i684.SphereRadius = i685[14]
  request.r(i685[15], i685[16], 0, i684, 'Effect')
  return i684
}

Deserializers["Effect"] = function (request, data, root) {
  var i686 = root || request.c( 'Effect' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.particles = i688
  i686._lifeTime = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i693 = data
  i692.name = i693[0]
  i692.atlasId = i693[1]
  i692.mipmapCount = i693[2]
  i692.hdr = !!i693[3]
  i692.size = i693[4]
  i692.anisoLevel = i693[5]
  i692.filterMode = i693[6]
  i692.wrapMode = i693[7]
  var i695 = i693[8]
  var i694 = []
  for(var i = 0; i < i695.length; i += 4) {
    i694.push( UnityEngine.Rect.MinMaxRect(i695[i + 0], i695[i + 1], i695[i + 2], i695[i + 3]) );
  }
  i692.rects = i694
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i699 = data
  i698.name = i699[0]
  i698.index = i699[1]
  i698.startup = !!i699[2]
  return i698
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i700 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'm_FirstSelected')
  i700.m_sendNavigationEvents = !!i701[2]
  i700.m_DragThreshold = i701[3]
  return i700
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i702 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i703 = data
  i702.m_HorizontalAxis = i703[0]
  i702.m_VerticalAxis = i703[1]
  i702.m_SubmitButton = i703[2]
  i702.m_CancelButton = i703[3]
  i702.m_InputActionsPerSecond = i703[4]
  i702.m_RepeatDelay = i703[5]
  i702.m_ForceModuleActive = !!i703[6]
  i702.m_SendPointerHoverToParent = !!i703[7]
  return i702
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i704 = root || request.c( 'ObjectPool' )
  var i705 = data
  return i704
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i706 = root || request.c( 'PathSigleton' )
  var i707 = data
  var i709 = i707[0]
  var i708 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i709.length; i += 2) {
  request.r(i709[i + 0], i709[i + 1], 1, i708, '')
  }
  i706._paths = i708
  var i711 = i707[1]
  var i710 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i711.length; i += 2) {
  request.r(i711[i + 0], i711[i + 1], 1, i710, '')
  }
  i706._pathsParachute = i710
  return i706
}

Deserializers["Path"] = function (request, data, root) {
  var i714 = root || request.c( 'Path' )
  var i715 = data
  var i717 = i715[0]
  var i716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 1, i716, '')
  }
  i714.points = i716
  return i714
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i720 = root || request.c( 'SpawnBot' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'botPrefab')
  i720.spawnInterval = i721[2]
  i720.UPPER = i721[3]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i723 = data
  i722.enabled = !!i723[0]
  i722.planeDistance = i723[1]
  i722.referencePixelsPerUnit = i723[2]
  i722.isFallbackOverlay = !!i723[3]
  i722.renderMode = i723[4]
  i722.renderOrder = i723[5]
  i722.sortingLayerName = i723[6]
  i722.sortingOrder = i723[7]
  i722.scaleFactor = i723[8]
  request.r(i723[9], i723[10], 0, i722, 'worldCamera')
  i722.overrideSorting = !!i723[11]
  i722.pixelPerfect = !!i723[12]
  i722.targetDisplay = i723[13]
  i722.overridePixelPerfect = !!i723[14]
  return i722
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i725 = data
  i724.m_UiScaleMode = i725[0]
  i724.m_ReferencePixelsPerUnit = i725[1]
  i724.m_ScaleFactor = i725[2]
  i724.m_ReferenceResolution = new pc.Vec2( i725[3], i725[4] )
  i724.m_ScreenMatchMode = i725[5]
  i724.m_MatchWidthOrHeight = i725[6]
  i724.m_PhysicalUnit = i725[7]
  i724.m_FallbackScreenDPI = i725[8]
  i724.m_DefaultSpriteDPI = i725[9]
  i724.m_DynamicPixelsPerUnit = i725[10]
  i724.m_PresetInfoIsWorld = !!i725[11]
  return i724
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i727 = data
  i726.m_IgnoreReversedGraphics = !!i727[0]
  i726.m_BlockingObjects = i727[1]
  i726.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i727[2] )
  return i726
}

Deserializers["BotController"] = function (request, data, root) {
  var i728 = root || request.c( 'BotController' )
  var i729 = data
  request.r(i729[0], i729[1], 0, i728, '_animator')
  request.r(i729[2], i729[3], 0, i728, '_muzzle')
  request.r(i729[4], i729[5], 0, i728, 'bullet')
  request.r(i729[6], i729[7], 0, i728, 'target')
  i728.moveIndex = i729[8]
  i728.isMoveDone = !!i729[9]
  i728.isDie = !!i729[10]
  i728.isTakeDame = !!i729[11]
  i728.maxHealth = i729[12]
  request.r(i729[13], i729[14], 0, i728, 'healthBarRenderer')
  return i728
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i730 = root || request.c( 'ParachuteController' )
  var i731 = data
  i730.gravity = i731[0]
  i730.dragForce = i731[1]
  i730.objectMass = i731[2]
  request.r(i731[3], i731[4], 0, i730, '_botController')
  i730.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i731[5] )
  request.r(i731[6], i731[7], 0, i730, 'ParachuteScale')
  i730.scaleAmount = i731[8]
  i730.velocity = new pc.Vec3( i731[9], i731[10], i731[11] )
  i730._distanceOpenParachute = i731[12]
  i730._distanceCloseParachute = i731[13]
  return i730
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i732 = root || request.c( 'BotParachute' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, '_animator')
  request.r(i733[2], i733[3], 0, i732, '_muzzle')
  request.r(i733[4], i733[5], 0, i732, 'bullet')
  request.r(i733[6], i733[7], 0, i732, 'target')
  i732.moveIndex = i733[8]
  i732.isMoveDone = !!i733[9]
  i732.isDie = !!i733[10]
  i732.isMove = !!i733[11]
  i732.parachuteDone = !!i733[12]
  i732.isTakeDame = !!i733[13]
  i732.maxHealth = i733[14]
  request.r(i733[15], i733[16], 0, i732, 'healthBarRenderer')
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.type = i735[1]
  i734.color = new pc.Color(i735[2], i735[3], i735[4], i735[5])
  i734.cullingMask = i735[6]
  i734.intensity = i735[7]
  i734.range = i735[8]
  i734.spotAngle = i735[9]
  i734.shadows = i735[10]
  i734.shadowNormalBias = i735[11]
  i734.shadowBias = i735[12]
  i734.shadowStrength = i735[13]
  i734.shadowResolution = i735[14]
  i734.lightmapBakeType = i735[15]
  i734.renderMode = i735[16]
  request.r(i735[17], i735[18], 0, i734, 'cookie')
  i734.cookieSize = i735[19]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i737 = data
  i736.ambientIntensity = i737[0]
  i736.reflectionIntensity = i737[1]
  i736.ambientMode = i737[2]
  i736.ambientLight = new pc.Color(i737[3], i737[4], i737[5], i737[6])
  i736.ambientSkyColor = new pc.Color(i737[7], i737[8], i737[9], i737[10])
  i736.ambientGroundColor = new pc.Color(i737[11], i737[12], i737[13], i737[14])
  i736.ambientEquatorColor = new pc.Color(i737[15], i737[16], i737[17], i737[18])
  i736.fogColor = new pc.Color(i737[19], i737[20], i737[21], i737[22])
  i736.fogEndDistance = i737[23]
  i736.fogStartDistance = i737[24]
  i736.fogDensity = i737[25]
  i736.fog = !!i737[26]
  request.r(i737[27], i737[28], 0, i736, 'skybox')
  i736.fogMode = i737[29]
  var i739 = i737[30]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i739[i + 0]) );
  }
  i736.lightmaps = i738
  i736.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i737[31], i736.lightProbes)
  i736.lightmapsMode = i737[32]
  i736.mixedBakeMode = i737[33]
  i736.environmentLightingMode = i737[34]
  i736.ambientProbe = new pc.SphericalHarmonicsL2(i737[35])
  i736.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i737[36])
  i736.useReferenceAmbientProbe = !!i737[37]
  request.r(i737[38], i737[39], 0, i736, 'customReflection')
  request.r(i737[40], i737[41], 0, i736, 'defaultReflection')
  i736.defaultReflectionMode = i737[42]
  i736.defaultReflectionResolution = i737[43]
  i736.sunLightObjectId = i737[44]
  i736.pixelLightCount = i737[45]
  i736.defaultReflectionHDR = !!i737[46]
  i736.hasLightDataAsset = !!i737[47]
  i736.hasManualGenerate = !!i737[48]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'lightmapColor')
  request.r(i743[2], i743[3], 0, i742, 'lightmapDirection')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i744 = root || new UnityEngine.LightProbes()
  var i745 = data
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i755[i + 0]));
  }
  i752.ShaderCompilationErrors = i754
  i752.name = i753[1]
  i752.guid = i753[2]
  var i757 = i753[3]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i752.shaderDefinedKeywords = i756
  var i759 = i753[4]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i759[i + 0]) );
  }
  i752.passes = i758
  var i761 = i753[5]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i761[i + 0]) );
  }
  i752.usePasses = i760
  var i763 = i753[6]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i763[i + 0]) );
  }
  i752.defaultParameterValues = i762
  request.r(i753[7], i753[8], 0, i752, 'unityFallbackShader')
  i752.readDepth = !!i753[9]
  i752.isCreatedByShaderGraph = !!i753[10]
  i752.usedBatchUniforms = i753[11]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i767 = data
  i766.shaderName = i767[0]
  i766.errorMessage = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i772 = root || new pc.UnityShaderPass()
  var i773 = data
  i772.id = i773[0]
  i772.subShaderIndex = i773[1]
  i772.name = i773[2]
  i772.passType = i773[3]
  i772.grabPassTextureName = i773[4]
  i772.usePass = !!i773[5]
  i772.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[6], i772.zTest)
  i772.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[7], i772.zWrite)
  i772.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[8], i772.culling)
  i772.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i773[9], i772.blending)
  i772.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i773[10], i772.alphaBlending)
  i772.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[11], i772.colorWriteMask)
  i772.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[12], i772.offsetUnits)
  i772.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[13], i772.offsetFactor)
  i772.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[14], i772.stencilRef)
  i772.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[15], i772.stencilReadMask)
  i772.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i773[16], i772.stencilWriteMask)
  i772.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i773[17], i772.stencilOp)
  i772.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i773[18], i772.stencilOpFront)
  i772.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i773[19], i772.stencilOpBack)
  var i775 = i773[20]
  var i774 = []
  for(var i = 0; i < i775.length; i += 1) {
    i774.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i775[i + 0]) );
  }
  i772.tags = i774
  var i777 = i773[21]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.passDefinedKeywords = i776
  var i779 = i773[22]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i779[i + 0]) );
  }
  i772.passDefinedKeywordGroups = i778
  var i781 = i773[23]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i781[i + 0]) );
  }
  i772.variants = i780
  var i783 = i773[24]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i783[i + 0]) );
  }
  i772.excludedVariants = i782
  i772.hasDepthReader = !!i773[25]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i785 = data
  i784.val = i785[0]
  i784.name = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i787 = data
  i786.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[0], i786.src)
  i786.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[1], i786.dst)
  i786.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i787[2], i786.op)
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i789 = data
  i788.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[0], i788.pass)
  i788.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[1], i788.fail)
  i788.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[2], i788.zFail)
  i788.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i789[3], i788.comp)
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i793 = data
  i792.name = i793[0]
  i792.value = i793[1]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( i799[i + 0] );
  }
  i796.keywords = i798
  i796.hasDiscard = !!i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i803 = data
  i802.passId = i803[0]
  i802.subShaderIndex = i803[1]
  var i805 = i803[2]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i802.keywords = i804
  i802.vertexProgram = i803[3]
  i802.fragmentProgram = i803[4]
  i802.readDepth = !!i803[5]
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'shader')
  i808.pass = i809[2]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i813 = data
  i812.name = i813[0]
  i812.type = i813[1]
  i812.value = new pc.Vec4( i813[2], i813[3], i813[4], i813[5] )
  i812.textureValue = i813[6]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i815 = data
  i814.name = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'texture')
  i814.aabb = i815[3]
  i814.vertices = i815[4]
  i814.triangles = i815[5]
  i814.textureRect = UnityEngine.Rect.MinMaxRect(i815[6], i815[7], i815[8], i815[9])
  i814.packedRect = UnityEngine.Rect.MinMaxRect(i815[10], i815[11], i815[12], i815[13])
  i814.border = new pc.Vec4( i815[14], i815[15], i815[16], i815[17] )
  i814.transparency = i815[18]
  i814.bounds = i815[19]
  i814.pixelsPerUnit = i815[20]
  i814.textureWidth = i815[21]
  i814.textureHeight = i815[22]
  i814.nativeSize = new pc.Vec2( i815[23], i815[24] )
  i814.pivot = new pc.Vec2( i815[25], i815[26] )
  i814.textureRectOffset = new pc.Vec2( i815[27], i815[28] )
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i817 = data
  i816.name = i817[0]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i819 = data
  i818.name = i819[0]
  i818.wrapMode = i819[1]
  i818.isLooping = !!i819[2]
  i818.length = i819[3]
  var i821 = i819[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i821[i + 0]) );
  }
  i818.curves = i820
  var i823 = i819[5]
  var i822 = []
  for(var i = 0; i < i823.length; i += 1) {
    i822.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i823[i + 0]) );
  }
  i818.events = i822
  i818.halfPrecision = !!i819[6]
  i818.frameRate = i819[7]
  i818.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i819[8], i818.localBounds)
  i818.hasMuscleCurves = !!i819[9]
  var i825 = i819[10]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i818.clipMuscleConstant = i824
  i818.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i819[11], i818.clipBindingConstant)
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i829 = data
  i828.path = i829[0]
  i828.componentType = i829[1]
  i828.property = i829[2]
  i828.keys = i829[3]
  var i831 = i829[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i831[i + 0]) );
  }
  i828.objectReferenceKeys = i830
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i835 = data
  i834.time = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'value')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i839 = data
  i838.functionName = i839[0]
  i838.floatParameter = i839[1]
  i838.intParameter = i839[2]
  i838.stringParameter = i839[3]
  request.r(i839[4], i839[5], 0, i838, 'objectReferenceParameter')
  i838.time = i839[6]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i841 = data
  i840.center = new pc.Vec3( i841[0], i841[1], i841[2] )
  i840.extends = new pc.Vec3( i841[3], i841[4], i841[5] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i845 = data
  var i847 = i845[0]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( i847[i + 0] );
  }
  i844.genericBindings = i846
  var i849 = i845[1]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i844.pptrCurveMapping = i848
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i851 = data
  i850.name = i851[0]
  var i853 = i851[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i853[i + 0]) );
  }
  i850.states = i852
  var i855 = i851[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i855[i + 0]) );
  }
  i850.layers = i854
  var i857 = i851[3]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i857[i + 0]) );
  }
  i850.parameters = i856
  i850.animationClips = i851[4]
  i850.HasSubStateMachines = !!i851[5]
  i850.avatarUnsupported = i851[6]
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i861 = data
  i860.cycleOffset = i861[0]
  i860.cycleOffsetParameter = i861[1]
  i860.cycleOffsetParameterActive = !!i861[2]
  i860.mirror = !!i861[3]
  i860.mirrorParameter = i861[4]
  i860.mirrorParameterActive = !!i861[5]
  i860.motionId = i861[6]
  i860.nameHash = i861[7]
  i860.fullPathHash = i861[8]
  i860.speed = i861[9]
  i860.speedParameter = i861[10]
  i860.speedParameterActive = !!i861[11]
  i860.tag = i861[12]
  i860.name = i861[13]
  i860.layer = i861[14]
  i860.writeDefaultValues = !!i861[15]
  var i863 = i861[16]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i863[i + 0]) );
  }
  i860.transitions = i862
  var i865 = i861[17]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i860.behaviours = i864
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i869 = data
  i868.fullPath = i869[0]
  i868.canTransitionToSelf = !!i869[1]
  i868.duration = i869[2]
  i868.exitTime = i869[3]
  i868.hasExitTime = !!i869[4]
  i868.hasFixedDuration = !!i869[5]
  i868.interruptionSource = i869[6]
  i868.offset = i869[7]
  i868.orderedInterruption = !!i869[8]
  i868.destinationStateNameHash = i869[9]
  i868.destinationStateMachineId = i869[10]
  i868.isExit = !!i869[11]
  i868.mute = !!i869[12]
  i868.solo = !!i869[13]
  var i871 = i869[14]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i871[i + 0]) );
  }
  i868.conditions = i870
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i875 = data
  i874.mode = i875[0]
  i874.parameter = i875[1]
  i874.threshold = i875[2]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i881 = data
  i880.blendingMode = i881[0]
  i880.defaultWeight = i881[1]
  i880.name = i881[2]
  i880.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i881[3], i880.stateMachine)
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i883 = data
  i882.id = i883[0]
  i882.defaultStateNameHash = i883[1]
  var i885 = i883[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i885[i + 0]) );
  }
  i882.entryTransitions = i884
  var i887 = i883[3]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i887[i + 0]) );
  }
  i882.anyStateTransitions = i886
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i891 = data
  i890.destinationStateNameHash = i891[0]
  i890.destinationStateMachineId = i891[1]
  i890.isExit = !!i891[2]
  i890.mute = !!i891[3]
  i890.solo = !!i891[4]
  var i893 = i891[5]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i893[i + 0]) );
  }
  i890.conditions = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i897 = data
  i896.defaultBool = !!i897[0]
  i896.defaultFloat = i897[1]
  i896.defaultInt = i897[2]
  i896.name = i897[3]
  i896.nameHash = i897[4]
  i896.type = i897[5]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i901[i + 0]) );
  }
  i898.files = i900
  i898.componentToPrefabIds = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i905 = data
  i904.path = i905[0]
  request.r(i905[1], i905[2], 0, i904, 'unityObject')
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i907 = data
  var i909 = i907[0]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i909[i + 0]) );
  }
  i906.scriptsExecutionOrder = i908
  var i911 = i907[1]
  var i910 = []
  for(var i = 0; i < i911.length; i += 1) {
    i910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i911[i + 0]) );
  }
  i906.sortingLayers = i910
  var i913 = i907[2]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i913[i + 0]) );
  }
  i906.cullingLayers = i912
  i906.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i907[3], i906.timeSettings)
  i906.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i907[4], i906.physicsSettings)
  i906.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i907[5], i906.physics2DSettings)
  i906.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i907[6], i906.qualitySettings)
  i906.enableRealtimeShadows = !!i907[7]
  i906.enableAutoInstancing = !!i907[8]
  i906.enableDynamicBatching = !!i907[9]
  i906.lightmapEncodingQuality = i907[10]
  i906.desiredColorSpace = i907[11]
  var i915 = i907[12]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i906.allTags = i914
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i919 = data
  i918.name = i919[0]
  i918.value = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i923 = data
  i922.id = i923[0]
  i922.name = i923[1]
  i922.value = i923[2]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i927 = data
  i926.id = i927[0]
  i926.name = i927[1]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i929 = data
  i928.fixedDeltaTime = i929[0]
  i928.maximumDeltaTime = i929[1]
  i928.timeScale = i929[2]
  i928.maximumParticleTimestep = i929[3]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i931 = data
  i930.gravity = new pc.Vec3( i931[0], i931[1], i931[2] )
  i930.defaultSolverIterations = i931[3]
  i930.bounceThreshold = i931[4]
  i930.autoSyncTransforms = !!i931[5]
  i930.autoSimulation = !!i931[6]
  var i933 = i931[7]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i933[i + 0]) );
  }
  i930.collisionMatrix = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i937 = data
  i936.enabled = !!i937[0]
  i936.layerId = i937[1]
  i936.otherLayerId = i937[2]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i939 = data
  request.r(i939[0], i939[1], 0, i938, 'material')
  i938.gravity = new pc.Vec2( i939[2], i939[3] )
  i938.positionIterations = i939[4]
  i938.velocityIterations = i939[5]
  i938.velocityThreshold = i939[6]
  i938.maxLinearCorrection = i939[7]
  i938.maxAngularCorrection = i939[8]
  i938.maxTranslationSpeed = i939[9]
  i938.maxRotationSpeed = i939[10]
  i938.baumgarteScale = i939[11]
  i938.baumgarteTOIScale = i939[12]
  i938.timeToSleep = i939[13]
  i938.linearSleepTolerance = i939[14]
  i938.angularSleepTolerance = i939[15]
  i938.defaultContactOffset = i939[16]
  i938.autoSimulation = !!i939[17]
  i938.queriesHitTriggers = !!i939[18]
  i938.queriesStartInColliders = !!i939[19]
  i938.callbacksOnDisable = !!i939[20]
  i938.reuseCollisionCallbacks = !!i939[21]
  i938.autoSyncTransforms = !!i939[22]
  var i941 = i939[23]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i941[i + 0]) );
  }
  i938.collisionMatrix = i940
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i945 = data
  i944.enabled = !!i945[0]
  i944.layerId = i945[1]
  i944.otherLayerId = i945[2]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i947 = data
  var i949 = i947[0]
  var i948 = []
  for(var i = 0; i < i949.length; i += 1) {
    i948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i949[i + 0]) );
  }
  i946.qualityLevels = i948
  var i951 = i947[1]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.names = i950
  i946.shadows = i947[2]
  i946.anisotropicFiltering = i947[3]
  i946.antiAliasing = i947[4]
  i946.lodBias = i947[5]
  i946.shadowCascades = i947[6]
  i946.shadowDistance = i947[7]
  i946.shadowmaskMode = i947[8]
  i946.shadowProjection = i947[9]
  i946.shadowResolution = i947[10]
  i946.softParticles = !!i947[11]
  i946.softVegetation = !!i947[12]
  i946.activeColorSpace = i947[13]
  i946.desiredColorSpace = i947[14]
  i946.masterTextureLimit = i947[15]
  i946.maxQueuedFrames = i947[16]
  i946.particleRaycastBudget = i947[17]
  i946.pixelLightCount = i947[18]
  i946.realtimeReflectionProbes = !!i947[19]
  i946.shadowCascade2Split = i947[20]
  i946.shadowCascade4Split = new pc.Vec3( i947[21], i947[22], i947[23] )
  i946.streamingMipmapsActive = !!i947[24]
  i946.vSyncCount = i947[25]
  i946.asyncUploadBufferSize = i947[26]
  i946.asyncUploadTimeSlice = i947[27]
  i946.billboardsFaceCameraPosition = !!i947[28]
  i946.shadowNearPlaneOffset = i947[29]
  i946.streamingMipmapsMemoryBudget = i947[30]
  i946.maximumLODLevel = i947[31]
  i946.streamingMipmapsAddAllCameras = !!i947[32]
  i946.streamingMipmapsMaxLevelReduction = i947[33]
  i946.streamingMipmapsRenderersPerFrame = i947[34]
  i946.resolutionScalingFixedDPIFactor = i947[35]
  i946.streamingMipmapsMaxFileIORequests = i947[36]
  i946.currentQualityLevel = i947[37]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i955 = data
  i954.name = i955[0]
  var i957 = i955[1]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i957[i + 0]) );
  }
  i954.tos = i956
  var i959 = i955[2]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( i959[i + 0] );
  }
  i954.constant = i958
  i954.isValid = !!i955[3]
  i954.isHuman = !!i955[4]
  i954.hasRootMotion = !!i955[5]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i963 = data
  i962.hash = i963[0]
  i962.path = i963[1]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i967 = data
  i966.weight = i967[0]
  i966.vertices = i967[1]
  i966.normals = i967[2]
  i966.tangents = i967[3]
  return i966
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[10],"56":[15],"57":[58],"59":[58],"60":[58],"61":[58],"62":[58],"63":[58],"64":[58],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[66],"73":[66],"74":[66],"75":[66],"76":[66],"77":[66],"78":[66],"79":[15],"80":[5],"81":[82],"83":[82],"39":[18],"84":[18],"85":[5,18],"86":[18,21],"87":[18],"88":[21,18],"89":[5],"90":[21,18],"91":[18],"92":[93],"94":[18],"95":[18],"41":[39],"23":[21,18],"96":[18],"40":[39],"97":[18],"98":[18],"99":[18],"100":[18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[18],"106":[21,18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[21,18],"112":[18],"113":[33],"114":[33],"34":[33],"115":[33],"116":[15],"117":[15],"118":[93],"119":[93]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","PathSigleton","Path","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","ParachuteController","BotParachute","UnityEngine.Light","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "4.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "Luna";

Deserializers.lunaAppID = "19987";

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

Deserializers.buildID = "2002179b-e418-4213-a42a-21b9a485ab27";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

