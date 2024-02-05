var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointSpring' )
  var i495 = data
  i494.spring = i495[0]
  i494.damper = i495[1]
  i494.targetPosition = i495[2]
  return i494
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.JointMotor' )
  var i497 = data
  i496.m_TargetVelocity = i497[0]
  i496.m_Force = i497[1]
  i496.m_FreeSpin = i497[2]
  return i496
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.JointLimits' )
  var i499 = data
  i498.m_Min = i499[0]
  i498.m_Max = i499[1]
  i498.m_Bounciness = i499[2]
  i498.m_BounceMinVelocity = i499[3]
  i498.m_ContactDistance = i499[4]
  i498.minBounce = i499[5]
  i498.maxBounce = i499[6]
  return i498
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.JointDrive' )
  var i501 = data
  i500.m_PositionSpring = i501[0]
  i500.m_PositionDamper = i501[1]
  i500.m_MaximumForce = i501[2]
  return i500
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i503 = data
  i502.m_Spring = i503[0]
  i502.m_Damper = i503[1]
  return i502
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i505 = data
  i504.m_Limit = i505[0]
  i504.m_Bounciness = i505[1]
  i504.m_ContactDistance = i505[2]
  return i504
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i507 = data
  i506.m_ExtremumSlip = i507[0]
  i506.m_ExtremumValue = i507[1]
  i506.m_AsymptoteSlip = i507[2]
  i506.m_AsymptoteValue = i507[3]
  i506.m_Stiffness = i507[4]
  return i506
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i508 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i509 = data
  i508.m_LowerAngle = i509[0]
  i508.m_UpperAngle = i509[1]
  return i508
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i511 = data
  i510.m_MotorSpeed = i511[0]
  i510.m_MaximumMotorTorque = i511[1]
  return i510
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i513 = data
  i512.m_DampingRatio = i513[0]
  i512.m_Frequency = i513[1]
  i512.m_Angle = i513[2]
  return i512
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i514 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i515 = data
  i514.m_LowerTranslation = i515[0]
  i514.m_UpperTranslation = i515[1]
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i516 = root || new pc.UnityMaterial()
  var i517 = data
  i516.name = i517[0]
  request.r(i517[1], i517[2], 0, i516, 'shader')
  i516.renderQueue = i517[3]
  i516.enableInstancing = !!i517[4]
  var i519 = i517[5]
  var i518 = []
  for(var i = 0; i < i519.length; i += 1) {
    i518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i519[i + 0]) );
  }
  i516.floatParameters = i518
  var i521 = i517[6]
  var i520 = []
  for(var i = 0; i < i521.length; i += 1) {
    i520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i521[i + 0]) );
  }
  i516.colorParameters = i520
  var i523 = i517[7]
  var i522 = []
  for(var i = 0; i < i523.length; i += 1) {
    i522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i523[i + 0]) );
  }
  i516.vectorParameters = i522
  var i525 = i517[8]
  var i524 = []
  for(var i = 0; i < i525.length; i += 1) {
    i524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i525[i + 0]) );
  }
  i516.textureParameters = i524
  var i527 = i517[9]
  var i526 = []
  for(var i = 0; i < i527.length; i += 1) {
    i526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i527[i + 0]) );
  }
  i516.materialFlags = i526
  return i516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i531 = data
  i530.name = i531[0]
  i530.value = i531[1]
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i535 = data
  i534.name = i535[0]
  i534.value = new pc.Color(i535[1], i535[2], i535[3], i535[4])
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i539 = data
  i538.name = i539[0]
  i538.value = new pc.Vec4( i539[1], i539[2], i539[3], i539[4] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i543 = data
  i542.name = i543[0]
  request.r(i543[1], i543[2], 0, i542, 'value')
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i547 = data
  i546.name = i547[0]
  i546.enabled = !!i547[1]
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i549 = data
  i548.name = i549[0]
  i548.width = i549[1]
  i548.height = i549[2]
  i548.mipmapCount = i549[3]
  i548.anisoLevel = i549[4]
  i548.filterMode = i549[5]
  i548.hdr = !!i549[6]
  i548.format = i549[7]
  i548.wrapMode = i549[8]
  i548.alphaIsTransparency = !!i549[9]
  i548.alphaSource = i549[10]
  return i548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i551 = data
  i550.position = new pc.Vec3( i551[0], i551[1], i551[2] )
  i550.scale = new pc.Vec3( i551[3], i551[4], i551[5] )
  i550.rotation = new pc.Quat(i551[6], i551[7], i551[8], i551[9])
  return i550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i553 = data
  request.r(i553[0], i553[1], 0, i552, 'sharedMesh')
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'additionalVertexStreams')
  i554.enabled = !!i555[2]
  request.r(i555[3], i555[4], 0, i554, 'sharedMaterial')
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 2) {
  request.r(i557[i + 0], i557[i + 1], 2, i556, '')
  }
  i554.sharedMaterials = i556
  i554.receiveShadows = !!i555[6]
  i554.shadowCastingMode = i555[7]
  i554.sortingLayerID = i555[8]
  i554.sortingOrder = i555[9]
  i554.lightmapIndex = i555[10]
  i554.lightmapSceneIndex = i555[11]
  i554.lightmapScaleOffset = new pc.Vec4( i555[12], i555[13], i555[14], i555[15] )
  i554.lightProbeUsage = i555[16]
  i554.reflectionProbeUsage = i555[17]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i561 = data
  i560.name = i561[0]
  i560.tagId = i561[1]
  i560.enabled = !!i561[2]
  i560.isStatic = !!i561[3]
  i560.layer = i561[4]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i563 = data
  i562.name = i563[0]
  i562.halfPrecision = !!i563[1]
  i562.vertexCount = i563[2]
  i562.aabb = i563[3]
  var i565 = i563[4]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( !!i565[i + 0] );
  }
  i562.streams = i564
  i562.vertices = i563[5]
  var i567 = i563[6]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i567[i + 0]) );
  }
  i562.subMeshes = i566
  var i569 = i563[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 16) {
    i568.push( new pc.Mat4().setData(i569[i + 0], i569[i + 1], i569[i + 2], i569[i + 3],  i569[i + 4], i569[i + 5], i569[i + 6], i569[i + 7],  i569[i + 8], i569[i + 9], i569[i + 10], i569[i + 11],  i569[i + 12], i569[i + 13], i569[i + 14], i569[i + 15]) );
  }
  i562.bindposes = i568
  var i571 = i563[8]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i571[i + 0]) );
  }
  i562.blendShapes = i570
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i577 = data
  i576.triangles = i577[0]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i583 = data
  i582.name = i583[0]
  var i585 = i583[1]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i585[i + 0]) );
  }
  i582.frames = i584
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'animatorController')
  request.r(i587[2], i587[3], 0, i586, 'avatar')
  i586.updateMode = i587[4]
  i586.hasTransformHierarchy = !!i587[5]
  i586.applyRootMotion = !!i587[6]
  var i589 = i587[7]
  var i588 = []
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 2, i588, '')
  }
  i586.humanBones = i588
  i586.enabled = !!i587[8]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i593 = data
  i592.enabled = !!i593[0]
  request.r(i593[1], i593[2], 0, i592, 'sharedMaterial')
  var i595 = i593[3]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i592.sharedMaterials = i594
  i592.receiveShadows = !!i593[4]
  i592.shadowCastingMode = i593[5]
  i592.sortingLayerID = i593[6]
  i592.sortingOrder = i593[7]
  i592.lightmapIndex = i593[8]
  i592.lightmapSceneIndex = i593[9]
  i592.lightmapScaleOffset = new pc.Vec4( i593[10], i593[11], i593[12], i593[13] )
  i592.lightProbeUsage = i593[14]
  i592.reflectionProbeUsage = i593[15]
  request.r(i593[16], i593[17], 0, i592, 'sharedMesh')
  var i597 = i593[18]
  var i596 = []
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 2, i596, '')
  }
  i592.bones = i596
  i592.updateWhenOffscreen = !!i593[19]
  i592.localBounds = i593[20]
  request.r(i593[21], i593[22], 0, i592, 'rootBone')
  var i599 = i593[23]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i599[i + 0]) );
  }
  i592.blendShapesWeights = i598
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i603 = data
  i602.weight = i603[0]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i605 = data
  i604.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i605[0], i604.main)
  i604.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i605[1], i604.colorBySpeed)
  i604.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i605[2], i604.colorOverLifetime)
  i604.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i605[3], i604.emission)
  i604.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i605[4], i604.rotationBySpeed)
  i604.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i605[5], i604.rotationOverLifetime)
  i604.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i605[6], i604.shape)
  i604.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i605[7], i604.sizeBySpeed)
  i604.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i605[8], i604.sizeOverLifetime)
  i604.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i605[9], i604.textureSheetAnimation)
  i604.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i605[10], i604.velocityOverLifetime)
  i604.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i605[11], i604.noise)
  i604.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i605[12], i604.inheritVelocity)
  i604.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i605[13], i604.forceOverLifetime)
  i604.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i605[14], i604.limitVelocityOverLifetime)
  i604.useAutoRandomSeed = !!i605[15]
  i604.randomSeed = i605[16]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i606 = root || new pc.ParticleSystemMain()
  var i607 = data
  i606.duration = i607[0]
  i606.loop = !!i607[1]
  i606.prewarm = !!i607[2]
  i606.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[3], i606.startDelay)
  i606.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[4], i606.startLifetime)
  i606.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[5], i606.startSpeed)
  i606.startSize3D = !!i607[6]
  i606.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[7], i606.startSizeX)
  i606.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[8], i606.startSizeY)
  i606.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[9], i606.startSizeZ)
  i606.startRotation3D = !!i607[10]
  i606.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[11], i606.startRotationX)
  i606.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[12], i606.startRotationY)
  i606.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[13], i606.startRotationZ)
  i606.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i607[14], i606.startColor)
  i606.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i607[15], i606.gravityModifier)
  i606.simulationSpace = i607[16]
  request.r(i607[17], i607[18], 0, i606, 'customSimulationSpace')
  i606.simulationSpeed = i607[19]
  i606.useUnscaledTime = !!i607[20]
  i606.scalingMode = i607[21]
  i606.playOnAwake = !!i607[22]
  i606.maxParticles = i607[23]
  i606.emitterVelocityMode = i607[24]
  i606.stopAction = i607[25]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i608 = root || new pc.MinMaxCurve()
  var i609 = data
  i608.mode = i609[0]
  i608.curveMin = new pc.AnimationCurve( { keys_flow: i609[1] } )
  i608.curveMax = new pc.AnimationCurve( { keys_flow: i609[2] } )
  i608.curveMultiplier = i609[3]
  i608.constantMin = i609[4]
  i608.constantMax = i609[5]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i610 = root || new pc.MinMaxGradient()
  var i611 = data
  i610.mode = i611[0]
  i610.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i611[1], i610.gradientMin)
  i610.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i611[2], i610.gradientMax)
  i610.colorMin = new pc.Color(i611[3], i611[4], i611[5], i611[6])
  i610.colorMax = new pc.Color(i611[7], i611[8], i611[9], i611[10])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i613 = data
  i612.mode = i613[0]
  var i615 = i613[1]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i615[i + 0]) );
  }
  i612.colorKeys = i614
  var i617 = i613[2]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i617[i + 0]) );
  }
  i612.alphaKeys = i616
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i618 = root || new pc.ParticleSystemColorBySpeed()
  var i619 = data
  i618.enabled = !!i619[0]
  i618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i619[1], i618.color)
  i618.range = new pc.Vec2( i619[2], i619[3] )
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i623 = data
  i622.color = new pc.Color(i623[0], i623[1], i623[2], i623[3])
  i622.time = i623[4]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i627 = data
  i626.alpha = i627[0]
  i626.time = i627[1]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemColorOverLifetime()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i629[1], i628.color)
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemEmitter()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.rateOverTime)
  i630.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.rateOverDistance)
  var i633 = i631[3]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i633[i + 0]) );
  }
  i630.bursts = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemBurst()
  var i637 = data
  i636.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[0], i636.count)
  i636.cycleCount = i637[1]
  i636.minCount = i637[2]
  i636.maxCount = i637[3]
  i636.repeatInterval = i637[4]
  i636.time = i637[5]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemRotationBySpeed()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.separateAxes = !!i639[4]
  i638.range = new pc.Vec2( i639[5], i639[6] )
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemRotationOverLifetime()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[1], i640.x)
  i640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.y)
  i640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.z)
  i640.separateAxes = !!i641[4]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemShape()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.shapeType = i643[1]
  i642.randomDirectionAmount = i643[2]
  i642.sphericalDirectionAmount = i643[3]
  i642.randomPositionAmount = i643[4]
  i642.alignToDirection = !!i643[5]
  i642.radius = i643[6]
  i642.radiusMode = i643[7]
  i642.radiusSpread = i643[8]
  i642.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[9], i642.radiusSpeed)
  i642.radiusThickness = i643[10]
  i642.angle = i643[11]
  i642.length = i643[12]
  i642.boxThickness = new pc.Vec3( i643[13], i643[14], i643[15] )
  i642.meshShapeType = i643[16]
  request.r(i643[17], i643[18], 0, i642, 'mesh')
  request.r(i643[19], i643[20], 0, i642, 'meshRenderer')
  request.r(i643[21], i643[22], 0, i642, 'skinnedMeshRenderer')
  i642.useMeshMaterialIndex = !!i643[23]
  i642.meshMaterialIndex = i643[24]
  i642.useMeshColors = !!i643[25]
  i642.normalOffset = i643[26]
  i642.arc = i643[27]
  i642.arcMode = i643[28]
  i642.arcSpread = i643[29]
  i642.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[30], i642.arcSpeed)
  i642.donutRadius = i643[31]
  i642.position = new pc.Vec3( i643[32], i643[33], i643[34] )
  i642.rotation = new pc.Vec3( i643[35], i643[36], i643[37] )
  i642.scale = new pc.Vec3( i643[38], i643[39], i643[40] )
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemSizeBySpeed()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.separateAxes = !!i645[4]
  i644.range = new pc.Vec2( i645[5], i645[6] )
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemSizeOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.x)
  i646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.y)
  i646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.z)
  i646.separateAxes = !!i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.mode = i649[1]
  i648.animation = i649[2]
  i648.numTilesX = i649[3]
  i648.numTilesY = i649[4]
  i648.useRandomRow = !!i649[5]
  i648.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[6], i648.frameOverTime)
  i648.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i649[7], i648.startFrame)
  i648.cycleCount = i649[8]
  i648.rowIndex = i649[9]
  i648.flipU = i649[10]
  i648.flipV = i649[11]
  i648.spriteCount = i649[12]
  var i651 = i649[13]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.sprites = i650
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i654 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i655 = data
  i654.enabled = !!i655[0]
  i654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[1], i654.x)
  i654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[2], i654.y)
  i654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[3], i654.z)
  i654.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[4], i654.radial)
  i654.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[5], i654.speedModifier)
  i654.space = i655[6]
  i654.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[7], i654.orbitalX)
  i654.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[8], i654.orbitalY)
  i654.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[9], i654.orbitalZ)
  i654.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[10], i654.orbitalOffsetX)
  i654.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[11], i654.orbitalOffsetY)
  i654.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i655[12], i654.orbitalOffsetZ)
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i656 = root || new pc.ParticleSystemNoise()
  var i657 = data
  i656.enabled = !!i657[0]
  i656.separateAxes = !!i657[1]
  i656.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[2], i656.strengthX)
  i656.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[3], i656.strengthY)
  i656.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[4], i656.strengthZ)
  i656.frequency = i657[5]
  i656.damping = !!i657[6]
  i656.octaveCount = i657[7]
  i656.octaveMultiplier = i657[8]
  i656.octaveScale = i657[9]
  i656.quality = i657[10]
  i656.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[11], i656.scrollSpeed)
  i656.scrollSpeedMultiplier = i657[12]
  i656.remapEnabled = !!i657[13]
  i656.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[14], i656.remapX)
  i656.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[15], i656.remapY)
  i656.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[16], i656.remapZ)
  i656.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[17], i656.positionAmount)
  i656.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[18], i656.rotationAmount)
  i656.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i657[19], i656.sizeAmount)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemInheritVelocity()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.mode = i659[1]
  i658.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[2], i658.curve)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemForceOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.space = i661[4]
  i660.randomized = !!i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.limit)
  i662.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.limitX)
  i662.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.limitY)
  i662.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[4], i662.limitZ)
  i662.dampen = i663[5]
  i662.separateAxes = !!i663[6]
  i662.space = i663[7]
  i662.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[8], i662.drag)
  i662.multiplyDragByParticleSize = !!i663[9]
  i662.multiplyDragByParticleVelocity = !!i663[10]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i665 = data
  i664.enabled = !!i665[0]
  request.r(i665[1], i665[2], 0, i664, 'sharedMaterial')
  var i667 = i665[3]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[4]
  i664.shadowCastingMode = i665[5]
  i664.sortingLayerID = i665[6]
  i664.sortingOrder = i665[7]
  i664.lightmapIndex = i665[8]
  i664.lightmapSceneIndex = i665[9]
  i664.lightmapScaleOffset = new pc.Vec4( i665[10], i665[11], i665[12], i665[13] )
  i664.lightProbeUsage = i665[14]
  i664.reflectionProbeUsage = i665[15]
  request.r(i665[16], i665[17], 0, i664, 'mesh')
  i664.meshCount = i665[18]
  i664.activeVertexStreamsCount = i665[19]
  i664.alignment = i665[20]
  i664.renderMode = i665[21]
  i664.sortMode = i665[22]
  i664.lengthScale = i665[23]
  i664.velocityScale = i665[24]
  i664.cameraVelocityScale = i665[25]
  i664.normalDirection = i665[26]
  i664.sortingFudge = i665[27]
  i664.minParticleSize = i665[28]
  i664.maxParticleSize = i665[29]
  i664.pivot = new pc.Vec3( i665[30], i665[31], i665[32] )
  request.r(i665[33], i665[34], 0, i664, 'trailMaterial')
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i669 = data
  request.r(i669[0], i669[1], 0, i668, 'clip')
  request.r(i669[2], i669[3], 0, i668, 'outputAudioMixerGroup')
  i668.playOnAwake = !!i669[4]
  i668.loop = !!i669[5]
  i668.time = i669[6]
  i668.volume = i669[7]
  i668.pitch = i669[8]
  i668.enabled = !!i669[9]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i671 = data
  i670.enabled = !!i671[0]
  i670.isTrigger = !!i671[1]
  request.r(i671[2], i671[3], 0, i670, 'material')
  request.r(i671[4], i671[5], 0, i670, 'sharedMesh')
  i670.convex = !!i671[6]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i673 = data
  i672.enabled = !!i673[0]
  i672.aspect = i673[1]
  i672.orthographic = !!i673[2]
  i672.orthographicSize = i673[3]
  i672.backgroundColor = new pc.Color(i673[4], i673[5], i673[6], i673[7])
  i672.nearClipPlane = i673[8]
  i672.farClipPlane = i673[9]
  i672.fieldOfView = i673[10]
  i672.depth = i673[11]
  i672.clearFlags = i673[12]
  i672.cullingMask = i673[13]
  i672.rect = i673[14]
  request.r(i673[15], i673[16], 0, i672, 'targetTexture')
  i672.usePhysicalProperties = !!i673[17]
  i672.focalLength = i673[18]
  i672.sensorSize = new pc.Vec2( i673[19], i673[20] )
  i672.lensShift = new pc.Vec2( i673[21], i673[22] )
  i672.gateFit = i673[23]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i675 = data
  i674.center = new pc.Vec3( i675[0], i675[1], i675[2] )
  i674.size = new pc.Vec3( i675[3], i675[4], i675[5] )
  i674.enabled = !!i675[6]
  i674.isTrigger = !!i675[7]
  request.r(i675[8], i675[9], 0, i674, 'material')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i677 = data
  i676.pivot = new pc.Vec2( i677[0], i677[1] )
  i676.anchorMin = new pc.Vec2( i677[2], i677[3] )
  i676.anchorMax = new pc.Vec2( i677[4], i677[5] )
  i676.sizeDelta = new pc.Vec2( i677[6], i677[7] )
  i676.anchoredPosition3D = new pc.Vec3( i677[8], i677[9], i677[10] )
  i676.rotation = new pc.Quat(i677[11], i677[12], i677[13], i677[14])
  i676.scale = new pc.Vec3( i677[15], i677[16], i677[17] )
  return i676
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i678 = root || request.c( 'UICrosshairItem' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'CrosshairRectTransform')
  i678._distanceMax = i679[2]
  i678._distanceMin = i679[3]
  i678._speedShrink = i679[4]
  i678._currentSpeed = i679[5]
  i678._rateOnMove = i679[6]
  i678._rateOnAttack = i679[7]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i681 = data
  i680.cullTransparentMesh = !!i681[0]
  return i680
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i682 = root || request.c( 'UnityEngine.UI.Image' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'm_Sprite')
  i682.m_Type = i683[2]
  i682.m_PreserveAspect = !!i683[3]
  i682.m_FillCenter = !!i683[4]
  i682.m_FillMethod = i683[5]
  i682.m_FillAmount = i683[6]
  i682.m_FillClockwise = !!i683[7]
  i682.m_FillOrigin = i683[8]
  i682.m_UseSpriteMesh = !!i683[9]
  i682.m_PixelsPerUnitMultiplier = i683[10]
  request.r(i683[11], i683[12], 0, i682, 'm_Material')
  i682.m_Maskable = !!i683[13]
  i682.m_Color = new pc.Color(i683[14], i683[15], i683[16], i683[17])
  i682.m_RaycastTarget = !!i683[18]
  i682.m_RaycastPadding = new pc.Vec4( i683[19], i683[20], i683[21], i683[22] )
  return i682
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i684 = root || request.c( 'BulletTrail' )
  var i685 = data
  i684.Speed = i685[0]
  i684.LifeTime = i685[1]
  request.r(i685[2], i685[3], 0, i684, '_trail')
  i684._trailStartScale = new pc.Vec3( i685[4], i685[5], i685[6] )
  i684._trailMaxScale = new pc.Vec3( i685[7], i685[8], i685[9] )
  i684._trailLengthAtMaxScale = i685[10]
  return i684
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i686 = root || request.c( 'PlayerView' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, '_mainRoot')
  request.r(i687[2], i687[3], 0, i686, '_head')
  i686._sensitivity = i687[4]
  i686._slerpFactor = i687[5]
  i686._viewHorizontalThreshold = new pc.Vec2( i687[6], i687[7] )
  i686._viewVerticalThreshold = new pc.Vec2( i687[8], i687[9] )
  i686._initRotate = new pc.Vec2( i687[10], i687[11] )
  i686._totalRotate = new pc.Vec2( i687[12], i687[13] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i689 = data
  i688.playAutomatically = !!i689[0]
  request.r(i689[1], i689[2], 0, i688, 'clip')
  var i691 = i689[3]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.clips = i690
  i688.wrapMode = i689[4]
  i688.enabled = !!i689[5]
  return i688
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i694 = root || request.c( 'WeaponController' )
  var i695 = data
  i694.Mask = UnityEngine.LayerMask.FromIntegerValue( i695[0] )
  i694.damage = i695[1]
  request.r(i695[2], i695[3], 0, i694, '_muzzleTrans')
  request.r(i695[4], i695[5], 0, i694, '_animation')
  request.r(i695[6], i695[7], 0, i694, 'bullet')
  request.r(i695[8], i695[9], 0, i694, '_muzzleFlash')
  request.r(i695[10], i695[11], 0, i694, 'audioClip')
  request.r(i695[12], i695[13], 0, i694, 'audioSource')
  i694.SphereRadius = i695[14]
  request.r(i695[15], i695[16], 0, i694, 'Effect')
  return i694
}

