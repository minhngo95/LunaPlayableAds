var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.JointSpring' )
  var i581 = data
  i580.spring = i581[0]
  i580.damper = i581[1]
  i580.targetPosition = i581[2]
  return i580
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.JointMotor' )
  var i583 = data
  i582.m_TargetVelocity = i583[0]
  i582.m_Force = i583[1]
  i582.m_FreeSpin = i583[2]
  return i582
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointLimits' )
  var i585 = data
  i584.m_Min = i585[0]
  i584.m_Max = i585[1]
  i584.m_Bounciness = i585[2]
  i584.m_BounceMinVelocity = i585[3]
  i584.m_ContactDistance = i585[4]
  i584.minBounce = i585[5]
  i584.maxBounce = i585[6]
  return i584
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointDrive' )
  var i587 = data
  i586.m_PositionSpring = i587[0]
  i586.m_PositionDamper = i587[1]
  i586.m_MaximumForce = i587[2]
  return i586
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i589 = data
  i588.m_Spring = i589[0]
  i588.m_Damper = i589[1]
  return i588
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i591 = data
  i590.m_Limit = i591[0]
  i590.m_Bounciness = i591[1]
  i590.m_ContactDistance = i591[2]
  return i590
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i592 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i593 = data
  i592.m_ExtremumSlip = i593[0]
  i592.m_ExtremumValue = i593[1]
  i592.m_AsymptoteSlip = i593[2]
  i592.m_AsymptoteValue = i593[3]
  i592.m_Stiffness = i593[4]
  return i592
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i594 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i595 = data
  i594.m_LowerAngle = i595[0]
  i594.m_UpperAngle = i595[1]
  return i594
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i596 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i597 = data
  i596.m_MotorSpeed = i597[0]
  i596.m_MaximumMotorTorque = i597[1]
  return i596
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i598 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i599 = data
  i598.m_DampingRatio = i599[0]
  i598.m_Frequency = i599[1]
  i598.m_Angle = i599[2]
  return i598
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i601 = data
  i600.m_LowerTranslation = i601[0]
  i600.m_UpperTranslation = i601[1]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i602 = root || new pc.UnityMaterial()
  var i603 = data
  i602.name = i603[0]
  request.r(i603[1], i603[2], 0, i602, 'shader')
  i602.renderQueue = i603[3]
  i602.enableInstancing = !!i603[4]
  var i605 = i603[5]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i605[i + 0]) );
  }
  i602.floatParameters = i604
  var i607 = i603[6]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i607[i + 0]) );
  }
  i602.colorParameters = i606
  var i609 = i603[7]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i609[i + 0]) );
  }
  i602.vectorParameters = i608
  var i611 = i603[8]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i611[i + 0]) );
  }
  i602.textureParameters = i610
  var i613 = i603[9]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i613[i + 0]) );
  }
  i602.materialFlags = i612
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i617 = data
  i616.name = i617[0]
  i616.value = i617[1]
  return i616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i621 = data
  i620.name = i621[0]
  i620.value = new pc.Color(i621[1], i621[2], i621[3], i621[4])
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i625 = data
  i624.name = i625[0]
  i624.value = new pc.Vec4( i625[1], i625[2], i625[3], i625[4] )
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i629 = data
  i628.name = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'value')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i633 = data
  i632.name = i633[0]
  i632.enabled = !!i633[1]
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i635 = data
  i634.name = i635[0]
  i634.width = i635[1]
  i634.height = i635[2]
  i634.mipmapCount = i635[3]
  i634.anisoLevel = i635[4]
  i634.filterMode = i635[5]
  i634.hdr = !!i635[6]
  i634.format = i635[7]
  i634.wrapMode = i635[8]
  i634.alphaIsTransparency = !!i635[9]
  i634.alphaSource = i635[10]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i637 = data
  i636.position = new pc.Vec3( i637[0], i637[1], i637[2] )
  i636.scale = new pc.Vec3( i637[3], i637[4], i637[5] )
  i636.rotation = new pc.Quat(i637[6], i637[7], i637[8], i637[9])
  return i636
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
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i657 = data
  i656.weight = i657[0]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i659 = data
  i658.name = i659[0]
  i658.tagId = i659[1]
  i658.enabled = !!i659[2]
  i658.isStatic = !!i659[3]
  i658.layer = i659[4]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i661 = data
  i660.name = i661[0]
  i660.halfPrecision = !!i661[1]
  i660.vertexCount = i661[2]
  i660.aabb = i661[3]
  var i663 = i661[4]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( !!i663[i + 0] );
  }
  i660.streams = i662
  i660.vertices = i661[5]
  var i665 = i661[6]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i665[i + 0]) );
  }
  i660.subMeshes = i664
  var i667 = i661[7]
  var i666 = []
  for(var i = 0; i < i667.length; i += 16) {
    i666.push( new pc.Mat4().setData(i667[i + 0], i667[i + 1], i667[i + 2], i667[i + 3],  i667[i + 4], i667[i + 5], i667[i + 6], i667[i + 7],  i667[i + 8], i667[i + 9], i667[i + 10], i667[i + 11],  i667[i + 12], i667[i + 13], i667[i + 14], i667[i + 15]) );
  }
  i660.bindposes = i666
  var i669 = i661[8]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i669[i + 0]) );
  }
  i660.blendShapes = i668
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i675 = data
  i674.triangles = i675[0]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i681 = data
  i680.name = i681[0]
  var i683 = i681[1]
  var i682 = []
  for(var i = 0; i < i683.length; i += 1) {
    i682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i683[i + 0]) );
  }
  i680.frames = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'sharedMesh')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'additionalVertexStreams')
  i686.enabled = !!i687[2]
  request.r(i687[3], i687[4], 0, i686, 'sharedMaterial')
  var i689 = i687[5]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.sharedMaterials = i688
  i686.receiveShadows = !!i687[6]
  i686.shadowCastingMode = i687[7]
  i686.sortingLayerID = i687[8]
  i686.sortingOrder = i687[9]
  i686.lightmapIndex = i687[10]
  i686.lightmapSceneIndex = i687[11]
  i686.lightmapScaleOffset = new pc.Vec4( i687[12], i687[13], i687[14], i687[15] )
  i686.lightProbeUsage = i687[16]
  i686.reflectionProbeUsage = i687[17]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i691 = data
  i690.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i691[0], i690.main)
  i690.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i691[1], i690.colorBySpeed)
  i690.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i691[2], i690.colorOverLifetime)
  i690.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i691[3], i690.emission)
  i690.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i691[4], i690.rotationBySpeed)
  i690.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i691[5], i690.rotationOverLifetime)
  i690.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i691[6], i690.shape)
  i690.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i691[7], i690.sizeBySpeed)
  i690.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i691[8], i690.sizeOverLifetime)
  i690.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i691[9], i690.textureSheetAnimation)
  i690.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i691[10], i690.velocityOverLifetime)
  i690.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i691[11], i690.noise)
  i690.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i691[12], i690.inheritVelocity)
  i690.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i691[13], i690.forceOverLifetime)
  i690.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i691[14], i690.limitVelocityOverLifetime)
  i690.useAutoRandomSeed = !!i691[15]
  i690.randomSeed = i691[16]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemMain()
  var i693 = data
  i692.duration = i693[0]
  i692.loop = !!i693[1]
  i692.prewarm = !!i693[2]
  i692.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.startDelay)
  i692.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.startLifetime)
  i692.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[5], i692.startSpeed)
  i692.startSize3D = !!i693[6]
  i692.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[7], i692.startSizeX)
  i692.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[8], i692.startSizeY)
  i692.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[9], i692.startSizeZ)
  i692.startRotation3D = !!i693[10]
  i692.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[11], i692.startRotationX)
  i692.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[12], i692.startRotationY)
  i692.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[13], i692.startRotationZ)
  i692.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i693[14], i692.startColor)
  i692.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[15], i692.gravityModifier)
  i692.simulationSpace = i693[16]
  request.r(i693[17], i693[18], 0, i692, 'customSimulationSpace')
  i692.simulationSpeed = i693[19]
  i692.useUnscaledTime = !!i693[20]
  i692.scalingMode = i693[21]
  i692.playOnAwake = !!i693[22]
  i692.maxParticles = i693[23]
  i692.emitterVelocityMode = i693[24]
  i692.stopAction = i693[25]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i694 = root || new pc.MinMaxCurve()
  var i695 = data
  i694.mode = i695[0]
  i694.curveMin = new pc.AnimationCurve( { keys_flow: i695[1] } )
  i694.curveMax = new pc.AnimationCurve( { keys_flow: i695[2] } )
  i694.curveMultiplier = i695[3]
  i694.constantMin = i695[4]
  i694.constantMax = i695[5]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i696 = root || new pc.MinMaxGradient()
  var i697 = data
  i696.mode = i697[0]
  i696.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i697[1], i696.gradientMin)
  i696.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i697[2], i696.gradientMax)
  i696.colorMin = new pc.Color(i697[3], i697[4], i697[5], i697[6])
  i696.colorMax = new pc.Color(i697[7], i697[8], i697[9], i697[10])
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i699 = data
  i698.mode = i699[0]
  var i701 = i699[1]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i701[i + 0]) );
  }
  i698.colorKeys = i700
  var i703 = i699[2]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i703[i + 0]) );
  }
  i698.alphaKeys = i702
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemColorBySpeed()
  var i705 = data
  i704.enabled = !!i705[0]
  i704.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i705[1], i704.color)
  i704.range = new pc.Vec2( i705[2], i705[3] )
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i709 = data
  i708.color = new pc.Color(i709[0], i709[1], i709[2], i709[3])
  i708.time = i709[4]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i713 = data
  i712.alpha = i713[0]
  i712.time = i713[1]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i714 = root || new pc.ParticleSystemColorOverLifetime()
  var i715 = data
  i714.enabled = !!i715[0]
  i714.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i715[1], i714.color)
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemEmitter()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[1], i716.rateOverTime)
  i716.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i717[2], i716.rateOverDistance)
  var i719 = i717[3]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i719[i + 0]) );
  }
  i716.bursts = i718
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i722 = root || new pc.ParticleSystemBurst()
  var i723 = data
  i722.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i723[0], i722.count)
  i722.cycleCount = i723[1]
  i722.minCount = i723[2]
  i722.maxCount = i723[3]
  i722.repeatInterval = i723[4]
  i722.time = i723[5]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemRotationBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[1], i724.x)
  i724.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[2], i724.y)
  i724.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i725[3], i724.z)
  i724.separateAxes = !!i725[4]
  i724.range = new pc.Vec2( i725[5], i725[6] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemRotationOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[1], i726.x)
  i726.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[2], i726.y)
  i726.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i727[3], i726.z)
  i726.separateAxes = !!i727[4]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemShape()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.shapeType = i729[1]
  i728.randomDirectionAmount = i729[2]
  i728.sphericalDirectionAmount = i729[3]
  i728.randomPositionAmount = i729[4]
  i728.alignToDirection = !!i729[5]
  i728.radius = i729[6]
  i728.radiusMode = i729[7]
  i728.radiusSpread = i729[8]
  i728.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[9], i728.radiusSpeed)
  i728.radiusThickness = i729[10]
  i728.angle = i729[11]
  i728.length = i729[12]
  i728.boxThickness = new pc.Vec3( i729[13], i729[14], i729[15] )
  i728.meshShapeType = i729[16]
  request.r(i729[17], i729[18], 0, i728, 'mesh')
  request.r(i729[19], i729[20], 0, i728, 'meshRenderer')
  request.r(i729[21], i729[22], 0, i728, 'skinnedMeshRenderer')
  i728.useMeshMaterialIndex = !!i729[23]
  i728.meshMaterialIndex = i729[24]
  i728.useMeshColors = !!i729[25]
  i728.normalOffset = i729[26]
  i728.arc = i729[27]
  i728.arcMode = i729[28]
  i728.arcSpread = i729[29]
  i728.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[30], i728.arcSpeed)
  i728.donutRadius = i729[31]
  i728.position = new pc.Vec3( i729[32], i729[33], i729[34] )
  i728.rotation = new pc.Vec3( i729[35], i729[36], i729[37] )
  i728.scale = new pc.Vec3( i729[38], i729[39], i729[40] )
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i730 = root || new pc.ParticleSystemSizeBySpeed()
  var i731 = data
  i730.enabled = !!i731[0]
  i730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[1], i730.x)
  i730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[2], i730.y)
  i730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i731[3], i730.z)
  i730.separateAxes = !!i731[4]
  i730.range = new pc.Vec2( i731[5], i731[6] )
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i732 = root || new pc.ParticleSystemSizeOverLifetime()
  var i733 = data
  i732.enabled = !!i733[0]
  i732.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[1], i732.x)
  i732.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[2], i732.y)
  i732.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i733[3], i732.z)
  i732.separateAxes = !!i733[4]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i735 = data
  i734.enabled = !!i735[0]
  i734.mode = i735[1]
  i734.animation = i735[2]
  i734.numTilesX = i735[3]
  i734.numTilesY = i735[4]
  i734.useRandomRow = !!i735[5]
  i734.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[6], i734.frameOverTime)
  i734.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[7], i734.startFrame)
  i734.cycleCount = i735[8]
  i734.rowIndex = i735[9]
  i734.flipU = i735[10]
  i734.flipV = i735[11]
  i734.spriteCount = i735[12]
  var i737 = i735[13]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.sprites = i736
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[1], i740.x)
  i740.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[2], i740.y)
  i740.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[3], i740.z)
  i740.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[4], i740.radial)
  i740.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[5], i740.speedModifier)
  i740.space = i741[6]
  i740.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[7], i740.orbitalX)
  i740.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[8], i740.orbitalY)
  i740.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.orbitalZ)
  i740.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[10], i740.orbitalOffsetX)
  i740.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[11], i740.orbitalOffsetY)
  i740.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[12], i740.orbitalOffsetZ)
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemNoise()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.separateAxes = !!i743[1]
  i742.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.strengthX)
  i742.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.strengthY)
  i742.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[4], i742.strengthZ)
  i742.frequency = i743[5]
  i742.damping = !!i743[6]
  i742.octaveCount = i743[7]
  i742.octaveMultiplier = i743[8]
  i742.octaveScale = i743[9]
  i742.quality = i743[10]
  i742.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[11], i742.scrollSpeed)
  i742.scrollSpeedMultiplier = i743[12]
  i742.remapEnabled = !!i743[13]
  i742.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[14], i742.remapX)
  i742.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[15], i742.remapY)
  i742.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[16], i742.remapZ)
  i742.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[17], i742.positionAmount)
  i742.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[18], i742.rotationAmount)
  i742.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[19], i742.sizeAmount)
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemInheritVelocity()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.mode = i745[1]
  i744.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.curve)
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemForceOverLifetime()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[1], i746.x)
  i746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[2], i746.y)
  i746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[3], i746.z)
  i746.space = i747[4]
  i746.randomized = !!i747[5]
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i748 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i749 = data
  i748.enabled = !!i749[0]
  i748.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[1], i748.limit)
  i748.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[2], i748.limitX)
  i748.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[3], i748.limitY)
  i748.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[4], i748.limitZ)
  i748.dampen = i749[5]
  i748.separateAxes = !!i749[6]
  i748.space = i749[7]
  i748.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i749[8], i748.drag)
  i748.multiplyDragByParticleSize = !!i749[9]
  i748.multiplyDragByParticleVelocity = !!i749[10]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i751 = data
  i750.enabled = !!i751[0]
  request.r(i751[1], i751[2], 0, i750, 'sharedMaterial')
  var i753 = i751[3]
  var i752 = []
  for(var i = 0; i < i753.length; i += 2) {
  request.r(i753[i + 0], i753[i + 1], 2, i752, '')
  }
  i750.sharedMaterials = i752
  i750.receiveShadows = !!i751[4]
  i750.shadowCastingMode = i751[5]
  i750.sortingLayerID = i751[6]
  i750.sortingOrder = i751[7]
  i750.lightmapIndex = i751[8]
  i750.lightmapSceneIndex = i751[9]
  i750.lightmapScaleOffset = new pc.Vec4( i751[10], i751[11], i751[12], i751[13] )
  i750.lightProbeUsage = i751[14]
  i750.reflectionProbeUsage = i751[15]
  request.r(i751[16], i751[17], 0, i750, 'mesh')
  i750.meshCount = i751[18]
  i750.activeVertexStreamsCount = i751[19]
  i750.alignment = i751[20]
  i750.renderMode = i751[21]
  i750.sortMode = i751[22]
  i750.lengthScale = i751[23]
  i750.velocityScale = i751[24]
  i750.cameraVelocityScale = i751[25]
  i750.normalDirection = i751[26]
  i750.sortingFudge = i751[27]
  i750.minParticleSize = i751[28]
  i750.maxParticleSize = i751[29]
  i750.pivot = new pc.Vec3( i751[30], i751[31], i751[32] )
  request.r(i751[33], i751[34], 0, i750, 'trailMaterial')
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'clip')
  request.r(i755[2], i755[3], 0, i754, 'outputAudioMixerGroup')
  i754.playOnAwake = !!i755[4]
  i754.loop = !!i755[5]
  i754.time = i755[6]
  i754.volume = i755[7]
  i754.pitch = i755[8]
  i754.enabled = !!i755[9]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i757 = data
  i756.enabled = !!i757[0]
  i756.isTrigger = !!i757[1]
  request.r(i757[2], i757[3], 0, i756, 'material')
  request.r(i757[4], i757[5], 0, i756, 'sharedMesh')
  i756.convex = !!i757[6]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i759 = data
  i758.enabled = !!i759[0]
  i758.aspect = i759[1]
  i758.orthographic = !!i759[2]
  i758.orthographicSize = i759[3]
  i758.backgroundColor = new pc.Color(i759[4], i759[5], i759[6], i759[7])
  i758.nearClipPlane = i759[8]
  i758.farClipPlane = i759[9]
  i758.fieldOfView = i759[10]
  i758.depth = i759[11]
  i758.clearFlags = i759[12]
  i758.cullingMask = i759[13]
  i758.rect = i759[14]
  request.r(i759[15], i759[16], 0, i758, 'targetTexture')
  i758.usePhysicalProperties = !!i759[17]
  i758.focalLength = i759[18]
  i758.sensorSize = new pc.Vec2( i759[19], i759[20] )
  i758.lensShift = new pc.Vec2( i759[21], i759[22] )
  i758.gateFit = i759[23]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i761 = data
  i760.center = new pc.Vec3( i761[0], i761[1], i761[2] )
  i760.size = new pc.Vec3( i761[3], i761[4], i761[5] )
  i760.enabled = !!i761[6]
  i760.isTrigger = !!i761[7]
  request.r(i761[8], i761[9], 0, i760, 'material')
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i763 = data
  i762.pivot = new pc.Vec2( i763[0], i763[1] )
  i762.anchorMin = new pc.Vec2( i763[2], i763[3] )
  i762.anchorMax = new pc.Vec2( i763[4], i763[5] )
  i762.sizeDelta = new pc.Vec2( i763[6], i763[7] )
  i762.anchoredPosition3D = new pc.Vec3( i763[8], i763[9], i763[10] )
  i762.rotation = new pc.Quat(i763[11], i763[12], i763[13], i763[14])
  i762.scale = new pc.Vec3( i763[15], i763[16], i763[17] )
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i765 = data
  i764.enabled = !!i765[0]
  i764.planeDistance = i765[1]
  i764.referencePixelsPerUnit = i765[2]
  i764.isFallbackOverlay = !!i765[3]
  i764.renderMode = i765[4]
  i764.renderOrder = i765[5]
  i764.sortingLayerName = i765[6]
  i764.sortingOrder = i765[7]
  i764.scaleFactor = i765[8]
  request.r(i765[9], i765[10], 0, i764, 'worldCamera')
  i764.overrideSorting = !!i765[11]
  i764.pixelPerfect = !!i765[12]
  i764.targetDisplay = i765[13]
  i764.overridePixelPerfect = !!i765[14]
  return i764
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i767 = data
  i766.m_UiScaleMode = i767[0]
  i766.m_ReferencePixelsPerUnit = i767[1]
  i766.m_ScaleFactor = i767[2]
  i766.m_ReferenceResolution = new pc.Vec2( i767[3], i767[4] )
  i766.m_ScreenMatchMode = i767[5]
  i766.m_MatchWidthOrHeight = i767[6]
  i766.m_PhysicalUnit = i767[7]
  i766.m_FallbackScreenDPI = i767[8]
  i766.m_DefaultSpriteDPI = i767[9]
  i766.m_DynamicPixelsPerUnit = i767[10]
  i766.m_PresetInfoIsWorld = !!i767[11]
  return i766
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i769 = data
  i768.m_IgnoreReversedGraphics = !!i769[0]
  i768.m_BlockingObjects = i769[1]
  i768.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i769[2] )
  return i768
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i770 = root || request.c( 'EndCardController' )
  var i771 = data
  i770.alwaysShowEndcardTESTING = !!i771[0]
  i770.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i771[1], i770.EndCardOpenedEvent)
  i770._backgroundColor = new pc.Color(i771[2], i771[3], i771[4], i771[5])
  request.r(i771[6], i771[7], 0, i770, '_backgroundTexture')
  request.r(i771[8], i771[9], 0, i770, '_iconTexture')
  i770._iconColor = new pc.Color(i771[10], i771[11], i771[12], i771[13])
  request.r(i771[14], i771[15], 0, i770, '_buttonTexture')
  i770._buttonColor = new pc.Color(i771[16], i771[17], i771[18], i771[19])
  i770._endCardDescriptionText = i771[20]
  i770._CTAButtonText = i771[21]
  i770._useBestFitOnCTA = !!i771[22]
  i770._CTAFontColor = new pc.Color(i771[23], i771[24], i771[25], i771[26])
  i770._descriptionFontColor = new pc.Color(i771[27], i771[28], i771[29], i771[30])
  request.r(i771[31], i771[32], 0, i770, '_CTAFont')
  request.r(i771[33], i771[34], 0, i770, '_descriptionFont')
  i770._CTAFontSize = i771[35]
  i770._descriptionFontSize = i771[36]
  i770._centerDescriptionX = !!i771[37]
  i770._centerDescriptionY = !!i771[38]
  i770._centerButtonX = !!i771[39]
  i770._centerButtonY = !!i771[40]
  i770._descriptionPositionX = i771[41]
  i770._descriptionPositionY = i771[42]
  i770._buttonPositionX = i771[43]
  i770._buttonPositionY = i771[44]
  i770._CTAFontSizeLandscape = i771[45]
  i770._descriptionFontSizeLandscape = i771[46]
  i770._centerDescriptionXLandscape = !!i771[47]
  i770._centerDescriptionYLandscape = !!i771[48]
  i770._centerButtonXLandscape = !!i771[49]
  i770._centerButtonYLandscape = !!i771[50]
  i770._descriptionPositionXLandscape = i771[51]
  i770._descriptionPositionYLandscape = i771[52]
  i770._buttonPositionXLandscape = i771[53]
  i770._buttonPositionYLandscape = i771[54]
  i770._centerIconX = !!i771[55]
  i770._centerIconY = !!i771[56]
  i770._iconPositionX = i771[57]
  i770._iconPositionY = i771[58]
  i770._iconSize = i771[59]
  i770._roundEdgesOnIcon = !!i771[60]
  i770._centerIconXLandscape = !!i771[61]
  i770._centerIconYLandscape = !!i771[62]
  i770._iconPositionXLandscape = i771[63]
  i770._iconPositionYLandscape = i771[64]
  i770._iconSizeLandscape = i771[65]
  i770._roundEdgesOnIconLandscape = !!i771[66]
  i770._endCardClickableOptions = i771[67]
  i770._buttonAnimationType = i771[68]
  i770._endCardPortraitAnimationType = i771[69]
  i770._endCardLandscapeAnimationType = i771[70]
  request.r(i771[71], i771[72], 0, i770, '_backgroundImage')
  request.r(i771[73], i771[74], 0, i770, '_CTAButton')
  request.r(i771[75], i771[76], 0, i770, '_ScreenCTAButton')
  request.r(i771[77], i771[78], 0, i770, '_CTAButtonTextText')
  request.r(i771[79], i771[80], 0, i770, '_EndCardDescriptionTextText')
  request.r(i771[81], i771[82], 0, i770, '_maskIcon')
  request.r(i771[83], i771[84], 0, i770, '_iconRect')
  request.r(i771[85], i771[86], 0, i770, '_iconRectMask')
  request.r(i771[87], i771[88], 0, i770, '_descriptionRect')
  request.r(i771[89], i771[90], 0, i770, '_buttonRect')
  request.r(i771[91], i771[92], 0, i770, '_CTAButtonAnimator')
  request.r(i771[93], i771[94], 0, i770, '_endCardAnimator')
  request.r(i771[95], i771[96], 0, i770, '_iconImage')
  request.r(i771[97], i771[98], 0, i770, '_CTAButtonImage')
  return i770
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i773 = data
  i772.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i773[0], i772.m_PersistentCalls)
  return i772
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i775 = data
  var i777 = i775[0]
  var i776 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i777.length; i += 1) {
    i776.add(request.d('UnityEngine.Events.PersistentCall', i777[i + 0]));
  }
  i774.m_Calls = i776
  return i774
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_Target')
  i780.m_TargetAssemblyTypeName = i781[2]
  i780.m_MethodName = i781[3]
  i780.m_Mode = i781[4]
  i780.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i781[5], i780.m_Arguments)
  i780.m_CallState = i781[6]
  return i780
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i782 = root || request.c( 'EndCardSetScale' )
  var i783 = data
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i785 = data
  i784.cullTransparentMesh = !!i785[0]
  return i784
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_Texture')
  i786.m_UVRect = UnityEngine.Rect.MinMaxRect(i787[2], i787[3], i787[4], i787[5])
  request.r(i787[6], i787[7], 0, i786, 'm_Material')
  i786.m_Maskable = !!i787[8]
  i786.m_Color = new pc.Color(i787[9], i787[10], i787[11], i787[12])
  i786.m_RaycastTarget = !!i787[13]
  i786.m_RaycastPadding = new pc.Vec4( i787[14], i787[15], i787[16], i787[17] )
  return i786
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i789 = data
  i788.m_AspectMode = i789[0]
  i788.m_AspectRatio = i789[1]
  return i788
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.UI.Mask' )
  var i791 = data
  i790.m_ShowMaskGraphic = !!i791[0]
  return i790
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i792 = root || request.c( 'UnityEngine.UI.Image' )
  var i793 = data
  request.r(i793[0], i793[1], 0, i792, 'm_Sprite')
  i792.m_Type = i793[2]
  i792.m_PreserveAspect = !!i793[3]
  i792.m_FillCenter = !!i793[4]
  i792.m_FillMethod = i793[5]
  i792.m_FillAmount = i793[6]
  i792.m_FillClockwise = !!i793[7]
  i792.m_FillOrigin = i793[8]
  i792.m_UseSpriteMesh = !!i793[9]
  i792.m_PixelsPerUnitMultiplier = i793[10]
  request.r(i793[11], i793[12], 0, i792, 'm_Material')
  i792.m_Maskable = !!i793[13]
  i792.m_Color = new pc.Color(i793[14], i793[15], i793[16], i793[17])
  i792.m_RaycastTarget = !!i793[18]
  i792.m_RaycastPadding = new pc.Vec4( i793[19], i793[20], i793[21], i793[22] )
  return i792
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i794 = root || request.c( 'UnityEngine.UI.Text' )
  var i795 = data
  i794.m_FontData = request.d('UnityEngine.UI.FontData', i795[0], i794.m_FontData)
  i794.m_Text = i795[1]
  request.r(i795[2], i795[3], 0, i794, 'm_Material')
  i794.m_Maskable = !!i795[4]
  i794.m_Color = new pc.Color(i795[5], i795[6], i795[7], i795[8])
  i794.m_RaycastTarget = !!i795[9]
  i794.m_RaycastPadding = new pc.Vec4( i795[10], i795[11], i795[12], i795[13] )
  return i794
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i796 = root || request.c( 'UnityEngine.UI.FontData' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'm_Font')
  i796.m_FontSize = i797[2]
  i796.m_FontStyle = i797[3]
  i796.m_BestFit = !!i797[4]
  i796.m_MinSize = i797[5]
  i796.m_MaxSize = i797[6]
  i796.m_Alignment = i797[7]
  i796.m_AlignByGeometry = !!i797[8]
  i796.m_RichText = !!i797[9]
  i796.m_HorizontalOverflow = i797[10]
  i796.m_VerticalOverflow = i797[11]
  i796.m_LineSpacing = i797[12]
  return i796
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.Button' )
  var i799 = data
  i798.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i799[0], i798.m_OnClick)
  i798.m_Navigation = request.d('UnityEngine.UI.Navigation', i799[1], i798.m_Navigation)
  i798.m_Transition = i799[2]
  i798.m_Colors = request.d('UnityEngine.UI.ColorBlock', i799[3], i798.m_Colors)
  i798.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i799[4], i798.m_SpriteState)
  i798.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i799[5], i798.m_AnimationTriggers)
  i798.m_Interactable = !!i799[6]
  request.r(i799[7], i799[8], 0, i798, 'm_TargetGraphic')
  return i798
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i801 = data
  i800.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i801[0], i800.m_PersistentCalls)
  return i800
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i802 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'm_ObjectArgument')
  i802.m_ObjectArgumentAssemblyTypeName = i803[2]
  i802.m_IntArgument = i803[3]
  i802.m_FloatArgument = i803[4]
  i802.m_StringArgument = i803[5]
  i802.m_BoolArgument = !!i803[6]
  return i802
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i805 = data
  i804.m_Mode = i805[0]
  i804.m_WrapAround = !!i805[1]
  request.r(i805[2], i805[3], 0, i804, 'm_SelectOnUp')
  request.r(i805[4], i805[5], 0, i804, 'm_SelectOnDown')
  request.r(i805[6], i805[7], 0, i804, 'm_SelectOnLeft')
  request.r(i805[8], i805[9], 0, i804, 'm_SelectOnRight')
  return i804
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i807 = data
  i806.m_NormalColor = new pc.Color(i807[0], i807[1], i807[2], i807[3])
  i806.m_HighlightedColor = new pc.Color(i807[4], i807[5], i807[6], i807[7])
  i806.m_PressedColor = new pc.Color(i807[8], i807[9], i807[10], i807[11])
  i806.m_SelectedColor = new pc.Color(i807[12], i807[13], i807[14], i807[15])
  i806.m_DisabledColor = new pc.Color(i807[16], i807[17], i807[18], i807[19])
  i806.m_ColorMultiplier = i807[20]
  i806.m_FadeDuration = i807[21]
  return i806
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_HighlightedSprite')
  request.r(i809[2], i809[3], 0, i808, 'm_PressedSprite')
  request.r(i809[4], i809[5], 0, i808, 'm_SelectedSprite')
  request.r(i809[6], i809[7], 0, i808, 'm_DisabledSprite')
  return i808
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i811 = data
  i810.m_NormalTrigger = i811[0]
  i810.m_HighlightedTrigger = i811[1]
  i810.m_PressedTrigger = i811[2]
  i810.m_SelectedTrigger = i811[3]
  i810.m_DisabledTrigger = i811[4]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i813 = data
  i812.m_Alpha = i813[0]
  i812.m_Interactable = !!i813[1]
  i812.m_BlocksRaycasts = !!i813[2]
  i812.m_IgnoreParentGroups = !!i813[3]
  i812.enabled = !!i813[4]
  return i812
}

