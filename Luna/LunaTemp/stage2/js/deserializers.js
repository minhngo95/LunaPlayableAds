var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4494 = root || request.c( 'UnityEngine.JointSpring' )
  var i4495 = data
  i4494.spring = i4495[0]
  i4494.damper = i4495[1]
  i4494.targetPosition = i4495[2]
  return i4494
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4496 = root || request.c( 'UnityEngine.JointMotor' )
  var i4497 = data
  i4496.m_TargetVelocity = i4497[0]
  i4496.m_Force = i4497[1]
  i4496.m_FreeSpin = i4497[2]
  return i4496
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4498 = root || request.c( 'UnityEngine.JointLimits' )
  var i4499 = data
  i4498.m_Min = i4499[0]
  i4498.m_Max = i4499[1]
  i4498.m_Bounciness = i4499[2]
  i4498.m_BounceMinVelocity = i4499[3]
  i4498.m_ContactDistance = i4499[4]
  i4498.minBounce = i4499[5]
  i4498.maxBounce = i4499[6]
  return i4498
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4500 = root || request.c( 'UnityEngine.JointDrive' )
  var i4501 = data
  i4500.m_PositionSpring = i4501[0]
  i4500.m_PositionDamper = i4501[1]
  i4500.m_MaximumForce = i4501[2]
  return i4500
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4502 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4503 = data
  i4502.m_Spring = i4503[0]
  i4502.m_Damper = i4503[1]
  return i4502
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4504 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4505 = data
  i4504.m_Limit = i4505[0]
  i4504.m_Bounciness = i4505[1]
  i4504.m_ContactDistance = i4505[2]
  return i4504
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4506 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4507 = data
  i4506.m_ExtremumSlip = i4507[0]
  i4506.m_ExtremumValue = i4507[1]
  i4506.m_AsymptoteSlip = i4507[2]
  i4506.m_AsymptoteValue = i4507[3]
  i4506.m_Stiffness = i4507[4]
  return i4506
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4508 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4509 = data
  i4508.m_LowerAngle = i4509[0]
  i4508.m_UpperAngle = i4509[1]
  return i4508
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4510 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4511 = data
  i4510.m_MotorSpeed = i4511[0]
  i4510.m_MaximumMotorTorque = i4511[1]
  return i4510
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4512 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4513 = data
  i4512.m_DampingRatio = i4513[0]
  i4512.m_Frequency = i4513[1]
  i4512.m_Angle = i4513[2]
  return i4512
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4514 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4515 = data
  i4514.m_LowerTranslation = i4515[0]
  i4514.m_UpperTranslation = i4515[1]
  return i4514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4516 = root || new pc.UnityMaterial()
  var i4517 = data
  i4516.name = i4517[0]
  request.r(i4517[1], i4517[2], 0, i4516, 'shader')
  i4516.renderQueue = i4517[3]
  i4516.enableInstancing = !!i4517[4]
  var i4519 = i4517[5]
  var i4518 = []
  for(var i = 0; i < i4519.length; i += 1) {
    i4518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4519[i + 0]) );
  }
  i4516.floatParameters = i4518
  var i4521 = i4517[6]
  var i4520 = []
  for(var i = 0; i < i4521.length; i += 1) {
    i4520.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4521[i + 0]) );
  }
  i4516.colorParameters = i4520
  var i4523 = i4517[7]
  var i4522 = []
  for(var i = 0; i < i4523.length; i += 1) {
    i4522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4523[i + 0]) );
  }
  i4516.vectorParameters = i4522
  var i4525 = i4517[8]
  var i4524 = []
  for(var i = 0; i < i4525.length; i += 1) {
    i4524.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4525[i + 0]) );
  }
  i4516.textureParameters = i4524
  var i4527 = i4517[9]
  var i4526 = []
  for(var i = 0; i < i4527.length; i += 1) {
    i4526.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4527[i + 0]) );
  }
  i4516.materialFlags = i4526
  return i4516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4531 = data
  i4530.name = i4531[0]
  i4530.value = i4531[1]
  return i4530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4535 = data
  i4534.name = i4535[0]
  i4534.value = new pc.Color(i4535[1], i4535[2], i4535[3], i4535[4])
  return i4534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4539 = data
  i4538.name = i4539[0]
  i4538.value = new pc.Vec4( i4539[1], i4539[2], i4539[3], i4539[4] )
  return i4538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4543 = data
  i4542.name = i4543[0]
  request.r(i4543[1], i4543[2], 0, i4542, 'value')
  return i4542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4547 = data
  i4546.name = i4547[0]
  i4546.enabled = !!i4547[1]
  return i4546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4548 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4549 = data
  i4548.name = i4549[0]
  i4548.width = i4549[1]
  i4548.height = i4549[2]
  i4548.mipmapCount = i4549[3]
  i4548.anisoLevel = i4549[4]
  i4548.filterMode = i4549[5]
  i4548.hdr = !!i4549[6]
  i4548.format = i4549[7]
  i4548.wrapMode = i4549[8]
  i4548.alphaIsTransparency = !!i4549[9]
  i4548.alphaSource = i4549[10]
  return i4548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4550 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4551 = data
  i4550.position = new pc.Vec3( i4551[0], i4551[1], i4551[2] )
  i4550.scale = new pc.Vec3( i4551[3], i4551[4], i4551[5] )
  i4550.rotation = new pc.Quat(i4551[6], i4551[7], i4551[8], i4551[9])
  return i4550
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i4552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i4553 = data
  request.r(i4553[0], i4553[1], 0, i4552, 'sharedMesh')
  return i4552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i4554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i4555 = data
  request.r(i4555[0], i4555[1], 0, i4554, 'additionalVertexStreams')
  i4554.enabled = !!i4555[2]
  request.r(i4555[3], i4555[4], 0, i4554, 'sharedMaterial')
  var i4557 = i4555[5]
  var i4556 = []
  for(var i = 0; i < i4557.length; i += 2) {
  request.r(i4557[i + 0], i4557[i + 1], 2, i4556, '')
  }
  i4554.sharedMaterials = i4556
  i4554.receiveShadows = !!i4555[6]
  i4554.shadowCastingMode = i4555[7]
  i4554.sortingLayerID = i4555[8]
  i4554.sortingOrder = i4555[9]
  i4554.lightmapIndex = i4555[10]
  i4554.lightmapSceneIndex = i4555[11]
  i4554.lightmapScaleOffset = new pc.Vec4( i4555[12], i4555[13], i4555[14], i4555[15] )
  i4554.lightProbeUsage = i4555[16]
  i4554.reflectionProbeUsage = i4555[17]
  return i4554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4561 = data
  i4560.name = i4561[0]
  i4560.tagId = i4561[1]
  i4560.enabled = !!i4561[2]
  i4560.isStatic = !!i4561[3]
  i4560.layer = i4561[4]
  return i4560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i4562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i4563 = data
  i4562.name = i4563[0]
  i4562.halfPrecision = !!i4563[1]
  i4562.vertexCount = i4563[2]
  i4562.aabb = i4563[3]
  var i4565 = i4563[4]
  var i4564 = []
  for(var i = 0; i < i4565.length; i += 1) {
    i4564.push( !!i4565[i + 0] );
  }
  i4562.streams = i4564
  i4562.vertices = i4563[5]
  var i4567 = i4563[6]
  var i4566 = []
  for(var i = 0; i < i4567.length; i += 1) {
    i4566.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i4567[i + 0]) );
  }
  i4562.subMeshes = i4566
  var i4569 = i4563[7]
  var i4568 = []
  for(var i = 0; i < i4569.length; i += 16) {
    i4568.push( new pc.Mat4().setData(i4569[i + 0], i4569[i + 1], i4569[i + 2], i4569[i + 3],  i4569[i + 4], i4569[i + 5], i4569[i + 6], i4569[i + 7],  i4569[i + 8], i4569[i + 9], i4569[i + 10], i4569[i + 11],  i4569[i + 12], i4569[i + 13], i4569[i + 14], i4569[i + 15]) );
  }
  i4562.bindposes = i4568
  var i4571 = i4563[8]
  var i4570 = []
  for(var i = 0; i < i4571.length; i += 1) {
    i4570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i4571[i + 0]) );
  }
  i4562.blendShapes = i4570
  return i4562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i4576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i4577 = data
  i4576.triangles = i4577[0]
  return i4576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i4582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i4583 = data
  i4582.name = i4583[0]
  var i4585 = i4583[1]
  var i4584 = []
  for(var i = 0; i < i4585.length; i += 1) {
    i4584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i4585[i + 0]) );
  }
  i4582.frames = i4584
  return i4582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i4586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i4587 = data
  request.r(i4587[0], i4587[1], 0, i4586, 'animatorController')
  request.r(i4587[2], i4587[3], 0, i4586, 'avatar')
  i4586.updateMode = i4587[4]
  i4586.hasTransformHierarchy = !!i4587[5]
  i4586.applyRootMotion = !!i4587[6]
  var i4589 = i4587[7]
  var i4588 = []
  for(var i = 0; i < i4589.length; i += 2) {
  request.r(i4589[i + 0], i4589[i + 1], 2, i4588, '')
  }
  i4586.humanBones = i4588
  i4586.enabled = !!i4587[8]
  return i4586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i4592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i4593 = data
  i4592.enabled = !!i4593[0]
  request.r(i4593[1], i4593[2], 0, i4592, 'sharedMaterial')
  var i4595 = i4593[3]
  var i4594 = []
  for(var i = 0; i < i4595.length; i += 2) {
  request.r(i4595[i + 0], i4595[i + 1], 2, i4594, '')
  }
  i4592.sharedMaterials = i4594
  i4592.receiveShadows = !!i4593[4]
  i4592.shadowCastingMode = i4593[5]
  i4592.sortingLayerID = i4593[6]
  i4592.sortingOrder = i4593[7]
  i4592.lightmapIndex = i4593[8]
  i4592.lightmapSceneIndex = i4593[9]
  i4592.lightmapScaleOffset = new pc.Vec4( i4593[10], i4593[11], i4593[12], i4593[13] )
  i4592.lightProbeUsage = i4593[14]
  i4592.reflectionProbeUsage = i4593[15]
  request.r(i4593[16], i4593[17], 0, i4592, 'sharedMesh')
  var i4597 = i4593[18]
  var i4596 = []
  for(var i = 0; i < i4597.length; i += 2) {
  request.r(i4597[i + 0], i4597[i + 1], 2, i4596, '')
  }
  i4592.bones = i4596
  i4592.updateWhenOffscreen = !!i4593[19]
  i4592.localBounds = i4593[20]
  request.r(i4593[21], i4593[22], 0, i4592, 'rootBone')
  var i4599 = i4593[23]
  var i4598 = []
  for(var i = 0; i < i4599.length; i += 1) {
    i4598.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i4599[i + 0]) );
  }
  i4592.blendShapesWeights = i4598
  return i4592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i4602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i4603 = data
  i4602.weight = i4603[0]
  return i4602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i4604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i4605 = data
  i4604.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i4605[0], i4604.main)
  i4604.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i4605[1], i4604.colorBySpeed)
  i4604.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i4605[2], i4604.colorOverLifetime)
  i4604.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i4605[3], i4604.emission)
  i4604.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i4605[4], i4604.rotationBySpeed)
  i4604.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i4605[5], i4604.rotationOverLifetime)
  i4604.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i4605[6], i4604.shape)
  i4604.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i4605[7], i4604.sizeBySpeed)
  i4604.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i4605[8], i4604.sizeOverLifetime)
  i4604.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i4605[9], i4604.textureSheetAnimation)
  i4604.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i4605[10], i4604.velocityOverLifetime)
  i4604.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i4605[11], i4604.noise)
  i4604.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i4605[12], i4604.inheritVelocity)
  i4604.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i4605[13], i4604.forceOverLifetime)
  i4604.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i4605[14], i4604.limitVelocityOverLifetime)
  i4604.useAutoRandomSeed = !!i4605[15]
  i4604.randomSeed = i4605[16]
  return i4604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i4606 = root || new pc.ParticleSystemMain()
  var i4607 = data
  i4606.duration = i4607[0]
  i4606.loop = !!i4607[1]
  i4606.prewarm = !!i4607[2]
  i4606.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[3], i4606.startDelay)
  i4606.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[4], i4606.startLifetime)
  i4606.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[5], i4606.startSpeed)
  i4606.startSize3D = !!i4607[6]
  i4606.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[7], i4606.startSizeX)
  i4606.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[8], i4606.startSizeY)
  i4606.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[9], i4606.startSizeZ)
  i4606.startRotation3D = !!i4607[10]
  i4606.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[11], i4606.startRotationX)
  i4606.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[12], i4606.startRotationY)
  i4606.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[13], i4606.startRotationZ)
  i4606.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4607[14], i4606.startColor)
  i4606.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4607[15], i4606.gravityModifier)
  i4606.simulationSpace = i4607[16]
  request.r(i4607[17], i4607[18], 0, i4606, 'customSimulationSpace')
  i4606.simulationSpeed = i4607[19]
  i4606.useUnscaledTime = !!i4607[20]
  i4606.scalingMode = i4607[21]
  i4606.playOnAwake = !!i4607[22]
  i4606.maxParticles = i4607[23]
  i4606.emitterVelocityMode = i4607[24]
  i4606.stopAction = i4607[25]
  return i4606
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i4608 = root || new pc.MinMaxCurve()
  var i4609 = data
  i4608.mode = i4609[0]
  i4608.curveMin = new pc.AnimationCurve( { keys_flow: i4609[1] } )
  i4608.curveMax = new pc.AnimationCurve( { keys_flow: i4609[2] } )
  i4608.curveMultiplier = i4609[3]
  i4608.constantMin = i4609[4]
  i4608.constantMax = i4609[5]
  return i4608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i4610 = root || new pc.MinMaxGradient()
  var i4611 = data
  i4610.mode = i4611[0]
  i4610.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4611[1], i4610.gradientMin)
  i4610.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i4611[2], i4610.gradientMax)
  i4610.colorMin = new pc.Color(i4611[3], i4611[4], i4611[5], i4611[6])
  i4610.colorMax = new pc.Color(i4611[7], i4611[8], i4611[9], i4611[10])
  return i4610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i4612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i4613 = data
  i4612.mode = i4613[0]
  var i4615 = i4613[1]
  var i4614 = []
  for(var i = 0; i < i4615.length; i += 1) {
    i4614.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i4615[i + 0]) );
  }
  i4612.colorKeys = i4614
  var i4617 = i4613[2]
  var i4616 = []
  for(var i = 0; i < i4617.length; i += 1) {
    i4616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i4617[i + 0]) );
  }
  i4612.alphaKeys = i4616
  return i4612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i4618 = root || new pc.ParticleSystemColorBySpeed()
  var i4619 = data
  i4618.enabled = !!i4619[0]
  i4618.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4619[1], i4618.color)
  i4618.range = new pc.Vec2( i4619[2], i4619[3] )
  return i4618
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i4622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i4623 = data
  i4622.color = new pc.Color(i4623[0], i4623[1], i4623[2], i4623[3])
  i4622.time = i4623[4]
  return i4622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i4626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i4627 = data
  i4626.alpha = i4627[0]
  i4626.time = i4627[1]
  return i4626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i4628 = root || new pc.ParticleSystemColorOverLifetime()
  var i4629 = data
  i4628.enabled = !!i4629[0]
  i4628.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i4629[1], i4628.color)
  return i4628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i4630 = root || new pc.ParticleSystemEmitter()
  var i4631 = data
  i4630.enabled = !!i4631[0]
  i4630.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[1], i4630.rateOverTime)
  i4630.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4631[2], i4630.rateOverDistance)
  var i4633 = i4631[3]
  var i4632 = []
  for(var i = 0; i < i4633.length; i += 1) {
    i4632.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i4633[i + 0]) );
  }
  i4630.bursts = i4632
  return i4630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i4636 = root || new pc.ParticleSystemBurst()
  var i4637 = data
  i4636.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4637[0], i4636.count)
  i4636.cycleCount = i4637[1]
  i4636.minCount = i4637[2]
  i4636.maxCount = i4637[3]
  i4636.repeatInterval = i4637[4]
  i4636.time = i4637[5]
  return i4636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i4638 = root || new pc.ParticleSystemRotationBySpeed()
  var i4639 = data
  i4638.enabled = !!i4639[0]
  i4638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[1], i4638.x)
  i4638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[2], i4638.y)
  i4638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4639[3], i4638.z)
  i4638.separateAxes = !!i4639[4]
  i4638.range = new pc.Vec2( i4639[5], i4639[6] )
  return i4638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i4640 = root || new pc.ParticleSystemRotationOverLifetime()
  var i4641 = data
  i4640.enabled = !!i4641[0]
  i4640.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4641[1], i4640.x)
  i4640.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4641[2], i4640.y)
  i4640.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4641[3], i4640.z)
  i4640.separateAxes = !!i4641[4]
  return i4640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i4642 = root || new pc.ParticleSystemShape()
  var i4643 = data
  i4642.enabled = !!i4643[0]
  i4642.shapeType = i4643[1]
  i4642.randomDirectionAmount = i4643[2]
  i4642.sphericalDirectionAmount = i4643[3]
  i4642.randomPositionAmount = i4643[4]
  i4642.alignToDirection = !!i4643[5]
  i4642.radius = i4643[6]
  i4642.radiusMode = i4643[7]
  i4642.radiusSpread = i4643[8]
  i4642.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4643[9], i4642.radiusSpeed)
  i4642.radiusThickness = i4643[10]
  i4642.angle = i4643[11]
  i4642.length = i4643[12]
  i4642.boxThickness = new pc.Vec3( i4643[13], i4643[14], i4643[15] )
  i4642.meshShapeType = i4643[16]
  request.r(i4643[17], i4643[18], 0, i4642, 'mesh')
  request.r(i4643[19], i4643[20], 0, i4642, 'meshRenderer')
  request.r(i4643[21], i4643[22], 0, i4642, 'skinnedMeshRenderer')
  i4642.useMeshMaterialIndex = !!i4643[23]
  i4642.meshMaterialIndex = i4643[24]
  i4642.useMeshColors = !!i4643[25]
  i4642.normalOffset = i4643[26]
  i4642.arc = i4643[27]
  i4642.arcMode = i4643[28]
  i4642.arcSpread = i4643[29]
  i4642.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4643[30], i4642.arcSpeed)
  i4642.donutRadius = i4643[31]
  i4642.position = new pc.Vec3( i4643[32], i4643[33], i4643[34] )
  i4642.rotation = new pc.Vec3( i4643[35], i4643[36], i4643[37] )
  i4642.scale = new pc.Vec3( i4643[38], i4643[39], i4643[40] )
  return i4642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i4644 = root || new pc.ParticleSystemSizeBySpeed()
  var i4645 = data
  i4644.enabled = !!i4645[0]
  i4644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[1], i4644.x)
  i4644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[2], i4644.y)
  i4644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4645[3], i4644.z)
  i4644.separateAxes = !!i4645[4]
  i4644.range = new pc.Vec2( i4645[5], i4645[6] )
  return i4644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i4646 = root || new pc.ParticleSystemSizeOverLifetime()
  var i4647 = data
  i4646.enabled = !!i4647[0]
  i4646.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[1], i4646.x)
  i4646.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[2], i4646.y)
  i4646.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4647[3], i4646.z)
  i4646.separateAxes = !!i4647[4]
  return i4646
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i4648 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i4649 = data
  i4648.enabled = !!i4649[0]
  i4648.mode = i4649[1]
  i4648.animation = i4649[2]
  i4648.numTilesX = i4649[3]
  i4648.numTilesY = i4649[4]
  i4648.useRandomRow = !!i4649[5]
  i4648.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[6], i4648.frameOverTime)
  i4648.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4649[7], i4648.startFrame)
  i4648.cycleCount = i4649[8]
  i4648.rowIndex = i4649[9]
  i4648.flipU = i4649[10]
  i4648.flipV = i4649[11]
  i4648.spriteCount = i4649[12]
  var i4651 = i4649[13]
  var i4650 = []
  for(var i = 0; i < i4651.length; i += 2) {
  request.r(i4651[i + 0], i4651[i + 1], 2, i4650, '')
  }
  i4648.sprites = i4650
  return i4648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i4654 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i4655 = data
  i4654.enabled = !!i4655[0]
  i4654.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[1], i4654.x)
  i4654.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[2], i4654.y)
  i4654.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[3], i4654.z)
  i4654.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[4], i4654.radial)
  i4654.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[5], i4654.speedModifier)
  i4654.space = i4655[6]
  i4654.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[7], i4654.orbitalX)
  i4654.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[8], i4654.orbitalY)
  i4654.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[9], i4654.orbitalZ)
  i4654.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[10], i4654.orbitalOffsetX)
  i4654.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[11], i4654.orbitalOffsetY)
  i4654.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4655[12], i4654.orbitalOffsetZ)
  return i4654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i4656 = root || new pc.ParticleSystemNoise()
  var i4657 = data
  i4656.enabled = !!i4657[0]
  i4656.separateAxes = !!i4657[1]
  i4656.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[2], i4656.strengthX)
  i4656.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[3], i4656.strengthY)
  i4656.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[4], i4656.strengthZ)
  i4656.frequency = i4657[5]
  i4656.damping = !!i4657[6]
  i4656.octaveCount = i4657[7]
  i4656.octaveMultiplier = i4657[8]
  i4656.octaveScale = i4657[9]
  i4656.quality = i4657[10]
  i4656.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[11], i4656.scrollSpeed)
  i4656.scrollSpeedMultiplier = i4657[12]
  i4656.remapEnabled = !!i4657[13]
  i4656.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[14], i4656.remapX)
  i4656.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[15], i4656.remapY)
  i4656.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[16], i4656.remapZ)
  i4656.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[17], i4656.positionAmount)
  i4656.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[18], i4656.rotationAmount)
  i4656.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4657[19], i4656.sizeAmount)
  return i4656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i4658 = root || new pc.ParticleSystemInheritVelocity()
  var i4659 = data
  i4658.enabled = !!i4659[0]
  i4658.mode = i4659[1]
  i4658.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4659[2], i4658.curve)
  return i4658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i4660 = root || new pc.ParticleSystemForceOverLifetime()
  var i4661 = data
  i4660.enabled = !!i4661[0]
  i4660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[1], i4660.x)
  i4660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[2], i4660.y)
  i4660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4661[3], i4660.z)
  i4660.space = i4661[4]
  i4660.randomized = !!i4661[5]
  return i4660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i4662 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i4663 = data
  i4662.enabled = !!i4663[0]
  i4662.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[1], i4662.limit)
  i4662.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[2], i4662.limitX)
  i4662.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[3], i4662.limitY)
  i4662.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[4], i4662.limitZ)
  i4662.dampen = i4663[5]
  i4662.separateAxes = !!i4663[6]
  i4662.space = i4663[7]
  i4662.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i4663[8], i4662.drag)
  i4662.multiplyDragByParticleSize = !!i4663[9]
  i4662.multiplyDragByParticleVelocity = !!i4663[10]
  return i4662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i4664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i4665 = data
  i4664.enabled = !!i4665[0]
  request.r(i4665[1], i4665[2], 0, i4664, 'sharedMaterial')
  var i4667 = i4665[3]
  var i4666 = []
  for(var i = 0; i < i4667.length; i += 2) {
  request.r(i4667[i + 0], i4667[i + 1], 2, i4666, '')
  }
  i4664.sharedMaterials = i4666
  i4664.receiveShadows = !!i4665[4]
  i4664.shadowCastingMode = i4665[5]
  i4664.sortingLayerID = i4665[6]
  i4664.sortingOrder = i4665[7]
  i4664.lightmapIndex = i4665[8]
  i4664.lightmapSceneIndex = i4665[9]
  i4664.lightmapScaleOffset = new pc.Vec4( i4665[10], i4665[11], i4665[12], i4665[13] )
  i4664.lightProbeUsage = i4665[14]
  i4664.reflectionProbeUsage = i4665[15]
  request.r(i4665[16], i4665[17], 0, i4664, 'mesh')
  i4664.meshCount = i4665[18]
  i4664.activeVertexStreamsCount = i4665[19]
  i4664.alignment = i4665[20]
  i4664.renderMode = i4665[21]
  i4664.sortMode = i4665[22]
  i4664.lengthScale = i4665[23]
  i4664.velocityScale = i4665[24]
  i4664.cameraVelocityScale = i4665[25]
  i4664.normalDirection = i4665[26]
  i4664.sortingFudge = i4665[27]
  i4664.minParticleSize = i4665[28]
  i4664.maxParticleSize = i4665[29]
  i4664.pivot = new pc.Vec3( i4665[30], i4665[31], i4665[32] )
  request.r(i4665[33], i4665[34], 0, i4664, 'trailMaterial')
  return i4664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4669 = data
  request.r(i4669[0], i4669[1], 0, i4668, 'clip')
  request.r(i4669[2], i4669[3], 0, i4668, 'outputAudioMixerGroup')
  i4668.playOnAwake = !!i4669[4]
  i4668.loop = !!i4669[5]
  i4668.time = i4669[6]
  i4668.volume = i4669[7]
  i4668.pitch = i4669[8]
  i4668.enabled = !!i4669[9]
  return i4668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i4670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i4671 = data
  i4670.enabled = !!i4671[0]
  i4670.isTrigger = !!i4671[1]
  request.r(i4671[2], i4671[3], 0, i4670, 'material')
  request.r(i4671[4], i4671[5], 0, i4670, 'sharedMesh')
  i4670.convex = !!i4671[6]
  return i4670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4673 = data
  i4672.enabled = !!i4673[0]
  i4672.aspect = i4673[1]
  i4672.orthographic = !!i4673[2]
  i4672.orthographicSize = i4673[3]
  i4672.backgroundColor = new pc.Color(i4673[4], i4673[5], i4673[6], i4673[7])
  i4672.nearClipPlane = i4673[8]
  i4672.farClipPlane = i4673[9]
  i4672.fieldOfView = i4673[10]
  i4672.depth = i4673[11]
  i4672.clearFlags = i4673[12]
  i4672.cullingMask = i4673[13]
  i4672.rect = i4673[14]
  request.r(i4673[15], i4673[16], 0, i4672, 'targetTexture')
  i4672.usePhysicalProperties = !!i4673[17]
  i4672.focalLength = i4673[18]
  i4672.sensorSize = new pc.Vec2( i4673[19], i4673[20] )
  i4672.lensShift = new pc.Vec2( i4673[21], i4673[22] )
  i4672.gateFit = i4673[23]
  return i4672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i4674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i4675 = data
  i4674.center = new pc.Vec3( i4675[0], i4675[1], i4675[2] )
  i4674.size = new pc.Vec3( i4675[3], i4675[4], i4675[5] )
  i4674.enabled = !!i4675[6]
  i4674.isTrigger = !!i4675[7]
  request.r(i4675[8], i4675[9], 0, i4674, 'material')
  return i4674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4677 = data
  i4676.pivot = new pc.Vec2( i4677[0], i4677[1] )
  i4676.anchorMin = new pc.Vec2( i4677[2], i4677[3] )
  i4676.anchorMax = new pc.Vec2( i4677[4], i4677[5] )
  i4676.sizeDelta = new pc.Vec2( i4677[6], i4677[7] )
  i4676.anchoredPosition3D = new pc.Vec3( i4677[8], i4677[9], i4677[10] )
  i4676.rotation = new pc.Quat(i4677[11], i4677[12], i4677[13], i4677[14])
  i4676.scale = new pc.Vec3( i4677[15], i4677[16], i4677[17] )
  return i4676
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i4678 = root || request.c( 'UICrosshairItem' )
  var i4679 = data
  request.r(i4679[0], i4679[1], 0, i4678, 'CrosshairRectTransform')
  i4678._distanceMax = i4679[2]
  i4678._distanceMin = i4679[3]
  i4678._speedShrink = i4679[4]
  i4678._currentSpeed = i4679[5]
  i4678._rateOnMove = i4679[6]
  i4678._rateOnAttack = i4679[7]
  return i4678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4681 = data
  i4680.cullTransparentMesh = !!i4681[0]
  return i4680
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4682 = root || request.c( 'UnityEngine.UI.Image' )
  var i4683 = data
  request.r(i4683[0], i4683[1], 0, i4682, 'm_Sprite')
  i4682.m_Type = i4683[2]
  i4682.m_PreserveAspect = !!i4683[3]
  i4682.m_FillCenter = !!i4683[4]
  i4682.m_FillMethod = i4683[5]
  i4682.m_FillAmount = i4683[6]
  i4682.m_FillClockwise = !!i4683[7]
  i4682.m_FillOrigin = i4683[8]
  i4682.m_UseSpriteMesh = !!i4683[9]
  i4682.m_PixelsPerUnitMultiplier = i4683[10]
  request.r(i4683[11], i4683[12], 0, i4682, 'm_Material')
  i4682.m_Maskable = !!i4683[13]
  i4682.m_Color = new pc.Color(i4683[14], i4683[15], i4683[16], i4683[17])
  i4682.m_RaycastTarget = !!i4683[18]
  i4682.m_RaycastPadding = new pc.Vec4( i4683[19], i4683[20], i4683[21], i4683[22] )
  return i4682
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i4684 = root || request.c( 'BulletTrail' )
  var i4685 = data
  i4684.Speed = i4685[0]
  i4684.LifeTime = i4685[1]
  request.r(i4685[2], i4685[3], 0, i4684, '_trail')
  i4684._trailStartScale = new pc.Vec3( i4685[4], i4685[5], i4685[6] )
  i4684._trailMaxScale = new pc.Vec3( i4685[7], i4685[8], i4685[9] )
  i4684._trailLengthAtMaxScale = i4685[10]
  return i4684
}

