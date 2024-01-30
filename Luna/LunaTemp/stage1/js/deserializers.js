var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointSpring' )
  var i475 = data
  i474.spring = i475[0]
  i474.damper = i475[1]
  i474.targetPosition = i475[2]
  return i474
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointMotor' )
  var i477 = data
  i476.m_TargetVelocity = i477[0]
  i476.m_Force = i477[1]
  i476.m_FreeSpin = i477[2]
  return i476
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointLimits' )
  var i479 = data
  i478.m_Min = i479[0]
  i478.m_Max = i479[1]
  i478.m_Bounciness = i479[2]
  i478.m_BounceMinVelocity = i479[3]
  i478.m_ContactDistance = i479[4]
  i478.minBounce = i479[5]
  i478.maxBounce = i479[6]
  return i478
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i480 = root || request.c( 'UnityEngine.JointDrive' )
  var i481 = data
  i480.m_PositionSpring = i481[0]
  i480.m_PositionDamper = i481[1]
  i480.m_MaximumForce = i481[2]
  return i480
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i482 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i483 = data
  i482.m_Spring = i483[0]
  i482.m_Damper = i483[1]
  return i482
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i485 = data
  i484.m_Limit = i485[0]
  i484.m_Bounciness = i485[1]
  i484.m_ContactDistance = i485[2]
  return i484
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i487 = data
  i486.m_ExtremumSlip = i487[0]
  i486.m_ExtremumValue = i487[1]
  i486.m_AsymptoteSlip = i487[2]
  i486.m_AsymptoteValue = i487[3]
  i486.m_Stiffness = i487[4]
  return i486
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i489 = data
  i488.m_LowerAngle = i489[0]
  i488.m_UpperAngle = i489[1]
  return i488
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i491 = data
  i490.m_MotorSpeed = i491[0]
  i490.m_MaximumMotorTorque = i491[1]
  return i490
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i493 = data
  i492.m_DampingRatio = i493[0]
  i492.m_Frequency = i493[1]
  i492.m_Angle = i493[2]
  return i492
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i495 = data
  i494.m_LowerTranslation = i495[0]
  i494.m_UpperTranslation = i495[1]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i496 = root || new pc.UnityMaterial()
  var i497 = data
  i496.name = i497[0]
  request.r(i497[1], i497[2], 0, i496, 'shader')
  i496.renderQueue = i497[3]
  i496.enableInstancing = !!i497[4]
  var i499 = i497[5]
  var i498 = []
  for(var i = 0; i < i499.length; i += 1) {
    i498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i499[i + 0]) );
  }
  i496.floatParameters = i498
  var i501 = i497[6]
  var i500 = []
  for(var i = 0; i < i501.length; i += 1) {
    i500.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i501[i + 0]) );
  }
  i496.colorParameters = i500
  var i503 = i497[7]
  var i502 = []
  for(var i = 0; i < i503.length; i += 1) {
    i502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i503[i + 0]) );
  }
  i496.vectorParameters = i502
  var i505 = i497[8]
  var i504 = []
  for(var i = 0; i < i505.length; i += 1) {
    i504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i505[i + 0]) );
  }
  i496.textureParameters = i504
  var i507 = i497[9]
  var i506 = []
  for(var i = 0; i < i507.length; i += 1) {
    i506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i507[i + 0]) );
  }
  i496.materialFlags = i506
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i511 = data
  i510.name = i511[0]
  i510.value = i511[1]
  return i510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i515 = data
  i514.name = i515[0]
  i514.value = new pc.Color(i515[1], i515[2], i515[3], i515[4])
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i519 = data
  i518.name = i519[0]
  i518.value = new pc.Vec4( i519[1], i519[2], i519[3], i519[4] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i523 = data
  i522.name = i523[0]
  request.r(i523[1], i523[2], 0, i522, 'value')
  return i522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i527 = data
  i526.name = i527[0]
  i526.enabled = !!i527[1]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i529 = data
  i528.name = i529[0]
  i528.width = i529[1]
  i528.height = i529[2]
  i528.mipmapCount = i529[3]
  i528.anisoLevel = i529[4]
  i528.filterMode = i529[5]
  i528.hdr = !!i529[6]
  i528.format = i529[7]
  i528.wrapMode = i529[8]
  i528.alphaIsTransparency = !!i529[9]
  i528.alphaSource = i529[10]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i531 = data
  i530.position = new pc.Vec3( i531[0], i531[1], i531[2] )
  i530.scale = new pc.Vec3( i531[3], i531[4], i531[5] )
  i530.rotation = new pc.Quat(i531[6], i531[7], i531[8], i531[9])
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'sharedMesh')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i535 = data
  request.r(i535[0], i535[1], 0, i534, 'additionalVertexStreams')
  i534.enabled = !!i535[2]
  request.r(i535[3], i535[4], 0, i534, 'sharedMaterial')
  var i537 = i535[5]
  var i536 = []
  for(var i = 0; i < i537.length; i += 2) {
  request.r(i537[i + 0], i537[i + 1], 2, i536, '')
  }
  i534.sharedMaterials = i536
  i534.receiveShadows = !!i535[6]
  i534.shadowCastingMode = i535[7]
  i534.sortingLayerID = i535[8]
  i534.sortingOrder = i535[9]
  i534.lightmapIndex = i535[10]
  i534.lightmapSceneIndex = i535[11]
  i534.lightmapScaleOffset = new pc.Vec4( i535[12], i535[13], i535[14], i535[15] )
  i534.lightProbeUsage = i535[16]
  i534.reflectionProbeUsage = i535[17]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i541 = data
  i540.name = i541[0]
  i540.tagId = i541[1]
  i540.enabled = !!i541[2]
  i540.isStatic = !!i541[3]
  i540.layer = i541[4]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i543 = data
  i542.name = i543[0]
  i542.halfPrecision = !!i543[1]
  i542.vertexCount = i543[2]
  i542.aabb = i543[3]
  var i545 = i543[4]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( !!i545[i + 0] );
  }
  i542.streams = i544
  i542.vertices = i543[5]
  var i547 = i543[6]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i547[i + 0]) );
  }
  i542.subMeshes = i546
  var i549 = i543[7]
  var i548 = []
  for(var i = 0; i < i549.length; i += 16) {
    i548.push( new pc.Mat4().setData(i549[i + 0], i549[i + 1], i549[i + 2], i549[i + 3],  i549[i + 4], i549[i + 5], i549[i + 6], i549[i + 7],  i549[i + 8], i549[i + 9], i549[i + 10], i549[i + 11],  i549[i + 12], i549[i + 13], i549[i + 14], i549[i + 15]) );
  }
  i542.bindposes = i548
  var i551 = i543[8]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i551[i + 0]) );
  }
  i542.blendShapes = i550
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i557 = data
  i556.triangles = i557[0]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i563 = data
  i562.name = i563[0]
  var i565 = i563[1]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i565[i + 0]) );
  }
  i562.frames = i564
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i567 = data
  request.r(i567[0], i567[1], 0, i566, 'animatorController')
  request.r(i567[2], i567[3], 0, i566, 'avatar')
  i566.updateMode = i567[4]
  i566.hasTransformHierarchy = !!i567[5]
  i566.applyRootMotion = !!i567[6]
  var i569 = i567[7]
  var i568 = []
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 2, i568, '')
  }
  i566.humanBones = i568
  i566.enabled = !!i567[8]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i573 = data
  i572.enabled = !!i573[0]
  request.r(i573[1], i573[2], 0, i572, 'sharedMaterial')
  var i575 = i573[3]
  var i574 = []
  for(var i = 0; i < i575.length; i += 2) {
  request.r(i575[i + 0], i575[i + 1], 2, i574, '')
  }
  i572.sharedMaterials = i574
  i572.receiveShadows = !!i573[4]
  i572.shadowCastingMode = i573[5]
  i572.sortingLayerID = i573[6]
  i572.sortingOrder = i573[7]
  i572.lightmapIndex = i573[8]
  i572.lightmapSceneIndex = i573[9]
  i572.lightmapScaleOffset = new pc.Vec4( i573[10], i573[11], i573[12], i573[13] )
  i572.lightProbeUsage = i573[14]
  i572.reflectionProbeUsage = i573[15]
  request.r(i573[16], i573[17], 0, i572, 'sharedMesh')
  var i577 = i573[18]
  var i576 = []
  for(var i = 0; i < i577.length; i += 2) {
  request.r(i577[i + 0], i577[i + 1], 2, i576, '')
  }
  i572.bones = i576
  i572.updateWhenOffscreen = !!i573[19]
  i572.localBounds = i573[20]
  request.r(i573[21], i573[22], 0, i572, 'rootBone')
  var i579 = i573[23]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i579[i + 0]) );
  }
  i572.blendShapesWeights = i578
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i583 = data
  i582.weight = i583[0]
  return i582
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i584 = root || request.c( 'BulletTrail' )
  var i585 = data
  i584.Speed = i585[0]
  i584.LifeTime = i585[1]
  request.r(i585[2], i585[3], 0, i584, '_trail')
  i584._trailStartScale = new pc.Vec3( i585[4], i585[5], i585[6] )
  i584._trailMaxScale = new pc.Vec3( i585[7], i585[8], i585[9] )
  i584._trailLengthAtMaxScale = i585[10]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i587 = data
  i586.enabled = !!i587[0]
  i586.isTrigger = !!i587[1]
  request.r(i587[2], i587[3], 0, i586, 'material')
  request.r(i587[4], i587[5], 0, i586, 'sharedMesh')
  i586.convex = !!i587[6]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i589 = data
  i588.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i589[0], i588.main)
  i588.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i589[1], i588.colorBySpeed)
  i588.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i589[2], i588.colorOverLifetime)
  i588.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i589[3], i588.emission)
  i588.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i589[4], i588.rotationBySpeed)
  i588.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i589[5], i588.rotationOverLifetime)
  i588.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i589[6], i588.shape)
  i588.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i589[7], i588.sizeBySpeed)
  i588.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i589[8], i588.sizeOverLifetime)
  i588.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i589[9], i588.textureSheetAnimation)
  i588.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i589[10], i588.velocityOverLifetime)
  i588.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i589[11], i588.noise)
  i588.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i589[12], i588.inheritVelocity)
  i588.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i589[13], i588.forceOverLifetime)
  i588.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i589[14], i588.limitVelocityOverLifetime)
  i588.useAutoRandomSeed = !!i589[15]
  i588.randomSeed = i589[16]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemMain()
  var i591 = data
  i590.duration = i591[0]
  i590.loop = !!i591[1]
  i590.prewarm = !!i591[2]
  i590.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.startDelay)
  i590.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.startLifetime)
  i590.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[5], i590.startSpeed)
  i590.startSize3D = !!i591[6]
  i590.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[7], i590.startSizeX)
  i590.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[8], i590.startSizeY)
  i590.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.startSizeZ)
  i590.startRotation3D = !!i591[10]
  i590.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.startRotationX)
  i590.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[12], i590.startRotationY)
  i590.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[13], i590.startRotationZ)
  i590.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i591[14], i590.startColor)
  i590.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[15], i590.gravityModifier)
  i590.simulationSpace = i591[16]
  request.r(i591[17], i591[18], 0, i590, 'customSimulationSpace')
  i590.simulationSpeed = i591[19]
  i590.useUnscaledTime = !!i591[20]
  i590.scalingMode = i591[21]
  i590.playOnAwake = !!i591[22]
  i590.maxParticles = i591[23]
  i590.emitterVelocityMode = i591[24]
  i590.stopAction = i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i592 = root || new pc.MinMaxCurve()
  var i593 = data
  i592.mode = i593[0]
  i592.curveMin = new pc.AnimationCurve( { keys_flow: i593[1] } )
  i592.curveMax = new pc.AnimationCurve( { keys_flow: i593[2] } )
  i592.curveMultiplier = i593[3]
  i592.constantMin = i593[4]
  i592.constantMax = i593[5]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i594 = root || new pc.MinMaxGradient()
  var i595 = data
  i594.mode = i595[0]
  i594.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i595[1], i594.gradientMin)
  i594.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i595[2], i594.gradientMax)
  i594.colorMin = new pc.Color(i595[3], i595[4], i595[5], i595[6])
  i594.colorMax = new pc.Color(i595[7], i595[8], i595[9], i595[10])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i597 = data
  i596.mode = i597[0]
  var i599 = i597[1]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i599[i + 0]) );
  }
  i596.colorKeys = i598
  var i601 = i597[2]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i601[i + 0]) );
  }
  i596.alphaKeys = i600
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i602 = root || new pc.ParticleSystemColorBySpeed()
  var i603 = data
  i602.enabled = !!i603[0]
  i602.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i603[1], i602.color)
  i602.range = new pc.Vec2( i603[2], i603[3] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i607 = data
  i606.color = new pc.Color(i607[0], i607[1], i607[2], i607[3])
  i606.time = i607[4]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i611 = data
  i610.alpha = i611[0]
  i610.time = i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemColorOverLifetime()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i613[1], i612.color)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemEmitter()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.rateOverTime)
  i614.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.rateOverDistance)
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i617[i + 0]) );
  }
  i614.bursts = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemBurst()
  var i621 = data
  i620.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[0], i620.count)
  i620.cycleCount = i621[1]
  i620.minCount = i621[2]
  i620.maxCount = i621[3]
  i620.repeatInterval = i621[4]
  i620.time = i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemRotationBySpeed()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.separateAxes = !!i623[4]
  i622.range = new pc.Vec2( i623[5], i623[6] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemRotationOverLifetime()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.x)
  i624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.y)
  i624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.z)
  i624.separateAxes = !!i625[4]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemShape()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.shapeType = i627[1]
  i626.randomDirectionAmount = i627[2]
  i626.sphericalDirectionAmount = i627[3]
  i626.randomPositionAmount = i627[4]
  i626.alignToDirection = !!i627[5]
  i626.radius = i627[6]
  i626.radiusMode = i627[7]
  i626.radiusSpread = i627[8]
  i626.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[9], i626.radiusSpeed)
  i626.radiusThickness = i627[10]
  i626.angle = i627[11]
  i626.length = i627[12]
  i626.boxThickness = new pc.Vec3( i627[13], i627[14], i627[15] )
  i626.meshShapeType = i627[16]
  request.r(i627[17], i627[18], 0, i626, 'mesh')
  request.r(i627[19], i627[20], 0, i626, 'meshRenderer')
  request.r(i627[21], i627[22], 0, i626, 'skinnedMeshRenderer')
  i626.useMeshMaterialIndex = !!i627[23]
  i626.meshMaterialIndex = i627[24]
  i626.useMeshColors = !!i627[25]
  i626.normalOffset = i627[26]
  i626.arc = i627[27]
  i626.arcMode = i627[28]
  i626.arcSpread = i627[29]
  i626.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[30], i626.arcSpeed)
  i626.donutRadius = i627[31]
  i626.position = new pc.Vec3( i627[32], i627[33], i627[34] )
  i626.rotation = new pc.Vec3( i627[35], i627[36], i627[37] )
  i626.scale = new pc.Vec3( i627[38], i627[39], i627[40] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemSizeBySpeed()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  i628.range = new pc.Vec2( i629[5], i629[6] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemSizeOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.separateAxes = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.mode = i633[1]
  i632.animation = i633[2]
  i632.numTilesX = i633[3]
  i632.numTilesY = i633[4]
  i632.useRandomRow = !!i633[5]
  i632.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[6], i632.frameOverTime)
  i632.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[7], i632.startFrame)
  i632.cycleCount = i633[8]
  i632.rowIndex = i633[9]
  i632.flipU = i633[10]
  i632.flipV = i633[11]
  i632.spriteCount = i633[12]
  var i635 = i633[13]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sprites = i634
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.radial)
  i638.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[5], i638.speedModifier)
  i638.space = i639[6]
  i638.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.orbitalX)
  i638.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[8], i638.orbitalY)
  i638.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.orbitalZ)
  i638.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[10], i638.orbitalOffsetX)
  i638.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.orbitalOffsetY)
  i638.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[12], i638.orbitalOffsetZ)
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemNoise()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.separateAxes = !!i641[1]
  i640.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.strengthX)
  i640.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.strengthY)
  i640.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[4], i640.strengthZ)
  i640.frequency = i641[5]
  i640.damping = !!i641[6]
  i640.octaveCount = i641[7]
  i640.octaveMultiplier = i641[8]
  i640.octaveScale = i641[9]
  i640.quality = i641[10]
  i640.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[11], i640.scrollSpeed)
  i640.scrollSpeedMultiplier = i641[12]
  i640.remapEnabled = !!i641[13]
  i640.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[14], i640.remapX)
  i640.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[15], i640.remapY)
  i640.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[16], i640.remapZ)
  i640.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[17], i640.positionAmount)
  i640.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[18], i640.rotationAmount)
  i640.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[19], i640.sizeAmount)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemInheritVelocity()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.mode = i643[1]
  i642.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.curve)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemForceOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.space = i645[4]
  i644.randomized = !!i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.limit)
  i646.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.limitX)
  i646.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.limitY)
  i646.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[4], i646.limitZ)
  i646.dampen = i647[5]
  i646.separateAxes = !!i647[6]
  i646.space = i647[7]
  i646.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[8], i646.drag)
  i646.multiplyDragByParticleSize = !!i647[9]
  i646.multiplyDragByParticleVelocity = !!i647[10]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i649 = data
  i648.enabled = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'sharedMaterial')
  var i651 = i649[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.sharedMaterials = i650
  i648.receiveShadows = !!i649[4]
  i648.shadowCastingMode = i649[5]
  i648.sortingLayerID = i649[6]
  i648.sortingOrder = i649[7]
  i648.lightmapIndex = i649[8]
  i648.lightmapSceneIndex = i649[9]
  i648.lightmapScaleOffset = new pc.Vec4( i649[10], i649[11], i649[12], i649[13] )
  i648.lightProbeUsage = i649[14]
  i648.reflectionProbeUsage = i649[15]
  request.r(i649[16], i649[17], 0, i648, 'mesh')
  i648.meshCount = i649[18]
  i648.activeVertexStreamsCount = i649[19]
  i648.alignment = i649[20]
  i648.renderMode = i649[21]
  i648.sortMode = i649[22]
  i648.lengthScale = i649[23]
  i648.velocityScale = i649[24]
  i648.cameraVelocityScale = i649[25]
  i648.normalDirection = i649[26]
  i648.sortingFudge = i649[27]
  i648.minParticleSize = i649[28]
  i648.maxParticleSize = i649[29]
  i648.pivot = new pc.Vec3( i649[30], i649[31], i649[32] )
  request.r(i649[33], i649[34], 0, i648, 'trailMaterial')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i653 = data
  i652.enabled = !!i653[0]
  i652.aspect = i653[1]
  i652.orthographic = !!i653[2]
  i652.orthographicSize = i653[3]
  i652.backgroundColor = new pc.Color(i653[4], i653[5], i653[6], i653[7])
  i652.nearClipPlane = i653[8]
  i652.farClipPlane = i653[9]
  i652.fieldOfView = i653[10]
  i652.depth = i653[11]
  i652.clearFlags = i653[12]
  i652.cullingMask = i653[13]
  i652.rect = i653[14]
  request.r(i653[15], i653[16], 0, i652, 'targetTexture')
  i652.usePhysicalProperties = !!i653[17]
  i652.focalLength = i653[18]
  i652.sensorSize = new pc.Vec2( i653[19], i653[20] )
  i652.lensShift = new pc.Vec2( i653[21], i653[22] )
  i652.gateFit = i653[23]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i655 = data
  i654.name = i655[0]
  i654.atlasId = i655[1]
  i654.mipmapCount = i655[2]
  i654.hdr = !!i655[3]
  i654.size = i655[4]
  i654.anisoLevel = i655[5]
  i654.filterMode = i655[6]
  i654.wrapMode = i655[7]
  var i657 = i655[8]
  var i656 = []
  for(var i = 0; i < i657.length; i += 4) {
    i656.push( UnityEngine.Rect.MinMaxRect(i657[i + 0], i657[i + 1], i657[i + 2], i657[i + 3]) );
  }
  i654.rects = i656
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i661 = data
  i660.center = new pc.Vec3( i661[0], i661[1], i661[2] )
  i660.size = new pc.Vec3( i661[3], i661[4], i661[5] )
  i660.enabled = !!i661[6]
  i660.isTrigger = !!i661[7]
  request.r(i661[8], i661[9], 0, i660, 'material')
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'clip')
  request.r(i663[2], i663[3], 0, i662, 'outputAudioMixerGroup')
  i662.playOnAwake = !!i663[4]
  i662.loop = !!i663[5]
  i662.time = i663[6]
  i662.volume = i663[7]
  i662.pitch = i663[8]
  i662.enabled = !!i663[9]
  return i662
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i664 = root || request.c( 'PlayerView' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, '_mainRoot')
  request.r(i665[2], i665[3], 0, i664, '_head')
  i664._sensitivity = i665[4]
  i664._slerpFactor = i665[5]
  i664._viewHorizontalThreshold = new pc.Vec2( i665[6], i665[7] )
  i664._viewVerticalThreshold = new pc.Vec2( i665[8], i665[9] )
  i664._initRotate = new pc.Vec2( i665[10], i665[11] )
  i664._totalRotate = new pc.Vec2( i665[12], i665[13] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i667 = data
  i666.playAutomatically = !!i667[0]
  request.r(i667[1], i667[2], 0, i666, 'clip')
  var i669 = i667[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 2) {
  request.r(i669[i + 0], i669[i + 1], 2, i668, '')
  }
  i666.clips = i668
  i666.wrapMode = i667[4]
  i666.enabled = !!i667[5]
  return i666
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i672 = root || request.c( 'WeaponController' )
  var i673 = data
  i672.Mask = UnityEngine.LayerMask.FromIntegerValue( i673[0] )
  i672.damage = i673[1]
  request.r(i673[2], i673[3], 0, i672, '_muzzleTrans')
  request.r(i673[4], i673[5], 0, i672, '_animation')
  request.r(i673[6], i673[7], 0, i672, 'bullet')
  request.r(i673[8], i673[9], 0, i672, '_muzzleFlash')
  request.r(i673[10], i673[11], 0, i672, 'audioClip')
  request.r(i673[12], i673[13], 0, i672, 'audioSource')
  i672.SphereRadius = i673[14]
  return i672
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i674 = root || request.c( 'PathSigleton' )
  var i675 = data
  var i677 = i675[0]
  var i676 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 1, i676, '')
  }
  i674._paths = i676
  return i674
}

