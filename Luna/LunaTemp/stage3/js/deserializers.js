var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.JointSpring' )
  var i579 = data
  i578.spring = i579[0]
  i578.damper = i579[1]
  i578.targetPosition = i579[2]
  return i578
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointMotor' )
  var i581 = data
  i580.m_TargetVelocity = i581[0]
  i580.m_Force = i581[1]
  i580.m_FreeSpin = i581[2]
  return i580
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointLimits' )
  var i583 = data
  i582.m_Min = i583[0]
  i582.m_Max = i583[1]
  i582.m_Bounciness = i583[2]
  i582.m_BounceMinVelocity = i583[3]
  i582.m_ContactDistance = i583[4]
  i582.minBounce = i583[5]
  i582.maxBounce = i583[6]
  return i582
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointDrive' )
  var i585 = data
  i584.m_PositionSpring = i585[0]
  i584.m_PositionDamper = i585[1]
  i584.m_MaximumForce = i585[2]
  return i584
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i587 = data
  i586.m_Spring = i587[0]
  i586.m_Damper = i587[1]
  return i586
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i589 = data
  i588.m_Limit = i589[0]
  i588.m_Bounciness = i589[1]
  i588.m_ContactDistance = i589[2]
  return i588
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i591 = data
  i590.m_ExtremumSlip = i591[0]
  i590.m_ExtremumValue = i591[1]
  i590.m_AsymptoteSlip = i591[2]
  i590.m_AsymptoteValue = i591[3]
  i590.m_Stiffness = i591[4]
  return i590
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i593 = data
  i592.m_LowerAngle = i593[0]
  i592.m_UpperAngle = i593[1]
  return i592
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i595 = data
  i594.m_MotorSpeed = i595[0]
  i594.m_MaximumMotorTorque = i595[1]
  return i594
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i597 = data
  i596.m_DampingRatio = i597[0]
  i596.m_Frequency = i597[1]
  i596.m_Angle = i597[2]
  return i596
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i599 = data
  i598.m_LowerTranslation = i599[0]
  i598.m_UpperTranslation = i599[1]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i600 = root || new pc.UnityMaterial()
  var i601 = data
  i600.name = i601[0]
  request.r(i601[1], i601[2], 0, i600, 'shader')
  i600.renderQueue = i601[3]
  i600.enableInstancing = !!i601[4]
  var i603 = i601[5]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i603[i + 0]) );
  }
  i600.floatParameters = i602
  var i605 = i601[6]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i605[i + 0]) );
  }
  i600.colorParameters = i604
  var i607 = i601[7]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i607[i + 0]) );
  }
  i600.vectorParameters = i606
  var i609 = i601[8]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i609[i + 0]) );
  }
  i600.textureParameters = i608
  var i611 = i601[9]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i611[i + 0]) );
  }
  i600.materialFlags = i610
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i619 = data
  i618.name = i619[0]
  i618.value = new pc.Color(i619[1], i619[2], i619[3], i619[4])
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i623 = data
  i622.name = i623[0]
  i622.value = new pc.Vec4( i623[1], i623[2], i623[3], i623[4] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i627 = data
  i626.name = i627[0]
  request.r(i627[1], i627[2], 0, i626, 'value')
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i631 = data
  i630.name = i631[0]
  i630.enabled = !!i631[1]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i633 = data
  i632.name = i633[0]
  i632.width = i633[1]
  i632.height = i633[2]
  i632.mipmapCount = i633[3]
  i632.anisoLevel = i633[4]
  i632.filterMode = i633[5]
  i632.hdr = !!i633[6]
  i632.format = i633[7]
  i632.wrapMode = i633[8]
  i632.alphaIsTransparency = !!i633[9]
  i632.alphaSource = i633[10]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i635 = data
  i634.position = new pc.Vec3( i635[0], i635[1], i635[2] )
  i634.scale = new pc.Vec3( i635[3], i635[4], i635[5] )
  i634.rotation = new pc.Quat(i635[6], i635[7], i635[8], i635[9])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i637 = data
  request.r(i637[0], i637[1], 0, i636, 'animatorController')
  request.r(i637[2], i637[3], 0, i636, 'avatar')
  i636.updateMode = i637[4]
  i636.hasTransformHierarchy = !!i637[5]
  i636.applyRootMotion = !!i637[6]
  var i639 = i637[7]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i636.humanBones = i638
  i636.enabled = !!i637[8]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i643 = data
  i642.enabled = !!i643[0]
  request.r(i643[1], i643[2], 0, i642, 'sharedMaterial')
  var i645 = i643[3]
  var i644 = []
  for(var i = 0; i < i645.length; i += 2) {
  request.r(i645[i + 0], i645[i + 1], 2, i644, '')
  }
  i642.sharedMaterials = i644
  i642.receiveShadows = !!i643[4]
  i642.shadowCastingMode = i643[5]
  i642.sortingLayerID = i643[6]
  i642.sortingOrder = i643[7]
  i642.lightmapIndex = i643[8]
  i642.lightmapSceneIndex = i643[9]
  i642.lightmapScaleOffset = new pc.Vec4( i643[10], i643[11], i643[12], i643[13] )
  i642.lightProbeUsage = i643[14]
  i642.reflectionProbeUsage = i643[15]
  request.r(i643[16], i643[17], 0, i642, 'sharedMesh')
  var i647 = i643[18]
  var i646 = []
  for(var i = 0; i < i647.length; i += 2) {
  request.r(i647[i + 0], i647[i + 1], 2, i646, '')
  }
  i642.bones = i646
  i642.updateWhenOffscreen = !!i643[19]
  i642.localBounds = i643[20]
  request.r(i643[21], i643[22], 0, i642, 'rootBone')
  var i649 = i643[23]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i649[i + 0]) );
  }
  i642.blendShapesWeights = i648
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i655 = data
  i654.weight = i655[0]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i657 = data
  i656.name = i657[0]
  i656.tagId = i657[1]
  i656.enabled = !!i657[2]
  i656.isStatic = !!i657[3]
  i656.layer = i657[4]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i659 = data
  i658.name = i659[0]
  i658.halfPrecision = !!i659[1]
  i658.vertexCount = i659[2]
  i658.aabb = i659[3]
  var i661 = i659[4]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( !!i661[i + 0] );
  }
  i658.streams = i660
  i658.vertices = i659[5]
  var i663 = i659[6]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i663[i + 0]) );
  }
  i658.subMeshes = i662
  var i665 = i659[7]
  var i664 = []
  for(var i = 0; i < i665.length; i += 16) {
    i664.push( new pc.Mat4().setData(i665[i + 0], i665[i + 1], i665[i + 2], i665[i + 3],  i665[i + 4], i665[i + 5], i665[i + 6], i665[i + 7],  i665[i + 8], i665[i + 9], i665[i + 10], i665[i + 11],  i665[i + 12], i665[i + 13], i665[i + 14], i665[i + 15]) );
  }
  i658.bindposes = i664
  var i667 = i659[8]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i667[i + 0]) );
  }
  i658.blendShapes = i666
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i673 = data
  i672.triangles = i673[0]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i679 = data
  i678.name = i679[0]
  var i681 = i679[1]
  var i680 = []
  for(var i = 0; i < i681.length; i += 1) {
    i680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i681[i + 0]) );
  }
  i678.frames = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i683 = data
  request.r(i683[0], i683[1], 0, i682, 'sharedMesh')
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'additionalVertexStreams')
  i684.enabled = !!i685[2]
  request.r(i685[3], i685[4], 0, i684, 'sharedMaterial')
  var i687 = i685[5]
  var i686 = []
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 2, i686, '')
  }
  i684.sharedMaterials = i686
  i684.receiveShadows = !!i685[6]
  i684.shadowCastingMode = i685[7]
  i684.sortingLayerID = i685[8]
  i684.sortingOrder = i685[9]
  i684.lightmapIndex = i685[10]
  i684.lightmapSceneIndex = i685[11]
  i684.lightmapScaleOffset = new pc.Vec4( i685[12], i685[13], i685[14], i685[15] )
  i684.lightProbeUsage = i685[16]
  i684.reflectionProbeUsage = i685[17]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i689 = data
  i688.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i689[0], i688.main)
  i688.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i689[1], i688.colorBySpeed)
  i688.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i689[2], i688.colorOverLifetime)
  i688.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i689[3], i688.emission)
  i688.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i689[4], i688.rotationBySpeed)
  i688.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i689[5], i688.rotationOverLifetime)
  i688.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i689[6], i688.shape)
  i688.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i689[7], i688.sizeBySpeed)
  i688.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i689[8], i688.sizeOverLifetime)
  i688.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i689[9], i688.textureSheetAnimation)
  i688.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i689[10], i688.velocityOverLifetime)
  i688.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i689[11], i688.noise)
  i688.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i689[12], i688.inheritVelocity)
  i688.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i689[13], i688.forceOverLifetime)
  i688.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i689[14], i688.limitVelocityOverLifetime)
  i688.useAutoRandomSeed = !!i689[15]
  i688.randomSeed = i689[16]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemMain()
  var i691 = data
  i690.duration = i691[0]
  i690.loop = !!i691[1]
  i690.prewarm = !!i691[2]
  i690.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.startDelay)
  i690.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[4], i690.startLifetime)
  i690.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[5], i690.startSpeed)
  i690.startSize3D = !!i691[6]
  i690.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[7], i690.startSizeX)
  i690.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[8], i690.startSizeY)
  i690.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[9], i690.startSizeZ)
  i690.startRotation3D = !!i691[10]
  i690.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[11], i690.startRotationX)
  i690.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[12], i690.startRotationY)
  i690.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[13], i690.startRotationZ)
  i690.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i691[14], i690.startColor)
  i690.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[15], i690.gravityModifier)
  i690.simulationSpace = i691[16]
  request.r(i691[17], i691[18], 0, i690, 'customSimulationSpace')
  i690.simulationSpeed = i691[19]
  i690.useUnscaledTime = !!i691[20]
  i690.scalingMode = i691[21]
  i690.playOnAwake = !!i691[22]
  i690.maxParticles = i691[23]
  i690.emitterVelocityMode = i691[24]
  i690.stopAction = i691[25]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i692 = root || new pc.MinMaxCurve()
  var i693 = data
  i692.mode = i693[0]
  i692.curveMin = new pc.AnimationCurve( { keys_flow: i693[1] } )
  i692.curveMax = new pc.AnimationCurve( { keys_flow: i693[2] } )
  i692.curveMultiplier = i693[3]
  i692.constantMin = i693[4]
  i692.constantMax = i693[5]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i694 = root || new pc.MinMaxGradient()
  var i695 = data
  i694.mode = i695[0]
  i694.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i695[1], i694.gradientMin)
  i694.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i695[2], i694.gradientMax)
  i694.colorMin = new pc.Color(i695[3], i695[4], i695[5], i695[6])
  i694.colorMax = new pc.Color(i695[7], i695[8], i695[9], i695[10])
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i697 = data
  i696.mode = i697[0]
  var i699 = i697[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i699[i + 0]) );
  }
  i696.colorKeys = i698
  var i701 = i697[2]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i701[i + 0]) );
  }
  i696.alphaKeys = i700
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i702 = root || new pc.ParticleSystemColorBySpeed()
  var i703 = data
  i702.enabled = !!i703[0]
  i702.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i703[1], i702.color)
  i702.range = new pc.Vec2( i703[2], i703[3] )
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i707 = data
  i706.color = new pc.Color(i707[0], i707[1], i707[2], i707[3])
  i706.time = i707[4]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i711 = data
  i710.alpha = i711[0]
  i710.time = i711[1]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i712 = root || new pc.ParticleSystemColorOverLifetime()
  var i713 = data
  i712.enabled = !!i713[0]
  i712.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i713[1], i712.color)
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemEmitter()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[1], i714.rateOverTime)
  i714.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i715[2], i714.rateOverDistance)
  var i717 = i715[3]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i717[i + 0]) );
  }
  i714.bursts = i716
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i720 = root || new pc.ParticleSystemBurst()
  var i721 = data
  i720.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i721[0], i720.count)
  i720.cycleCount = i721[1]
  i720.minCount = i721[2]
  i720.maxCount = i721[3]
  i720.repeatInterval = i721[4]
  i720.time = i721[5]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemRotationBySpeed()
  var i723 = data
  i722.enabled = !!i723[0]
  i722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[1], i722.x)
  i722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[2], i722.y)
  i722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[3], i722.z)
  i722.separateAxes = !!i723[4]
  i722.range = new pc.Vec2( i723[5], i723[6] )
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemRotationOverLifetime()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.separateAxes = !!i725[4]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemShape()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.shapeType = i727[1]
  i726.randomDirectionAmount = i727[2]
  i726.sphericalDirectionAmount = i727[3]
  i726.randomPositionAmount = i727[4]
  i726.alignToDirection = !!i727[5]
  i726.radius = i727[6]
  i726.radiusMode = i727[7]
  i726.radiusSpread = i727[8]
  i726.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[9], i726.radiusSpeed)
  i726.radiusThickness = i727[10]
  i726.angle = i727[11]
  i726.length = i727[12]
  i726.boxThickness = new pc.Vec3( i727[13], i727[14], i727[15] )
  i726.meshShapeType = i727[16]
  request.r(i727[17], i727[18], 0, i726, 'mesh')
  request.r(i727[19], i727[20], 0, i726, 'meshRenderer')
  request.r(i727[21], i727[22], 0, i726, 'skinnedMeshRenderer')
  i726.useMeshMaterialIndex = !!i727[23]
  i726.meshMaterialIndex = i727[24]
  i726.useMeshColors = !!i727[25]
  i726.normalOffset = i727[26]
  i726.arc = i727[27]
  i726.arcMode = i727[28]
  i726.arcSpread = i727[29]
  i726.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[30], i726.arcSpeed)
  i726.donutRadius = i727[31]
  i726.position = new pc.Vec3( i727[32], i727[33], i727[34] )
  i726.rotation = new pc.Vec3( i727[35], i727[36], i727[37] )
  i726.scale = new pc.Vec3( i727[38], i727[39], i727[40] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemSizeBySpeed()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[1], i728.x)
  i728.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.y)
  i728.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[3], i728.z)
  i728.separateAxes = !!i729[4]
  i728.range = new pc.Vec2( i729[5], i729[6] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemSizeOverLifetime()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[1], i730.x)
  i730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.y)
  i730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.z)
  i730.separateAxes = !!i731[4]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.mode = i733[1]
  i732.animation = i733[2]
  i732.numTilesX = i733[3]
  i732.numTilesY = i733[4]
  i732.useRandomRow = !!i733[5]
  i732.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[6], i732.frameOverTime)
  i732.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[7], i732.startFrame)
  i732.cycleCount = i733[8]
  i732.rowIndex = i733[9]
  i732.flipU = i733[10]
  i732.flipV = i733[11]
  i732.spriteCount = i733[12]
  var i735 = i733[13]
  var i734 = []
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 2, i734, '')
  }
  i732.sprites = i734
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[4], i738.radial)
  i738.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[5], i738.speedModifier)
  i738.space = i739[6]
  i738.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[7], i738.orbitalX)
  i738.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[8], i738.orbitalY)
  i738.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[9], i738.orbitalZ)
  i738.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[10], i738.orbitalOffsetX)
  i738.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[11], i738.orbitalOffsetY)
  i738.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[12], i738.orbitalOffsetZ)
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemNoise()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.separateAxes = !!i741[1]
  i740.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.strengthX)
  i740.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.strengthY)
  i740.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.strengthZ)
  i740.frequency = i741[5]
  i740.damping = !!i741[6]
  i740.octaveCount = i741[7]
  i740.octaveMultiplier = i741[8]
  i740.octaveScale = i741[9]
  i740.quality = i741[10]
  i740.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[11], i740.scrollSpeed)
  i740.scrollSpeedMultiplier = i741[12]
  i740.remapEnabled = !!i741[13]
  i740.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[14], i740.remapX)
  i740.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[15], i740.remapY)
  i740.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[16], i740.remapZ)
  i740.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[17], i740.positionAmount)
  i740.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[18], i740.rotationAmount)
  i740.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[19], i740.sizeAmount)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemInheritVelocity()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.mode = i743[1]
  i742.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.curve)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemForceOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.space = i745[4]
  i744.randomized = !!i745[5]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.limit)
  i746.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.limitX)
  i746.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.limitY)
  i746.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[4], i746.limitZ)
  i746.dampen = i747[5]
  i746.separateAxes = !!i747[6]
  i746.space = i747[7]
  i746.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[8], i746.drag)
  i746.multiplyDragByParticleSize = !!i747[9]
  i746.multiplyDragByParticleVelocity = !!i747[10]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i749 = data
  i748.enabled = !!i749[0]
  request.r(i749[1], i749[2], 0, i748, 'sharedMaterial')
  var i751 = i749[3]
  var i750 = []
  for(var i = 0; i < i751.length; i += 2) {
  request.r(i751[i + 0], i751[i + 1], 2, i750, '')
  }
  i748.sharedMaterials = i750
  i748.receiveShadows = !!i749[4]
  i748.shadowCastingMode = i749[5]
  i748.sortingLayerID = i749[6]
  i748.sortingOrder = i749[7]
  i748.lightmapIndex = i749[8]
  i748.lightmapSceneIndex = i749[9]
  i748.lightmapScaleOffset = new pc.Vec4( i749[10], i749[11], i749[12], i749[13] )
  i748.lightProbeUsage = i749[14]
  i748.reflectionProbeUsage = i749[15]
  request.r(i749[16], i749[17], 0, i748, 'mesh')
  i748.meshCount = i749[18]
  i748.activeVertexStreamsCount = i749[19]
  i748.alignment = i749[20]
  i748.renderMode = i749[21]
  i748.sortMode = i749[22]
  i748.lengthScale = i749[23]
  i748.velocityScale = i749[24]
  i748.cameraVelocityScale = i749[25]
  i748.normalDirection = i749[26]
  i748.sortingFudge = i749[27]
  i748.minParticleSize = i749[28]
  i748.maxParticleSize = i749[29]
  i748.pivot = new pc.Vec3( i749[30], i749[31], i749[32] )
  request.r(i749[33], i749[34], 0, i748, 'trailMaterial')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'clip')
  request.r(i753[2], i753[3], 0, i752, 'outputAudioMixerGroup')
  i752.playOnAwake = !!i753[4]
  i752.loop = !!i753[5]
  i752.time = i753[6]
  i752.volume = i753[7]
  i752.pitch = i753[8]
  i752.enabled = !!i753[9]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i755 = data
  i754.enabled = !!i755[0]
  i754.isTrigger = !!i755[1]
  request.r(i755[2], i755[3], 0, i754, 'material')
  request.r(i755[4], i755[5], 0, i754, 'sharedMesh')
  i754.convex = !!i755[6]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.aspect = i757[1]
  i756.orthographic = !!i757[2]
  i756.orthographicSize = i757[3]
  i756.backgroundColor = new pc.Color(i757[4], i757[5], i757[6], i757[7])
  i756.nearClipPlane = i757[8]
  i756.farClipPlane = i757[9]
  i756.fieldOfView = i757[10]
  i756.depth = i757[11]
  i756.clearFlags = i757[12]
  i756.cullingMask = i757[13]
  i756.rect = i757[14]
  request.r(i757[15], i757[16], 0, i756, 'targetTexture')
  i756.usePhysicalProperties = !!i757[17]
  i756.focalLength = i757[18]
  i756.sensorSize = new pc.Vec2( i757[19], i757[20] )
  i756.lensShift = new pc.Vec2( i757[21], i757[22] )
  i756.gateFit = i757[23]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i759 = data
  i758.center = new pc.Vec3( i759[0], i759[1], i759[2] )
  i758.size = new pc.Vec3( i759[3], i759[4], i759[5] )
  i758.enabled = !!i759[6]
  i758.isTrigger = !!i759[7]
  request.r(i759[8], i759[9], 0, i758, 'material')
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i761 = data
  i760.pivot = new pc.Vec2( i761[0], i761[1] )
  i760.anchorMin = new pc.Vec2( i761[2], i761[3] )
  i760.anchorMax = new pc.Vec2( i761[4], i761[5] )
  i760.sizeDelta = new pc.Vec2( i761[6], i761[7] )
  i760.anchoredPosition3D = new pc.Vec3( i761[8], i761[9], i761[10] )
  i760.rotation = new pc.Quat(i761[11], i761[12], i761[13], i761[14])
  i760.scale = new pc.Vec3( i761[15], i761[16], i761[17] )
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i763 = data
  i762.enabled = !!i763[0]
  i762.planeDistance = i763[1]
  i762.referencePixelsPerUnit = i763[2]
  i762.isFallbackOverlay = !!i763[3]
  i762.renderMode = i763[4]
  i762.renderOrder = i763[5]
  i762.sortingLayerName = i763[6]
  i762.sortingOrder = i763[7]
  i762.scaleFactor = i763[8]
  request.r(i763[9], i763[10], 0, i762, 'worldCamera')
  i762.overrideSorting = !!i763[11]
  i762.pixelPerfect = !!i763[12]
  i762.targetDisplay = i763[13]
  i762.overridePixelPerfect = !!i763[14]
  return i762
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i765 = data
  i764.m_UiScaleMode = i765[0]
  i764.m_ReferencePixelsPerUnit = i765[1]
  i764.m_ScaleFactor = i765[2]
  i764.m_ReferenceResolution = new pc.Vec2( i765[3], i765[4] )
  i764.m_ScreenMatchMode = i765[5]
  i764.m_MatchWidthOrHeight = i765[6]
  i764.m_PhysicalUnit = i765[7]
  i764.m_FallbackScreenDPI = i765[8]
  i764.m_DefaultSpriteDPI = i765[9]
  i764.m_DynamicPixelsPerUnit = i765[10]
  i764.m_PresetInfoIsWorld = !!i765[11]
  return i764
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i767 = data
  i766.m_IgnoreReversedGraphics = !!i767[0]
  i766.m_BlockingObjects = i767[1]
  i766.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i767[2] )
  return i766
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i768 = root || request.c( 'EndCardController' )
  var i769 = data
  i768.alwaysShowEndcardTESTING = !!i769[0]
  i768.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i769[1], i768.EndCardOpenedEvent)
  i768._backgroundColor = new pc.Color(i769[2], i769[3], i769[4], i769[5])
  request.r(i769[6], i769[7], 0, i768, '_backgroundTexture')
  request.r(i769[8], i769[9], 0, i768, '_iconTexture')
  i768._iconColor = new pc.Color(i769[10], i769[11], i769[12], i769[13])
  request.r(i769[14], i769[15], 0, i768, '_buttonTexture')
  i768._buttonColor = new pc.Color(i769[16], i769[17], i769[18], i769[19])
  i768._endCardDescriptionText = i769[20]
  i768._CTAButtonText = i769[21]
  i768._useBestFitOnCTA = !!i769[22]
  i768._CTAFontColor = new pc.Color(i769[23], i769[24], i769[25], i769[26])
  i768._descriptionFontColor = new pc.Color(i769[27], i769[28], i769[29], i769[30])
  request.r(i769[31], i769[32], 0, i768, '_CTAFont')
  request.r(i769[33], i769[34], 0, i768, '_descriptionFont')
  i768._CTAFontSize = i769[35]
  i768._descriptionFontSize = i769[36]
  i768._centerDescriptionX = !!i769[37]
  i768._centerDescriptionY = !!i769[38]
  i768._centerButtonX = !!i769[39]
  i768._centerButtonY = !!i769[40]
  i768._descriptionPositionX = i769[41]
  i768._descriptionPositionY = i769[42]
  i768._buttonPositionX = i769[43]
  i768._buttonPositionY = i769[44]
  i768._CTAFontSizeLandscape = i769[45]
  i768._descriptionFontSizeLandscape = i769[46]
  i768._centerDescriptionXLandscape = !!i769[47]
  i768._centerDescriptionYLandscape = !!i769[48]
  i768._centerButtonXLandscape = !!i769[49]
  i768._centerButtonYLandscape = !!i769[50]
  i768._descriptionPositionXLandscape = i769[51]
  i768._descriptionPositionYLandscape = i769[52]
  i768._buttonPositionXLandscape = i769[53]
  i768._buttonPositionYLandscape = i769[54]
  i768._centerIconX = !!i769[55]
  i768._centerIconY = !!i769[56]
  i768._iconPositionX = i769[57]
  i768._iconPositionY = i769[58]
  i768._iconSize = i769[59]
  i768._roundEdgesOnIcon = !!i769[60]
  i768._centerIconXLandscape = !!i769[61]
  i768._centerIconYLandscape = !!i769[62]
  i768._iconPositionXLandscape = i769[63]
  i768._iconPositionYLandscape = i769[64]
  i768._iconSizeLandscape = i769[65]
  i768._roundEdgesOnIconLandscape = !!i769[66]
  i768._endCardClickableOptions = i769[67]
  i768._buttonAnimationType = i769[68]
  i768._endCardPortraitAnimationType = i769[69]
  i768._endCardLandscapeAnimationType = i769[70]
  request.r(i769[71], i769[72], 0, i768, '_backgroundImage')
  request.r(i769[73], i769[74], 0, i768, '_CTAButton')
  request.r(i769[75], i769[76], 0, i768, '_ScreenCTAButton')
  request.r(i769[77], i769[78], 0, i768, '_CTAButtonTextText')
  request.r(i769[79], i769[80], 0, i768, '_EndCardDescriptionTextText')
  request.r(i769[81], i769[82], 0, i768, '_maskIcon')
  request.r(i769[83], i769[84], 0, i768, '_iconRect')
  request.r(i769[85], i769[86], 0, i768, '_iconRectMask')
  request.r(i769[87], i769[88], 0, i768, '_descriptionRect')
  request.r(i769[89], i769[90], 0, i768, '_buttonRect')
  request.r(i769[91], i769[92], 0, i768, '_CTAButtonAnimator')
  request.r(i769[93], i769[94], 0, i768, '_endCardAnimator')
  request.r(i769[95], i769[96], 0, i768, '_iconImage')
  request.r(i769[97], i769[98], 0, i768, '_CTAButtonImage')
  return i768
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.Events.UnityEvent' )
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

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i780 = root || request.c( 'EndCardSetScale' )
  var i781 = data
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i783 = data
  i782.cullTransparentMesh = !!i783[0]
  return i782
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'm_Texture')
  i784.m_UVRect = UnityEngine.Rect.MinMaxRect(i785[2], i785[3], i785[4], i785[5])
  request.r(i785[6], i785[7], 0, i784, 'm_Material')
  i784.m_Maskable = !!i785[8]
  i784.m_Color = new pc.Color(i785[9], i785[10], i785[11], i785[12])
  i784.m_RaycastTarget = !!i785[13]
  i784.m_RaycastPadding = new pc.Vec4( i785[14], i785[15], i785[16], i785[17] )
  return i784
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i787 = data
  i786.m_AspectMode = i787[0]
  i786.m_AspectRatio = i787[1]
  return i786
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.Mask' )
  var i789 = data
  i788.m_ShowMaskGraphic = !!i789[0]
  return i788
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Image' )
  var i791 = data
  request.r(i791[0], i791[1], 0, i790, 'm_Sprite')
  i790.m_Type = i791[2]
  i790.m_PreserveAspect = !!i791[3]
  i790.m_FillCenter = !!i791[4]
  i790.m_FillMethod = i791[5]
  i790.m_FillAmount = i791[6]
  i790.m_FillClockwise = !!i791[7]
  i790.m_FillOrigin = i791[8]
  i790.m_UseSpriteMesh = !!i791[9]
  i790.m_PixelsPerUnitMultiplier = i791[10]
  request.r(i791[11], i791[12], 0, i790, 'm_Material')
  i790.m_Maskable = !!i791[13]
  i790.m_Color = new pc.Color(i791[14], i791[15], i791[16], i791[17])
  i790.m_RaycastTarget = !!i791[18]
  i790.m_RaycastPadding = new pc.Vec4( i791[19], i791[20], i791[21], i791[22] )
  return i790
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Text' )
  var i793 = data
  i792.m_FontData = request.d('UnityEngine.UI.FontData', i793[0], i792.m_FontData)
  i792.m_Text = i793[1]
  request.r(i793[2], i793[3], 0, i792, 'm_Material')
  i792.m_Maskable = !!i793[4]
  i792.m_Color = new pc.Color(i793[5], i793[6], i793[7], i793[8])
  i792.m_RaycastTarget = !!i793[9]
  i792.m_RaycastPadding = new pc.Vec4( i793[10], i793[11], i793[12], i793[13] )
  return i792
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.FontData' )
  var i795 = data
  request.r(i795[0], i795[1], 0, i794, 'm_Font')
  i794.m_FontSize = i795[2]
  i794.m_FontStyle = i795[3]
  i794.m_BestFit = !!i795[4]
  i794.m_MinSize = i795[5]
  i794.m_MaxSize = i795[6]
  i794.m_Alignment = i795[7]
  i794.m_AlignByGeometry = !!i795[8]
  i794.m_RichText = !!i795[9]
  i794.m_HorizontalOverflow = i795[10]
  i794.m_VerticalOverflow = i795[11]
  i794.m_LineSpacing = i795[12]
  return i794
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.Button' )
  var i797 = data
  i796.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i797[0], i796.m_OnClick)
  i796.m_Navigation = request.d('UnityEngine.UI.Navigation', i797[1], i796.m_Navigation)
  i796.m_Transition = i797[2]
  i796.m_Colors = request.d('UnityEngine.UI.ColorBlock', i797[3], i796.m_Colors)
  i796.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i797[4], i796.m_SpriteState)
  i796.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i797[5], i796.m_AnimationTriggers)
  i796.m_Interactable = !!i797[6]
  request.r(i797[7], i797[8], 0, i796, 'm_TargetGraphic')
  return i796
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i799 = data
  i798.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i799[0], i798.m_PersistentCalls)
  return i798
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'm_ObjectArgument')
  i800.m_ObjectArgumentAssemblyTypeName = i801[2]
  i800.m_IntArgument = i801[3]
  i800.m_FloatArgument = i801[4]
  i800.m_StringArgument = i801[5]
  i800.m_BoolArgument = !!i801[6]
  return i800
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i803 = data
  i802.m_Mode = i803[0]
  i802.m_WrapAround = !!i803[1]
  request.r(i803[2], i803[3], 0, i802, 'm_SelectOnUp')
  request.r(i803[4], i803[5], 0, i802, 'm_SelectOnDown')
  request.r(i803[6], i803[7], 0, i802, 'm_SelectOnLeft')
  request.r(i803[8], i803[9], 0, i802, 'm_SelectOnRight')
  return i802
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i805 = data
  i804.m_NormalColor = new pc.Color(i805[0], i805[1], i805[2], i805[3])
  i804.m_HighlightedColor = new pc.Color(i805[4], i805[5], i805[6], i805[7])
  i804.m_PressedColor = new pc.Color(i805[8], i805[9], i805[10], i805[11])
  i804.m_SelectedColor = new pc.Color(i805[12], i805[13], i805[14], i805[15])
  i804.m_DisabledColor = new pc.Color(i805[16], i805[17], i805[18], i805[19])
  i804.m_ColorMultiplier = i805[20]
  i804.m_FadeDuration = i805[21]
  return i804
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, 'm_HighlightedSprite')
  request.r(i807[2], i807[3], 0, i806, 'm_PressedSprite')
  request.r(i807[4], i807[5], 0, i806, 'm_SelectedSprite')
  request.r(i807[6], i807[7], 0, i806, 'm_DisabledSprite')
  return i806
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i809 = data
  i808.m_NormalTrigger = i809[0]
  i808.m_HighlightedTrigger = i809[1]
  i808.m_PressedTrigger = i809[2]
  i808.m_SelectedTrigger = i809[3]
  i808.m_DisabledTrigger = i809[4]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i811 = data
  i810.m_Alpha = i811[0]
  i810.m_Interactable = !!i811[1]
  i810.m_BlocksRaycasts = !!i811[2]
  i810.m_IgnoreParentGroups = !!i811[3]
  i810.enabled = !!i811[4]
  return i810
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i812 = root || request.c( 'BulletTrail' )
  var i813 = data
  i812.Speed = i813[0]
  i812.LifeTime = i813[1]
  request.r(i813[2], i813[3], 0, i812, '_trail')
  i812._trailStartScale = new pc.Vec3( i813[4], i813[5], i813[6] )
  i812._trailMaxScale = new pc.Vec3( i813[7], i813[8], i813[9] )
  i812._trailLengthAtMaxScale = i813[10]
  return i812
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i814 = root || request.c( 'UICrosshairItem' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'CrosshairRectTransform')
  i814._distanceMax = i815[2]
  i814._distanceMin = i815[3]
  i814._speedShrink = i815[4]
  i814._currentSpeed = i815[5]
  i814._rateOnMove = i815[6]
  i814._rateOnAttack = i815[7]
  return i814
}

