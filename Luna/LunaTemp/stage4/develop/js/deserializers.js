var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointSpring' )
  var i559 = data
  i558.spring = i559[0]
  i558.damper = i559[1]
  i558.targetPosition = i559[2]
  return i558
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointMotor' )
  var i561 = data
  i560.m_TargetVelocity = i561[0]
  i560.m_Force = i561[1]
  i560.m_FreeSpin = i561[2]
  return i560
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointLimits' )
  var i563 = data
  i562.m_Min = i563[0]
  i562.m_Max = i563[1]
  i562.m_Bounciness = i563[2]
  i562.m_BounceMinVelocity = i563[3]
  i562.m_ContactDistance = i563[4]
  i562.minBounce = i563[5]
  i562.maxBounce = i563[6]
  return i562
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.JointDrive' )
  var i565 = data
  i564.m_PositionSpring = i565[0]
  i564.m_PositionDamper = i565[1]
  i564.m_MaximumForce = i565[2]
  return i564
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i567 = data
  i566.m_Spring = i567[0]
  i566.m_Damper = i567[1]
  return i566
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i569 = data
  i568.m_Limit = i569[0]
  i568.m_Bounciness = i569[1]
  i568.m_ContactDistance = i569[2]
  return i568
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i571 = data
  i570.m_ExtremumSlip = i571[0]
  i570.m_ExtremumValue = i571[1]
  i570.m_AsymptoteSlip = i571[2]
  i570.m_AsymptoteValue = i571[3]
  i570.m_Stiffness = i571[4]
  return i570
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i573 = data
  i572.m_LowerAngle = i573[0]
  i572.m_UpperAngle = i573[1]
  return i572
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i575 = data
  i574.m_MotorSpeed = i575[0]
  i574.m_MaximumMotorTorque = i575[1]
  return i574
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i577 = data
  i576.m_DampingRatio = i577[0]
  i576.m_Frequency = i577[1]
  i576.m_Angle = i577[2]
  return i576
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i579 = data
  i578.m_LowerTranslation = i579[0]
  i578.m_UpperTranslation = i579[1]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i580 = root || new pc.UnityMaterial()
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'shader')
  i580.renderQueue = i581[3]
  i580.enableInstancing = !!i581[4]
  var i583 = i581[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i583[i + 0]) );
  }
  i580.floatParameters = i582
  var i585 = i581[6]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i585[i + 0]) );
  }
  i580.colorParameters = i584
  var i587 = i581[7]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i587[i + 0]) );
  }
  i580.vectorParameters = i586
  var i589 = i581[8]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i589[i + 0]) );
  }
  i580.textureParameters = i588
  var i591 = i581[9]
  var i590 = []
  for(var i = 0; i < i591.length; i += 1) {
    i590.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i591[i + 0]) );
  }
  i580.materialFlags = i590
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i595 = data
  i594.name = i595[0]
  i594.value = i595[1]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i599 = data
  i598.name = i599[0]
  i598.value = new pc.Color(i599[1], i599[2], i599[3], i599[4])
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i603 = data
  i602.name = i603[0]
  i602.value = new pc.Vec4( i603[1], i603[2], i603[3], i603[4] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i607 = data
  i606.name = i607[0]
  request.r(i607[1], i607[2], 0, i606, 'value')
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i611 = data
  i610.name = i611[0]
  i610.enabled = !!i611[1]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i613 = data
  i612.name = i613[0]
  i612.width = i613[1]
  i612.height = i613[2]
  i612.mipmapCount = i613[3]
  i612.anisoLevel = i613[4]
  i612.filterMode = i613[5]
  i612.hdr = !!i613[6]
  i612.format = i613[7]
  i612.wrapMode = i613[8]
  i612.alphaIsTransparency = !!i613[9]
  i612.alphaSource = i613[10]
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i615 = data
  i614.position = new pc.Vec3( i615[0], i615[1], i615[2] )
  i614.scale = new pc.Vec3( i615[3], i615[4], i615[5] )
  i614.rotation = new pc.Quat(i615[6], i615[7], i615[8], i615[9])
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i617 = data
  request.r(i617[0], i617[1], 0, i616, 'animatorController')
  request.r(i617[2], i617[3], 0, i616, 'avatar')
  i616.updateMode = i617[4]
  i616.hasTransformHierarchy = !!i617[5]
  i616.applyRootMotion = !!i617[6]
  var i619 = i617[7]
  var i618 = []
  for(var i = 0; i < i619.length; i += 2) {
  request.r(i619[i + 0], i619[i + 1], 2, i618, '')
  }
  i616.humanBones = i618
  i616.enabled = !!i617[8]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i623 = data
  i622.enabled = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'sharedMaterial')
  var i625 = i623[3]
  var i624 = []
  for(var i = 0; i < i625.length; i += 2) {
  request.r(i625[i + 0], i625[i + 1], 2, i624, '')
  }
  i622.sharedMaterials = i624
  i622.receiveShadows = !!i623[4]
  i622.shadowCastingMode = i623[5]
  i622.sortingLayerID = i623[6]
  i622.sortingOrder = i623[7]
  i622.lightmapIndex = i623[8]
  i622.lightmapSceneIndex = i623[9]
  i622.lightmapScaleOffset = new pc.Vec4( i623[10], i623[11], i623[12], i623[13] )
  i622.lightProbeUsage = i623[14]
  i622.reflectionProbeUsage = i623[15]
  request.r(i623[16], i623[17], 0, i622, 'sharedMesh')
  var i627 = i623[18]
  var i626 = []
  for(var i = 0; i < i627.length; i += 2) {
  request.r(i627[i + 0], i627[i + 1], 2, i626, '')
  }
  i622.bones = i626
  i622.updateWhenOffscreen = !!i623[19]
  i622.localBounds = i623[20]
  request.r(i623[21], i623[22], 0, i622, 'rootBone')
  var i629 = i623[23]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i629[i + 0]) );
  }
  i622.blendShapesWeights = i628
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i635 = data
  i634.weight = i635[0]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i637 = data
  i636.name = i637[0]
  i636.tagId = i637[1]
  i636.enabled = !!i637[2]
  i636.isStatic = !!i637[3]
  i636.layer = i637[4]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i639 = data
  i638.name = i639[0]
  i638.halfPrecision = !!i639[1]
  i638.vertexCount = i639[2]
  i638.aabb = i639[3]
  var i641 = i639[4]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( !!i641[i + 0] );
  }
  i638.streams = i640
  i638.vertices = i639[5]
  var i643 = i639[6]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i643[i + 0]) );
  }
  i638.subMeshes = i642
  var i645 = i639[7]
  var i644 = []
  for(var i = 0; i < i645.length; i += 16) {
    i644.push( new pc.Mat4().setData(i645[i + 0], i645[i + 1], i645[i + 2], i645[i + 3],  i645[i + 4], i645[i + 5], i645[i + 6], i645[i + 7],  i645[i + 8], i645[i + 9], i645[i + 10], i645[i + 11],  i645[i + 12], i645[i + 13], i645[i + 14], i645[i + 15]) );
  }
  i638.bindposes = i644
  var i647 = i639[8]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i647[i + 0]) );
  }
  i638.blendShapes = i646
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i653 = data
  i652.triangles = i653[0]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i659 = data
  i658.name = i659[0]
  var i661 = i659[1]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i661[i + 0]) );
  }
  i658.frames = i660
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'sharedMesh')
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'additionalVertexStreams')
  i664.enabled = !!i665[2]
  request.r(i665[3], i665[4], 0, i664, 'sharedMaterial')
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 2) {
  request.r(i667[i + 0], i667[i + 1], 2, i666, '')
  }
  i664.sharedMaterials = i666
  i664.receiveShadows = !!i665[6]
  i664.shadowCastingMode = i665[7]
  i664.sortingLayerID = i665[8]
  i664.sortingOrder = i665[9]
  i664.lightmapIndex = i665[10]
  i664.lightmapSceneIndex = i665[11]
  i664.lightmapScaleOffset = new pc.Vec4( i665[12], i665[13], i665[14], i665[15] )
  i664.lightProbeUsage = i665[16]
  i664.reflectionProbeUsage = i665[17]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i669 = data
  i668.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i669[0], i668.main)
  i668.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i669[1], i668.colorBySpeed)
  i668.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i669[2], i668.colorOverLifetime)
  i668.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i669[3], i668.emission)
  i668.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i669[4], i668.rotationBySpeed)
  i668.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i669[5], i668.rotationOverLifetime)
  i668.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i669[6], i668.shape)
  i668.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i669[7], i668.sizeBySpeed)
  i668.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i669[8], i668.sizeOverLifetime)
  i668.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i669[9], i668.textureSheetAnimation)
  i668.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i669[10], i668.velocityOverLifetime)
  i668.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i669[11], i668.noise)
  i668.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i669[12], i668.inheritVelocity)
  i668.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i669[13], i668.forceOverLifetime)
  i668.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i669[14], i668.limitVelocityOverLifetime)
  i668.useAutoRandomSeed = !!i669[15]
  i668.randomSeed = i669[16]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemMain()
  var i671 = data
  i670.duration = i671[0]
  i670.loop = !!i671[1]
  i670.prewarm = !!i671[2]
  i670.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.startDelay)
  i670.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[4], i670.startLifetime)
  i670.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[5], i670.startSpeed)
  i670.startSize3D = !!i671[6]
  i670.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[7], i670.startSizeX)
  i670.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[8], i670.startSizeY)
  i670.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[9], i670.startSizeZ)
  i670.startRotation3D = !!i671[10]
  i670.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[11], i670.startRotationX)
  i670.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[12], i670.startRotationY)
  i670.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[13], i670.startRotationZ)
  i670.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i671[14], i670.startColor)
  i670.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[15], i670.gravityModifier)
  i670.simulationSpace = i671[16]
  request.r(i671[17], i671[18], 0, i670, 'customSimulationSpace')
  i670.simulationSpeed = i671[19]
  i670.useUnscaledTime = !!i671[20]
  i670.scalingMode = i671[21]
  i670.playOnAwake = !!i671[22]
  i670.maxParticles = i671[23]
  i670.emitterVelocityMode = i671[24]
  i670.stopAction = i671[25]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i672 = root || new pc.MinMaxCurve()
  var i673 = data
  i672.mode = i673[0]
  i672.curveMin = new pc.AnimationCurve( { keys_flow: i673[1] } )
  i672.curveMax = new pc.AnimationCurve( { keys_flow: i673[2] } )
  i672.curveMultiplier = i673[3]
  i672.constantMin = i673[4]
  i672.constantMax = i673[5]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i674 = root || new pc.MinMaxGradient()
  var i675 = data
  i674.mode = i675[0]
  i674.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i675[1], i674.gradientMin)
  i674.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i675[2], i674.gradientMax)
  i674.colorMin = new pc.Color(i675[3], i675[4], i675[5], i675[6])
  i674.colorMax = new pc.Color(i675[7], i675[8], i675[9], i675[10])
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i677 = data
  i676.mode = i677[0]
  var i679 = i677[1]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i679[i + 0]) );
  }
  i676.colorKeys = i678
  var i681 = i677[2]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i681[i + 0]) );
  }
  i676.alphaKeys = i680
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemColorBySpeed()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i683[1], i682.color)
  i682.range = new pc.Vec2( i683[2], i683[3] )
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i687 = data
  i686.color = new pc.Color(i687[0], i687[1], i687[2], i687[3])
  i686.time = i687[4]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i691 = data
  i690.alpha = i691[0]
  i690.time = i691[1]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemColorOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i693[1], i692.color)
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemEmitter()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.rateOverTime)
  i694.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.rateOverDistance)
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i697[i + 0]) );
  }
  i694.bursts = i696
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i700 = root || new pc.ParticleSystemBurst()
  var i701 = data
  i700.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i701[0], i700.count)
  i700.cycleCount = i701[1]
  i700.minCount = i701[2]
  i700.maxCount = i701[3]
  i700.repeatInterval = i701[4]
  i700.time = i701[5]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemRotationBySpeed()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[1], i702.x)
  i702.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[2], i702.y)
  i702.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i703[3], i702.z)
  i702.separateAxes = !!i703[4]
  i702.range = new pc.Vec2( i703[5], i703[6] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemRotationOverLifetime()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[1], i704.x)
  i704.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[2], i704.y)
  i704.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.z)
  i704.separateAxes = !!i705[4]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i706 = root || new pc.ParticleSystemShape()
  var i707 = data
  i706.enabled = !!i707[0]
  i706.shapeType = i707[1]
  i706.randomDirectionAmount = i707[2]
  i706.sphericalDirectionAmount = i707[3]
  i706.randomPositionAmount = i707[4]
  i706.alignToDirection = !!i707[5]
  i706.radius = i707[6]
  i706.radiusMode = i707[7]
  i706.radiusSpread = i707[8]
  i706.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[9], i706.radiusSpeed)
  i706.radiusThickness = i707[10]
  i706.angle = i707[11]
  i706.length = i707[12]
  i706.boxThickness = new pc.Vec3( i707[13], i707[14], i707[15] )
  i706.meshShapeType = i707[16]
  request.r(i707[17], i707[18], 0, i706, 'mesh')
  request.r(i707[19], i707[20], 0, i706, 'meshRenderer')
  request.r(i707[21], i707[22], 0, i706, 'skinnedMeshRenderer')
  i706.useMeshMaterialIndex = !!i707[23]
  i706.meshMaterialIndex = i707[24]
  i706.useMeshColors = !!i707[25]
  i706.normalOffset = i707[26]
  i706.arc = i707[27]
  i706.arcMode = i707[28]
  i706.arcSpread = i707[29]
  i706.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i707[30], i706.arcSpeed)
  i706.donutRadius = i707[31]
  i706.position = new pc.Vec3( i707[32], i707[33], i707[34] )
  i706.rotation = new pc.Vec3( i707[35], i707[36], i707[37] )
  i706.scale = new pc.Vec3( i707[38], i707[39], i707[40] )
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i708 = root || new pc.ParticleSystemSizeBySpeed()
  var i709 = data
  i708.enabled = !!i709[0]
  i708.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[1], i708.x)
  i708.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[2], i708.y)
  i708.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i709[3], i708.z)
  i708.separateAxes = !!i709[4]
  i708.range = new pc.Vec2( i709[5], i709[6] )
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i710 = root || new pc.ParticleSystemSizeOverLifetime()
  var i711 = data
  i710.enabled = !!i711[0]
  i710.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[1], i710.x)
  i710.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[2], i710.y)
  i710.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i711[3], i710.z)
  i710.separateAxes = !!i711[4]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.mode = i713[1]
  i712.animation = i713[2]
  i712.numTilesX = i713[3]
  i712.numTilesY = i713[4]
  i712.useRandomRow = !!i713[5]
  i712.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[6], i712.frameOverTime)
  i712.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i713[7], i712.startFrame)
  i712.cycleCount = i713[8]
  i712.rowIndex = i713[9]
  i712.flipU = i713[10]
  i712.flipV = i713[11]
  i712.spriteCount = i713[12]
  var i715 = i713[13]
  var i714 = []
  for(var i = 0; i < i715.length; i += 2) {
  request.r(i715[i + 0], i715[i + 1], 2, i714, '')
  }
  i712.sprites = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i718 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i719 = data
  i718.enabled = !!i719[0]
  i718.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[1], i718.x)
  i718.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[2], i718.y)
  i718.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[3], i718.z)
  i718.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[4], i718.radial)
  i718.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[5], i718.speedModifier)
  i718.space = i719[6]
  i718.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[7], i718.orbitalX)
  i718.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[8], i718.orbitalY)
  i718.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[9], i718.orbitalZ)
  i718.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[10], i718.orbitalOffsetX)
  i718.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[11], i718.orbitalOffsetY)
  i718.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i719[12], i718.orbitalOffsetZ)
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemNoise()
  var i721 = data
  i720.enabled = !!i721[0]
  i720.separateAxes = !!i721[1]
  i720.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[2], i720.strengthX)
  i720.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[3], i720.strengthY)
  i720.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[4], i720.strengthZ)
  i720.frequency = i721[5]
  i720.damping = !!i721[6]
  i720.octaveCount = i721[7]
  i720.octaveMultiplier = i721[8]
  i720.octaveScale = i721[9]
  i720.quality = i721[10]
  i720.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[11], i720.scrollSpeed)
  i720.scrollSpeedMultiplier = i721[12]
  i720.remapEnabled = !!i721[13]
  i720.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[14], i720.remapX)
  i720.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[15], i720.remapY)
  i720.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[16], i720.remapZ)
  i720.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[17], i720.positionAmount)
  i720.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[18], i720.rotationAmount)
  i720.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[19], i720.sizeAmount)
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemInheritVelocity()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.mode = i723[1]
  i722.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[2], i722.curve)
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemForceOverLifetime()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.space = i725[4]
  i724.randomized = !!i725[5]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.limit)
  i726.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.limitX)
  i726.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.limitY)
  i726.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[4], i726.limitZ)
  i726.dampen = i727[5]
  i726.separateAxes = !!i727[6]
  i726.space = i727[7]
  i726.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[8], i726.drag)
  i726.multiplyDragByParticleSize = !!i727[9]
  i726.multiplyDragByParticleVelocity = !!i727[10]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i729 = data
  i728.enabled = !!i729[0]
  request.r(i729[1], i729[2], 0, i728, 'sharedMaterial')
  var i731 = i729[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 2) {
  request.r(i731[i + 0], i731[i + 1], 2, i730, '')
  }
  i728.sharedMaterials = i730
  i728.receiveShadows = !!i729[4]
  i728.shadowCastingMode = i729[5]
  i728.sortingLayerID = i729[6]
  i728.sortingOrder = i729[7]
  i728.lightmapIndex = i729[8]
  i728.lightmapSceneIndex = i729[9]
  i728.lightmapScaleOffset = new pc.Vec4( i729[10], i729[11], i729[12], i729[13] )
  i728.lightProbeUsage = i729[14]
  i728.reflectionProbeUsage = i729[15]
  request.r(i729[16], i729[17], 0, i728, 'mesh')
  i728.meshCount = i729[18]
  i728.activeVertexStreamsCount = i729[19]
  i728.alignment = i729[20]
  i728.renderMode = i729[21]
  i728.sortMode = i729[22]
  i728.lengthScale = i729[23]
  i728.velocityScale = i729[24]
  i728.cameraVelocityScale = i729[25]
  i728.normalDirection = i729[26]
  i728.sortingFudge = i729[27]
  i728.minParticleSize = i729[28]
  i728.maxParticleSize = i729[29]
  i728.pivot = new pc.Vec3( i729[30], i729[31], i729[32] )
  request.r(i729[33], i729[34], 0, i728, 'trailMaterial')
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i733 = data
  request.r(i733[0], i733[1], 0, i732, 'clip')
  request.r(i733[2], i733[3], 0, i732, 'outputAudioMixerGroup')
  i732.playOnAwake = !!i733[4]
  i732.loop = !!i733[5]
  i732.time = i733[6]
  i732.volume = i733[7]
  i732.pitch = i733[8]
  i732.enabled = !!i733[9]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i735 = data
  i734.enabled = !!i735[0]
  i734.isTrigger = !!i735[1]
  request.r(i735[2], i735[3], 0, i734, 'material')
  request.r(i735[4], i735[5], 0, i734, 'sharedMesh')
  i734.convex = !!i735[6]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i737 = data
  i736.enabled = !!i737[0]
  i736.aspect = i737[1]
  i736.orthographic = !!i737[2]
  i736.orthographicSize = i737[3]
  i736.backgroundColor = new pc.Color(i737[4], i737[5], i737[6], i737[7])
  i736.nearClipPlane = i737[8]
  i736.farClipPlane = i737[9]
  i736.fieldOfView = i737[10]
  i736.depth = i737[11]
  i736.clearFlags = i737[12]
  i736.cullingMask = i737[13]
  i736.rect = i737[14]
  request.r(i737[15], i737[16], 0, i736, 'targetTexture')
  i736.usePhysicalProperties = !!i737[17]
  i736.focalLength = i737[18]
  i736.sensorSize = new pc.Vec2( i737[19], i737[20] )
  i736.lensShift = new pc.Vec2( i737[21], i737[22] )
  i736.gateFit = i737[23]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i739 = data
  i738.center = new pc.Vec3( i739[0], i739[1], i739[2] )
  i738.size = new pc.Vec3( i739[3], i739[4], i739[5] )
  i738.enabled = !!i739[6]
  i738.isTrigger = !!i739[7]
  request.r(i739[8], i739[9], 0, i738, 'material')
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i741 = data
  i740.pivot = new pc.Vec2( i741[0], i741[1] )
  i740.anchorMin = new pc.Vec2( i741[2], i741[3] )
  i740.anchorMax = new pc.Vec2( i741[4], i741[5] )
  i740.sizeDelta = new pc.Vec2( i741[6], i741[7] )
  i740.anchoredPosition3D = new pc.Vec3( i741[8], i741[9], i741[10] )
  i740.rotation = new pc.Quat(i741[11], i741[12], i741[13], i741[14])
  i740.scale = new pc.Vec3( i741[15], i741[16], i741[17] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i743 = data
  i742.enabled = !!i743[0]
  i742.planeDistance = i743[1]
  i742.referencePixelsPerUnit = i743[2]
  i742.isFallbackOverlay = !!i743[3]
  i742.renderMode = i743[4]
  i742.renderOrder = i743[5]
  i742.sortingLayerName = i743[6]
  i742.sortingOrder = i743[7]
  i742.scaleFactor = i743[8]
  request.r(i743[9], i743[10], 0, i742, 'worldCamera')
  i742.overrideSorting = !!i743[11]
  i742.pixelPerfect = !!i743[12]
  i742.targetDisplay = i743[13]
  i742.overridePixelPerfect = !!i743[14]
  return i742
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i745 = data
  i744.m_UiScaleMode = i745[0]
  i744.m_ReferencePixelsPerUnit = i745[1]
  i744.m_ScaleFactor = i745[2]
  i744.m_ReferenceResolution = new pc.Vec2( i745[3], i745[4] )
  i744.m_ScreenMatchMode = i745[5]
  i744.m_MatchWidthOrHeight = i745[6]
  i744.m_PhysicalUnit = i745[7]
  i744.m_FallbackScreenDPI = i745[8]
  i744.m_DefaultSpriteDPI = i745[9]
  i744.m_DynamicPixelsPerUnit = i745[10]
  i744.m_PresetInfoIsWorld = !!i745[11]
  return i744
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i747 = data
  i746.m_IgnoreReversedGraphics = !!i747[0]
  i746.m_BlockingObjects = i747[1]
  i746.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i747[2] )
  return i746
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i748 = root || request.c( 'EndCardController' )
  var i749 = data
  i748.alwaysShowEndcardTESTING = !!i749[0]
  i748.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i749[1], i748.EndCardOpenedEvent)
  i748._backgroundColor = new pc.Color(i749[2], i749[3], i749[4], i749[5])
  request.r(i749[6], i749[7], 0, i748, '_backgroundTexture')
  request.r(i749[8], i749[9], 0, i748, '_iconTexture')
  i748._iconColor = new pc.Color(i749[10], i749[11], i749[12], i749[13])
  request.r(i749[14], i749[15], 0, i748, '_buttonTexture')
  i748._buttonColor = new pc.Color(i749[16], i749[17], i749[18], i749[19])
  i748._endCardDescriptionText = i749[20]
  i748._CTAButtonText = i749[21]
  i748._useBestFitOnCTA = !!i749[22]
  i748._CTAFontColor = new pc.Color(i749[23], i749[24], i749[25], i749[26])
  i748._descriptionFontColor = new pc.Color(i749[27], i749[28], i749[29], i749[30])
  request.r(i749[31], i749[32], 0, i748, '_CTAFont')
  request.r(i749[33], i749[34], 0, i748, '_descriptionFont')
  i748._CTAFontSize = i749[35]
  i748._descriptionFontSize = i749[36]
  i748._centerDescriptionX = !!i749[37]
  i748._centerDescriptionY = !!i749[38]
  i748._centerButtonX = !!i749[39]
  i748._centerButtonY = !!i749[40]
  i748._descriptionPositionX = i749[41]
  i748._descriptionPositionY = i749[42]
  i748._buttonPositionX = i749[43]
  i748._buttonPositionY = i749[44]
  i748._CTAFontSizeLandscape = i749[45]
  i748._descriptionFontSizeLandscape = i749[46]
  i748._centerDescriptionXLandscape = !!i749[47]
  i748._centerDescriptionYLandscape = !!i749[48]
  i748._centerButtonXLandscape = !!i749[49]
  i748._centerButtonYLandscape = !!i749[50]
  i748._descriptionPositionXLandscape = i749[51]
  i748._descriptionPositionYLandscape = i749[52]
  i748._buttonPositionXLandscape = i749[53]
  i748._buttonPositionYLandscape = i749[54]
  i748._centerIconX = !!i749[55]
  i748._centerIconY = !!i749[56]
  i748._iconPositionX = i749[57]
  i748._iconPositionY = i749[58]
  i748._iconSize = i749[59]
  i748._roundEdgesOnIcon = !!i749[60]
  i748._centerIconXLandscape = !!i749[61]
  i748._centerIconYLandscape = !!i749[62]
  i748._iconPositionXLandscape = i749[63]
  i748._iconPositionYLandscape = i749[64]
  i748._iconSizeLandscape = i749[65]
  i748._roundEdgesOnIconLandscape = !!i749[66]
  i748._endCardClickableOptions = i749[67]
  i748._buttonAnimationType = i749[68]
  i748._endCardPortraitAnimationType = i749[69]
  i748._endCardLandscapeAnimationType = i749[70]
  request.r(i749[71], i749[72], 0, i748, '_backgroundImage')
  request.r(i749[73], i749[74], 0, i748, '_CTAButton')
  request.r(i749[75], i749[76], 0, i748, '_ScreenCTAButton')
  request.r(i749[77], i749[78], 0, i748, '_CTAButtonTextText')
  request.r(i749[79], i749[80], 0, i748, '_EndCardDescriptionTextText')
  request.r(i749[81], i749[82], 0, i748, '_maskIcon')
  request.r(i749[83], i749[84], 0, i748, '_iconRect')
  request.r(i749[85], i749[86], 0, i748, '_iconRectMask')
  request.r(i749[87], i749[88], 0, i748, '_descriptionRect')
  request.r(i749[89], i749[90], 0, i748, '_buttonRect')
  request.r(i749[91], i749[92], 0, i748, '_CTAButtonAnimator')
  request.r(i749[93], i749[94], 0, i748, '_endCardAnimator')
  request.r(i749[95], i749[96], 0, i748, '_iconImage')
  request.r(i749[97], i749[98], 0, i748, '_CTAButtonImage')
  return i748
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i751 = data
  i750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i751[0], i750.m_PersistentCalls)
  return i750
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i753 = data
  var i755 = i753[0]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('UnityEngine.Events.PersistentCall', i755[i + 0]));
  }
  i752.m_Calls = i754
  return i752
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_Target')
  i758.m_TargetAssemblyTypeName = i759[2]
  i758.m_MethodName = i759[3]
  i758.m_Mode = i759[4]
  i758.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i759[5], i758.m_Arguments)
  i758.m_CallState = i759[6]
  return i758
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i760 = root || request.c( 'EndCardSetScale' )
  var i761 = data
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i763 = data
  i762.cullTransparentMesh = !!i763[0]
  return i762
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Texture')
  i764.m_UVRect = UnityEngine.Rect.MinMaxRect(i765[2], i765[3], i765[4], i765[5])
  request.r(i765[6], i765[7], 0, i764, 'm_Material')
  i764.m_Maskable = !!i765[8]
  i764.m_Color = new pc.Color(i765[9], i765[10], i765[11], i765[12])
  i764.m_RaycastTarget = !!i765[13]
  i764.m_RaycastPadding = new pc.Vec4( i765[14], i765[15], i765[16], i765[17] )
  return i764
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i767 = data
  i766.m_AspectMode = i767[0]
  i766.m_AspectRatio = i767[1]
  return i766
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Mask' )
  var i769 = data
  i768.m_ShowMaskGraphic = !!i769[0]
  return i768
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Image' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_Sprite')
  i770.m_Type = i771[2]
  i770.m_PreserveAspect = !!i771[3]
  i770.m_FillCenter = !!i771[4]
  i770.m_FillMethod = i771[5]
  i770.m_FillAmount = i771[6]
  i770.m_FillClockwise = !!i771[7]
  i770.m_FillOrigin = i771[8]
  i770.m_UseSpriteMesh = !!i771[9]
  i770.m_PixelsPerUnitMultiplier = i771[10]
  request.r(i771[11], i771[12], 0, i770, 'm_Material')
  i770.m_Maskable = !!i771[13]
  i770.m_Color = new pc.Color(i771[14], i771[15], i771[16], i771[17])
  i770.m_RaycastTarget = !!i771[18]
  i770.m_RaycastPadding = new pc.Vec4( i771[19], i771[20], i771[21], i771[22] )
  return i770
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Text' )
  var i773 = data
  i772.m_FontData = request.d('UnityEngine.UI.FontData', i773[0], i772.m_FontData)
  i772.m_Text = i773[1]
  request.r(i773[2], i773[3], 0, i772, 'm_Material')
  i772.m_Maskable = !!i773[4]
  i772.m_Color = new pc.Color(i773[5], i773[6], i773[7], i773[8])
  i772.m_RaycastTarget = !!i773[9]
  i772.m_RaycastPadding = new pc.Vec4( i773[10], i773[11], i773[12], i773[13] )
  return i772
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.FontData' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'm_Font')
  i774.m_FontSize = i775[2]
  i774.m_FontStyle = i775[3]
  i774.m_BestFit = !!i775[4]
  i774.m_MinSize = i775[5]
  i774.m_MaxSize = i775[6]
  i774.m_Alignment = i775[7]
  i774.m_AlignByGeometry = !!i775[8]
  i774.m_RichText = !!i775[9]
  i774.m_HorizontalOverflow = i775[10]
  i774.m_VerticalOverflow = i775[11]
  i774.m_LineSpacing = i775[12]
  return i774
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.Button' )
  var i777 = data
  i776.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i777[0], i776.m_OnClick)
  i776.m_Navigation = request.d('UnityEngine.UI.Navigation', i777[1], i776.m_Navigation)
  i776.m_Transition = i777[2]
  i776.m_Colors = request.d('UnityEngine.UI.ColorBlock', i777[3], i776.m_Colors)
  i776.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i777[4], i776.m_SpriteState)
  i776.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i777[5], i776.m_AnimationTriggers)
  i776.m_Interactable = !!i777[6]
  request.r(i777[7], i777[8], 0, i776, 'm_TargetGraphic')
  return i776
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i779 = data
  i778.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i779[0], i778.m_PersistentCalls)
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i791 = data
  i790.m_Alpha = i791[0]
  i790.m_Interactable = !!i791[1]
  i790.m_BlocksRaycasts = !!i791[2]
  i790.m_IgnoreParentGroups = !!i791[3]
  i790.enabled = !!i791[4]
  return i790
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i792 = root || request.c( 'UICrosshairItem' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'CrosshairRectTransform')
  i792._distanceMax = i793[2]
  i792._distanceMin = i793[3]
  i792._speedShrink = i793[4]
  i792._currentSpeed = i793[5]
  i792._rateOnMove = i793[6]
  i792._rateOnAttack = i793[7]
  return i792
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i794 = root || request.c( 'BulletTrail' )
  var i795 = data
  i794.Speed = i795[0]
  i794.LifeTime = i795[1]
  request.r(i795[2], i795[3], 0, i794, '_trail')
  i794._trailStartScale = new pc.Vec3( i795[4], i795[5], i795[6] )
  i794._trailMaxScale = new pc.Vec3( i795[7], i795[8], i795[9] )
  i794._trailLengthAtMaxScale = i795[10]
  return i794
}