Deserializers["Effect"] = function (request, data, root) {
  var i4686 = root || request.c( 'Effect' )
  var i4687 = data
  var i4689 = i4687[0]
  var i4688 = []
  for(var i = 0; i < i4689.length; i += 2) {
  request.r(i4689[i + 0], i4689[i + 1], 2, i4688, '')
  }
  i4686.particles = i4688
  i4686._lifeTime = i4687[1]
  return i4686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i4692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i4693 = data
  i4692.name = i4693[0]
  i4692.atlasId = i4693[1]
  i4692.mipmapCount = i4693[2]
  i4692.hdr = !!i4693[3]
  i4692.size = i4693[4]
  i4692.anisoLevel = i4693[5]
  i4692.filterMode = i4693[6]
  i4692.wrapMode = i4693[7]
  var i4695 = i4693[8]
  var i4694 = []
  for(var i = 0; i < i4695.length; i += 4) {
    i4694.push( UnityEngine.Rect.MinMaxRect(i4695[i + 0], i4695[i + 1], i4695[i + 2], i4695[i + 3]) );
  }
  i4692.rects = i4694
  return i4692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4699 = data
  i4698.name = i4699[0]
  i4698.index = i4699[1]
  i4698.startup = !!i4699[2]
  return i4698
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4700 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4701 = data
  request.r(i4701[0], i4701[1], 0, i4700, 'm_FirstSelected')
  i4700.m_sendNavigationEvents = !!i4701[2]
  i4700.m_DragThreshold = i4701[3]
  return i4700
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4702 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4703 = data
  i4702.m_HorizontalAxis = i4703[0]
  i4702.m_VerticalAxis = i4703[1]
  i4702.m_SubmitButton = i4703[2]
  i4702.m_CancelButton = i4703[3]
  i4702.m_InputActionsPerSecond = i4703[4]
  i4702.m_RepeatDelay = i4703[5]
  i4702.m_ForceModuleActive = !!i4703[6]
  i4702.m_SendPointerHoverToParent = !!i4703[7]
  return i4702
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i4704 = root || request.c( 'ObjectPool' )
  var i4705 = data
  return i4704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4707 = data
  i4706.enabled = !!i4707[0]
  i4706.planeDistance = i4707[1]
  i4706.referencePixelsPerUnit = i4707[2]
  i4706.isFallbackOverlay = !!i4707[3]
  i4706.renderMode = i4707[4]
  i4706.renderOrder = i4707[5]
  i4706.sortingLayerName = i4707[6]
  i4706.sortingOrder = i4707[7]
  i4706.scaleFactor = i4707[8]
  request.r(i4707[9], i4707[10], 0, i4706, 'worldCamera')
  i4706.overrideSorting = !!i4707[11]
  i4706.pixelPerfect = !!i4707[12]
  i4706.targetDisplay = i4707[13]
  i4706.overridePixelPerfect = !!i4707[14]
  return i4706
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4708 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4709 = data
  i4708.m_UiScaleMode = i4709[0]
  i4708.m_ReferencePixelsPerUnit = i4709[1]
  i4708.m_ScaleFactor = i4709[2]
  i4708.m_ReferenceResolution = new pc.Vec2( i4709[3], i4709[4] )
  i4708.m_ScreenMatchMode = i4709[5]
  i4708.m_MatchWidthOrHeight = i4709[6]
  i4708.m_PhysicalUnit = i4709[7]
  i4708.m_FallbackScreenDPI = i4709[8]
  i4708.m_DefaultSpriteDPI = i4709[9]
  i4708.m_DynamicPixelsPerUnit = i4709[10]
  i4708.m_PresetInfoIsWorld = !!i4709[11]
  return i4708
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4710 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4711 = data
  i4710.m_IgnoreReversedGraphics = !!i4711[0]
  i4710.m_BlockingObjects = i4711[1]
  i4710.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4711[2] )
  return i4710
}

