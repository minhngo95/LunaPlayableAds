var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.JointSpring' )
  var i525 = data
  i524.spring = i525[0]
  i524.damper = i525[1]
  i524.targetPosition = i525[2]
  return i524
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.JointMotor' )
  var i527 = data
  i526.m_TargetVelocity = i527[0]
  i526.m_Force = i527[1]
  i526.m_FreeSpin = i527[2]
  return i526
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i528 = root || request.c( 'UnityEngine.JointLimits' )
  var i529 = data
  i528.m_Min = i529[0]
  i528.m_Max = i529[1]
  i528.m_Bounciness = i529[2]
  i528.m_BounceMinVelocity = i529[3]
  i528.m_ContactDistance = i529[4]
  i528.minBounce = i529[5]
  i528.maxBounce = i529[6]
  return i528
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i530 = root || request.c( 'UnityEngine.JointDrive' )
  var i531 = data
  i530.m_PositionSpring = i531[0]
  i530.m_PositionDamper = i531[1]
  i530.m_MaximumForce = i531[2]
  return i530
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i533 = data
  i532.m_Spring = i533[0]
  i532.m_Damper = i533[1]
  return i532
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i535 = data
  i534.m_Limit = i535[0]
  i534.m_Bounciness = i535[1]
  i534.m_ContactDistance = i535[2]
  return i534
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i537 = data
  i536.m_ExtremumSlip = i537[0]
  i536.m_ExtremumValue = i537[1]
  i536.m_AsymptoteSlip = i537[2]
  i536.m_AsymptoteValue = i537[3]
  i536.m_Stiffness = i537[4]
  return i536
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i539 = data
  i538.m_LowerAngle = i539[0]
  i538.m_UpperAngle = i539[1]
  return i538
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i541 = data
  i540.m_MotorSpeed = i541[0]
  i540.m_MaximumMotorTorque = i541[1]
  return i540
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i543 = data
  i542.m_DampingRatio = i543[0]
  i542.m_Frequency = i543[1]
  i542.m_Angle = i543[2]
  return i542
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i545 = data
  i544.m_LowerTranslation = i545[0]
  i544.m_UpperTranslation = i545[1]
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i546 = root || new pc.UnityMaterial()
  var i547 = data
  i546.name = i547[0]
  request.r(i547[1], i547[2], 0, i546, 'shader')
  i546.renderQueue = i547[3]
  i546.enableInstancing = !!i547[4]
  var i549 = i547[5]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i549[i + 0]) );
  }
  i546.floatParameters = i548
  var i551 = i547[6]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i551[i + 0]) );
  }
  i546.colorParameters = i550
  var i553 = i547[7]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i553[i + 0]) );
  }
  i546.vectorParameters = i552
  var i555 = i547[8]
  var i554 = []
  for(var i = 0; i < i555.length; i += 1) {
    i554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i555[i + 0]) );
  }
  i546.textureParameters = i554
  var i557 = i547[9]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i557[i + 0]) );
  }
  i546.materialFlags = i556
  return i546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i561 = data
  i560.name = i561[0]
  i560.value = i561[1]
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i565 = data
  i564.name = i565[0]
  i564.value = new pc.Color(i565[1], i565[2], i565[3], i565[4])
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = new pc.Vec4( i569[1], i569[2], i569[3], i569[4] )
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i573 = data
  i572.name = i573[0]
  request.r(i573[1], i573[2], 0, i572, 'value')
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i577 = data
  i576.name = i577[0]
  i576.enabled = !!i577[1]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i579 = data
  i578.name = i579[0]
  i578.width = i579[1]
  i578.height = i579[2]
  i578.mipmapCount = i579[3]
  i578.anisoLevel = i579[4]
  i578.filterMode = i579[5]
  i578.hdr = !!i579[6]
  i578.format = i579[7]
  i578.wrapMode = i579[8]
  i578.alphaIsTransparency = !!i579[9]
  i578.alphaSource = i579[10]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i581 = data
  i580.position = new pc.Vec3( i581[0], i581[1], i581[2] )
  i580.scale = new pc.Vec3( i581[3], i581[4], i581[5] )
  i580.rotation = new pc.Quat(i581[6], i581[7], i581[8], i581[9])
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i583 = data
  request.r(i583[0], i583[1], 0, i582, 'animatorController')
  request.r(i583[2], i583[3], 0, i582, 'avatar')
  i582.updateMode = i583[4]
  i582.hasTransformHierarchy = !!i583[5]
  i582.applyRootMotion = !!i583[6]
  var i585 = i583[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 2) {
  request.r(i585[i + 0], i585[i + 1], 2, i584, '')
  }
  i582.humanBones = i584
  i582.enabled = !!i583[8]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i589 = data
  i588.name = i589[0]
  i588.tagId = i589[1]
  i588.enabled = !!i589[2]
  i588.isStatic = !!i589[3]
  i588.layer = i589[4]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i591 = data
  i590.enabled = !!i591[0]
  request.r(i591[1], i591[2], 0, i590, 'sharedMaterial')
  var i593 = i591[3]
  var i592 = []
  for(var i = 0; i < i593.length; i += 2) {
  request.r(i593[i + 0], i593[i + 1], 2, i592, '')
  }
  i590.sharedMaterials = i592
  i590.receiveShadows = !!i591[4]
  i590.shadowCastingMode = i591[5]
  i590.sortingLayerID = i591[6]
  i590.sortingOrder = i591[7]
  i590.lightmapIndex = i591[8]
  i590.lightmapSceneIndex = i591[9]
  i590.lightmapScaleOffset = new pc.Vec4( i591[10], i591[11], i591[12], i591[13] )
  i590.lightProbeUsage = i591[14]
  i590.reflectionProbeUsage = i591[15]
  request.r(i591[16], i591[17], 0, i590, 'sharedMesh')
  var i595 = i591[18]
  var i594 = []
  for(var i = 0; i < i595.length; i += 2) {
  request.r(i595[i + 0], i595[i + 1], 2, i594, '')
  }
  i590.bones = i594
  i590.updateWhenOffscreen = !!i591[19]
  i590.localBounds = i591[20]
  request.r(i591[21], i591[22], 0, i590, 'rootBone')
  var i597 = i591[23]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i597[i + 0]) );
  }
  i590.blendShapesWeights = i596
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i603 = data
  i602.weight = i603[0]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i605 = data
  i604.name = i605[0]
  i604.halfPrecision = !!i605[1]
  i604.vertexCount = i605[2]
  i604.aabb = i605[3]
  var i607 = i605[4]
  var i606 = []
  for(var i = 0; i < i607.length; i += 1) {
    i606.push( !!i607[i + 0] );
  }
  i604.streams = i606
  i604.vertices = i605[5]
  var i609 = i605[6]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i609[i + 0]) );
  }
  i604.subMeshes = i608
  var i611 = i605[7]
  var i610 = []
  for(var i = 0; i < i611.length; i += 16) {
    i610.push( new pc.Mat4().setData(i611[i + 0], i611[i + 1], i611[i + 2], i611[i + 3],  i611[i + 4], i611[i + 5], i611[i + 6], i611[i + 7],  i611[i + 8], i611[i + 9], i611[i + 10], i611[i + 11],  i611[i + 12], i611[i + 13], i611[i + 14], i611[i + 15]) );
  }
  i604.bindposes = i610
  var i613 = i605[8]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i613[i + 0]) );
  }
  i604.blendShapes = i612
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i619 = data
  i618.triangles = i619[0]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i625 = data
  i624.name = i625[0]
  var i627 = i625[1]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i627[i + 0]) );
  }
  i624.frames = i626
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'sharedMesh')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'additionalVertexStreams')
  i630.enabled = !!i631[2]
  request.r(i631[3], i631[4], 0, i630, 'sharedMaterial')
  var i633 = i631[5]
  var i632 = []
  for(var i = 0; i < i633.length; i += 2) {
  request.r(i633[i + 0], i633[i + 1], 2, i632, '')
  }
  i630.sharedMaterials = i632
  i630.receiveShadows = !!i631[6]
  i630.shadowCastingMode = i631[7]
  i630.sortingLayerID = i631[8]
  i630.sortingOrder = i631[9]
  i630.lightmapIndex = i631[10]
  i630.lightmapSceneIndex = i631[11]
  i630.lightmapScaleOffset = new pc.Vec4( i631[12], i631[13], i631[14], i631[15] )
  i630.lightProbeUsage = i631[16]
  i630.reflectionProbeUsage = i631[17]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i635 = data
  i634.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i635[0], i634.main)
  i634.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i635[1], i634.colorBySpeed)
  i634.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i635[2], i634.colorOverLifetime)
  i634.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i635[3], i634.emission)
  i634.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i635[4], i634.rotationBySpeed)
  i634.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i635[5], i634.rotationOverLifetime)
  i634.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i635[6], i634.shape)
  i634.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i635[7], i634.sizeBySpeed)
  i634.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i635[8], i634.sizeOverLifetime)
  i634.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i635[9], i634.textureSheetAnimation)
  i634.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i635[10], i634.velocityOverLifetime)
  i634.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i635[11], i634.noise)
  i634.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i635[12], i634.inheritVelocity)
  i634.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i635[13], i634.forceOverLifetime)
  i634.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i635[14], i634.limitVelocityOverLifetime)
  i634.useAutoRandomSeed = !!i635[15]
  i634.randomSeed = i635[16]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i636 = root || new pc.ParticleSystemMain()
  var i637 = data
  i636.duration = i637[0]
  i636.loop = !!i637[1]
  i636.prewarm = !!i637[2]
  i636.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[3], i636.startDelay)
  i636.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[4], i636.startLifetime)
  i636.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[5], i636.startSpeed)
  i636.startSize3D = !!i637[6]
  i636.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[7], i636.startSizeX)
  i636.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[8], i636.startSizeY)
  i636.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[9], i636.startSizeZ)
  i636.startRotation3D = !!i637[10]
  i636.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[11], i636.startRotationX)
  i636.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[12], i636.startRotationY)
  i636.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[13], i636.startRotationZ)
  i636.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i637[14], i636.startColor)
  i636.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i637[15], i636.gravityModifier)
  i636.simulationSpace = i637[16]
  request.r(i637[17], i637[18], 0, i636, 'customSimulationSpace')
  i636.simulationSpeed = i637[19]
  i636.useUnscaledTime = !!i637[20]
  i636.scalingMode = i637[21]
  i636.playOnAwake = !!i637[22]
  i636.maxParticles = i637[23]
  i636.emitterVelocityMode = i637[24]
  i636.stopAction = i637[25]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i638 = root || new pc.MinMaxCurve()
  var i639 = data
  i638.mode = i639[0]
  i638.curveMin = new pc.AnimationCurve( { keys_flow: i639[1] } )
  i638.curveMax = new pc.AnimationCurve( { keys_flow: i639[2] } )
  i638.curveMultiplier = i639[3]
  i638.constantMin = i639[4]
  i638.constantMax = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxGradient()
  var i641 = data
  i640.mode = i641[0]
  i640.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[1], i640.gradientMin)
  i640.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i641[2], i640.gradientMax)
  i640.colorMin = new pc.Color(i641[3], i641[4], i641[5], i641[6])
  i640.colorMax = new pc.Color(i641[7], i641[8], i641[9], i641[10])
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i643 = data
  i642.mode = i643[0]
  var i645 = i643[1]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i645[i + 0]) );
  }
  i642.colorKeys = i644
  var i647 = i643[2]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i647[i + 0]) );
  }
  i642.alphaKeys = i646
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i648 = root || new pc.ParticleSystemColorBySpeed()
  var i649 = data
  i648.enabled = !!i649[0]
  i648.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i649[1], i648.color)
  i648.range = new pc.Vec2( i649[2], i649[3] )
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i653 = data
  i652.color = new pc.Color(i653[0], i653[1], i653[2], i653[3])
  i652.time = i653[4]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i657 = data
  i656.alpha = i657[0]
  i656.time = i657[1]
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemColorOverLifetime()
  var i659 = data
  i658.enabled = !!i659[0]
  i658.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i659[1], i658.color)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemEmitter()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.rateOverTime)
  i660.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.rateOverDistance)
  var i663 = i661[3]
  var i662 = []
  for(var i = 0; i < i663.length; i += 1) {
    i662.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i663[i + 0]) );
  }
  i660.bursts = i662
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemBurst()
  var i667 = data
  i666.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[0], i666.count)
  i666.cycleCount = i667[1]
  i666.minCount = i667[2]
  i666.maxCount = i667[3]
  i666.repeatInterval = i667[4]
  i666.time = i667[5]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemRotationBySpeed()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  i668.range = new pc.Vec2( i669[5], i669[6] )
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationOverLifetime()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemShape()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.shapeType = i673[1]
  i672.randomDirectionAmount = i673[2]
  i672.sphericalDirectionAmount = i673[3]
  i672.randomPositionAmount = i673[4]
  i672.alignToDirection = !!i673[5]
  i672.radius = i673[6]
  i672.radiusMode = i673[7]
  i672.radiusSpread = i673[8]
  i672.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[9], i672.radiusSpeed)
  i672.radiusThickness = i673[10]
  i672.angle = i673[11]
  i672.length = i673[12]
  i672.boxThickness = new pc.Vec3( i673[13], i673[14], i673[15] )
  i672.meshShapeType = i673[16]
  request.r(i673[17], i673[18], 0, i672, 'mesh')
  request.r(i673[19], i673[20], 0, i672, 'meshRenderer')
  request.r(i673[21], i673[22], 0, i672, 'skinnedMeshRenderer')
  i672.useMeshMaterialIndex = !!i673[23]
  i672.meshMaterialIndex = i673[24]
  i672.useMeshColors = !!i673[25]
  i672.normalOffset = i673[26]
  i672.arc = i673[27]
  i672.arcMode = i673[28]
  i672.arcSpread = i673[29]
  i672.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[30], i672.arcSpeed)
  i672.donutRadius = i673[31]
  i672.position = new pc.Vec3( i673[32], i673[33], i673[34] )
  i672.rotation = new pc.Vec3( i673[35], i673[36], i673[37] )
  i672.scale = new pc.Vec3( i673[38], i673[39], i673[40] )
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemSizeBySpeed()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[1], i674.x)
  i674.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[2], i674.y)
  i674.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[3], i674.z)
  i674.separateAxes = !!i675[4]
  i674.range = new pc.Vec2( i675[5], i675[6] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.mode = i679[1]
  i678.animation = i679[2]
  i678.numTilesX = i679[3]
  i678.numTilesY = i679[4]
  i678.useRandomRow = !!i679[5]
  i678.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[6], i678.frameOverTime)
  i678.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[7], i678.startFrame)
  i678.cycleCount = i679[8]
  i678.rowIndex = i679[9]
  i678.flipU = i679[10]
  i678.flipV = i679[11]
  i678.spriteCount = i679[12]
  var i681 = i679[13]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i678.sprites = i680
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.x)
  i684.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.y)
  i684.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.z)
  i684.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.radial)
  i684.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[5], i684.speedModifier)
  i684.space = i685[6]
  i684.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[7], i684.orbitalX)
  i684.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.orbitalY)
  i684.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[9], i684.orbitalZ)
  i684.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[10], i684.orbitalOffsetX)
  i684.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[11], i684.orbitalOffsetY)
  i684.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[12], i684.orbitalOffsetZ)
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemNoise()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.separateAxes = !!i687[1]
  i686.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.strengthX)
  i686.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.strengthY)
  i686.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.strengthZ)
  i686.frequency = i687[5]
  i686.damping = !!i687[6]
  i686.octaveCount = i687[7]
  i686.octaveMultiplier = i687[8]
  i686.octaveScale = i687[9]
  i686.quality = i687[10]
  i686.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.scrollSpeed)
  i686.scrollSpeedMultiplier = i687[12]
  i686.remapEnabled = !!i687[13]
  i686.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[14], i686.remapX)
  i686.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[15], i686.remapY)
  i686.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[16], i686.remapZ)
  i686.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[17], i686.positionAmount)
  i686.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[18], i686.rotationAmount)
  i686.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[19], i686.sizeAmount)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemInheritVelocity()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.mode = i689[1]
  i688.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.curve)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemForceOverLifetime()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[1], i690.x)
  i690.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.y)
  i690.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[3], i690.z)
  i690.space = i691[4]
  i690.randomized = !!i691[5]
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.limit)
  i692.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.limitX)
  i692.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.limitY)
  i692.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[4], i692.limitZ)
  i692.dampen = i693[5]
  i692.separateAxes = !!i693[6]
  i692.space = i693[7]
  i692.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[8], i692.drag)
  i692.multiplyDragByParticleSize = !!i693[9]
  i692.multiplyDragByParticleVelocity = !!i693[10]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i695 = data
  i694.enabled = !!i695[0]
  request.r(i695[1], i695[2], 0, i694, 'sharedMaterial')
  var i697 = i695[3]
  var i696 = []
  for(var i = 0; i < i697.length; i += 2) {
  request.r(i697[i + 0], i697[i + 1], 2, i696, '')
  }
  i694.sharedMaterials = i696
  i694.receiveShadows = !!i695[4]
  i694.shadowCastingMode = i695[5]
  i694.sortingLayerID = i695[6]
  i694.sortingOrder = i695[7]
  i694.lightmapIndex = i695[8]
  i694.lightmapSceneIndex = i695[9]
  i694.lightmapScaleOffset = new pc.Vec4( i695[10], i695[11], i695[12], i695[13] )
  i694.lightProbeUsage = i695[14]
  i694.reflectionProbeUsage = i695[15]
  request.r(i695[16], i695[17], 0, i694, 'mesh')
  i694.meshCount = i695[18]
  i694.activeVertexStreamsCount = i695[19]
  i694.alignment = i695[20]
  i694.renderMode = i695[21]
  i694.sortMode = i695[22]
  i694.lengthScale = i695[23]
  i694.velocityScale = i695[24]
  i694.cameraVelocityScale = i695[25]
  i694.normalDirection = i695[26]
  i694.sortingFudge = i695[27]
  i694.minParticleSize = i695[28]
  i694.maxParticleSize = i695[29]
  i694.pivot = new pc.Vec3( i695[30], i695[31], i695[32] )
  request.r(i695[33], i695[34], 0, i694, 'trailMaterial')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'clip')
  request.r(i699[2], i699[3], 0, i698, 'outputAudioMixerGroup')
  i698.playOnAwake = !!i699[4]
  i698.loop = !!i699[5]
  i698.time = i699[6]
  i698.volume = i699[7]
  i698.pitch = i699[8]
  i698.enabled = !!i699[9]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i701 = data
  i700.enabled = !!i701[0]
  i700.isTrigger = !!i701[1]
  request.r(i701[2], i701[3], 0, i700, 'material')
  request.r(i701[4], i701[5], 0, i700, 'sharedMesh')
  i700.convex = !!i701[6]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i703 = data
  i702.enabled = !!i703[0]
  i702.aspect = i703[1]
  i702.orthographic = !!i703[2]
  i702.orthographicSize = i703[3]
  i702.backgroundColor = new pc.Color(i703[4], i703[5], i703[6], i703[7])
  i702.nearClipPlane = i703[8]
  i702.farClipPlane = i703[9]
  i702.fieldOfView = i703[10]
  i702.depth = i703[11]
  i702.clearFlags = i703[12]
  i702.cullingMask = i703[13]
  i702.rect = i703[14]
  request.r(i703[15], i703[16], 0, i702, 'targetTexture')
  i702.usePhysicalProperties = !!i703[17]
  i702.focalLength = i703[18]
  i702.sensorSize = new pc.Vec2( i703[19], i703[20] )
  i702.lensShift = new pc.Vec2( i703[21], i703[22] )
  i702.gateFit = i703[23]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i705 = data
  i704.center = new pc.Vec3( i705[0], i705[1], i705[2] )
  i704.size = new pc.Vec3( i705[3], i705[4], i705[5] )
  i704.enabled = !!i705[6]
  i704.isTrigger = !!i705[7]
  request.r(i705[8], i705[9], 0, i704, 'material')
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i707 = data
  i706.name = i707[0]
  i706.atlasId = i707[1]
  i706.mipmapCount = i707[2]
  i706.hdr = !!i707[3]
  i706.size = i707[4]
  i706.anisoLevel = i707[5]
  i706.filterMode = i707[6]
  i706.wrapMode = i707[7]
  var i709 = i707[8]
  var i708 = []
  for(var i = 0; i < i709.length; i += 4) {
    i708.push( UnityEngine.Rect.MinMaxRect(i709[i + 0], i709[i + 1], i709[i + 2], i709[i + 3]) );
  }
  i706.rects = i708
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i713 = data
  i712.name = i713[0]
  i712.index = i713[1]
  i712.startup = !!i713[2]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i715 = data
  i714.enabled = !!i715[0]
  i714.type = i715[1]
  i714.color = new pc.Color(i715[2], i715[3], i715[4], i715[5])
  i714.cullingMask = i715[6]
  i714.intensity = i715[7]
  i714.range = i715[8]
  i714.spotAngle = i715[9]
  i714.shadows = i715[10]
  i714.shadowNormalBias = i715[11]
  i714.shadowBias = i715[12]
  i714.shadowStrength = i715[13]
  i714.shadowResolution = i715[14]
  i714.lightmapBakeType = i715[15]
  i714.renderMode = i715[16]
  request.r(i715[17], i715[18], 0, i714, 'cookie')
  i714.cookieSize = i715[19]
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

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i733 = data
  i732.pivot = new pc.Vec2( i733[0], i733[1] )
  i732.anchorMin = new pc.Vec2( i733[2], i733[3] )
  i732.anchorMax = new pc.Vec2( i733[4], i733[5] )
  i732.sizeDelta = new pc.Vec2( i733[6], i733[7] )
  i732.anchoredPosition3D = new pc.Vec3( i733[8], i733[9], i733[10] )
  i732.rotation = new pc.Quat(i733[11], i733[12], i733[13], i733[14])
  i732.scale = new pc.Vec3( i733[15], i733[16], i733[17] )
  return i732
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i734 = root || request.c( 'UICrosshairItem' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'CrosshairRectTransform')
  i734._distanceMax = i735[2]
  i734._distanceMin = i735[3]
  i734._speedShrink = i735[4]
  i734._currentSpeed = i735[5]
  i734._rateOnMove = i735[6]
  i734._rateOnAttack = i735[7]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i737 = data
  i736.cullTransparentMesh = !!i737[0]
  return i736
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i738 = root || request.c( 'UnityEngine.UI.Image' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'm_Sprite')
  i738.m_Type = i739[2]
  i738.m_PreserveAspect = !!i739[3]
  i738.m_FillCenter = !!i739[4]
  i738.m_FillMethod = i739[5]
  i738.m_FillAmount = i739[6]
  i738.m_FillClockwise = !!i739[7]
  i738.m_FillOrigin = i739[8]
  i738.m_UseSpriteMesh = !!i739[9]
  i738.m_PixelsPerUnitMultiplier = i739[10]
  request.r(i739[11], i739[12], 0, i738, 'm_Material')
  i738.m_Maskable = !!i739[13]
  i738.m_Color = new pc.Color(i739[14], i739[15], i739[16], i739[17])
  i738.m_RaycastTarget = !!i739[18]
  i738.m_RaycastPadding = new pc.Vec4( i739[19], i739[20], i739[21], i739[22] )
  return i738
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i740 = root || request.c( 'BulletTrail' )
  var i741 = data
  i740.Speed = i741[0]
  i740.LifeTime = i741[1]
  request.r(i741[2], i741[3], 0, i740, '_trail')
  i740._trailStartScale = new pc.Vec3( i741[4], i741[5], i741[6] )
  i740._trailMaxScale = new pc.Vec3( i741[7], i741[8], i741[9] )
  i740._trailLengthAtMaxScale = i741[10]
  return i740
}

