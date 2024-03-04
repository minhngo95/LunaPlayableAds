var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointSpring' )
  var i571 = data
  i570.spring = i571[0]
  i570.damper = i571[1]
  i570.targetPosition = i571[2]
  return i570
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointMotor' )
  var i573 = data
  i572.m_TargetVelocity = i573[0]
  i572.m_Force = i573[1]
  i572.m_FreeSpin = i573[2]
  return i572
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointLimits' )
  var i575 = data
  i574.m_Min = i575[0]
  i574.m_Max = i575[1]
  i574.m_Bounciness = i575[2]
  i574.m_BounceMinVelocity = i575[3]
  i574.m_ContactDistance = i575[4]
  i574.minBounce = i575[5]
  i574.maxBounce = i575[6]
  return i574
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.JointDrive' )
  var i577 = data
  i576.m_PositionSpring = i577[0]
  i576.m_PositionDamper = i577[1]
  i576.m_MaximumForce = i577[2]
  return i576
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i578 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i579 = data
  i578.m_Spring = i579[0]
  i578.m_Damper = i579[1]
  return i578
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i580 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i581 = data
  i580.m_Limit = i581[0]
  i580.m_Bounciness = i581[1]
  i580.m_ContactDistance = i581[2]
  return i580
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i582 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i583 = data
  i582.m_ExtremumSlip = i583[0]
  i582.m_ExtremumValue = i583[1]
  i582.m_AsymptoteSlip = i583[2]
  i582.m_AsymptoteValue = i583[3]
  i582.m_Stiffness = i583[4]
  return i582
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i585 = data
  i584.m_LowerAngle = i585[0]
  i584.m_UpperAngle = i585[1]
  return i584
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i586 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i587 = data
  i586.m_MotorSpeed = i587[0]
  i586.m_MaximumMotorTorque = i587[1]
  return i586
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i589 = data
  i588.m_DampingRatio = i589[0]
  i588.m_Frequency = i589[1]
  i588.m_Angle = i589[2]
  return i588
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i590 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i591 = data
  i590.m_LowerTranslation = i591[0]
  i590.m_UpperTranslation = i591[1]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i592 = root || new pc.UnityMaterial()
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'shader')
  i592.renderQueue = i593[3]
  i592.enableInstancing = !!i593[4]
  var i595 = i593[5]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i595[i + 0]) );
  }
  i592.floatParameters = i594
  var i597 = i593[6]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i597[i + 0]) );
  }
  i592.colorParameters = i596
  var i599 = i593[7]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i599[i + 0]) );
  }
  i592.vectorParameters = i598
  var i601 = i593[8]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i601[i + 0]) );
  }
  i592.textureParameters = i600
  var i603 = i593[9]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i603[i + 0]) );
  }
  i592.materialFlags = i602
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i607 = data
  i606.name = i607[0]
  i606.value = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i611 = data
  i610.name = i611[0]
  i610.value = new pc.Color(i611[1], i611[2], i611[3], i611[4])
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i615 = data
  i614.name = i615[0]
  i614.value = new pc.Vec4( i615[1], i615[2], i615[3], i615[4] )
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i619 = data
  i618.name = i619[0]
  request.r(i619[1], i619[2], 0, i618, 'value')
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i623 = data
  i622.name = i623[0]
  i622.enabled = !!i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i625 = data
  i624.name = i625[0]
  i624.width = i625[1]
  i624.height = i625[2]
  i624.mipmapCount = i625[3]
  i624.anisoLevel = i625[4]
  i624.filterMode = i625[5]
  i624.hdr = !!i625[6]
  i624.format = i625[7]
  i624.wrapMode = i625[8]
  i624.alphaIsTransparency = !!i625[9]
  i624.alphaSource = i625[10]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i627 = data
  i626.position = new pc.Vec3( i627[0], i627[1], i627[2] )
  i626.scale = new pc.Vec3( i627[3], i627[4], i627[5] )
  i626.rotation = new pc.Quat(i627[6], i627[7], i627[8], i627[9])
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i629 = data
  request.r(i629[0], i629[1], 0, i628, 'animatorController')
  request.r(i629[2], i629[3], 0, i628, 'avatar')
  i628.updateMode = i629[4]
  i628.hasTransformHierarchy = !!i629[5]
  i628.applyRootMotion = !!i629[6]
  var i631 = i629[7]
  var i630 = []
  for(var i = 0; i < i631.length; i += 2) {
  request.r(i631[i + 0], i631[i + 1], 2, i630, '')
  }
  i628.humanBones = i630
  i628.enabled = !!i629[8]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i635 = data
  i634.enabled = !!i635[0]
  request.r(i635[1], i635[2], 0, i634, 'sharedMaterial')
  var i637 = i635[3]
  var i636 = []
  for(var i = 0; i < i637.length; i += 2) {
  request.r(i637[i + 0], i637[i + 1], 2, i636, '')
  }
  i634.sharedMaterials = i636
  i634.receiveShadows = !!i635[4]
  i634.shadowCastingMode = i635[5]
  i634.sortingLayerID = i635[6]
  i634.sortingOrder = i635[7]
  i634.lightmapIndex = i635[8]
  i634.lightmapSceneIndex = i635[9]
  i634.lightmapScaleOffset = new pc.Vec4( i635[10], i635[11], i635[12], i635[13] )
  i634.lightProbeUsage = i635[14]
  i634.reflectionProbeUsage = i635[15]
  request.r(i635[16], i635[17], 0, i634, 'sharedMesh')
  var i639 = i635[18]
  var i638 = []
  for(var i = 0; i < i639.length; i += 2) {
  request.r(i639[i + 0], i639[i + 1], 2, i638, '')
  }
  i634.bones = i638
  i634.updateWhenOffscreen = !!i635[19]
  i634.localBounds = i635[20]
  request.r(i635[21], i635[22], 0, i634, 'rootBone')
  var i641 = i635[23]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i641[i + 0]) );
  }
  i634.blendShapesWeights = i640
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i647 = data
  i646.weight = i647[0]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i649 = data
  i648.name = i649[0]
  i648.tagId = i649[1]
  i648.enabled = !!i649[2]
  i648.isStatic = !!i649[3]
  i648.layer = i649[4]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i651 = data
  i650.name = i651[0]
  i650.halfPrecision = !!i651[1]
  i650.vertexCount = i651[2]
  i650.aabb = i651[3]
  var i653 = i651[4]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( !!i653[i + 0] );
  }
  i650.streams = i652
  i650.vertices = i651[5]
  var i655 = i651[6]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i655[i + 0]) );
  }
  i650.subMeshes = i654
  var i657 = i651[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 16) {
    i656.push( new pc.Mat4().setData(i657[i + 0], i657[i + 1], i657[i + 2], i657[i + 3],  i657[i + 4], i657[i + 5], i657[i + 6], i657[i + 7],  i657[i + 8], i657[i + 9], i657[i + 10], i657[i + 11],  i657[i + 12], i657[i + 13], i657[i + 14], i657[i + 15]) );
  }
  i650.bindposes = i656
  var i659 = i651[8]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i659[i + 0]) );
  }
  i650.blendShapes = i658
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i665 = data
  i664.triangles = i665[0]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i671 = data
  i670.name = i671[0]
  var i673 = i671[1]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i673[i + 0]) );
  }
  i670.frames = i672
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i675 = data
  request.r(i675[0], i675[1], 0, i674, 'sharedMesh')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i677 = data
  request.r(i677[0], i677[1], 0, i676, 'additionalVertexStreams')
  i676.enabled = !!i677[2]
  request.r(i677[3], i677[4], 0, i676, 'sharedMaterial')
  var i679 = i677[5]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i676.sharedMaterials = i678
  i676.receiveShadows = !!i677[6]
  i676.shadowCastingMode = i677[7]
  i676.sortingLayerID = i677[8]
  i676.sortingOrder = i677[9]
  i676.lightmapIndex = i677[10]
  i676.lightmapSceneIndex = i677[11]
  i676.lightmapScaleOffset = new pc.Vec4( i677[12], i677[13], i677[14], i677[15] )
  i676.lightProbeUsage = i677[16]
  i676.reflectionProbeUsage = i677[17]
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i681 = data
  i680.pivot = new pc.Vec2( i681[0], i681[1] )
  i680.anchorMin = new pc.Vec2( i681[2], i681[3] )
  i680.anchorMax = new pc.Vec2( i681[4], i681[5] )
  i680.sizeDelta = new pc.Vec2( i681[6], i681[7] )
  i680.anchoredPosition3D = new pc.Vec3( i681[8], i681[9], i681[10] )
  i680.rotation = new pc.Quat(i681[11], i681[12], i681[13], i681[14])
  i680.scale = new pc.Vec3( i681[15], i681[16], i681[17] )
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i683 = data
  i682.enabled = !!i683[0]
  i682.planeDistance = i683[1]
  i682.referencePixelsPerUnit = i683[2]
  i682.isFallbackOverlay = !!i683[3]
  i682.renderMode = i683[4]
  i682.renderOrder = i683[5]
  i682.sortingLayerName = i683[6]
  i682.sortingOrder = i683[7]
  i682.scaleFactor = i683[8]
  request.r(i683[9], i683[10], 0, i682, 'worldCamera')
  i682.overrideSorting = !!i683[11]
  i682.pixelPerfect = !!i683[12]
  i682.targetDisplay = i683[13]
  i682.overridePixelPerfect = !!i683[14]
  return i682
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i684 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i685 = data
  i684.m_UiScaleMode = i685[0]
  i684.m_ReferencePixelsPerUnit = i685[1]
  i684.m_ScaleFactor = i685[2]
  i684.m_ReferenceResolution = new pc.Vec2( i685[3], i685[4] )
  i684.m_ScreenMatchMode = i685[5]
  i684.m_MatchWidthOrHeight = i685[6]
  i684.m_PhysicalUnit = i685[7]
  i684.m_FallbackScreenDPI = i685[8]
  i684.m_DefaultSpriteDPI = i685[9]
  i684.m_DynamicPixelsPerUnit = i685[10]
  i684.m_PresetInfoIsWorld = !!i685[11]
  return i684
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i686 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i687 = data
  i686.m_IgnoreReversedGraphics = !!i687[0]
  i686.m_BlockingObjects = i687[1]
  i686.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i687[2] )
  return i686
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i688 = root || request.c( 'EndCardController' )
  var i689 = data
  i688.alwaysShowEndcardTESTING = !!i689[0]
  i688.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i689[1], i688.EndCardOpenedEvent)
  i688._backgroundColor = new pc.Color(i689[2], i689[3], i689[4], i689[5])
  request.r(i689[6], i689[7], 0, i688, '_backgroundTexture')
  request.r(i689[8], i689[9], 0, i688, '_iconTexture')
  i688._iconColor = new pc.Color(i689[10], i689[11], i689[12], i689[13])
  request.r(i689[14], i689[15], 0, i688, '_buttonTexture')
  i688._buttonColor = new pc.Color(i689[16], i689[17], i689[18], i689[19])
  i688._endCardDescriptionText = i689[20]
  i688._CTAButtonText = i689[21]
  i688._useBestFitOnCTA = !!i689[22]
  i688._CTAFontColor = new pc.Color(i689[23], i689[24], i689[25], i689[26])
  i688._descriptionFontColor = new pc.Color(i689[27], i689[28], i689[29], i689[30])
  request.r(i689[31], i689[32], 0, i688, '_CTAFont')
  request.r(i689[33], i689[34], 0, i688, '_descriptionFont')
  i688._CTAFontSize = i689[35]
  i688._descriptionFontSize = i689[36]
  i688._centerDescriptionX = !!i689[37]
  i688._centerDescriptionY = !!i689[38]
  i688._centerButtonX = !!i689[39]
  i688._centerButtonY = !!i689[40]
  i688._descriptionPositionX = i689[41]
  i688._descriptionPositionY = i689[42]
  i688._buttonPositionX = i689[43]
  i688._buttonPositionY = i689[44]
  i688._CTAFontSizeLandscape = i689[45]
  i688._descriptionFontSizeLandscape = i689[46]
  i688._centerDescriptionXLandscape = !!i689[47]
  i688._centerDescriptionYLandscape = !!i689[48]
  i688._centerButtonXLandscape = !!i689[49]
  i688._centerButtonYLandscape = !!i689[50]
  i688._descriptionPositionXLandscape = i689[51]
  i688._descriptionPositionYLandscape = i689[52]
  i688._buttonPositionXLandscape = i689[53]
  i688._buttonPositionYLandscape = i689[54]
  i688._centerIconX = !!i689[55]
  i688._centerIconY = !!i689[56]
  i688._iconPositionX = i689[57]
  i688._iconPositionY = i689[58]
  i688._iconSize = i689[59]
  i688._roundEdgesOnIcon = !!i689[60]
  i688._centerIconXLandscape = !!i689[61]
  i688._centerIconYLandscape = !!i689[62]
  i688._iconPositionXLandscape = i689[63]
  i688._iconPositionYLandscape = i689[64]
  i688._iconSizeLandscape = i689[65]
  i688._roundEdgesOnIconLandscape = !!i689[66]
  i688._endCardClickableOptions = i689[67]
  i688._buttonAnimationType = i689[68]
  i688._endCardPortraitAnimationType = i689[69]
  i688._endCardLandscapeAnimationType = i689[70]
  request.r(i689[71], i689[72], 0, i688, '_backgroundImage')
  request.r(i689[73], i689[74], 0, i688, '_CTAButton')
  request.r(i689[75], i689[76], 0, i688, '_ScreenCTAButton')
  request.r(i689[77], i689[78], 0, i688, '_CTAButtonTextText')
  request.r(i689[79], i689[80], 0, i688, '_EndCardDescriptionTextText')
  request.r(i689[81], i689[82], 0, i688, '_maskIcon')
  request.r(i689[83], i689[84], 0, i688, '_iconRect')
  request.r(i689[85], i689[86], 0, i688, '_iconRectMask')
  request.r(i689[87], i689[88], 0, i688, '_descriptionRect')
  request.r(i689[89], i689[90], 0, i688, '_buttonRect')
  request.r(i689[91], i689[92], 0, i688, '_CTAButtonAnimator')
  request.r(i689[93], i689[94], 0, i688, '_endCardAnimator')
  request.r(i689[95], i689[96], 0, i688, '_iconImage')
  request.r(i689[97], i689[98], 0, i688, '_CTAButtonImage')
  return i688
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i690 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i691 = data
  i690.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i691[0], i690.m_PersistentCalls)
  return i690
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i692 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i693 = data
  var i695 = i693[0]
  var i694 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i695.length; i += 1) {
    i694.add(request.d('UnityEngine.Events.PersistentCall', i695[i + 0]));
  }
  i692.m_Calls = i694
  return i692
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i698 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i699 = data
  request.r(i699[0], i699[1], 0, i698, 'm_Target')
  i698.m_TargetAssemblyTypeName = i699[2]
  i698.m_MethodName = i699[3]
  i698.m_Mode = i699[4]
  i698.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i699[5], i698.m_Arguments)
  i698.m_CallState = i699[6]
  return i698
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i700 = root || request.c( 'EndCardSetScale' )
  var i701 = data
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i703 = data
  i702.cullTransparentMesh = !!i703[0]
  return i702
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i705 = data
  request.r(i705[0], i705[1], 0, i704, 'm_Texture')
  i704.m_UVRect = UnityEngine.Rect.MinMaxRect(i705[2], i705[3], i705[4], i705[5])
  request.r(i705[6], i705[7], 0, i704, 'm_Material')
  i704.m_Maskable = !!i705[8]
  i704.m_Color = new pc.Color(i705[9], i705[10], i705[11], i705[12])
  i704.m_RaycastTarget = !!i705[13]
  i704.m_RaycastPadding = new pc.Vec4( i705[14], i705[15], i705[16], i705[17] )
  return i704
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i706 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i707 = data
  i706.m_AspectMode = i707[0]
  i706.m_AspectRatio = i707[1]
  return i706
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i708 = root || request.c( 'UnityEngine.UI.Mask' )
  var i709 = data
  i708.m_ShowMaskGraphic = !!i709[0]
  return i708
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i710 = root || request.c( 'UnityEngine.UI.Image' )
  var i711 = data
  request.r(i711[0], i711[1], 0, i710, 'm_Sprite')
  i710.m_Type = i711[2]
  i710.m_PreserveAspect = !!i711[3]
  i710.m_FillCenter = !!i711[4]
  i710.m_FillMethod = i711[5]
  i710.m_FillAmount = i711[6]
  i710.m_FillClockwise = !!i711[7]
  i710.m_FillOrigin = i711[8]
  i710.m_UseSpriteMesh = !!i711[9]
  i710.m_PixelsPerUnitMultiplier = i711[10]
  request.r(i711[11], i711[12], 0, i710, 'm_Material')
  i710.m_Maskable = !!i711[13]
  i710.m_Color = new pc.Color(i711[14], i711[15], i711[16], i711[17])
  i710.m_RaycastTarget = !!i711[18]
  i710.m_RaycastPadding = new pc.Vec4( i711[19], i711[20], i711[21], i711[22] )
  return i710
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i712 = root || request.c( 'UnityEngine.UI.Text' )
  var i713 = data
  i712.m_FontData = request.d('UnityEngine.UI.FontData', i713[0], i712.m_FontData)
  i712.m_Text = i713[1]
  request.r(i713[2], i713[3], 0, i712, 'm_Material')
  i712.m_Maskable = !!i713[4]
  i712.m_Color = new pc.Color(i713[5], i713[6], i713[7], i713[8])
  i712.m_RaycastTarget = !!i713[9]
  i712.m_RaycastPadding = new pc.Vec4( i713[10], i713[11], i713[12], i713[13] )
  return i712
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i714 = root || request.c( 'UnityEngine.UI.FontData' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'm_Font')
  i714.m_FontSize = i715[2]
  i714.m_FontStyle = i715[3]
  i714.m_BestFit = !!i715[4]
  i714.m_MinSize = i715[5]
  i714.m_MaxSize = i715[6]
  i714.m_Alignment = i715[7]
  i714.m_AlignByGeometry = !!i715[8]
  i714.m_RichText = !!i715[9]
  i714.m_HorizontalOverflow = i715[10]
  i714.m_VerticalOverflow = i715[11]
  i714.m_LineSpacing = i715[12]
  return i714
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.UI.Button' )
  var i717 = data
  i716.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i717[0], i716.m_OnClick)
  i716.m_Navigation = request.d('UnityEngine.UI.Navigation', i717[1], i716.m_Navigation)
  i716.m_Transition = i717[2]
  i716.m_Colors = request.d('UnityEngine.UI.ColorBlock', i717[3], i716.m_Colors)
  i716.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i717[4], i716.m_SpriteState)
  i716.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i717[5], i716.m_AnimationTriggers)
  i716.m_Interactable = !!i717[6]
  request.r(i717[7], i717[8], 0, i716, 'm_TargetGraphic')
  return i716
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i719 = data
  i718.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i719[0], i718.m_PersistentCalls)
  return i718
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i720 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'm_ObjectArgument')
  i720.m_ObjectArgumentAssemblyTypeName = i721[2]
  i720.m_IntArgument = i721[3]
  i720.m_FloatArgument = i721[4]
  i720.m_StringArgument = i721[5]
  i720.m_BoolArgument = !!i721[6]
  return i720
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i722 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i723 = data
  i722.m_Mode = i723[0]
  i722.m_WrapAround = !!i723[1]
  request.r(i723[2], i723[3], 0, i722, 'm_SelectOnUp')
  request.r(i723[4], i723[5], 0, i722, 'm_SelectOnDown')
  request.r(i723[6], i723[7], 0, i722, 'm_SelectOnLeft')
  request.r(i723[8], i723[9], 0, i722, 'm_SelectOnRight')
  return i722
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i724 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i725 = data
  i724.m_NormalColor = new pc.Color(i725[0], i725[1], i725[2], i725[3])
  i724.m_HighlightedColor = new pc.Color(i725[4], i725[5], i725[6], i725[7])
  i724.m_PressedColor = new pc.Color(i725[8], i725[9], i725[10], i725[11])
  i724.m_SelectedColor = new pc.Color(i725[12], i725[13], i725[14], i725[15])
  i724.m_DisabledColor = new pc.Color(i725[16], i725[17], i725[18], i725[19])
  i724.m_ColorMultiplier = i725[20]
  i724.m_FadeDuration = i725[21]
  return i724
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i726 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'm_HighlightedSprite')
  request.r(i727[2], i727[3], 0, i726, 'm_PressedSprite')
  request.r(i727[4], i727[5], 0, i726, 'm_SelectedSprite')
  request.r(i727[6], i727[7], 0, i726, 'm_DisabledSprite')
  return i726
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i728 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i729 = data
  i728.m_NormalTrigger = i729[0]
  i728.m_HighlightedTrigger = i729[1]
  i728.m_PressedTrigger = i729[2]
  i728.m_SelectedTrigger = i729[3]
  i728.m_DisabledTrigger = i729[4]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i731 = data
  i730.m_Alpha = i731[0]
  i730.m_Interactable = !!i731[1]
  i730.m_BlocksRaycasts = !!i731[2]
  i730.m_IgnoreParentGroups = !!i731[3]
  i730.enabled = !!i731[4]
  return i730
}

