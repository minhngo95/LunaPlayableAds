var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.JointSpring' )
  var i643 = data
  i642.spring = i643[0]
  i642.damper = i643[1]
  i642.targetPosition = i643[2]
  return i642
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.JointMotor' )
  var i645 = data
  i644.m_TargetVelocity = i645[0]
  i644.m_Force = i645[1]
  i644.m_FreeSpin = i645[2]
  return i644
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointLimits' )
  var i647 = data
  i646.m_Min = i647[0]
  i646.m_Max = i647[1]
  i646.m_Bounciness = i647[2]
  i646.m_BounceMinVelocity = i647[3]
  i646.m_ContactDistance = i647[4]
  i646.minBounce = i647[5]
  i646.maxBounce = i647[6]
  return i646
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointDrive' )
  var i649 = data
  i648.m_PositionSpring = i649[0]
  i648.m_PositionDamper = i649[1]
  i648.m_MaximumForce = i649[2]
  return i648
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i651 = data
  i650.m_Spring = i651[0]
  i650.m_Damper = i651[1]
  return i650
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i653 = data
  i652.m_Limit = i653[0]
  i652.m_Bounciness = i653[1]
  i652.m_ContactDistance = i653[2]
  return i652
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i655 = data
  i654.m_ExtremumSlip = i655[0]
  i654.m_ExtremumValue = i655[1]
  i654.m_AsymptoteSlip = i655[2]
  i654.m_AsymptoteValue = i655[3]
  i654.m_Stiffness = i655[4]
  return i654
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i657 = data
  i656.m_LowerAngle = i657[0]
  i656.m_UpperAngle = i657[1]
  return i656
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i659 = data
  i658.m_MotorSpeed = i659[0]
  i658.m_MaximumMotorTorque = i659[1]
  return i658
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i661 = data
  i660.m_DampingRatio = i661[0]
  i660.m_Frequency = i661[1]
  i660.m_Angle = i661[2]
  return i660
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i663 = data
  i662.m_LowerTranslation = i663[0]
  i662.m_UpperTranslation = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i664 = root || new pc.UnityMaterial()
  var i665 = data
  i664.name = i665[0]
  request.r(i665[1], i665[2], 0, i664, 'shader')
  i664.renderQueue = i665[3]
  i664.enableInstancing = !!i665[4]
  var i667 = i665[5]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i667[i + 0]) );
  }
  i664.floatParameters = i666
  var i669 = i665[6]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i669[i + 0]) );
  }
  i664.colorParameters = i668
  var i671 = i665[7]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i671[i + 0]) );
  }
  i664.vectorParameters = i670
  var i673 = i665[8]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i673[i + 0]) );
  }
  i664.textureParameters = i672
  var i675 = i665[9]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i675[i + 0]) );
  }
  i664.materialFlags = i674
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i679 = data
  i678.name = i679[0]
  i678.value = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = new pc.Color(i683[1], i683[2], i683[3], i683[4])
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Vec4( i687[1], i687[2], i687[3], i687[4] )
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i691 = data
  i690.name = i691[0]
  request.r(i691[1], i691[2], 0, i690, 'value')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i695 = data
  i694.name = i695[0]
  i694.enabled = !!i695[1]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i697 = data
  i696.name = i697[0]
  i696.width = i697[1]
  i696.height = i697[2]
  i696.mipmapCount = i697[3]
  i696.anisoLevel = i697[4]
  i696.filterMode = i697[5]
  i696.hdr = !!i697[6]
  i696.format = i697[7]
  i696.wrapMode = i697[8]
  i696.alphaIsTransparency = !!i697[9]
  i696.alphaSource = i697[10]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i699 = data
  i698.position = new pc.Vec3( i699[0], i699[1], i699[2] )
  i698.scale = new pc.Vec3( i699[3], i699[4], i699[5] )
  i698.rotation = new pc.Quat(i699[6], i699[7], i699[8], i699[9])
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'sharedMesh')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i703 = data
  request.r(i703[0], i703[1], 0, i702, 'additionalVertexStreams')
  i702.enabled = !!i703[2]
  request.r(i703[3], i703[4], 0, i702, 'sharedMaterial')
  var i705 = i703[5]
  var i704 = []
  for(var i = 0; i < i705.length; i += 2) {
  request.r(i705[i + 0], i705[i + 1], 2, i704, '')
  }
  i702.sharedMaterials = i704
  i702.receiveShadows = !!i703[6]
  i702.shadowCastingMode = i703[7]
  i702.sortingLayerID = i703[8]
  i702.sortingOrder = i703[9]
  i702.lightmapIndex = i703[10]
  i702.lightmapSceneIndex = i703[11]
  i702.lightmapScaleOffset = new pc.Vec4( i703[12], i703[13], i703[14], i703[15] )
  i702.lightProbeUsage = i703[16]
  i702.reflectionProbeUsage = i703[17]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i709 = data
  i708.name = i709[0]
  i708.tagId = i709[1]
  i708.enabled = !!i709[2]
  i708.isStatic = !!i709[3]
  i708.layer = i709[4]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i711 = data
  i710.name = i711[0]
  i710.halfPrecision = !!i711[1]
  i710.vertexCount = i711[2]
  i710.aabb = i711[3]
  var i713 = i711[4]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( !!i713[i + 0] );
  }
  i710.streams = i712
  i710.vertices = i711[5]
  var i715 = i711[6]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i715[i + 0]) );
  }
  i710.subMeshes = i714
  var i717 = i711[7]
  var i716 = []
  for(var i = 0; i < i717.length; i += 16) {
    i716.push( new pc.Mat4().setData(i717[i + 0], i717[i + 1], i717[i + 2], i717[i + 3],  i717[i + 4], i717[i + 5], i717[i + 6], i717[i + 7],  i717[i + 8], i717[i + 9], i717[i + 10], i717[i + 11],  i717[i + 12], i717[i + 13], i717[i + 14], i717[i + 15]) );
  }
  i710.bindposes = i716
  var i719 = i711[8]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i719[i + 0]) );
  }
  i710.blendShapes = i718
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i725 = data
  i724.triangles = i725[0]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i731 = data
  i730.name = i731[0]
  var i733 = i731[1]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i733[i + 0]) );
  }
  i730.frames = i732
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'animatorController')
  request.r(i735[2], i735[3], 0, i734, 'avatar')
  i734.updateMode = i735[4]
  i734.hasTransformHierarchy = !!i735[5]
  i734.applyRootMotion = !!i735[6]
  var i737 = i735[7]
  var i736 = []
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 2, i736, '')
  }
  i734.humanBones = i736
  i734.enabled = !!i735[8]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i741 = data
  i740.enabled = !!i741[0]
  request.r(i741[1], i741[2], 0, i740, 'sharedMaterial')
  var i743 = i741[3]
  var i742 = []
  for(var i = 0; i < i743.length; i += 2) {
  request.r(i743[i + 0], i743[i + 1], 2, i742, '')
  }
  i740.sharedMaterials = i742
  i740.receiveShadows = !!i741[4]
  i740.shadowCastingMode = i741[5]
  i740.sortingLayerID = i741[6]
  i740.sortingOrder = i741[7]
  i740.lightmapIndex = i741[8]
  i740.lightmapSceneIndex = i741[9]
  i740.lightmapScaleOffset = new pc.Vec4( i741[10], i741[11], i741[12], i741[13] )
  i740.lightProbeUsage = i741[14]
  i740.reflectionProbeUsage = i741[15]
  request.r(i741[16], i741[17], 0, i740, 'sharedMesh')
  var i745 = i741[18]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i740.bones = i744
  i740.updateWhenOffscreen = !!i741[19]
  i740.localBounds = i741[20]
  request.r(i741[21], i741[22], 0, i740, 'rootBone')
  var i747 = i741[23]
  var i746 = []
  for(var i = 0; i < i747.length; i += 1) {
    i746.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i747[i + 0]) );
  }
  i740.blendShapesWeights = i746
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i751 = data
  i750.weight = i751[0]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i753 = data
  i752.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i753[0], i752.main)
  i752.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i753[1], i752.colorBySpeed)
  i752.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i753[2], i752.colorOverLifetime)
  i752.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i753[3], i752.emission)
  i752.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i753[4], i752.rotationBySpeed)
  i752.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i753[5], i752.rotationOverLifetime)
  i752.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i753[6], i752.shape)
  i752.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i753[7], i752.sizeBySpeed)
  i752.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i753[8], i752.sizeOverLifetime)
  i752.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i753[9], i752.textureSheetAnimation)
  i752.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i753[10], i752.velocityOverLifetime)
  i752.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i753[11], i752.noise)
  i752.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i753[12], i752.inheritVelocity)
  i752.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i753[13], i752.forceOverLifetime)
  i752.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i753[14], i752.limitVelocityOverLifetime)
  i752.useAutoRandomSeed = !!i753[15]
  i752.randomSeed = i753[16]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemMain()
  var i755 = data
  i754.duration = i755[0]
  i754.loop = !!i755[1]
  i754.prewarm = !!i755[2]
  i754.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.startDelay)
  i754.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[4], i754.startLifetime)
  i754.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[5], i754.startSpeed)
  i754.startSize3D = !!i755[6]
  i754.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[7], i754.startSizeX)
  i754.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[8], i754.startSizeY)
  i754.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[9], i754.startSizeZ)
  i754.startRotation3D = !!i755[10]
  i754.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[11], i754.startRotationX)
  i754.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[12], i754.startRotationY)
  i754.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[13], i754.startRotationZ)
  i754.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i755[14], i754.startColor)
  i754.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[15], i754.gravityModifier)
  i754.simulationSpace = i755[16]
  request.r(i755[17], i755[18], 0, i754, 'customSimulationSpace')
  i754.simulationSpeed = i755[19]
  i754.useUnscaledTime = !!i755[20]
  i754.scalingMode = i755[21]
  i754.playOnAwake = !!i755[22]
  i754.maxParticles = i755[23]
  i754.emitterVelocityMode = i755[24]
  i754.stopAction = i755[25]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i756 = root || new pc.MinMaxCurve()
  var i757 = data
  i756.mode = i757[0]
  i756.curveMin = new pc.AnimationCurve( { keys_flow: i757[1] } )
  i756.curveMax = new pc.AnimationCurve( { keys_flow: i757[2] } )
  i756.curveMultiplier = i757[3]
  i756.constantMin = i757[4]
  i756.constantMax = i757[5]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxGradient()
  var i759 = data
  i758.mode = i759[0]
  i758.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i759[1], i758.gradientMin)
  i758.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i759[2], i758.gradientMax)
  i758.colorMin = new pc.Color(i759[3], i759[4], i759[5], i759[6])
  i758.colorMax = new pc.Color(i759[7], i759[8], i759[9], i759[10])
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i761 = data
  i760.mode = i761[0]
  var i763 = i761[1]
  var i762 = []
  for(var i = 0; i < i763.length; i += 1) {
    i762.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i763[i + 0]) );
  }
  i760.colorKeys = i762
  var i765 = i761[2]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i765[i + 0]) );
  }
  i760.alphaKeys = i764
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i766 = root || new pc.ParticleSystemColorBySpeed()
  var i767 = data
  i766.enabled = !!i767[0]
  i766.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i767[1], i766.color)
  i766.range = new pc.Vec2( i767[2], i767[3] )
  return i766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i771 = data
  i770.color = new pc.Color(i771[0], i771[1], i771[2], i771[3])
  i770.time = i771[4]
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i775 = data
  i774.alpha = i775[0]
  i774.time = i775[1]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i776 = root || new pc.ParticleSystemColorOverLifetime()
  var i777 = data
  i776.enabled = !!i777[0]
  i776.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i777[1], i776.color)
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemEmitter()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[1], i778.rateOverTime)
  i778.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i779[2], i778.rateOverDistance)
  var i781 = i779[3]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i781[i + 0]) );
  }
  i778.bursts = i780
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i784 = root || new pc.ParticleSystemBurst()
  var i785 = data
  i784.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i785[0], i784.count)
  i784.cycleCount = i785[1]
  i784.minCount = i785[2]
  i784.maxCount = i785[3]
  i784.repeatInterval = i785[4]
  i784.time = i785[5]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemRotationBySpeed()
  var i787 = data
  i786.enabled = !!i787[0]
  i786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[1], i786.x)
  i786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[2], i786.y)
  i786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[3], i786.z)
  i786.separateAxes = !!i787[4]
  i786.range = new pc.Vec2( i787[5], i787[6] )
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationOverLifetime()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemShape()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.shapeType = i791[1]
  i790.randomDirectionAmount = i791[2]
  i790.sphericalDirectionAmount = i791[3]
  i790.randomPositionAmount = i791[4]
  i790.alignToDirection = !!i791[5]
  i790.radius = i791[6]
  i790.radiusMode = i791[7]
  i790.radiusSpread = i791[8]
  i790.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[9], i790.radiusSpeed)
  i790.radiusThickness = i791[10]
  i790.angle = i791[11]
  i790.length = i791[12]
  i790.boxThickness = new pc.Vec3( i791[13], i791[14], i791[15] )
  i790.meshShapeType = i791[16]
  request.r(i791[17], i791[18], 0, i790, 'mesh')
  request.r(i791[19], i791[20], 0, i790, 'meshRenderer')
  request.r(i791[21], i791[22], 0, i790, 'skinnedMeshRenderer')
  i790.useMeshMaterialIndex = !!i791[23]
  i790.meshMaterialIndex = i791[24]
  i790.useMeshColors = !!i791[25]
  i790.normalOffset = i791[26]
  i790.arc = i791[27]
  i790.arcMode = i791[28]
  i790.arcSpread = i791[29]
  i790.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[30], i790.arcSpeed)
  i790.donutRadius = i791[31]
  i790.position = new pc.Vec3( i791[32], i791[33], i791[34] )
  i790.rotation = new pc.Vec3( i791[35], i791[36], i791[37] )
  i790.scale = new pc.Vec3( i791[38], i791[39], i791[40] )
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemSizeBySpeed()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[1], i792.x)
  i792.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[2], i792.y)
  i792.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[3], i792.z)
  i792.separateAxes = !!i793[4]
  i792.range = new pc.Vec2( i793[5], i793[6] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeOverLifetime()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.mode = i797[1]
  i796.animation = i797[2]
  i796.numTilesX = i797[3]
  i796.numTilesY = i797[4]
  i796.useRandomRow = !!i797[5]
  i796.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[6], i796.frameOverTime)
  i796.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[7], i796.startFrame)
  i796.cycleCount = i797[8]
  i796.rowIndex = i797[9]
  i796.flipU = i797[10]
  i796.flipV = i797[11]
  i796.spriteCount = i797[12]
  var i799 = i797[13]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i796.sprites = i798
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i802 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i803 = data
  i802.enabled = !!i803[0]
  i802.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[1], i802.x)
  i802.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[2], i802.y)
  i802.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[3], i802.z)
  i802.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[4], i802.radial)
  i802.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[5], i802.speedModifier)
  i802.space = i803[6]
  i802.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[7], i802.orbitalX)
  i802.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[8], i802.orbitalY)
  i802.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[9], i802.orbitalZ)
  i802.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[10], i802.orbitalOffsetX)
  i802.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[11], i802.orbitalOffsetY)
  i802.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i803[12], i802.orbitalOffsetZ)
  return i802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemNoise()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.separateAxes = !!i805[1]
  i804.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.strengthX)
  i804.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.strengthY)
  i804.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.strengthZ)
  i804.frequency = i805[5]
  i804.damping = !!i805[6]
  i804.octaveCount = i805[7]
  i804.octaveMultiplier = i805[8]
  i804.octaveScale = i805[9]
  i804.quality = i805[10]
  i804.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.scrollSpeed)
  i804.scrollSpeedMultiplier = i805[12]
  i804.remapEnabled = !!i805[13]
  i804.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[14], i804.remapX)
  i804.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[15], i804.remapY)
  i804.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[16], i804.remapZ)
  i804.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[17], i804.positionAmount)
  i804.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[18], i804.rotationAmount)
  i804.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[19], i804.sizeAmount)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemInheritVelocity()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.mode = i807[1]
  i806.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.curve)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemForceOverLifetime()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[1], i808.x)
  i808.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.y)
  i808.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[3], i808.z)
  i808.space = i809[4]
  i808.randomized = !!i809[5]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.limit)
  i810.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.limitX)
  i810.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.limitY)
  i810.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[4], i810.limitZ)
  i810.dampen = i811[5]
  i810.separateAxes = !!i811[6]
  i810.space = i811[7]
  i810.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[8], i810.drag)
  i810.multiplyDragByParticleSize = !!i811[9]
  i810.multiplyDragByParticleVelocity = !!i811[10]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i813 = data
  i812.enabled = !!i813[0]
  request.r(i813[1], i813[2], 0, i812, 'sharedMaterial')
  var i815 = i813[3]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i812.sharedMaterials = i814
  i812.receiveShadows = !!i813[4]
  i812.shadowCastingMode = i813[5]
  i812.sortingLayerID = i813[6]
  i812.sortingOrder = i813[7]
  i812.lightmapIndex = i813[8]
  i812.lightmapSceneIndex = i813[9]
  i812.lightmapScaleOffset = new pc.Vec4( i813[10], i813[11], i813[12], i813[13] )
  i812.lightProbeUsage = i813[14]
  i812.reflectionProbeUsage = i813[15]
  request.r(i813[16], i813[17], 0, i812, 'mesh')
  i812.meshCount = i813[18]
  i812.activeVertexStreamsCount = i813[19]
  i812.alignment = i813[20]
  i812.renderMode = i813[21]
  i812.sortMode = i813[22]
  i812.lengthScale = i813[23]
  i812.velocityScale = i813[24]
  i812.cameraVelocityScale = i813[25]
  i812.normalDirection = i813[26]
  i812.sortingFudge = i813[27]
  i812.minParticleSize = i813[28]
  i812.maxParticleSize = i813[29]
  i812.pivot = new pc.Vec3( i813[30], i813[31], i813[32] )
  request.r(i813[33], i813[34], 0, i812, 'trailMaterial')
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i817 = data
  request.r(i817[0], i817[1], 0, i816, 'clip')
  request.r(i817[2], i817[3], 0, i816, 'outputAudioMixerGroup')
  i816.playOnAwake = !!i817[4]
  i816.loop = !!i817[5]
  i816.time = i817[6]
  i816.volume = i817[7]
  i816.pitch = i817[8]
  i816.enabled = !!i817[9]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i819 = data
  i818.enabled = !!i819[0]
  i818.isTrigger = !!i819[1]
  request.r(i819[2], i819[3], 0, i818, 'material')
  request.r(i819[4], i819[5], 0, i818, 'sharedMesh')
  i818.convex = !!i819[6]
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i821 = data
  i820.enabled = !!i821[0]
  i820.aspect = i821[1]
  i820.orthographic = !!i821[2]
  i820.orthographicSize = i821[3]
  i820.backgroundColor = new pc.Color(i821[4], i821[5], i821[6], i821[7])
  i820.nearClipPlane = i821[8]
  i820.farClipPlane = i821[9]
  i820.fieldOfView = i821[10]
  i820.depth = i821[11]
  i820.clearFlags = i821[12]
  i820.cullingMask = i821[13]
  i820.rect = i821[14]
  request.r(i821[15], i821[16], 0, i820, 'targetTexture')
  i820.usePhysicalProperties = !!i821[17]
  i820.focalLength = i821[18]
  i820.sensorSize = new pc.Vec2( i821[19], i821[20] )
  i820.lensShift = new pc.Vec2( i821[21], i821[22] )
  i820.gateFit = i821[23]
  return i820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i823 = data
  i822.center = new pc.Vec3( i823[0], i823[1], i823[2] )
  i822.size = new pc.Vec3( i823[3], i823[4], i823[5] )
  i822.enabled = !!i823[6]
  i822.isTrigger = !!i823[7]
  request.r(i823[8], i823[9], 0, i822, 'material')
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i825 = data
  i824.pivot = new pc.Vec2( i825[0], i825[1] )
  i824.anchorMin = new pc.Vec2( i825[2], i825[3] )
  i824.anchorMax = new pc.Vec2( i825[4], i825[5] )
  i824.sizeDelta = new pc.Vec2( i825[6], i825[7] )
  i824.anchoredPosition3D = new pc.Vec3( i825[8], i825[9], i825[10] )
  i824.rotation = new pc.Quat(i825[11], i825[12], i825[13], i825[14])
  i824.scale = new pc.Vec3( i825[15], i825[16], i825[17] )
  return i824
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i826 = root || request.c( 'UICrosshairItem' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'CrosshairRectTransform')
  i826._distanceMax = i827[2]
  i826._distanceMin = i827[3]
  i826._speedShrink = i827[4]
  i826._currentSpeed = i827[5]
  i826._rateOnMove = i827[6]
  i826._rateOnAttack = i827[7]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i829 = data
  i828.cullTransparentMesh = !!i829[0]
  return i828
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i830 = root || request.c( 'UnityEngine.UI.Image' )
  var i831 = data
  request.r(i831[0], i831[1], 0, i830, 'm_Sprite')
  i830.m_Type = i831[2]
  i830.m_PreserveAspect = !!i831[3]
  i830.m_FillCenter = !!i831[4]
  i830.m_FillMethod = i831[5]
  i830.m_FillAmount = i831[6]
  i830.m_FillClockwise = !!i831[7]
  i830.m_FillOrigin = i831[8]
  i830.m_UseSpriteMesh = !!i831[9]
  i830.m_PixelsPerUnitMultiplier = i831[10]
  request.r(i831[11], i831[12], 0, i830, 'm_Material')
  i830.m_Maskable = !!i831[13]
  i830.m_Color = new pc.Color(i831[14], i831[15], i831[16], i831[17])
  i830.m_RaycastTarget = !!i831[18]
  i830.m_RaycastPadding = new pc.Vec4( i831[19], i831[20], i831[21], i831[22] )
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