Deserializers["Effect"] = function (request, data, root) {
  var i816 = root || request.c( 'Effect' )
  var i817 = data
  var i819 = i817[0]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i816.particles = i818
  i816._lifeTime = i817[1]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i823 = data
  i822.name = i823[0]
  i822.atlasId = i823[1]
  i822.mipmapCount = i823[2]
  i822.hdr = !!i823[3]
  i822.size = i823[4]
  i822.anisoLevel = i823[5]
  i822.filterMode = i823[6]
  i822.wrapMode = i823[7]
  var i825 = i823[8]
  var i824 = []
  for(var i = 0; i < i825.length; i += 4) {
    i824.push( UnityEngine.Rect.MinMaxRect(i825[i + 0], i825[i + 1], i825[i + 2], i825[i + 3]) );
  }
  i822.rects = i824
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i829 = data
  i828.name = i829[0]
  i828.index = i829[1]
  i828.startup = !!i829[2]
  return i828
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_FirstSelected')
  i830.m_sendNavigationEvents = !!i831[2]
  i830.m_DragThreshold = i831[3]
  return i830
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i833 = data
  i832.m_HorizontalAxis = i833[0]
  i832.m_VerticalAxis = i833[1]
  i832.m_SubmitButton = i833[2]
  i832.m_CancelButton = i833[3]
  i832.m_InputActionsPerSecond = i833[4]
  i832.m_RepeatDelay = i833[5]
  i832.m_ForceModuleActive = !!i833[6]
  i832.m_SendPointerHoverToParent = !!i833[7]
  return i832
}