Deserializers["BotNetwork"] = function (request, data, root) {
  var i732 = root || request.c( 'BotNetwork' )
  var i733 = data
  i732._maxHealth = i733[0]
  var i735 = i733[1]
  var i734 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i735.length; i += 2) {
  request.r(i735[i + 0], i735[i + 1], 1, i734, '')
  }
  i732._fireAssistCheckPos = i734
  i732._path = request.d('Path', i733[2], i732._path)
  i732._currentHealth = i733[3]
  i732.isDead = !!i733[4]
  return i732
}

Deserializers["Path"] = function (request, data, root) {
  var i738 = root || request.c( 'Path' )
  var i739 = data
  i738.IsUse = !!i739[0]
  var i741 = i739[1]
  var i740 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i741.length; i += 2) {
  request.r(i741[i + 0], i741[i + 1], 1, i740, '')
  }
  i738.WayPoints = i740
  return i738
}

Deserializers["FiniteStateMachine"] = function (request, data, root) {
  var i742 = root || request.c( 'FiniteStateMachine' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, '_stateTransitionManager')
  return i742
}

Deserializers["StateTransitionManager"] = function (request, data, root) {
  var i744 = root || request.c( 'StateTransitionManager' )
  var i745 = data
  return i744
}

Deserializers["StateConditionManager"] = function (request, data, root) {
  var i746 = root || request.c( 'StateConditionManager' )
  var i747 = data
  return i746
}