Deserializers["Effect"] = function (request, data, root) {
  var i742 = root || request.c( 'Effect' )
  var i743 = data
  var i745 = i743[0]
  var i744 = []
  for(var i = 0; i < i745.length; i += 2) {
  request.r(i745[i + 0], i745[i + 1], 2, i744, '')
  }
  i742.particles = i744
  i742._lifeTime = i743[1]
  return i742
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_FirstSelected')
  i748.m_sendNavigationEvents = !!i749[2]
  i748.m_DragThreshold = i749[3]
  return i748
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i751 = data
  i750.m_HorizontalAxis = i751[0]
  i750.m_VerticalAxis = i751[1]
  i750.m_SubmitButton = i751[2]
  i750.m_CancelButton = i751[3]
  i750.m_InputActionsPerSecond = i751[4]
  i750.m_RepeatDelay = i751[5]
  i750.m_ForceModuleActive = !!i751[6]
  i750.m_SendPointerHoverToParent = !!i751[7]
  return i750
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i752 = root || request.c( 'ObjectPool' )
  var i753 = data
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i755 = data
  i754.enabled = !!i755[0]
  i754.planeDistance = i755[1]
  i754.referencePixelsPerUnit = i755[2]
  i754.isFallbackOverlay = !!i755[3]
  i754.renderMode = i755[4]
  i754.renderOrder = i755[5]
  i754.sortingLayerName = i755[6]
  i754.sortingOrder = i755[7]
  i754.scaleFactor = i755[8]
  request.r(i755[9], i755[10], 0, i754, 'worldCamera')
  i754.overrideSorting = !!i755[11]
  i754.pixelPerfect = !!i755[12]
  i754.targetDisplay = i755[13]
  i754.overridePixelPerfect = !!i755[14]
  return i754
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i757 = data
  i756.m_UiScaleMode = i757[0]
  i756.m_ReferencePixelsPerUnit = i757[1]
  i756.m_ScaleFactor = i757[2]
  i756.m_ReferenceResolution = new pc.Vec2( i757[3], i757[4] )
  i756.m_ScreenMatchMode = i757[5]
  i756.m_MatchWidthOrHeight = i757[6]
  i756.m_PhysicalUnit = i757[7]
  i756.m_FallbackScreenDPI = i757[8]
  i756.m_DefaultSpriteDPI = i757[9]
  i756.m_DynamicPixelsPerUnit = i757[10]
  i756.m_PresetInfoIsWorld = !!i757[11]
  return i756
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i759 = data
  i758.m_IgnoreReversedGraphics = !!i759[0]
  i758.m_BlockingObjects = i759[1]
  i758.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i759[2] )
  return i758
}