Deserializers["BotNetwork"] = function (request, data, root) {
  var i814 = root || request.c( 'BotNetwork' )
  var i815 = data
  i814._maxHealth = i815[0]
  var i817 = i815[1]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i814._legalTargets = i816
  i814._path = request.d('Path', i815[2], i814._path)
  i814._currentHealth = i815[3]
  i814.isDead = !!i815[4]
  return i814
}

Deserializers["Path"] = function (request, data, root) {
  var i820 = root || request.c( 'Path' )
  var i821 = data
  i820.IsUse = !!i821[0]
  var i823 = i821[1]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i820.WayPoints = i822
  return i820
}

Deserializers["FiniteStateMachine"] = function (request, data, root) {
  var i824 = root || request.c( 'FiniteStateMachine' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, '_stateTransitionManager')
  return i824
}

Deserializers["StateTransitionManager"] = function (request, data, root) {
  var i826 = root || request.c( 'StateTransitionManager' )
  var i827 = data
  return i826
}

Deserializers["StateConditionManager"] = function (request, data, root) {
  var i828 = root || request.c( 'StateConditionManager' )
  var i829 = data
  return i828
}

Deserializers["BotPlayita"] = function (request, data, root) {
  var i830 = root || request.c( 'BotPlayita' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, '_finiteStateMachine')
  request.r(i831[2], i831[3], 0, i830, '_stateTransitionManager')
  request.r(i831[4], i831[5], 0, i830, '_stateConditionManager')
  request.r(i831[6], i831[7], 0, i830, '_botNetwork')
  request.r(i831[8], i831[9], 0, i830, '_animator')
  request.r(i831[10], i831[11], 0, i830, '_muzzle')
  request.r(i831[12], i831[13], 0, i830, '_bullet')
  i830._target = new pc.Vec3( i831[14], i831[15], i831[16] )
  request.r(i831[17], i831[18], 0, i830, '_healthBarRenderer')
  request.r(i831[19], i831[20], 0, i830, '_takeSource')
  request.r(i831[21], i831[22], 0, i830, '_hitSource')
  return i830
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i832 = root || request.c( 'BulletTrail' )
  var i833 = data
  i832.Speed = i833[0]
  i832.LifeTime = i833[1]
  request.r(i833[2], i833[3], 0, i832, '_trail')
  i832._trailStartScale = new pc.Vec3( i833[4], i833[5], i833[6] )
  i832._trailMaxScale = new pc.Vec3( i833[7], i833[8], i833[9] )
  i832._trailLengthAtMaxScale = i833[10]
  return i832
}