Deserializers["BotPlayita"] = function (request, data, root) {
  var i748 = root || request.c( 'BotPlayita' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, '_finiteStateMachine')
  request.r(i749[2], i749[3], 0, i748, '_stateTransitionManager')
  request.r(i749[4], i749[5], 0, i748, '_stateConditionManager')
  request.r(i749[6], i749[7], 0, i748, '_botNetwork')
  request.r(i749[8], i749[9], 0, i748, '_animator')
  request.r(i749[10], i749[11], 0, i748, '_muzzle')
  request.r(i749[12], i749[13], 0, i748, '_bullet')
  i748._target = new pc.Vec3( i749[14], i749[15], i749[16] )
  request.r(i749[17], i749[18], 0, i748, '_healthBarRenderer')
  request.r(i749[19], i749[20], 0, i748, '_takeSource')
  request.r(i749[21], i749[22], 0, i748, '_hitSource')
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'clip')
  request.r(i751[2], i751[3], 0, i750, 'outputAudioMixerGroup')
  i750.playOnAwake = !!i751[4]
  i750.loop = !!i751[5]
  i750.time = i751[6]
  i750.volume = i751[7]
  i750.pitch = i751[8]
  i750.enabled = !!i751[9]
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i753 = data
  i752.center = new pc.Vec3( i753[0], i753[1], i753[2] )
  i752.size = new pc.Vec3( i753[3], i753[4], i753[5] )
  i752.enabled = !!i753[6]
  i752.isTrigger = !!i753[7]
  request.r(i753[8], i753[9], 0, i752, 'material')
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i755 = data
  i754.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i755[0], i754.main)
  i754.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i755[1], i754.colorBySpeed)
  i754.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i755[2], i754.colorOverLifetime)
  i754.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i755[3], i754.emission)
  i754.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i755[4], i754.rotationBySpeed)
  i754.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i755[5], i754.rotationOverLifetime)
  i754.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i755[6], i754.shape)
  i754.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i755[7], i754.sizeBySpeed)
  i754.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i755[8], i754.sizeOverLifetime)
  i754.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i755[9], i754.textureSheetAnimation)
  i754.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i755[10], i754.velocityOverLifetime)
  i754.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i755[11], i754.noise)
  i754.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i755[12], i754.inheritVelocity)
  i754.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i755[13], i754.forceOverLifetime)
  i754.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i755[14], i754.limitVelocityOverLifetime)
  i754.useAutoRandomSeed = !!i755[15]
  i754.randomSeed = i755[16]
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemMain()
  var i757 = data
  i756.duration = i757[0]
  i756.loop = !!i757[1]
  i756.prewarm = !!i757[2]
  i756.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[3], i756.startDelay)
  i756.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[4], i756.startLifetime)
  i756.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[5], i756.startSpeed)
  i756.startSize3D = !!i757[6]
  i756.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[7], i756.startSizeX)
  i756.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[8], i756.startSizeY)
  i756.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[9], i756.startSizeZ)
  i756.startRotation3D = !!i757[10]
  i756.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[11], i756.startRotationX)
  i756.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[12], i756.startRotationY)
  i756.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[13], i756.startRotationZ)
  i756.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i757[14], i756.startColor)
  i756.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[15], i756.gravityModifier)
  i756.simulationSpace = i757[16]
  request.r(i757[17], i757[18], 0, i756, 'customSimulationSpace')
  i756.simulationSpeed = i757[19]
  i756.useUnscaledTime = !!i757[20]
  i756.scalingMode = i757[21]
  i756.playOnAwake = !!i757[22]
  i756.maxParticles = i757[23]
  i756.emitterVelocityMode = i757[24]
  i756.stopAction = i757[25]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i758 = root || new pc.MinMaxCurve()
  var i759 = data
  i758.mode = i759[0]
  i758.curveMin = new pc.AnimationCurve( { keys_flow: i759[1] } )
  i758.curveMax = new pc.AnimationCurve( { keys_flow: i759[2] } )
  i758.curveMultiplier = i759[3]
  i758.constantMin = i759[4]
  i758.constantMax = i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i760 = root || new pc.MinMaxGradient()
  var i761 = data
  i760.mode = i761[0]
  i760.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[1], i760.gradientMin)
  i760.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i761[2], i760.gradientMax)
  i760.colorMin = new pc.Color(i761[3], i761[4], i761[5], i761[6])
  i760.colorMax = new pc.Color(i761[7], i761[8], i761[9], i761[10])
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i763 = data
  i762.mode = i763[0]
  var i765 = i763[1]
  var i764 = []
  for(var i = 0; i < i765.length; i += 1) {
    i764.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i765[i + 0]) );
  }
  i762.colorKeys = i764
  var i767 = i763[2]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i767[i + 0]) );
  }
  i762.alphaKeys = i766
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i768 = root || new pc.ParticleSystemColorBySpeed()
  var i769 = data
  i768.enabled = !!i769[0]
  i768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i769[1], i768.color)
  i768.range = new pc.Vec2( i769[2], i769[3] )
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i773 = data
  i772.color = new pc.Color(i773[0], i773[1], i773[2], i773[3])
  i772.time = i773[4]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i777 = data
  i776.alpha = i777[0]
  i776.time = i777[1]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i778 = root || new pc.ParticleSystemColorOverLifetime()
  var i779 = data
  i778.enabled = !!i779[0]
  i778.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i779[1], i778.color)
  return i778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i780 = root || new pc.ParticleSystemEmitter()
  var i781 = data
  i780.enabled = !!i781[0]
  i780.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[1], i780.rateOverTime)
  i780.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i781[2], i780.rateOverDistance)
  var i783 = i781[3]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i783[i + 0]) );
  }
  i780.bursts = i782
  return i780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i786 = root || new pc.ParticleSystemBurst()
  var i787 = data
  i786.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i787[0], i786.count)
  i786.cycleCount = i787[1]
  i786.minCount = i787[2]
  i786.maxCount = i787[3]
  i786.repeatInterval = i787[4]
  i786.time = i787[5]
  return i786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i788 = root || new pc.ParticleSystemRotationBySpeed()
  var i789 = data
  i788.enabled = !!i789[0]
  i788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[1], i788.x)
  i788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[2], i788.y)
  i788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i789[3], i788.z)
  i788.separateAxes = !!i789[4]
  i788.range = new pc.Vec2( i789[5], i789[6] )
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i790 = root || new pc.ParticleSystemRotationOverLifetime()
  var i791 = data
  i790.enabled = !!i791[0]
  i790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[1], i790.x)
  i790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[2], i790.y)
  i790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i791[3], i790.z)
  i790.separateAxes = !!i791[4]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i792 = root || new pc.ParticleSystemShape()
  var i793 = data
  i792.enabled = !!i793[0]
  i792.shapeType = i793[1]
  i792.randomDirectionAmount = i793[2]
  i792.sphericalDirectionAmount = i793[3]
  i792.randomPositionAmount = i793[4]
  i792.alignToDirection = !!i793[5]
  i792.radius = i793[6]
  i792.radiusMode = i793[7]
  i792.radiusSpread = i793[8]
  i792.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[9], i792.radiusSpeed)
  i792.radiusThickness = i793[10]
  i792.angle = i793[11]
  i792.length = i793[12]
  i792.boxThickness = new pc.Vec3( i793[13], i793[14], i793[15] )
  i792.meshShapeType = i793[16]
  request.r(i793[17], i793[18], 0, i792, 'mesh')
  request.r(i793[19], i793[20], 0, i792, 'meshRenderer')
  request.r(i793[21], i793[22], 0, i792, 'skinnedMeshRenderer')
  i792.useMeshMaterialIndex = !!i793[23]
  i792.meshMaterialIndex = i793[24]
  i792.useMeshColors = !!i793[25]
  i792.normalOffset = i793[26]
  i792.arc = i793[27]
  i792.arcMode = i793[28]
  i792.arcSpread = i793[29]
  i792.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i793[30], i792.arcSpeed)
  i792.donutRadius = i793[31]
  i792.position = new pc.Vec3( i793[32], i793[33], i793[34] )
  i792.rotation = new pc.Vec3( i793[35], i793[36], i793[37] )
  i792.scale = new pc.Vec3( i793[38], i793[39], i793[40] )
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i794 = root || new pc.ParticleSystemSizeBySpeed()
  var i795 = data
  i794.enabled = !!i795[0]
  i794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[1], i794.x)
  i794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[2], i794.y)
  i794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i795[3], i794.z)
  i794.separateAxes = !!i795[4]
  i794.range = new pc.Vec2( i795[5], i795[6] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i796 = root || new pc.ParticleSystemSizeOverLifetime()
  var i797 = data
  i796.enabled = !!i797[0]
  i796.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[1], i796.x)
  i796.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[2], i796.y)
  i796.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i797[3], i796.z)
  i796.separateAxes = !!i797[4]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i798 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i799 = data
  i798.enabled = !!i799[0]
  i798.mode = i799[1]
  i798.animation = i799[2]
  i798.numTilesX = i799[3]
  i798.numTilesY = i799[4]
  i798.useRandomRow = !!i799[5]
  i798.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[6], i798.frameOverTime)
  i798.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i799[7], i798.startFrame)
  i798.cycleCount = i799[8]
  i798.rowIndex = i799[9]
  i798.flipU = i799[10]
  i798.flipV = i799[11]
  i798.spriteCount = i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 2, i800, '')
  }
  i798.sprites = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i804 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i805 = data
  i804.enabled = !!i805[0]
  i804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[1], i804.x)
  i804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[2], i804.y)
  i804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[3], i804.z)
  i804.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[4], i804.radial)
  i804.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[5], i804.speedModifier)
  i804.space = i805[6]
  i804.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[7], i804.orbitalX)
  i804.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[8], i804.orbitalY)
  i804.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[9], i804.orbitalZ)
  i804.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[10], i804.orbitalOffsetX)
  i804.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[11], i804.orbitalOffsetY)
  i804.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i805[12], i804.orbitalOffsetZ)
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i806 = root || new pc.ParticleSystemNoise()
  var i807 = data
  i806.enabled = !!i807[0]
  i806.separateAxes = !!i807[1]
  i806.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[2], i806.strengthX)
  i806.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[3], i806.strengthY)
  i806.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[4], i806.strengthZ)
  i806.frequency = i807[5]
  i806.damping = !!i807[6]
  i806.octaveCount = i807[7]
  i806.octaveMultiplier = i807[8]
  i806.octaveScale = i807[9]
  i806.quality = i807[10]
  i806.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[11], i806.scrollSpeed)
  i806.scrollSpeedMultiplier = i807[12]
  i806.remapEnabled = !!i807[13]
  i806.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[14], i806.remapX)
  i806.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[15], i806.remapY)
  i806.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[16], i806.remapZ)
  i806.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[17], i806.positionAmount)
  i806.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[18], i806.rotationAmount)
  i806.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i807[19], i806.sizeAmount)
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i808 = root || new pc.ParticleSystemInheritVelocity()
  var i809 = data
  i808.enabled = !!i809[0]
  i808.mode = i809[1]
  i808.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i809[2], i808.curve)
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i810 = root || new pc.ParticleSystemForceOverLifetime()
  var i811 = data
  i810.enabled = !!i811[0]
  i810.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[1], i810.x)
  i810.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[2], i810.y)
  i810.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i811[3], i810.z)
  i810.space = i811[4]
  i810.randomized = !!i811[5]
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i812 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i813 = data
  i812.enabled = !!i813[0]
  i812.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[1], i812.limit)
  i812.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[2], i812.limitX)
  i812.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[3], i812.limitY)
  i812.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[4], i812.limitZ)
  i812.dampen = i813[5]
  i812.separateAxes = !!i813[6]
  i812.space = i813[7]
  i812.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i813[8], i812.drag)
  i812.multiplyDragByParticleSize = !!i813[9]
  i812.multiplyDragByParticleVelocity = !!i813[10]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i815 = data
  i814.enabled = !!i815[0]
  request.r(i815[1], i815[2], 0, i814, 'sharedMaterial')
  var i817 = i815[3]
  var i816 = []
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 2, i816, '')
  }
  i814.sharedMaterials = i816
  i814.receiveShadows = !!i815[4]
  i814.shadowCastingMode = i815[5]
  i814.sortingLayerID = i815[6]
  i814.sortingOrder = i815[7]
  i814.lightmapIndex = i815[8]
  i814.lightmapSceneIndex = i815[9]
  i814.lightmapScaleOffset = new pc.Vec4( i815[10], i815[11], i815[12], i815[13] )
  i814.lightProbeUsage = i815[14]
  i814.reflectionProbeUsage = i815[15]
  request.r(i815[16], i815[17], 0, i814, 'mesh')
  i814.meshCount = i815[18]
  i814.activeVertexStreamsCount = i815[19]
  i814.alignment = i815[20]
  i814.renderMode = i815[21]
  i814.sortMode = i815[22]
  i814.lengthScale = i815[23]
  i814.velocityScale = i815[24]
  i814.cameraVelocityScale = i815[25]
  i814.normalDirection = i815[26]
  i814.sortingFudge = i815[27]
  i814.minParticleSize = i815[28]
  i814.maxParticleSize = i815[29]
  i814.pivot = new pc.Vec3( i815[30], i815[31], i815[32] )
  request.r(i815[33], i815[34], 0, i814, 'trailMaterial')
  return i814
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i818 = root || request.c( 'BulletTrail' )
  var i819 = data
  i818.Speed = i819[0]
  i818.LifeTime = i819[1]
  request.r(i819[2], i819[3], 0, i818, '_trail')
  i818._trailStartScale = new pc.Vec3( i819[4], i819[5], i819[6] )
  i818._trailMaxScale = new pc.Vec3( i819[7], i819[8], i819[9] )
  i818._trailLengthAtMaxScale = i819[10]
  return i818
}