Deserializers["Effect"] = function (request, data, root) {
  var i834 = root || request.c( 'Effect' )
  var i835 = data
  var i837 = i835[0]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.particles = i836
  i834._lifeTime = i835[1]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i841 = data
  i840.name = i841[0]
  i840.atlasId = i841[1]
  i840.mipmapCount = i841[2]
  i840.hdr = !!i841[3]
  i840.size = i841[4]
  i840.anisoLevel = i841[5]
  i840.filterMode = i841[6]
  i840.wrapMode = i841[7]
  var i843 = i841[8]
  var i842 = []
  for(var i = 0; i < i843.length; i += 4) {
    i842.push( UnityEngine.Rect.MinMaxRect(i843[i + 0], i843[i + 1], i843[i + 2], i843[i + 3]) );
  }
  i840.rects = i842
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i847 = data
  i846.name = i847[0]
  i846.index = i847[1]
  i846.startup = !!i847[2]
  return i846
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i848 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i849 = data
  request.r(i849[0], i849[1], 0, i848, 'm_FirstSelected')
  i848.m_sendNavigationEvents = !!i849[2]
  i848.m_DragThreshold = i849[3]
  return i848
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i851 = data
  i850.m_HorizontalAxis = i851[0]
  i850.m_VerticalAxis = i851[1]
  i850.m_SubmitButton = i851[2]
  i850.m_CancelButton = i851[3]
  i850.m_InputActionsPerSecond = i851[4]
  i850.m_RepeatDelay = i851[5]
  i850.m_ForceModuleActive = !!i851[6]
  i850.m_SendPointerHoverToParent = !!i851[7]
  return i850
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i852 = root || request.c( 'ObjectPool' )
  var i853 = data
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.planeDistance = i855[1]
  i854.referencePixelsPerUnit = i855[2]
  i854.isFallbackOverlay = !!i855[3]
  i854.renderMode = i855[4]
  i854.renderOrder = i855[5]
  i854.sortingLayerName = i855[6]
  i854.sortingOrder = i855[7]
  i854.scaleFactor = i855[8]
  request.r(i855[9], i855[10], 0, i854, 'worldCamera')
  i854.overrideSorting = !!i855[11]
  i854.pixelPerfect = !!i855[12]
  i854.targetDisplay = i855[13]
  i854.overridePixelPerfect = !!i855[14]
  return i854
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i857 = data
  i856.m_UiScaleMode = i857[0]
  i856.m_ReferencePixelsPerUnit = i857[1]
  i856.m_ScaleFactor = i857[2]
  i856.m_ReferenceResolution = new pc.Vec2( i857[3], i857[4] )
  i856.m_ScreenMatchMode = i857[5]
  i856.m_MatchWidthOrHeight = i857[6]
  i856.m_PhysicalUnit = i857[7]
  i856.m_FallbackScreenDPI = i857[8]
  i856.m_DefaultSpriteDPI = i857[9]
  i856.m_DynamicPixelsPerUnit = i857[10]
  i856.m_PresetInfoIsWorld = !!i857[11]
  return i856
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i858 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i859 = data
  i858.m_IgnoreReversedGraphics = !!i859[0]
  i858.m_BlockingObjects = i859[1]
  i858.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i859[2] )
  return i858
}

