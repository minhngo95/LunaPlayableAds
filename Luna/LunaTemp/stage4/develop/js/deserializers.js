var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointSpring' )
  var i547 = data
  i546.spring = i547[0]
  i546.damper = i547[1]
  i546.targetPosition = i547[2]
  return i546
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor' )
  var i549 = data
  i548.m_TargetVelocity = i549[0]
  i548.m_Force = i549[1]
  i548.m_FreeSpin = i549[2]
  return i548
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointLimits' )
  var i551 = data
  i550.m_Min = i551[0]
  i550.m_Max = i551[1]
  i550.m_Bounciness = i551[2]
  i550.m_BounceMinVelocity = i551[3]
  i550.m_ContactDistance = i551[4]
  i550.minBounce = i551[5]
  i550.maxBounce = i551[6]
  return i550
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointDrive' )
  var i553 = data
  i552.m_PositionSpring = i553[0]
  i552.m_PositionDamper = i553[1]
  i552.m_MaximumForce = i553[2]
  return i552
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i555 = data
  i554.m_Spring = i555[0]
  i554.m_Damper = i555[1]
  return i554
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i557 = data
  i556.m_Limit = i557[0]
  i556.m_Bounciness = i557[1]
  i556.m_ContactDistance = i557[2]
  return i556
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i559 = data
  i558.m_ExtremumSlip = i559[0]
  i558.m_ExtremumValue = i559[1]
  i558.m_AsymptoteSlip = i559[2]
  i558.m_AsymptoteValue = i559[3]
  i558.m_Stiffness = i559[4]
  return i558
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i561 = data
  i560.m_LowerAngle = i561[0]
  i560.m_UpperAngle = i561[1]
  return i560
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i563 = data
  i562.m_MotorSpeed = i563[0]
  i562.m_MaximumMotorTorque = i563[1]
  return i562
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i565 = data
  i564.m_DampingRatio = i565[0]
  i564.m_Frequency = i565[1]
  i564.m_Angle = i565[2]
  return i564
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i567 = data
  i566.m_LowerTranslation = i567[0]
  i566.m_UpperTranslation = i567[1]
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i568 = root || new pc.UnityMaterial()
  var i569 = data
  i568.name = i569[0]
  request.r(i569[1], i569[2], 0, i568, 'shader')
  i568.renderQueue = i569[3]
  i568.enableInstancing = !!i569[4]
  var i571 = i569[5]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i571[i + 0]) );
  }
  i568.floatParameters = i570
  var i573 = i569[6]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i573[i + 0]) );
  }
  i568.colorParameters = i572
  var i575 = i569[7]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i575[i + 0]) );
  }
  i568.vectorParameters = i574
  var i577 = i569[8]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i577[i + 0]) );
  }
  i568.textureParameters = i576
  var i579 = i569[9]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i579[i + 0]) );
  }
  i568.materialFlags = i578
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i583 = data
  i582.name = i583[0]
  i582.value = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i587 = data
  i586.name = i587[0]
  i586.value = new pc.Color(i587[1], i587[2], i587[3], i587[4])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i591 = data
  i590.name = i591[0]
  i590.value = new pc.Vec4( i591[1], i591[2], i591[3], i591[4] )
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i595 = data
  i594.name = i595[0]
  request.r(i595[1], i595[2], 0, i594, 'value')
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i599 = data
  i598.name = i599[0]
  i598.enabled = !!i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i601 = data
  i600.name = i601[0]
  i600.width = i601[1]
  i600.height = i601[2]
  i600.mipmapCount = i601[3]
  i600.anisoLevel = i601[4]
  i600.filterMode = i601[5]
  i600.hdr = !!i601[6]
  i600.format = i601[7]
  i600.wrapMode = i601[8]
  i600.alphaIsTransparency = !!i601[9]
  i600.alphaSource = i601[10]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i603 = data
  i602.position = new pc.Vec3( i603[0], i603[1], i603[2] )
  i602.scale = new pc.Vec3( i603[3], i603[4], i603[5] )
  i602.rotation = new pc.Quat(i603[6], i603[7], i603[8], i603[9])
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'sharedMesh')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i607 = data
  request.r(i607[0], i607[1], 0, i606, 'additionalVertexStreams')
  i606.enabled = !!i607[2]
  request.r(i607[3], i607[4], 0, i606, 'sharedMaterial')
  var i609 = i607[5]
  var i608 = []
  for(var i = 0; i < i609.length; i += 2) {
  request.r(i609[i + 0], i609[i + 1], 2, i608, '')
  }
  i606.sharedMaterials = i608
  i606.receiveShadows = !!i607[6]
  i606.shadowCastingMode = i607[7]
  i606.sortingLayerID = i607[8]
  i606.sortingOrder = i607[9]
  i606.lightmapIndex = i607[10]
  i606.lightmapSceneIndex = i607[11]
  i606.lightmapScaleOffset = new pc.Vec4( i607[12], i607[13], i607[14], i607[15] )
  i606.lightProbeUsage = i607[16]
  i606.reflectionProbeUsage = i607[17]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i613 = data
  i612.name = i613[0]
  i612.tagId = i613[1]
  i612.enabled = !!i613[2]
  i612.isStatic = !!i613[3]
  i612.layer = i613[4]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i615 = data
  i614.name = i615[0]
  i614.halfPrecision = !!i615[1]
  i614.vertexCount = i615[2]
  i614.aabb = i615[3]
  var i617 = i615[4]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( !!i617[i + 0] );
  }
  i614.streams = i616
  i614.vertices = i615[5]
  var i619 = i615[6]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i619[i + 0]) );
  }
  i614.subMeshes = i618
  var i621 = i615[7]
  var i620 = []
  for(var i = 0; i < i621.length; i += 16) {
    i620.push( new pc.Mat4().setData(i621[i + 0], i621[i + 1], i621[i + 2], i621[i + 3],  i621[i + 4], i621[i + 5], i621[i + 6], i621[i + 7],  i621[i + 8], i621[i + 9], i621[i + 10], i621[i + 11],  i621[i + 12], i621[i + 13], i621[i + 14], i621[i + 15]) );
  }
  i614.bindposes = i620
  var i623 = i615[8]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i623[i + 0]) );
  }
  i614.blendShapes = i622
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i629 = data
  i628.triangles = i629[0]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i635 = data
  i634.name = i635[0]
  var i637 = i635[1]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i637[i + 0]) );
  }
  i634.frames = i636
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i639 = data
  request.r(i639[0], i639[1], 0, i638, 'animatorController')
  request.r(i639[2], i639[3], 0, i638, 'avatar')
  i638.updateMode = i639[4]
  i638.hasTransformHierarchy = !!i639[5]
  i638.applyRootMotion = !!i639[6]
  var i641 = i639[7]
  var i640 = []
  for(var i = 0; i < i641.length; i += 2) {
  request.r(i641[i + 0], i641[i + 1], 2, i640, '')
  }
  i638.humanBones = i640
  i638.enabled = !!i639[8]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i645 = data
  i644.enabled = !!i645[0]
  request.r(i645[1], i645[2], 0, i644, 'sharedMaterial')
  var i647 = i645[3]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i644.sharedMaterials = i646
  i644.receiveShadows = !!i645[4]
  i644.shadowCastingMode = i645[5]
  i644.sortingLayerID = i645[6]
  i644.sortingOrder = i645[7]
  i644.lightmapIndex = i645[8]
  i644.lightmapSceneIndex = i645[9]
  i644.lightmapScaleOffset = new pc.Vec4( i645[10], i645[11], i645[12], i645[13] )
  i644.lightProbeUsage = i645[14]
  i644.reflectionProbeUsage = i645[15]
  request.r(i645[16], i645[17], 0, i644, 'sharedMesh')
  var i649 = i645[18]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i644.bones = i648
  i644.updateWhenOffscreen = !!i645[19]
  i644.localBounds = i645[20]
  request.r(i645[21], i645[22], 0, i644, 'rootBone')
  var i651 = i645[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i651[i + 0]) );
  }
  i644.blendShapesWeights = i650
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i655 = data
  i654.weight = i655[0]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i657 = data
  i656.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i657[0], i656.main)
  i656.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i657[1], i656.colorBySpeed)
  i656.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i657[2], i656.colorOverLifetime)
  i656.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i657[3], i656.emission)
  i656.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i657[4], i656.rotationBySpeed)
  i656.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i657[5], i656.rotationOverLifetime)
  i656.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i657[6], i656.shape)
  i656.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i657[7], i656.sizeBySpeed)
  i656.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i657[8], i656.sizeOverLifetime)
  i656.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i657[9], i656.textureSheetAnimation)
  i656.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i657[10], i656.velocityOverLifetime)
  i656.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i657[11], i656.noise)
  i656.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i657[12], i656.inheritVelocity)
  i656.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i657[13], i656.forceOverLifetime)
  i656.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i657[14], i656.limitVelocityOverLifetime)
  i656.useAutoRandomSeed = !!i657[15]
  i656.randomSeed = i657[16]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemMain()
  var i659 = data
  i658.duration = i659[0]
  i658.loop = !!i659[1]
  i658.prewarm = !!i659[2]
  i658.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[3], i658.startDelay)
  i658.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[4], i658.startLifetime)
  i658.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[5], i658.startSpeed)
  i658.startSize3D = !!i659[6]
  i658.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[7], i658.startSizeX)
  i658.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[8], i658.startSizeY)
  i658.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[9], i658.startSizeZ)
  i658.startRotation3D = !!i659[10]
  i658.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[11], i658.startRotationX)
  i658.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[12], i658.startRotationY)
  i658.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[13], i658.startRotationZ)
  i658.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[14], i658.startColor)
  i658.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[15], i658.gravityModifier)
  i658.simulationSpace = i659[16]
  request.r(i659[17], i659[18], 0, i658, 'customSimulationSpace')
  i658.simulationSpeed = i659[19]
  i658.useUnscaledTime = !!i659[20]
  i658.scalingMode = i659[21]
  i658.playOnAwake = !!i659[22]
  i658.maxParticles = i659[23]
  i658.emitterVelocityMode = i659[24]
  i658.stopAction = i659[25]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i660 = root || new pc.MinMaxCurve()
  var i661 = data
  i660.mode = i661[0]
  i660.curveMin = new pc.AnimationCurve( { keys_flow: i661[1] } )
  i660.curveMax = new pc.AnimationCurve( { keys_flow: i661[2] } )
  i660.curveMultiplier = i661[3]
  i660.constantMin = i661[4]
  i660.constantMax = i661[5]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i662 = root || new pc.MinMaxGradient()
  var i663 = data
  i662.mode = i663[0]
  i662.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[1], i662.gradientMin)
  i662.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i663[2], i662.gradientMax)
  i662.colorMin = new pc.Color(i663[3], i663[4], i663[5], i663[6])
  i662.colorMax = new pc.Color(i663[7], i663[8], i663[9], i663[10])
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i665 = data
  i664.mode = i665[0]
  var i667 = i665[1]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i667[i + 0]) );
  }
  i664.colorKeys = i666
  var i669 = i665[2]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i669[i + 0]) );
  }
  i664.alphaKeys = i668
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemColorBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i671[1], i670.color)
  i670.range = new pc.Vec2( i671[2], i671[3] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i675 = data
  i674.color = new pc.Color(i675[0], i675[1], i675[2], i675[3])
  i674.time = i675[4]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i679 = data
  i678.alpha = i679[0]
  i678.time = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemColorOverLifetime()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i681[1], i680.color)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemEmitter()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.rateOverTime)
  i682.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.rateOverDistance)
  var i685 = i683[3]
  var i684 = []
  for(var i = 0; i < i685.length; i += 1) {
    i684.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i685[i + 0]) );
  }
  i682.bursts = i684
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemBurst()
  var i689 = data
  i688.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[0], i688.count)
  i688.cycleCount = i689[1]
  i688.minCount = i689[2]
  i688.maxCount = i689[3]
  i688.repeatInterval = i689[4]
  i688.time = i689[5]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemRotationBySpeed()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.separateAxes = !!i691[4]
  i690.range = new pc.Vec2( i691[5], i691[6] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemRotationOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.separateAxes = !!i693[4]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemShape()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.shapeType = i695[1]
  i694.randomDirectionAmount = i695[2]
  i694.sphericalDirectionAmount = i695[3]
  i694.randomPositionAmount = i695[4]
  i694.alignToDirection = !!i695[5]
  i694.radius = i695[6]
  i694.radiusMode = i695[7]
  i694.radiusSpread = i695[8]
  i694.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[9], i694.radiusSpeed)
  i694.radiusThickness = i695[10]
  i694.angle = i695[11]
  i694.length = i695[12]
  i694.boxThickness = new pc.Vec3( i695[13], i695[14], i695[15] )
  i694.meshShapeType = i695[16]
  request.r(i695[17], i695[18], 0, i694, 'mesh')
  request.r(i695[19], i695[20], 0, i694, 'meshRenderer')
  request.r(i695[21], i695[22], 0, i694, 'skinnedMeshRenderer')
  i694.useMeshMaterialIndex = !!i695[23]
  i694.meshMaterialIndex = i695[24]
  i694.useMeshColors = !!i695[25]
  i694.normalOffset = i695[26]
  i694.arc = i695[27]
  i694.arcMode = i695[28]
  i694.arcSpread = i695[29]
  i694.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[30], i694.arcSpeed)
  i694.donutRadius = i695[31]
  i694.position = new pc.Vec3( i695[32], i695[33], i695[34] )
  i694.rotation = new pc.Vec3( i695[35], i695[36], i695[37] )
  i694.scale = new pc.Vec3( i695[38], i695[39], i695[40] )
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i696 = root || new pc.ParticleSystemSizeBySpeed()
  var i697 = data
  i696.enabled = !!i697[0]
  i696.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[1], i696.x)
  i696.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[2], i696.y)
  i696.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i697[3], i696.z)
  i696.separateAxes = !!i697[4]
  i696.range = new pc.Vec2( i697[5], i697[6] )
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i698 = root || new pc.ParticleSystemSizeOverLifetime()
  var i699 = data
  i698.enabled = !!i699[0]
  i698.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[1], i698.x)
  i698.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[2], i698.y)
  i698.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i699[3], i698.z)
  i698.separateAxes = !!i699[4]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i701 = data
  i700.enabled = !!i701[0]
  i700.mode = i701[1]
  i700.animation = i701[2]
  i700.numTilesX = i701[3]
  i700.numTilesY = i701[4]
  i700.useRandomRow = !!i701[5]
  i700.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[6], i700.frameOverTime)
  i700.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[7], i700.startFrame)
  i700.cycleCount = i701[8]
  i700.rowIndex = i701[9]
  i700.flipU = i701[10]
  i700.flipV = i701[11]
  i700.spriteCount = i701[12]
  var i703 = i701[13]
  var i702 = []
  for(var i = 0; i < i703.length; i += 2) {
  request.r(i703[i + 0], i703[i + 1], 2, i702, '')
  }
  i700.sprites = i702
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[1], i706.x)
  i706.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[2], i706.y)
  i706.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[3], i706.z)
  i706.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[4], i706.radial)
  i706.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[5], i706.speedModifier)
  i706.space = i707[6]
  i706.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[7], i706.orbitalX)
  i706.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[8], i706.orbitalY)
  i706.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.orbitalZ)
  i706.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[10], i706.orbitalOffsetX)
  i706.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[11], i706.orbitalOffsetY)
  i706.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[12], i706.orbitalOffsetZ)
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemNoise()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.separateAxes = !!i709[1]
  i708.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.strengthX)
  i708.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.strengthY)
  i708.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[4], i708.strengthZ)
  i708.frequency = i709[5]
  i708.damping = !!i709[6]
  i708.octaveCount = i709[7]
  i708.octaveMultiplier = i709[8]
  i708.octaveScale = i709[9]
  i708.quality = i709[10]
  i708.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[11], i708.scrollSpeed)
  i708.scrollSpeedMultiplier = i709[12]
  i708.remapEnabled = !!i709[13]
  i708.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[14], i708.remapX)
  i708.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[15], i708.remapY)
  i708.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[16], i708.remapZ)
  i708.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[17], i708.positionAmount)
  i708.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[18], i708.rotationAmount)
  i708.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[19], i708.sizeAmount)
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemInheritVelocity()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.mode = i711[1]
  i710.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.curve)
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemForceOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[1], i712.x)
  i712.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[2], i712.y)
  i712.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[3], i712.z)
  i712.space = i713[4]
  i712.randomized = !!i713[5]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.limit)
  i714.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.limitX)
  i714.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[3], i714.limitY)
  i714.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[4], i714.limitZ)
  i714.dampen = i715[5]
  i714.separateAxes = !!i715[6]
  i714.space = i715[7]
  i714.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[8], i714.drag)
  i714.multiplyDragByParticleSize = !!i715[9]
  i714.multiplyDragByParticleVelocity = !!i715[10]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i717 = data
  i716.enabled = !!i717[0]
  request.r(i717[1], i717[2], 0, i716, 'sharedMaterial')
  var i719 = i717[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 2) {
  request.r(i719[i + 0], i719[i + 1], 2, i718, '')
  }
  i716.sharedMaterials = i718
  i716.receiveShadows = !!i717[4]
  i716.shadowCastingMode = i717[5]
  i716.sortingLayerID = i717[6]
  i716.sortingOrder = i717[7]
  i716.lightmapIndex = i717[8]
  i716.lightmapSceneIndex = i717[9]
  i716.lightmapScaleOffset = new pc.Vec4( i717[10], i717[11], i717[12], i717[13] )
  i716.lightProbeUsage = i717[14]
  i716.reflectionProbeUsage = i717[15]
  request.r(i717[16], i717[17], 0, i716, 'mesh')
  i716.meshCount = i717[18]
  i716.activeVertexStreamsCount = i717[19]
  i716.alignment = i717[20]
  i716.renderMode = i717[21]
  i716.sortMode = i717[22]
  i716.lengthScale = i717[23]
  i716.velocityScale = i717[24]
  i716.cameraVelocityScale = i717[25]
  i716.normalDirection = i717[26]
  i716.sortingFudge = i717[27]
  i716.minParticleSize = i717[28]
  i716.maxParticleSize = i717[29]
  i716.pivot = new pc.Vec3( i717[30], i717[31], i717[32] )
  request.r(i717[33], i717[34], 0, i716, 'trailMaterial')
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'clip')
  request.r(i721[2], i721[3], 0, i720, 'outputAudioMixerGroup')
  i720.playOnAwake = !!i721[4]
  i720.loop = !!i721[5]
  i720.time = i721[6]
  i720.volume = i721[7]
  i720.pitch = i721[8]
  i720.enabled = !!i721[9]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i723 = data
  i722.enabled = !!i723[0]
  i722.isTrigger = !!i723[1]
  request.r(i723[2], i723[3], 0, i722, 'material')
  request.r(i723[4], i723[5], 0, i722, 'sharedMesh')
  i722.convex = !!i723[6]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.aspect = i725[1]
  i724.orthographic = !!i725[2]
  i724.orthographicSize = i725[3]
  i724.backgroundColor = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.nearClipPlane = i725[8]
  i724.farClipPlane = i725[9]
  i724.fieldOfView = i725[10]
  i724.depth = i725[11]
  i724.clearFlags = i725[12]
  i724.cullingMask = i725[13]
  i724.rect = i725[14]
  request.r(i725[15], i725[16], 0, i724, 'targetTexture')
  i724.usePhysicalProperties = !!i725[17]
  i724.focalLength = i725[18]
  i724.sensorSize = new pc.Vec2( i725[19], i725[20] )
  i724.lensShift = new pc.Vec2( i725[21], i725[22] )
  i724.gateFit = i725[23]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i727 = data
  i726.center = new pc.Vec3( i727[0], i727[1], i727[2] )
  i726.size = new pc.Vec3( i727[3], i727[4], i727[5] )
  i726.enabled = !!i727[6]
  i726.isTrigger = !!i727[7]
  request.r(i727[8], i727[9], 0, i726, 'material')
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i729 = data
  i728.pivot = new pc.Vec2( i729[0], i729[1] )
  i728.anchorMin = new pc.Vec2( i729[2], i729[3] )
  i728.anchorMax = new pc.Vec2( i729[4], i729[5] )
  i728.sizeDelta = new pc.Vec2( i729[6], i729[7] )
  i728.anchoredPosition3D = new pc.Vec3( i729[8], i729[9], i729[10] )
  i728.rotation = new pc.Quat(i729[11], i729[12], i729[13], i729[14])
  i728.scale = new pc.Vec3( i729[15], i729[16], i729[17] )
  return i728
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i730 = root || request.c( 'UICrosshairItem' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'CrosshairRectTransform')
  i730._distanceMax = i731[2]
  i730._distanceMin = i731[3]
  i730._speedShrink = i731[4]
  i730._currentSpeed = i731[5]
  i730._rateOnMove = i731[6]
  i730._rateOnAttack = i731[7]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i733 = data
  i732.cullTransparentMesh = !!i733[0]
  return i732
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.UI.Image' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_Sprite')
  i734.m_Type = i735[2]
  i734.m_PreserveAspect = !!i735[3]
  i734.m_FillCenter = !!i735[4]
  i734.m_FillMethod = i735[5]
  i734.m_FillAmount = i735[6]
  i734.m_FillClockwise = !!i735[7]
  i734.m_FillOrigin = i735[8]
  i734.m_UseSpriteMesh = !!i735[9]
  i734.m_PixelsPerUnitMultiplier = i735[10]
  request.r(i735[11], i735[12], 0, i734, 'm_Material')
  i734.m_Maskable = !!i735[13]
  i734.m_Color = new pc.Color(i735[14], i735[15], i735[16], i735[17])
  i734.m_RaycastTarget = !!i735[18]
  i734.m_RaycastPadding = new pc.Vec4( i735[19], i735[20], i735[21], i735[22] )
  return i734
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i736 = root || request.c( 'BulletTrail' )
  var i737 = data
  i736.Speed = i737[0]
  i736.LifeTime = i737[1]
  request.r(i737[2], i737[3], 0, i736, '_trail')
  i736._trailStartScale = new pc.Vec3( i737[4], i737[5], i737[6] )
  i736._trailMaxScale = new pc.Vec3( i737[7], i737[8], i737[9] )
  i736._trailLengthAtMaxScale = i737[10]
  return i736
}