Deserializers["UIManager"] = function (request, data, root) {
  var i760 = root || request.c( 'UIManager' )
  var i761 = data
  request.r(i761[0], i761[1], 0, i760, 'StepText')
  return i760
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.UI.Text' )
  var i763 = data
  i762.m_FontData = request.d('UnityEngine.UI.FontData', i763[0], i762.m_FontData)
  i762.m_Text = i763[1]
  request.r(i763[2], i763[3], 0, i762, 'm_Material')
  i762.m_Maskable = !!i763[4]
  i762.m_Color = new pc.Color(i763[5], i763[6], i763[7], i763[8])
  i762.m_RaycastTarget = !!i763[9]
  i762.m_RaycastPadding = new pc.Vec4( i763[10], i763[11], i763[12], i763[13] )
  return i762
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.UI.FontData' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Font')
  i764.m_FontSize = i765[2]
  i764.m_FontStyle = i765[3]
  i764.m_BestFit = !!i765[4]
  i764.m_MinSize = i765[5]
  i764.m_MaxSize = i765[6]
  i764.m_Alignment = i765[7]
  i764.m_AlignByGeometry = !!i765[8]
  i764.m_RichText = !!i765[9]
  i764.m_HorizontalOverflow = i765[10]
  i764.m_VerticalOverflow = i765[11]
  i764.m_LineSpacing = i765[12]
  return i764
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i766 = root || request.c( 'BotParachute' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, '_animator')
  request.r(i767[2], i767[3], 0, i766, '_muzzle')
  request.r(i767[4], i767[5], 0, i766, 'bullet')
  i766.target = new pc.Vec3( i767[6], i767[7], i767[8] )
  i766.moveIndex = i767[9]
  i766.isMoveDone = !!i767[10]
  i766.isDie = !!i767[11]
  i766.isMove = !!i767[12]
  i766.parachuteDone = !!i767[13]
  i766.isTakeDame = !!i767[14]
  i766.maxHealth = i767[15]
  request.r(i767[16], i767[17], 0, i766, 'healthBarRenderer')
  request.r(i767[18], i767[19], 0, i766, '_audioSource')
  request.r(i767[20], i767[21], 0, i766, '_callTeamAudioSource')
  request.r(i767[22], i767[23], 0, i766, '_hitAudioSource')
  return i766
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i768 = root || request.c( 'ParachuteController' )
  var i769 = data
  i768.gravity = i769[0]
  i768.dragForce = i769[1]
  i768.objectMass = i769[2]
  request.r(i769[3], i769[4], 0, i768, '_botController')
  i768.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i769[5] )
  request.r(i769[6], i769[7], 0, i768, 'ParachuteScale')
  i768.scaleAmount = i769[8]
  i768.velocity = new pc.Vec3( i769[9], i769[10], i769[11] )
  i768._distanceOpenParachute = i769[12]
  i768._distanceCloseParachute = i769[13]
  return i768
}