Deserializers["Effect"] = function (request, data, root) {
  var i796 = root || request.c( 'Effect' )
  var i797 = data
  var i799 = i797[0]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.particles = i798
  i796._lifeTime = i797[1]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i803 = data
  i802.name = i803[0]
  i802.atlasId = i803[1]
  i802.mipmapCount = i803[2]
  i802.hdr = !!i803[3]
  i802.size = i803[4]
  i802.anisoLevel = i803[5]
  i802.filterMode = i803[6]
  i802.wrapMode = i803[7]
  var i805 = i803[8]
  var i804 = []
  for(var i = 0; i < i805.length; i += 4) {
    i804.push( UnityEngine.Rect.MinMaxRect(i805[i + 0], i805[i + 1], i805[i + 2], i805[i + 3]) );
  }
  i802.rects = i804
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i809 = data
  i808.name = i809[0]
  i808.index = i809[1]
  i808.startup = !!i809[2]
  return i808
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'm_FirstSelected')
  i810.m_sendNavigationEvents = !!i811[2]
  i810.m_DragThreshold = i811[3]
  return i810
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i813 = data
  i812.m_HorizontalAxis = i813[0]
  i812.m_VerticalAxis = i813[1]
  i812.m_SubmitButton = i813[2]
  i812.m_CancelButton = i813[3]
  i812.m_InputActionsPerSecond = i813[4]
  i812.m_RepeatDelay = i813[5]
  i812.m_ForceModuleActive = !!i813[6]
  i812.m_SendPointerHoverToParent = !!i813[7]
  return i812
}