Deserializers["Effect"] = function (request, data, root) {
  var i738 = root || request.c( 'Effect' )
  var i739 = data
  var i741 = i739[0]
  var i740 = []
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 2, i740, '')
  }
  i738.particles = i740
  i738._lifeTime = i739[1]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i745 = data
  i744.name = i745[0]
  i744.atlasId = i745[1]
  i744.mipmapCount = i745[2]
  i744.hdr = !!i745[3]
  i744.size = i745[4]
  i744.anisoLevel = i745[5]
  i744.filterMode = i745[6]
  i744.wrapMode = i745[7]
  var i747 = i745[8]
  var i746 = []
  for(var i = 0; i < i747.length; i += 4) {
    i746.push( UnityEngine.Rect.MinMaxRect(i747[i + 0], i747[i + 1], i747[i + 2], i747[i + 3]) );
  }
  i744.rects = i746
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i751 = data
  i750.name = i751[0]
  i750.index = i751[1]
  i750.startup = !!i751[2]
  return i750
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_FirstSelected')
  i752.m_sendNavigationEvents = !!i753[2]
  i752.m_DragThreshold = i753[3]
  return i752
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i755 = data
  i754.m_HorizontalAxis = i755[0]
  i754.m_VerticalAxis = i755[1]
  i754.m_SubmitButton = i755[2]
  i754.m_CancelButton = i755[3]
  i754.m_InputActionsPerSecond = i755[4]
  i754.m_RepeatDelay = i755[5]
  i754.m_ForceModuleActive = !!i755[6]
  i754.m_SendPointerHoverToParent = !!i755[7]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.planeDistance = i757[1]
  i756.referencePixelsPerUnit = i757[2]
  i756.isFallbackOverlay = !!i757[3]
  i756.renderMode = i757[4]
  i756.renderOrder = i757[5]
  i756.sortingLayerName = i757[6]
  i756.sortingOrder = i757[7]
  i756.scaleFactor = i757[8]
  request.r(i757[9], i757[10], 0, i756, 'worldCamera')
  i756.overrideSorting = !!i757[11]
  i756.pixelPerfect = !!i757[12]
  i756.targetDisplay = i757[13]
  i756.overridePixelPerfect = !!i757[14]
  return i756
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i759 = data
  i758.m_UiScaleMode = i759[0]
  i758.m_ReferencePixelsPerUnit = i759[1]
  i758.m_ScaleFactor = i759[2]
  i758.m_ReferenceResolution = new pc.Vec2( i759[3], i759[4] )
  i758.m_ScreenMatchMode = i759[5]
  i758.m_MatchWidthOrHeight = i759[6]
  i758.m_PhysicalUnit = i759[7]
  i758.m_FallbackScreenDPI = i759[8]
  i758.m_DefaultSpriteDPI = i759[9]
  i758.m_DynamicPixelsPerUnit = i759[10]
  i758.m_PresetInfoIsWorld = !!i759[11]
  return i758
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i761 = data
  i760.m_IgnoreReversedGraphics = !!i761[0]
  i760.m_BlockingObjects = i761[1]
  i760.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i761[2] )
  return i760
}