Deserializers["UIManager"] = function (request, data, root) {
  var i4712 = root || request.c( 'UIManager' )
  var i4713 = data
  request.r(i4713[0], i4713[1], 0, i4712, 'StepText')
  return i4712
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i4714 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i4715 = data
  i4714.m_hasFontAssetChanged = !!i4715[0]
  request.r(i4715[1], i4715[2], 0, i4714, 'm_baseMaterial')
  i4714.m_maskOffset = new pc.Vec4( i4715[3], i4715[4], i4715[5], i4715[6] )
  i4714.m_text = i4715[7]
  i4714.m_isRightToLeft = !!i4715[8]
  request.r(i4715[9], i4715[10], 0, i4714, 'm_fontAsset')
  request.r(i4715[11], i4715[12], 0, i4714, 'm_sharedMaterial')
  var i4717 = i4715[13]
  var i4716 = []
  for(var i = 0; i < i4717.length; i += 2) {
  request.r(i4717[i + 0], i4717[i + 1], 2, i4716, '')
  }
  i4714.m_fontSharedMaterials = i4716
  request.r(i4715[14], i4715[15], 0, i4714, 'm_fontMaterial')
  var i4719 = i4715[16]
  var i4718 = []
  for(var i = 0; i < i4719.length; i += 2) {
  request.r(i4719[i + 0], i4719[i + 1], 2, i4718, '')
  }
  i4714.m_fontMaterials = i4718
  i4714.m_fontColor32 = UnityEngine.Color32.ConstructColor(i4715[17], i4715[18], i4715[19], i4715[20])
  i4714.m_fontColor = new pc.Color(i4715[21], i4715[22], i4715[23], i4715[24])
  i4714.m_enableVertexGradient = !!i4715[25]
  i4714.m_colorMode = i4715[26]
  i4714.m_fontColorGradient = request.d('TMPro.VertexGradient', i4715[27], i4714.m_fontColorGradient)
  request.r(i4715[28], i4715[29], 0, i4714, 'm_fontColorGradientPreset')
  request.r(i4715[30], i4715[31], 0, i4714, 'm_spriteAsset')
  i4714.m_tintAllSprites = !!i4715[32]
  request.r(i4715[33], i4715[34], 0, i4714, 'm_StyleSheet')
  i4714.m_TextStyleHashCode = i4715[35]
  i4714.m_overrideHtmlColors = !!i4715[36]
  i4714.m_faceColor = UnityEngine.Color32.ConstructColor(i4715[37], i4715[38], i4715[39], i4715[40])
  i4714.m_fontSize = i4715[41]
  i4714.m_fontSizeBase = i4715[42]
  i4714.m_fontWeight = i4715[43]
  i4714.m_enableAutoSizing = !!i4715[44]
  i4714.m_fontSizeMin = i4715[45]
  i4714.m_fontSizeMax = i4715[46]
  i4714.m_fontStyle = i4715[47]
  i4714.m_HorizontalAlignment = i4715[48]
  i4714.m_VerticalAlignment = i4715[49]
  i4714.m_textAlignment = i4715[50]
  i4714.m_characterSpacing = i4715[51]
  i4714.m_wordSpacing = i4715[52]
  i4714.m_lineSpacing = i4715[53]
  i4714.m_lineSpacingMax = i4715[54]
  i4714.m_paragraphSpacing = i4715[55]
  i4714.m_charWidthMaxAdj = i4715[56]
  i4714.m_enableWordWrapping = !!i4715[57]
  i4714.m_wordWrappingRatios = i4715[58]
  i4714.m_overflowMode = i4715[59]
  request.r(i4715[60], i4715[61], 0, i4714, 'm_linkedTextComponent')
  request.r(i4715[62], i4715[63], 0, i4714, 'parentLinkedComponent')
  i4714.m_enableKerning = !!i4715[64]
  i4714.m_enableExtraPadding = !!i4715[65]
  i4714.checkPaddingRequired = !!i4715[66]
  i4714.m_isRichText = !!i4715[67]
  i4714.m_parseCtrlCharacters = !!i4715[68]
  i4714.m_isOrthographic = !!i4715[69]
  i4714.m_isCullingEnabled = !!i4715[70]
  i4714.m_horizontalMapping = i4715[71]
  i4714.m_verticalMapping = i4715[72]
  i4714.m_uvLineOffset = i4715[73]
  i4714.m_geometrySortingOrder = i4715[74]
  i4714.m_IsTextObjectScaleStatic = !!i4715[75]
  i4714.m_VertexBufferAutoSizeReduction = !!i4715[76]
  i4714.m_useMaxVisibleDescender = !!i4715[77]
  i4714.m_pageToDisplay = i4715[78]
  i4714.m_margin = new pc.Vec4( i4715[79], i4715[80], i4715[81], i4715[82] )
  i4714.m_isUsingLegacyAnimationComponent = !!i4715[83]
  i4714.m_isVolumetricText = !!i4715[84]
  request.r(i4715[85], i4715[86], 0, i4714, 'm_Material')
  i4714.m_Maskable = !!i4715[87]
  i4714.m_Color = new pc.Color(i4715[88], i4715[89], i4715[90], i4715[91])
  i4714.m_RaycastTarget = !!i4715[92]
  i4714.m_RaycastPadding = new pc.Vec4( i4715[93], i4715[94], i4715[95], i4715[96] )
  return i4714
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i4720 = root || request.c( 'TMPro.VertexGradient' )
  var i4721 = data
  i4720.topLeft = new pc.Color(i4721[0], i4721[1], i4721[2], i4721[3])
  i4720.topRight = new pc.Color(i4721[4], i4721[5], i4721[6], i4721[7])
  i4720.bottomLeft = new pc.Color(i4721[8], i4721[9], i4721[10], i4721[11])
  i4720.bottomRight = new pc.Color(i4721[12], i4721[13], i4721[14], i4721[15])
  return i4720
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i4722 = root || request.c( 'BotParachute' )
  var i4723 = data
  request.r(i4723[0], i4723[1], 0, i4722, '_animator')
  request.r(i4723[2], i4723[3], 0, i4722, '_muzzle')
  request.r(i4723[4], i4723[5], 0, i4722, 'bullet')
  i4722.target = new pc.Vec3( i4723[6], i4723[7], i4723[8] )
  i4722.moveIndex = i4723[9]
  i4722.isMoveDone = !!i4723[10]
  i4722.isDie = !!i4723[11]
  i4722.isMove = !!i4723[12]
  i4722.parachuteDone = !!i4723[13]
  i4722.isTakeDame = !!i4723[14]
  i4722.maxHealth = i4723[15]
  request.r(i4723[16], i4723[17], 0, i4722, 'healthBarRenderer')
  request.r(i4723[18], i4723[19], 0, i4722, '_audioSource')
  request.r(i4723[20], i4723[21], 0, i4722, '_callTeamAudioSource')
  request.r(i4723[22], i4723[23], 0, i4722, '_hitAudioSource')
  return i4722
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i4724 = root || request.c( 'ParachuteController' )
  var i4725 = data
  i4724.gravity = i4725[0]
  i4724.dragForce = i4725[1]
  i4724.objectMass = i4725[2]
  request.r(i4725[3], i4725[4], 0, i4724, '_botController')
  i4724.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i4725[5] )
  request.r(i4725[6], i4725[7], 0, i4724, 'ParachuteScale')
  i4724.scaleAmount = i4725[8]
  i4724.velocity = new pc.Vec3( i4725[9], i4725[10], i4725[11] )
  i4724._distanceOpenParachute = i4725[12]
  i4724._distanceCloseParachute = i4725[13]
  return i4724
}