Deserializers["BotPlayitaParachute"] = function (request, data, root) {
  var i834 = root || request.c( 'BotPlayitaParachute' )
  var i835 = data
  i834.Speed = i835[0]
  i834._groundLayer = UnityEngine.LayerMask.FromIntegerValue( i835[1] )
  request.r(i835[2], i835[3], 0, i834, '_parachuteScale')
  i834._distanceOpenParachute = i835[4]
  i834._distanceCloseParachute = i835[5]
  request.r(i835[6], i835[7], 0, i834, '_finiteStateMachine')
  request.r(i835[8], i835[9], 0, i834, '_stateTransitionManager')
  request.r(i835[10], i835[11], 0, i834, '_stateConditionManager')
  request.r(i835[12], i835[13], 0, i834, '_botNetwork')
  request.r(i835[14], i835[15], 0, i834, '_animator')
  request.r(i835[16], i835[17], 0, i834, '_muzzle')
  request.r(i835[18], i835[19], 0, i834, '_bullet')
  i834._target = new pc.Vec3( i835[20], i835[21], i835[22] )
  request.r(i835[23], i835[24], 0, i834, '_healthBarRenderer')
  request.r(i835[25], i835[26], 0, i834, '_takeSource')
  request.r(i835[27], i835[28], 0, i834, '_hitSource')
  return i834
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i836 = root || request.c( 'UICrosshairItem' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'CrosshairRectTransform')
  i836._distanceMax = i837[2]
  i836._distanceMin = i837[3]
  i836._speedShrink = i837[4]
  i836._currentSpeed = i837[5]
  i836._rateOnMove = i837[6]
  i836._rateOnAttack = i837[7]
  return i836
}