Deserializers["UIManager"] = function (request, data, root) {
  var i814 = root || request.c( 'UIManager' )
  var i815 = data
  i814.url = i815[0]
  request.r(i815[1], i815[2], 0, i814, 'InGame')
  request.r(i815[3], i815[4], 0, i814, 'TotalBotText')
  i814.initBot = i815[5]
  request.r(i815[6], i815[7], 0, i814, 'process')
  request.r(i815[8], i815[9], 0, i814, 'gameProcess')
  request.r(i815[10], i815[11], 0, i814, 'tapToPlay')
  return i814
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i816 = root || request.c( 'UnityEngine.UI.Outline' )
  var i817 = data
  i816.m_EffectColor = new pc.Color(i817[0], i817[1], i817[2], i817[3])
  i816.m_EffectDistance = new pc.Vec2( i817[4], i817[5] )
  i816.m_UseGraphicAlpha = !!i817[6]
  return i816
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i818 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i819 = data
  i818.m_Spacing = i819[0]
  i818.m_ChildForceExpandWidth = !!i819[1]
  i818.m_ChildForceExpandHeight = !!i819[2]
  i818.m_ChildControlWidth = !!i819[3]
  i818.m_ChildControlHeight = !!i819[4]
  i818.m_ChildScaleWidth = !!i819[5]
  i818.m_ChildScaleHeight = !!i819[6]
  i818.m_ReverseArrangement = !!i819[7]
  i818.m_Padding = UnityEngine.RectOffset.FromPaddings(i819[8], i819[9], i819[10], i819[11])
  i818.m_ChildAlignment = i819[12]
  return i818
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i820 = root || request.c( 'BotParachute' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, '_animator')
  request.r(i821[2], i821[3], 0, i820, '_muzzle')
  request.r(i821[4], i821[5], 0, i820, 'bullet')
  i820.target = new pc.Vec3( i821[6], i821[7], i821[8] )
  i820.moveIndex = i821[9]
  i820.isMoveDone = !!i821[10]
  i820.isDie = !!i821[11]
  i820.isMove = !!i821[12]
  i820.parachuteDone = !!i821[13]
  i820.isTakeDame = !!i821[14]
  i820.maxHealth = i821[15]
  request.r(i821[16], i821[17], 0, i820, 'healthBarRenderer')
  request.r(i821[18], i821[19], 0, i820, '_audioSource')
  request.r(i821[20], i821[21], 0, i820, '_hitSource')
  return i820
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i822 = root || request.c( 'ParachuteController' )
  var i823 = data
  i822.Speed = i823[0]
  request.r(i823[1], i823[2], 0, i822, '_botController')
  i822.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i823[3] )
  request.r(i823[4], i823[5], 0, i822, 'ParachuteScale')
  i822.scaleAmount = i823[6]
  i822.velocity = new pc.Vec3( i823[7], i823[8], i823[9] )
  i822._distanceOpenParachute = i823[10]
  i822._distanceCloseParachute = i823[11]
  return i822
}