Deserializers["BotController"] = function (request, data, root) {
  var i4726 = root || request.c( 'BotController' )
  var i4727 = data
  request.r(i4727[0], i4727[1], 0, i4726, '_animator')
  request.r(i4727[2], i4727[3], 0, i4726, '_muzzle')
  request.r(i4727[4], i4727[5], 0, i4726, 'bullet')
  i4726.target = new pc.Vec3( i4727[6], i4727[7], i4727[8] )
  i4726.moveIndex = i4727[9]
  i4726.isMoveDone = !!i4727[10]
  i4726.isDie = !!i4727[11]
  i4726.isTakeDame = !!i4727[12]
  i4726.maxHealth = i4727[13]
  request.r(i4727[14], i4727[15], 0, i4726, 'healthBarRenderer')
  request.r(i4727[16], i4727[17], 0, i4726, '_audioSource')
  request.r(i4727[18], i4727[19], 0, i4726, '_callTeamAudioSource')
  request.r(i4727[20], i4727[21], 0, i4726, '_hitAudioSource')
  return i4726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i4728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i4729 = data
  i4728.enabled = !!i4729[0]
  i4728.type = i4729[1]
  i4728.color = new pc.Color(i4729[2], i4729[3], i4729[4], i4729[5])
  i4728.cullingMask = i4729[6]
  i4728.intensity = i4729[7]
  i4728.range = i4729[8]
  i4728.spotAngle = i4729[9]
  i4728.shadows = i4729[10]
  i4728.shadowNormalBias = i4729[11]
  i4728.shadowBias = i4729[12]
  i4728.shadowStrength = i4729[13]
  i4728.shadowResolution = i4729[14]
  i4728.lightmapBakeType = i4729[15]
  i4728.renderMode = i4729[16]
  request.r(i4729[17], i4729[18], 0, i4728, 'cookie')
  i4728.cookieSize = i4729[19]
  return i4728
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i4730 = root || request.c( 'PlayerView' )
  var i4731 = data
  request.r(i4731[0], i4731[1], 0, i4730, '_mainRoot')
  request.r(i4731[2], i4731[3], 0, i4730, '_head')
  i4730._sensitivity = i4731[4]
  i4730._slerpFactor = i4731[5]
  i4730._viewHorizontalThreshold = new pc.Vec2( i4731[6], i4731[7] )
  i4730._viewVerticalThreshold = new pc.Vec2( i4731[8], i4731[9] )
  i4730._initRotate = new pc.Vec2( i4731[10], i4731[11] )
  i4730._totalRotate = new pc.Vec2( i4731[12], i4731[13] )
  return i4730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i4732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i4733 = data
  i4732.playAutomatically = !!i4733[0]
  request.r(i4733[1], i4733[2], 0, i4732, 'clip')
  var i4735 = i4733[3]
  var i4734 = []
  for(var i = 0; i < i4735.length; i += 2) {
  request.r(i4735[i + 0], i4735[i + 1], 2, i4734, '')
  }
  i4732.clips = i4734
  i4732.wrapMode = i4733[4]
  i4732.enabled = !!i4733[5]
  return i4732
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i4738 = root || request.c( 'WeaponController' )
  var i4739 = data
  i4738.Mask = UnityEngine.LayerMask.FromIntegerValue( i4739[0] )
  i4738.damage = i4739[1]
  request.r(i4739[2], i4739[3], 0, i4738, '_muzzleTrans')
  request.r(i4739[4], i4739[5], 0, i4738, '_animation')
  request.r(i4739[6], i4739[7], 0, i4738, 'bullet')
  request.r(i4739[8], i4739[9], 0, i4738, '_muzzleFlash')
  request.r(i4739[10], i4739[11], 0, i4738, 'audioClip')
  request.r(i4739[12], i4739[13], 0, i4738, 'audioSource')
  i4738.SphereRadius = i4739[14]
  request.r(i4739[15], i4739[16], 0, i4738, 'Effect')
  return i4738
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i4740 = root || request.c( 'SpawnBot' )
  var i4741 = data
  request.r(i4741[0], i4741[1], 0, i4740, '_botPrefab')
  i4740._spawnInterval = i4741[2]
  i4740._upper = i4741[3]
  return i4740
}

Deserializers["PathManager"] = function (request, data, root) {
  var i4742 = root || request.c( 'PathManager' )
  var i4743 = data
  var i4745 = i4743[0]
  var i4744 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i4745.length; i += 1) {
    i4744.add(request.d('Path', i4745[i + 0]));
  }
  i4742._paths = i4744
  var i4747 = i4743[1]
  var i4746 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i4747.length; i += 1) {
    i4746.add(request.d('Path', i4747[i + 0]));
  }
  i4742._pathsParachute = i4746
  return i4742
}