Deserializers["Effect"] = function (request, data, root) {
  var i838 = root || request.c( 'Effect' )
  var i839 = data
  var i841 = i839[0]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.particles = i840
  i838._lifeTime = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i845 = data
  i844.name = i845[0]
  i844.atlasId = i845[1]
  i844.mipmapCount = i845[2]
  i844.hdr = !!i845[3]
  i844.size = i845[4]
  i844.anisoLevel = i845[5]
  i844.filterMode = i845[6]
  i844.wrapMode = i845[7]
  var i847 = i845[8]
  var i846 = []
  for(var i = 0; i < i847.length; i += 4) {
    i846.push( UnityEngine.Rect.MinMaxRect(i847[i + 0], i847[i + 1], i847[i + 2], i847[i + 3]) );
  }
  i844.rects = i846
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i851 = data
  i850.name = i851[0]
  i850.index = i851[1]
  i850.startup = !!i851[2]
  return i850
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i852 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, 'm_FirstSelected')
  i852.m_sendNavigationEvents = !!i853[2]
  i852.m_DragThreshold = i853[3]
  return i852
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i855 = data
  i854.m_HorizontalAxis = i855[0]
  i854.m_VerticalAxis = i855[1]
  i854.m_SubmitButton = i855[2]
  i854.m_CancelButton = i855[3]
  i854.m_InputActionsPerSecond = i855[4]
  i854.m_RepeatDelay = i855[5]
  i854.m_ForceModuleActive = !!i855[6]
  i854.m_SendPointerHoverToParent = !!i855[7]
  return i854
}