Deserializers["BotController"] = function (request, data, root) {
  var i824 = root || request.c( 'BotController' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, '_animator')
  request.r(i825[2], i825[3], 0, i824, '_muzzle')
  request.r(i825[4], i825[5], 0, i824, 'bullet')
  i824.target = new pc.Vec3( i825[6], i825[7], i825[8] )
  i824.moveIndex = i825[9]
  i824.isMoveDone = !!i825[10]
  i824.isDie = !!i825[11]
  i824.isTakeDame = !!i825[12]
  i824.maxHealth = i825[13]
  request.r(i825[14], i825[15], 0, i824, 'healthBarRenderer')
  request.r(i825[16], i825[17], 0, i824, '_audioSource')
  request.r(i825[18], i825[19], 0, i824, '_hitSource')
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i827 = data
  i826.enabled = !!i827[0]
  i826.type = i827[1]
  i826.color = new pc.Color(i827[2], i827[3], i827[4], i827[5])
  i826.cullingMask = i827[6]
  i826.intensity = i827[7]
  i826.range = i827[8]
  i826.spotAngle = i827[9]
  i826.shadows = i827[10]
  i826.shadowNormalBias = i827[11]
  i826.shadowBias = i827[12]
  i826.shadowStrength = i827[13]
  i826.shadowResolution = i827[14]
  i826.lightmapBakeType = i827[15]
  i826.renderMode = i827[16]
  request.r(i827[17], i827[18], 0, i826, 'cookie')
  i826.cookieSize = i827[19]
  return i826
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i828 = root || request.c( 'PlayerView' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, '_mainRoot')
  request.r(i829[2], i829[3], 0, i828, '_head')
  i828._sensitivity = i829[4]
  i828._slerpFactor = i829[5]
  i828._viewHorizontalThreshold = new pc.Vec2( i829[6], i829[7] )
  i828._viewVerticalThreshold = new pc.Vec2( i829[8], i829[9] )
  i828._initRotate = new pc.Vec2( i829[10], i829[11] )
  i828._totalRotate = new pc.Vec2( i829[12], i829[13] )
  return i828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i831 = data
  i830.playAutomatically = !!i831[0]
  request.r(i831[1], i831[2], 0, i830, 'clip')
  var i833 = i831[3]
  var i832 = []
  for(var i = 0; i < i833.length; i += 2) {
  request.r(i833[i + 0], i833[i + 1], 2, i832, '')
  }
  i830.clips = i832
  i830.wrapMode = i831[4]
  i830.enabled = !!i831[5]
  return i830
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i836 = root || request.c( 'WeaponController' )
  var i837 = data
  i836.Mask = UnityEngine.LayerMask.FromIntegerValue( i837[0] )
  i836.damage = i837[1]
  request.r(i837[2], i837[3], 0, i836, '_muzzleTrans')
  request.r(i837[4], i837[5], 0, i836, '_animation')
  request.r(i837[6], i837[7], 0, i836, 'bullet')
  request.r(i837[8], i837[9], 0, i836, '_muzzleFlash')
  request.r(i837[10], i837[11], 0, i836, 'audioClip')
  request.r(i837[12], i837[13], 0, i836, 'audioSource')
  i836.SphereRadius = i837[14]
  request.r(i837[15], i837[16], 0, i836, 'Effect')
  return i836
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i838 = root || request.c( 'SpawnBot' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, '_botPrefab')
  i838._spawnInterval = i839[2]
  i838._upper = i839[3]
  return i838
}