Deserializers["BotController"] = function (request, data, root) {
  var i770 = root || request.c( 'BotController' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, '_animator')
  request.r(i771[2], i771[3], 0, i770, '_muzzle')
  request.r(i771[4], i771[5], 0, i770, 'bullet')
  i770.target = new pc.Vec3( i771[6], i771[7], i771[8] )
  i770.moveIndex = i771[9]
  i770.isMoveDone = !!i771[10]
  i770.isDie = !!i771[11]
  i770.isTakeDame = !!i771[12]
  i770.maxHealth = i771[13]
  request.r(i771[14], i771[15], 0, i770, 'healthBarRenderer')
  request.r(i771[16], i771[17], 0, i770, '_audioSource')
  request.r(i771[18], i771[19], 0, i770, '_callTeamAudioSource')
  request.r(i771[20], i771[21], 0, i770, '_hitAudioSource')
  return i770
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i772 = root || request.c( 'PlayerView' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, '_mainRoot')
  request.r(i773[2], i773[3], 0, i772, '_head')
  i772._sensitivity = i773[4]
  i772._slerpFactor = i773[5]
  i772._viewHorizontalThreshold = new pc.Vec2( i773[6], i773[7] )
  i772._viewVerticalThreshold = new pc.Vec2( i773[8], i773[9] )
  i772._initRotate = new pc.Vec2( i773[10], i773[11] )
  i772._totalRotate = new pc.Vec2( i773[12], i773[13] )
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i775 = data
  i774.playAutomatically = !!i775[0]
  request.r(i775[1], i775[2], 0, i774, 'clip')
  var i777 = i775[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 2) {
  request.r(i777[i + 0], i777[i + 1], 2, i776, '')
  }
  i774.clips = i776
  i774.wrapMode = i775[4]
  i774.enabled = !!i775[5]
  return i774
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i780 = root || request.c( 'WeaponController' )
  var i781 = data
  i780.Mask = UnityEngine.LayerMask.FromIntegerValue( i781[0] )
  i780.damage = i781[1]
  request.r(i781[2], i781[3], 0, i780, '_muzzleTrans')
  request.r(i781[4], i781[5], 0, i780, '_animation')
  request.r(i781[6], i781[7], 0, i780, 'bullet')
  request.r(i781[8], i781[9], 0, i780, '_muzzleFlash')
  request.r(i781[10], i781[11], 0, i780, 'audioClip')
  request.r(i781[12], i781[13], 0, i780, 'audioSource')
  i780.SphereRadius = i781[14]
  request.r(i781[15], i781[16], 0, i780, 'Effect')
  return i780
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i782 = root || request.c( 'SpawnBot' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, '_botPrefab')
  i782._spawnInterval = i783[2]
  i782._upper = i783[3]
  return i782
}