Deserializers["UIManager"] = function (request, data, root) {
  var i762 = root || request.c( 'UIManager' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'StepText')
  i762.url = i763[2]
  request.r(i763[3], i763[4], 0, i762, 'InGame')
  request.r(i763[5], i763[6], 0, i762, 'EndGame')
  return i762
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.Text' )
  var i765 = data
  i764.m_FontData = request.d('UnityEngine.UI.FontData', i765[0], i764.m_FontData)
  i764.m_Text = i765[1]
  request.r(i765[2], i765[3], 0, i764, 'm_Material')
  i764.m_Maskable = !!i765[4]
  i764.m_Color = new pc.Color(i765[5], i765[6], i765[7], i765[8])
  i764.m_RaycastTarget = !!i765[9]
  i764.m_RaycastPadding = new pc.Vec4( i765[10], i765[11], i765[12], i765[13] )
  return i764
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.FontData' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Font')
  i766.m_FontSize = i767[2]
  i766.m_FontStyle = i767[3]
  i766.m_BestFit = !!i767[4]
  i766.m_MinSize = i767[5]
  i766.m_MaxSize = i767[6]
  i766.m_Alignment = i767[7]
  i766.m_AlignByGeometry = !!i767[8]
  i766.m_RichText = !!i767[9]
  i766.m_HorizontalOverflow = i767[10]
  i766.m_VerticalOverflow = i767[11]
  i766.m_LineSpacing = i767[12]
  return i766
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Button' )
  var i769 = data
  i768.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i769[0], i768.m_OnClick)
  i768.m_Navigation = request.d('UnityEngine.UI.Navigation', i769[1], i768.m_Navigation)
  i768.m_Transition = i769[2]
  i768.m_Colors = request.d('UnityEngine.UI.ColorBlock', i769[3], i768.m_Colors)
  i768.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i769[4], i768.m_SpriteState)
  i768.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i769[5], i768.m_AnimationTriggers)
  i768.m_Interactable = !!i769[6]
  request.r(i769[7], i769[8], 0, i768, 'm_TargetGraphic')
  return i768
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i771 = data
  i770.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i771[0], i770.m_PersistentCalls)
  return i770
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.Events.PersistentCall', i775[i + 0]));
  }
  i772.m_Calls = i774
  return i772
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_Target')
  i778.m_TargetAssemblyTypeName = i779[2]
  i778.m_MethodName = i779[3]
  i778.m_Mode = i779[4]
  i778.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i779[5], i778.m_Arguments)
  i778.m_CallState = i779[6]
  return i778
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_ObjectArgument')
  i780.m_ObjectArgumentAssemblyTypeName = i781[2]
  i780.m_IntArgument = i781[3]
  i780.m_FloatArgument = i781[4]
  i780.m_StringArgument = i781[5]
  i780.m_BoolArgument = !!i781[6]
  return i780
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i783 = data
  i782.m_Mode = i783[0]
  i782.m_WrapAround = !!i783[1]
  request.r(i783[2], i783[3], 0, i782, 'm_SelectOnUp')
  request.r(i783[4], i783[5], 0, i782, 'm_SelectOnDown')
  request.r(i783[6], i783[7], 0, i782, 'm_SelectOnLeft')
  request.r(i783[8], i783[9], 0, i782, 'm_SelectOnRight')
  return i782
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i785 = data
  i784.m_NormalColor = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.m_HighlightedColor = new pc.Color(i785[4], i785[5], i785[6], i785[7])
  i784.m_PressedColor = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  i784.m_SelectedColor = new pc.Color(i785[12], i785[13], i785[14], i785[15])
  i784.m_DisabledColor = new pc.Color(i785[16], i785[17], i785[18], i785[19])
  i784.m_ColorMultiplier = i785[20]
  i784.m_FadeDuration = i785[21]
  return i784
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_HighlightedSprite')
  request.r(i787[2], i787[3], 0, i786, 'm_PressedSprite')
  request.r(i787[4], i787[5], 0, i786, 'm_SelectedSprite')
  request.r(i787[6], i787[7], 0, i786, 'm_DisabledSprite')
  return i786
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i789 = data
  i788.m_NormalTrigger = i789[0]
  i788.m_HighlightedTrigger = i789[1]
  i788.m_PressedTrigger = i789[2]
  i788.m_SelectedTrigger = i789[3]
  i788.m_DisabledTrigger = i789[4]
  return i788
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i790 = root || request.c( 'BotParachute' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, '_animator')
  request.r(i791[2], i791[3], 0, i790, '_muzzle')
  request.r(i791[4], i791[5], 0, i790, 'bullet')
  i790.target = new pc.Vec3( i791[6], i791[7], i791[8] )
  i790.moveIndex = i791[9]
  i790.isMoveDone = !!i791[10]
  i790.isDie = !!i791[11]
  i790.isMove = !!i791[12]
  i790.parachuteDone = !!i791[13]
  i790.isTakeDame = !!i791[14]
  i790.maxHealth = i791[15]
  request.r(i791[16], i791[17], 0, i790, 'healthBarRenderer')
  request.r(i791[18], i791[19], 0, i790, '_audioSource')
  request.r(i791[20], i791[21], 0, i790, '_callTeamAudioSource')
  request.r(i791[22], i791[23], 0, i790, '_hitAudioSource')
  return i790
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i792 = root || request.c( 'ParachuteController' )
  var i793 = data
  i792.gravity = i793[0]
  i792.dragForce = i793[1]
  i792.objectMass = i793[2]
  request.r(i793[3], i793[4], 0, i792, '_botController')
  i792.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i793[5] )
  request.r(i793[6], i793[7], 0, i792, 'ParachuteScale')
  i792.scaleAmount = i793[8]
  i792.velocity = new pc.Vec3( i793[9], i793[10], i793[11] )
  i792._distanceOpenParachute = i793[12]
  i792._distanceCloseParachute = i793[13]
  return i792
}