Deserializers["Path"] = function (request, data, root) {
  var i680 = root || request.c( 'Path' )
  var i681 = data
  var i683 = i681[0]
  var i682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 1, i682, '')
  }
  i680.points = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i687 = data
  i686.pivot = new pc.Vec2( i687[0], i687[1] )
  i686.anchorMin = new pc.Vec2( i687[2], i687[3] )
  i686.anchorMax = new pc.Vec2( i687[4], i687[5] )
  i686.sizeDelta = new pc.Vec2( i687[6], i687[7] )
  i686.anchoredPosition3D = new pc.Vec3( i687[8], i687[9], i687[10] )
  i686.rotation = new pc.Quat(i687[11], i687[12], i687[13], i687[14])
  i686.scale = new pc.Vec3( i687[15], i687[16], i687[17] )
  return i686
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i688 = root || request.c( 'UICrosshairItem' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'CrosshairRectTransform')
  i688._distanceMax = i689[2]
  i688._distanceMin = i689[3]
  i688._speedShrink = i689[4]
  i688._currentSpeed = i689[5]
  i688._rateOnMove = i689[6]
  i688._rateOnAttack = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i691 = data
  i690.cullTransparentMesh = !!i691[0]
  return i690
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.UI.Image' )
  var i693 = data
  request.r(i693[0], i693[1], 0, i692, 'm_Sprite')
  i692.m_Type = i693[2]
  i692.m_PreserveAspect = !!i693[3]
  i692.m_FillCenter = !!i693[4]
  i692.m_FillMethod = i693[5]
  i692.m_FillAmount = i693[6]
  i692.m_FillClockwise = !!i693[7]
  i692.m_FillOrigin = i693[8]
  i692.m_UseSpriteMesh = !!i693[9]
  i692.m_PixelsPerUnitMultiplier = i693[10]
  request.r(i693[11], i693[12], 0, i692, 'm_Material')
  i692.m_Maskable = !!i693[13]
  i692.m_Color = new pc.Color(i693[14], i693[15], i693[16], i693[17])
  i692.m_RaycastTarget = !!i693[18]
  i692.m_RaycastPadding = new pc.Vec4( i693[19], i693[20], i693[21], i693[22] )
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i695 = data
  i694.name = i695[0]
  i694.index = i695[1]
  i694.startup = !!i695[2]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i697 = data
  i696.enabled = !!i697[0]
  i696.type = i697[1]
  i696.color = new pc.Color(i697[2], i697[3], i697[4], i697[5])
  i696.cullingMask = i697[6]
  i696.intensity = i697[7]
  i696.range = i697[8]
  i696.spotAngle = i697[9]
  i696.shadows = i697[10]
  i696.shadowNormalBias = i697[11]
  i696.shadowBias = i697[12]
  i696.shadowStrength = i697[13]
  i696.shadowResolution = i697[14]
  i696.lightmapBakeType = i697[15]
  i696.renderMode = i697[16]
  request.r(i697[17], i697[18], 0, i696, 'cookie')
  i696.cookieSize = i697[19]
  return i696
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i698 = root || request.c( 'ObjectPool' )
  var i699 = data
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