Deserializers["UIManager"] = function (request, data, root) {
  var i834 = root || request.c( 'UIManager' )
  var i835 = data
  i834.url = i835[0]
  request.r(i835[1], i835[2], 0, i834, 'InGame')
  request.r(i835[3], i835[4], 0, i834, 'TotalBotText')
  i834.initBot = i835[5]
  request.r(i835[6], i835[7], 0, i834, 'process')
  request.r(i835[8], i835[9], 0, i834, 'gameProcess')
  request.r(i835[10], i835[11], 0, i834, 'tapToPlay')
  return i834
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i836 = root || request.c( 'UnityEngine.UI.Outline' )
  var i837 = data
  i836.m_EffectColor = new pc.Color(i837[0], i837[1], i837[2], i837[3])
  i836.m_EffectDistance = new pc.Vec2( i837[4], i837[5] )
  i836.m_UseGraphicAlpha = !!i837[6]
  return i836
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i839 = data
  i838.m_Spacing = i839[0]
  i838.m_ChildForceExpandWidth = !!i839[1]
  i838.m_ChildForceExpandHeight = !!i839[2]
  i838.m_ChildControlWidth = !!i839[3]
  i838.m_ChildControlHeight = !!i839[4]
  i838.m_ChildScaleWidth = !!i839[5]
  i838.m_ChildScaleHeight = !!i839[6]
  i838.m_ReverseArrangement = !!i839[7]
  i838.m_Padding = UnityEngine.RectOffset.FromPaddings(i839[8], i839[9], i839[10], i839[11])
  i838.m_ChildAlignment = i839[12]
  return i838
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i840 = root || request.c( 'BotParachute' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, '_animator')
  request.r(i841[2], i841[3], 0, i840, '_muzzle')
  request.r(i841[4], i841[5], 0, i840, 'bullet')
  i840.target = new pc.Vec3( i841[6], i841[7], i841[8] )
  i840.moveIndex = i841[9]
  i840.isMoveDone = !!i841[10]
  i840.isDie = !!i841[11]
  i840.isMove = !!i841[12]
  i840.parachuteDone = !!i841[13]
  i840.isTakeDame = !!i841[14]
  i840.maxHealth = i841[15]
  request.r(i841[16], i841[17], 0, i840, 'healthBarRenderer')
  request.r(i841[18], i841[19], 0, i840, '_audioSource')
  request.r(i841[20], i841[21], 0, i840, '_hitSource')
  return i840
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i842 = root || request.c( 'ParachuteController' )
  var i843 = data
  i842.Speed = i843[0]
  request.r(i843[1], i843[2], 0, i842, '_botController')
  i842.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i843[3] )
  request.r(i843[4], i843[5], 0, i842, 'ParachuteScale')
  i842.scaleAmount = i843[6]
  i842.velocity = new pc.Vec3( i843[7], i843[8], i843[9] )
  i842._distanceOpenParachute = i843[10]
  i842._distanceCloseParachute = i843[11]
  return i842
}