Deserializers["UIManager"] = function (request, data, root) {
  var i856 = root || request.c( 'UIManager' )
  var i857 = data
  i856.url = i857[0]
  request.r(i857[1], i857[2], 0, i856, 'InGame')
  request.r(i857[3], i857[4], 0, i856, 'TotalBotText')
  i856.initBot = i857[5]
  request.r(i857[6], i857[7], 0, i856, 'process')
  request.r(i857[8], i857[9], 0, i856, 'gameProcess')
  request.r(i857[10], i857[11], 0, i856, 'tapToPlay')
  return i856
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.Outline' )
  var i859 = data
  i858.m_EffectColor = new pc.Color(i859[0], i859[1], i859[2], i859[3])
  i858.m_EffectDistance = new pc.Vec2( i859[4], i859[5] )
  i858.m_UseGraphicAlpha = !!i859[6]
  return i858
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i861 = data
  i860.m_Spacing = i861[0]
  i860.m_ChildForceExpandWidth = !!i861[1]
  i860.m_ChildForceExpandHeight = !!i861[2]
  i860.m_ChildControlWidth = !!i861[3]
  i860.m_ChildControlHeight = !!i861[4]
  i860.m_ChildScaleWidth = !!i861[5]
  i860.m_ChildScaleHeight = !!i861[6]
  i860.m_ReverseArrangement = !!i861[7]
  i860.m_Padding = UnityEngine.RectOffset.FromPaddings(i861[8], i861[9], i861[10], i861[11])
  i860.m_ChildAlignment = i861[12]
  return i860
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i862 = root || request.c( 'BotParachute' )
  var i863 = data
  request.r(i863[0], i863[1], 0, i862, '_animator')
  request.r(i863[2], i863[3], 0, i862, '_muzzle')
  request.r(i863[4], i863[5], 0, i862, 'bullet')
  i862.target = new pc.Vec3( i863[6], i863[7], i863[8] )
  i862.moveIndex = i863[9]
  i862.isMoveDone = !!i863[10]
  i862.isDie = !!i863[11]
  i862.isMove = !!i863[12]
  i862.parachuteDone = !!i863[13]
  i862.isTakeDame = !!i863[14]
  i862.maxHealth = i863[15]
  request.r(i863[16], i863[17], 0, i862, 'healthBarRenderer')
  request.r(i863[18], i863[19], 0, i862, '_audioSource')
  request.r(i863[20], i863[21], 0, i862, '_hitSource')
  return i862
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i864 = root || request.c( 'ParachuteController' )
  var i865 = data
  i864.Speed = i865[0]
  request.r(i865[1], i865[2], 0, i864, '_botController')
  i864.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i865[3] )
  request.r(i865[4], i865[5], 0, i864, 'ParachuteScale')
  i864.scaleAmount = i865[6]
  i864.velocity = new pc.Vec3( i865[7], i865[8], i865[9] )
  i864._distanceOpenParachute = i865[10]
  i864._distanceCloseParachute = i865[11]
  return i864
}

Deserializers["BotController"] = function (request, data, root) {
  var i866 = root || request.c( 'BotController' )
  var i867 = data
  request.r(i867[0], i867[1], 0, i866, '_animator')
  request.r(i867[2], i867[3], 0, i866, '_muzzle')
  request.r(i867[4], i867[5], 0, i866, 'bullet')
  i866.target = new pc.Vec3( i867[6], i867[7], i867[8] )
  i866.moveIndex = i867[9]
  i866.isMoveDone = !!i867[10]
  i866.isDie = !!i867[11]
  i866.isTakeDame = !!i867[12]
  i866.maxHealth = i867[13]
  request.r(i867[14], i867[15], 0, i866, 'healthBarRenderer')
  request.r(i867[16], i867[17], 0, i866, '_audioSource')
  request.r(i867[18], i867[19], 0, i866, '_hitSource')
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i869 = data
  i868.enabled = !!i869[0]
  i868.type = i869[1]
  i868.color = new pc.Color(i869[2], i869[3], i869[4], i869[5])
  i868.cullingMask = i869[6]
  i868.intensity = i869[7]
  i868.range = i869[8]
  i868.spotAngle = i869[9]
  i868.shadows = i869[10]
  i868.shadowNormalBias = i869[11]
  i868.shadowBias = i869[12]
  i868.shadowStrength = i869[13]
  i868.shadowResolution = i869[14]
  i868.lightmapBakeType = i869[15]
  i868.renderMode = i869[16]
  request.r(i869[17], i869[18], 0, i868, 'cookie')
  i868.cookieSize = i869[19]
  return i868
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i870 = root || request.c( 'PlayerView' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, '_mainRoot')
  request.r(i871[2], i871[3], 0, i870, '_head')
  i870._sensitivity = i871[4]
  i870._slerpFactor = i871[5]
  i870._viewHorizontalThreshold = new pc.Vec2( i871[6], i871[7] )
  i870._viewVerticalThreshold = new pc.Vec2( i871[8], i871[9] )
  i870._initRotate = new pc.Vec2( i871[10], i871[11] )
  i870._totalRotate = new pc.Vec2( i871[12], i871[13] )
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i873 = data
  i872.playAutomatically = !!i873[0]
  request.r(i873[1], i873[2], 0, i872, 'clip')
  var i875 = i873[3]
  var i874 = []
  for(var i = 0; i < i875.length; i += 2) {
  request.r(i875[i + 0], i875[i + 1], 2, i874, '')
  }
  i872.clips = i874
  i872.wrapMode = i873[4]
  i872.enabled = !!i873[5]
  return i872
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i878 = root || request.c( 'WeaponController' )
  var i879 = data
  i878.Mask = UnityEngine.LayerMask.FromIntegerValue( i879[0] )
  i878.damage = i879[1]
  request.r(i879[2], i879[3], 0, i878, '_muzzleTrans')
  request.r(i879[4], i879[5], 0, i878, '_animation')
  request.r(i879[6], i879[7], 0, i878, 'bullet')
  request.r(i879[8], i879[9], 0, i878, '_muzzleFlash')
  request.r(i879[10], i879[11], 0, i878, 'audioClip')
  request.r(i879[12], i879[13], 0, i878, 'audioSource')
  i878.SphereRadius = i879[14]
  request.r(i879[15], i879[16], 0, i878, 'Effect')
  return i878
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i880 = root || request.c( 'SpawnBot' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, '_botPrefab')
  i880._spawnInterval = i881[2]
  i880._upper = i881[3]
  return i880
}