Deserializers["PathManager"] = function (request, data, root) {
  var i784 = root || request.c( 'PathManager' )
  var i785 = data
  var i787 = i785[0]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(request.d('Path', i787[i + 0]));
  }
  i784._paths = i786
  var i789 = i785[1]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(request.d('Path', i789[i + 0]));
  }
  i784._pathsParachute = i788
  return i784
}

Deserializers["Path"] = function (request, data, root) {
  var i792 = root || request.c( 'Path' )
  var i793 = data
  i792.IsUse = !!i793[0]
  var i795 = i793[1]
  var i794 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 1, i794, '')
  }
  i792.WayPoints = i794
  return i792
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i798 = root || request.c( 'ConfigManager' )
  var i799 = data
  var i801 = i799[0]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('StepData', i801[i + 0]) );
  }
  i798._stepDatas = i800
  return i798
}

Deserializers["StepData"] = function (request, data, root) {
  var i804 = root || request.c( 'StepData' )
  var i805 = data
  i804.NumberBot = i805[0]
  i804.NumberParachute = i805[1]
  return i804
}

Deserializers["StepManager"] = function (request, data, root) {
  var i806 = root || request.c( 'StepManager' )
  var i807 = data
  request.r(i807[0], i807[1], 0, i806, '_spawnBotNormal')
  request.r(i807[2], i807[3], 0, i806, '_spawnBotParachute')
  return i806
}