Deserializers["BotController"] = function (request, data, root) {
  var i844 = root || request.c( 'BotController' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, '_animator')
  request.r(i845[2], i845[3], 0, i844, '_muzzle')
  request.r(i845[4], i845[5], 0, i844, 'bullet')
  i844.target = new pc.Vec3( i845[6], i845[7], i845[8] )
  i844.moveIndex = i845[9]
  i844.isMoveDone = !!i845[10]
  i844.isDie = !!i845[11]
  i844.isTakeDame = !!i845[12]
  i844.maxHealth = i845[13]
  request.r(i845[14], i845[15], 0, i844, 'healthBarRenderer')
  request.r(i845[16], i845[17], 0, i844, '_audioSource')
  request.r(i845[18], i845[19], 0, i844, '_hitSource')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.type = i847[1]
  i846.color = new pc.Color(i847[2], i847[3], i847[4], i847[5])
  i846.cullingMask = i847[6]
  i846.intensity = i847[7]
  i846.range = i847[8]
  i846.spotAngle = i847[9]
  i846.shadows = i847[10]
  i846.shadowNormalBias = i847[11]
  i846.shadowBias = i847[12]
  i846.shadowStrength = i847[13]
  i846.shadowResolution = i847[14]
  i846.lightmapBakeType = i847[15]
  i846.renderMode = i847[16]
  request.r(i847[17], i847[18], 0, i846, 'cookie')
  i846.cookieSize = i847[19]
  return i846
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i848 = root || request.c( 'PlayerView' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, '_mainRoot')
  request.r(i849[2], i849[3], 0, i848, '_head')
  i848._sensitivity = i849[4]
  i848._slerpFactor = i849[5]
  i848._viewHorizontalThreshold = new pc.Vec2( i849[6], i849[7] )
  i848._viewVerticalThreshold = new pc.Vec2( i849[8], i849[9] )
  i848._initRotate = new pc.Vec2( i849[10], i849[11] )
  i848._totalRotate = new pc.Vec2( i849[12], i849[13] )
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i851 = data
  i850.playAutomatically = !!i851[0]
  request.r(i851[1], i851[2], 0, i850, 'clip')
  var i853 = i851[3]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.clips = i852
  i850.wrapMode = i851[4]
  i850.enabled = !!i851[5]
  return i850
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i856 = root || request.c( 'WeaponController' )
  var i857 = data
  i856.Mask = UnityEngine.LayerMask.FromIntegerValue( i857[0] )
  i856.damage = i857[1]
  request.r(i857[2], i857[3], 0, i856, '_muzzleTrans')
  request.r(i857[4], i857[5], 0, i856, '_animation')
  request.r(i857[6], i857[7], 0, i856, 'bullet')
  request.r(i857[8], i857[9], 0, i856, '_muzzleFlash')
  request.r(i857[10], i857[11], 0, i856, 'audioClip')
  request.r(i857[12], i857[13], 0, i856, 'audioSource')
  i856.SphereRadius = i857[14]
  request.r(i857[15], i857[16], 0, i856, 'Effect')
  return i856
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i858 = root || request.c( 'SpawnBot' )
  var i859 = data
  request.r(i859[0], i859[1], 0, i858, '_botPrefab')
  i858._spawnInterval = i859[2]
  i858._upper = i859[3]
  return i858
}