Deserializers["Effect"] = function (request, data, root) {
  var i696 = root || request.c( 'Effect' )
  var i697 = data
  var i699 = i697[0]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.particles = i698
  i696._lifeTime = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i703 = data
  i702.name = i703[0]
  i702.atlasId = i703[1]
  i702.mipmapCount = i703[2]
  i702.hdr = !!i703[3]
  i702.size = i703[4]
  i702.anisoLevel = i703[5]
  i702.filterMode = i703[6]
  i702.wrapMode = i703[7]
  var i705 = i703[8]
  var i704 = []
  for(var i = 0; i < i705.length; i += 4) {
    i704.push( UnityEngine.Rect.MinMaxRect(i705[i + 0], i705[i + 1], i705[i + 2], i705[i + 3]) );
  }
  i702.rects = i704
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i709 = data
  i708.name = i709[0]
  i708.index = i709[1]
  i708.startup = !!i709[2]
  return i708
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_FirstSelected')
  i710.m_sendNavigationEvents = !!i711[2]
  i710.m_DragThreshold = i711[3]
  return i710
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i713 = data
  i712.m_HorizontalAxis = i713[0]
  i712.m_VerticalAxis = i713[1]
  i712.m_SubmitButton = i713[2]
  i712.m_CancelButton = i713[3]
  i712.m_InputActionsPerSecond = i713[4]
  i712.m_RepeatDelay = i713[5]
  i712.m_ForceModuleActive = !!i713[6]
  i712.m_SendPointerHoverToParent = !!i713[7]
  return i712
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i714 = root || request.c( 'ObjectPool' )
  var i715 = data
  return i714
}