Deserializers["UIManager"] = function (request, data, root) {
  var i860 = root || request.c( 'UIManager' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'StepText')
  return i860
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i862 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i863 = data
  i862.m_hasFontAssetChanged = !!i863[0]
  request.r(i863[1], i863[2], 0, i862, 'm_baseMaterial')
  i862.m_maskOffset = new pc.Vec4( i863[3], i863[4], i863[5], i863[6] )
  i862.m_text = i863[7]
  i862.m_isRightToLeft = !!i863[8]
  request.r(i863[9], i863[10], 0, i862, 'm_fontAsset')
  request.r(i863[11], i863[12], 0, i862, 'm_sharedMaterial')
  var i865 = i863[13]
  var i864 = []
  for(var i = 0; i < i865.length; i += 2) {
  request.r(i865[i + 0], i865[i + 1], 2, i864, '')
  }
  i862.m_fontSharedMaterials = i864
  request.r(i863[14], i863[15], 0, i862, 'm_fontMaterial')
  var i867 = i863[16]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i862.m_fontMaterials = i866
  i862.m_fontColor32 = UnityEngine.Color32.ConstructColor(i863[17], i863[18], i863[19], i863[20])
  i862.m_fontColor = new pc.Color(i863[21], i863[22], i863[23], i863[24])
  i862.m_enableVertexGradient = !!i863[25]
  i862.m_colorMode = i863[26]
  i862.m_fontColorGradient = request.d('TMPro.VertexGradient', i863[27], i862.m_fontColorGradient)
  request.r(i863[28], i863[29], 0, i862, 'm_fontColorGradientPreset')
  request.r(i863[30], i863[31], 0, i862, 'm_spriteAsset')
  i862.m_tintAllSprites = !!i863[32]
  request.r(i863[33], i863[34], 0, i862, 'm_StyleSheet')
  i862.m_TextStyleHashCode = i863[35]
  i862.m_overrideHtmlColors = !!i863[36]
  i862.m_faceColor = UnityEngine.Color32.ConstructColor(i863[37], i863[38], i863[39], i863[40])
  i862.m_fontSize = i863[41]
  i862.m_fontSizeBase = i863[42]
  i862.m_fontWeight = i863[43]
  i862.m_enableAutoSizing = !!i863[44]
  i862.m_fontSizeMin = i863[45]
  i862.m_fontSizeMax = i863[46]
  i862.m_fontStyle = i863[47]
  i862.m_HorizontalAlignment = i863[48]
  i862.m_VerticalAlignment = i863[49]
  i862.m_textAlignment = i863[50]
  i862.m_characterSpacing = i863[51]
  i862.m_wordSpacing = i863[52]
  i862.m_lineSpacing = i863[53]
  i862.m_lineSpacingMax = i863[54]
  i862.m_paragraphSpacing = i863[55]
  i862.m_charWidthMaxAdj = i863[56]
  i862.m_enableWordWrapping = !!i863[57]
  i862.m_wordWrappingRatios = i863[58]
  i862.m_overflowMode = i863[59]
  request.r(i863[60], i863[61], 0, i862, 'm_linkedTextComponent')
  request.r(i863[62], i863[63], 0, i862, 'parentLinkedComponent')
  i862.m_enableKerning = !!i863[64]
  i862.m_enableExtraPadding = !!i863[65]
  i862.checkPaddingRequired = !!i863[66]
  i862.m_isRichText = !!i863[67]
  i862.m_parseCtrlCharacters = !!i863[68]
  i862.m_isOrthographic = !!i863[69]
  i862.m_isCullingEnabled = !!i863[70]
  i862.m_horizontalMapping = i863[71]
  i862.m_verticalMapping = i863[72]
  i862.m_uvLineOffset = i863[73]
  i862.m_geometrySortingOrder = i863[74]
  i862.m_IsTextObjectScaleStatic = !!i863[75]
  i862.m_VertexBufferAutoSizeReduction = !!i863[76]
  i862.m_useMaxVisibleDescender = !!i863[77]
  i862.m_pageToDisplay = i863[78]
  i862.m_margin = new pc.Vec4( i863[79], i863[80], i863[81], i863[82] )
  i862.m_isUsingLegacyAnimationComponent = !!i863[83]
  i862.m_isVolumetricText = !!i863[84]
  request.r(i863[85], i863[86], 0, i862, 'm_Material')
  i862.m_Maskable = !!i863[87]
  i862.m_Color = new pc.Color(i863[88], i863[89], i863[90], i863[91])
  i862.m_RaycastTarget = !!i863[92]
  i862.m_RaycastPadding = new pc.Vec4( i863[93], i863[94], i863[95], i863[96] )
  return i862
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i868 = root || request.c( 'TMPro.VertexGradient' )
  var i869 = data
  i868.topLeft = new pc.Color(i869[0], i869[1], i869[2], i869[3])
  i868.topRight = new pc.Color(i869[4], i869[5], i869[6], i869[7])
  i868.bottomLeft = new pc.Color(i869[8], i869[9], i869[10], i869[11])
  i868.bottomRight = new pc.Color(i869[12], i869[13], i869[14], i869[15])
  return i868
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i870 = root || request.c( 'BotParachute' )
  var i871 = data
  request.r(i871[0], i871[1], 0, i870, '_animator')
  request.r(i871[2], i871[3], 0, i870, '_muzzle')
  request.r(i871[4], i871[5], 0, i870, 'bullet')
  i870.target = new pc.Vec3( i871[6], i871[7], i871[8] )
  i870.moveIndex = i871[9]
  i870.isMoveDone = !!i871[10]
  i870.isDie = !!i871[11]
  i870.isMove = !!i871[12]
  i870.parachuteDone = !!i871[13]
  i870.isTakeDame = !!i871[14]
  i870.maxHealth = i871[15]
  request.r(i871[16], i871[17], 0, i870, 'healthBarRenderer')
  request.r(i871[18], i871[19], 0, i870, '_audioSource')
  request.r(i871[20], i871[21], 0, i870, '_callTeamAudioSource')
  request.r(i871[22], i871[23], 0, i870, '_hitAudioSource')
  return i870
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i872 = root || request.c( 'ParachuteController' )
  var i873 = data
  i872.gravity = i873[0]
  i872.dragForce = i873[1]
  i872.objectMass = i873[2]
  request.r(i873[3], i873[4], 0, i872, '_botController')
  i872.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i873[5] )
  request.r(i873[6], i873[7], 0, i872, 'ParachuteScale')
  i872.scaleAmount = i873[8]
  i872.velocity = new pc.Vec3( i873[9], i873[10], i873[11] )
  i872._distanceOpenParachute = i873[12]
  i872._distanceCloseParachute = i873[13]
  return i872
}