Deserializers["BotManager"] = function (request, data, root) {
  var i860 = root || request.c( 'BotManager' )
  var i861 = data
  return i860
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i862 = root || request.c( 'AudioManager' )
  var i863 = data
  var i865 = i863[0]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.AttackSounds = i864
  var i867 = i863[1]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.HitSounds = i866
  return i862
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i870 = root || request.c( 'ConfigManager' )
  var i871 = data
  var i873 = i871[0]
  var i872 = []
  for(var i = 0; i < i873.length; i += 1) {
    i872.push( request.d('StepData', i873[i + 0]) );
  }
  i870._stepDatas = i872
  return i870
}

Deserializers["StepData"] = function (request, data, root) {
  var i876 = root || request.c( 'StepData' )
  var i877 = data
  i876.NumberBot = i877[0]
  i876.NumberParachute = i877[1]
  return i876
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i878 = root || request.c( 'GamePlayManager' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, '_spawnBotNormal')
  request.r(i879[2], i879[3], 0, i878, '_spawnBotParachute')
  request.r(i879[4], i879[5], 0, i878, '_a')
  return i878
}

Deserializers["PathManager"] = function (request, data, root) {
  var i880 = root || request.c( 'PathManager' )
  var i881 = data
  var i883 = i881[0]
  var i882 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i883.length; i += 1) {
    i882.add(request.d('Path', i883[i + 0]));
  }
  i880._paths = i882
  var i885 = i881[1]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('Path', i885[i + 0]));
  }
  i880._pathsParachute = i884
  return i880
}