Deserializers["PathManager"] = function (request, data, root) {
  var i716 = root || request.c( 'PathManager' )
  var i717 = data
  var i719 = i717[0]
  var i718 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i719.length; i += 1) {
    i718.add(request.d('Path', i719[i + 0]));
  }
  i716._paths = i718
  var i721 = i717[1]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Path', i721[i + 0]));
  }
  i716._pathsParachute = i720
  return i716
}

Deserializers["Path"] = function (request, data, root) {
  var i724 = root || request.c( 'Path' )
  var i725 = data
  i724.IsUse = !!i725[0]
  var i727 = i725[1]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 1, i726, '')
  }
  i724.WayPoints = i726
  return i724
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i730 = root || request.c( 'SpawnBot' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, '_botPrefab')
  i730._spawnInterval = i731[2]
  i730._upper = i731[3]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i733 = data
  i732.enabled = !!i733[0]
  i732.planeDistance = i733[1]
  i732.referencePixelsPerUnit = i733[2]
  i732.isFallbackOverlay = !!i733[3]
  i732.renderMode = i733[4]
  i732.renderOrder = i733[5]
  i732.sortingLayerName = i733[6]
  i732.sortingOrder = i733[7]
  i732.scaleFactor = i733[8]
  request.r(i733[9], i733[10], 0, i732, 'worldCamera')
  i732.overrideSorting = !!i733[11]
  i732.pixelPerfect = !!i733[12]
  i732.targetDisplay = i733[13]
  i732.overridePixelPerfect = !!i733[14]
  return i732
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i735 = data
  i734.m_UiScaleMode = i735[0]
  i734.m_ReferencePixelsPerUnit = i735[1]
  i734.m_ScaleFactor = i735[2]
  i734.m_ReferenceResolution = new pc.Vec2( i735[3], i735[4] )
  i734.m_ScreenMatchMode = i735[5]
  i734.m_MatchWidthOrHeight = i735[6]
  i734.m_PhysicalUnit = i735[7]
  i734.m_FallbackScreenDPI = i735[8]
  i734.m_DefaultSpriteDPI = i735[9]
  i734.m_DynamicPixelsPerUnit = i735[10]
  i734.m_PresetInfoIsWorld = !!i735[11]
  return i734
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i737 = data
  i736.m_IgnoreReversedGraphics = !!i737[0]
  i736.m_BlockingObjects = i737[1]
  i736.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i737[2] )
  return i736
}