Deserializers["BotController"] = function (request, data, root) {
  var i874 = root || request.c( 'BotController' )
  var i875 = data
  request.r(i875[0], i875[1], 0, i874, '_animator')
  request.r(i875[2], i875[3], 0, i874, '_muzzle')
  request.r(i875[4], i875[5], 0, i874, 'bullet')
  i874.target = new pc.Vec3( i875[6], i875[7], i875[8] )
  i874.moveIndex = i875[9]
  i874.isMoveDone = !!i875[10]
  i874.isDie = !!i875[11]
  i874.isTakeDame = !!i875[12]
  i874.maxHealth = i875[13]
  request.r(i875[14], i875[15], 0, i874, 'healthBarRenderer')
  request.r(i875[16], i875[17], 0, i874, '_audioSource')
  request.r(i875[18], i875[19], 0, i874, '_callTeamAudioSource')
  request.r(i875[20], i875[21], 0, i874, '_hitAudioSource')
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i877 = data
  i876.enabled = !!i877[0]
  i876.type = i877[1]
  i876.color = new pc.Color(i877[2], i877[3], i877[4], i877[5])
  i876.cullingMask = i877[6]
  i876.intensity = i877[7]
  i876.range = i877[8]
  i876.spotAngle = i877[9]
  i876.shadows = i877[10]
  i876.shadowNormalBias = i877[11]
  i876.shadowBias = i877[12]
  i876.shadowStrength = i877[13]
  i876.shadowResolution = i877[14]
  i876.lightmapBakeType = i877[15]
  i876.renderMode = i877[16]
  request.r(i877[17], i877[18], 0, i876, 'cookie')
  i876.cookieSize = i877[19]
  return i876
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i878 = root || request.c( 'PlayerView' )
  var i879 = data
  request.r(i879[0], i879[1], 0, i878, '_mainRoot')
  request.r(i879[2], i879[3], 0, i878, '_head')
  i878._sensitivity = i879[4]
  i878._slerpFactor = i879[5]
  i878._viewHorizontalThreshold = new pc.Vec2( i879[6], i879[7] )
  i878._viewVerticalThreshold = new pc.Vec2( i879[8], i879[9] )
  i878._initRotate = new pc.Vec2( i879[10], i879[11] )
  i878._totalRotate = new pc.Vec2( i879[12], i879[13] )
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i881 = data
  i880.playAutomatically = !!i881[0]
  request.r(i881[1], i881[2], 0, i880, 'clip')
  var i883 = i881[3]
  var i882 = []
  for(var i = 0; i < i883.length; i += 2) {
  request.r(i883[i + 0], i883[i + 1], 2, i882, '')
  }
  i880.clips = i882
  i880.wrapMode = i881[4]
  i880.enabled = !!i881[5]
  return i880
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i886 = root || request.c( 'WeaponController' )
  var i887 = data
  i886.Mask = UnityEngine.LayerMask.FromIntegerValue( i887[0] )
  i886.damage = i887[1]
  request.r(i887[2], i887[3], 0, i886, '_muzzleTrans')
  request.r(i887[4], i887[5], 0, i886, '_animation')
  request.r(i887[6], i887[7], 0, i886, 'bullet')
  request.r(i887[8], i887[9], 0, i886, '_muzzleFlash')
  request.r(i887[10], i887[11], 0, i886, 'audioClip')
  request.r(i887[12], i887[13], 0, i886, 'audioSource')
  i886.SphereRadius = i887[14]
  request.r(i887[15], i887[16], 0, i886, 'Effect')
  return i886
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i888 = root || request.c( 'SpawnBot' )
  var i889 = data
  request.r(i889[0], i889[1], 0, i888, '_botPrefab')
  i888._spawnInterval = i889[2]
  i888._upper = i889[3]
  return i888
}

Deserializers["PathManager"] = function (request, data, root) {
  var i890 = root || request.c( 'PathManager' )
  var i891 = data
  var i893 = i891[0]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i893.length; i += 1) {
    i892.add(request.d('Path', i893[i + 0]));
  }
  i890._paths = i892
  var i895 = i891[1]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i895.length; i += 1) {
    i894.add(request.d('Path', i895[i + 0]));
  }
  i890._pathsParachute = i894
  return i890
}

Deserializers["Path"] = function (request, data, root) {
  var i898 = root || request.c( 'Path' )
  var i899 = data
  i898.IsUse = !!i899[0]
  var i901 = i899[1]
  var i900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i901.length; i += 2) {
  request.r(i901[i + 0], i901[i + 1], 1, i900, '')
  }
  i898.WayPoints = i900
  return i898
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i904 = root || request.c( 'ConfigManager' )
  var i905 = data
  var i907 = i905[0]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( request.d('StepData', i907[i + 0]) );
  }
  i904._stepDatas = i906
  return i904
}

Deserializers["StepData"] = function (request, data, root) {
  var i910 = root || request.c( 'StepData' )
  var i911 = data
  i910.NumberBot = i911[0]
  i910.NumberParachute = i911[1]
  return i910
}

Deserializers["StepManager"] = function (request, data, root) {
  var i912 = root || request.c( 'StepManager' )
  var i913 = data
  i912.test = i913[0]
  request.r(i913[1], i913[2], 0, i912, '_spawnBotNormal')
  request.r(i913[3], i913[4], 0, i912, '_spawnBotParachute')
  return i912
}