Deserializers["Path"] = function (request, data, root) {
  var i4750 = root || request.c( 'Path' )
  var i4751 = data
  i4750.IsUse = !!i4751[0]
  var i4753 = i4751[1]
  var i4752 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i4753.length; i += 2) {
  request.r(i4753[i + 0], i4753[i + 1], 1, i4752, '')
  }
  i4750.WayPoints = i4752
  return i4750
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i4756 = root || request.c( 'ConfigManager' )
  var i4757 = data
  var i4759 = i4757[0]
  var i4758 = []
  for(var i = 0; i < i4759.length; i += 1) {
    i4758.push( request.d('StepData', i4759[i + 0]) );
  }
  i4756._stepDatas = i4758
  return i4756
}

Deserializers["StepData"] = function (request, data, root) {
  var i4762 = root || request.c( 'StepData' )
  var i4763 = data
  i4762.NumberBot = i4763[0]
  i4762.NumberParachute = i4763[1]
  return i4762
}

Deserializers["StepManager"] = function (request, data, root) {
  var i4764 = root || request.c( 'StepManager' )
  var i4765 = data
  i4764.test = i4765[0]
  request.r(i4765[1], i4765[2], 0, i4764, '_spawnBotNormal')
  request.r(i4765[3], i4765[4], 0, i4764, '_spawnBotParachute')
  return i4764
}