Deserializers["BotController"] = function (request, data, root) {
  var i738 = root || request.c( 'BotController' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, '_animator')
  request.r(i739[2], i739[3], 0, i738, '_muzzle')
  request.r(i739[4], i739[5], 0, i738, 'bullet')
  request.r(i739[6], i739[7], 0, i738, 'target')
  i738.moveIndex = i739[8]
  i738.isMoveDone = !!i739[9]
  i738.isDie = !!i739[10]
  i738.isTakeDame = !!i739[11]
  i738.maxHealth = i739[12]
  request.r(i739[13], i739[14], 0, i738, 'healthBarRenderer')
  return i738
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i740 = root || request.c( 'ParachuteController' )
  var i741 = data
  i740.gravity = i741[0]
  i740.dragForce = i741[1]
  i740.objectMass = i741[2]
  request.r(i741[3], i741[4], 0, i740, '_botController')
  i740.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i741[5] )
  request.r(i741[6], i741[7], 0, i740, 'ParachuteScale')
  i740.scaleAmount = i741[8]
  i740.velocity = new pc.Vec3( i741[9], i741[10], i741[11] )
  i740._distanceOpenParachute = i741[12]
  i740._distanceCloseParachute = i741[13]
  return i740
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i742 = root || request.c( 'BotParachute' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_animator')
  request.r(i743[2], i743[3], 0, i742, '_muzzle')
  request.r(i743[4], i743[5], 0, i742, 'bullet')
  request.r(i743[6], i743[7], 0, i742, 'target')
  i742.moveIndex = i743[8]
  i742.isMoveDone = !!i743[9]
  i742.isDie = !!i743[10]
  i742.isMove = !!i743[11]
  i742.parachuteDone = !!i743[12]
  i742.isTakeDame = !!i743[13]
  i742.maxHealth = i743[14]
  request.r(i743[15], i743[16], 0, i742, 'healthBarRenderer')
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i745 = data
  i744.enabled = !!i745[0]
  i744.type = i745[1]
  i744.color = new pc.Color(i745[2], i745[3], i745[4], i745[5])
  i744.cullingMask = i745[6]
  i744.intensity = i745[7]
  i744.range = i745[8]
  i744.spotAngle = i745[9]
  i744.shadows = i745[10]
  i744.shadowNormalBias = i745[11]
  i744.shadowBias = i745[12]
  i744.shadowStrength = i745[13]
  i744.shadowResolution = i745[14]
  i744.lightmapBakeType = i745[15]
  i744.renderMode = i745[16]
  request.r(i745[17], i745[18], 0, i744, 'cookie')
  i744.cookieSize = i745[19]
  return i744
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i746 = root || request.c( 'ConfigManager' )
  var i747 = data
  var i749 = i747[0]
  var i748 = []
  for(var i = 0; i < i749.length; i += 1) {
    i748.push( request.d('StepData', i749[i + 0]) );
  }
  i746._stepDatas = i748
  return i746
}