Deserializers["BotManager"] = function (request, data, root) {
  var i914 = root || request.c( 'BotManager' )
  var i915 = data
  return i914
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i916 = root || request.c( 'AudioManager' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 2) {
  request.r(i919[i + 0], i919[i + 1], 2, i918, '')
  }
  i916.CallTeamOnFireSounds = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 2) {
  request.r(i921[i + 0], i921[i + 1], 2, i920, '')
  }
  i916.CallTeamSounds = i920
  var i923 = i917[2]
  var i922 = []
  for(var i = 0; i < i923.length; i += 2) {
  request.r(i923[i + 0], i923[i + 1], 2, i922, '')
  }
  i916.AttackSounds = i922
  var i925 = i917[3]
  var i924 = []
  for(var i = 0; i < i925.length; i += 2) {
  request.r(i925[i + 0], i925[i + 1], 2, i924, '')
  }
  i916.MissSounds = i924
  var i927 = i917[4]
  var i926 = []
  for(var i = 0; i < i927.length; i += 2) {
  request.r(i927[i + 0], i927[i + 1], 2, i926, '')
  }
  i916.HitSounds = i926
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i931 = data
  i930.ambientIntensity = i931[0]
  i930.reflectionIntensity = i931[1]
  i930.ambientMode = i931[2]
  i930.ambientLight = new pc.Color(i931[3], i931[4], i931[5], i931[6])
  i930.ambientSkyColor = new pc.Color(i931[7], i931[8], i931[9], i931[10])
  i930.ambientGroundColor = new pc.Color(i931[11], i931[12], i931[13], i931[14])
  i930.ambientEquatorColor = new pc.Color(i931[15], i931[16], i931[17], i931[18])
  i930.fogColor = new pc.Color(i931[19], i931[20], i931[21], i931[22])
  i930.fogEndDistance = i931[23]
  i930.fogStartDistance = i931[24]
  i930.fogDensity = i931[25]
  i930.fog = !!i931[26]
  request.r(i931[27], i931[28], 0, i930, 'skybox')
  i930.fogMode = i931[29]
  var i933 = i931[30]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i933[i + 0]) );
  }
  i930.lightmaps = i932
  i930.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i931[31], i930.lightProbes)
  i930.lightmapsMode = i931[32]
  i930.mixedBakeMode = i931[33]
  i930.environmentLightingMode = i931[34]
  i930.ambientProbe = new pc.SphericalHarmonicsL2(i931[35])
  i930.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i931[36])
  i930.useReferenceAmbientProbe = !!i931[37]
  request.r(i931[38], i931[39], 0, i930, 'customReflection')
  request.r(i931[40], i931[41], 0, i930, 'defaultReflection')
  i930.defaultReflectionMode = i931[42]
  i930.defaultReflectionResolution = i931[43]
  i930.sunLightObjectId = i931[44]
  i930.pixelLightCount = i931[45]
  i930.defaultReflectionHDR = !!i931[46]
  i930.hasLightDataAsset = !!i931[47]
  i930.hasManualGenerate = !!i931[48]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i937 = data
  request.r(i937[0], i937[1], 0, i936, 'lightmapColor')
  request.r(i937[2], i937[3], 0, i936, 'lightmapDirection')
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i938 = root || new UnityEngine.LightProbes()
  var i939 = data
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i947 = data
  var i949 = i947[0]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i949[i + 0]));
  }
  i946.ShaderCompilationErrors = i948
  i946.name = i947[1]
  i946.guid = i947[2]
  var i951 = i947[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.shaderDefinedKeywords = i950
  var i953 = i947[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i953[i + 0]) );
  }
  i946.passes = i952
  var i955 = i947[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i955[i + 0]) );
  }
  i946.usePasses = i954
  var i957 = i947[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i957[i + 0]) );
  }
  i946.defaultParameterValues = i956
  request.r(i947[7], i947[8], 0, i946, 'unityFallbackShader')
  i946.readDepth = !!i947[9]
  i946.isCreatedByShaderGraph = !!i947[10]
  i946.usedBatchUniforms = i947[11]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i961 = data
  i960.shaderName = i961[0]
  i960.errorMessage = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i966 = root || new pc.UnityShaderPass()
  var i967 = data
  i966.id = i967[0]
  i966.subShaderIndex = i967[1]
  i966.name = i967[2]
  i966.passType = i967[3]
  i966.grabPassTextureName = i967[4]
  i966.usePass = !!i967[5]
  i966.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[6], i966.zTest)
  i966.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[7], i966.zWrite)
  i966.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[8], i966.culling)
  i966.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[9], i966.blending)
  i966.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[10], i966.alphaBlending)
  i966.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[11], i966.colorWriteMask)
  i966.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[12], i966.offsetUnits)
  i966.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[13], i966.offsetFactor)
  i966.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[14], i966.stencilRef)
  i966.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[15], i966.stencilReadMask)
  i966.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[16], i966.stencilWriteMask)
  i966.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[17], i966.stencilOp)
  i966.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[18], i966.stencilOpFront)
  i966.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[19], i966.stencilOpBack)
  var i969 = i967[20]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i969[i + 0]) );
  }
  i966.tags = i968
  var i971 = i967[21]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.passDefinedKeywords = i970
  var i973 = i967[22]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i973[i + 0]) );
  }
  i966.passDefinedKeywordGroups = i972
  var i975 = i967[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i975[i + 0]) );
  }
  i966.variants = i974
  var i977 = i967[24]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i966.excludedVariants = i976
  i966.hasDepthReader = !!i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i979 = data
  i978.val = i979[0]
  i978.name = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i981 = data
  i980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[0], i980.src)
  i980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[1], i980.dst)
  i980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[2], i980.op)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i983 = data
  i982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.pass)
  i982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.fail)
  i982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.zFail)
  i982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[3], i982.comp)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.hasDiscard = !!i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i997 = data
  i996.passId = i997[0]
  i996.subShaderIndex = i997[1]
  var i999 = i997[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i996.keywords = i998
  i996.vertexProgram = i997[3]
  i996.fragmentProgram = i997[4]
  i996.readDepth = !!i997[5]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'shader')
  i1002.pass = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.type = i1007[1]
  i1006.value = new pc.Vec4( i1007[2], i1007[3], i1007[4], i1007[5] )
  i1006.textureValue = i1007[6]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1009 = data
  i1008.name = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'texture')
  i1008.aabb = i1009[3]
  i1008.vertices = i1009[4]
  i1008.triangles = i1009[5]
  i1008.textureRect = UnityEngine.Rect.MinMaxRect(i1009[6], i1009[7], i1009[8], i1009[9])
  i1008.packedRect = UnityEngine.Rect.MinMaxRect(i1009[10], i1009[11], i1009[12], i1009[13])
  i1008.border = new pc.Vec4( i1009[14], i1009[15], i1009[16], i1009[17] )
  i1008.transparency = i1009[18]
  i1008.bounds = i1009[19]
  i1008.pixelsPerUnit = i1009[20]
  i1008.textureWidth = i1009[21]
  i1008.textureHeight = i1009[22]
  i1008.nativeSize = new pc.Vec2( i1009[23], i1009[24] )
  i1008.pivot = new pc.Vec2( i1009[25], i1009[26] )
  i1008.textureRectOffset = new pc.Vec2( i1009[27], i1009[28] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1011 = data
  i1010.name = i1011[0]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.wrapMode = i1013[1]
  i1012.isLooping = !!i1013[2]
  i1012.length = i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1015[i + 0]) );
  }
  i1012.curves = i1014
  var i1017 = i1013[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1017[i + 0]) );
  }
  i1012.events = i1016
  i1012.halfPrecision = !!i1013[6]
  i1012.frameRate = i1013[7]
  i1012.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1013[8], i1012.localBounds)
  i1012.hasMuscleCurves = !!i1013[9]
  var i1019 = i1013[10]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1012.clipMuscleConstant = i1018
  i1012.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1013[11], i1012.clipBindingConstant)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1023 = data
  i1022.path = i1023[0]
  i1022.componentType = i1023[1]
  i1022.property = i1023[2]
  i1022.keys = i1023[3]
  var i1025 = i1023[4]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1025[i + 0]) );
  }
  i1022.objectReferenceKeys = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1029 = data
  i1028.time = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'value')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1033 = data
  i1032.functionName = i1033[0]
  i1032.floatParameter = i1033[1]
  i1032.intParameter = i1033[2]
  i1032.stringParameter = i1033[3]
  request.r(i1033[4], i1033[5], 0, i1032, 'objectReferenceParameter')
  i1032.time = i1033[6]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1035 = data
  i1034.center = new pc.Vec3( i1035[0], i1035[1], i1035[2] )
  i1034.extends = new pc.Vec3( i1035[3], i1035[4], i1035[5] )
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = []
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.push( i1041[i + 0] );
  }
  i1038.genericBindings = i1040
  var i1043 = i1039[1]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( i1043[i + 0] );
  }
  i1038.pptrCurveMapping = i1042
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1045 = data
  i1044.name = i1045[0]
  i1044.ascent = i1045[1]
  i1044.originalLineHeight = i1045[2]
  i1044.fontSize = i1045[3]
  var i1047 = i1045[4]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1047[i + 0]) );
  }
  i1044.characterInfo = i1046
  request.r(i1045[5], i1045[6], 0, i1044, 'texture')
  i1044.originalFontSize = i1045[7]
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1051 = data
  i1050.index = i1051[0]
  i1050.advance = i1051[1]
  i1050.bearing = i1051[2]
  i1050.glyphWidth = i1051[3]
  i1050.glyphHeight = i1051[4]
  i1050.minX = i1051[5]
  i1050.maxX = i1051[6]
  i1050.minY = i1051[7]
  i1050.maxY = i1051[8]
  i1050.uvBottomLeftX = i1051[9]
  i1050.uvBottomLeftY = i1051[10]
  i1050.uvBottomRightX = i1051[11]
  i1050.uvBottomRightY = i1051[12]
  i1050.uvTopLeftX = i1051[13]
  i1050.uvTopLeftY = i1051[14]
  i1050.uvTopRightX = i1051[15]
  i1050.uvTopRightY = i1051[16]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1053 = data
  i1052.name = i1053[0]
  var i1055 = i1053[1]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1055[i + 0]) );
  }
  i1052.states = i1054
  var i1057 = i1053[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1057[i + 0]) );
  }
  i1052.layers = i1056
  var i1059 = i1053[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1059[i + 0]) );
  }
  i1052.parameters = i1058
  i1052.animationClips = i1053[4]
  i1052.HasSubStateMachines = !!i1053[5]
  i1052.avatarUnsupported = i1053[6]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1063 = data
  i1062.cycleOffset = i1063[0]
  i1062.cycleOffsetParameter = i1063[1]
  i1062.cycleOffsetParameterActive = !!i1063[2]
  i1062.mirror = !!i1063[3]
  i1062.mirrorParameter = i1063[4]
  i1062.mirrorParameterActive = !!i1063[5]
  i1062.motionId = i1063[6]
  i1062.nameHash = i1063[7]
  i1062.fullPathHash = i1063[8]
  i1062.speed = i1063[9]
  i1062.speedParameter = i1063[10]
  i1062.speedParameterActive = !!i1063[11]
  i1062.tag = i1063[12]
  i1062.name = i1063[13]
  i1062.layer = i1063[14]
  i1062.writeDefaultValues = !!i1063[15]
  var i1065 = i1063[16]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1065[i + 0]) );
  }
  i1062.transitions = i1064
  var i1067 = i1063[17]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 2) {
  request.r(i1067[i + 0], i1067[i + 1], 2, i1066, '')
  }
  i1062.behaviours = i1066
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1071 = data
  i1070.fullPath = i1071[0]
  i1070.canTransitionToSelf = !!i1071[1]
  i1070.duration = i1071[2]
  i1070.exitTime = i1071[3]
  i1070.hasExitTime = !!i1071[4]
  i1070.hasFixedDuration = !!i1071[5]
  i1070.interruptionSource = i1071[6]
  i1070.offset = i1071[7]
  i1070.orderedInterruption = !!i1071[8]
  i1070.destinationStateNameHash = i1071[9]
  i1070.destinationStateMachineId = i1071[10]
  i1070.isExit = !!i1071[11]
  i1070.mute = !!i1071[12]
  i1070.solo = !!i1071[13]
  var i1073 = i1071[14]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1073[i + 0]) );
  }
  i1070.conditions = i1072
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1077 = data
  i1076.mode = i1077[0]
  i1076.parameter = i1077[1]
  i1076.threshold = i1077[2]
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1083 = data
  i1082.blendingMode = i1083[0]
  i1082.defaultWeight = i1083[1]
  i1082.name = i1083[2]
  i1082.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1083[3], i1082.stateMachine)
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1085 = data
  i1084.id = i1085[0]
  i1084.defaultStateNameHash = i1085[1]
  var i1087 = i1085[2]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1087[i + 0]) );
  }
  i1084.entryTransitions = i1086
  var i1089 = i1085[3]
  var i1088 = []
  for(var i = 0; i < i1089.length; i += 1) {
    i1088.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1089[i + 0]) );
  }
  i1084.anyStateTransitions = i1088
  return i1084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1093 = data
  i1092.destinationStateNameHash = i1093[0]
  i1092.destinationStateMachineId = i1093[1]
  i1092.isExit = !!i1093[2]
  i1092.mute = !!i1093[3]
  i1092.solo = !!i1093[4]
  var i1095 = i1093[5]
  var i1094 = []
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1095[i + 0]) );
  }
  i1092.conditions = i1094
  return i1092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1099 = data
  i1098.defaultBool = !!i1099[0]
  i1098.defaultFloat = i1099[1]
  i1098.defaultInt = i1099[2]
  i1098.name = i1099[3]
  i1098.nameHash = i1099[4]
  i1098.type = i1099[5]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1101 = data
  i1100.name = i1101[0]
  i1100.bytes64 = i1101[1]
  i1100.data = i1101[2]
  return i1100
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1102 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1103 = data
  i1102.hashCode = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, 'material')
  i1102.materialHashCode = i1103[3]
  request.r(i1103[4], i1103[5], 0, i1102, 'atlas')
  i1102.normalStyle = i1103[6]
  i1102.normalSpacingOffset = i1103[7]
  i1102.boldStyle = i1103[8]
  i1102.boldSpacing = i1103[9]
  i1102.italicStyle = i1103[10]
  i1102.tabSize = i1103[11]
  i1102.m_Version = i1103[12]
  i1102.m_SourceFontFileGUID = i1103[13]
  request.r(i1103[14], i1103[15], 0, i1102, 'm_SourceFontFile_EditorRef')
  request.r(i1103[16], i1103[17], 0, i1102, 'm_SourceFontFile')
  i1102.m_AtlasPopulationMode = i1103[18]
  i1102.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1103[19], i1102.m_FaceInfo)
  var i1105 = i1103[20]
  var i1104 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.add(request.d('UnityEngine.TextCore.Glyph', i1105[i + 0]));
  }
  i1102.m_GlyphTable = i1104
  var i1107 = i1103[21]
  var i1106 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.add(request.d('TMPro.TMP_Character', i1107[i + 0]));
  }
  i1102.m_CharacterTable = i1106
  var i1109 = i1103[22]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 2, i1108, '')
  }
  i1102.m_AtlasTextures = i1108
  i1102.m_AtlasTextureIndex = i1103[23]
  i1102.m_IsMultiAtlasTexturesEnabled = !!i1103[24]
  i1102.m_ClearDynamicDataOnBuild = !!i1103[25]
  var i1111 = i1103[26]
  var i1110 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.add(request.d('UnityEngine.TextCore.GlyphRect', i1111[i + 0]));
  }
  i1102.m_UsedGlyphRects = i1110
  var i1113 = i1103[27]
  var i1112 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.add(request.d('UnityEngine.TextCore.GlyphRect', i1113[i + 0]));
  }
  i1102.m_FreeGlyphRects = i1112
  i1102.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1103[28], i1102.m_fontInfo)
  i1102.m_AtlasWidth = i1103[29]
  i1102.m_AtlasHeight = i1103[30]
  i1102.m_AtlasPadding = i1103[31]
  i1102.m_AtlasRenderMode = i1103[32]
  var i1115 = i1103[33]
  var i1114 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1115.length; i += 1) {
    i1114.add(request.d('TMPro.TMP_Glyph', i1115[i + 0]));
  }
  i1102.m_glyphInfoList = i1114
  i1102.m_KerningTable = request.d('TMPro.KerningTable', i1103[34], i1102.m_KerningTable)
  i1102.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1103[35], i1102.m_FontFeatureTable)
  var i1117 = i1103[36]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1117.length; i += 2) {
  request.r(i1117[i + 0], i1117[i + 1], 1, i1116, '')
  }
  i1102.fallbackFontAssets = i1116
  var i1119 = i1103[37]
  var i1118 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1119.length; i += 2) {
  request.r(i1119[i + 0], i1119[i + 1], 1, i1118, '')
  }
  i1102.m_FallbackFontAssetTable = i1118
  i1102.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1103[38], i1102.m_CreationSettings)
  var i1121 = i1103[39]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('TMPro.TMP_FontWeightPair', i1121[i + 0]) );
  }
  i1102.m_FontWeightTable = i1120
  var i1123 = i1103[40]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('TMPro.TMP_FontWeightPair', i1123[i + 0]) );
  }
  i1102.fontWeights = i1122
  return i1102
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1124 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1125 = data
  i1124.m_FaceIndex = i1125[0]
  i1124.m_FamilyName = i1125[1]
  i1124.m_StyleName = i1125[2]
  i1124.m_PointSize = i1125[3]
  i1124.m_Scale = i1125[4]
  i1124.m_UnitsPerEM = i1125[5]
  i1124.m_LineHeight = i1125[6]
  i1124.m_AscentLine = i1125[7]
  i1124.m_CapLine = i1125[8]
  i1124.m_MeanLine = i1125[9]
  i1124.m_Baseline = i1125[10]
  i1124.m_DescentLine = i1125[11]
  i1124.m_SuperscriptOffset = i1125[12]
  i1124.m_SuperscriptSize = i1125[13]
  i1124.m_SubscriptOffset = i1125[14]
  i1124.m_SubscriptSize = i1125[15]
  i1124.m_UnderlineOffset = i1125[16]
  i1124.m_UnderlineThickness = i1125[17]
  i1124.m_StrikethroughOffset = i1125[18]
  i1124.m_StrikethroughThickness = i1125[19]
  i1124.m_TabWidth = i1125[20]
  return i1124
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1128 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1129 = data
  i1128.m_Index = i1129[0]
  i1128.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1129[1], i1128.m_Metrics)
  i1128.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1129[2], i1128.m_GlyphRect)
  i1128.m_Scale = i1129[3]
  i1128.m_AtlasIndex = i1129[4]
  i1128.m_ClassDefinitionType = i1129[5]
  return i1128
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1130 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1131 = data
  i1130.m_Width = i1131[0]
  i1130.m_Height = i1131[1]
  i1130.m_HorizontalBearingX = i1131[2]
  i1130.m_HorizontalBearingY = i1131[3]
  i1130.m_HorizontalAdvance = i1131[4]
  return i1130
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1132 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1133 = data
  i1132.m_X = i1133[0]
  i1132.m_Y = i1133[1]
  i1132.m_Width = i1133[2]
  i1132.m_Height = i1133[3]
  return i1132
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1136 = root || request.c( 'TMPro.TMP_Character' )
  var i1137 = data
  i1136.m_ElementType = i1137[0]
  i1136.m_Unicode = i1137[1]
  i1136.m_GlyphIndex = i1137[2]
  i1136.m_Scale = i1137[3]
  return i1136
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1142 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1143 = data
  i1142.Name = i1143[0]
  i1142.PointSize = i1143[1]
  i1142.Scale = i1143[2]
  i1142.CharacterCount = i1143[3]
  i1142.LineHeight = i1143[4]
  i1142.Baseline = i1143[5]
  i1142.Ascender = i1143[6]
  i1142.CapHeight = i1143[7]
  i1142.Descender = i1143[8]
  i1142.CenterLine = i1143[9]
  i1142.SuperscriptOffset = i1143[10]
  i1142.SubscriptOffset = i1143[11]
  i1142.SubSize = i1143[12]
  i1142.Underline = i1143[13]
  i1142.UnderlineThickness = i1143[14]
  i1142.strikethrough = i1143[15]
  i1142.strikethroughThickness = i1143[16]
  i1142.TabWidth = i1143[17]
  i1142.Padding = i1143[18]
  i1142.AtlasWidth = i1143[19]
  i1142.AtlasHeight = i1143[20]
  return i1142
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1146 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1147 = data
  i1146.id = i1147[0]
  i1146.x = i1147[1]
  i1146.y = i1147[2]
  i1146.width = i1147[3]
  i1146.height = i1147[4]
  i1146.xOffset = i1147[5]
  i1146.yOffset = i1147[6]
  i1146.xAdvance = i1147[7]
  i1146.scale = i1147[8]
  return i1146
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1148 = root || request.c( 'TMPro.KerningTable' )
  var i1149 = data
  var i1151 = i1149[0]
  var i1150 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1151.length; i += 1) {
    i1150.add(request.d('TMPro.KerningPair', i1151[i + 0]));
  }
  i1148.kerningPairs = i1150
  return i1148
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1154 = root || request.c( 'TMPro.KerningPair' )
  var i1155 = data
  i1154.xOffset = i1155[0]
  i1154.m_FirstGlyph = i1155[1]
  i1154.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1155[2], i1154.m_FirstGlyphAdjustments)
  i1154.m_SecondGlyph = i1155[3]
  i1154.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1155[4], i1154.m_SecondGlyphAdjustments)
  i1154.m_IgnoreSpacingAdjustments = !!i1155[5]
  return i1154
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1156 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1157 = data
  var i1159 = i1157[0]
  var i1158 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1159[i + 0]));
  }
  i1156.m_GlyphPairAdjustmentRecords = i1158
  return i1156
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1162 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1163 = data
  i1162.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1163[0], i1162.m_FirstAdjustmentRecord)
  i1162.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1163[1], i1162.m_SecondAdjustmentRecord)
  i1162.m_FeatureLookupFlags = i1163[2]
  return i1162
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1164 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1165 = data
  i1164.m_GlyphIndex = i1165[0]
  i1164.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1165[1], i1164.m_GlyphValueRecord)
  return i1164
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1166 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1167 = data
  i1166.m_XPlacement = i1167[0]
  i1166.m_YPlacement = i1167[1]
  i1166.m_XAdvance = i1167[2]
  i1166.m_YAdvance = i1167[3]
  return i1166
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1170 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1171 = data
  i1170.sourceFontFileName = i1171[0]
  i1170.sourceFontFileGUID = i1171[1]
  i1170.pointSizeSamplingMode = i1171[2]
  i1170.pointSize = i1171[3]
  i1170.padding = i1171[4]
  i1170.packingMode = i1171[5]
  i1170.atlasWidth = i1171[6]
  i1170.atlasHeight = i1171[7]
  i1170.characterSetSelectionMode = i1171[8]
  i1170.characterSequence = i1171[9]
  i1170.referencedFontAssetGUID = i1171[10]
  i1170.referencedTextAssetGUID = i1171[11]
  i1170.fontStyle = i1171[12]
  i1170.fontStyleModifier = i1171[13]
  i1170.renderMode = i1171[14]
  i1170.includeFontFeatures = !!i1171[15]
  return i1170
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1174 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'regularTypeface')
  request.r(i1175[2], i1175[3], 0, i1174, 'italicTypeface')
  return i1174
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1176 = root || request.c( 'TMPro.TMP_Settings' )
  var i1177 = data
  i1176.m_enableWordWrapping = !!i1177[0]
  i1176.m_enableKerning = !!i1177[1]
  i1176.m_enableExtraPadding = !!i1177[2]
  i1176.m_enableTintAllSprites = !!i1177[3]
  i1176.m_enableParseEscapeCharacters = !!i1177[4]
  i1176.m_EnableRaycastTarget = !!i1177[5]
  i1176.m_GetFontFeaturesAtRuntime = !!i1177[6]
  i1176.m_missingGlyphCharacter = i1177[7]
  i1176.m_warningsDisabled = !!i1177[8]
  request.r(i1177[9], i1177[10], 0, i1176, 'm_defaultFontAsset')
  i1176.m_defaultFontAssetPath = i1177[11]
  i1176.m_defaultFontSize = i1177[12]
  i1176.m_defaultAutoSizeMinRatio = i1177[13]
  i1176.m_defaultAutoSizeMaxRatio = i1177[14]
  i1176.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1177[15], i1177[16] )
  i1176.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1177[17], i1177[18] )
  i1176.m_autoSizeTextContainer = !!i1177[19]
  i1176.m_IsTextObjectScaleStatic = !!i1177[20]
  var i1179 = i1177[21]
  var i1178 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1179.length; i += 2) {
  request.r(i1179[i + 0], i1179[i + 1], 1, i1178, '')
  }
  i1176.m_fallbackFontAssets = i1178
  i1176.m_matchMaterialPreset = !!i1177[22]
  request.r(i1177[23], i1177[24], 0, i1176, 'm_defaultSpriteAsset')
  i1176.m_defaultSpriteAssetPath = i1177[25]
  i1176.m_enableEmojiSupport = !!i1177[26]
  i1176.m_MissingCharacterSpriteUnicode = i1177[27]
  i1176.m_defaultColorGradientPresetsPath = i1177[28]
  request.r(i1177[29], i1177[30], 0, i1176, 'm_defaultStyleSheet')
  i1176.m_StyleSheetsResourcePath = i1177[31]
  request.r(i1177[32], i1177[33], 0, i1176, 'm_leadingCharacters')
  request.r(i1177[34], i1177[35], 0, i1176, 'm_followingCharacters')
  i1176.m_UseModernHangulLineBreakingRules = !!i1177[36]
  return i1176
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1180 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1181 = data
  i1180.hashCode = i1181[0]
  request.r(i1181[1], i1181[2], 0, i1180, 'material')
  i1180.materialHashCode = i1181[3]
  request.r(i1181[4], i1181[5], 0, i1180, 'spriteSheet')
  var i1183 = i1181[6]
  var i1182 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.add(request.d('TMPro.TMP_Sprite', i1183[i + 0]));
  }
  i1180.spriteInfoList = i1182
  var i1185 = i1181[7]
  var i1184 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1185.length; i += 2) {
  request.r(i1185[i + 0], i1185[i + 1], 1, i1184, '')
  }
  i1180.fallbackSpriteAssets = i1184
  i1180.m_Version = i1181[8]
  i1180.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1181[9], i1180.m_FaceInfo)
  var i1187 = i1181[10]
  var i1186 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.add(request.d('TMPro.TMP_SpriteCharacter', i1187[i + 0]));
  }
  i1180.m_SpriteCharacterTable = i1186
  var i1189 = i1181[11]
  var i1188 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.add(request.d('TMPro.TMP_SpriteGlyph', i1189[i + 0]));
  }
  i1180.m_SpriteGlyphTable = i1188
  return i1180
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1192 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.hashCode = i1193[1]
  i1192.unicode = i1193[2]
  i1192.pivot = new pc.Vec2( i1193[3], i1193[4] )
  request.r(i1193[5], i1193[6], 0, i1192, 'sprite')
  i1192.id = i1193[7]
  i1192.x = i1193[8]
  i1192.y = i1193[9]
  i1192.width = i1193[10]
  i1192.height = i1193[11]
  i1192.xOffset = i1193[12]
  i1192.yOffset = i1193[13]
  i1192.xAdvance = i1193[14]
  i1192.scale = i1193[15]
  return i1192
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1198 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1199 = data
  i1198.m_Name = i1199[0]
  i1198.m_HashCode = i1199[1]
  i1198.m_ElementType = i1199[2]
  i1198.m_Unicode = i1199[3]
  i1198.m_GlyphIndex = i1199[4]
  i1198.m_Scale = i1199[5]
  return i1198
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1202 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'sprite')
  i1202.m_Index = i1203[2]
  i1202.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1203[3], i1202.m_Metrics)
  i1202.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1203[4], i1202.m_GlyphRect)
  i1202.m_Scale = i1203[5]
  i1202.m_AtlasIndex = i1203[6]
  i1202.m_ClassDefinitionType = i1203[7]
  return i1202
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1204 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1205 = data
  var i1207 = i1205[0]
  var i1206 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1207.length; i += 1) {
    i1206.add(request.d('TMPro.TMP_Style', i1207[i + 0]));
  }
  i1204.m_StyleList = i1206
  return i1204
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1210 = root || request.c( 'TMPro.TMP_Style' )
  var i1211 = data
  i1210.m_Name = i1211[0]
  i1210.m_HashCode = i1211[1]
  i1210.m_OpeningDefinition = i1211[2]
  i1210.m_ClosingDefinition = i1211[3]
  i1210.m_OpeningTagArray = i1211[4]
  i1210.m_ClosingTagArray = i1211[5]
  i1210.m_OpeningTagUnicodeArray = i1211[6]
  i1210.m_ClosingTagUnicodeArray = i1211[7]
  return i1210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1213 = data
  var i1215 = i1213[0]
  var i1214 = []
  for(var i = 0; i < i1215.length; i += 1) {
    i1214.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1215[i + 0]) );
  }
  i1212.files = i1214
  i1212.componentToPrefabIds = i1213[1]
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1218 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1219 = data
  i1218.path = i1219[0]
  request.r(i1219[1], i1219[2], 0, i1218, 'unityObject')
  return i1218
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1221 = data
  var i1223 = i1221[0]
  var i1222 = []
  for(var i = 0; i < i1223.length; i += 1) {
    i1222.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1223[i + 0]) );
  }
  i1220.scriptsExecutionOrder = i1222
  var i1225 = i1221[1]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1225[i + 0]) );
  }
  i1220.sortingLayers = i1224
  var i1227 = i1221[2]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1227[i + 0]) );
  }
  i1220.cullingLayers = i1226
  i1220.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1221[3], i1220.timeSettings)
  i1220.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1221[4], i1220.physicsSettings)
  i1220.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1221[5], i1220.physics2DSettings)
  i1220.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1221[6], i1220.qualitySettings)
  i1220.enableRealtimeShadows = !!i1221[7]
  i1220.enableAutoInstancing = !!i1221[8]
  i1220.enableDynamicBatching = !!i1221[9]
  i1220.lightmapEncodingQuality = i1221[10]
  i1220.desiredColorSpace = i1221[11]
  var i1229 = i1221[12]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( i1229[i + 0] );
  }
  i1220.allTags = i1228
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1233 = data
  i1232.name = i1233[0]
  i1232.value = i1233[1]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1237 = data
  i1236.id = i1237[0]
  i1236.name = i1237[1]
  i1236.value = i1237[2]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1241 = data
  i1240.id = i1241[0]
  i1240.name = i1241[1]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1243 = data
  i1242.fixedDeltaTime = i1243[0]
  i1242.maximumDeltaTime = i1243[1]
  i1242.timeScale = i1243[2]
  i1242.maximumParticleTimestep = i1243[3]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1244 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1245 = data
  i1244.gravity = new pc.Vec3( i1245[0], i1245[1], i1245[2] )
  i1244.defaultSolverIterations = i1245[3]
  i1244.bounceThreshold = i1245[4]
  i1244.autoSyncTransforms = !!i1245[5]
  i1244.autoSimulation = !!i1245[6]
  var i1247 = i1245[7]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1247[i + 0]) );
  }
  i1244.collisionMatrix = i1246
  return i1244
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.layerId = i1251[1]
  i1250.otherLayerId = i1251[2]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1252 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1253 = data
  request.r(i1253[0], i1253[1], 0, i1252, 'material')
  i1252.gravity = new pc.Vec2( i1253[2], i1253[3] )
  i1252.positionIterations = i1253[4]
  i1252.velocityIterations = i1253[5]
  i1252.velocityThreshold = i1253[6]
  i1252.maxLinearCorrection = i1253[7]
  i1252.maxAngularCorrection = i1253[8]
  i1252.maxTranslationSpeed = i1253[9]
  i1252.maxRotationSpeed = i1253[10]
  i1252.baumgarteScale = i1253[11]
  i1252.baumgarteTOIScale = i1253[12]
  i1252.timeToSleep = i1253[13]
  i1252.linearSleepTolerance = i1253[14]
  i1252.angularSleepTolerance = i1253[15]
  i1252.defaultContactOffset = i1253[16]
  i1252.autoSimulation = !!i1253[17]
  i1252.queriesHitTriggers = !!i1253[18]
  i1252.queriesStartInColliders = !!i1253[19]
  i1252.callbacksOnDisable = !!i1253[20]
  i1252.reuseCollisionCallbacks = !!i1253[21]
  i1252.autoSyncTransforms = !!i1253[22]
  var i1255 = i1253[23]
  var i1254 = []
  for(var i = 0; i < i1255.length; i += 1) {
    i1254.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1255[i + 0]) );
  }
  i1252.collisionMatrix = i1254
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1259 = data
  i1258.enabled = !!i1259[0]
  i1258.layerId = i1259[1]
  i1258.otherLayerId = i1259[2]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1261 = data
  var i1263 = i1261[0]
  var i1262 = []
  for(var i = 0; i < i1263.length; i += 1) {
    i1262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1263[i + 0]) );
  }
  i1260.qualityLevels = i1262
  var i1265 = i1261[1]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( i1265[i + 0] );
  }
  i1260.names = i1264
  i1260.shadows = i1261[2]
  i1260.anisotropicFiltering = i1261[3]
  i1260.antiAliasing = i1261[4]
  i1260.lodBias = i1261[5]
  i1260.shadowCascades = i1261[6]
  i1260.shadowDistance = i1261[7]
  i1260.shadowmaskMode = i1261[8]
  i1260.shadowProjection = i1261[9]
  i1260.shadowResolution = i1261[10]
  i1260.softParticles = !!i1261[11]
  i1260.softVegetation = !!i1261[12]
  i1260.activeColorSpace = i1261[13]
  i1260.desiredColorSpace = i1261[14]
  i1260.masterTextureLimit = i1261[15]
  i1260.maxQueuedFrames = i1261[16]
  i1260.particleRaycastBudget = i1261[17]
  i1260.pixelLightCount = i1261[18]
  i1260.realtimeReflectionProbes = !!i1261[19]
  i1260.shadowCascade2Split = i1261[20]
  i1260.shadowCascade4Split = new pc.Vec3( i1261[21], i1261[22], i1261[23] )
  i1260.streamingMipmapsActive = !!i1261[24]
  i1260.vSyncCount = i1261[25]
  i1260.asyncUploadBufferSize = i1261[26]
  i1260.asyncUploadTimeSlice = i1261[27]
  i1260.billboardsFaceCameraPosition = !!i1261[28]
  i1260.shadowNearPlaneOffset = i1261[29]
  i1260.streamingMipmapsMemoryBudget = i1261[30]
  i1260.maximumLODLevel = i1261[31]
  i1260.streamingMipmapsAddAllCameras = !!i1261[32]
  i1260.streamingMipmapsMaxLevelReduction = i1261[33]
  i1260.streamingMipmapsRenderersPerFrame = i1261[34]
  i1260.resolutionScalingFixedDPIFactor = i1261[35]
  i1260.streamingMipmapsMaxFileIORequests = i1261[36]
  i1260.currentQualityLevel = i1261[37]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1269 = data
  i1268.name = i1269[0]
  var i1271 = i1269[1]
  var i1270 = []
  for(var i = 0; i < i1271.length; i += 1) {
    i1270.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1271[i + 0]) );
  }
  i1268.tos = i1270
  var i1273 = i1269[2]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( i1273[i + 0] );
  }
  i1268.constant = i1272
  i1268.isValid = !!i1269[3]
  i1268.isHuman = !!i1269[4]
  i1268.hasRootMotion = !!i1269[5]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1277 = data
  i1276.hash = i1277[0]
  i1276.path = i1277[1]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1281 = data
  i1280.weight = i1281[0]
  i1280.vertices = i1281[1]
  i1280.normals = i1281[2]
  i1280.tangents = i1281[3]
  return i1280
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1282 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1283 = data
  i1282.xPlacement = i1283[0]
  i1282.yPlacement = i1283[1]
  i1282.xAdvance = i1283[2]
  i1282.yAdvance = i1283[3]
  return i1282
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"59":[60],"61":[60],"62":[60],"63":[60],"64":[60],"65":[60],"66":[10],"67":[15],"68":[69],"70":[69],"71":[69],"72":[69],"73":[69],"74":[69],"75":[69],"76":[77],"78":[77],"79":[77],"80":[77],"81":[77],"82":[77],"83":[77],"84":[77],"85":[77],"86":[77],"87":[77],"88":[77],"89":[77],"90":[15],"91":[5],"92":[93],"94":[93],"30":[18],"95":[18],"96":[5,18],"34":[18,21],"97":[18],"98":[21,18],"99":[5],"100":[21,18],"101":[18],"102":[103],"104":[18],"105":[18],"32":[30],"23":[21,18],"106":[18],"31":[30],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[18],"114":[18],"115":[18],"116":[21,18],"117":[18],"118":[18],"119":[18],"120":[18],"121":[21,18],"122":[18],"123":[27],"124":[27],"28":[27],"125":[27],"126":[15],"127":[15],"128":[103],"129":[103]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","BotParachute","UnityEngine.GameObject","ParachuteController","UnityEditor.Animations.AnimatorController","BotController","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","PathManager","ConfigManager","StepManager","BotManager","AudioManager","UnityEngine.Cubemap","UnityEngine.Font","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "";

Deserializers.lunaDaysRunning = "8.0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1543";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3922";

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

Deserializers.buildID = "0004ad47-620e-4078-8b0e-9f3fb96fc9a4";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

