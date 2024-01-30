var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.JointSpring' )
  var i471 = data
  i470.spring = i471[0]
  i470.damper = i471[1]
  i470.targetPosition = i471[2]
  return i470
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointMotor' )
  var i473 = data
  i472.m_TargetVelocity = i473[0]
  i472.m_Force = i473[1]
  i472.m_FreeSpin = i473[2]
  return i472
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointLimits' )
  var i475 = data
  i474.m_Min = i475[0]
  i474.m_Max = i475[1]
  i474.m_Bounciness = i475[2]
  i474.m_BounceMinVelocity = i475[3]
  i474.m_ContactDistance = i475[4]
  i474.minBounce = i475[5]
  i474.maxBounce = i475[6]
  return i474
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointDrive' )
  var i477 = data
  i476.m_PositionSpring = i477[0]
  i476.m_PositionDamper = i477[1]
  i476.m_MaximumForce = i477[2]
  return i476
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i479 = data
  i478.m_Spring = i479[0]
  i478.m_Damper = i479[1]
  return i478
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i481 = data
  i480.m_Limit = i481[0]
  i480.m_Bounciness = i481[1]
  i480.m_ContactDistance = i481[2]
  return i480
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i483 = data
  i482.m_ExtremumSlip = i483[0]
  i482.m_ExtremumValue = i483[1]
  i482.m_AsymptoteSlip = i483[2]
  i482.m_AsymptoteValue = i483[3]
  i482.m_Stiffness = i483[4]
  return i482
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i485 = data
  i484.m_LowerAngle = i485[0]
  i484.m_UpperAngle = i485[1]
  return i484
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i487 = data
  i486.m_MotorSpeed = i487[0]
  i486.m_MaximumMotorTorque = i487[1]
  return i486
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i489 = data
  i488.m_DampingRatio = i489[0]
  i488.m_Frequency = i489[1]
  i488.m_Angle = i489[2]
  return i488
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i491 = data
  i490.m_LowerTranslation = i491[0]
  i490.m_UpperTranslation = i491[1]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i492 = root || new pc.UnityMaterial()
  var i493 = data
  i492.name = i493[0]
  request.r(i493[1], i493[2], 0, i492, 'shader')
  i492.renderQueue = i493[3]
  i492.enableInstancing = !!i493[4]
  var i495 = i493[5]
  var i494 = []
  for(var i = 0; i < i495.length; i += 1) {
    i494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i495[i + 0]) );
  }
  i492.floatParameters = i494
  var i497 = i493[6]
  var i496 = []
  for(var i = 0; i < i497.length; i += 1) {
    i496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i497[i + 0]) );
  }
  i492.colorParameters = i496
  var i499 = i493[7]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i499[i + 0]) );
  }
  i492.vectorParameters = i498
  var i501 = i493[8]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i501[i + 0]) );
  }
  i492.textureParameters = i500
  var i503 = i493[9]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i503[i + 0]) );
  }
  i492.materialFlags = i502
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i507 = data
  i506.name = i507[0]
  i506.value = i507[1]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = new pc.Color(i511[1], i511[2], i511[3], i511[4])
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = new pc.Vec4( i515[1], i515[2], i515[3], i515[4] )
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i519 = data
  i518.name = i519[0]
  request.r(i519[1], i519[2], 0, i518, 'value')
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i523 = data
  i522.name = i523[0]
  i522.enabled = !!i523[1]
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i525 = data
  i524.name = i525[0]
  i524.width = i525[1]
  i524.height = i525[2]
  i524.mipmapCount = i525[3]
  i524.anisoLevel = i525[4]
  i524.filterMode = i525[5]
  i524.hdr = !!i525[6]
  i524.format = i525[7]
  i524.wrapMode = i525[8]
  i524.alphaIsTransparency = !!i525[9]
  i524.alphaSource = i525[10]
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i527 = data
  i526.position = new pc.Vec3( i527[0], i527[1], i527[2] )
  i526.scale = new pc.Vec3( i527[3], i527[4], i527[5] )
  i526.rotation = new pc.Quat(i527[6], i527[7], i527[8], i527[9])
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i529 = data
  request.r(i529[0], i529[1], 0, i528, 'animatorController')
  request.r(i529[2], i529[3], 0, i528, 'avatar')
  i528.updateMode = i529[4]
  i528.hasTransformHierarchy = !!i529[5]
  i528.applyRootMotion = !!i529[6]
  var i531 = i529[7]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.humanBones = i530
  i528.enabled = !!i529[8]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i535 = data
  i534.name = i535[0]
  i534.tagId = i535[1]
  i534.enabled = !!i535[2]
  i534.isStatic = !!i535[3]
  i534.layer = i535[4]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i537 = data
  i536.enabled = !!i537[0]
  request.r(i537[1], i537[2], 0, i536, 'sharedMaterial')
  var i539 = i537[3]
  var i538 = []
  for(var i = 0; i < i539.length; i += 2) {
  request.r(i539[i + 0], i539[i + 1], 2, i538, '')
  }
  i536.sharedMaterials = i538
  i536.receiveShadows = !!i537[4]
  i536.shadowCastingMode = i537[5]
  i536.sortingLayerID = i537[6]
  i536.sortingOrder = i537[7]
  i536.lightmapIndex = i537[8]
  i536.lightmapSceneIndex = i537[9]
  i536.lightmapScaleOffset = new pc.Vec4( i537[10], i537[11], i537[12], i537[13] )
  i536.lightProbeUsage = i537[14]
  i536.reflectionProbeUsage = i537[15]
  request.r(i537[16], i537[17], 0, i536, 'sharedMesh')
  var i541 = i537[18]
  var i540 = []
  for(var i = 0; i < i541.length; i += 2) {
  request.r(i541[i + 0], i541[i + 1], 2, i540, '')
  }
  i536.bones = i540
  i536.updateWhenOffscreen = !!i537[19]
  i536.localBounds = i537[20]
  request.r(i537[21], i537[22], 0, i536, 'rootBone')
  var i543 = i537[23]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i543[i + 0]) );
  }
  i536.blendShapesWeights = i542
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i549 = data
  i548.weight = i549[0]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i551 = data
  i550.name = i551[0]
  i550.halfPrecision = !!i551[1]
  i550.vertexCount = i551[2]
  i550.aabb = i551[3]
  var i553 = i551[4]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( !!i553[i + 0] );
  }
  i550.streams = i552
  i550.vertices = i551[5]
  var i555 = i551[6]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i555[i + 0]) );
  }
  i550.subMeshes = i554
  var i557 = i551[7]
  var i556 = []
  for(var i = 0; i < i557.length; i += 16) {
    i556.push( new pc.Mat4().setData(i557[i + 0], i557[i + 1], i557[i + 2], i557[i + 3],  i557[i + 4], i557[i + 5], i557[i + 6], i557[i + 7],  i557[i + 8], i557[i + 9], i557[i + 10], i557[i + 11],  i557[i + 12], i557[i + 13], i557[i + 14], i557[i + 15]) );
  }
  i550.bindposes = i556
  var i559 = i551[8]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i559[i + 0]) );
  }
  i550.blendShapes = i558
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i565 = data
  i564.triangles = i565[0]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i571 = data
  i570.name = i571[0]
  var i573 = i571[1]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i573[i + 0]) );
  }
  i570.frames = i572
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'sharedMesh')
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'additionalVertexStreams')
  i576.enabled = !!i577[2]
  request.r(i577[3], i577[4], 0, i576, 'sharedMaterial')
  var i579 = i577[5]
  var i578 = []
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 2, i578, '')
  }
  i576.sharedMaterials = i578
  i576.receiveShadows = !!i577[6]
  i576.shadowCastingMode = i577[7]
  i576.sortingLayerID = i577[8]
  i576.sortingOrder = i577[9]
  i576.lightmapIndex = i577[10]
  i576.lightmapSceneIndex = i577[11]
  i576.lightmapScaleOffset = new pc.Vec4( i577[12], i577[13], i577[14], i577[15] )
  i576.lightProbeUsage = i577[16]
  i576.reflectionProbeUsage = i577[17]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i581 = data
  i580.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i581[0], i580.main)
  i580.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i581[1], i580.colorBySpeed)
  i580.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i581[2], i580.colorOverLifetime)
  i580.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i581[3], i580.emission)
  i580.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i581[4], i580.rotationBySpeed)
  i580.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i581[5], i580.rotationOverLifetime)
  i580.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i581[6], i580.shape)
  i580.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i581[7], i580.sizeBySpeed)
  i580.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i581[8], i580.sizeOverLifetime)
  i580.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i581[9], i580.textureSheetAnimation)
  i580.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i581[10], i580.velocityOverLifetime)
  i580.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i581[11], i580.noise)
  i580.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i581[12], i580.inheritVelocity)
  i580.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i581[13], i580.forceOverLifetime)
  i580.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i581[14], i580.limitVelocityOverLifetime)
  i580.useAutoRandomSeed = !!i581[15]
  i580.randomSeed = i581[16]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i582 = root || new pc.ParticleSystemMain()
  var i583 = data
  i582.duration = i583[0]
  i582.loop = !!i583[1]
  i582.prewarm = !!i583[2]
  i582.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[3], i582.startDelay)
  i582.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[4], i582.startLifetime)
  i582.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[5], i582.startSpeed)
  i582.startSize3D = !!i583[6]
  i582.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[7], i582.startSizeX)
  i582.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[8], i582.startSizeY)
  i582.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[9], i582.startSizeZ)
  i582.startRotation3D = !!i583[10]
  i582.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[11], i582.startRotationX)
  i582.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[12], i582.startRotationY)
  i582.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[13], i582.startRotationZ)
  i582.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i583[14], i582.startColor)
  i582.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i583[15], i582.gravityModifier)
  i582.simulationSpace = i583[16]
  request.r(i583[17], i583[18], 0, i582, 'customSimulationSpace')
  i582.simulationSpeed = i583[19]
  i582.useUnscaledTime = !!i583[20]
  i582.scalingMode = i583[21]
  i582.playOnAwake = !!i583[22]
  i582.maxParticles = i583[23]
  i582.emitterVelocityMode = i583[24]
  i582.stopAction = i583[25]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i584 = root || new pc.MinMaxCurve()
  var i585 = data
  i584.mode = i585[0]
  i584.curveMin = new pc.AnimationCurve( { keys_flow: i585[1] } )
  i584.curveMax = new pc.AnimationCurve( { keys_flow: i585[2] } )
  i584.curveMultiplier = i585[3]
  i584.constantMin = i585[4]
  i584.constantMax = i585[5]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i586 = root || new pc.MinMaxGradient()
  var i587 = data
  i586.mode = i587[0]
  i586.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i587[1], i586.gradientMin)
  i586.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i587[2], i586.gradientMax)
  i586.colorMin = new pc.Color(i587[3], i587[4], i587[5], i587[6])
  i586.colorMax = new pc.Color(i587[7], i587[8], i587[9], i587[10])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i589 = data
  i588.mode = i589[0]
  var i591 = i589[1]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i591[i + 0]) );
  }
  i588.colorKeys = i590
  var i593 = i589[2]
  var i592 = []
  for(var i = 0; i < i593.length; i += 1) {
    i592.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i593[i + 0]) );
  }
  i588.alphaKeys = i592
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i594 = root || new pc.ParticleSystemColorBySpeed()
  var i595 = data
  i594.enabled = !!i595[0]
  i594.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i595[1], i594.color)
  i594.range = new pc.Vec2( i595[2], i595[3] )
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i599 = data
  i598.color = new pc.Color(i599[0], i599[1], i599[2], i599[3])
  i598.time = i599[4]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i603 = data
  i602.alpha = i603[0]
  i602.time = i603[1]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i604 = root || new pc.ParticleSystemColorOverLifetime()
  var i605 = data
  i604.enabled = !!i605[0]
  i604.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i605[1], i604.color)
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemEmitter()
  var i607 = data
  i606.enabled = !!i607[0]
  i606.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[1], i606.rateOverTime)
  i606.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[2], i606.rateOverDistance)
  var i609 = i607[3]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i609[i + 0]) );
  }
  i606.bursts = i608
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemBurst()
  var i613 = data
  i612.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i613[0], i612.count)
  i612.cycleCount = i613[1]
  i612.minCount = i613[2]
  i612.maxCount = i613[3]
  i612.repeatInterval = i613[4]
  i612.time = i613[5]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemRotationBySpeed()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.x)
  i614.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.y)
  i614.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[3], i614.z)
  i614.separateAxes = !!i615[4]
  i614.range = new pc.Vec2( i615[5], i615[6] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i616 = root || new pc.ParticleSystemRotationOverLifetime()
  var i617 = data
  i616.enabled = !!i617[0]
  i616.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[1], i616.x)
  i616.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[2], i616.y)
  i616.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i617[3], i616.z)
  i616.separateAxes = !!i617[4]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemShape()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.shapeType = i619[1]
  i618.randomDirectionAmount = i619[2]
  i618.sphericalDirectionAmount = i619[3]
  i618.randomPositionAmount = i619[4]
  i618.alignToDirection = !!i619[5]
  i618.radius = i619[6]
  i618.radiusMode = i619[7]
  i618.radiusSpread = i619[8]
  i618.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[9], i618.radiusSpeed)
  i618.radiusThickness = i619[10]
  i618.angle = i619[11]
  i618.length = i619[12]
  i618.boxThickness = new pc.Vec3( i619[13], i619[14], i619[15] )
  i618.meshShapeType = i619[16]
  request.r(i619[17], i619[18], 0, i618, 'mesh')
  request.r(i619[19], i619[20], 0, i618, 'meshRenderer')
  request.r(i619[21], i619[22], 0, i618, 'skinnedMeshRenderer')
  i618.useMeshMaterialIndex = !!i619[23]
  i618.meshMaterialIndex = i619[24]
  i618.useMeshColors = !!i619[25]
  i618.normalOffset = i619[26]
  i618.arc = i619[27]
  i618.arcMode = i619[28]
  i618.arcSpread = i619[29]
  i618.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i619[30], i618.arcSpeed)
  i618.donutRadius = i619[31]
  i618.position = new pc.Vec3( i619[32], i619[33], i619[34] )
  i618.rotation = new pc.Vec3( i619[35], i619[36], i619[37] )
  i618.scale = new pc.Vec3( i619[38], i619[39], i619[40] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemSizeBySpeed()
  var i621 = data
  i620.enabled = !!i621[0]
  i620.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[1], i620.x)
  i620.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[2], i620.y)
  i620.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[3], i620.z)
  i620.separateAxes = !!i621[4]
  i620.range = new pc.Vec2( i621[5], i621[6] )
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemSizeOverLifetime()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.separateAxes = !!i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.mode = i625[1]
  i624.animation = i625[2]
  i624.numTilesX = i625[3]
  i624.numTilesY = i625[4]
  i624.useRandomRow = !!i625[5]
  i624.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[6], i624.frameOverTime)
  i624.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[7], i624.startFrame)
  i624.cycleCount = i625[8]
  i624.rowIndex = i625[9]
  i624.flipU = i625[10]
  i624.flipV = i625[11]
  i624.spriteCount = i625[12]
  var i627 = i625[13]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i624.sprites = i626
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[4], i630.radial)
  i630.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[5], i630.speedModifier)
  i630.space = i631[6]
  i630.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[7], i630.orbitalX)
  i630.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[8], i630.orbitalY)
  i630.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[9], i630.orbitalZ)
  i630.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[10], i630.orbitalOffsetX)
  i630.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[11], i630.orbitalOffsetY)
  i630.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[12], i630.orbitalOffsetZ)
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemNoise()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.separateAxes = !!i633[1]
  i632.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[2], i632.strengthX)
  i632.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[3], i632.strengthY)
  i632.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[4], i632.strengthZ)
  i632.frequency = i633[5]
  i632.damping = !!i633[6]
  i632.octaveCount = i633[7]
  i632.octaveMultiplier = i633[8]
  i632.octaveScale = i633[9]
  i632.quality = i633[10]
  i632.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[11], i632.scrollSpeed)
  i632.scrollSpeedMultiplier = i633[12]
  i632.remapEnabled = !!i633[13]
  i632.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[14], i632.remapX)
  i632.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[15], i632.remapY)
  i632.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[16], i632.remapZ)
  i632.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[17], i632.positionAmount)
  i632.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[18], i632.rotationAmount)
  i632.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[19], i632.sizeAmount)
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i634 = root || new pc.ParticleSystemInheritVelocity()
  var i635 = data
  i634.enabled = !!i635[0]
  i634.mode = i635[1]
  i634.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i635[2], i634.curve)
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemForceOverLifetime()
  var i637 = data
  i636.enabled = !!i637[0]
  i636.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[1], i636.x)
  i636.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[2], i636.y)
  i636.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.z)
  i636.space = i637[4]
  i636.randomized = !!i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.limit)
  i638.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.limitX)
  i638.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.limitY)
  i638.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.limitZ)
  i638.dampen = i639[5]
  i638.separateAxes = !!i639[6]
  i638.space = i639[7]
  i638.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[8], i638.drag)
  i638.multiplyDragByParticleSize = !!i639[9]
  i638.multiplyDragByParticleVelocity = !!i639[10]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i641 = data
  i640.enabled = !!i641[0]
  request.r(i641[1], i641[2], 0, i640, 'sharedMaterial')
  var i643 = i641[3]
  var i642 = []
  for(var i = 0; i < i643.length; i += 2) {
  request.r(i643[i + 0], i643[i + 1], 2, i642, '')
  }
  i640.sharedMaterials = i642
  i640.receiveShadows = !!i641[4]
  i640.shadowCastingMode = i641[5]
  i640.sortingLayerID = i641[6]
  i640.sortingOrder = i641[7]
  i640.lightmapIndex = i641[8]
  i640.lightmapSceneIndex = i641[9]
  i640.lightmapScaleOffset = new pc.Vec4( i641[10], i641[11], i641[12], i641[13] )
  i640.lightProbeUsage = i641[14]
  i640.reflectionProbeUsage = i641[15]
  request.r(i641[16], i641[17], 0, i640, 'mesh')
  i640.meshCount = i641[18]
  i640.activeVertexStreamsCount = i641[19]
  i640.alignment = i641[20]
  i640.renderMode = i641[21]
  i640.sortMode = i641[22]
  i640.lengthScale = i641[23]
  i640.velocityScale = i641[24]
  i640.cameraVelocityScale = i641[25]
  i640.normalDirection = i641[26]
  i640.sortingFudge = i641[27]
  i640.minParticleSize = i641[28]
  i640.maxParticleSize = i641[29]
  i640.pivot = new pc.Vec3( i641[30], i641[31], i641[32] )
  request.r(i641[33], i641[34], 0, i640, 'trailMaterial')
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'clip')
  request.r(i645[2], i645[3], 0, i644, 'outputAudioMixerGroup')
  i644.playOnAwake = !!i645[4]
  i644.loop = !!i645[5]
  i644.time = i645[6]
  i644.volume = i645[7]
  i644.pitch = i645[8]
  i644.enabled = !!i645[9]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i647 = data
  i646.enabled = !!i647[0]
  i646.isTrigger = !!i647[1]
  request.r(i647[2], i647[3], 0, i646, 'material')
  request.r(i647[4], i647[5], 0, i646, 'sharedMesh')
  i646.convex = !!i647[6]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i649 = data
  i648.enabled = !!i649[0]
  i648.aspect = i649[1]
  i648.orthographic = !!i649[2]
  i648.orthographicSize = i649[3]
  i648.backgroundColor = new pc.Color(i649[4], i649[5], i649[6], i649[7])
  i648.nearClipPlane = i649[8]
  i648.farClipPlane = i649[9]
  i648.fieldOfView = i649[10]
  i648.depth = i649[11]
  i648.clearFlags = i649[12]
  i648.cullingMask = i649[13]
  i648.rect = i649[14]
  request.r(i649[15], i649[16], 0, i648, 'targetTexture')
  i648.usePhysicalProperties = !!i649[17]
  i648.focalLength = i649[18]
  i648.sensorSize = new pc.Vec2( i649[19], i649[20] )
  i648.lensShift = new pc.Vec2( i649[21], i649[22] )
  i648.gateFit = i649[23]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i651 = data
  i650.center = new pc.Vec3( i651[0], i651[1], i651[2] )
  i650.size = new pc.Vec3( i651[3], i651[4], i651[5] )
  i650.enabled = !!i651[6]
  i650.isTrigger = !!i651[7]
  request.r(i651[8], i651[9], 0, i650, 'material')
  return i650
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i652 = root || request.c( 'PlayerView' )
  var i653 = data
  request.r(i653[0], i653[1], 0, i652, '_mainRoot')
  request.r(i653[2], i653[3], 0, i652, '_head')
  i652._sensitivity = i653[4]
  i652._slerpFactor = i653[5]
  i652._viewHorizontalThreshold = new pc.Vec2( i653[6], i653[7] )
  i652._viewVerticalThreshold = new pc.Vec2( i653[8], i653[9] )
  i652._initRotate = new pc.Vec2( i653[10], i653[11] )
  i652._totalRotate = new pc.Vec2( i653[12], i653[13] )
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i655 = data
  i654.playAutomatically = !!i655[0]
  request.r(i655[1], i655[2], 0, i654, 'clip')
  var i657 = i655[3]
  var i656 = []
  for(var i = 0; i < i657.length; i += 2) {
  request.r(i657[i + 0], i657[i + 1], 2, i656, '')
  }
  i654.clips = i656
  i654.wrapMode = i655[4]
  i654.enabled = !!i655[5]
  return i654
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i660 = root || request.c( 'WeaponController' )
  var i661 = data
  i660.Mask = UnityEngine.LayerMask.FromIntegerValue( i661[0] )
  i660.damage = i661[1]
  request.r(i661[2], i661[3], 0, i660, '_muzzleTrans')
  request.r(i661[4], i661[5], 0, i660, '_animation')
  request.r(i661[6], i661[7], 0, i660, 'bullet')
  request.r(i661[8], i661[9], 0, i660, '_muzzleFlash')
  request.r(i661[10], i661[11], 0, i660, 'audioClip')
  request.r(i661[12], i661[13], 0, i660, 'audioSource')
  i660.SphereRadius = i661[14]
  return i660
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i662 = root || request.c( 'BulletTrail' )
  var i663 = data
  i662.Speed = i663[0]
  i662.LifeTime = i663[1]
  request.r(i663[2], i663[3], 0, i662, '_trail')
  i662._trailStartScale = new pc.Vec3( i663[4], i663[5], i663[6] )
  i662._trailMaxScale = new pc.Vec3( i663[7], i663[8], i663[9] )
  i662._trailLengthAtMaxScale = i663[10]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i665 = data
  i664.pivot = new pc.Vec2( i665[0], i665[1] )
  i664.anchorMin = new pc.Vec2( i665[2], i665[3] )
  i664.anchorMax = new pc.Vec2( i665[4], i665[5] )
  i664.sizeDelta = new pc.Vec2( i665[6], i665[7] )
  i664.anchoredPosition3D = new pc.Vec3( i665[8], i665[9], i665[10] )
  i664.rotation = new pc.Quat(i665[11], i665[12], i665[13], i665[14])
  i664.scale = new pc.Vec3( i665[15], i665[16], i665[17] )
  return i664
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i666 = root || request.c( 'UICrosshairItem' )
  var i667 = data
  request.r(i667[0], i667[1], 0, i666, 'CrosshairRectTransform')
  i666._distanceMax = i667[2]
  i666._distanceMin = i667[3]
  i666._speedShrink = i667[4]
  i666._currentSpeed = i667[5]
  i666._rateOnMove = i667[6]
  i666._rateOnAttack = i667[7]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i669 = data
  i668.cullTransparentMesh = !!i669[0]
  return i668
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.UI.Image' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'm_Sprite')
  i670.m_Type = i671[2]
  i670.m_PreserveAspect = !!i671[3]
  i670.m_FillCenter = !!i671[4]
  i670.m_FillMethod = i671[5]
  i670.m_FillAmount = i671[6]
  i670.m_FillClockwise = !!i671[7]
  i670.m_FillOrigin = i671[8]
  i670.m_UseSpriteMesh = !!i671[9]
  i670.m_PixelsPerUnitMultiplier = i671[10]
  request.r(i671[11], i671[12], 0, i670, 'm_Material')
  i670.m_Maskable = !!i671[13]
  i670.m_Color = new pc.Color(i671[14], i671[15], i671[16], i671[17])
  i670.m_RaycastTarget = !!i671[18]
  i670.m_RaycastPadding = new pc.Vec4( i671[19], i671[20], i671[21], i671[22] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i673 = data
  i672.name = i673[0]
  i672.atlasId = i673[1]
  i672.mipmapCount = i673[2]
  i672.hdr = !!i673[3]
  i672.size = i673[4]
  i672.anisoLevel = i673[5]
  i672.filterMode = i673[6]
  i672.wrapMode = i673[7]
  var i675 = i673[8]
  var i674 = []
  for(var i = 0; i < i675.length; i += 4) {
    i674.push( UnityEngine.Rect.MinMaxRect(i675[i + 0], i675[i + 1], i675[i + 2], i675[i + 3]) );
  }
  i672.rects = i674
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i679 = data
  i678.name = i679[0]
  i678.index = i679[1]
  i678.startup = !!i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i681 = data
  i680.enabled = !!i681[0]
  i680.type = i681[1]
  i680.color = new pc.Color(i681[2], i681[3], i681[4], i681[5])
  i680.cullingMask = i681[6]
  i680.intensity = i681[7]
  i680.range = i681[8]
  i680.spotAngle = i681[9]
  i680.shadows = i681[10]
  i680.shadowNormalBias = i681[11]
  i680.shadowBias = i681[12]
  i680.shadowStrength = i681[13]
  i680.shadowResolution = i681[14]
  i680.lightmapBakeType = i681[15]
  i680.renderMode = i681[16]
  request.r(i681[17], i681[18], 0, i680, 'cookie')
  i680.cookieSize = i681[19]
  return i680
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i682 = root || request.c( 'ObjectPool' )
  var i683 = data
  return i682
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'm_FirstSelected')
  i684.m_sendNavigationEvents = !!i685[2]
  i684.m_DragThreshold = i685[3]
  return i684
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i687 = data
  i686.m_HorizontalAxis = i687[0]
  i686.m_VerticalAxis = i687[1]
  i686.m_SubmitButton = i687[2]
  i686.m_CancelButton = i687[3]
  i686.m_InputActionsPerSecond = i687[4]
  i686.m_RepeatDelay = i687[5]
  i686.m_ForceModuleActive = !!i687[6]
  i686.m_SendPointerHoverToParent = !!i687[7]
  return i686
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i688 = root || request.c( 'PathSigleton' )
  var i689 = data
  var i691 = i689[0]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 1, i690, '')
  }
  i688._paths = i690
  return i688
}