Deserializers["Path"] = function (request, data, root) {
  var i888 = root || request.c( 'Path' )
  var i889 = data
  i888.IsUse = !!i889[0]
  var i891 = i889[1]
  var i890 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i891.length; i += 2) {
  request.r(i891[i + 0], i891[i + 1], 1, i890, '')
  }
  i888.WayPoints = i890
  return i888
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i894 = root || request.c( 'ObjectPool' )
  var i895 = data
  return i894
}

Deserializers["BotManagerTest"] = function (request, data, root) {
  var i896 = root || request.c( 'BotManagerTest' )
  var i897 = data
  var i899 = i897[0]
  var i898 = new (System.Collections.Generic.List$1(Bridge.ns('BotNetwork')))
  for(var i = 0; i < i899.length; i += 2) {
  request.r(i899[i + 0], i899[i + 1], 1, i898, '')
  }
  i896._botNetworks = i898
  return i896
}

Deserializers["SpawnBotTest"] = function (request, data, root) {
  var i902 = root || request.c( 'SpawnBotTest' )
  var i903 = data
  request.r(i903[0], i903[1], 0, i902, '_botPrefab')
  i902._spawnInterval = i903[2]
  i902._upper = i903[3]
  return i902
}

Deserializers["BotNetwork"] = function (request, data, root) {
  var i904 = root || request.c( 'BotNetwork' )
  var i905 = data
  i904._maxHealth = i905[0]
  var i907 = i905[1]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i904._legalTargets = i906
  i904._path = request.d('Path', i905[2], i904._path)
  i904._currentHealth = i905[3]
  i904.isDead = !!i905[4]
  return i904
}

Deserializers["FiniteStateMachine"] = function (request, data, root) {
  var i908 = root || request.c( 'FiniteStateMachine' )
  var i909 = data
  request.r(i909[0], i909[1], 0, i908, '_stateTransitionManager')
  return i908
}

Deserializers["StateConditionManager"] = function (request, data, root) {
  var i910 = root || request.c( 'StateConditionManager' )
  var i911 = data
  return i910
}

Deserializers["StateTransitionManager"] = function (request, data, root) {
  var i912 = root || request.c( 'StateTransitionManager' )
  var i913 = data
  return i912
}