Deserializers["BotManager"] = function (request, data, root) {
  var i840 = root || request.c( 'BotManager' )
  var i841 = data
  return i840
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i842 = root || request.c( 'AudioManager' )
  var i843 = data
  var i845 = i843[0]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.AttackSounds = i844
  var i847 = i843[1]
  var i846 = []
  for(var i = 0; i < i847.length; i += 2) {
  request.r(i847[i + 0], i847[i + 1], 2, i846, '')
  }
  i842.HitSounds = i846
  return i842
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i850 = root || request.c( 'ConfigManager' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('StepData', i853[i + 0]) );
  }
  i850._stepDatas = i852
  return i850
}

Deserializers["StepData"] = function (request, data, root) {
  var i856 = root || request.c( 'StepData' )
  var i857 = data
  i856.NumberBot = i857[0]
  i856.NumberParachute = i857[1]
  return i856
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i858 = root || request.c( 'GamePlayManager' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, '_spawnBotNormal')
  request.r(i859[2], i859[3], 0, i858, '_spawnBotParachute')
  return i858
}

Deserializers["PathManager"] = function (request, data, root) {
  var i860 = root || request.c( 'PathManager' )
  var i861 = data
  var i863 = i861[0]
  var i862 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i863.length; i += 1) {
    i862.add(request.d('Path', i863[i + 0]));
  }
  i860._paths = i862
  var i865 = i861[1]
  var i864 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i865.length; i += 1) {
    i864.add(request.d('Path', i865[i + 0]));
  }
  i860._pathsParachute = i864
  return i860
}