Deserializers["BotController"] = function (request, data, root) {
  var i794 = root || request.c( 'BotController' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, '_animator')
  request.r(i795[2], i795[3], 0, i794, '_muzzle')
  request.r(i795[4], i795[5], 0, i794, 'bullet')
  i794.target = new pc.Vec3( i795[6], i795[7], i795[8] )
  i794.moveIndex = i795[9]
  i794.isMoveDone = !!i795[10]
  i794.isDie = !!i795[11]
  i794.isTakeDame = !!i795[12]
  i794.maxHealth = i795[13]
  request.r(i795[14], i795[15], 0, i794, 'healthBarRenderer')
  request.r(i795[16], i795[17], 0, i794, '_audioSource')
  request.r(i795[18], i795[19], 0, i794, '_callTeamAudioSource')
  request.r(i795[20], i795[21], 0, i794, '_hitAudioSource')
  return i794
}

Deserializers["PathManager"] = function (request, data, root) {
  var i796 = root || request.c( 'PathManager' )
  var i797 = data
  var i799 = i797[0]
  var i798 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i799.length; i += 1) {
    i798.add(request.d('Path', i799[i + 0]));
  }
  i796._paths = i798
  var i801 = i797[1]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i801.length; i += 1) {
    i800.add(request.d('Path', i801[i + 0]));
  }
  i796._pathsParachute = i800
  return i796
}