Deserializers["SpawnBot"] = function (request, data, root) {
  var i704 = root || request.c( 'SpawnBot' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'botPrefab')
  i704.spawnInterval = i705[2]
  i704.UPPER = i705[3]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i707 = data
  i706.enabled = !!i707[0]
  i706.planeDistance = i707[1]
  i706.referencePixelsPerUnit = i707[2]
  i706.isFallbackOverlay = !!i707[3]
  i706.renderMode = i707[4]
  i706.renderOrder = i707[5]
  i706.sortingLayerName = i707[6]
  i706.sortingOrder = i707[7]
  i706.scaleFactor = i707[8]
  request.r(i707[9], i707[10], 0, i706, 'worldCamera')
  i706.overrideSorting = !!i707[11]
  i706.pixelPerfect = !!i707[12]
  i706.targetDisplay = i707[13]
  i706.overridePixelPerfect = !!i707[14]
  return i706
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i709 = data
  i708.m_UiScaleMode = i709[0]
  i708.m_ReferencePixelsPerUnit = i709[1]
  i708.m_ScaleFactor = i709[2]
  i708.m_ReferenceResolution = new pc.Vec2( i709[3], i709[4] )
  i708.m_ScreenMatchMode = i709[5]
  i708.m_MatchWidthOrHeight = i709[6]
  i708.m_PhysicalUnit = i709[7]
  i708.m_FallbackScreenDPI = i709[8]
  i708.m_DefaultSpriteDPI = i709[9]
  i708.m_DynamicPixelsPerUnit = i709[10]
  i708.m_PresetInfoIsWorld = !!i709[11]
  return i708
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i711 = data
  i710.m_IgnoreReversedGraphics = !!i711[0]
  i710.m_BlockingObjects = i711[1]
  i710.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i711[2] )
  return i710
}