Deserializers["BotManager"] = function (request, data, root) {
  var i882 = root || request.c( 'BotManager' )
  var i883 = data
  return i882
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i884 = root || request.c( 'AudioManager' )
  var i885 = data
  var i887 = i885[0]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.AttackSounds = i886
  var i889 = i885[1]
  var i888 = []
  for(var i = 0; i < i889.length; i += 2) {
  request.r(i889[i + 0], i889[i + 1], 2, i888, '')
  }
  i884.HitSounds = i888
  return i884
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i892 = root || request.c( 'ConfigManager' )
  var i893 = data
  var i895 = i893[0]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('StepData', i895[i + 0]) );
  }
  i892._stepDatas = i894
  return i892
}

Deserializers["StepData"] = function (request, data, root) {
  var i898 = root || request.c( 'StepData' )
  var i899 = data
  i898.NumberBot = i899[0]
  i898.NumberParachute = i899[1]
  return i898
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i900 = root || request.c( 'GamePlayManager' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, '_spawnBotNormal')
  request.r(i901[2], i901[3], 0, i900, '_spawnBotParachute')
  request.r(i901[4], i901[5], 0, i900, '_a')
  return i900
}

Deserializers["PathManager"] = function (request, data, root) {
  var i902 = root || request.c( 'PathManager' )
  var i903 = data
  var i905 = i903[0]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i905.length; i += 1) {
    i904.add(request.d('Path', i905[i + 0]));
  }
  i902._paths = i904
  var i907 = i903[1]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i907.length; i += 1) {
    i906.add(request.d('Path', i907[i + 0]));
  }
  i902._pathsParachute = i906
  return i902
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i910 = root || request.c( 'ObjectPool' )
  var i911 = data
  return i910
}

Deserializers["BotManagerTest"] = function (request, data, root) {
  var i912 = root || request.c( 'BotManagerTest' )
  var i913 = data
  var i915 = i913[0]
  var i914 = new (System.Collections.Generic.List$1(Bridge.ns('BotNetwork')))
  for(var i = 0; i < i915.length; i += 2) {
  request.r(i915[i + 0], i915[i + 1], 1, i914, '')
  }
  i912._botNetworks = i914
  return i912
}