Deserializers["Path"] = function (request, data, root) {
  var i804 = root || request.c( 'Path' )
  var i805 = data
  i804.IsUse = !!i805[0]
  var i807 = i805[1]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i807.length; i += 2) {
  request.r(i807[i + 0], i807[i + 1], 1, i806, '')
  }
  i804.WayPoints = i806
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i811 = data
  i810.enabled = !!i811[0]
  i810.type = i811[1]
  i810.color = new pc.Color(i811[2], i811[3], i811[4], i811[5])
  i810.cullingMask = i811[6]
  i810.intensity = i811[7]
  i810.range = i811[8]
  i810.spotAngle = i811[9]
  i810.shadows = i811[10]
  i810.shadowNormalBias = i811[11]
  i810.shadowBias = i811[12]
  i810.shadowStrength = i811[13]
  i810.shadowResolution = i811[14]
  i810.lightmapBakeType = i811[15]
  i810.renderMode = i811[16]
  request.r(i811[17], i811[18], 0, i810, 'cookie')
  i810.cookieSize = i811[19]
  return i810
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i812 = root || request.c( 'PlayerView' )
  var i813 = data
  request.r(i813[0], i813[1], 0, i812, '_mainRoot')
  request.r(i813[2], i813[3], 0, i812, '_head')
  i812._sensitivity = i813[4]
  i812._slerpFactor = i813[5]
  i812._viewHorizontalThreshold = new pc.Vec2( i813[6], i813[7] )
  i812._viewVerticalThreshold = new pc.Vec2( i813[8], i813[9] )
  i812._initRotate = new pc.Vec2( i813[10], i813[11] )
  i812._totalRotate = new pc.Vec2( i813[12], i813[13] )
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i815 = data
  i814.playAutomatically = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'clip')
  var i817 = i815[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.clips = i816
  i814.wrapMode = i815[4]
  i814.enabled = !!i815[5]
  return i814
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i820 = root || request.c( 'WeaponController' )
  var i821 = data
  i820.Mask = UnityEngine.LayerMask.FromIntegerValue( i821[0] )
  i820.damage = i821[1]
  request.r(i821[2], i821[3], 0, i820, '_muzzleTrans')
  request.r(i821[4], i821[5], 0, i820, '_animation')
  request.r(i821[6], i821[7], 0, i820, 'bullet')
  request.r(i821[8], i821[9], 0, i820, '_muzzleFlash')
  request.r(i821[10], i821[11], 0, i820, 'audioClip')
  request.r(i821[12], i821[13], 0, i820, 'audioSource')
  i820.SphereRadius = i821[14]
  request.r(i821[15], i821[16], 0, i820, 'Effect')
  return i820
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i822 = root || request.c( 'SpawnBot' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, '_botPrefab')
  i822._spawnInterval = i823[2]
  i822._upper = i823[3]
  return i822
}