Deserializers["BotPlayitaParachute"] = function (request, data, root) {
  var i820 = root || request.c( 'BotPlayitaParachute' )
  var i821 = data
  i820.Speed = i821[0]
  i820._groundLayer = UnityEngine.LayerMask.FromIntegerValue( i821[1] )
  request.r(i821[2], i821[3], 0, i820, '_parachuteScale')
  i820._distanceOpenParachute = i821[4]
  i820._distanceCloseParachute = i821[5]
  request.r(i821[6], i821[7], 0, i820, '_finiteStateMachine')
  request.r(i821[8], i821[9], 0, i820, '_stateTransitionManager')
  request.r(i821[10], i821[11], 0, i820, '_stateConditionManager')
  request.r(i821[12], i821[13], 0, i820, '_botNetwork')
  request.r(i821[14], i821[15], 0, i820, '_animator')
  request.r(i821[16], i821[17], 0, i820, '_muzzle')
  request.r(i821[18], i821[19], 0, i820, '_bullet')
  i820._target = new pc.Vec3( i821[20], i821[21], i821[22] )
  request.r(i821[23], i821[24], 0, i820, '_healthBarRenderer')
  request.r(i821[25], i821[26], 0, i820, '_takeSource')
  request.r(i821[27], i821[28], 0, i820, '_hitSource')
  return i820
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i822 = root || request.c( 'UICrosshairItem' )
  var i823 = data
  request.r(i823[0], i823[1], 0, i822, 'CrosshairRectTransform')
  i822._distanceMax = i823[2]
  i822._distanceMin = i823[3]
  i822._speedShrink = i823[4]
  i822._currentSpeed = i823[5]
  i822._rateOnMove = i823[6]
  i822._rateOnAttack = i823[7]
  return i822
}