Deserializers["SpawnBotTest"] = function (request, data, root) {
  var i918 = root || request.c( 'SpawnBotTest' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, '_botPrefab')
  i918._spawnInterval = i919[2]
  i918._upper = i919[3]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i921 = data
  i920.ambientIntensity = i921[0]
  i920.reflectionIntensity = i921[1]
  i920.ambientMode = i921[2]
  i920.ambientLight = new pc.Color(i921[3], i921[4], i921[5], i921[6])
  i920.ambientSkyColor = new pc.Color(i921[7], i921[8], i921[9], i921[10])
  i920.ambientGroundColor = new pc.Color(i921[11], i921[12], i921[13], i921[14])
  i920.ambientEquatorColor = new pc.Color(i921[15], i921[16], i921[17], i921[18])
  i920.fogColor = new pc.Color(i921[19], i921[20], i921[21], i921[22])
  i920.fogEndDistance = i921[23]
  i920.fogStartDistance = i921[24]
  i920.fogDensity = i921[25]
  i920.fog = !!i921[26]
  request.r(i921[27], i921[28], 0, i920, 'skybox')
  i920.fogMode = i921[29]
  var i923 = i921[30]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i923[i + 0]) );
  }
  i920.lightmaps = i922
  i920.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i921[31], i920.lightProbes)
  i920.lightmapsMode = i921[32]
  i920.mixedBakeMode = i921[33]
  i920.environmentLightingMode = i921[34]
  i920.ambientProbe = new pc.SphericalHarmonicsL2(i921[35])
  i920.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i921[36])
  i920.useReferenceAmbientProbe = !!i921[37]
  request.r(i921[38], i921[39], 0, i920, 'customReflection')
  request.r(i921[40], i921[41], 0, i920, 'defaultReflection')
  i920.defaultReflectionMode = i921[42]
  i920.defaultReflectionResolution = i921[43]
  i920.sunLightObjectId = i921[44]
  i920.pixelLightCount = i921[45]
  i920.defaultReflectionHDR = !!i921[46]
  i920.hasLightDataAsset = !!i921[47]
  i920.hasManualGenerate = !!i921[48]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i927 = data
  request.r(i927[0], i927[1], 0, i926, 'lightmapColor')
  request.r(i927[2], i927[3], 0, i926, 'lightmapDirection')
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i928 = root || new UnityEngine.LightProbes()
  var i929 = data
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i937 = data
  var i939 = i937[0]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i939.length; i += 1) {
    i938.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i939[i + 0]));
  }
  i936.ShaderCompilationErrors = i938
  i936.name = i937[1]
  i936.guid = i937[2]
  var i941 = i937[3]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.shaderDefinedKeywords = i940
  var i943 = i937[4]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i943[i + 0]) );
  }
  i936.passes = i942
  var i945 = i937[5]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i945[i + 0]) );
  }
  i936.usePasses = i944
  var i947 = i937[6]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i947[i + 0]) );
  }
  i936.defaultParameterValues = i946
  request.r(i937[7], i937[8], 0, i936, 'unityFallbackShader')
  i936.readDepth = !!i937[9]
  i936.isCreatedByShaderGraph = !!i937[10]
  i936.usedBatchUniforms = i937[11]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i951 = data
  i950.shaderName = i951[0]
  i950.errorMessage = i951[1]
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i956 = root || new pc.UnityShaderPass()
  var i957 = data
  i956.id = i957[0]
  i956.subShaderIndex = i957[1]
  i956.name = i957[2]
  i956.passType = i957[3]
  i956.grabPassTextureName = i957[4]
  i956.usePass = !!i957[5]
  i956.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[6], i956.zTest)
  i956.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[7], i956.zWrite)
  i956.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[8], i956.culling)
  i956.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i957[9], i956.blending)
  i956.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i957[10], i956.alphaBlending)
  i956.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[11], i956.colorWriteMask)
  i956.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[12], i956.offsetUnits)
  i956.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[13], i956.offsetFactor)
  i956.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[14], i956.stencilRef)
  i956.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[15], i956.stencilReadMask)
  i956.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i957[16], i956.stencilWriteMask)
  i956.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[17], i956.stencilOp)
  i956.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[18], i956.stencilOpFront)
  i956.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i957[19], i956.stencilOpBack)
  var i959 = i957[20]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i959[i + 0]) );
  }
  i956.tags = i958
  var i961 = i957[21]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( i961[i + 0] );
  }
  i956.passDefinedKeywords = i960
  var i963 = i957[22]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i963[i + 0]) );
  }
  i956.passDefinedKeywordGroups = i962
  var i965 = i957[23]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i965[i + 0]) );
  }
  i956.variants = i964
  var i967 = i957[24]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i967[i + 0]) );
  }
  i956.excludedVariants = i966
  i956.hasDepthReader = !!i957[25]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i969 = data
  i968.val = i969[0]
  i968.name = i969[1]
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i971 = data
  i970.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[0], i970.src)
  i970.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[1], i970.dst)
  i970.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i971[2], i970.op)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i973 = data
  i972.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[0], i972.pass)
  i972.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[1], i972.fail)
  i972.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[2], i972.zFail)
  i972.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i973[3], i972.comp)
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i977 = data
  i976.name = i977[0]
  i976.value = i977[1]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i981 = data
  var i983 = i981[0]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( i983[i + 0] );
  }
  i980.keywords = i982
  i980.hasDiscard = !!i981[1]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i987 = data
  i986.passId = i987[0]
  i986.subShaderIndex = i987[1]
  var i989 = i987[2]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i986.keywords = i988
  i986.vertexProgram = i987[3]
  i986.fragmentProgram = i987[4]
  i986.readDepth = !!i987[5]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i993 = data
  request.r(i993[0], i993[1], 0, i992, 'shader')
  i992.pass = i993[2]
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i997 = data
  i996.name = i997[0]
  i996.type = i997[1]
  i996.value = new pc.Vec4( i997[2], i997[3], i997[4], i997[5] )
  i996.textureValue = i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i999 = data
  i998.name = i999[0]
  request.r(i999[1], i999[2], 0, i998, 'texture')
  i998.aabb = i999[3]
  i998.vertices = i999[4]
  i998.triangles = i999[5]
  i998.textureRect = UnityEngine.Rect.MinMaxRect(i999[6], i999[7], i999[8], i999[9])
  i998.packedRect = UnityEngine.Rect.MinMaxRect(i999[10], i999[11], i999[12], i999[13])
  i998.border = new pc.Vec4( i999[14], i999[15], i999[16], i999[17] )
  i998.transparency = i999[18]
  i998.bounds = i999[19]
  i998.pixelsPerUnit = i999[20]
  i998.textureWidth = i999[21]
  i998.textureHeight = i999[22]
  i998.nativeSize = new pc.Vec2( i999[23], i999[24] )
  i998.pivot = new pc.Vec2( i999[25], i999[26] )
  i998.textureRectOffset = new pc.Vec2( i999[27], i999[28] )
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1001 = data
  i1000.name = i1001[0]
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1003 = data
  i1002.name = i1003[0]
  i1002.wrapMode = i1003[1]
  i1002.isLooping = !!i1003[2]
  i1002.length = i1003[3]
  var i1005 = i1003[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1005[i + 0]) );
  }
  i1002.curves = i1004
  var i1007 = i1003[5]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1007[i + 0]) );
  }
  i1002.events = i1006
  i1002.halfPrecision = !!i1003[6]
  i1002.frameRate = i1003[7]
  i1002.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1003[8], i1002.localBounds)
  i1002.hasMuscleCurves = !!i1003[9]
  var i1009 = i1003[10]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1002.clipMuscleConstant = i1008
  i1002.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1003[11], i1002.clipBindingConstant)
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1013 = data
  i1012.path = i1013[0]
  i1012.componentType = i1013[1]
  i1012.property = i1013[2]
  i1012.keys = i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1015[i + 0]) );
  }
  i1012.objectReferenceKeys = i1014
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1019 = data
  i1018.functionName = i1019[0]
  i1018.floatParameter = i1019[1]
  i1018.intParameter = i1019[2]
  i1018.stringParameter = i1019[3]
  request.r(i1019[4], i1019[5], 0, i1018, 'objectReferenceParameter')
  i1018.time = i1019[6]
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1021 = data
  i1020.center = new pc.Vec3( i1021[0], i1021[1], i1021[2] )
  i1020.extends = new pc.Vec3( i1021[3], i1021[4], i1021[5] )
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1025 = data
  var i1027 = i1025[0]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( i1027[i + 0] );
  }
  i1024.genericBindings = i1026
  var i1029 = i1025[1]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( i1029[i + 0] );
  }
  i1024.pptrCurveMapping = i1028
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1033 = data
  i1032.time = i1033[0]
  request.r(i1033[1], i1033[2], 0, i1032, 'value')
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1035 = data
  i1034.name = i1035[0]
  i1034.ascent = i1035[1]
  i1034.originalLineHeight = i1035[2]
  i1034.fontSize = i1035[3]
  var i1037 = i1035[4]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1037[i + 0]) );
  }
  i1034.characterInfo = i1036
  request.r(i1035[5], i1035[6], 0, i1034, 'texture')
  i1034.originalFontSize = i1035[7]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1041 = data
  i1040.index = i1041[0]
  i1040.advance = i1041[1]
  i1040.bearing = i1041[2]
  i1040.glyphWidth = i1041[3]
  i1040.glyphHeight = i1041[4]
  i1040.minX = i1041[5]
  i1040.maxX = i1041[6]
  i1040.minY = i1041[7]
  i1040.maxY = i1041[8]
  i1040.uvBottomLeftX = i1041[9]
  i1040.uvBottomLeftY = i1041[10]
  i1040.uvBottomRightX = i1041[11]
  i1040.uvBottomRightY = i1041[12]
  i1040.uvTopLeftX = i1041[13]
  i1040.uvTopLeftY = i1041[14]
  i1040.uvTopRightX = i1041[15]
  i1040.uvTopRightY = i1041[16]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1043 = data
  i1042.name = i1043[0]
  var i1045 = i1043[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1045[i + 0]) );
  }
  i1042.states = i1044
  var i1047 = i1043[2]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1047[i + 0]) );
  }
  i1042.layers = i1046
  var i1049 = i1043[3]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1049[i + 0]) );
  }
  i1042.parameters = i1048
  i1042.animationClips = i1043[4]
  i1042.HasSubStateMachines = !!i1043[5]
  i1042.avatarUnsupported = i1043[6]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1053 = data
  i1052.cycleOffset = i1053[0]
  i1052.cycleOffsetParameter = i1053[1]
  i1052.cycleOffsetParameterActive = !!i1053[2]
  i1052.mirror = !!i1053[3]
  i1052.mirrorParameter = i1053[4]
  i1052.mirrorParameterActive = !!i1053[5]
  i1052.motionId = i1053[6]
  i1052.nameHash = i1053[7]
  i1052.fullPathHash = i1053[8]
  i1052.speed = i1053[9]
  i1052.speedParameter = i1053[10]
  i1052.speedParameterActive = !!i1053[11]
  i1052.tag = i1053[12]
  i1052.name = i1053[13]
  i1052.layer = i1053[14]
  i1052.writeDefaultValues = !!i1053[15]
  var i1055 = i1053[16]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1055[i + 0]) );
  }
  i1052.transitions = i1054
  var i1057 = i1053[17]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 2) {
  request.r(i1057[i + 0], i1057[i + 1], 2, i1056, '')
  }
  i1052.behaviours = i1056
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1061 = data
  i1060.fullPath = i1061[0]
  i1060.canTransitionToSelf = !!i1061[1]
  i1060.duration = i1061[2]
  i1060.exitTime = i1061[3]
  i1060.hasExitTime = !!i1061[4]
  i1060.hasFixedDuration = !!i1061[5]
  i1060.interruptionSource = i1061[6]
  i1060.offset = i1061[7]
  i1060.orderedInterruption = !!i1061[8]
  i1060.destinationStateNameHash = i1061[9]
  i1060.destinationStateMachineId = i1061[10]
  i1060.isExit = !!i1061[11]
  i1060.mute = !!i1061[12]
  i1060.solo = !!i1061[13]
  var i1063 = i1061[14]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1063[i + 0]) );
  }
  i1060.conditions = i1062
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1067 = data
  i1066.mode = i1067[0]
  i1066.parameter = i1067[1]
  i1066.threshold = i1067[2]
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1073 = data
  i1072.blendingMode = i1073[0]
  i1072.defaultWeight = i1073[1]
  i1072.name = i1073[2]
  i1072.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1073[3], i1072.stateMachine)
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1075 = data
  i1074.id = i1075[0]
  i1074.defaultStateNameHash = i1075[1]
  var i1077 = i1075[2]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1077[i + 0]) );
  }
  i1074.entryTransitions = i1076
  var i1079 = i1075[3]
  var i1078 = []
  for(var i = 0; i < i1079.length; i += 1) {
    i1078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1079[i + 0]) );
  }
  i1074.anyStateTransitions = i1078
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1083 = data
  i1082.destinationStateNameHash = i1083[0]
  i1082.destinationStateMachineId = i1083[1]
  i1082.isExit = !!i1083[2]
  i1082.mute = !!i1083[3]
  i1082.solo = !!i1083[4]
  var i1085 = i1083[5]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1085[i + 0]) );
  }
  i1082.conditions = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1089 = data
  i1088.defaultBool = !!i1089[0]
  i1088.defaultFloat = i1089[1]
  i1088.defaultInt = i1089[2]
  i1088.name = i1089[3]
  i1088.nameHash = i1089[4]
  i1088.type = i1089[5]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1091 = data
  var i1093 = i1091[0]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1093[i + 0]) );
  }
  i1090.files = i1092
  i1090.componentToPrefabIds = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1097 = data
  i1096.path = i1097[0]
  request.r(i1097[1], i1097[2], 0, i1096, 'unityObject')
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1099 = data
  var i1101 = i1099[0]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1101[i + 0]) );
  }
  i1098.scriptsExecutionOrder = i1100
  var i1103 = i1099[1]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1103[i + 0]) );
  }
  i1098.sortingLayers = i1102
  var i1105 = i1099[2]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1105[i + 0]) );
  }
  i1098.cullingLayers = i1104
  i1098.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1099[3], i1098.timeSettings)
  i1098.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1099[4], i1098.physicsSettings)
  i1098.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1099[5], i1098.physics2DSettings)
  i1098.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1099[6], i1098.qualitySettings)
  i1098.enableRealtimeShadows = !!i1099[7]
  i1098.enableAutoInstancing = !!i1099[8]
  i1098.enableDynamicBatching = !!i1099[9]
  i1098.lightmapEncodingQuality = i1099[10]
  i1098.desiredColorSpace = i1099[11]
  var i1107 = i1099[12]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( i1107[i + 0] );
  }
  i1098.allTags = i1106
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1111 = data
  i1110.name = i1111[0]
  i1110.value = i1111[1]
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1115 = data
  i1114.id = i1115[0]
  i1114.name = i1115[1]
  i1114.value = i1115[2]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1119 = data
  i1118.id = i1119[0]
  i1118.name = i1119[1]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1121 = data
  i1120.fixedDeltaTime = i1121[0]
  i1120.maximumDeltaTime = i1121[1]
  i1120.timeScale = i1121[2]
  i1120.maximumParticleTimestep = i1121[3]
  return i1120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1123 = data
  i1122.gravity = new pc.Vec3( i1123[0], i1123[1], i1123[2] )
  i1122.defaultSolverIterations = i1123[3]
  i1122.bounceThreshold = i1123[4]
  i1122.autoSyncTransforms = !!i1123[5]
  i1122.autoSimulation = !!i1123[6]
  var i1125 = i1123[7]
  var i1124 = []
  for(var i = 0; i < i1125.length; i += 1) {
    i1124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1125[i + 0]) );
  }
  i1122.collisionMatrix = i1124
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1129 = data
  i1128.enabled = !!i1129[0]
  i1128.layerId = i1129[1]
  i1128.otherLayerId = i1129[2]
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1131 = data
  request.r(i1131[0], i1131[1], 0, i1130, 'material')
  i1130.gravity = new pc.Vec2( i1131[2], i1131[3] )
  i1130.positionIterations = i1131[4]
  i1130.velocityIterations = i1131[5]
  i1130.velocityThreshold = i1131[6]
  i1130.maxLinearCorrection = i1131[7]
  i1130.maxAngularCorrection = i1131[8]
  i1130.maxTranslationSpeed = i1131[9]
  i1130.maxRotationSpeed = i1131[10]
  i1130.baumgarteScale = i1131[11]
  i1130.baumgarteTOIScale = i1131[12]
  i1130.timeToSleep = i1131[13]
  i1130.linearSleepTolerance = i1131[14]
  i1130.angularSleepTolerance = i1131[15]
  i1130.defaultContactOffset = i1131[16]
  i1130.autoSimulation = !!i1131[17]
  i1130.queriesHitTriggers = !!i1131[18]
  i1130.queriesStartInColliders = !!i1131[19]
  i1130.callbacksOnDisable = !!i1131[20]
  i1130.reuseCollisionCallbacks = !!i1131[21]
  i1130.autoSyncTransforms = !!i1131[22]
  var i1133 = i1131[23]
  var i1132 = []
  for(var i = 0; i < i1133.length; i += 1) {
    i1132.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1133[i + 0]) );
  }
  i1130.collisionMatrix = i1132
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1137 = data
  i1136.enabled = !!i1137[0]
  i1136.layerId = i1137[1]
  i1136.otherLayerId = i1137[2]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1139 = data
  var i1141 = i1139[0]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1141[i + 0]) );
  }
  i1138.qualityLevels = i1140
  var i1143 = i1139[1]
  var i1142 = []
  for(var i = 0; i < i1143.length; i += 1) {
    i1142.push( i1143[i + 0] );
  }
  i1138.names = i1142
  i1138.shadows = i1139[2]
  i1138.anisotropicFiltering = i1139[3]
  i1138.antiAliasing = i1139[4]
  i1138.lodBias = i1139[5]
  i1138.shadowCascades = i1139[6]
  i1138.shadowDistance = i1139[7]
  i1138.shadowmaskMode = i1139[8]
  i1138.shadowProjection = i1139[9]
  i1138.shadowResolution = i1139[10]
  i1138.softParticles = !!i1139[11]
  i1138.softVegetation = !!i1139[12]
  i1138.activeColorSpace = i1139[13]
  i1138.desiredColorSpace = i1139[14]
  i1138.masterTextureLimit = i1139[15]
  i1138.maxQueuedFrames = i1139[16]
  i1138.particleRaycastBudget = i1139[17]
  i1138.pixelLightCount = i1139[18]
  i1138.realtimeReflectionProbes = !!i1139[19]
  i1138.shadowCascade2Split = i1139[20]
  i1138.shadowCascade4Split = new pc.Vec3( i1139[21], i1139[22], i1139[23] )
  i1138.streamingMipmapsActive = !!i1139[24]
  i1138.vSyncCount = i1139[25]
  i1138.asyncUploadBufferSize = i1139[26]
  i1138.asyncUploadTimeSlice = i1139[27]
  i1138.billboardsFaceCameraPosition = !!i1139[28]
  i1138.shadowNearPlaneOffset = i1139[29]
  i1138.streamingMipmapsMemoryBudget = i1139[30]
  i1138.maximumLODLevel = i1139[31]
  i1138.streamingMipmapsAddAllCameras = !!i1139[32]
  i1138.streamingMipmapsMaxLevelReduction = i1139[33]
  i1138.streamingMipmapsRenderersPerFrame = i1139[34]
  i1138.resolutionScalingFixedDPIFactor = i1139[35]
  i1138.streamingMipmapsMaxFileIORequests = i1139[36]
  i1138.currentQualityLevel = i1139[37]
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1147 = data
  i1146.name = i1147[0]
  var i1149 = i1147[1]
  var i1148 = []
  for(var i = 0; i < i1149.length; i += 1) {
    i1148.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1149[i + 0]) );
  }
  i1146.tos = i1148
  var i1151 = i1147[2]
  var i1150 = []
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.push( i1151[i + 0] );
  }
  i1146.constant = i1150
  i1146.isValid = !!i1147[3]
  i1146.isHuman = !!i1147[4]
  i1146.hasRootMotion = !!i1147[5]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1155 = data
  i1154.hash = i1155[0]
  i1154.path = i1155[1]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1159 = data
  i1158.weight = i1159[0]
  i1158.vertices = i1159[1]
  i1158.normals = i1159[2]
  i1158.tangents = i1159[3]
  return i1158
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[5],"79":[14],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[89],"90":[89],"91":[89],"92":[89],"93":[89],"94":[89],"95":[89],"96":[89],"97":[89],"98":[89],"99":[89],"100":[89],"101":[89],"102":[14],"103":[9],"104":[105],"106":[105],"18":[17],"107":[17],"108":[17],"21":[18],"33":[31,17],"32":[17],"20":[18],"109":[17],"110":[17],"52":[17],"111":[17],"112":[17],"113":[17],"114":[17],"28":[17],"115":[17],"25":[31,17],"116":[17],"117":[17],"118":[17],"119":[17],"27":[31,17],"120":[17],"121":[48],"122":[48],"49":[48],"123":[48],"124":[14],"125":[14]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","GamePlayManager","BotNetwork","FiniteStateMachine","StateTransitionManager","StateConditionManager","BotPlayita","UnityEngine.GameObject","UnityEngine.LODGroup","BulletTrail","BotPlayitaParachute","UICrosshairItem","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","UnityEngine.UI.Outline","UnityEngine.UI.HorizontalLayoutGroup","BotParachute","ParachuteController","BotController","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","BotManager","AudioManager","ConfigManager","SpawnBotTest","PathManager","ObjectPool","BotManagerTest","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "29.0";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "19987";

Deserializers.projectId = "19d6020580d862e46a5b6b7a32992276";

Deserializers.packagesInfo = "com.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1460";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3103";

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

Deserializers.buildID = "4633fd89-2dbd-4689-bd01-7e343e0d3022";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