Deserializers["BotManager"] = function (request, data, root) {
  var i824 = root || request.c( 'BotManager' )
  var i825 = data
  return i824
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i826 = root || request.c( 'AudioManager' )
  var i827 = data
  var i829 = i827[0]
  var i828 = []
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 2, i828, '')
  }
  i826.CallTeamOnFireSounds = i828
  var i831 = i827[1]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i826.CallTeamSounds = i830
  var i833 = i827[2]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i826.AttackSounds = i832
  var i835 = i827[3]
  var i834 = []
  for(var i = 0; i < i835.length; i += 2) {
  request.r(i835[i + 0], i835[i + 1], 2, i834, '')
  }
  i826.MissSounds = i834
  var i837 = i827[4]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i826.HitSounds = i836
  return i826
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i840 = root || request.c( 'ConfigManager' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('StepData', i843[i + 0]) );
  }
  i840._stepDatas = i842
  return i840
}

Deserializers["StepData"] = function (request, data, root) {
  var i846 = root || request.c( 'StepData' )
  var i847 = data
  i846.NumberBot = i847[0]
  i846.NumberParachute = i847[1]
  return i846
}

Deserializers["StepManager"] = function (request, data, root) {
  var i848 = root || request.c( 'StepManager' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, '_spawnBotNormal')
  request.r(i849[2], i849[3], 0, i848, '_spawnBotParachute')
  return i848
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i850 = root || request.c( 'ObjectPool' )
  var i851 = data
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i853 = data
  i852.ambientIntensity = i853[0]
  i852.reflectionIntensity = i853[1]
  i852.ambientMode = i853[2]
  i852.ambientLight = new pc.Color(i853[3], i853[4], i853[5], i853[6])
  i852.ambientSkyColor = new pc.Color(i853[7], i853[8], i853[9], i853[10])
  i852.ambientGroundColor = new pc.Color(i853[11], i853[12], i853[13], i853[14])
  i852.ambientEquatorColor = new pc.Color(i853[15], i853[16], i853[17], i853[18])
  i852.fogColor = new pc.Color(i853[19], i853[20], i853[21], i853[22])
  i852.fogEndDistance = i853[23]
  i852.fogStartDistance = i853[24]
  i852.fogDensity = i853[25]
  i852.fog = !!i853[26]
  request.r(i853[27], i853[28], 0, i852, 'skybox')
  i852.fogMode = i853[29]
  var i855 = i853[30]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i855[i + 0]) );
  }
  i852.lightmaps = i854
  i852.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i853[31], i852.lightProbes)
  i852.lightmapsMode = i853[32]
  i852.mixedBakeMode = i853[33]
  i852.environmentLightingMode = i853[34]
  i852.ambientProbe = new pc.SphericalHarmonicsL2(i853[35])
  i852.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i853[36])
  i852.useReferenceAmbientProbe = !!i853[37]
  request.r(i853[38], i853[39], 0, i852, 'customReflection')
  request.r(i853[40], i853[41], 0, i852, 'defaultReflection')
  i852.defaultReflectionMode = i853[42]
  i852.defaultReflectionResolution = i853[43]
  i852.sunLightObjectId = i853[44]
  i852.pixelLightCount = i853[45]
  i852.defaultReflectionHDR = !!i853[46]
  i852.hasLightDataAsset = !!i853[47]
  i852.hasManualGenerate = !!i853[48]
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, 'lightmapColor')
  request.r(i859[2], i859[3], 0, i858, 'lightmapDirection')
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i860 = root || new UnityEngine.LightProbes()
  var i861 = data
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i869 = data
  var i871 = i869[0]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i871.length; i += 1) {
    i870.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i871[i + 0]));
  }
  i868.ShaderCompilationErrors = i870
  i868.name = i869[1]
  i868.guid = i869[2]
  var i873 = i869[3]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( i873[i + 0] );
  }
  i868.shaderDefinedKeywords = i872
  var i875 = i869[4]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i875[i + 0]) );
  }
  i868.passes = i874
  var i877 = i869[5]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i877[i + 0]) );
  }
  i868.usePasses = i876
  var i879 = i869[6]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i879[i + 0]) );
  }
  i868.defaultParameterValues = i878
  request.r(i869[7], i869[8], 0, i868, 'unityFallbackShader')
  i868.readDepth = !!i869[9]
  i868.isCreatedByShaderGraph = !!i869[10]
  i868.usedBatchUniforms = i869[11]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i883 = data
  i882.shaderName = i883[0]
  i882.errorMessage = i883[1]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i888 = root || new pc.UnityShaderPass()
  var i889 = data
  i888.id = i889[0]
  i888.subShaderIndex = i889[1]
  i888.name = i889[2]
  i888.passType = i889[3]
  i888.grabPassTextureName = i889[4]
  i888.usePass = !!i889[5]
  i888.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[6], i888.zTest)
  i888.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[7], i888.zWrite)
  i888.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[8], i888.culling)
  i888.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i889[9], i888.blending)
  i888.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i889[10], i888.alphaBlending)
  i888.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[11], i888.colorWriteMask)
  i888.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[12], i888.offsetUnits)
  i888.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[13], i888.offsetFactor)
  i888.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[14], i888.stencilRef)
  i888.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[15], i888.stencilReadMask)
  i888.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[16], i888.stencilWriteMask)
  i888.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[17], i888.stencilOp)
  i888.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[18], i888.stencilOpFront)
  i888.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i889[19], i888.stencilOpBack)
  var i891 = i889[20]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i891[i + 0]) );
  }
  i888.tags = i890
  var i893 = i889[21]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.passDefinedKeywords = i892
  var i895 = i889[22]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i895[i + 0]) );
  }
  i888.passDefinedKeywordGroups = i894
  var i897 = i889[23]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i897[i + 0]) );
  }
  i888.variants = i896
  var i899 = i889[24]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i899[i + 0]) );
  }
  i888.excludedVariants = i898
  i888.hasDepthReader = !!i889[25]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i901 = data
  i900.val = i901[0]
  i900.name = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i903 = data
  i902.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[0], i902.src)
  i902.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[1], i902.dst)
  i902.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[2], i902.op)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i905 = data
  i904.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[0], i904.pass)
  i904.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[1], i904.fail)
  i904.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[2], i904.zFail)
  i904.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[3], i904.comp)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i909 = data
  i908.name = i909[0]
  i908.value = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i913 = data
  var i915 = i913[0]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.hasDiscard = !!i913[1]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i919 = data
  i918.passId = i919[0]
  i918.subShaderIndex = i919[1]
  var i921 = i919[2]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i918.keywords = i920
  i918.vertexProgram = i919[3]
  i918.fragmentProgram = i919[4]
  i918.readDepth = !!i919[5]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i925 = data
  request.r(i925[0], i925[1], 0, i924, 'shader')
  i924.pass = i925[2]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i929 = data
  i928.name = i929[0]
  i928.type = i929[1]
  i928.value = new pc.Vec4( i929[2], i929[3], i929[4], i929[5] )
  i928.textureValue = i929[6]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i931 = data
  i930.name = i931[0]
  request.r(i931[1], i931[2], 0, i930, 'texture')
  i930.aabb = i931[3]
  i930.vertices = i931[4]
  i930.triangles = i931[5]
  i930.textureRect = UnityEngine.Rect.MinMaxRect(i931[6], i931[7], i931[8], i931[9])
  i930.packedRect = UnityEngine.Rect.MinMaxRect(i931[10], i931[11], i931[12], i931[13])
  i930.border = new pc.Vec4( i931[14], i931[15], i931[16], i931[17] )
  i930.transparency = i931[18]
  i930.bounds = i931[19]
  i930.pixelsPerUnit = i931[20]
  i930.textureWidth = i931[21]
  i930.textureHeight = i931[22]
  i930.nativeSize = new pc.Vec2( i931[23], i931[24] )
  i930.pivot = new pc.Vec2( i931[25], i931[26] )
  i930.textureRectOffset = new pc.Vec2( i931[27], i931[28] )
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i933 = data
  i932.name = i933[0]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i935 = data
  i934.name = i935[0]
  i934.wrapMode = i935[1]
  i934.isLooping = !!i935[2]
  i934.length = i935[3]
  var i937 = i935[4]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i937[i + 0]) );
  }
  i934.curves = i936
  var i939 = i935[5]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i939[i + 0]) );
  }
  i934.events = i938
  i934.halfPrecision = !!i935[6]
  i934.frameRate = i935[7]
  i934.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i935[8], i934.localBounds)
  i934.hasMuscleCurves = !!i935[9]
  var i941 = i935[10]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i934.clipMuscleConstant = i940
  i934.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i935[11], i934.clipBindingConstant)
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i945 = data
  i944.path = i945[0]
  i944.componentType = i945[1]
  i944.property = i945[2]
  i944.keys = i945[3]
  var i947 = i945[4]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i947[i + 0]) );
  }
  i944.objectReferenceKeys = i946
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i951 = data
  i950.time = i951[0]
  request.r(i951[1], i951[2], 0, i950, 'value')
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i955 = data
  i954.functionName = i955[0]
  i954.floatParameter = i955[1]
  i954.intParameter = i955[2]
  i954.stringParameter = i955[3]
  request.r(i955[4], i955[5], 0, i954, 'objectReferenceParameter')
  i954.time = i955[6]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i957 = data
  i956.center = new pc.Vec3( i957[0], i957[1], i957[2] )
  i956.extends = new pc.Vec3( i957[3], i957[4], i957[5] )
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i960.genericBindings = i962
  var i965 = i961[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i960.pptrCurveMapping = i964
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i967 = data
  i966.name = i967[0]
  i966.ascent = i967[1]
  i966.originalLineHeight = i967[2]
  i966.fontSize = i967[3]
  var i969 = i967[4]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i969[i + 0]) );
  }
  i966.characterInfo = i968
  request.r(i967[5], i967[6], 0, i966, 'texture')
  i966.originalFontSize = i967[7]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i973 = data
  i972.index = i973[0]
  i972.advance = i973[1]
  i972.bearing = i973[2]
  i972.glyphWidth = i973[3]
  i972.glyphHeight = i973[4]
  i972.minX = i973[5]
  i972.maxX = i973[6]
  i972.minY = i973[7]
  i972.maxY = i973[8]
  i972.uvBottomLeftX = i973[9]
  i972.uvBottomLeftY = i973[10]
  i972.uvBottomRightX = i973[11]
  i972.uvBottomRightY = i973[12]
  i972.uvTopLeftX = i973[13]
  i972.uvTopLeftY = i973[14]
  i972.uvTopRightX = i973[15]
  i972.uvTopRightY = i973[16]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i975 = data
  i974.name = i975[0]
  var i977 = i975[1]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i977[i + 0]) );
  }
  i974.states = i976
  var i979 = i975[2]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i979[i + 0]) );
  }
  i974.layers = i978
  var i981 = i975[3]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i981[i + 0]) );
  }
  i974.parameters = i980
  i974.animationClips = i975[4]
  i974.HasSubStateMachines = !!i975[5]
  i974.avatarUnsupported = i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i985 = data
  i984.cycleOffset = i985[0]
  i984.cycleOffsetParameter = i985[1]
  i984.cycleOffsetParameterActive = !!i985[2]
  i984.mirror = !!i985[3]
  i984.mirrorParameter = i985[4]
  i984.mirrorParameterActive = !!i985[5]
  i984.motionId = i985[6]
  i984.nameHash = i985[7]
  i984.fullPathHash = i985[8]
  i984.speed = i985[9]
  i984.speedParameter = i985[10]
  i984.speedParameterActive = !!i985[11]
  i984.tag = i985[12]
  i984.name = i985[13]
  i984.layer = i985[14]
  i984.writeDefaultValues = !!i985[15]
  var i987 = i985[16]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i987[i + 0]) );
  }
  i984.transitions = i986
  var i989 = i985[17]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i984.behaviours = i988
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i993 = data
  i992.fullPath = i993[0]
  i992.canTransitionToSelf = !!i993[1]
  i992.duration = i993[2]
  i992.exitTime = i993[3]
  i992.hasExitTime = !!i993[4]
  i992.hasFixedDuration = !!i993[5]
  i992.interruptionSource = i993[6]
  i992.offset = i993[7]
  i992.orderedInterruption = !!i993[8]
  i992.destinationStateNameHash = i993[9]
  i992.destinationStateMachineId = i993[10]
  i992.isExit = !!i993[11]
  i992.mute = !!i993[12]
  i992.solo = !!i993[13]
  var i995 = i993[14]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i995[i + 0]) );
  }
  i992.conditions = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i999 = data
  i998.mode = i999[0]
  i998.parameter = i999[1]
  i998.threshold = i999[2]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1005 = data
  i1004.blendingMode = i1005[0]
  i1004.defaultWeight = i1005[1]
  i1004.name = i1005[2]
  i1004.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1005[3], i1004.stateMachine)
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.defaultStateNameHash = i1007[1]
  var i1009 = i1007[2]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1009[i + 0]) );
  }
  i1006.entryTransitions = i1008
  var i1011 = i1007[3]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1011[i + 0]) );
  }
  i1006.anyStateTransitions = i1010
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1015 = data
  i1014.destinationStateNameHash = i1015[0]
  i1014.destinationStateMachineId = i1015[1]
  i1014.isExit = !!i1015[2]
  i1014.mute = !!i1015[3]
  i1014.solo = !!i1015[4]
  var i1017 = i1015[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1017[i + 0]) );
  }
  i1014.conditions = i1016
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1021 = data
  i1020.defaultBool = !!i1021[0]
  i1020.defaultFloat = i1021[1]
  i1020.defaultInt = i1021[2]
  i1020.name = i1021[3]
  i1020.nameHash = i1021[4]
  i1020.type = i1021[5]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1025[i + 0]) );
  }
  i1022.files = i1024
  i1022.componentToPrefabIds = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1029 = data
  i1028.path = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'unityObject')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1033[i + 0]) );
  }
  i1030.scriptsExecutionOrder = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1035[i + 0]) );
  }
  i1030.sortingLayers = i1034
  var i1037 = i1031[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1037[i + 0]) );
  }
  i1030.cullingLayers = i1036
  i1030.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1031[3], i1030.timeSettings)
  i1030.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1031[4], i1030.physicsSettings)
  i1030.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1031[5], i1030.physics2DSettings)
  i1030.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1031[6], i1030.qualitySettings)
  i1030.enableRealtimeShadows = !!i1031[7]
  i1030.enableAutoInstancing = !!i1031[8]
  i1030.enableDynamicBatching = !!i1031[9]
  i1030.lightmapEncodingQuality = i1031[10]
  i1030.desiredColorSpace = i1031[11]
  var i1039 = i1031[12]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1030.allTags = i1038
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.value = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  i1046.value = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1053 = data
  i1052.fixedDeltaTime = i1053[0]
  i1052.maximumDeltaTime = i1053[1]
  i1052.timeScale = i1053[2]
  i1052.maximumParticleTimestep = i1053[3]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1055 = data
  i1054.gravity = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.defaultSolverIterations = i1055[3]
  i1054.bounceThreshold = i1055[4]
  i1054.autoSyncTransforms = !!i1055[5]
  i1054.autoSimulation = !!i1055[6]
  var i1057 = i1055[7]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1057[i + 0]) );
  }
  i1054.collisionMatrix = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.layerId = i1061[1]
  i1060.otherLayerId = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'material')
  i1062.gravity = new pc.Vec2( i1063[2], i1063[3] )
  i1062.positionIterations = i1063[4]
  i1062.velocityIterations = i1063[5]
  i1062.velocityThreshold = i1063[6]
  i1062.maxLinearCorrection = i1063[7]
  i1062.maxAngularCorrection = i1063[8]
  i1062.maxTranslationSpeed = i1063[9]
  i1062.maxRotationSpeed = i1063[10]
  i1062.baumgarteScale = i1063[11]
  i1062.baumgarteTOIScale = i1063[12]
  i1062.timeToSleep = i1063[13]
  i1062.linearSleepTolerance = i1063[14]
  i1062.angularSleepTolerance = i1063[15]
  i1062.defaultContactOffset = i1063[16]
  i1062.autoSimulation = !!i1063[17]
  i1062.queriesHitTriggers = !!i1063[18]
  i1062.queriesStartInColliders = !!i1063[19]
  i1062.callbacksOnDisable = !!i1063[20]
  i1062.reuseCollisionCallbacks = !!i1063[21]
  i1062.autoSyncTransforms = !!i1063[22]
  var i1065 = i1063[23]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1065[i + 0]) );
  }
  i1062.collisionMatrix = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.layerId = i1069[1]
  i1068.otherLayerId = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1073[i + 0]) );
  }
  i1070.qualityLevels = i1072
  var i1075 = i1071[1]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.names = i1074
  i1070.shadows = i1071[2]
  i1070.anisotropicFiltering = i1071[3]
  i1070.antiAliasing = i1071[4]
  i1070.lodBias = i1071[5]
  i1070.shadowCascades = i1071[6]
  i1070.shadowDistance = i1071[7]
  i1070.shadowmaskMode = i1071[8]
  i1070.shadowProjection = i1071[9]
  i1070.shadowResolution = i1071[10]
  i1070.softParticles = !!i1071[11]
  i1070.softVegetation = !!i1071[12]
  i1070.activeColorSpace = i1071[13]
  i1070.desiredColorSpace = i1071[14]
  i1070.masterTextureLimit = i1071[15]
  i1070.maxQueuedFrames = i1071[16]
  i1070.particleRaycastBudget = i1071[17]
  i1070.pixelLightCount = i1071[18]
  i1070.realtimeReflectionProbes = !!i1071[19]
  i1070.shadowCascade2Split = i1071[20]
  i1070.shadowCascade4Split = new pc.Vec3( i1071[21], i1071[22], i1071[23] )
  i1070.streamingMipmapsActive = !!i1071[24]
  i1070.vSyncCount = i1071[25]
  i1070.asyncUploadBufferSize = i1071[26]
  i1070.asyncUploadTimeSlice = i1071[27]
  i1070.billboardsFaceCameraPosition = !!i1071[28]
  i1070.shadowNearPlaneOffset = i1071[29]
  i1070.streamingMipmapsMemoryBudget = i1071[30]
  i1070.maximumLODLevel = i1071[31]
  i1070.streamingMipmapsAddAllCameras = !!i1071[32]
  i1070.streamingMipmapsMaxLevelReduction = i1071[33]
  i1070.streamingMipmapsRenderersPerFrame = i1071[34]
  i1070.resolutionScalingFixedDPIFactor = i1071[35]
  i1070.streamingMipmapsMaxFileIORequests = i1071[36]
  i1070.currentQualityLevel = i1071[37]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1079 = data
  i1078.name = i1079[0]
  var i1081 = i1079[1]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1081[i + 0]) );
  }
  i1078.tos = i1080
  var i1083 = i1079[2]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( i1083[i + 0] );
  }
  i1078.constant = i1082
  i1078.isValid = !!i1079[3]
  i1078.isHuman = !!i1079[4]
  i1078.hasRootMotion = !!i1079[5]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1087 = data
  i1086.hash = i1087[0]
  i1086.path = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1091 = data
  i1090.weight = i1091[0]
  i1090.vertices = i1091[1]
  i1090.normals = i1091[2]
  i1090.tangents = i1091[3]
  return i1090
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[10],"63":[15],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[15],"87":[5],"88":[89],"90":[89],"29":[18],"91":[18],"92":[5,18],"93":[18,21],"94":[18],"95":[21,18],"96":[5],"97":[21,18],"98":[18],"99":[100],"101":[18],"102":[18],"31":[29],"23":[21,18],"103":[18],"30":[29],"104":[18],"105":[18],"106":[18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[21,18],"114":[18],"115":[18],"116":[18],"117":[18],"33":[21,18],"118":[18],"119":[27],"120":[27],"28":[27],"121":[27],"122":[15],"123":[15],"124":[100],"125":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Text","UnityEngine.GameObject","UnityEngine.Font","UnityEngine.UI.Button","BotParachute","ParachuteController","UnityEditor.Animations.AnimatorController","BotController","PathManager","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","BotManager","AudioManager","ConfigManager","StepManager","ObjectPool","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "18.6";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1602";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3537";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.Luna";

Deserializers.disableAntiAliasing = true;

Deserializers.preferWebGl2 = true;

Deserializers.buildID = "f7e6357e-5d34-4d19-81a9-65f191d10e0b";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