Deserializers["Effect"] = function (request, data, root) {
  var i824 = root || request.c( 'Effect' )
  var i825 = data
  var i827 = i825[0]
  var i826 = []
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 2, i826, '')
  }
  i824.particles = i826
  i824._lifeTime = i825[1]
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i831 = data
  i830.name = i831[0]
  i830.atlasId = i831[1]
  i830.mipmapCount = i831[2]
  i830.hdr = !!i831[3]
  i830.size = i831[4]
  i830.anisoLevel = i831[5]
  i830.filterMode = i831[6]
  i830.wrapMode = i831[7]
  var i833 = i831[8]
  var i832 = []
  for(var i = 0; i < i833.length; i += 4) {
    i832.push( UnityEngine.Rect.MinMaxRect(i833[i + 0], i833[i + 1], i833[i + 2], i833[i + 3]) );
  }
  i830.rects = i832
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i837 = data
  i836.name = i837[0]
  i836.index = i837[1]
  i836.startup = !!i837[2]
  return i836
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i838 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'm_FirstSelected')
  i838.m_sendNavigationEvents = !!i839[2]
  i838.m_DragThreshold = i839[3]
  return i838
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i841 = data
  i840.m_HorizontalAxis = i841[0]
  i840.m_VerticalAxis = i841[1]
  i840.m_SubmitButton = i841[2]
  i840.m_CancelButton = i841[3]
  i840.m_InputActionsPerSecond = i841[4]
  i840.m_RepeatDelay = i841[5]
  i840.m_ForceModuleActive = !!i841[6]
  i840.m_SendPointerHoverToParent = !!i841[7]
  return i840
}

Deserializers["UIManager"] = function (request, data, root) {
  var i842 = root || request.c( 'UIManager' )
  var i843 = data
  i842.url = i843[0]
  request.r(i843[1], i843[2], 0, i842, 'InGame')
  request.r(i843[3], i843[4], 0, i842, 'TotalBotText')
  i842.TotalBotinConfig = i843[5]
  request.r(i843[6], i843[7], 0, i842, 'process')
  request.r(i843[8], i843[9], 0, i842, 'gameProcess')
  request.r(i843[10], i843[11], 0, i842, 'tapToPlay')
  return i842
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i844 = root || request.c( 'UnityEngine.UI.Outline' )
  var i845 = data
  i844.m_EffectColor = new pc.Color(i845[0], i845[1], i845[2], i845[3])
  i844.m_EffectDistance = new pc.Vec2( i845[4], i845[5] )
  i844.m_UseGraphicAlpha = !!i845[6]
  return i844
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i846 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i847 = data
  i846.m_Spacing = i847[0]
  i846.m_ChildForceExpandWidth = !!i847[1]
  i846.m_ChildForceExpandHeight = !!i847[2]
  i846.m_ChildControlWidth = !!i847[3]
  i846.m_ChildControlHeight = !!i847[4]
  i846.m_ChildScaleWidth = !!i847[5]
  i846.m_ChildScaleHeight = !!i847[6]
  i846.m_ReverseArrangement = !!i847[7]
  i846.m_Padding = UnityEngine.RectOffset.FromPaddings(i847[8], i847[9], i847[10], i847[11])
  i846.m_ChildAlignment = i847[12]
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.type = i849[1]
  i848.color = new pc.Color(i849[2], i849[3], i849[4], i849[5])
  i848.cullingMask = i849[6]
  i848.intensity = i849[7]
  i848.range = i849[8]
  i848.spotAngle = i849[9]
  i848.shadows = i849[10]
  i848.shadowNormalBias = i849[11]
  i848.shadowBias = i849[12]
  i848.shadowStrength = i849[13]
  i848.shadowResolution = i849[14]
  i848.lightmapBakeType = i849[15]
  i848.renderMode = i849[16]
  request.r(i849[17], i849[18], 0, i848, 'cookie')
  i848.cookieSize = i849[19]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i851 = data
  i850.enabled = !!i851[0]
  i850.isTrigger = !!i851[1]
  request.r(i851[2], i851[3], 0, i850, 'material')
  request.r(i851[4], i851[5], 0, i850, 'sharedMesh')
  i850.convex = !!i851[6]
  return i850
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i852 = root || request.c( 'PlayerView' )
  var i853 = data
  request.r(i853[0], i853[1], 0, i852, '_mainRoot')
  request.r(i853[2], i853[3], 0, i852, '_head')
  i852._sensitivity = i853[4]
  i852._slerpFactor = i853[5]
  i852._viewHorizontalThreshold = new pc.Vec2( i853[6], i853[7] )
  i852._viewVerticalThreshold = new pc.Vec2( i853[8], i853[9] )
  i852._initRotate = new pc.Vec2( i853[10], i853[11] )
  i852._totalRotate = new pc.Vec2( i853[12], i853[13] )
  return i852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i855 = data
  i854.enabled = !!i855[0]
  i854.aspect = i855[1]
  i854.orthographic = !!i855[2]
  i854.orthographicSize = i855[3]
  i854.backgroundColor = new pc.Color(i855[4], i855[5], i855[6], i855[7])
  i854.nearClipPlane = i855[8]
  i854.farClipPlane = i855[9]
  i854.fieldOfView = i855[10]
  i854.depth = i855[11]
  i854.clearFlags = i855[12]
  i854.cullingMask = i855[13]
  i854.rect = i855[14]
  request.r(i855[15], i855[16], 0, i854, 'targetTexture')
  i854.usePhysicalProperties = !!i855[17]
  i854.focalLength = i855[18]
  i854.sensorSize = new pc.Vec2( i855[19], i855[20] )
  i854.lensShift = new pc.Vec2( i855[21], i855[22] )
  i854.gateFit = i855[23]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i857 = data
  i856.playAutomatically = !!i857[0]
  request.r(i857[1], i857[2], 0, i856, 'clip')
  var i859 = i857[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 2, i858, '')
  }
  i856.clips = i858
  i856.wrapMode = i857[4]
  i856.enabled = !!i857[5]
  return i856
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i862 = root || request.c( 'WeaponController' )
  var i863 = data
  i862._layerMask = UnityEngine.LayerMask.FromIntegerValue( i863[0] )
  i862._damage = i863[1]
  i862._timeSinceLastShoot = i863[2]
  request.r(i863[3], i863[4], 0, i862, '_muzzleTrans')
  request.r(i863[5], i863[6], 0, i862, '_animation')
  request.r(i863[7], i863[8], 0, i862, '_bullet')
  request.r(i863[9], i863[10], 0, i862, '_muzzleFlash')
  request.r(i863[11], i863[12], 0, i862, '_audioClip')
  request.r(i863[13], i863[14], 0, i862, '_audioSource')
  request.r(i863[15], i863[16], 0, i862, '_effect')
  i862._isShowCard = !!i863[17]
  i862.radius = i863[18]
  return i862
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i864 = root || request.c( 'AudioManager' )
  var i865 = data
  var i867 = i865[0]
  var i866 = []
  for(var i = 0; i < i867.length; i += 2) {
  request.r(i867[i + 0], i867[i + 1], 2, i866, '')
  }
  i864.AttackSounds = i866
  var i869 = i865[1]
  var i868 = []
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 2, i868, '')
  }
  i864.HitSounds = i868
  return i864
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i872 = root || request.c( 'ConfigManager' )
  var i873 = data
  var i875 = i873[0]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('StepData', i875[i + 0]) );
  }
  i872._stepDatas = i874
  return i872
}