Deserializers["Bot_Playita"] = function (request, data, root) {
  var i914 = root || request.c( 'Bot_Playita' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, '_animator')
  request.r(i915[2], i915[3], 0, i914, '_muzzle')
  request.r(i915[4], i915[5], 0, i914, 'bullet')
  i914.target = new pc.Vec3( i915[6], i915[7], i915[8] )
  i914.isDie = !!i915[9]
  request.r(i915[10], i915[11], 0, i914, 'finiteStateMachine')
  request.r(i915[12], i915[13], 0, i914, '_stateTransitionManager')
  request.r(i915[14], i915[15], 0, i914, '_stateConditionManager')
  request.r(i915[16], i915[17], 0, i914, '_botNetwork')
  request.r(i915[18], i915[19], 0, i914, 'healthBarRenderer')
  request.r(i915[20], i915[21], 0, i914, '_takeSource')
  request.r(i915[22], i915[23], 0, i914, '_hitSource')
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i917 = data
  i916.ambientIntensity = i917[0]
  i916.reflectionIntensity = i917[1]
  i916.ambientMode = i917[2]
  i916.ambientLight = new pc.Color(i917[3], i917[4], i917[5], i917[6])
  i916.ambientSkyColor = new pc.Color(i917[7], i917[8], i917[9], i917[10])
  i916.ambientGroundColor = new pc.Color(i917[11], i917[12], i917[13], i917[14])
  i916.ambientEquatorColor = new pc.Color(i917[15], i917[16], i917[17], i917[18])
  i916.fogColor = new pc.Color(i917[19], i917[20], i917[21], i917[22])
  i916.fogEndDistance = i917[23]
  i916.fogStartDistance = i917[24]
  i916.fogDensity = i917[25]
  i916.fog = !!i917[26]
  request.r(i917[27], i917[28], 0, i916, 'skybox')
  i916.fogMode = i917[29]
  var i919 = i917[30]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i919[i + 0]) );
  }
  i916.lightmaps = i918
  i916.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i917[31], i916.lightProbes)
  i916.lightmapsMode = i917[32]
  i916.mixedBakeMode = i917[33]
  i916.environmentLightingMode = i917[34]
  i916.ambientProbe = new pc.SphericalHarmonicsL2(i917[35])
  i916.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i917[36])
  i916.useReferenceAmbientProbe = !!i917[37]
  request.r(i917[38], i917[39], 0, i916, 'customReflection')
  request.r(i917[40], i917[41], 0, i916, 'defaultReflection')
  i916.defaultReflectionMode = i917[42]
  i916.defaultReflectionResolution = i917[43]
  i916.sunLightObjectId = i917[44]
  i916.pixelLightCount = i917[45]
  i916.defaultReflectionHDR = !!i917[46]
  i916.hasLightDataAsset = !!i917[47]
  i916.hasManualGenerate = !!i917[48]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'lightmapColor')
  request.r(i923[2], i923[3], 0, i922, 'lightmapDirection')
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i924 = root || new UnityEngine.LightProbes()
  var i925 = data
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i933 = data
  var i935 = i933[0]
  var i934 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i935.length; i += 1) {
    i934.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i935[i + 0]));
  }
  i932.ShaderCompilationErrors = i934
  i932.name = i933[1]
  i932.guid = i933[2]
  var i937 = i933[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( i937[i + 0] );
  }
  i932.shaderDefinedKeywords = i936
  var i939 = i933[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i939[i + 0]) );
  }
  i932.passes = i938
  var i941 = i933[5]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i941[i + 0]) );
  }
  i932.usePasses = i940
  var i943 = i933[6]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i943[i + 0]) );
  }
  i932.defaultParameterValues = i942
  request.r(i933[7], i933[8], 0, i932, 'unityFallbackShader')
  i932.readDepth = !!i933[9]
  i932.isCreatedByShaderGraph = !!i933[10]
  i932.usedBatchUniforms = i933[11]
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i947 = data
  i946.shaderName = i947[0]
  i946.errorMessage = i947[1]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i952 = root || new pc.UnityShaderPass()
  var i953 = data
  i952.id = i953[0]
  i952.subShaderIndex = i953[1]
  i952.name = i953[2]
  i952.passType = i953[3]
  i952.grabPassTextureName = i953[4]
  i952.usePass = !!i953[5]
  i952.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[6], i952.zTest)
  i952.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[7], i952.zWrite)
  i952.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[8], i952.culling)
  i952.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i953[9], i952.blending)
  i952.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i953[10], i952.alphaBlending)
  i952.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[11], i952.colorWriteMask)
  i952.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[12], i952.offsetUnits)
  i952.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[13], i952.offsetFactor)
  i952.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[14], i952.stencilRef)
  i952.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[15], i952.stencilReadMask)
  i952.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[16], i952.stencilWriteMask)
  i952.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i953[17], i952.stencilOp)
  i952.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i953[18], i952.stencilOpFront)
  i952.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i953[19], i952.stencilOpBack)
  var i955 = i953[20]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i955[i + 0]) );
  }
  i952.tags = i954
  var i957 = i953[21]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( i957[i + 0] );
  }
  i952.passDefinedKeywords = i956
  var i959 = i953[22]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i959[i + 0]) );
  }
  i952.passDefinedKeywordGroups = i958
  var i961 = i953[23]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i961[i + 0]) );
  }
  i952.variants = i960
  var i963 = i953[24]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i963[i + 0]) );
  }
  i952.excludedVariants = i962
  i952.hasDepthReader = !!i953[25]
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i965 = data
  i964.val = i965[0]
  i964.name = i965[1]
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i967 = data
  i966.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[0], i966.src)
  i966.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[1], i966.dst)
  i966.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[2], i966.op)
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i969 = data
  i968.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[0], i968.pass)
  i968.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[1], i968.fail)
  i968.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[2], i968.zFail)
  i968.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i969[3], i968.comp)
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i973 = data
  i972.name = i973[0]
  i972.value = i973[1]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i977 = data
  var i979 = i977[0]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( i979[i + 0] );
  }
  i976.keywords = i978
  i976.hasDiscard = !!i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i983 = data
  i982.passId = i983[0]
  i982.subShaderIndex = i983[1]
  var i985 = i983[2]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( i985[i + 0] );
  }
  i982.keywords = i984
  i982.vertexProgram = i983[3]
  i982.fragmentProgram = i983[4]
  i982.readDepth = !!i983[5]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i989 = data
  request.r(i989[0], i989[1], 0, i988, 'shader')
  i988.pass = i989[2]
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i993 = data
  i992.name = i993[0]
  i992.type = i993[1]
  i992.value = new pc.Vec4( i993[2], i993[3], i993[4], i993[5] )
  i992.textureValue = i993[6]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i995 = data
  i994.name = i995[0]
  request.r(i995[1], i995[2], 0, i994, 'texture')
  i994.aabb = i995[3]
  i994.vertices = i995[4]
  i994.triangles = i995[5]
  i994.textureRect = UnityEngine.Rect.MinMaxRect(i995[6], i995[7], i995[8], i995[9])
  i994.packedRect = UnityEngine.Rect.MinMaxRect(i995[10], i995[11], i995[12], i995[13])
  i994.border = new pc.Vec4( i995[14], i995[15], i995[16], i995[17] )
  i994.transparency = i995[18]
  i994.bounds = i995[19]
  i994.pixelsPerUnit = i995[20]
  i994.textureWidth = i995[21]
  i994.textureHeight = i995[22]
  i994.nativeSize = new pc.Vec2( i995[23], i995[24] )
  i994.pivot = new pc.Vec2( i995[25], i995[26] )
  i994.textureRectOffset = new pc.Vec2( i995[27], i995[28] )
  return i994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i997 = data
  i996.name = i997[0]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i999 = data
  i998.name = i999[0]
  i998.wrapMode = i999[1]
  i998.isLooping = !!i999[2]
  i998.length = i999[3]
  var i1001 = i999[4]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1001[i + 0]) );
  }
  i998.curves = i1000
  var i1003 = i999[5]
  var i1002 = []
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1003[i + 0]) );
  }
  i998.events = i1002
  i998.halfPrecision = !!i999[6]
  i998.frameRate = i999[7]
  i998.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i999[8], i998.localBounds)
  i998.hasMuscleCurves = !!i999[9]
  var i1005 = i999[10]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( i1005[i + 0] );
  }
  i998.clipMuscleConstant = i1004
  i998.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i999[11], i998.clipBindingConstant)
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1009 = data
  i1008.path = i1009[0]
  i1008.componentType = i1009[1]
  i1008.property = i1009[2]
  i1008.keys = i1009[3]
  var i1011 = i1009[4]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1011[i + 0]) );
  }
  i1008.objectReferenceKeys = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1015 = data
  i1014.functionName = i1015[0]
  i1014.floatParameter = i1015[1]
  i1014.intParameter = i1015[2]
  i1014.stringParameter = i1015[3]
  request.r(i1015[4], i1015[5], 0, i1014, 'objectReferenceParameter')
  i1014.time = i1015[6]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1017 = data
  i1016.center = new pc.Vec3( i1017[0], i1017[1], i1017[2] )
  i1016.extends = new pc.Vec3( i1017[3], i1017[4], i1017[5] )
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1021 = data
  var i1023 = i1021[0]
  var i1022 = []
  for(var i = 0; i < i1023.length; i += 1) {
    i1022.push( i1023[i + 0] );
  }
  i1020.genericBindings = i1022
  var i1025 = i1021[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( i1025[i + 0] );
  }
  i1020.pptrCurveMapping = i1024
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1029 = data
  i1028.time = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'value')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1031 = data
  i1030.name = i1031[0]
  i1030.ascent = i1031[1]
  i1030.originalLineHeight = i1031[2]
  i1030.fontSize = i1031[3]
  var i1033 = i1031[4]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1033[i + 0]) );
  }
  i1030.characterInfo = i1032
  request.r(i1031[5], i1031[6], 0, i1030, 'texture')
  i1030.originalFontSize = i1031[7]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1037 = data
  i1036.index = i1037[0]
  i1036.advance = i1037[1]
  i1036.bearing = i1037[2]
  i1036.glyphWidth = i1037[3]
  i1036.glyphHeight = i1037[4]
  i1036.minX = i1037[5]
  i1036.maxX = i1037[6]
  i1036.minY = i1037[7]
  i1036.maxY = i1037[8]
  i1036.uvBottomLeftX = i1037[9]
  i1036.uvBottomLeftY = i1037[10]
  i1036.uvBottomRightX = i1037[11]
  i1036.uvBottomRightY = i1037[12]
  i1036.uvTopLeftX = i1037[13]
  i1036.uvTopLeftY = i1037[14]
  i1036.uvTopRightX = i1037[15]
  i1036.uvTopRightY = i1037[16]
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1039 = data
  i1038.name = i1039[0]
  var i1041 = i1039[1]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1041[i + 0]) );
  }
  i1038.states = i1040
  var i1043 = i1039[2]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1043[i + 0]) );
  }
  i1038.layers = i1042
  var i1045 = i1039[3]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1045[i + 0]) );
  }
  i1038.parameters = i1044
  i1038.animationClips = i1039[4]
  i1038.HasSubStateMachines = !!i1039[5]
  i1038.avatarUnsupported = i1039[6]
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1049 = data
  i1048.cycleOffset = i1049[0]
  i1048.cycleOffsetParameter = i1049[1]
  i1048.cycleOffsetParameterActive = !!i1049[2]
  i1048.mirror = !!i1049[3]
  i1048.mirrorParameter = i1049[4]
  i1048.mirrorParameterActive = !!i1049[5]
  i1048.motionId = i1049[6]
  i1048.nameHash = i1049[7]
  i1048.fullPathHash = i1049[8]
  i1048.speed = i1049[9]
  i1048.speedParameter = i1049[10]
  i1048.speedParameterActive = !!i1049[11]
  i1048.tag = i1049[12]
  i1048.name = i1049[13]
  i1048.layer = i1049[14]
  i1048.writeDefaultValues = !!i1049[15]
  var i1051 = i1049[16]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1051[i + 0]) );
  }
  i1048.transitions = i1050
  var i1053 = i1049[17]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 2) {
  request.r(i1053[i + 0], i1053[i + 1], 2, i1052, '')
  }
  i1048.behaviours = i1052
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1057 = data
  i1056.fullPath = i1057[0]
  i1056.canTransitionToSelf = !!i1057[1]
  i1056.duration = i1057[2]
  i1056.exitTime = i1057[3]
  i1056.hasExitTime = !!i1057[4]
  i1056.hasFixedDuration = !!i1057[5]
  i1056.interruptionSource = i1057[6]
  i1056.offset = i1057[7]
  i1056.orderedInterruption = !!i1057[8]
  i1056.destinationStateNameHash = i1057[9]
  i1056.destinationStateMachineId = i1057[10]
  i1056.isExit = !!i1057[11]
  i1056.mute = !!i1057[12]
  i1056.solo = !!i1057[13]
  var i1059 = i1057[14]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1059[i + 0]) );
  }
  i1056.conditions = i1058
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1063 = data
  i1062.mode = i1063[0]
  i1062.parameter = i1063[1]
  i1062.threshold = i1063[2]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1069 = data
  i1068.blendingMode = i1069[0]
  i1068.defaultWeight = i1069[1]
  i1068.name = i1069[2]
  i1068.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1069[3], i1068.stateMachine)
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1071 = data
  i1070.id = i1071[0]
  i1070.defaultStateNameHash = i1071[1]
  var i1073 = i1071[2]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1073[i + 0]) );
  }
  i1070.entryTransitions = i1072
  var i1075 = i1071[3]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1075[i + 0]) );
  }
  i1070.anyStateTransitions = i1074
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1079 = data
  i1078.destinationStateNameHash = i1079[0]
  i1078.destinationStateMachineId = i1079[1]
  i1078.isExit = !!i1079[2]
  i1078.mute = !!i1079[3]
  i1078.solo = !!i1079[4]
  var i1081 = i1079[5]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1081[i + 0]) );
  }
  i1078.conditions = i1080
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1085 = data
  i1084.defaultBool = !!i1085[0]
  i1084.defaultFloat = i1085[1]
  i1084.defaultInt = i1085[2]
  i1084.name = i1085[3]
  i1084.nameHash = i1085[4]
  i1084.type = i1085[5]
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1087 = data
  var i1089 = i1087[0]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1089[i + 0]) );
  }
  i1086.files = i1088
  i1086.componentToPrefabIds = i1087[1]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1093 = data
  i1092.path = i1093[0]
  request.r(i1093[1], i1093[2], 0, i1092, 'unityObject')
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1095 = data
  var i1097 = i1095[0]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1097[i + 0]) );
  }
  i1094.scriptsExecutionOrder = i1096
  var i1099 = i1095[1]
  var i1098 = []
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1099[i + 0]) );
  }
  i1094.sortingLayers = i1098
  var i1101 = i1095[2]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1101[i + 0]) );
  }
  i1094.cullingLayers = i1100
  i1094.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1095[3], i1094.timeSettings)
  i1094.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1095[4], i1094.physicsSettings)
  i1094.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1095[5], i1094.physics2DSettings)
  i1094.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1095[6], i1094.qualitySettings)
  i1094.enableRealtimeShadows = !!i1095[7]
  i1094.enableAutoInstancing = !!i1095[8]
  i1094.enableDynamicBatching = !!i1095[9]
  i1094.lightmapEncodingQuality = i1095[10]
  i1094.desiredColorSpace = i1095[11]
  var i1103 = i1095[12]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( i1103[i + 0] );
  }
  i1094.allTags = i1102
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1107 = data
  i1106.name = i1107[0]
  i1106.value = i1107[1]
  return i1106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1111 = data
  i1110.id = i1111[0]
  i1110.name = i1111[1]
  i1110.value = i1111[2]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1117 = data
  i1116.fixedDeltaTime = i1117[0]
  i1116.maximumDeltaTime = i1117[1]
  i1116.timeScale = i1117[2]
  i1116.maximumParticleTimestep = i1117[3]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1119 = data
  i1118.gravity = new pc.Vec3( i1119[0], i1119[1], i1119[2] )
  i1118.defaultSolverIterations = i1119[3]
  i1118.bounceThreshold = i1119[4]
  i1118.autoSyncTransforms = !!i1119[5]
  i1118.autoSimulation = !!i1119[6]
  var i1121 = i1119[7]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1121[i + 0]) );
  }
  i1118.collisionMatrix = i1120
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1125 = data
  i1124.enabled = !!i1125[0]
  i1124.layerId = i1125[1]
  i1124.otherLayerId = i1125[2]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'material')
  i1126.gravity = new pc.Vec2( i1127[2], i1127[3] )
  i1126.positionIterations = i1127[4]
  i1126.velocityIterations = i1127[5]
  i1126.velocityThreshold = i1127[6]
  i1126.maxLinearCorrection = i1127[7]
  i1126.maxAngularCorrection = i1127[8]
  i1126.maxTranslationSpeed = i1127[9]
  i1126.maxRotationSpeed = i1127[10]
  i1126.baumgarteScale = i1127[11]
  i1126.baumgarteTOIScale = i1127[12]
  i1126.timeToSleep = i1127[13]
  i1126.linearSleepTolerance = i1127[14]
  i1126.angularSleepTolerance = i1127[15]
  i1126.defaultContactOffset = i1127[16]
  i1126.autoSimulation = !!i1127[17]
  i1126.queriesHitTriggers = !!i1127[18]
  i1126.queriesStartInColliders = !!i1127[19]
  i1126.callbacksOnDisable = !!i1127[20]
  i1126.reuseCollisionCallbacks = !!i1127[21]
  i1126.autoSyncTransforms = !!i1127[22]
  var i1129 = i1127[23]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1129[i + 0]) );
  }
  i1126.collisionMatrix = i1128
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1133 = data
  i1132.enabled = !!i1133[0]
  i1132.layerId = i1133[1]
  i1132.otherLayerId = i1133[2]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1135 = data
  var i1137 = i1135[0]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1137[i + 0]) );
  }
  i1134.qualityLevels = i1136
  var i1139 = i1135[1]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1134.names = i1138
  i1134.shadows = i1135[2]
  i1134.anisotropicFiltering = i1135[3]
  i1134.antiAliasing = i1135[4]
  i1134.lodBias = i1135[5]
  i1134.shadowCascades = i1135[6]
  i1134.shadowDistance = i1135[7]
  i1134.shadowmaskMode = i1135[8]
  i1134.shadowProjection = i1135[9]
  i1134.shadowResolution = i1135[10]
  i1134.softParticles = !!i1135[11]
  i1134.softVegetation = !!i1135[12]
  i1134.activeColorSpace = i1135[13]
  i1134.desiredColorSpace = i1135[14]
  i1134.masterTextureLimit = i1135[15]
  i1134.maxQueuedFrames = i1135[16]
  i1134.particleRaycastBudget = i1135[17]
  i1134.pixelLightCount = i1135[18]
  i1134.realtimeReflectionProbes = !!i1135[19]
  i1134.shadowCascade2Split = i1135[20]
  i1134.shadowCascade4Split = new pc.Vec3( i1135[21], i1135[22], i1135[23] )
  i1134.streamingMipmapsActive = !!i1135[24]
  i1134.vSyncCount = i1135[25]
  i1134.asyncUploadBufferSize = i1135[26]
  i1134.asyncUploadTimeSlice = i1135[27]
  i1134.billboardsFaceCameraPosition = !!i1135[28]
  i1134.shadowNearPlaneOffset = i1135[29]
  i1134.streamingMipmapsMemoryBudget = i1135[30]
  i1134.maximumLODLevel = i1135[31]
  i1134.streamingMipmapsAddAllCameras = !!i1135[32]
  i1134.streamingMipmapsMaxLevelReduction = i1135[33]
  i1134.streamingMipmapsRenderersPerFrame = i1135[34]
  i1134.resolutionScalingFixedDPIFactor = i1135[35]
  i1134.streamingMipmapsMaxFileIORequests = i1135[36]
  i1134.currentQualityLevel = i1135[37]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1143 = data
  i1142.name = i1143[0]
  var i1145 = i1143[1]
  var i1144 = []
  for(var i = 0; i < i1145.length; i += 1) {
    i1144.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1145[i + 0]) );
  }
  i1142.tos = i1144
  var i1147 = i1143[2]
  var i1146 = []
  for(var i = 0; i < i1147.length; i += 1) {
    i1146.push( i1147[i + 0] );
  }
  i1142.constant = i1146
  i1142.isValid = !!i1143[3]
  i1142.isHuman = !!i1143[4]
  i1142.hasRootMotion = !!i1143[5]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1151 = data
  i1150.hash = i1151[0]
  i1150.path = i1151[1]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1155 = data
  i1154.weight = i1155[0]
  i1154.vertices = i1155[1]
  i1154.normals = i1155[2]
  i1154.tangents = i1155[3]
  return i1154
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"70":[71],"72":[71],"73":[71],"74":[71],"75":[71],"76":[71],"77":[5],"78":[14],"79":[80],"81":[80],"82":[80],"83":[80],"84":[80],"85":[80],"86":[80],"87":[88],"89":[88],"90":[88],"91":[88],"92":[88],"93":[88],"94":[88],"95":[88],"96":[88],"97":[88],"98":[88],"99":[88],"100":[88],"101":[14],"102":[9],"103":[104],"105":[104],"18":[17],"106":[17],"107":[9,17],"108":[17,31],"109":[17],"110":[31,17],"111":[9],"112":[31,17],"113":[17],"114":[115],"116":[17],"117":[17],"21":[18],"33":[31,17],"32":[17],"20":[18],"118":[17],"119":[17],"45":[17],"120":[17],"121":[17],"122":[17],"123":[17],"28":[17],"124":[17],"25":[31,17],"125":[17],"126":[17],"127":[17],"128":[17],"27":[31,17],"129":[17],"130":[40],"131":[40],"41":[40],"132":[40],"133":[14],"134":[14],"135":[115],"136":[115]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","GamePlayManager","BulletTrail","UICrosshairItem","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","UnityEngine.GameObject","UnityEngine.UI.Outline","UnityEngine.UI.HorizontalLayoutGroup","BotParachute","ParachuteController","UnityEngine.LODGroup","BotController","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","BotManager","AudioManager","ConfigManager","SpawnBotTest","PathManager","ObjectPool","BotManagerTest","BotNetwork","FiniteStateMachine","StateTransitionManager","StateConditionManager","Bot_Playita","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "28.8";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "20146";

Deserializers.projectId = "19d6020580d862e46a5b6b7a32992276";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.6.5\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1587";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3480";

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

Deserializers.buildID = "bae9174e-f1e0-4009-9036-f604b07e0d2e";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