Deserializers["StepData"] = function (request, data, root) {
  var i752 = root || request.c( 'StepData' )
  var i753 = data
  i752.NumberBot = i753[0]
  i752.NumberParachute = i753[1]
  return i752
}

Deserializers["StepManager"] = function (request, data, root) {
  var i754 = root || request.c( 'StepManager' )
  var i755 = data
  i754.test = i755[0]
  request.r(i755[1], i755[2], 0, i754, '_spawnBotNormal')
  request.r(i755[3], i755[4], 0, i754, '_spawnBotParachute')
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i757 = data
  i756.ambientIntensity = i757[0]
  i756.reflectionIntensity = i757[1]
  i756.ambientMode = i757[2]
  i756.ambientLight = new pc.Color(i757[3], i757[4], i757[5], i757[6])
  i756.ambientSkyColor = new pc.Color(i757[7], i757[8], i757[9], i757[10])
  i756.ambientGroundColor = new pc.Color(i757[11], i757[12], i757[13], i757[14])
  i756.ambientEquatorColor = new pc.Color(i757[15], i757[16], i757[17], i757[18])
  i756.fogColor = new pc.Color(i757[19], i757[20], i757[21], i757[22])
  i756.fogEndDistance = i757[23]
  i756.fogStartDistance = i757[24]
  i756.fogDensity = i757[25]
  i756.fog = !!i757[26]
  request.r(i757[27], i757[28], 0, i756, 'skybox')
  i756.fogMode = i757[29]
  var i759 = i757[30]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i759[i + 0]) );
  }
  i756.lightmaps = i758
  i756.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i757[31], i756.lightProbes)
  i756.lightmapsMode = i757[32]
  i756.mixedBakeMode = i757[33]
  i756.environmentLightingMode = i757[34]
  i756.ambientProbe = new pc.SphericalHarmonicsL2(i757[35])
  i756.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i757[36])
  i756.useReferenceAmbientProbe = !!i757[37]
  request.r(i757[38], i757[39], 0, i756, 'customReflection')
  request.r(i757[40], i757[41], 0, i756, 'defaultReflection')
  i756.defaultReflectionMode = i757[42]
  i756.defaultReflectionResolution = i757[43]
  i756.sunLightObjectId = i757[44]
  i756.pixelLightCount = i757[45]
  i756.defaultReflectionHDR = !!i757[46]
  i756.hasLightDataAsset = !!i757[47]
  i756.hasManualGenerate = !!i757[48]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'lightmapColor')
  request.r(i763[2], i763[3], 0, i762, 'lightmapDirection')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i764 = root || new UnityEngine.LightProbes()
  var i765 = data
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i775[i + 0]));
  }
  i772.ShaderCompilationErrors = i774
  i772.name = i773[1]
  i772.guid = i773[2]
  var i777 = i773[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( i777[i + 0] );
  }
  i772.shaderDefinedKeywords = i776
  var i779 = i773[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i779[i + 0]) );
  }
  i772.passes = i778
  var i781 = i773[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i781[i + 0]) );
  }
  i772.usePasses = i780
  var i783 = i773[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i783[i + 0]) );
  }
  i772.defaultParameterValues = i782
  request.r(i773[7], i773[8], 0, i772, 'unityFallbackShader')
  i772.readDepth = !!i773[9]
  i772.isCreatedByShaderGraph = !!i773[10]
  i772.usedBatchUniforms = i773[11]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i787 = data
  i786.shaderName = i787[0]
  i786.errorMessage = i787[1]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i792 = root || new pc.UnityShaderPass()
  var i793 = data
  i792.id = i793[0]
  i792.subShaderIndex = i793[1]
  i792.name = i793[2]
  i792.passType = i793[3]
  i792.grabPassTextureName = i793[4]
  i792.usePass = !!i793[5]
  i792.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[6], i792.zTest)
  i792.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[7], i792.zWrite)
  i792.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[8], i792.culling)
  i792.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i793[9], i792.blending)
  i792.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i793[10], i792.alphaBlending)
  i792.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[11], i792.colorWriteMask)
  i792.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[12], i792.offsetUnits)
  i792.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[13], i792.offsetFactor)
  i792.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[14], i792.stencilRef)
  i792.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[15], i792.stencilReadMask)
  i792.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i793[16], i792.stencilWriteMask)
  i792.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[17], i792.stencilOp)
  i792.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[18], i792.stencilOpFront)
  i792.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i793[19], i792.stencilOpBack)
  var i795 = i793[20]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i795[i + 0]) );
  }
  i792.tags = i794
  var i797 = i793[21]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( i797[i + 0] );
  }
  i792.passDefinedKeywords = i796
  var i799 = i793[22]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i799[i + 0]) );
  }
  i792.passDefinedKeywordGroups = i798
  var i801 = i793[23]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i801[i + 0]) );
  }
  i792.variants = i800
  var i803 = i793[24]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i803[i + 0]) );
  }
  i792.excludedVariants = i802
  i792.hasDepthReader = !!i793[25]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i805 = data
  i804.val = i805[0]
  i804.name = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i807 = data
  i806.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[0], i806.src)
  i806.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[1], i806.dst)
  i806.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i807[2], i806.op)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i809 = data
  i808.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[0], i808.pass)
  i808.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[1], i808.fail)
  i808.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[2], i808.zFail)
  i808.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i809[3], i808.comp)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i813 = data
  i812.name = i813[0]
  i812.value = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( i819[i + 0] );
  }
  i816.keywords = i818
  i816.hasDiscard = !!i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i823 = data
  i822.passId = i823[0]
  i822.subShaderIndex = i823[1]
  var i825 = i823[2]
  var i824 = []
  for(var i = 0; i < i825.length; i += 1) {
    i824.push( i825[i + 0] );
  }
  i822.keywords = i824
  i822.vertexProgram = i823[3]
  i822.fragmentProgram = i823[4]
  i822.readDepth = !!i823[5]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'shader')
  i828.pass = i829[2]
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i833 = data
  i832.name = i833[0]
  i832.type = i833[1]
  i832.value = new pc.Vec4( i833[2], i833[3], i833[4], i833[5] )
  i832.textureValue = i833[6]
  return i832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i835 = data
  i834.name = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'texture')
  i834.aabb = i835[3]
  i834.vertices = i835[4]
  i834.triangles = i835[5]
  i834.textureRect = UnityEngine.Rect.MinMaxRect(i835[6], i835[7], i835[8], i835[9])
  i834.packedRect = UnityEngine.Rect.MinMaxRect(i835[10], i835[11], i835[12], i835[13])
  i834.border = new pc.Vec4( i835[14], i835[15], i835[16], i835[17] )
  i834.transparency = i835[18]
  i834.bounds = i835[19]
  i834.pixelsPerUnit = i835[20]
  i834.textureWidth = i835[21]
  i834.textureHeight = i835[22]
  i834.nativeSize = new pc.Vec2( i835[23], i835[24] )
  i834.pivot = new pc.Vec2( i835[25], i835[26] )
  i834.textureRectOffset = new pc.Vec2( i835[27], i835[28] )
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i837 = data
  i836.name = i837[0]
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i839 = data
  i838.name = i839[0]
  i838.wrapMode = i839[1]
  i838.isLooping = !!i839[2]
  i838.length = i839[3]
  var i841 = i839[4]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i841[i + 0]) );
  }
  i838.curves = i840
  var i843 = i839[5]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i843[i + 0]) );
  }
  i838.events = i842
  i838.halfPrecision = !!i839[6]
  i838.frameRate = i839[7]
  i838.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i839[8], i838.localBounds)
  i838.hasMuscleCurves = !!i839[9]
  var i845 = i839[10]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( i845[i + 0] );
  }
  i838.clipMuscleConstant = i844
  i838.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i839[11], i838.clipBindingConstant)
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i849 = data
  i848.path = i849[0]
  i848.componentType = i849[1]
  i848.property = i849[2]
  i848.keys = i849[3]
  var i851 = i849[4]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i851[i + 0]) );
  }
  i848.objectReferenceKeys = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i855 = data
  i854.time = i855[0]
  request.r(i855[1], i855[2], 0, i854, 'value')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i859 = data
  i858.functionName = i859[0]
  i858.floatParameter = i859[1]
  i858.intParameter = i859[2]
  i858.stringParameter = i859[3]
  request.r(i859[4], i859[5], 0, i858, 'objectReferenceParameter')
  i858.time = i859[6]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i861 = data
  i860.center = new pc.Vec3( i861[0], i861[1], i861[2] )
  i860.extends = new pc.Vec3( i861[3], i861[4], i861[5] )
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( i867[i + 0] );
  }
  i864.genericBindings = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 1) {
    i868.push( i869[i + 0] );
  }
  i864.pptrCurveMapping = i868
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i871 = data
  i870.name = i871[0]
  var i873 = i871[1]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i873[i + 0]) );
  }
  i870.states = i872
  var i875 = i871[2]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i875[i + 0]) );
  }
  i870.layers = i874
  var i877 = i871[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i877[i + 0]) );
  }
  i870.parameters = i876
  i870.animationClips = i871[4]
  i870.HasSubStateMachines = !!i871[5]
  i870.avatarUnsupported = i871[6]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i881 = data
  i880.cycleOffset = i881[0]
  i880.cycleOffsetParameter = i881[1]
  i880.cycleOffsetParameterActive = !!i881[2]
  i880.mirror = !!i881[3]
  i880.mirrorParameter = i881[4]
  i880.mirrorParameterActive = !!i881[5]
  i880.motionId = i881[6]
  i880.nameHash = i881[7]
  i880.fullPathHash = i881[8]
  i880.speed = i881[9]
  i880.speedParameter = i881[10]
  i880.speedParameterActive = !!i881[11]
  i880.tag = i881[12]
  i880.name = i881[13]
  i880.layer = i881[14]
  i880.writeDefaultValues = !!i881[15]
  var i883 = i881[16]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i883[i + 0]) );
  }
  i880.transitions = i882
  var i885 = i881[17]
  var i884 = []
  for(var i = 0; i < i885.length; i += 2) {
  request.r(i885[i + 0], i885[i + 1], 2, i884, '')
  }
  i880.behaviours = i884
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i889 = data
  i888.fullPath = i889[0]
  i888.canTransitionToSelf = !!i889[1]
  i888.duration = i889[2]
  i888.exitTime = i889[3]
  i888.hasExitTime = !!i889[4]
  i888.hasFixedDuration = !!i889[5]
  i888.interruptionSource = i889[6]
  i888.offset = i889[7]
  i888.orderedInterruption = !!i889[8]
  i888.destinationStateNameHash = i889[9]
  i888.destinationStateMachineId = i889[10]
  i888.isExit = !!i889[11]
  i888.mute = !!i889[12]
  i888.solo = !!i889[13]
  var i891 = i889[14]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i891[i + 0]) );
  }
  i888.conditions = i890
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i895 = data
  i894.mode = i895[0]
  i894.parameter = i895[1]
  i894.threshold = i895[2]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i901 = data
  i900.blendingMode = i901[0]
  i900.defaultWeight = i901[1]
  i900.name = i901[2]
  i900.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i901[3], i900.stateMachine)
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i903 = data
  i902.id = i903[0]
  i902.defaultStateNameHash = i903[1]
  var i905 = i903[2]
  var i904 = []
  for(var i = 0; i < i905.length; i += 1) {
    i904.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i905[i + 0]) );
  }
  i902.entryTransitions = i904
  var i907 = i903[3]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i907[i + 0]) );
  }
  i902.anyStateTransitions = i906
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i911 = data
  i910.destinationStateNameHash = i911[0]
  i910.destinationStateMachineId = i911[1]
  i910.isExit = !!i911[2]
  i910.mute = !!i911[3]
  i910.solo = !!i911[4]
  var i913 = i911[5]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i913[i + 0]) );
  }
  i910.conditions = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i917 = data
  i916.defaultBool = !!i917[0]
  i916.defaultFloat = i917[1]
  i916.defaultInt = i917[2]
  i916.name = i917[3]
  i916.nameHash = i917[4]
  i916.type = i917[5]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i919 = data
  var i921 = i919[0]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i921[i + 0]) );
  }
  i918.files = i920
  i918.componentToPrefabIds = i919[1]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i925 = data
  i924.path = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'unityObject')
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i929[i + 0]) );
  }
  i926.scriptsExecutionOrder = i928
  var i931 = i927[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i931[i + 0]) );
  }
  i926.sortingLayers = i930
  var i933 = i927[2]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i933[i + 0]) );
  }
  i926.cullingLayers = i932
  i926.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i927[3], i926.timeSettings)
  i926.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i927[4], i926.physicsSettings)
  i926.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i927[5], i926.physics2DSettings)
  i926.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i927[6], i926.qualitySettings)
  i926.enableRealtimeShadows = !!i927[7]
  i926.enableAutoInstancing = !!i927[8]
  i926.enableDynamicBatching = !!i927[9]
  i926.lightmapEncodingQuality = i927[10]
  i926.desiredColorSpace = i927[11]
  var i935 = i927[12]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( i935[i + 0] );
  }
  i926.allTags = i934
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i939 = data
  i938.name = i939[0]
  i938.value = i939[1]
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i943 = data
  i942.id = i943[0]
  i942.name = i943[1]
  i942.value = i943[2]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i947 = data
  i946.id = i947[0]
  i946.name = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i949 = data
  i948.fixedDeltaTime = i949[0]
  i948.maximumDeltaTime = i949[1]
  i948.timeScale = i949[2]
  i948.maximumParticleTimestep = i949[3]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i951 = data
  i950.gravity = new pc.Vec3( i951[0], i951[1], i951[2] )
  i950.defaultSolverIterations = i951[3]
  i950.bounceThreshold = i951[4]
  i950.autoSyncTransforms = !!i951[5]
  i950.autoSimulation = !!i951[6]
  var i953 = i951[7]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i953[i + 0]) );
  }
  i950.collisionMatrix = i952
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i957 = data
  i956.enabled = !!i957[0]
  i956.layerId = i957[1]
  i956.otherLayerId = i957[2]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i959 = data
  request.r(i959[0], i959[1], 0, i958, 'material')
  i958.gravity = new pc.Vec2( i959[2], i959[3] )
  i958.positionIterations = i959[4]
  i958.velocityIterations = i959[5]
  i958.velocityThreshold = i959[6]
  i958.maxLinearCorrection = i959[7]
  i958.maxAngularCorrection = i959[8]
  i958.maxTranslationSpeed = i959[9]
  i958.maxRotationSpeed = i959[10]
  i958.baumgarteScale = i959[11]
  i958.baumgarteTOIScale = i959[12]
  i958.timeToSleep = i959[13]
  i958.linearSleepTolerance = i959[14]
  i958.angularSleepTolerance = i959[15]
  i958.defaultContactOffset = i959[16]
  i958.autoSimulation = !!i959[17]
  i958.queriesHitTriggers = !!i959[18]
  i958.queriesStartInColliders = !!i959[19]
  i958.callbacksOnDisable = !!i959[20]
  i958.reuseCollisionCallbacks = !!i959[21]
  i958.autoSyncTransforms = !!i959[22]
  var i961 = i959[23]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i961[i + 0]) );
  }
  i958.collisionMatrix = i960
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i965 = data
  i964.enabled = !!i965[0]
  i964.layerId = i965[1]
  i964.otherLayerId = i965[2]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i967 = data
  var i969 = i967[0]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i969[i + 0]) );
  }
  i966.qualityLevels = i968
  var i971 = i967[1]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.names = i970
  i966.shadows = i967[2]
  i966.anisotropicFiltering = i967[3]
  i966.antiAliasing = i967[4]
  i966.lodBias = i967[5]
  i966.shadowCascades = i967[6]
  i966.shadowDistance = i967[7]
  i966.shadowmaskMode = i967[8]
  i966.shadowProjection = i967[9]
  i966.shadowResolution = i967[10]
  i966.softParticles = !!i967[11]
  i966.softVegetation = !!i967[12]
  i966.activeColorSpace = i967[13]
  i966.desiredColorSpace = i967[14]
  i966.masterTextureLimit = i967[15]
  i966.maxQueuedFrames = i967[16]
  i966.particleRaycastBudget = i967[17]
  i966.pixelLightCount = i967[18]
  i966.realtimeReflectionProbes = !!i967[19]
  i966.shadowCascade2Split = i967[20]
  i966.shadowCascade4Split = new pc.Vec3( i967[21], i967[22], i967[23] )
  i966.streamingMipmapsActive = !!i967[24]
  i966.vSyncCount = i967[25]
  i966.asyncUploadBufferSize = i967[26]
  i966.asyncUploadTimeSlice = i967[27]
  i966.billboardsFaceCameraPosition = !!i967[28]
  i966.shadowNearPlaneOffset = i967[29]
  i966.streamingMipmapsMemoryBudget = i967[30]
  i966.maximumLODLevel = i967[31]
  i966.streamingMipmapsAddAllCameras = !!i967[32]
  i966.streamingMipmapsMaxLevelReduction = i967[33]
  i966.streamingMipmapsRenderersPerFrame = i967[34]
  i966.resolutionScalingFixedDPIFactor = i967[35]
  i966.streamingMipmapsMaxFileIORequests = i967[36]
  i966.currentQualityLevel = i967[37]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i975 = data
  i974.name = i975[0]
  var i977 = i975[1]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i977[i + 0]) );
  }
  i974.tos = i976
  var i979 = i975[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i974.constant = i978
  i974.isValid = !!i975[3]
  i974.isHuman = !!i975[4]
  i974.hasRootMotion = !!i975[5]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i983 = data
  i982.hash = i983[0]
  i982.path = i983[1]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i987 = data
  i986.weight = i987[0]
  i986.vertices = i987[1]
  i986.normals = i987[2]
  i986.tangents = i987[3]
  return i986
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"49":[50],"51":[50],"52":[50],"53":[50],"54":[50],"55":[50],"56":[10],"57":[15],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[15],"81":[5],"82":[83],"84":[83],"38":[18],"85":[18],"86":[5,18],"87":[18,21],"88":[18],"89":[21,18],"90":[5],"91":[21,18],"92":[18],"93":[94],"95":[18],"96":[18],"40":[38],"23":[21,18],"97":[18],"39":[38],"98":[18],"99":[18],"100":[18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[18],"106":[18],"107":[21,18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[21,18],"113":[18],"114":[33],"115":[33],"34":[33],"116":[33],"117":[15],"118":[15],"119":[94],"120":[94]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","PathManager","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","ParachuteController","BotParachute","UnityEngine.Light","ConfigManager","StepManager","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "6.6";

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

Deserializers.buildID = "14635b26-f7aa-473c-bfd2-10d029681bb2";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