Deserializers["StepData"] = function (request, data, root) {
  var i878 = root || request.c( 'StepData' )
  var i879 = data
  i878.NumberBot = i879[0]
  i878.NumberParachute = i879[1]
  return i878
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i880 = root || request.c( 'GamePlayManager' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, '_normalSpawn')
  request.r(i881[2], i881[3], 0, i880, '_parachuteSpawn')
  return i880
}

Deserializers["PathManager"] = function (request, data, root) {
  var i882 = root || request.c( 'PathManager' )
  var i883 = data
  var i885 = i883[0]
  var i884 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i885.length; i += 1) {
    i884.add(request.d('Path', i885[i + 0]));
  }
  i882._paths = i884
  var i887 = i883[1]
  var i886 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i887.length; i += 1) {
    i886.add(request.d('Path', i887[i + 0]));
  }
  i882._pathsParachute = i886
  return i882
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i890 = root || request.c( 'ObjectPool' )
  var i891 = data
  return i890
}

Deserializers["BotManager"] = function (request, data, root) {
  var i892 = root || request.c( 'BotManager' )
  var i893 = data
  var i895 = i893[0]
  var i894 = new (System.Collections.Generic.List$1(Bridge.ns('BotNetwork')))
  for(var i = 0; i < i895.length; i += 2) {
  request.r(i895[i + 0], i895[i + 1], 1, i894, '')
  }
  i892._botNetworks = i894
  i892.totalBotOnMap = i893[1]
  return i892
}