Deserializers["BotManager"] = function (request, data, root) {
  var i4766 = root || request.c( 'BotManager' )
  var i4767 = data
  return i4766
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i4768 = root || request.c( 'AudioManager' )
  var i4769 = data
  var i4771 = i4769[0]
  var i4770 = []
  for(var i = 0; i < i4771.length; i += 2) {
  request.r(i4771[i + 0], i4771[i + 1], 2, i4770, '')
  }
  i4768.CallTeamOnFireSounds = i4770
  var i4773 = i4769[1]
  var i4772 = []
  for(var i = 0; i < i4773.length; i += 2) {
  request.r(i4773[i + 0], i4773[i + 1], 2, i4772, '')
  }
  i4768.CallTeamSounds = i4772
  var i4775 = i4769[2]
  var i4774 = []
  for(var i = 0; i < i4775.length; i += 2) {
  request.r(i4775[i + 0], i4775[i + 1], 2, i4774, '')
  }
  i4768.AttackSounds = i4774
  var i4777 = i4769[3]
  var i4776 = []
  for(var i = 0; i < i4777.length; i += 2) {
  request.r(i4777[i + 0], i4777[i + 1], 2, i4776, '')
  }
  i4768.MissSounds = i4776
  var i4779 = i4769[4]
  var i4778 = []
  for(var i = 0; i < i4779.length; i += 2) {
  request.r(i4779[i + 0], i4779[i + 1], 2, i4778, '')
  }
  i4768.HitSounds = i4778
  return i4768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4783 = data
  i4782.ambientIntensity = i4783[0]
  i4782.reflectionIntensity = i4783[1]
  i4782.ambientMode = i4783[2]
  i4782.ambientLight = new pc.Color(i4783[3], i4783[4], i4783[5], i4783[6])
  i4782.ambientSkyColor = new pc.Color(i4783[7], i4783[8], i4783[9], i4783[10])
  i4782.ambientGroundColor = new pc.Color(i4783[11], i4783[12], i4783[13], i4783[14])
  i4782.ambientEquatorColor = new pc.Color(i4783[15], i4783[16], i4783[17], i4783[18])
  i4782.fogColor = new pc.Color(i4783[19], i4783[20], i4783[21], i4783[22])
  i4782.fogEndDistance = i4783[23]
  i4782.fogStartDistance = i4783[24]
  i4782.fogDensity = i4783[25]
  i4782.fog = !!i4783[26]
  request.r(i4783[27], i4783[28], 0, i4782, 'skybox')
  i4782.fogMode = i4783[29]
  var i4785 = i4783[30]
  var i4784 = []
  for(var i = 0; i < i4785.length; i += 1) {
    i4784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4785[i + 0]) );
  }
  i4782.lightmaps = i4784
  i4782.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4783[31], i4782.lightProbes)
  i4782.lightmapsMode = i4783[32]
  i4782.mixedBakeMode = i4783[33]
  i4782.environmentLightingMode = i4783[34]
  i4782.ambientProbe = new pc.SphericalHarmonicsL2(i4783[35])
  i4782.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i4783[36])
  i4782.useReferenceAmbientProbe = !!i4783[37]
  request.r(i4783[38], i4783[39], 0, i4782, 'customReflection')
  request.r(i4783[40], i4783[41], 0, i4782, 'defaultReflection')
  i4782.defaultReflectionMode = i4783[42]
  i4782.defaultReflectionResolution = i4783[43]
  i4782.sunLightObjectId = i4783[44]
  i4782.pixelLightCount = i4783[45]
  i4782.defaultReflectionHDR = !!i4783[46]
  i4782.hasLightDataAsset = !!i4783[47]
  i4782.hasManualGenerate = !!i4783[48]
  return i4782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4789 = data
  request.r(i4789[0], i4789[1], 0, i4788, 'lightmapColor')
  request.r(i4789[2], i4789[3], 0, i4788, 'lightmapDirection')
  return i4788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4790 = root || new UnityEngine.LightProbes()
  var i4791 = data
  return i4790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4799 = data
  var i4801 = i4799[0]
  var i4800 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4801.length; i += 1) {
    i4800.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4801[i + 0]));
  }
  i4798.ShaderCompilationErrors = i4800
  i4798.name = i4799[1]
  i4798.guid = i4799[2]
  var i4803 = i4799[3]
  var i4802 = []
  for(var i = 0; i < i4803.length; i += 1) {
    i4802.push( i4803[i + 0] );
  }
  i4798.shaderDefinedKeywords = i4802
  var i4805 = i4799[4]
  var i4804 = []
  for(var i = 0; i < i4805.length; i += 1) {
    i4804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4805[i + 0]) );
  }
  i4798.passes = i4804
  var i4807 = i4799[5]
  var i4806 = []
  for(var i = 0; i < i4807.length; i += 1) {
    i4806.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4807[i + 0]) );
  }
  i4798.usePasses = i4806
  var i4809 = i4799[6]
  var i4808 = []
  for(var i = 0; i < i4809.length; i += 1) {
    i4808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4809[i + 0]) );
  }
  i4798.defaultParameterValues = i4808
  request.r(i4799[7], i4799[8], 0, i4798, 'unityFallbackShader')
  i4798.readDepth = !!i4799[9]
  i4798.isCreatedByShaderGraph = !!i4799[10]
  i4798.usedBatchUniforms = i4799[11]
  return i4798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4813 = data
  i4812.shaderName = i4813[0]
  i4812.errorMessage = i4813[1]
  return i4812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i4818 = root || new pc.UnityShaderPass()
  var i4819 = data
  i4818.id = i4819[0]
  i4818.subShaderIndex = i4819[1]
  i4818.name = i4819[2]
  i4818.passType = i4819[3]
  i4818.grabPassTextureName = i4819[4]
  i4818.usePass = !!i4819[5]
  i4818.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[6], i4818.zTest)
  i4818.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[7], i4818.zWrite)
  i4818.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[8], i4818.culling)
  i4818.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4819[9], i4818.blending)
  i4818.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i4819[10], i4818.alphaBlending)
  i4818.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[11], i4818.colorWriteMask)
  i4818.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[12], i4818.offsetUnits)
  i4818.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[13], i4818.offsetFactor)
  i4818.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[14], i4818.stencilRef)
  i4818.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[15], i4818.stencilReadMask)
  i4818.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4819[16], i4818.stencilWriteMask)
  i4818.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4819[17], i4818.stencilOp)
  i4818.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4819[18], i4818.stencilOpFront)
  i4818.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i4819[19], i4818.stencilOpBack)
  var i4821 = i4819[20]
  var i4820 = []
  for(var i = 0; i < i4821.length; i += 1) {
    i4820.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i4821[i + 0]) );
  }
  i4818.tags = i4820
  var i4823 = i4819[21]
  var i4822 = []
  for(var i = 0; i < i4823.length; i += 1) {
    i4822.push( i4823[i + 0] );
  }
  i4818.passDefinedKeywords = i4822
  var i4825 = i4819[22]
  var i4824 = []
  for(var i = 0; i < i4825.length; i += 1) {
    i4824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i4825[i + 0]) );
  }
  i4818.passDefinedKeywordGroups = i4824
  var i4827 = i4819[23]
  var i4826 = []
  for(var i = 0; i < i4827.length; i += 1) {
    i4826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4827[i + 0]) );
  }
  i4818.variants = i4826
  var i4829 = i4819[24]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 1) {
    i4828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i4829[i + 0]) );
  }
  i4818.excludedVariants = i4828
  i4818.hasDepthReader = !!i4819[25]
  return i4818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i4830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i4831 = data
  i4830.val = i4831[0]
  i4830.name = i4831[1]
  return i4830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i4832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i4833 = data
  i4832.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4833[0], i4832.src)
  i4832.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4833[1], i4832.dst)
  i4832.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4833[2], i4832.op)
  return i4832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i4834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i4835 = data
  i4834.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4835[0], i4834.pass)
  i4834.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4835[1], i4834.fail)
  i4834.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4835[2], i4834.zFail)
  i4834.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i4835[3], i4834.comp)
  return i4834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i4839 = data
  i4838.name = i4839[0]
  i4838.value = i4839[1]
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i4843 = data
  var i4845 = i4843[0]
  var i4844 = []
  for(var i = 0; i < i4845.length; i += 1) {
    i4844.push( i4845[i + 0] );
  }
  i4842.keywords = i4844
  i4842.hasDiscard = !!i4843[1]
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i4848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i4849 = data
  i4848.passId = i4849[0]
  i4848.subShaderIndex = i4849[1]
  var i4851 = i4849[2]
  var i4850 = []
  for(var i = 0; i < i4851.length; i += 1) {
    i4850.push( i4851[i + 0] );
  }
  i4848.keywords = i4850
  i4848.vertexProgram = i4849[3]
  i4848.fragmentProgram = i4849[4]
  i4848.readDepth = !!i4849[5]
  return i4848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i4855 = data
  request.r(i4855[0], i4855[1], 0, i4854, 'shader')
  i4854.pass = i4855[2]
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i4858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i4859 = data
  i4858.name = i4859[0]
  i4858.type = i4859[1]
  i4858.value = new pc.Vec4( i4859[2], i4859[3], i4859[4], i4859[5] )
  i4858.textureValue = i4859[6]
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i4860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i4861 = data
  i4860.name = i4861[0]
  request.r(i4861[1], i4861[2], 0, i4860, 'texture')
  i4860.aabb = i4861[3]
  i4860.vertices = i4861[4]
  i4860.triangles = i4861[5]
  i4860.textureRect = UnityEngine.Rect.MinMaxRect(i4861[6], i4861[7], i4861[8], i4861[9])
  i4860.packedRect = UnityEngine.Rect.MinMaxRect(i4861[10], i4861[11], i4861[12], i4861[13])
  i4860.border = new pc.Vec4( i4861[14], i4861[15], i4861[16], i4861[17] )
  i4860.transparency = i4861[18]
  i4860.bounds = i4861[19]
  i4860.pixelsPerUnit = i4861[20]
  i4860.textureWidth = i4861[21]
  i4860.textureHeight = i4861[22]
  i4860.nativeSize = new pc.Vec2( i4861[23], i4861[24] )
  i4860.pivot = new pc.Vec2( i4861[25], i4861[26] )
  i4860.textureRectOffset = new pc.Vec2( i4861[27], i4861[28] )
  return i4860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i4862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i4863 = data
  i4862.name = i4863[0]
  return i4862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i4865 = data
  i4864.name = i4865[0]
  i4864.wrapMode = i4865[1]
  i4864.isLooping = !!i4865[2]
  i4864.length = i4865[3]
  var i4867 = i4865[4]
  var i4866 = []
  for(var i = 0; i < i4867.length; i += 1) {
    i4866.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i4867[i + 0]) );
  }
  i4864.curves = i4866
  var i4869 = i4865[5]
  var i4868 = []
  for(var i = 0; i < i4869.length; i += 1) {
    i4868.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i4869[i + 0]) );
  }
  i4864.events = i4868
  i4864.halfPrecision = !!i4865[6]
  i4864.frameRate = i4865[7]
  i4864.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i4865[8], i4864.localBounds)
  i4864.hasMuscleCurves = !!i4865[9]
  var i4871 = i4865[10]
  var i4870 = []
  for(var i = 0; i < i4871.length; i += 1) {
    i4870.push( i4871[i + 0] );
  }
  i4864.clipMuscleConstant = i4870
  i4864.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i4865[11], i4864.clipBindingConstant)
  return i4864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i4874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i4875 = data
  i4874.path = i4875[0]
  i4874.componentType = i4875[1]
  i4874.property = i4875[2]
  i4874.keys = i4875[3]
  var i4877 = i4875[4]
  var i4876 = []
  for(var i = 0; i < i4877.length; i += 1) {
    i4876.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i4877[i + 0]) );
  }
  i4874.objectReferenceKeys = i4876
  return i4874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i4881 = data
  i4880.time = i4881[0]
  request.r(i4881[1], i4881[2], 0, i4880, 'value')
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i4885 = data
  i4884.functionName = i4885[0]
  i4884.floatParameter = i4885[1]
  i4884.intParameter = i4885[2]
  i4884.stringParameter = i4885[3]
  request.r(i4885[4], i4885[5], 0, i4884, 'objectReferenceParameter')
  i4884.time = i4885[6]
  return i4884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i4886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i4887 = data
  i4886.center = new pc.Vec3( i4887[0], i4887[1], i4887[2] )
  i4886.extends = new pc.Vec3( i4887[3], i4887[4], i4887[5] )
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i4891 = data
  var i4893 = i4891[0]
  var i4892 = []
  for(var i = 0; i < i4893.length; i += 1) {
    i4892.push( i4893[i + 0] );
  }
  i4890.genericBindings = i4892
  var i4895 = i4891[1]
  var i4894 = []
  for(var i = 0; i < i4895.length; i += 1) {
    i4894.push( i4895[i + 0] );
  }
  i4890.pptrCurveMapping = i4894
  return i4890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i4897 = data
  i4896.name = i4897[0]
  i4896.ascent = i4897[1]
  i4896.originalLineHeight = i4897[2]
  i4896.fontSize = i4897[3]
  var i4899 = i4897[4]
  var i4898 = []
  for(var i = 0; i < i4899.length; i += 1) {
    i4898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i4899[i + 0]) );
  }
  i4896.characterInfo = i4898
  request.r(i4897[5], i4897[6], 0, i4896, 'texture')
  i4896.originalFontSize = i4897[7]
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i4902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i4903 = data
  i4902.index = i4903[0]
  i4902.advance = i4903[1]
  i4902.bearing = i4903[2]
  i4902.glyphWidth = i4903[3]
  i4902.glyphHeight = i4903[4]
  i4902.minX = i4903[5]
  i4902.maxX = i4903[6]
  i4902.minY = i4903[7]
  i4902.maxY = i4903[8]
  i4902.uvBottomLeftX = i4903[9]
  i4902.uvBottomLeftY = i4903[10]
  i4902.uvBottomRightX = i4903[11]
  i4902.uvBottomRightY = i4903[12]
  i4902.uvTopLeftX = i4903[13]
  i4902.uvTopLeftY = i4903[14]
  i4902.uvTopRightX = i4903[15]
  i4902.uvTopRightY = i4903[16]
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i4905 = data
  i4904.name = i4905[0]
  var i4907 = i4905[1]
  var i4906 = []
  for(var i = 0; i < i4907.length; i += 1) {
    i4906.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i4907[i + 0]) );
  }
  i4904.states = i4906
  var i4909 = i4905[2]
  var i4908 = []
  for(var i = 0; i < i4909.length; i += 1) {
    i4908.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i4909[i + 0]) );
  }
  i4904.layers = i4908
  var i4911 = i4905[3]
  var i4910 = []
  for(var i = 0; i < i4911.length; i += 1) {
    i4910.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i4911[i + 0]) );
  }
  i4904.parameters = i4910
  i4904.animationClips = i4905[4]
  i4904.HasSubStateMachines = !!i4905[5]
  i4904.avatarUnsupported = i4905[6]
  return i4904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i4914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i4915 = data
  i4914.cycleOffset = i4915[0]
  i4914.cycleOffsetParameter = i4915[1]
  i4914.cycleOffsetParameterActive = !!i4915[2]
  i4914.mirror = !!i4915[3]
  i4914.mirrorParameter = i4915[4]
  i4914.mirrorParameterActive = !!i4915[5]
  i4914.motionId = i4915[6]
  i4914.nameHash = i4915[7]
  i4914.fullPathHash = i4915[8]
  i4914.speed = i4915[9]
  i4914.speedParameter = i4915[10]
  i4914.speedParameterActive = !!i4915[11]
  i4914.tag = i4915[12]
  i4914.name = i4915[13]
  i4914.layer = i4915[14]
  i4914.writeDefaultValues = !!i4915[15]
  var i4917 = i4915[16]
  var i4916 = []
  for(var i = 0; i < i4917.length; i += 1) {
    i4916.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4917[i + 0]) );
  }
  i4914.transitions = i4916
  var i4919 = i4915[17]
  var i4918 = []
  for(var i = 0; i < i4919.length; i += 2) {
  request.r(i4919[i + 0], i4919[i + 1], 2, i4918, '')
  }
  i4914.behaviours = i4918
  return i4914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i4922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i4923 = data
  i4922.fullPath = i4923[0]
  i4922.canTransitionToSelf = !!i4923[1]
  i4922.duration = i4923[2]
  i4922.exitTime = i4923[3]
  i4922.hasExitTime = !!i4923[4]
  i4922.hasFixedDuration = !!i4923[5]
  i4922.interruptionSource = i4923[6]
  i4922.offset = i4923[7]
  i4922.orderedInterruption = !!i4923[8]
  i4922.destinationStateNameHash = i4923[9]
  i4922.destinationStateMachineId = i4923[10]
  i4922.isExit = !!i4923[11]
  i4922.mute = !!i4923[12]
  i4922.solo = !!i4923[13]
  var i4925 = i4923[14]
  var i4924 = []
  for(var i = 0; i < i4925.length; i += 1) {
    i4924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4925[i + 0]) );
  }
  i4922.conditions = i4924
  return i4922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i4928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i4929 = data
  i4928.mode = i4929[0]
  i4928.parameter = i4929[1]
  i4928.threshold = i4929[2]
  return i4928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i4934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i4935 = data
  i4934.blendingMode = i4935[0]
  i4934.defaultWeight = i4935[1]
  i4934.name = i4935[2]
  i4934.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i4935[3], i4934.stateMachine)
  return i4934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i4936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i4937 = data
  i4936.id = i4937[0]
  i4936.defaultStateNameHash = i4937[1]
  var i4939 = i4937[2]
  var i4938 = []
  for(var i = 0; i < i4939.length; i += 1) {
    i4938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i4939[i + 0]) );
  }
  i4936.entryTransitions = i4938
  var i4941 = i4937[3]
  var i4940 = []
  for(var i = 0; i < i4941.length; i += 1) {
    i4940.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i4941[i + 0]) );
  }
  i4936.anyStateTransitions = i4940
  return i4936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i4944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i4945 = data
  i4944.destinationStateNameHash = i4945[0]
  i4944.destinationStateMachineId = i4945[1]
  i4944.isExit = !!i4945[2]
  i4944.mute = !!i4945[3]
  i4944.solo = !!i4945[4]
  var i4947 = i4945[5]
  var i4946 = []
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i4947[i + 0]) );
  }
  i4944.conditions = i4946
  return i4944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i4950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i4951 = data
  i4950.defaultBool = !!i4951[0]
  i4950.defaultFloat = i4951[1]
  i4950.defaultInt = i4951[2]
  i4950.name = i4951[3]
  i4950.nameHash = i4951[4]
  i4950.type = i4951[5]
  return i4950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i4952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i4953 = data
  i4952.name = i4953[0]
  i4952.bytes64 = i4953[1]
  i4952.data = i4953[2]
  return i4952
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i4954 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i4955 = data
  i4954.hashCode = i4955[0]
  request.r(i4955[1], i4955[2], 0, i4954, 'material')
  i4954.materialHashCode = i4955[3]
  request.r(i4955[4], i4955[5], 0, i4954, 'atlas')
  i4954.normalStyle = i4955[6]
  i4954.normalSpacingOffset = i4955[7]
  i4954.boldStyle = i4955[8]
  i4954.boldSpacing = i4955[9]
  i4954.italicStyle = i4955[10]
  i4954.tabSize = i4955[11]
  i4954.m_Version = i4955[12]
  i4954.m_SourceFontFileGUID = i4955[13]
  request.r(i4955[14], i4955[15], 0, i4954, 'm_SourceFontFile_EditorRef')
  request.r(i4955[16], i4955[17], 0, i4954, 'm_SourceFontFile')
  i4954.m_AtlasPopulationMode = i4955[18]
  i4954.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i4955[19], i4954.m_FaceInfo)
  var i4957 = i4955[20]
  var i4956 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i4957.length; i += 1) {
    i4956.add(request.d('UnityEngine.TextCore.Glyph', i4957[i + 0]));
  }
  i4954.m_GlyphTable = i4956
  var i4959 = i4955[21]
  var i4958 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i4959.length; i += 1) {
    i4958.add(request.d('TMPro.TMP_Character', i4959[i + 0]));
  }
  i4954.m_CharacterTable = i4958
  var i4961 = i4955[22]
  var i4960 = []
  for(var i = 0; i < i4961.length; i += 2) {
  request.r(i4961[i + 0], i4961[i + 1], 2, i4960, '')
  }
  i4954.m_AtlasTextures = i4960
  i4954.m_AtlasTextureIndex = i4955[23]
  i4954.m_IsMultiAtlasTexturesEnabled = !!i4955[24]
  i4954.m_ClearDynamicDataOnBuild = !!i4955[25]
  var i4963 = i4955[26]
  var i4962 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4963.length; i += 1) {
    i4962.add(request.d('UnityEngine.TextCore.GlyphRect', i4963[i + 0]));
  }
  i4954.m_UsedGlyphRects = i4962
  var i4965 = i4955[27]
  var i4964 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i4965.length; i += 1) {
    i4964.add(request.d('UnityEngine.TextCore.GlyphRect', i4965[i + 0]));
  }
  i4954.m_FreeGlyphRects = i4964
  i4954.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i4955[28], i4954.m_fontInfo)
  i4954.m_AtlasWidth = i4955[29]
  i4954.m_AtlasHeight = i4955[30]
  i4954.m_AtlasPadding = i4955[31]
  i4954.m_AtlasRenderMode = i4955[32]
  var i4967 = i4955[33]
  var i4966 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i4967.length; i += 1) {
    i4966.add(request.d('TMPro.TMP_Glyph', i4967[i + 0]));
  }
  i4954.m_glyphInfoList = i4966
  i4954.m_KerningTable = request.d('TMPro.KerningTable', i4955[34], i4954.m_KerningTable)
  i4954.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i4955[35], i4954.m_FontFeatureTable)
  var i4969 = i4955[36]
  var i4968 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4969.length; i += 2) {
  request.r(i4969[i + 0], i4969[i + 1], 1, i4968, '')
  }
  i4954.fallbackFontAssets = i4968
  var i4971 = i4955[37]
  var i4970 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i4971.length; i += 2) {
  request.r(i4971[i + 0], i4971[i + 1], 1, i4970, '')
  }
  i4954.m_FallbackFontAssetTable = i4970
  i4954.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i4955[38], i4954.m_CreationSettings)
  var i4973 = i4955[39]
  var i4972 = []
  for(var i = 0; i < i4973.length; i += 1) {
    i4972.push( request.d('TMPro.TMP_FontWeightPair', i4973[i + 0]) );
  }
  i4954.m_FontWeightTable = i4972
  var i4975 = i4955[40]
  var i4974 = []
  for(var i = 0; i < i4975.length; i += 1) {
    i4974.push( request.d('TMPro.TMP_FontWeightPair', i4975[i + 0]) );
  }
  i4954.fontWeights = i4974
  return i4954
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i4976 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i4977 = data
  i4976.m_FaceIndex = i4977[0]
  i4976.m_FamilyName = i4977[1]
  i4976.m_StyleName = i4977[2]
  i4976.m_PointSize = i4977[3]
  i4976.m_Scale = i4977[4]
  i4976.m_UnitsPerEM = i4977[5]
  i4976.m_LineHeight = i4977[6]
  i4976.m_AscentLine = i4977[7]
  i4976.m_CapLine = i4977[8]
  i4976.m_MeanLine = i4977[9]
  i4976.m_Baseline = i4977[10]
  i4976.m_DescentLine = i4977[11]
  i4976.m_SuperscriptOffset = i4977[12]
  i4976.m_SuperscriptSize = i4977[13]
  i4976.m_SubscriptOffset = i4977[14]
  i4976.m_SubscriptSize = i4977[15]
  i4976.m_UnderlineOffset = i4977[16]
  i4976.m_UnderlineThickness = i4977[17]
  i4976.m_StrikethroughOffset = i4977[18]
  i4976.m_StrikethroughThickness = i4977[19]
  i4976.m_TabWidth = i4977[20]
  return i4976
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i4980 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i4981 = data
  i4980.m_Index = i4981[0]
  i4980.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i4981[1], i4980.m_Metrics)
  i4980.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i4981[2], i4980.m_GlyphRect)
  i4980.m_Scale = i4981[3]
  i4980.m_AtlasIndex = i4981[4]
  i4980.m_ClassDefinitionType = i4981[5]
  return i4980
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i4982 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i4983 = data
  i4982.m_Width = i4983[0]
  i4982.m_Height = i4983[1]
  i4982.m_HorizontalBearingX = i4983[2]
  i4982.m_HorizontalBearingY = i4983[3]
  i4982.m_HorizontalAdvance = i4983[4]
  return i4982
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i4984 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i4985 = data
  i4984.m_X = i4985[0]
  i4984.m_Y = i4985[1]
  i4984.m_Width = i4985[2]
  i4984.m_Height = i4985[3]
  return i4984
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i4988 = root || request.c( 'TMPro.TMP_Character' )
  var i4989 = data
  i4988.m_ElementType = i4989[0]
  i4988.m_Unicode = i4989[1]
  i4988.m_GlyphIndex = i4989[2]
  i4988.m_Scale = i4989[3]
  return i4988
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i4994 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i4995 = data
  i4994.Name = i4995[0]
  i4994.PointSize = i4995[1]
  i4994.Scale = i4995[2]
  i4994.CharacterCount = i4995[3]
  i4994.LineHeight = i4995[4]
  i4994.Baseline = i4995[5]
  i4994.Ascender = i4995[6]
  i4994.CapHeight = i4995[7]
  i4994.Descender = i4995[8]
  i4994.CenterLine = i4995[9]
  i4994.SuperscriptOffset = i4995[10]
  i4994.SubscriptOffset = i4995[11]
  i4994.SubSize = i4995[12]
  i4994.Underline = i4995[13]
  i4994.UnderlineThickness = i4995[14]
  i4994.strikethrough = i4995[15]
  i4994.strikethroughThickness = i4995[16]
  i4994.TabWidth = i4995[17]
  i4994.Padding = i4995[18]
  i4994.AtlasWidth = i4995[19]
  i4994.AtlasHeight = i4995[20]
  return i4994
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i4998 = root || request.c( 'TMPro.TMP_Glyph' )
  var i4999 = data
  i4998.id = i4999[0]
  i4998.x = i4999[1]
  i4998.y = i4999[2]
  i4998.width = i4999[3]
  i4998.height = i4999[4]
  i4998.xOffset = i4999[5]
  i4998.yOffset = i4999[6]
  i4998.xAdvance = i4999[7]
  i4998.scale = i4999[8]
  return i4998
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i5000 = root || request.c( 'TMPro.KerningTable' )
  var i5001 = data
  var i5003 = i5001[0]
  var i5002 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i5003.length; i += 1) {
    i5002.add(request.d('TMPro.KerningPair', i5003[i + 0]));
  }
  i5000.kerningPairs = i5002
  return i5000
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i5006 = root || request.c( 'TMPro.KerningPair' )
  var i5007 = data
  i5006.xOffset = i5007[0]
  i5006.m_FirstGlyph = i5007[1]
  i5006.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5007[2], i5006.m_FirstGlyphAdjustments)
  i5006.m_SecondGlyph = i5007[3]
  i5006.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i5007[4], i5006.m_SecondGlyphAdjustments)
  i5006.m_IgnoreSpacingAdjustments = !!i5007[5]
  return i5006
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i5008 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i5009 = data
  var i5011 = i5009[0]
  var i5010 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i5011.length; i += 1) {
    i5010.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i5011[i + 0]));
  }
  i5008.m_GlyphPairAdjustmentRecords = i5010
  return i5008
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i5014 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i5015 = data
  i5014.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5015[0], i5014.m_FirstAdjustmentRecord)
  i5014.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i5015[1], i5014.m_SecondAdjustmentRecord)
  i5014.m_FeatureLookupFlags = i5015[2]
  return i5014
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i5016 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i5017 = data
  i5016.m_GlyphIndex = i5017[0]
  i5016.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i5017[1], i5016.m_GlyphValueRecord)
  return i5016
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i5018 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i5019 = data
  i5018.m_XPlacement = i5019[0]
  i5018.m_YPlacement = i5019[1]
  i5018.m_XAdvance = i5019[2]
  i5018.m_YAdvance = i5019[3]
  return i5018
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i5022 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i5023 = data
  i5022.sourceFontFileName = i5023[0]
  i5022.sourceFontFileGUID = i5023[1]
  i5022.pointSizeSamplingMode = i5023[2]
  i5022.pointSize = i5023[3]
  i5022.padding = i5023[4]
  i5022.packingMode = i5023[5]
  i5022.atlasWidth = i5023[6]
  i5022.atlasHeight = i5023[7]
  i5022.characterSetSelectionMode = i5023[8]
  i5022.characterSequence = i5023[9]
  i5022.referencedFontAssetGUID = i5023[10]
  i5022.referencedTextAssetGUID = i5023[11]
  i5022.fontStyle = i5023[12]
  i5022.fontStyleModifier = i5023[13]
  i5022.renderMode = i5023[14]
  i5022.includeFontFeatures = !!i5023[15]
  return i5022
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i5026 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i5027 = data
  request.r(i5027[0], i5027[1], 0, i5026, 'regularTypeface')
  request.r(i5027[2], i5027[3], 0, i5026, 'italicTypeface')
  return i5026
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i5028 = root || request.c( 'TMPro.TMP_Settings' )
  var i5029 = data
  i5028.m_enableWordWrapping = !!i5029[0]
  i5028.m_enableKerning = !!i5029[1]
  i5028.m_enableExtraPadding = !!i5029[2]
  i5028.m_enableTintAllSprites = !!i5029[3]
  i5028.m_enableParseEscapeCharacters = !!i5029[4]
  i5028.m_EnableRaycastTarget = !!i5029[5]
  i5028.m_GetFontFeaturesAtRuntime = !!i5029[6]
  i5028.m_missingGlyphCharacter = i5029[7]
  i5028.m_warningsDisabled = !!i5029[8]
  request.r(i5029[9], i5029[10], 0, i5028, 'm_defaultFontAsset')
  i5028.m_defaultFontAssetPath = i5029[11]
  i5028.m_defaultFontSize = i5029[12]
  i5028.m_defaultAutoSizeMinRatio = i5029[13]
  i5028.m_defaultAutoSizeMaxRatio = i5029[14]
  i5028.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i5029[15], i5029[16] )
  i5028.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i5029[17], i5029[18] )
  i5028.m_autoSizeTextContainer = !!i5029[19]
  i5028.m_IsTextObjectScaleStatic = !!i5029[20]
  var i5031 = i5029[21]
  var i5030 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i5031.length; i += 2) {
  request.r(i5031[i + 0], i5031[i + 1], 1, i5030, '')
  }
  i5028.m_fallbackFontAssets = i5030
  i5028.m_matchMaterialPreset = !!i5029[22]
  request.r(i5029[23], i5029[24], 0, i5028, 'm_defaultSpriteAsset')
  i5028.m_defaultSpriteAssetPath = i5029[25]
  i5028.m_enableEmojiSupport = !!i5029[26]
  i5028.m_MissingCharacterSpriteUnicode = i5029[27]
  i5028.m_defaultColorGradientPresetsPath = i5029[28]
  request.r(i5029[29], i5029[30], 0, i5028, 'm_defaultStyleSheet')
  i5028.m_StyleSheetsResourcePath = i5029[31]
  request.r(i5029[32], i5029[33], 0, i5028, 'm_leadingCharacters')
  request.r(i5029[34], i5029[35], 0, i5028, 'm_followingCharacters')
  i5028.m_UseModernHangulLineBreakingRules = !!i5029[36]
  return i5028
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i5032 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i5033 = data
  i5032.hashCode = i5033[0]
  request.r(i5033[1], i5033[2], 0, i5032, 'material')
  i5032.materialHashCode = i5033[3]
  request.r(i5033[4], i5033[5], 0, i5032, 'spriteSheet')
  var i5035 = i5033[6]
  var i5034 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.add(request.d('TMPro.TMP_Sprite', i5035[i + 0]));
  }
  i5032.spriteInfoList = i5034
  var i5037 = i5033[7]
  var i5036 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i5037.length; i += 2) {
  request.r(i5037[i + 0], i5037[i + 1], 1, i5036, '')
  }
  i5032.fallbackSpriteAssets = i5036
  i5032.m_Version = i5033[8]
  i5032.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i5033[9], i5032.m_FaceInfo)
  var i5039 = i5033[10]
  var i5038 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i5039.length; i += 1) {
    i5038.add(request.d('TMPro.TMP_SpriteCharacter', i5039[i + 0]));
  }
  i5032.m_SpriteCharacterTable = i5038
  var i5041 = i5033[11]
  var i5040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i5041.length; i += 1) {
    i5040.add(request.d('TMPro.TMP_SpriteGlyph', i5041[i + 0]));
  }
  i5032.m_SpriteGlyphTable = i5040
  return i5032
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i5044 = root || request.c( 'TMPro.TMP_Sprite' )
  var i5045 = data
  i5044.name = i5045[0]
  i5044.hashCode = i5045[1]
  i5044.unicode = i5045[2]
  i5044.pivot = new pc.Vec2( i5045[3], i5045[4] )
  request.r(i5045[5], i5045[6], 0, i5044, 'sprite')
  i5044.id = i5045[7]
  i5044.x = i5045[8]
  i5044.y = i5045[9]
  i5044.width = i5045[10]
  i5044.height = i5045[11]
  i5044.xOffset = i5045[12]
  i5044.yOffset = i5045[13]
  i5044.xAdvance = i5045[14]
  i5044.scale = i5045[15]
  return i5044
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i5050 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i5051 = data
  i5050.m_Name = i5051[0]
  i5050.m_HashCode = i5051[1]
  i5050.m_ElementType = i5051[2]
  i5050.m_Unicode = i5051[3]
  i5050.m_GlyphIndex = i5051[4]
  i5050.m_Scale = i5051[5]
  return i5050
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i5054 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i5055 = data
  request.r(i5055[0], i5055[1], 0, i5054, 'sprite')
  i5054.m_Index = i5055[2]
  i5054.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i5055[3], i5054.m_Metrics)
  i5054.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i5055[4], i5054.m_GlyphRect)
  i5054.m_Scale = i5055[5]
  i5054.m_AtlasIndex = i5055[6]
  i5054.m_ClassDefinitionType = i5055[7]
  return i5054
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i5056 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i5057 = data
  var i5059 = i5057[0]
  var i5058 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i5059.length; i += 1) {
    i5058.add(request.d('TMPro.TMP_Style', i5059[i + 0]));
  }
  i5056.m_StyleList = i5058
  return i5056
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i5062 = root || request.c( 'TMPro.TMP_Style' )
  var i5063 = data
  i5062.m_Name = i5063[0]
  i5062.m_HashCode = i5063[1]
  i5062.m_OpeningDefinition = i5063[2]
  i5062.m_ClosingDefinition = i5063[3]
  i5062.m_OpeningTagArray = i5063[4]
  i5062.m_ClosingTagArray = i5063[5]
  i5062.m_OpeningTagUnicodeArray = i5063[6]
  i5062.m_ClosingTagUnicodeArray = i5063[7]
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5065 = data
  var i5067 = i5065[0]
  var i5066 = []
  for(var i = 0; i < i5067.length; i += 1) {
    i5066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5067[i + 0]) );
  }
  i5064.files = i5066
  i5064.componentToPrefabIds = i5065[1]
  return i5064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5071 = data
  i5070.path = i5071[0]
  request.r(i5071[1], i5071[2], 0, i5070, 'unityObject')
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5073 = data
  var i5075 = i5073[0]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 1) {
    i5074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5075[i + 0]) );
  }
  i5072.scriptsExecutionOrder = i5074
  var i5077 = i5073[1]
  var i5076 = []
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5077[i + 0]) );
  }
  i5072.sortingLayers = i5076
  var i5079 = i5073[2]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5079[i + 0]) );
  }
  i5072.cullingLayers = i5078
  i5072.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5073[3], i5072.timeSettings)
  i5072.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5073[4], i5072.physicsSettings)
  i5072.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5073[5], i5072.physics2DSettings)
  i5072.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5073[6], i5072.qualitySettings)
  i5072.enableRealtimeShadows = !!i5073[7]
  i5072.enableAutoInstancing = !!i5073[8]
  i5072.enableDynamicBatching = !!i5073[9]
  i5072.lightmapEncodingQuality = i5073[10]
  i5072.desiredColorSpace = i5073[11]
  var i5081 = i5073[12]
  var i5080 = []
  for(var i = 0; i < i5081.length; i += 1) {
    i5080.push( i5081[i + 0] );
  }
  i5072.allTags = i5080
  return i5072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5085 = data
  i5084.name = i5085[0]
  i5084.value = i5085[1]
  return i5084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5089 = data
  i5088.id = i5089[0]
  i5088.name = i5089[1]
  i5088.value = i5089[2]
  return i5088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5093 = data
  i5092.id = i5093[0]
  i5092.name = i5093[1]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5095 = data
  i5094.fixedDeltaTime = i5095[0]
  i5094.maximumDeltaTime = i5095[1]
  i5094.timeScale = i5095[2]
  i5094.maximumParticleTimestep = i5095[3]
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5097 = data
  i5096.gravity = new pc.Vec3( i5097[0], i5097[1], i5097[2] )
  i5096.defaultSolverIterations = i5097[3]
  i5096.bounceThreshold = i5097[4]
  i5096.autoSyncTransforms = !!i5097[5]
  i5096.autoSimulation = !!i5097[6]
  var i5099 = i5097[7]
  var i5098 = []
  for(var i = 0; i < i5099.length; i += 1) {
    i5098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5099[i + 0]) );
  }
  i5096.collisionMatrix = i5098
  return i5096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5103 = data
  i5102.enabled = !!i5103[0]
  i5102.layerId = i5103[1]
  i5102.otherLayerId = i5103[2]
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5105 = data
  request.r(i5105[0], i5105[1], 0, i5104, 'material')
  i5104.gravity = new pc.Vec2( i5105[2], i5105[3] )
  i5104.positionIterations = i5105[4]
  i5104.velocityIterations = i5105[5]
  i5104.velocityThreshold = i5105[6]
  i5104.maxLinearCorrection = i5105[7]
  i5104.maxAngularCorrection = i5105[8]
  i5104.maxTranslationSpeed = i5105[9]
  i5104.maxRotationSpeed = i5105[10]
  i5104.baumgarteScale = i5105[11]
  i5104.baumgarteTOIScale = i5105[12]
  i5104.timeToSleep = i5105[13]
  i5104.linearSleepTolerance = i5105[14]
  i5104.angularSleepTolerance = i5105[15]
  i5104.defaultContactOffset = i5105[16]
  i5104.autoSimulation = !!i5105[17]
  i5104.queriesHitTriggers = !!i5105[18]
  i5104.queriesStartInColliders = !!i5105[19]
  i5104.callbacksOnDisable = !!i5105[20]
  i5104.reuseCollisionCallbacks = !!i5105[21]
  i5104.autoSyncTransforms = !!i5105[22]
  var i5107 = i5105[23]
  var i5106 = []
  for(var i = 0; i < i5107.length; i += 1) {
    i5106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5107[i + 0]) );
  }
  i5104.collisionMatrix = i5106
  return i5104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5111 = data
  i5110.enabled = !!i5111[0]
  i5110.layerId = i5111[1]
  i5110.otherLayerId = i5111[2]
  return i5110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5113 = data
  var i5115 = i5113[0]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5115[i + 0]) );
  }
  i5112.qualityLevels = i5114
  var i5117 = i5113[1]
  var i5116 = []
  for(var i = 0; i < i5117.length; i += 1) {
    i5116.push( i5117[i + 0] );
  }
  i5112.names = i5116
  i5112.shadows = i5113[2]
  i5112.anisotropicFiltering = i5113[3]
  i5112.antiAliasing = i5113[4]
  i5112.lodBias = i5113[5]
  i5112.shadowCascades = i5113[6]
  i5112.shadowDistance = i5113[7]
  i5112.shadowmaskMode = i5113[8]
  i5112.shadowProjection = i5113[9]
  i5112.shadowResolution = i5113[10]
  i5112.softParticles = !!i5113[11]
  i5112.softVegetation = !!i5113[12]
  i5112.activeColorSpace = i5113[13]
  i5112.desiredColorSpace = i5113[14]
  i5112.masterTextureLimit = i5113[15]
  i5112.maxQueuedFrames = i5113[16]
  i5112.particleRaycastBudget = i5113[17]
  i5112.pixelLightCount = i5113[18]
  i5112.realtimeReflectionProbes = !!i5113[19]
  i5112.shadowCascade2Split = i5113[20]
  i5112.shadowCascade4Split = new pc.Vec3( i5113[21], i5113[22], i5113[23] )
  i5112.streamingMipmapsActive = !!i5113[24]
  i5112.vSyncCount = i5113[25]
  i5112.asyncUploadBufferSize = i5113[26]
  i5112.asyncUploadTimeSlice = i5113[27]
  i5112.billboardsFaceCameraPosition = !!i5113[28]
  i5112.shadowNearPlaneOffset = i5113[29]
  i5112.streamingMipmapsMemoryBudget = i5113[30]
  i5112.maximumLODLevel = i5113[31]
  i5112.streamingMipmapsAddAllCameras = !!i5113[32]
  i5112.streamingMipmapsMaxLevelReduction = i5113[33]
  i5112.streamingMipmapsRenderersPerFrame = i5113[34]
  i5112.resolutionScalingFixedDPIFactor = i5113[35]
  i5112.streamingMipmapsMaxFileIORequests = i5113[36]
  i5112.currentQualityLevel = i5113[37]
  return i5112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i5120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i5121 = data
  i5120.name = i5121[0]
  var i5123 = i5121[1]
  var i5122 = []
  for(var i = 0; i < i5123.length; i += 1) {
    i5122.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i5123[i + 0]) );
  }
  i5120.tos = i5122
  var i5125 = i5121[2]
  var i5124 = []
  for(var i = 0; i < i5125.length; i += 1) {
    i5124.push( i5125[i + 0] );
  }
  i5120.constant = i5124
  i5120.isValid = !!i5121[3]
  i5120.isHuman = !!i5121[4]
  i5120.hasRootMotion = !!i5121[5]
  return i5120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i5128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i5129 = data
  i5128.hash = i5129[0]
  i5128.path = i5129[1]
  return i5128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i5132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i5133 = data
  i5132.weight = i5133[0]
  i5132.vertices = i5133[1]
  i5132.normals = i5133[2]
  i5132.tangents = i5133[3]
  return i5132
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i5134 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i5135 = data
  i5134.xPlacement = i5135[0]
  i5134.yPlacement = i5135[1]
  i5134.xAdvance = i5135[2]
  i5134.yAdvance = i5135[3]
  return i5134
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[10],"67":[15],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[15],"91":[5],"92":[93],"94":[93],"30":[18],"95":[18],"96":[5,18],"34":[18,21],"97":[18],"98":[21,18],"99":[5],"100":[21,18],"101":[18],"102":[103],"104":[18],"105":[18],"32":[30],"23":[21,18],"106":[18],"31":[30],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"115":[18],"116":[21,18],"117":[18],"118":[18],"119":[18],"120":[18],"121":[21,18],"122":[18],"123":[27],"124":[27],"28":[27],"125":[27],"126":[15],"127":[15],"128":[103],"129":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","BotParachute","UnityEngine.GameObject","ParachuteController","UnityEditor.Animations.AnimatorController","BotController","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","PathManager","ConfigManager","StepManager","BotManager","AudioManager","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "8.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1543";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3921";

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

Deserializers.buildID = "c758aed6-6c67-4610-9aa6-1edf261f093c";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