Deserializers["Path"] = function (request, data, root) {
  var i868 = root || request.c( 'Path' )
  var i869 = data
  i868.IsUse = !!i869[0]
  var i871 = i869[1]
  var i870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 1, i870, '')
  }
  i868.WayPoints = i870
  return i868
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i874 = root || request.c( 'ObjectPool' )
  var i875 = data
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i877 = data
  i876.ambientIntensity = i877[0]
  i876.reflectionIntensity = i877[1]
  i876.ambientMode = i877[2]
  i876.ambientLight = new pc.Color(i877[3], i877[4], i877[5], i877[6])
  i876.ambientSkyColor = new pc.Color(i877[7], i877[8], i877[9], i877[10])
  i876.ambientGroundColor = new pc.Color(i877[11], i877[12], i877[13], i877[14])
  i876.ambientEquatorColor = new pc.Color(i877[15], i877[16], i877[17], i877[18])
  i876.fogColor = new pc.Color(i877[19], i877[20], i877[21], i877[22])
  i876.fogEndDistance = i877[23]
  i876.fogStartDistance = i877[24]
  i876.fogDensity = i877[25]
  i876.fog = !!i877[26]
  request.r(i877[27], i877[28], 0, i876, 'skybox')
  i876.fogMode = i877[29]
  var i879 = i877[30]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i879[i + 0]) );
  }
  i876.lightmaps = i878
  i876.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i877[31], i876.lightProbes)
  i876.lightmapsMode = i877[32]
  i876.mixedBakeMode = i877[33]
  i876.environmentLightingMode = i877[34]
  i876.ambientProbe = new pc.SphericalHarmonicsL2(i877[35])
  i876.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i877[36])
  i876.useReferenceAmbientProbe = !!i877[37]
  request.r(i877[38], i877[39], 0, i876, 'customReflection')
  request.r(i877[40], i877[41], 0, i876, 'defaultReflection')
  i876.defaultReflectionMode = i877[42]
  i876.defaultReflectionResolution = i877[43]
  i876.sunLightObjectId = i877[44]
  i876.pixelLightCount = i877[45]
  i876.defaultReflectionHDR = !!i877[46]
  i876.hasLightDataAsset = !!i877[47]
  i876.hasManualGenerate = !!i877[48]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'lightmapColor')
  request.r(i883[2], i883[3], 0, i882, 'lightmapDirection')
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i884 = root || new UnityEngine.LightProbes()
  var i885 = data
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i895[i + 0]));
  }
  i892.ShaderCompilationErrors = i894
  i892.name = i893[1]
  i892.guid = i893[2]
  var i897 = i893[3]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i892.shaderDefinedKeywords = i896
  var i899 = i893[4]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i899[i + 0]) );
  }
  i892.passes = i898
  var i901 = i893[5]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i901[i + 0]) );
  }
  i892.usePasses = i900
  var i903 = i893[6]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i903[i + 0]) );
  }
  i892.defaultParameterValues = i902
  request.r(i893[7], i893[8], 0, i892, 'unityFallbackShader')
  i892.readDepth = !!i893[9]
  i892.isCreatedByShaderGraph = !!i893[10]
  i892.usedBatchUniforms = i893[11]
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i907 = data
  i906.shaderName = i907[0]
  i906.errorMessage = i907[1]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i912 = root || new pc.UnityShaderPass()
  var i913 = data
  i912.id = i913[0]
  i912.subShaderIndex = i913[1]
  i912.name = i913[2]
  i912.passType = i913[3]
  i912.grabPassTextureName = i913[4]
  i912.usePass = !!i913[5]
  i912.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[6], i912.zTest)
  i912.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[7], i912.zWrite)
  i912.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[8], i912.culling)
  i912.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[9], i912.blending)
  i912.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i913[10], i912.alphaBlending)
  i912.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[11], i912.colorWriteMask)
  i912.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[12], i912.offsetUnits)
  i912.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[13], i912.offsetFactor)
  i912.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[14], i912.stencilRef)
  i912.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[15], i912.stencilReadMask)
  i912.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i913[16], i912.stencilWriteMask)
  i912.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[17], i912.stencilOp)
  i912.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[18], i912.stencilOpFront)
  i912.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i913[19], i912.stencilOpBack)
  var i915 = i913[20]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i915[i + 0]) );
  }
  i912.tags = i914
  var i917 = i913[21]
  var i916 = []
  for(var i = 0; i < i917.length; i += 1) {
    i916.push( i917[i + 0] );
  }
  i912.passDefinedKeywords = i916
  var i919 = i913[22]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i919[i + 0]) );
  }
  i912.passDefinedKeywordGroups = i918
  var i921 = i913[23]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i921[i + 0]) );
  }
  i912.variants = i920
  var i923 = i913[24]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i923[i + 0]) );
  }
  i912.excludedVariants = i922
  i912.hasDepthReader = !!i913[25]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i925 = data
  i924.val = i925[0]
  i924.name = i925[1]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i927 = data
  i926.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[0], i926.src)
  i926.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[1], i926.dst)
  i926.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i927[2], i926.op)
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i929 = data
  i928.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[0], i928.pass)
  i928.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[1], i928.fail)
  i928.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[2], i928.zFail)
  i928.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i929[3], i928.comp)
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i933 = data
  i932.name = i933[0]
  i932.value = i933[1]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i937 = data
  var i939 = i937[0]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( i939[i + 0] );
  }
  i936.keywords = i938
  i936.hasDiscard = !!i937[1]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i943 = data
  i942.passId = i943[0]
  i942.subShaderIndex = i943[1]
  var i945 = i943[2]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.keywords = i944
  i942.vertexProgram = i943[3]
  i942.fragmentProgram = i943[4]
  i942.readDepth = !!i943[5]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i949 = data
  request.r(i949[0], i949[1], 0, i948, 'shader')
  i948.pass = i949[2]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i953 = data
  i952.name = i953[0]
  i952.type = i953[1]
  i952.value = new pc.Vec4( i953[2], i953[3], i953[4], i953[5] )
  i952.textureValue = i953[6]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i955 = data
  i954.name = i955[0]
  request.r(i955[1], i955[2], 0, i954, 'texture')
  i954.aabb = i955[3]
  i954.vertices = i955[4]
  i954.triangles = i955[5]
  i954.textureRect = UnityEngine.Rect.MinMaxRect(i955[6], i955[7], i955[8], i955[9])
  i954.packedRect = UnityEngine.Rect.MinMaxRect(i955[10], i955[11], i955[12], i955[13])
  i954.border = new pc.Vec4( i955[14], i955[15], i955[16], i955[17] )
  i954.transparency = i955[18]
  i954.bounds = i955[19]
  i954.pixelsPerUnit = i955[20]
  i954.textureWidth = i955[21]
  i954.textureHeight = i955[22]
  i954.nativeSize = new pc.Vec2( i955[23], i955[24] )
  i954.pivot = new pc.Vec2( i955[25], i955[26] )
  i954.textureRectOffset = new pc.Vec2( i955[27], i955[28] )
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i957 = data
  i956.name = i957[0]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i959 = data
  i958.name = i959[0]
  i958.wrapMode = i959[1]
  i958.isLooping = !!i959[2]
  i958.length = i959[3]
  var i961 = i959[4]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i961[i + 0]) );
  }
  i958.curves = i960
  var i963 = i959[5]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i963[i + 0]) );
  }
  i958.events = i962
  i958.halfPrecision = !!i959[6]
  i958.frameRate = i959[7]
  i958.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i959[8], i958.localBounds)
  i958.hasMuscleCurves = !!i959[9]
  var i965 = i959[10]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i958.clipMuscleConstant = i964
  i958.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i959[11], i958.clipBindingConstant)
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i969 = data
  i968.path = i969[0]
  i968.componentType = i969[1]
  i968.property = i969[2]
  i968.keys = i969[3]
  var i971 = i969[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i971[i + 0]) );
  }
  i968.objectReferenceKeys = i970
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i975 = data
  i974.functionName = i975[0]
  i974.floatParameter = i975[1]
  i974.intParameter = i975[2]
  i974.stringParameter = i975[3]
  request.r(i975[4], i975[5], 0, i974, 'objectReferenceParameter')
  i974.time = i975[6]
  return i974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i977 = data
  i976.center = new pc.Vec3( i977[0], i977[1], i977[2] )
  i976.extends = new pc.Vec3( i977[3], i977[4], i977[5] )
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i980.genericBindings = i982
  var i985 = i981[1]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i980.pptrCurveMapping = i984
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i989 = data
  i988.time = i989[0]
  request.r(i989[1], i989[2], 0, i988, 'value')
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i991 = data
  i990.name = i991[0]
  i990.ascent = i991[1]
  i990.originalLineHeight = i991[2]
  i990.fontSize = i991[3]
  var i993 = i991[4]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i993[i + 0]) );
  }
  i990.characterInfo = i992
  request.r(i991[5], i991[6], 0, i990, 'texture')
  i990.originalFontSize = i991[7]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i997 = data
  i996.index = i997[0]
  i996.advance = i997[1]
  i996.bearing = i997[2]
  i996.glyphWidth = i997[3]
  i996.glyphHeight = i997[4]
  i996.minX = i997[5]
  i996.maxX = i997[6]
  i996.minY = i997[7]
  i996.maxY = i997[8]
  i996.uvBottomLeftX = i997[9]
  i996.uvBottomLeftY = i997[10]
  i996.uvBottomRightX = i997[11]
  i996.uvBottomRightY = i997[12]
  i996.uvTopLeftX = i997[13]
  i996.uvTopLeftY = i997[14]
  i996.uvTopRightX = i997[15]
  i996.uvTopRightY = i997[16]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i999 = data
  i998.name = i999[0]
  var i1001 = i999[1]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1001[i + 0]) );
  }
  i998.states = i1000
  var i1003 = i999[2]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1003[i + 0]) );
  }
  i998.layers = i1002
  var i1005 = i999[3]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1005[i + 0]) );
  }
  i998.parameters = i1004
  i998.animationClips = i999[4]
  i998.HasSubStateMachines = !!i999[5]
  i998.avatarUnsupported = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1009 = data
  i1008.cycleOffset = i1009[0]
  i1008.cycleOffsetParameter = i1009[1]
  i1008.cycleOffsetParameterActive = !!i1009[2]
  i1008.mirror = !!i1009[3]
  i1008.mirrorParameter = i1009[4]
  i1008.mirrorParameterActive = !!i1009[5]
  i1008.motionId = i1009[6]
  i1008.nameHash = i1009[7]
  i1008.fullPathHash = i1009[8]
  i1008.speed = i1009[9]
  i1008.speedParameter = i1009[10]
  i1008.speedParameterActive = !!i1009[11]
  i1008.tag = i1009[12]
  i1008.name = i1009[13]
  i1008.layer = i1009[14]
  i1008.writeDefaultValues = !!i1009[15]
  var i1011 = i1009[16]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1011[i + 0]) );
  }
  i1008.transitions = i1010
  var i1013 = i1009[17]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1008.behaviours = i1012
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1017 = data
  i1016.fullPath = i1017[0]
  i1016.canTransitionToSelf = !!i1017[1]
  i1016.duration = i1017[2]
  i1016.exitTime = i1017[3]
  i1016.hasExitTime = !!i1017[4]
  i1016.hasFixedDuration = !!i1017[5]
  i1016.interruptionSource = i1017[6]
  i1016.offset = i1017[7]
  i1016.orderedInterruption = !!i1017[8]
  i1016.destinationStateNameHash = i1017[9]
  i1016.destinationStateMachineId = i1017[10]
  i1016.isExit = !!i1017[11]
  i1016.mute = !!i1017[12]
  i1016.solo = !!i1017[13]
  var i1019 = i1017[14]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1019[i + 0]) );
  }
  i1016.conditions = i1018
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1023 = data
  i1022.mode = i1023[0]
  i1022.parameter = i1023[1]
  i1022.threshold = i1023[2]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1029 = data
  i1028.blendingMode = i1029[0]
  i1028.defaultWeight = i1029[1]
  i1028.name = i1029[2]
  i1028.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1029[3], i1028.stateMachine)
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1031 = data
  i1030.id = i1031[0]
  i1030.defaultStateNameHash = i1031[1]
  var i1033 = i1031[2]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1033[i + 0]) );
  }
  i1030.entryTransitions = i1032
  var i1035 = i1031[3]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1035[i + 0]) );
  }
  i1030.anyStateTransitions = i1034
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1039 = data
  i1038.destinationStateNameHash = i1039[0]
  i1038.destinationStateMachineId = i1039[1]
  i1038.isExit = !!i1039[2]
  i1038.mute = !!i1039[3]
  i1038.solo = !!i1039[4]
  var i1041 = i1039[5]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1041[i + 0]) );
  }
  i1038.conditions = i1040
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1045 = data
  i1044.defaultBool = !!i1045[0]
  i1044.defaultFloat = i1045[1]
  i1044.defaultInt = i1045[2]
  i1044.name = i1045[3]
  i1044.nameHash = i1045[4]
  i1044.type = i1045[5]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1049[i + 0]) );
  }
  i1046.files = i1048
  i1046.componentToPrefabIds = i1047[1]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1053 = data
  i1052.path = i1053[0]
  request.r(i1053[1], i1053[2], 0, i1052, 'unityObject')
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1055 = data
  var i1057 = i1055[0]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1057[i + 0]) );
  }
  i1054.scriptsExecutionOrder = i1056
  var i1059 = i1055[1]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1059[i + 0]) );
  }
  i1054.sortingLayers = i1058
  var i1061 = i1055[2]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1061[i + 0]) );
  }
  i1054.cullingLayers = i1060
  i1054.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1055[3], i1054.timeSettings)
  i1054.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1055[4], i1054.physicsSettings)
  i1054.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1055[5], i1054.physics2DSettings)
  i1054.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1055[6], i1054.qualitySettings)
  i1054.enableRealtimeShadows = !!i1055[7]
  i1054.enableAutoInstancing = !!i1055[8]
  i1054.enableDynamicBatching = !!i1055[9]
  i1054.lightmapEncodingQuality = i1055[10]
  i1054.desiredColorSpace = i1055[11]
  var i1063 = i1055[12]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( i1063[i + 0] );
  }
  i1054.allTags = i1062
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = i1067[1]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.name = i1071[1]
  i1070.value = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.name = i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1077 = data
  i1076.fixedDeltaTime = i1077[0]
  i1076.maximumDeltaTime = i1077[1]
  i1076.timeScale = i1077[2]
  i1076.maximumParticleTimestep = i1077[3]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1079 = data
  i1078.gravity = new pc.Vec3( i1079[0], i1079[1], i1079[2] )
  i1078.defaultSolverIterations = i1079[3]
  i1078.bounceThreshold = i1079[4]
  i1078.autoSyncTransforms = !!i1079[5]
  i1078.autoSimulation = !!i1079[6]
  var i1081 = i1079[7]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1081[i + 0]) );
  }
  i1078.collisionMatrix = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1085 = data
  i1084.enabled = !!i1085[0]
  i1084.layerId = i1085[1]
  i1084.otherLayerId = i1085[2]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'material')
  i1086.gravity = new pc.Vec2( i1087[2], i1087[3] )
  i1086.positionIterations = i1087[4]
  i1086.velocityIterations = i1087[5]
  i1086.velocityThreshold = i1087[6]
  i1086.maxLinearCorrection = i1087[7]
  i1086.maxAngularCorrection = i1087[8]
  i1086.maxTranslationSpeed = i1087[9]
  i1086.maxRotationSpeed = i1087[10]
  i1086.baumgarteScale = i1087[11]
  i1086.baumgarteTOIScale = i1087[12]
  i1086.timeToSleep = i1087[13]
  i1086.linearSleepTolerance = i1087[14]
  i1086.angularSleepTolerance = i1087[15]
  i1086.defaultContactOffset = i1087[16]
  i1086.autoSimulation = !!i1087[17]
  i1086.queriesHitTriggers = !!i1087[18]
  i1086.queriesStartInColliders = !!i1087[19]
  i1086.callbacksOnDisable = !!i1087[20]
  i1086.reuseCollisionCallbacks = !!i1087[21]
  i1086.autoSyncTransforms = !!i1087[22]
  var i1089 = i1087[23]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1089[i + 0]) );
  }
  i1086.collisionMatrix = i1088
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1093 = data
  i1092.enabled = !!i1093[0]
  i1092.layerId = i1093[1]
  i1092.otherLayerId = i1093[2]
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1097[i + 0]) );
  }
  i1094.qualityLevels = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( i1099[i + 0] );
  }
  i1094.names = i1098
  i1094.shadows = i1095[2]
  i1094.anisotropicFiltering = i1095[3]
  i1094.antiAliasing = i1095[4]
  i1094.lodBias = i1095[5]
  i1094.shadowCascades = i1095[6]
  i1094.shadowDistance = i1095[7]
  i1094.shadowmaskMode = i1095[8]
  i1094.shadowProjection = i1095[9]
  i1094.shadowResolution = i1095[10]
  i1094.softParticles = !!i1095[11]
  i1094.softVegetation = !!i1095[12]
  i1094.activeColorSpace = i1095[13]
  i1094.desiredColorSpace = i1095[14]
  i1094.masterTextureLimit = i1095[15]
  i1094.maxQueuedFrames = i1095[16]
  i1094.particleRaycastBudget = i1095[17]
  i1094.pixelLightCount = i1095[18]
  i1094.realtimeReflectionProbes = !!i1095[19]
  i1094.shadowCascade2Split = i1095[20]
  i1094.shadowCascade4Split = new pc.Vec3( i1095[21], i1095[22], i1095[23] )
  i1094.streamingMipmapsActive = !!i1095[24]
  i1094.vSyncCount = i1095[25]
  i1094.asyncUploadBufferSize = i1095[26]
  i1094.asyncUploadTimeSlice = i1095[27]
  i1094.billboardsFaceCameraPosition = !!i1095[28]
  i1094.shadowNearPlaneOffset = i1095[29]
  i1094.streamingMipmapsMemoryBudget = i1095[30]
  i1094.maximumLODLevel = i1095[31]
  i1094.streamingMipmapsAddAllCameras = !!i1095[32]
  i1094.streamingMipmapsMaxLevelReduction = i1095[33]
  i1094.streamingMipmapsRenderersPerFrame = i1095[34]
  i1094.resolutionScalingFixedDPIFactor = i1095[35]
  i1094.streamingMipmapsMaxFileIORequests = i1095[36]
  i1094.currentQualityLevel = i1095[37]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1103 = data
  i1102.name = i1103[0]
  var i1105 = i1103[1]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1105[i + 0]) );
  }
  i1102.tos = i1104
  var i1107 = i1103[2]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1102.constant = i1106
  i1102.isValid = !!i1103[3]
  i1102.isHuman = !!i1103[4]
  i1102.hasRootMotion = !!i1103[5]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1111 = data
  i1110.hash = i1111[0]
  i1110.path = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1115 = data
  i1114.weight = i1115[0]
  i1114.vertices = i1115[1]
  i1114.normals = i1115[2]
  i1114.tangents = i1115[3]
  return i1114
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

Deserializers.buildID = "edeb4c8c-cbb1-4614-b572-690d8d300651";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