Deserializers["Spawn"] = function (request, data, root) {
  var i898 = root || request.c( 'Spawn' )
  var i899 = data
  request.r(i899[0], i899[1], 0, i898, '_botPrefab')
  i898._spawnInterval = i899[2]
  i898._upper = i899[3]
  i898.type = i899[4]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i901 = data
  i900.ambientIntensity = i901[0]
  i900.reflectionIntensity = i901[1]
  i900.ambientMode = i901[2]
  i900.ambientLight = new pc.Color(i901[3], i901[4], i901[5], i901[6])
  i900.ambientSkyColor = new pc.Color(i901[7], i901[8], i901[9], i901[10])
  i900.ambientGroundColor = new pc.Color(i901[11], i901[12], i901[13], i901[14])
  i900.ambientEquatorColor = new pc.Color(i901[15], i901[16], i901[17], i901[18])
  i900.fogColor = new pc.Color(i901[19], i901[20], i901[21], i901[22])
  i900.fogEndDistance = i901[23]
  i900.fogStartDistance = i901[24]
  i900.fogDensity = i901[25]
  i900.fog = !!i901[26]
  request.r(i901[27], i901[28], 0, i900, 'skybox')
  i900.fogMode = i901[29]
  var i903 = i901[30]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i903[i + 0]) );
  }
  i900.lightmaps = i902
  i900.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i901[31], i900.lightProbes)
  i900.lightmapsMode = i901[32]
  i900.mixedBakeMode = i901[33]
  i900.environmentLightingMode = i901[34]
  i900.ambientProbe = new pc.SphericalHarmonicsL2(i901[35])
  i900.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i901[36])
  i900.useReferenceAmbientProbe = !!i901[37]
  request.r(i901[38], i901[39], 0, i900, 'customReflection')
  request.r(i901[40], i901[41], 0, i900, 'defaultReflection')
  i900.defaultReflectionMode = i901[42]
  i900.defaultReflectionResolution = i901[43]
  i900.sunLightObjectId = i901[44]
  i900.pixelLightCount = i901[45]
  i900.defaultReflectionHDR = !!i901[46]
  i900.hasLightDataAsset = !!i901[47]
  i900.hasManualGenerate = !!i901[48]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i907 = data
  request.r(i907[0], i907[1], 0, i906, 'lightmapColor')
  request.r(i907[2], i907[3], 0, i906, 'lightmapDirection')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i908 = root || new UnityEngine.LightProbes()
  var i909 = data
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i917 = data
  var i919 = i917[0]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i919[i + 0]));
  }
  i916.ShaderCompilationErrors = i918
  i916.name = i917[1]
  i916.guid = i917[2]
  var i921 = i917[3]
  var i920 = []
  for(var i = 0; i < i921.length; i += 1) {
    i920.push( i921[i + 0] );
  }
  i916.shaderDefinedKeywords = i920
  var i923 = i917[4]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i923[i + 0]) );
  }
  i916.passes = i922
  var i925 = i917[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i925[i + 0]) );
  }
  i916.usePasses = i924
  var i927 = i917[6]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i927[i + 0]) );
  }
  i916.defaultParameterValues = i926
  request.r(i917[7], i917[8], 0, i916, 'unityFallbackShader')
  i916.readDepth = !!i917[9]
  i916.isCreatedByShaderGraph = !!i917[10]
  i916.usedBatchUniforms = i917[11]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i931 = data
  i930.shaderName = i931[0]
  i930.errorMessage = i931[1]
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i936 = root || new pc.UnityShaderPass()
  var i937 = data
  i936.id = i937[0]
  i936.subShaderIndex = i937[1]
  i936.name = i937[2]
  i936.passType = i937[3]
  i936.grabPassTextureName = i937[4]
  i936.usePass = !!i937[5]
  i936.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[6], i936.zTest)
  i936.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[7], i936.zWrite)
  i936.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[8], i936.culling)
  i936.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i937[9], i936.blending)
  i936.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i937[10], i936.alphaBlending)
  i936.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[11], i936.colorWriteMask)
  i936.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[12], i936.offsetUnits)
  i936.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[13], i936.offsetFactor)
  i936.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[14], i936.stencilRef)
  i936.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[15], i936.stencilReadMask)
  i936.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i937[16], i936.stencilWriteMask)
  i936.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i937[17], i936.stencilOp)
  i936.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i937[18], i936.stencilOpFront)
  i936.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i937[19], i936.stencilOpBack)
  var i939 = i937[20]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i939[i + 0]) );
  }
  i936.tags = i938
  var i941 = i937[21]
  var i940 = []
  for(var i = 0; i < i941.length; i += 1) {
    i940.push( i941[i + 0] );
  }
  i936.passDefinedKeywords = i940
  var i943 = i937[22]
  var i942 = []
  for(var i = 0; i < i943.length; i += 1) {
    i942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i943[i + 0]) );
  }
  i936.passDefinedKeywordGroups = i942
  var i945 = i937[23]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i945[i + 0]) );
  }
  i936.variants = i944
  var i947 = i937[24]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i947[i + 0]) );
  }
  i936.excludedVariants = i946
  i936.hasDepthReader = !!i937[25]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i949 = data
  i948.val = i949[0]
  i948.name = i949[1]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i951 = data
  i950.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[0], i950.src)
  i950.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[1], i950.dst)
  i950.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i951[2], i950.op)
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i953 = data
  i952.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[0], i952.pass)
  i952.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[1], i952.fail)
  i952.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[2], i952.zFail)
  i952.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i953[3], i952.comp)
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i957 = data
  i956.name = i957[0]
  i956.value = i957[1]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i961 = data
  var i963 = i961[0]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( i963[i + 0] );
  }
  i960.keywords = i962
  i960.hasDiscard = !!i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i967 = data
  i966.passId = i967[0]
  i966.subShaderIndex = i967[1]
  var i969 = i967[2]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( i969[i + 0] );
  }
  i966.keywords = i968
  i966.vertexProgram = i967[3]
  i966.fragmentProgram = i967[4]
  i966.readDepth = !!i967[5]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i973 = data
  request.r(i973[0], i973[1], 0, i972, 'shader')
  i972.pass = i973[2]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i977 = data
  i976.name = i977[0]
  i976.type = i977[1]
  i976.value = new pc.Vec4( i977[2], i977[3], i977[4], i977[5] )
  i976.textureValue = i977[6]
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i979 = data
  i978.name = i979[0]
  request.r(i979[1], i979[2], 0, i978, 'texture')
  i978.aabb = i979[3]
  i978.vertices = i979[4]
  i978.triangles = i979[5]
  i978.textureRect = UnityEngine.Rect.MinMaxRect(i979[6], i979[7], i979[8], i979[9])
  i978.packedRect = UnityEngine.Rect.MinMaxRect(i979[10], i979[11], i979[12], i979[13])
  i978.border = new pc.Vec4( i979[14], i979[15], i979[16], i979[17] )
  i978.transparency = i979[18]
  i978.bounds = i979[19]
  i978.pixelsPerUnit = i979[20]
  i978.textureWidth = i979[21]
  i978.textureHeight = i979[22]
  i978.nativeSize = new pc.Vec2( i979[23], i979[24] )
  i978.pivot = new pc.Vec2( i979[25], i979[26] )
  i978.textureRectOffset = new pc.Vec2( i979[27], i979[28] )
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i981 = data
  i980.name = i981[0]
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i983 = data
  i982.name = i983[0]
  i982.wrapMode = i983[1]
  i982.isLooping = !!i983[2]
  i982.length = i983[3]
  var i985 = i983[4]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i985[i + 0]) );
  }
  i982.curves = i984
  var i987 = i983[5]
  var i986 = []
  for(var i = 0; i < i987.length; i += 1) {
    i986.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i987[i + 0]) );
  }
  i982.events = i986
  i982.halfPrecision = !!i983[6]
  i982.frameRate = i983[7]
  i982.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i983[8], i982.localBounds)
  i982.hasMuscleCurves = !!i983[9]
  var i989 = i983[10]
  var i988 = []
  for(var i = 0; i < i989.length; i += 1) {
    i988.push( i989[i + 0] );
  }
  i982.clipMuscleConstant = i988
  i982.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i983[11], i982.clipBindingConstant)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i993 = data
  i992.path = i993[0]
  i992.componentType = i993[1]
  i992.property = i993[2]
  i992.keys = i993[3]
  var i995 = i993[4]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i995[i + 0]) );
  }
  i992.objectReferenceKeys = i994
  return i992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i999 = data
  i998.functionName = i999[0]
  i998.floatParameter = i999[1]
  i998.intParameter = i999[2]
  i998.stringParameter = i999[3]
  request.r(i999[4], i999[5], 0, i998, 'objectReferenceParameter')
  i998.time = i999[6]
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1001 = data
  i1000.center = new pc.Vec3( i1001[0], i1001[1], i1001[2] )
  i1000.extends = new pc.Vec3( i1001[3], i1001[4], i1001[5] )
  return i1000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1005 = data
  var i1007 = i1005[0]
  var i1006 = []
  for(var i = 0; i < i1007.length; i += 1) {
    i1006.push( i1007[i + 0] );
  }
  i1004.genericBindings = i1006
  var i1009 = i1005[1]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( i1009[i + 0] );
  }
  i1004.pptrCurveMapping = i1008
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1013 = data
  i1012.time = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'value')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1015 = data
  i1014.name = i1015[0]
  i1014.ascent = i1015[1]
  i1014.originalLineHeight = i1015[2]
  i1014.fontSize = i1015[3]
  var i1017 = i1015[4]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1017[i + 0]) );
  }
  i1014.characterInfo = i1016
  request.r(i1015[5], i1015[6], 0, i1014, 'texture')
  i1014.originalFontSize = i1015[7]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1021 = data
  i1020.index = i1021[0]
  i1020.advance = i1021[1]
  i1020.bearing = i1021[2]
  i1020.glyphWidth = i1021[3]
  i1020.glyphHeight = i1021[4]
  i1020.minX = i1021[5]
  i1020.maxX = i1021[6]
  i1020.minY = i1021[7]
  i1020.maxY = i1021[8]
  i1020.uvBottomLeftX = i1021[9]
  i1020.uvBottomLeftY = i1021[10]
  i1020.uvBottomRightX = i1021[11]
  i1020.uvBottomRightY = i1021[12]
  i1020.uvTopLeftX = i1021[13]
  i1020.uvTopLeftY = i1021[14]
  i1020.uvTopRightX = i1021[15]
  i1020.uvTopRightY = i1021[16]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1023 = data
  i1022.name = i1023[0]
  var i1025 = i1023[1]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1025[i + 0]) );
  }
  i1022.states = i1024
  var i1027 = i1023[2]
  var i1026 = []
  for(var i = 0; i < i1027.length; i += 1) {
    i1026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1027[i + 0]) );
  }
  i1022.layers = i1026
  var i1029 = i1023[3]
  var i1028 = []
  for(var i = 0; i < i1029.length; i += 1) {
    i1028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1029[i + 0]) );
  }
  i1022.parameters = i1028
  i1022.animationClips = i1023[4]
  i1022.HasSubStateMachines = !!i1023[5]
  i1022.avatarUnsupported = i1023[6]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1033 = data
  i1032.cycleOffset = i1033[0]
  i1032.cycleOffsetParameter = i1033[1]
  i1032.cycleOffsetParameterActive = !!i1033[2]
  i1032.mirror = !!i1033[3]
  i1032.mirrorParameter = i1033[4]
  i1032.mirrorParameterActive = !!i1033[5]
  i1032.motionId = i1033[6]
  i1032.nameHash = i1033[7]
  i1032.fullPathHash = i1033[8]
  i1032.speed = i1033[9]
  i1032.speedParameter = i1033[10]
  i1032.speedParameterActive = !!i1033[11]
  i1032.tag = i1033[12]
  i1032.name = i1033[13]
  i1032.layer = i1033[14]
  i1032.writeDefaultValues = !!i1033[15]
  var i1035 = i1033[16]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1035[i + 0]) );
  }
  i1032.transitions = i1034
  var i1037 = i1033[17]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 2) {
  request.r(i1037[i + 0], i1037[i + 1], 2, i1036, '')
  }
  i1032.behaviours = i1036
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1041 = data
  i1040.fullPath = i1041[0]
  i1040.canTransitionToSelf = !!i1041[1]
  i1040.duration = i1041[2]
  i1040.exitTime = i1041[3]
  i1040.hasExitTime = !!i1041[4]
  i1040.hasFixedDuration = !!i1041[5]
  i1040.interruptionSource = i1041[6]
  i1040.offset = i1041[7]
  i1040.orderedInterruption = !!i1041[8]
  i1040.destinationStateNameHash = i1041[9]
  i1040.destinationStateMachineId = i1041[10]
  i1040.isExit = !!i1041[11]
  i1040.mute = !!i1041[12]
  i1040.solo = !!i1041[13]
  var i1043 = i1041[14]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1043[i + 0]) );
  }
  i1040.conditions = i1042
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1047 = data
  i1046.mode = i1047[0]
  i1046.parameter = i1047[1]
  i1046.threshold = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1053 = data
  i1052.blendingMode = i1053[0]
  i1052.defaultWeight = i1053[1]
  i1052.name = i1053[2]
  i1052.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1053[3], i1052.stateMachine)
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1055 = data
  i1054.id = i1055[0]
  i1054.defaultStateNameHash = i1055[1]
  var i1057 = i1055[2]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1057[i + 0]) );
  }
  i1054.entryTransitions = i1056
  var i1059 = i1055[3]
  var i1058 = []
  for(var i = 0; i < i1059.length; i += 1) {
    i1058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1059[i + 0]) );
  }
  i1054.anyStateTransitions = i1058
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1063 = data
  i1062.destinationStateNameHash = i1063[0]
  i1062.destinationStateMachineId = i1063[1]
  i1062.isExit = !!i1063[2]
  i1062.mute = !!i1063[3]
  i1062.solo = !!i1063[4]
  var i1065 = i1063[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1065[i + 0]) );
  }
  i1062.conditions = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1069 = data
  i1068.defaultBool = !!i1069[0]
  i1068.defaultFloat = i1069[1]
  i1068.defaultInt = i1069[2]
  i1068.name = i1069[3]
  i1068.nameHash = i1069[4]
  i1068.type = i1069[5]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1073[i + 0]) );
  }
  i1070.files = i1072
  i1070.componentToPrefabIds = i1071[1]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1077 = data
  i1076.path = i1077[0]
  request.r(i1077[1], i1077[2], 0, i1076, 'unityObject')
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1079 = data
  var i1081 = i1079[0]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 1) {
    i1080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1081[i + 0]) );
  }
  i1078.scriptsExecutionOrder = i1080
  var i1083 = i1079[1]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1083[i + 0]) );
  }
  i1078.sortingLayers = i1082
  var i1085 = i1079[2]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1085[i + 0]) );
  }
  i1078.cullingLayers = i1084
  i1078.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1079[3], i1078.timeSettings)
  i1078.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1079[4], i1078.physicsSettings)
  i1078.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1079[5], i1078.physics2DSettings)
  i1078.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1079[6], i1078.qualitySettings)
  i1078.enableRealtimeShadows = !!i1079[7]
  i1078.enableAutoInstancing = !!i1079[8]
  i1078.enableDynamicBatching = !!i1079[9]
  i1078.lightmapEncodingQuality = i1079[10]
  i1078.desiredColorSpace = i1079[11]
  var i1087 = i1079[12]
  var i1086 = []
  for(var i = 0; i < i1087.length; i += 1) {
    i1086.push( i1087[i + 0] );
  }
  i1078.allTags = i1086
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1091 = data
  i1090.name = i1091[0]
  i1090.value = i1091[1]
  return i1090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1095 = data
  i1094.id = i1095[0]
  i1094.name = i1095[1]
  i1094.value = i1095[2]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1099 = data
  i1098.id = i1099[0]
  i1098.name = i1099[1]
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1101 = data
  i1100.fixedDeltaTime = i1101[0]
  i1100.maximumDeltaTime = i1101[1]
  i1100.timeScale = i1101[2]
  i1100.maximumParticleTimestep = i1101[3]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1103 = data
  i1102.gravity = new pc.Vec3( i1103[0], i1103[1], i1103[2] )
  i1102.defaultSolverIterations = i1103[3]
  i1102.bounceThreshold = i1103[4]
  i1102.autoSyncTransforms = !!i1103[5]
  i1102.autoSimulation = !!i1103[6]
  var i1105 = i1103[7]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1105[i + 0]) );
  }
  i1102.collisionMatrix = i1104
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1109 = data
  i1108.enabled = !!i1109[0]
  i1108.layerId = i1109[1]
  i1108.otherLayerId = i1109[2]
  return i1108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'material')
  i1110.gravity = new pc.Vec2( i1111[2], i1111[3] )
  i1110.positionIterations = i1111[4]
  i1110.velocityIterations = i1111[5]
  i1110.velocityThreshold = i1111[6]
  i1110.maxLinearCorrection = i1111[7]
  i1110.maxAngularCorrection = i1111[8]
  i1110.maxTranslationSpeed = i1111[9]
  i1110.maxRotationSpeed = i1111[10]
  i1110.baumgarteScale = i1111[11]
  i1110.baumgarteTOIScale = i1111[12]
  i1110.timeToSleep = i1111[13]
  i1110.linearSleepTolerance = i1111[14]
  i1110.angularSleepTolerance = i1111[15]
  i1110.defaultContactOffset = i1111[16]
  i1110.autoSimulation = !!i1111[17]
  i1110.queriesHitTriggers = !!i1111[18]
  i1110.queriesStartInColliders = !!i1111[19]
  i1110.callbacksOnDisable = !!i1111[20]
  i1110.reuseCollisionCallbacks = !!i1111[21]
  i1110.autoSyncTransforms = !!i1111[22]
  var i1113 = i1111[23]
  var i1112 = []
  for(var i = 0; i < i1113.length; i += 1) {
    i1112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1113[i + 0]) );
  }
  i1110.collisionMatrix = i1112
  return i1110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1117 = data
  i1116.enabled = !!i1117[0]
  i1116.layerId = i1117[1]
  i1116.otherLayerId = i1117[2]
  return i1116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1119 = data
  var i1121 = i1119[0]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1121[i + 0]) );
  }
  i1118.qualityLevels = i1120
  var i1123 = i1119[1]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( i1123[i + 0] );
  }
  i1118.names = i1122
  i1118.shadows = i1119[2]
  i1118.anisotropicFiltering = i1119[3]
  i1118.antiAliasing = i1119[4]
  i1118.lodBias = i1119[5]
  i1118.shadowCascades = i1119[6]
  i1118.shadowDistance = i1119[7]
  i1118.shadowmaskMode = i1119[8]
  i1118.shadowProjection = i1119[9]
  i1118.shadowResolution = i1119[10]
  i1118.softParticles = !!i1119[11]
  i1118.softVegetation = !!i1119[12]
  i1118.activeColorSpace = i1119[13]
  i1118.desiredColorSpace = i1119[14]
  i1118.masterTextureLimit = i1119[15]
  i1118.maxQueuedFrames = i1119[16]
  i1118.particleRaycastBudget = i1119[17]
  i1118.pixelLightCount = i1119[18]
  i1118.realtimeReflectionProbes = !!i1119[19]
  i1118.shadowCascade2Split = i1119[20]
  i1118.shadowCascade4Split = new pc.Vec3( i1119[21], i1119[22], i1119[23] )
  i1118.streamingMipmapsActive = !!i1119[24]
  i1118.vSyncCount = i1119[25]
  i1118.asyncUploadBufferSize = i1119[26]
  i1118.asyncUploadTimeSlice = i1119[27]
  i1118.billboardsFaceCameraPosition = !!i1119[28]
  i1118.shadowNearPlaneOffset = i1119[29]
  i1118.streamingMipmapsMemoryBudget = i1119[30]
  i1118.maximumLODLevel = i1119[31]
  i1118.streamingMipmapsAddAllCameras = !!i1119[32]
  i1118.streamingMipmapsMaxLevelReduction = i1119[33]
  i1118.streamingMipmapsRenderersPerFrame = i1119[34]
  i1118.resolutionScalingFixedDPIFactor = i1119[35]
  i1118.streamingMipmapsMaxFileIORequests = i1119[36]
  i1118.currentQualityLevel = i1119[37]
  return i1118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1127 = data
  i1126.name = i1127[0]
  var i1129 = i1127[1]
  var i1128 = []
  for(var i = 0; i < i1129.length; i += 1) {
    i1128.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1129[i + 0]) );
  }
  i1126.tos = i1128
  var i1131 = i1127[2]
  var i1130 = []
  for(var i = 0; i < i1131.length; i += 1) {
    i1130.push( i1131[i + 0] );
  }
  i1126.constant = i1130
  i1126.isValid = !!i1127[3]
  i1126.isHuman = !!i1127[4]
  i1126.hasRootMotion = !!i1127[5]
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1135 = data
  i1134.hash = i1135[0]
  i1134.path = i1135[1]
  return i1134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1139 = data
  i1138.weight = i1139[0]
  i1138.vertices = i1139[1]
  i1138.normals = i1139[2]
  i1138.tangents = i1139[3]
  return i1138
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.CanvasGroup":{"m_Alpha":0,"m_Interactable":1,"m_BlocksRaycasts":2,"m_IgnoreParentGroups":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[5],"74":[55],"75":[76],"77":[76],"78":[76],"79":[76],"80":[76],"81":[76],"82":[76],"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[84],"91":[84],"92":[84],"93":[84],"94":[84],"95":[84],"96":[84],"97":[55],"98":[9],"99":[100],"101":[100],"11":[10],"102":[10],"103":[10],"14":[11],"26":[24,10],"25":[10],"13":[11],"104":[10],"105":[10],"49":[10],"106":[10],"107":[10],"108":[10],"109":[10],"21":[10],"110":[10],"18":[24,10],"111":[10],"112":[10],"113":[10],"114":[10],"20":[24,10],"115":[10],"116":[45],"117":[45],"46":[45],"118":[45],"119":[55],"120":[55]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.MonoBehaviour","EndCardController","UnityEngine.Font","UnityEngine.UI.RawImage","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.UI.Mask","UnityEditor.Animations.AnimatorController","EndCardSetScale","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.CanvasGroup","GamePlayManager","BotNetwork","FiniteStateMachine","StateTransitionManager","StateConditionManager","BotPlayita","UnityEngine.GameObject","UnityEngine.AudioSource","UnityEngine.LODGroup","UnityEngine.BoxCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BulletTrail","BotPlayitaParachute","UICrosshairItem","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UIManager","UnityEngine.UI.Outline","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.AudioListener","UnityEngine.AudioClip","UnityEngine.Light","UnityEngine.MeshCollider","PlayerView","UnityEngine.Camera","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","AudioManager","ConfigManager","Spawn","PathManager","ObjectPool","BotManager","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "34.8";

Deserializers.lunaVersion = "5.5.0";

Deserializers.lunaSHA = "aa8b6dc467b3eacc9168b32bb8d120b69b67a956";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "20146";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1457";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3095";

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

Deserializers.buildID = "11255874-03a5-49ea-a9cc-26270e223ede";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