Deserializers["Path"] = function (request, data, root) {
  var i694 = root || request.c( 'Path' )
  var i695 = data
  var i697 = i695[0]
  var i696 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 1, i696, '')
  }
  i694.points = i696
  return i694
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i700 = root || request.c( 'SpawnBot' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'botPrefab')
  i700.spawnInterval = i701[2]
  i700.UPPER = i701[3]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.planeDistance = i703[1]
  i702.referencePixelsPerUnit = i703[2]
  i702.isFallbackOverlay = !!i703[3]
  i702.renderMode = i703[4]
  i702.renderOrder = i703[5]
  i702.sortingLayerName = i703[6]
  i702.sortingOrder = i703[7]
  i702.scaleFactor = i703[8]
  request.r(i703[9], i703[10], 0, i702, 'worldCamera')
  i702.overrideSorting = !!i703[11]
  i702.pixelPerfect = !!i703[12]
  i702.targetDisplay = i703[13]
  i702.overridePixelPerfect = !!i703[14]
  return i702
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i705 = data
  i704.m_UiScaleMode = i705[0]
  i704.m_ReferencePixelsPerUnit = i705[1]
  i704.m_ScaleFactor = i705[2]
  i704.m_ReferenceResolution = new pc.Vec2( i705[3], i705[4] )
  i704.m_ScreenMatchMode = i705[5]
  i704.m_MatchWidthOrHeight = i705[6]
  i704.m_PhysicalUnit = i705[7]
  i704.m_FallbackScreenDPI = i705[8]
  i704.m_DefaultSpriteDPI = i705[9]
  i704.m_DynamicPixelsPerUnit = i705[10]
  i704.m_PresetInfoIsWorld = !!i705[11]
  return i704
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i707 = data
  i706.m_IgnoreReversedGraphics = !!i707[0]
  i706.m_BlockingObjects = i707[1]
  i706.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i707[2] )
  return i706
}