Deserializers["test"] = function (request, data, root) {
  var i712 = root || request.c( 'test' )
  var i713 = data
  return i712
}

Deserializers["BotController"] = function (request, data, root) {
  var i714 = root || request.c( 'BotController' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, '_animator')
  request.r(i715[2], i715[3], 0, i714, '_muzzle')
  request.r(i715[4], i715[5], 0, i714, 'bullet')
  request.r(i715[6], i715[7], 0, i714, 'target')
  i714.currentState = i715[8]
  i714.moveIndex = i715[9]
  i714.isMoveDone = !!i715[10]
  i714.isDie = !!i715[11]
  i714.isTakeDame = !!i715[12]
  i714.maxHealth = i715[13]
  request.r(i715[14], i715[15], 0, i714, 'healthBarRenderer')
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i717 = data
  i716.ambientIntensity = i717[0]
  i716.reflectionIntensity = i717[1]
  i716.ambientMode = i717[2]
  i716.ambientLight = new pc.Color(i717[3], i717[4], i717[5], i717[6])
  i716.ambientSkyColor = new pc.Color(i717[7], i717[8], i717[9], i717[10])
  i716.ambientGroundColor = new pc.Color(i717[11], i717[12], i717[13], i717[14])
  i716.ambientEquatorColor = new pc.Color(i717[15], i717[16], i717[17], i717[18])
  i716.fogColor = new pc.Color(i717[19], i717[20], i717[21], i717[22])
  i716.fogEndDistance = i717[23]
  i716.fogStartDistance = i717[24]
  i716.fogDensity = i717[25]
  i716.fog = !!i717[26]
  request.r(i717[27], i717[28], 0, i716, 'skybox')
  i716.fogMode = i717[29]
  var i719 = i717[30]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i719[i + 0]) );
  }
  i716.lightmaps = i718
  i716.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i717[31], i716.lightProbes)
  i716.lightmapsMode = i717[32]
  i716.mixedBakeMode = i717[33]
  i716.environmentLightingMode = i717[34]
  i716.ambientProbe = new pc.SphericalHarmonicsL2(i717[35])
  i716.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i717[36])
  i716.useReferenceAmbientProbe = !!i717[37]
  request.r(i717[38], i717[39], 0, i716, 'customReflection')
  request.r(i717[40], i717[41], 0, i716, 'defaultReflection')
  i716.defaultReflectionMode = i717[42]
  i716.defaultReflectionResolution = i717[43]
  i716.sunLightObjectId = i717[44]
  i716.pixelLightCount = i717[45]
  i716.defaultReflectionHDR = !!i717[46]
  i716.hasLightDataAsset = !!i717[47]
  i716.hasManualGenerate = !!i717[48]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i723 = data
  request.r(i723[0], i723[1], 0, i722, 'lightmapColor')
  request.r(i723[2], i723[3], 0, i722, 'lightmapDirection')
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i724 = root || new UnityEngine.LightProbes()
  var i725 = data
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i733 = data
  var i735 = i733[0]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i735.length; i += 1) {
    i734.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i735[i + 0]));
  }
  i732.ShaderCompilationErrors = i734
  i732.name = i733[1]
  i732.guid = i733[2]
  var i737 = i733[3]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( i737[i + 0] );
  }
  i732.shaderDefinedKeywords = i736
  var i739 = i733[4]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i739[i + 0]) );
  }
  i732.passes = i738
  var i741 = i733[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i741[i + 0]) );
  }
  i732.usePasses = i740
  var i743 = i733[6]
  var i742 = []
  for(var i = 0; i < i743.length; i += 1) {
    i742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i743[i + 0]) );
  }
  i732.defaultParameterValues = i742
  request.r(i733[7], i733[8], 0, i732, 'unityFallbackShader')
  i732.readDepth = !!i733[9]
  i732.isCreatedByShaderGraph = !!i733[10]
  i732.usedBatchUniforms = i733[11]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i747 = data
  i746.shaderName = i747[0]
  i746.errorMessage = i747[1]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i752 = root || new pc.UnityShaderPass()
  var i753 = data
  i752.id = i753[0]
  i752.subShaderIndex = i753[1]
  i752.name = i753[2]
  i752.passType = i753[3]
  i752.grabPassTextureName = i753[4]
  i752.usePass = !!i753[5]
  i752.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[6], i752.zTest)
  i752.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[7], i752.zWrite)
  i752.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[8], i752.culling)
  i752.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[9], i752.blending)
  i752.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i753[10], i752.alphaBlending)
  i752.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[11], i752.colorWriteMask)
  i752.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[12], i752.offsetUnits)
  i752.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[13], i752.offsetFactor)
  i752.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[14], i752.stencilRef)
  i752.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[15], i752.stencilReadMask)
  i752.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i753[16], i752.stencilWriteMask)
  i752.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[17], i752.stencilOp)
  i752.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[18], i752.stencilOpFront)
  i752.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i753[19], i752.stencilOpBack)
  var i755 = i753[20]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i755[i + 0]) );
  }
  i752.tags = i754
  var i757 = i753[21]
  var i756 = []
  for(var i = 0; i < i757.length; i += 1) {
    i756.push( i757[i + 0] );
  }
  i752.passDefinedKeywords = i756
  var i759 = i753[22]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i759[i + 0]) );
  }
  i752.passDefinedKeywordGroups = i758
  var i761 = i753[23]
  var i760 = []
  for(var i = 0; i < i761.length; i += 1) {
    i760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i761[i + 0]) );
  }
  i752.variants = i760
  var i763 = i753[24]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i763[i + 0]) );
  }
  i752.excludedVariants = i762
  i752.hasDepthReader = !!i753[25]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i765 = data
  i764.val = i765[0]
  i764.name = i765[1]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i767 = data
  i766.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[0], i766.src)
  i766.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[1], i766.dst)
  i766.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i767[2], i766.op)
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i769 = data
  i768.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[0], i768.pass)
  i768.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[1], i768.fail)
  i768.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[2], i768.zFail)
  i768.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i769[3], i768.comp)
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i773 = data
  i772.name = i773[0]
  i772.value = i773[1]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i777 = data
  var i779 = i777[0]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( i779[i + 0] );
  }
  i776.keywords = i778
  i776.hasDiscard = !!i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i783 = data
  i782.passId = i783[0]
  i782.subShaderIndex = i783[1]
  var i785 = i783[2]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( i785[i + 0] );
  }
  i782.keywords = i784
  i782.vertexProgram = i783[3]
  i782.fragmentProgram = i783[4]
  i782.readDepth = !!i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'shader')
  i788.pass = i789[2]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i793 = data
  i792.name = i793[0]
  i792.type = i793[1]
  i792.value = new pc.Vec4( i793[2], i793[3], i793[4], i793[5] )
  i792.textureValue = i793[6]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i795 = data
  i794.name = i795[0]
  request.r(i795[1], i795[2], 0, i794, 'texture')
  i794.aabb = i795[3]
  i794.vertices = i795[4]
  i794.triangles = i795[5]
  i794.textureRect = UnityEngine.Rect.MinMaxRect(i795[6], i795[7], i795[8], i795[9])
  i794.packedRect = UnityEngine.Rect.MinMaxRect(i795[10], i795[11], i795[12], i795[13])
  i794.border = new pc.Vec4( i795[14], i795[15], i795[16], i795[17] )
  i794.transparency = i795[18]
  i794.bounds = i795[19]
  i794.pixelsPerUnit = i795[20]
  i794.textureWidth = i795[21]
  i794.textureHeight = i795[22]
  i794.nativeSize = new pc.Vec2( i795[23], i795[24] )
  i794.pivot = new pc.Vec2( i795[25], i795[26] )
  i794.textureRectOffset = new pc.Vec2( i795[27], i795[28] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i797 = data
  i796.name = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i799 = data
  i798.name = i799[0]
  i798.wrapMode = i799[1]
  i798.isLooping = !!i799[2]
  i798.length = i799[3]
  var i801 = i799[4]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i801[i + 0]) );
  }
  i798.curves = i800
  var i803 = i799[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i803[i + 0]) );
  }
  i798.events = i802
  i798.halfPrecision = !!i799[6]
  i798.frameRate = i799[7]
  i798.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i799[8], i798.localBounds)
  i798.hasMuscleCurves = !!i799[9]
  var i805 = i799[10]
  var i804 = []
  for(var i = 0; i < i805.length; i += 1) {
    i804.push( i805[i + 0] );
  }
  i798.clipMuscleConstant = i804
  i798.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i799[11], i798.clipBindingConstant)
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i809 = data
  i808.path = i809[0]
  i808.componentType = i809[1]
  i808.property = i809[2]
  i808.keys = i809[3]
  var i811 = i809[4]
  var i810 = []
  for(var i = 0; i < i811.length; i += 1) {
    i810.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i811[i + 0]) );
  }
  i808.objectReferenceKeys = i810
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i815 = data
  i814.time = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'value')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i819 = data
  i818.functionName = i819[0]
  i818.floatParameter = i819[1]
  i818.intParameter = i819[2]
  i818.stringParameter = i819[3]
  request.r(i819[4], i819[5], 0, i818, 'objectReferenceParameter')
  i818.time = i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i821 = data
  i820.center = new pc.Vec3( i821[0], i821[1], i821[2] )
  i820.extends = new pc.Vec3( i821[3], i821[4], i821[5] )
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( i827[i + 0] );
  }
  i824.genericBindings = i826
  var i829 = i825[1]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i824.pptrCurveMapping = i828
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i831 = data
  i830.name = i831[0]
  var i833 = i831[1]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i833[i + 0]) );
  }
  i830.states = i832
  var i835 = i831[2]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i835[i + 0]) );
  }
  i830.layers = i834
  var i837 = i831[3]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i837[i + 0]) );
  }
  i830.parameters = i836
  i830.animationClips = i831[4]
  i830.HasSubStateMachines = !!i831[5]
  i830.avatarUnsupported = i831[6]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i841 = data
  i840.cycleOffset = i841[0]
  i840.cycleOffsetParameter = i841[1]
  i840.cycleOffsetParameterActive = !!i841[2]
  i840.mirror = !!i841[3]
  i840.mirrorParameter = i841[4]
  i840.mirrorParameterActive = !!i841[5]
  i840.motionId = i841[6]
  i840.nameHash = i841[7]
  i840.fullPathHash = i841[8]
  i840.speed = i841[9]
  i840.speedParameter = i841[10]
  i840.speedParameterActive = !!i841[11]
  i840.tag = i841[12]
  i840.name = i841[13]
  i840.layer = i841[14]
  i840.writeDefaultValues = !!i841[15]
  var i843 = i841[16]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i843[i + 0]) );
  }
  i840.transitions = i842
  var i845 = i841[17]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i840.behaviours = i844
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i849 = data
  i848.fullPath = i849[0]
  i848.canTransitionToSelf = !!i849[1]
  i848.duration = i849[2]
  i848.exitTime = i849[3]
  i848.hasExitTime = !!i849[4]
  i848.hasFixedDuration = !!i849[5]
  i848.interruptionSource = i849[6]
  i848.offset = i849[7]
  i848.orderedInterruption = !!i849[8]
  i848.destinationStateNameHash = i849[9]
  i848.destinationStateMachineId = i849[10]
  i848.isExit = !!i849[11]
  i848.mute = !!i849[12]
  i848.solo = !!i849[13]
  var i851 = i849[14]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i851[i + 0]) );
  }
  i848.conditions = i850
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i855 = data
  i854.mode = i855[0]
  i854.parameter = i855[1]
  i854.threshold = i855[2]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i861 = data
  i860.blendingMode = i861[0]
  i860.defaultWeight = i861[1]
  i860.name = i861[2]
  i860.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i861[3], i860.stateMachine)
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i863 = data
  i862.id = i863[0]
  i862.defaultStateNameHash = i863[1]
  var i865 = i863[2]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i865[i + 0]) );
  }
  i862.entryTransitions = i864
  var i867 = i863[3]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i867[i + 0]) );
  }
  i862.anyStateTransitions = i866
  return i862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i871 = data
  i870.destinationStateNameHash = i871[0]
  i870.destinationStateMachineId = i871[1]
  i870.isExit = !!i871[2]
  i870.mute = !!i871[3]
  i870.solo = !!i871[4]
  var i873 = i871[5]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i873[i + 0]) );
  }
  i870.conditions = i872
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i877 = data
  i876.defaultBool = !!i877[0]
  i876.defaultFloat = i877[1]
  i876.defaultInt = i877[2]
  i876.name = i877[3]
  i876.nameHash = i877[4]
  i876.type = i877[5]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i879 = data
  var i881 = i879[0]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i881[i + 0]) );
  }
  i878.files = i880
  i878.componentToPrefabIds = i879[1]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i885 = data
  i884.path = i885[0]
  request.r(i885[1], i885[2], 0, i884, 'unityObject')
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i887 = data
  var i889 = i887[0]
  var i888 = []
  for(var i = 0; i < i889.length; i += 1) {
    i888.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i889[i + 0]) );
  }
  i886.scriptsExecutionOrder = i888
  var i891 = i887[1]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i891[i + 0]) );
  }
  i886.sortingLayers = i890
  var i893 = i887[2]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i893[i + 0]) );
  }
  i886.cullingLayers = i892
  i886.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i887[3], i886.timeSettings)
  i886.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i887[4], i886.physicsSettings)
  i886.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i887[5], i886.physics2DSettings)
  i886.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i887[6], i886.qualitySettings)
  i886.enableRealtimeShadows = !!i887[7]
  i886.enableAutoInstancing = !!i887[8]
  i886.enableDynamicBatching = !!i887[9]
  i886.lightmapEncodingQuality = i887[10]
  i886.desiredColorSpace = i887[11]
  var i895 = i887[12]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i886.allTags = i894
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i899 = data
  i898.name = i899[0]
  i898.value = i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i903 = data
  i902.id = i903[0]
  i902.name = i903[1]
  i902.value = i903[2]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i907 = data
  i906.id = i907[0]
  i906.name = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i909 = data
  i908.fixedDeltaTime = i909[0]
  i908.maximumDeltaTime = i909[1]
  i908.timeScale = i909[2]
  i908.maximumParticleTimestep = i909[3]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i911 = data
  i910.gravity = new pc.Vec3( i911[0], i911[1], i911[2] )
  i910.defaultSolverIterations = i911[3]
  i910.bounceThreshold = i911[4]
  i910.autoSyncTransforms = !!i911[5]
  i910.autoSimulation = !!i911[6]
  var i913 = i911[7]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i913[i + 0]) );
  }
  i910.collisionMatrix = i912
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i917 = data
  i916.enabled = !!i917[0]
  i916.layerId = i917[1]
  i916.otherLayerId = i917[2]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'material')
  i918.gravity = new pc.Vec2( i919[2], i919[3] )
  i918.positionIterations = i919[4]
  i918.velocityIterations = i919[5]
  i918.velocityThreshold = i919[6]
  i918.maxLinearCorrection = i919[7]
  i918.maxAngularCorrection = i919[8]
  i918.maxTranslationSpeed = i919[9]
  i918.maxRotationSpeed = i919[10]
  i918.baumgarteScale = i919[11]
  i918.baumgarteTOIScale = i919[12]
  i918.timeToSleep = i919[13]
  i918.linearSleepTolerance = i919[14]
  i918.angularSleepTolerance = i919[15]
  i918.defaultContactOffset = i919[16]
  i918.autoSimulation = !!i919[17]
  i918.queriesHitTriggers = !!i919[18]
  i918.queriesStartInColliders = !!i919[19]
  i918.callbacksOnDisable = !!i919[20]
  i918.reuseCollisionCallbacks = !!i919[21]
  i918.autoSyncTransforms = !!i919[22]
  var i921 = i919[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i921[i + 0]) );
  }
  i918.collisionMatrix = i920
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i925 = data
  i924.enabled = !!i925[0]
  i924.layerId = i925[1]
  i924.otherLayerId = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i927 = data
  var i929 = i927[0]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i929[i + 0]) );
  }
  i926.qualityLevels = i928
  var i931 = i927[1]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( i931[i + 0] );
  }
  i926.names = i930
  i926.shadows = i927[2]
  i926.anisotropicFiltering = i927[3]
  i926.antiAliasing = i927[4]
  i926.lodBias = i927[5]
  i926.shadowCascades = i927[6]
  i926.shadowDistance = i927[7]
  i926.shadowmaskMode = i927[8]
  i926.shadowProjection = i927[9]
  i926.shadowResolution = i927[10]
  i926.softParticles = !!i927[11]
  i926.softVegetation = !!i927[12]
  i926.activeColorSpace = i927[13]
  i926.desiredColorSpace = i927[14]
  i926.masterTextureLimit = i927[15]
  i926.maxQueuedFrames = i927[16]
  i926.particleRaycastBudget = i927[17]
  i926.pixelLightCount = i927[18]
  i926.realtimeReflectionProbes = !!i927[19]
  i926.shadowCascade2Split = i927[20]
  i926.shadowCascade4Split = new pc.Vec3( i927[21], i927[22], i927[23] )
  i926.streamingMipmapsActive = !!i927[24]
  i926.vSyncCount = i927[25]
  i926.asyncUploadBufferSize = i927[26]
  i926.asyncUploadTimeSlice = i927[27]
  i926.billboardsFaceCameraPosition = !!i927[28]
  i926.shadowNearPlaneOffset = i927[29]
  i926.streamingMipmapsMemoryBudget = i927[30]
  i926.maximumLODLevel = i927[31]
  i926.streamingMipmapsAddAllCameras = !!i927[32]
  i926.streamingMipmapsMaxLevelReduction = i927[33]
  i926.streamingMipmapsRenderersPerFrame = i927[34]
  i926.resolutionScalingFixedDPIFactor = i927[35]
  i926.streamingMipmapsMaxFileIORequests = i927[36]
  i926.currentQualityLevel = i927[37]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i935 = data
  i934.name = i935[0]
  var i937 = i935[1]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i937[i + 0]) );
  }
  i934.tos = i936
  var i939 = i935[2]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i934.constant = i938
  i934.isValid = !!i935[3]
  i934.isHuman = !!i935[4]
  i934.hasRootMotion = !!i935[5]
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i943 = data
  i942.hash = i943[0]
  i942.path = i943[1]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i947 = data
  i946.weight = i947[0]
  i946.vertices = i947[1]
  i946.normals = i947[2]
  i946.tangents = i947[3]
  return i946
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[10],"55":[16],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[16],"79":[5],"80":[81],"82":[81],"39":[28],"83":[28],"84":[5,28],"85":[28,30],"86":[28],"87":[30,28],"88":[5],"89":[30,28],"90":[28],"91":[92],"93":[28],"94":[28],"41":[39],"32":[30,28],"95":[28],"40":[39],"96":[28],"97":[28],"98":[28],"99":[28],"100":[28],"101":[28],"102":[28],"103":[28],"104":[28],"105":[30,28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[30,28],"111":[28],"112":[36],"113":[36],"37":[36],"114":[36],"115":[16],"116":[16],"117":[92],"118":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.MonoBehaviour","BulletTrail","UnityEngine.MeshCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.AudioSource","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","PathSigleton","Path","UnityEngine.RectTransform","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","ObjectPool","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","test","BotController","UnityEditor.Animations.AnimatorController","UnityEngine.Cubemap","UnityEditor.MonoScript","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "0.8";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "3484";

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

Deserializers.buildID = "a3334676-32c1-4136-922d-3a98900959f4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