Deserializers["BotManager"] = function (request, data, root) {
  var i808 = root || request.c( 'BotManager' )
  var i809 = data
  return i808
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i810 = root || request.c( 'AudioManager' )
  var i811 = data
  var i813 = i811[0]
  var i812 = []
  for(var i = 0; i < i813.length; i += 2) {
  request.r(i813[i + 0], i813[i + 1], 2, i812, '')
  }
  i810.CallTeamOnFireSounds = i812
  var i815 = i811[1]
  var i814 = []
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 2, i814, '')
  }
  i810.CallTeamSounds = i814
  var i817 = i811[2]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i810.AttackSounds = i816
  var i819 = i811[3]
  var i818 = []
  for(var i = 0; i < i819.length; i += 2) {
  request.r(i819[i + 0], i819[i + 1], 2, i818, '')
  }
  i810.MissSounds = i818
  var i821 = i811[4]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i810.HitSounds = i820
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i827.length; i += 1) {
    i826.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i827[i + 0]));
  }
  i824.ShaderCompilationErrors = i826
  i824.name = i825[1]
  i824.guid = i825[2]
  var i829 = i825[3]
  var i828 = []
  for(var i = 0; i < i829.length; i += 1) {
    i828.push( i829[i + 0] );
  }
  i824.shaderDefinedKeywords = i828
  var i831 = i825[4]
  var i830 = []
  for(var i = 0; i < i831.length; i += 1) {
    i830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i831[i + 0]) );
  }
  i824.passes = i830
  var i833 = i825[5]
  var i832 = []
  for(var i = 0; i < i833.length; i += 1) {
    i832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i833[i + 0]) );
  }
  i824.usePasses = i832
  var i835 = i825[6]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i835[i + 0]) );
  }
  i824.defaultParameterValues = i834
  request.r(i825[7], i825[8], 0, i824, 'unityFallbackShader')
  i824.readDepth = !!i825[9]
  i824.isCreatedByShaderGraph = !!i825[10]
  i824.usedBatchUniforms = i825[11]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i839 = data
  i838.shaderName = i839[0]
  i838.errorMessage = i839[1]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i844 = root || new pc.UnityShaderPass()
  var i845 = data
  i844.id = i845[0]
  i844.subShaderIndex = i845[1]
  i844.name = i845[2]
  i844.passType = i845[3]
  i844.grabPassTextureName = i845[4]
  i844.usePass = !!i845[5]
  i844.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[6], i844.zTest)
  i844.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[7], i844.zWrite)
  i844.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[8], i844.culling)
  i844.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i845[9], i844.blending)
  i844.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i845[10], i844.alphaBlending)
  i844.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[11], i844.colorWriteMask)
  i844.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[12], i844.offsetUnits)
  i844.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[13], i844.offsetFactor)
  i844.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[14], i844.stencilRef)
  i844.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[15], i844.stencilReadMask)
  i844.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i845[16], i844.stencilWriteMask)
  i844.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i845[17], i844.stencilOp)
  i844.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i845[18], i844.stencilOpFront)
  i844.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i845[19], i844.stencilOpBack)
  var i847 = i845[20]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i847[i + 0]) );
  }
  i844.tags = i846
  var i849 = i845[21]
  var i848 = []
  for(var i = 0; i < i849.length; i += 1) {
    i848.push( i849[i + 0] );
  }
  i844.passDefinedKeywords = i848
  var i851 = i845[22]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i851[i + 0]) );
  }
  i844.passDefinedKeywordGroups = i850
  var i853 = i845[23]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i853[i + 0]) );
  }
  i844.variants = i852
  var i855 = i845[24]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i855[i + 0]) );
  }
  i844.excludedVariants = i854
  i844.hasDepthReader = !!i845[25]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i857 = data
  i856.val = i857[0]
  i856.name = i857[1]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i859 = data
  i858.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[0], i858.src)
  i858.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[1], i858.dst)
  i858.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i859[2], i858.op)
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i861 = data
  i860.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[0], i860.pass)
  i860.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[1], i860.fail)
  i860.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[2], i860.zFail)
  i860.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i861[3], i860.comp)
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i865 = data
  i864.name = i865[0]
  i864.value = i865[1]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i869 = data
  var i871 = i869[0]
  var i870 = []
  for(var i = 0; i < i871.length; i += 1) {
    i870.push( i871[i + 0] );
  }
  i868.keywords = i870
  i868.hasDiscard = !!i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i875 = data
  i874.passId = i875[0]
  i874.subShaderIndex = i875[1]
  var i877 = i875[2]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i874.keywords = i876
  i874.vertexProgram = i875[3]
  i874.fragmentProgram = i875[4]
  i874.readDepth = !!i875[5]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'shader')
  i880.pass = i881[2]
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i885 = data
  i884.name = i885[0]
  i884.type = i885[1]
  i884.value = new pc.Vec4( i885[2], i885[3], i885[4], i885[5] )
  i884.textureValue = i885[6]
  return i884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i887 = data
  i886.name = i887[0]
  request.r(i887[1], i887[2], 0, i886, 'texture')
  i886.aabb = i887[3]
  i886.vertices = i887[4]
  i886.triangles = i887[5]
  i886.textureRect = UnityEngine.Rect.MinMaxRect(i887[6], i887[7], i887[8], i887[9])
  i886.packedRect = UnityEngine.Rect.MinMaxRect(i887[10], i887[11], i887[12], i887[13])
  i886.border = new pc.Vec4( i887[14], i887[15], i887[16], i887[17] )
  i886.transparency = i887[18]
  i886.bounds = i887[19]
  i886.pixelsPerUnit = i887[20]
  i886.textureWidth = i887[21]
  i886.textureHeight = i887[22]
  i886.nativeSize = new pc.Vec2( i887[23], i887[24] )
  i886.pivot = new pc.Vec2( i887[25], i887[26] )
  i886.textureRectOffset = new pc.Vec2( i887[27], i887[28] )
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i889 = data
  i888.name = i889[0]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i891 = data
  i890.name = i891[0]
  i890.wrapMode = i891[1]
  i890.isLooping = !!i891[2]
  i890.length = i891[3]
  var i893 = i891[4]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i893[i + 0]) );
  }
  i890.curves = i892
  var i895 = i891[5]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i895[i + 0]) );
  }
  i890.events = i894
  i890.halfPrecision = !!i891[6]
  i890.frameRate = i891[7]
  i890.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i891[8], i890.localBounds)
  i890.hasMuscleCurves = !!i891[9]
  var i897 = i891[10]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( i897[i + 0] );
  }
  i890.clipMuscleConstant = i896
  i890.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i891[11], i890.clipBindingConstant)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i901 = data
  i900.path = i901[0]
  i900.componentType = i901[1]
  i900.property = i901[2]
  i900.keys = i901[3]
  var i903 = i901[4]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i903[i + 0]) );
  }
  i900.objectReferenceKeys = i902
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i907 = data
  i906.time = i907[0]
  request.r(i907[1], i907[2], 0, i906, 'value')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i911 = data
  i910.functionName = i911[0]
  i910.floatParameter = i911[1]
  i910.intParameter = i911[2]
  i910.stringParameter = i911[3]
  request.r(i911[4], i911[5], 0, i910, 'objectReferenceParameter')
  i910.time = i911[6]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i913 = data
  i912.center = new pc.Vec3( i913[0], i913[1], i913[2] )
  i912.extends = new pc.Vec3( i913[3], i913[4], i913[5] )
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i917 = data
  var i919 = i917[0]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( i919[i + 0] );
  }
  i916.genericBindings = i918
  var i921 = i917[1]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.pptrCurveMapping = i920
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i923 = data
  i922.name = i923[0]
  i922.ascent = i923[1]
  i922.originalLineHeight = i923[2]
  i922.fontSize = i923[3]
  var i925 = i923[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i925[i + 0]) );
  }
  i922.characterInfo = i924
  request.r(i923[5], i923[6], 0, i922, 'texture')
  i922.originalFontSize = i923[7]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i929 = data
  i928.index = i929[0]
  i928.advance = i929[1]
  i928.bearing = i929[2]
  i928.glyphWidth = i929[3]
  i928.glyphHeight = i929[4]
  i928.minX = i929[5]
  i928.maxX = i929[6]
  i928.minY = i929[7]
  i928.maxY = i929[8]
  i928.uvBottomLeftX = i929[9]
  i928.uvBottomLeftY = i929[10]
  i928.uvBottomRightX = i929[11]
  i928.uvBottomRightY = i929[12]
  i928.uvTopLeftX = i929[13]
  i928.uvTopLeftY = i929[14]
  i928.uvTopRightX = i929[15]
  i928.uvTopRightY = i929[16]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i931 = data
  i930.name = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i933[i + 0]) );
  }
  i930.states = i932
  var i935 = i931[2]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i935[i + 0]) );
  }
  i930.layers = i934
  var i937 = i931[3]
  var i936 = []
  for(var i = 0; i < i937.length; i += 1) {
    i936.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i937[i + 0]) );
  }
  i930.parameters = i936
  i930.animationClips = i931[4]
  i930.HasSubStateMachines = !!i931[5]
  i930.avatarUnsupported = i931[6]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i941 = data
  i940.cycleOffset = i941[0]
  i940.cycleOffsetParameter = i941[1]
  i940.cycleOffsetParameterActive = !!i941[2]
  i940.mirror = !!i941[3]
  i940.mirrorParameter = i941[4]
  i940.mirrorParameterActive = !!i941[5]
  i940.motionId = i941[6]
  i940.nameHash = i941[7]
  i940.fullPathHash = i941[8]
  i940.speed = i941[9]
  i940.speedParameter = i941[10]
  i940.speedParameterActive = !!i941[11]
  i940.tag = i941[12]
  i940.name = i941[13]
  i940.layer = i941[14]
  i940.writeDefaultValues = !!i941[15]
  var i943 = i941[16]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i943[i + 0]) );
  }
  i940.transitions = i942
  var i945 = i941[17]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i940.behaviours = i944
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i949 = data
  i948.fullPath = i949[0]
  i948.canTransitionToSelf = !!i949[1]
  i948.duration = i949[2]
  i948.exitTime = i949[3]
  i948.hasExitTime = !!i949[4]
  i948.hasFixedDuration = !!i949[5]
  i948.interruptionSource = i949[6]
  i948.offset = i949[7]
  i948.orderedInterruption = !!i949[8]
  i948.destinationStateNameHash = i949[9]
  i948.destinationStateMachineId = i949[10]
  i948.isExit = !!i949[11]
  i948.mute = !!i949[12]
  i948.solo = !!i949[13]
  var i951 = i949[14]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i951[i + 0]) );
  }
  i948.conditions = i950
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i955 = data
  i954.mode = i955[0]
  i954.parameter = i955[1]
  i954.threshold = i955[2]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i961 = data
  i960.blendingMode = i961[0]
  i960.defaultWeight = i961[1]
  i960.name = i961[2]
  i960.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i961[3], i960.stateMachine)
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i963 = data
  i962.id = i963[0]
  i962.defaultStateNameHash = i963[1]
  var i965 = i963[2]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i965[i + 0]) );
  }
  i962.entryTransitions = i964
  var i967 = i963[3]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i967[i + 0]) );
  }
  i962.anyStateTransitions = i966
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i971 = data
  i970.destinationStateNameHash = i971[0]
  i970.destinationStateMachineId = i971[1]
  i970.isExit = !!i971[2]
  i970.mute = !!i971[3]
  i970.solo = !!i971[4]
  var i973 = i971[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i973[i + 0]) );
  }
  i970.conditions = i972
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i977 = data
  i976.defaultBool = !!i977[0]
  i976.defaultFloat = i977[1]
  i976.defaultInt = i977[2]
  i976.name = i977[3]
  i976.nameHash = i977[4]
  i976.type = i977[5]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i979 = data
  var i981 = i979[0]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i981[i + 0]) );
  }
  i978.files = i980
  i978.componentToPrefabIds = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i985 = data
  i984.path = i985[0]
  request.r(i985[1], i985[2], 0, i984, 'unityObject')
  return i984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i987 = data
  var i989 = i987[0]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i989[i + 0]) );
  }
  i986.scriptsExecutionOrder = i988
  var i991 = i987[1]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i991[i + 0]) );
  }
  i986.sortingLayers = i990
  var i993 = i987[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i993[i + 0]) );
  }
  i986.cullingLayers = i992
  i986.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i987[3], i986.timeSettings)
  i986.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i987[4], i986.physicsSettings)
  i986.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i987[5], i986.physics2DSettings)
  i986.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i987[6], i986.qualitySettings)
  i986.enableRealtimeShadows = !!i987[7]
  i986.enableAutoInstancing = !!i987[8]
  i986.enableDynamicBatching = !!i987[9]
  i986.lightmapEncodingQuality = i987[10]
  i986.desiredColorSpace = i987[11]
  var i995 = i987[12]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( i995[i + 0] );
  }
  i986.allTags = i994
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i999 = data
  i998.name = i999[0]
  i998.value = i999[1]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1003 = data
  i1002.id = i1003[0]
  i1002.name = i1003[1]
  i1002.value = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1007 = data
  i1006.id = i1007[0]
  i1006.name = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1009 = data
  i1008.fixedDeltaTime = i1009[0]
  i1008.maximumDeltaTime = i1009[1]
  i1008.timeScale = i1009[2]
  i1008.maximumParticleTimestep = i1009[3]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1011 = data
  i1010.gravity = new pc.Vec3( i1011[0], i1011[1], i1011[2] )
  i1010.defaultSolverIterations = i1011[3]
  i1010.bounceThreshold = i1011[4]
  i1010.autoSyncTransforms = !!i1011[5]
  i1010.autoSimulation = !!i1011[6]
  var i1013 = i1011[7]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1013[i + 0]) );
  }
  i1010.collisionMatrix = i1012
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1017 = data
  i1016.enabled = !!i1017[0]
  i1016.layerId = i1017[1]
  i1016.otherLayerId = i1017[2]
  return i1016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1019 = data
  request.r(i1019[0], i1019[1], 0, i1018, 'material')
  i1018.gravity = new pc.Vec2( i1019[2], i1019[3] )
  i1018.positionIterations = i1019[4]
  i1018.velocityIterations = i1019[5]
  i1018.velocityThreshold = i1019[6]
  i1018.maxLinearCorrection = i1019[7]
  i1018.maxAngularCorrection = i1019[8]
  i1018.maxTranslationSpeed = i1019[9]
  i1018.maxRotationSpeed = i1019[10]
  i1018.baumgarteScale = i1019[11]
  i1018.baumgarteTOIScale = i1019[12]
  i1018.timeToSleep = i1019[13]
  i1018.linearSleepTolerance = i1019[14]
  i1018.angularSleepTolerance = i1019[15]
  i1018.defaultContactOffset = i1019[16]
  i1018.autoSimulation = !!i1019[17]
  i1018.queriesHitTriggers = !!i1019[18]
  i1018.queriesStartInColliders = !!i1019[19]
  i1018.callbacksOnDisable = !!i1019[20]
  i1018.reuseCollisionCallbacks = !!i1019[21]
  i1018.autoSyncTransforms = !!i1019[22]
  var i1021 = i1019[23]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1021[i + 0]) );
  }
  i1018.collisionMatrix = i1020
  return i1018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1025 = data
  i1024.enabled = !!i1025[0]
  i1024.layerId = i1025[1]
  i1024.otherLayerId = i1025[2]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1027 = data
  var i1029 = i1027[0]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1029[i + 0]) );
  }
  i1026.qualityLevels = i1028
  var i1031 = i1027[1]
  var i1030 = []
  for(var i = 0; i < i1031.length; i += 1) {
    i1030.push( i1031[i + 0] );
  }
  i1026.names = i1030
  i1026.shadows = i1027[2]
  i1026.anisotropicFiltering = i1027[3]
  i1026.antiAliasing = i1027[4]
  i1026.lodBias = i1027[5]
  i1026.shadowCascades = i1027[6]
  i1026.shadowDistance = i1027[7]
  i1026.shadowmaskMode = i1027[8]
  i1026.shadowProjection = i1027[9]
  i1026.shadowResolution = i1027[10]
  i1026.softParticles = !!i1027[11]
  i1026.softVegetation = !!i1027[12]
  i1026.activeColorSpace = i1027[13]
  i1026.desiredColorSpace = i1027[14]
  i1026.masterTextureLimit = i1027[15]
  i1026.maxQueuedFrames = i1027[16]
  i1026.particleRaycastBudget = i1027[17]
  i1026.pixelLightCount = i1027[18]
  i1026.realtimeReflectionProbes = !!i1027[19]
  i1026.shadowCascade2Split = i1027[20]
  i1026.shadowCascade4Split = new pc.Vec3( i1027[21], i1027[22], i1027[23] )
  i1026.streamingMipmapsActive = !!i1027[24]
  i1026.vSyncCount = i1027[25]
  i1026.asyncUploadBufferSize = i1027[26]
  i1026.asyncUploadTimeSlice = i1027[27]
  i1026.billboardsFaceCameraPosition = !!i1027[28]
  i1026.shadowNearPlaneOffset = i1027[29]
  i1026.streamingMipmapsMemoryBudget = i1027[30]
  i1026.maximumLODLevel = i1027[31]
  i1026.streamingMipmapsAddAllCameras = !!i1027[32]
  i1026.streamingMipmapsMaxLevelReduction = i1027[33]
  i1026.streamingMipmapsRenderersPerFrame = i1027[34]
  i1026.resolutionScalingFixedDPIFactor = i1027[35]
  i1026.streamingMipmapsMaxFileIORequests = i1027[36]
  i1026.currentQualityLevel = i1027[37]
  return i1026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1035 = data
  i1034.name = i1035[0]
  var i1037 = i1035[1]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1037[i + 0]) );
  }
  i1034.tos = i1036
  var i1039 = i1035[2]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.constant = i1038
  i1034.isValid = !!i1035[3]
  i1034.isHuman = !!i1035[4]
  i1034.hasRootMotion = !!i1035[5]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1043 = data
  i1042.hash = i1043[0]
  i1042.path = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1047 = data
  i1046.weight = i1047[0]
  i1046.vertices = i1047[1]
  i1046.normals = i1047[2]
  i1046.tangents = i1047[3]
  return i1046
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"54":[55],"56":[55],"57":[55],"58":[55],"59":[55],"60":[55],"61":[6],"62":[15],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[15],"86":[10],"87":[88],"89":[88],"32":[20],"90":[20],"91":[10,20],"92":[20,23],"93":[20],"94":[23,20],"95":[10],"96":[23,20],"97":[20],"98":[99],"100":[20],"101":[20],"34":[32],"25":[23,20],"102":[20],"33":[32],"103":[20],"104":[20],"105":[20],"106":[20],"107":[20],"108":[20],"109":[20],"110":[20],"111":[20],"112":[23,20],"113":[20],"114":[20],"115":[20],"116":[20],"36":[23,20],"117":[20],"118":[29],"119":[29],"30":[29],"120":[29],"121":[15],"122":[15],"123":[99],"124":[99]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.Light","UnityEngine.Cubemap","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","ObjectPool","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Text","UnityEngine.Font","BotParachute","UnityEngine.GameObject","ParachuteController","UnityEditor.Animations.AnimatorController","BotController","UnityEngine.AudioClip","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","PathManager","ConfigManager","StepManager","BotManager","AudioManager","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "17.7";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "Luna";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1546";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4071";

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

Deserializers.buildID = "3d1577f1-e629-47d9-9b1d-c459c1083a8a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