Deserializers["BotController"] = function (request, data, root) {
  var i708 = root || request.c( 'BotController' )
  var i709 = data
  request.r(i709[0], i709[1], 0, i708, '_animator')
  request.r(i709[2], i709[3], 0, i708, '_muzzle')
  request.r(i709[4], i709[5], 0, i708, 'bullet')
  request.r(i709[6], i709[7], 0, i708, 'target')
  i708.moveIndex = i709[8]
  i708.isMoveDone = !!i709[9]
  i708.isDie = !!i709[10]
  i708.isTakeDame = !!i709[11]
  i708.maxHealth = i709[12]
  request.r(i709[13], i709[14], 0, i708, 'healthBarRenderer')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i711 = data
  i710.ambientIntensity = i711[0]
  i710.reflectionIntensity = i711[1]
  i710.ambientMode = i711[2]
  i710.ambientLight = new pc.Color(i711[3], i711[4], i711[5], i711[6])
  i710.ambientSkyColor = new pc.Color(i711[7], i711[8], i711[9], i711[10])
  i710.ambientGroundColor = new pc.Color(i711[11], i711[12], i711[13], i711[14])
  i710.ambientEquatorColor = new pc.Color(i711[15], i711[16], i711[17], i711[18])
  i710.fogColor = new pc.Color(i711[19], i711[20], i711[21], i711[22])
  i710.fogEndDistance = i711[23]
  i710.fogStartDistance = i711[24]
  i710.fogDensity = i711[25]
  i710.fog = !!i711[26]
  request.r(i711[27], i711[28], 0, i710, 'skybox')
  i710.fogMode = i711[29]
  var i713 = i711[30]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i713[i + 0]) );
  }
  i710.lightmaps = i712
  i710.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i711[31], i710.lightProbes)
  i710.lightmapsMode = i711[32]
  i710.mixedBakeMode = i711[33]
  i710.environmentLightingMode = i711[34]
  i710.ambientProbe = new pc.SphericalHarmonicsL2(i711[35])
  i710.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i711[36])
  i710.useReferenceAmbientProbe = !!i711[37]
  request.r(i711[38], i711[39], 0, i710, 'customReflection')
  request.r(i711[40], i711[41], 0, i710, 'defaultReflection')
  i710.defaultReflectionMode = i711[42]
  i710.defaultReflectionResolution = i711[43]
  i710.sunLightObjectId = i711[44]
  i710.pixelLightCount = i711[45]
  i710.defaultReflectionHDR = !!i711[46]
  i710.hasLightDataAsset = !!i711[47]
  i710.hasManualGenerate = !!i711[48]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'lightmapColor')
  request.r(i717[2], i717[3], 0, i716, 'lightmapDirection')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i718 = root || new UnityEngine.LightProbes()
  var i719 = data
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i729[i + 0]));
  }
  i726.ShaderCompilationErrors = i728
  i726.name = i727[1]
  i726.guid = i727[2]
  var i731 = i727[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( i731[i + 0] );
  }
  i726.shaderDefinedKeywords = i730
  var i733 = i727[4]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i733[i + 0]) );
  }
  i726.passes = i732
  var i735 = i727[5]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i735[i + 0]) );
  }
  i726.usePasses = i734
  var i737 = i727[6]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i737[i + 0]) );
  }
  i726.defaultParameterValues = i736
  request.r(i727[7], i727[8], 0, i726, 'unityFallbackShader')
  i726.readDepth = !!i727[9]
  i726.isCreatedByShaderGraph = !!i727[10]
  i726.usedBatchUniforms = i727[11]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i741 = data
  i740.shaderName = i741[0]
  i740.errorMessage = i741[1]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i746 = root || new pc.UnityShaderPass()
  var i747 = data
  i746.id = i747[0]
  i746.subShaderIndex = i747[1]
  i746.name = i747[2]
  i746.passType = i747[3]
  i746.grabPassTextureName = i747[4]
  i746.usePass = !!i747[5]
  i746.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[6], i746.zTest)
  i746.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[7], i746.zWrite)
  i746.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[8], i746.culling)
  i746.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[9], i746.blending)
  i746.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i747[10], i746.alphaBlending)
  i746.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[11], i746.colorWriteMask)
  i746.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[12], i746.offsetUnits)
  i746.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[13], i746.offsetFactor)
  i746.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[14], i746.stencilRef)
  i746.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[15], i746.stencilReadMask)
  i746.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i747[16], i746.stencilWriteMask)
  i746.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[17], i746.stencilOp)
  i746.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[18], i746.stencilOpFront)
  i746.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i747[19], i746.stencilOpBack)
  var i749 = i747[20]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i749[i + 0]) );
  }
  i746.tags = i748
  var i751 = i747[21]
  var i750 = []
  for(var i = 0; i < i751.length; i += 1) {
    i750.push( i751[i + 0] );
  }
  i746.passDefinedKeywords = i750
  var i753 = i747[22]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i753[i + 0]) );
  }
  i746.passDefinedKeywordGroups = i752
  var i755 = i747[23]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i755[i + 0]) );
  }
  i746.variants = i754
  var i757 = i747[24]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i757[i + 0]) );
  }
  i746.excludedVariants = i756
  i746.hasDepthReader = !!i747[25]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i759 = data
  i758.val = i759[0]
  i758.name = i759[1]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i761 = data
  i760.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[0], i760.src)
  i760.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[1], i760.dst)
  i760.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i761[2], i760.op)
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i763 = data
  i762.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[0], i762.pass)
  i762.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[1], i762.fail)
  i762.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[2], i762.zFail)
  i762.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i763[3], i762.comp)
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i767 = data
  i766.name = i767[0]
  i766.value = i767[1]
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i771 = data
  var i773 = i771[0]
  var i772 = []
  for(var i = 0; i < i773.length; i += 1) {
    i772.push( i773[i + 0] );
  }
  i770.keywords = i772
  i770.hasDiscard = !!i771[1]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i777 = data
  i776.passId = i777[0]
  i776.subShaderIndex = i777[1]
  var i779 = i777[2]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.vertexProgram = i777[3]
  i776.fragmentProgram = i777[4]
  i776.readDepth = !!i777[5]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'shader')
  i782.pass = i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i787 = data
  i786.name = i787[0]
  i786.type = i787[1]
  i786.value = new pc.Vec4( i787[2], i787[3], i787[4], i787[5] )
  i786.textureValue = i787[6]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i789 = data
  i788.name = i789[0]
  request.r(i789[1], i789[2], 0, i788, 'texture')
  i788.aabb = i789[3]
  i788.vertices = i789[4]
  i788.triangles = i789[5]
  i788.textureRect = UnityEngine.Rect.MinMaxRect(i789[6], i789[7], i789[8], i789[9])
  i788.packedRect = UnityEngine.Rect.MinMaxRect(i789[10], i789[11], i789[12], i789[13])
  i788.border = new pc.Vec4( i789[14], i789[15], i789[16], i789[17] )
  i788.transparency = i789[18]
  i788.bounds = i789[19]
  i788.pixelsPerUnit = i789[20]
  i788.textureWidth = i789[21]
  i788.textureHeight = i789[22]
  i788.nativeSize = new pc.Vec2( i789[23], i789[24] )
  i788.pivot = new pc.Vec2( i789[25], i789[26] )
  i788.textureRectOffset = new pc.Vec2( i789[27], i789[28] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i791 = data
  i790.name = i791[0]
  i790.wrapMode = i791[1]
  i790.isLooping = !!i791[2]
  i790.length = i791[3]
  var i793 = i791[4]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i793[i + 0]) );
  }
  i790.curves = i792
  var i795 = i791[5]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i795[i + 0]) );
  }
  i790.events = i794
  i790.halfPrecision = !!i791[6]
  i790.frameRate = i791[7]
  i790.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i791[8], i790.localBounds)
  i790.hasMuscleCurves = !!i791[9]
  var i797 = i791[10]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i790.clipMuscleConstant = i796
  i790.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i791[11], i790.clipBindingConstant)
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i801 = data
  i800.path = i801[0]
  i800.componentType = i801[1]
  i800.property = i801[2]
  i800.keys = i801[3]
  var i803 = i801[4]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i803[i + 0]) );
  }
  i800.objectReferenceKeys = i802
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i807 = data
  i806.time = i807[0]
  request.r(i807[1], i807[2], 0, i806, 'value')
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i811 = data
  i810.functionName = i811[0]
  i810.floatParameter = i811[1]
  i810.intParameter = i811[2]
  i810.stringParameter = i811[3]
  request.r(i811[4], i811[5], 0, i810, 'objectReferenceParameter')
  i810.time = i811[6]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i813 = data
  i812.center = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.extends = new pc.Vec3( i813[3], i813[4], i813[5] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.genericBindings = i818
  var i821 = i817[1]
  var i820 = []
  for(var i = 0; i < i821.length; i += 1) {
    i820.push( i821[i + 0] );
  }
  i816.pptrCurveMapping = i820
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i823 = data
  i822.name = i823[0]
  var i825 = i823[1]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i825[i + 0]) );
  }
  i822.states = i824
  var i827 = i823[2]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i827[i + 0]) );
  }
  i822.layers = i826
  var i829 = i823[3]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i829[i + 0]) );
  }
  i822.parameters = i828
  i822.animationClips = i823[4]
  i822.HasSubStateMachines = !!i823[5]
  i822.avatarUnsupported = i823[6]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i833 = data
  i832.cycleOffset = i833[0]
  i832.cycleOffsetParameter = i833[1]
  i832.cycleOffsetParameterActive = !!i833[2]
  i832.mirror = !!i833[3]
  i832.mirrorParameter = i833[4]
  i832.mirrorParameterActive = !!i833[5]
  i832.motionId = i833[6]
  i832.nameHash = i833[7]
  i832.fullPathHash = i833[8]
  i832.speed = i833[9]
  i832.speedParameter = i833[10]
  i832.speedParameterActive = !!i833[11]
  i832.tag = i833[12]
  i832.name = i833[13]
  i832.layer = i833[14]
  i832.writeDefaultValues = !!i833[15]
  var i835 = i833[16]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i835[i + 0]) );
  }
  i832.transitions = i834
  var i837 = i833[17]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i832.behaviours = i836
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i841 = data
  i840.fullPath = i841[0]
  i840.canTransitionToSelf = !!i841[1]
  i840.duration = i841[2]
  i840.exitTime = i841[3]
  i840.hasExitTime = !!i841[4]
  i840.hasFixedDuration = !!i841[5]
  i840.interruptionSource = i841[6]
  i840.offset = i841[7]
  i840.orderedInterruption = !!i841[8]
  i840.destinationStateNameHash = i841[9]
  i840.destinationStateMachineId = i841[10]
  i840.isExit = !!i841[11]
  i840.mute = !!i841[12]
  i840.solo = !!i841[13]
  var i843 = i841[14]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i843[i + 0]) );
  }
  i840.conditions = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i847 = data
  i846.mode = i847[0]
  i846.parameter = i847[1]
  i846.threshold = i847[2]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i853 = data
  i852.blendingMode = i853[0]
  i852.defaultWeight = i853[1]
  i852.name = i853[2]
  i852.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i853[3], i852.stateMachine)
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i855 = data
  i854.id = i855[0]
  i854.defaultStateNameHash = i855[1]
  var i857 = i855[2]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i857[i + 0]) );
  }
  i854.entryTransitions = i856
  var i859 = i855[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i859[i + 0]) );
  }
  i854.anyStateTransitions = i858
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i863 = data
  i862.destinationStateNameHash = i863[0]
  i862.destinationStateMachineId = i863[1]
  i862.isExit = !!i863[2]
  i862.mute = !!i863[3]
  i862.solo = !!i863[4]
  var i865 = i863[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i865[i + 0]) );
  }
  i862.conditions = i864
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i869 = data
  i868.defaultBool = !!i869[0]
  i868.defaultFloat = i869[1]
  i868.defaultInt = i869[2]
  i868.name = i869[3]
  i868.nameHash = i869[4]
  i868.type = i869[5]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i873[i + 0]) );
  }
  i870.files = i872
  i870.componentToPrefabIds = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i877 = data
  i876.path = i877[0]
  request.r(i877[1], i877[2], 0, i876, 'unityObject')
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i881[i + 0]) );
  }
  i878.scriptsExecutionOrder = i880
  var i883 = i879[1]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i883[i + 0]) );
  }
  i878.sortingLayers = i882
  var i885 = i879[2]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i885[i + 0]) );
  }
  i878.cullingLayers = i884
  i878.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i879[3], i878.timeSettings)
  i878.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i879[4], i878.physicsSettings)
  i878.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i879[5], i878.physics2DSettings)
  i878.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i879[6], i878.qualitySettings)
  i878.enableRealtimeShadows = !!i879[7]
  i878.enableAutoInstancing = !!i879[8]
  i878.enableDynamicBatching = !!i879[9]
  i878.lightmapEncodingQuality = i879[10]
  i878.desiredColorSpace = i879[11]
  var i887 = i879[12]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( i887[i + 0] );
  }
  i878.allTags = i886
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i891 = data
  i890.name = i891[0]
  i890.value = i891[1]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i895 = data
  i894.id = i895[0]
  i894.name = i895[1]
  i894.value = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i899 = data
  i898.id = i899[0]
  i898.name = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i901 = data
  i900.fixedDeltaTime = i901[0]
  i900.maximumDeltaTime = i901[1]
  i900.timeScale = i901[2]
  i900.maximumParticleTimestep = i901[3]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i903 = data
  i902.gravity = new pc.Vec3( i903[0], i903[1], i903[2] )
  i902.defaultSolverIterations = i903[3]
  i902.bounceThreshold = i903[4]
  i902.autoSyncTransforms = !!i903[5]
  i902.autoSimulation = !!i903[6]
  var i905 = i903[7]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i905[i + 0]) );
  }
  i902.collisionMatrix = i904
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i909 = data
  i908.enabled = !!i909[0]
  i908.layerId = i909[1]
  i908.otherLayerId = i909[2]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'material')
  i910.gravity = new pc.Vec2( i911[2], i911[3] )
  i910.positionIterations = i911[4]
  i910.velocityIterations = i911[5]
  i910.velocityThreshold = i911[6]
  i910.maxLinearCorrection = i911[7]
  i910.maxAngularCorrection = i911[8]
  i910.maxTranslationSpeed = i911[9]
  i910.maxRotationSpeed = i911[10]
  i910.baumgarteScale = i911[11]
  i910.baumgarteTOIScale = i911[12]
  i910.timeToSleep = i911[13]
  i910.linearSleepTolerance = i911[14]
  i910.angularSleepTolerance = i911[15]
  i910.defaultContactOffset = i911[16]
  i910.autoSimulation = !!i911[17]
  i910.queriesHitTriggers = !!i911[18]
  i910.queriesStartInColliders = !!i911[19]
  i910.callbacksOnDisable = !!i911[20]
  i910.reuseCollisionCallbacks = !!i911[21]
  i910.autoSyncTransforms = !!i911[22]
  var i913 = i911[23]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i913[i + 0]) );
  }
  i910.collisionMatrix = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.layerId = i917[1]
  i916.otherLayerId = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i921[i + 0]) );
  }
  i918.qualityLevels = i920
  var i923 = i919[1]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( i923[i + 0] );
  }
  i918.names = i922
  i918.shadows = i919[2]
  i918.anisotropicFiltering = i919[3]
  i918.antiAliasing = i919[4]
  i918.lodBias = i919[5]
  i918.shadowCascades = i919[6]
  i918.shadowDistance = i919[7]
  i918.shadowmaskMode = i919[8]
  i918.shadowProjection = i919[9]
  i918.shadowResolution = i919[10]
  i918.softParticles = !!i919[11]
  i918.softVegetation = !!i919[12]
  i918.activeColorSpace = i919[13]
  i918.desiredColorSpace = i919[14]
  i918.masterTextureLimit = i919[15]
  i918.maxQueuedFrames = i919[16]
  i918.particleRaycastBudget = i919[17]
  i918.pixelLightCount = i919[18]
  i918.realtimeReflectionProbes = !!i919[19]
  i918.shadowCascade2Split = i919[20]
  i918.shadowCascade4Split = new pc.Vec3( i919[21], i919[22], i919[23] )
  i918.streamingMipmapsActive = !!i919[24]
  i918.vSyncCount = i919[25]
  i918.asyncUploadBufferSize = i919[26]
  i918.asyncUploadTimeSlice = i919[27]
  i918.billboardsFaceCameraPosition = !!i919[28]
  i918.shadowNearPlaneOffset = i919[29]
  i918.streamingMipmapsMemoryBudget = i919[30]
  i918.maximumLODLevel = i919[31]
  i918.streamingMipmapsAddAllCameras = !!i919[32]
  i918.streamingMipmapsMaxLevelReduction = i919[33]
  i918.streamingMipmapsRenderersPerFrame = i919[34]
  i918.resolutionScalingFixedDPIFactor = i919[35]
  i918.streamingMipmapsMaxFileIORequests = i919[36]
  i918.currentQualityLevel = i919[37]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i927 = data
  i926.name = i927[0]
  var i929 = i927[1]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i929[i + 0]) );
  }
  i926.tos = i928
  var i931 = i927[2]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.constant = i930
  i926.isValid = !!i927[3]
  i926.isHuman = !!i927[4]
  i926.hasRootMotion = !!i927[5]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i935 = data
  i934.hash = i935[0]
  i934.path = i935[1]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i939 = data
  i938.weight = i939[0]
  i938.vertices = i939[1]
  i938.normals = i939[2]
  i938.tangents = i939[3]
  return i938
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[6],"52":[15],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[54],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[62],"69":[62],"70":[62],"71":[62],"72":[62],"73":[62],"74":[62],"75":[15],"76":[10],"77":[78],"79":[78],"38":[25],"80":[25],"81":[10,25],"82":[25,27],"83":[25],"84":[27,25],"85":[10],"86":[27,25],"87":[25],"88":[89],"90":[25],"91":[25],"40":[38],"29":[27,25],"92":[25],"39":[38],"93":[25],"94":[25],"95":[25],"96":[25],"97":[25],"98":[25],"99":[25],"100":[25],"101":[25],"102":[27,25],"103":[25],"104":[25],"105":[25],"106":[25],"107":[27,25],"108":[25],"109":[33],"110":[33],"34":[33],"111":[33],"112":[15],"113":[15],"114":[89],"115":[89]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","BulletTrail","UnityEngine.RectTransform","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","ObjectPool","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PathSigleton","Path","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1622";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3485";

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

Deserializers.buildID = "1da981de-5915-4695-afba-79b33c32b687";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

