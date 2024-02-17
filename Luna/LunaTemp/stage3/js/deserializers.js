var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.JointSpring' )
  var i1639 = data
  i1638.spring = i1639[0]
  i1638.damper = i1639[1]
  i1638.targetPosition = i1639[2]
  return i1638
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointMotor' )
  var i1641 = data
  i1640.m_TargetVelocity = i1641[0]
  i1640.m_Force = i1641[1]
  i1640.m_FreeSpin = i1641[2]
  return i1640
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.JointLimits' )
  var i1643 = data
  i1642.m_Min = i1643[0]
  i1642.m_Max = i1643[1]
  i1642.m_Bounciness = i1643[2]
  i1642.m_BounceMinVelocity = i1643[3]
  i1642.m_ContactDistance = i1643[4]
  i1642.minBounce = i1643[5]
  i1642.maxBounce = i1643[6]
  return i1642
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointDrive' )
  var i1645 = data
  i1644.m_PositionSpring = i1645[0]
  i1644.m_PositionDamper = i1645[1]
  i1644.m_MaximumForce = i1645[2]
  return i1644
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1647 = data
  i1646.m_Spring = i1647[0]
  i1646.m_Damper = i1647[1]
  return i1646
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1649 = data
  i1648.m_Limit = i1649[0]
  i1648.m_Bounciness = i1649[1]
  i1648.m_ContactDistance = i1649[2]
  return i1648
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1651 = data
  i1650.m_ExtremumSlip = i1651[0]
  i1650.m_ExtremumValue = i1651[1]
  i1650.m_AsymptoteSlip = i1651[2]
  i1650.m_AsymptoteValue = i1651[3]
  i1650.m_Stiffness = i1651[4]
  return i1650
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1652 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1653 = data
  i1652.m_LowerAngle = i1653[0]
  i1652.m_UpperAngle = i1653[1]
  return i1652
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1655 = data
  i1654.m_MotorSpeed = i1655[0]
  i1654.m_MaximumMotorTorque = i1655[1]
  return i1654
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1657 = data
  i1656.m_DampingRatio = i1657[0]
  i1656.m_Frequency = i1657[1]
  i1656.m_Angle = i1657[2]
  return i1656
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1659 = data
  i1658.m_LowerTranslation = i1659[0]
  i1658.m_UpperTranslation = i1659[1]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1660 = root || new pc.UnityMaterial()
  var i1661 = data
  i1660.name = i1661[0]
  request.r(i1661[1], i1661[2], 0, i1660, 'shader')
  i1660.renderQueue = i1661[3]
  i1660.enableInstancing = !!i1661[4]
  var i1663 = i1661[5]
  var i1662 = []
  for(var i = 0; i < i1663.length; i += 1) {
    i1662.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1663[i + 0]) );
  }
  i1660.floatParameters = i1662
  var i1665 = i1661[6]
  var i1664 = []
  for(var i = 0; i < i1665.length; i += 1) {
    i1664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1665[i + 0]) );
  }
  i1660.colorParameters = i1664
  var i1667 = i1661[7]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1667[i + 0]) );
  }
  i1660.vectorParameters = i1666
  var i1669 = i1661[8]
  var i1668 = []
  for(var i = 0; i < i1669.length; i += 1) {
    i1668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1669[i + 0]) );
  }
  i1660.textureParameters = i1668
  var i1671 = i1661[9]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1671[i + 0]) );
  }
  i1660.materialFlags = i1670
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1675 = data
  i1674.name = i1675[0]
  i1674.value = i1675[1]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1679 = data
  i1678.name = i1679[0]
  i1678.value = new pc.Color(i1679[1], i1679[2], i1679[3], i1679[4])
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1683 = data
  i1682.name = i1683[0]
  i1682.value = new pc.Vec4( i1683[1], i1683[2], i1683[3], i1683[4] )
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1687 = data
  i1686.name = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'value')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.enabled = !!i1691[1]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1693 = data
  i1692.name = i1693[0]
  i1692.width = i1693[1]
  i1692.height = i1693[2]
  i1692.mipmapCount = i1693[3]
  i1692.anisoLevel = i1693[4]
  i1692.filterMode = i1693[5]
  i1692.hdr = !!i1693[6]
  i1692.format = i1693[7]
  i1692.wrapMode = i1693[8]
  i1692.alphaIsTransparency = !!i1693[9]
  i1692.alphaSource = i1693[10]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1695 = data
  i1694.position = new pc.Vec3( i1695[0], i1695[1], i1695[2] )
  i1694.scale = new pc.Vec3( i1695[3], i1695[4], i1695[5] )
  i1694.rotation = new pc.Quat(i1695[6], i1695[7], i1695[8], i1695[9])
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1697 = data
  request.r(i1697[0], i1697[1], 0, i1696, 'sharedMesh')
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1699 = data
  request.r(i1699[0], i1699[1], 0, i1698, 'additionalVertexStreams')
  i1698.enabled = !!i1699[2]
  request.r(i1699[3], i1699[4], 0, i1698, 'sharedMaterial')
  var i1701 = i1699[5]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 2) {
  request.r(i1701[i + 0], i1701[i + 1], 2, i1700, '')
  }
  i1698.sharedMaterials = i1700
  i1698.receiveShadows = !!i1699[6]
  i1698.shadowCastingMode = i1699[7]
  i1698.sortingLayerID = i1699[8]
  i1698.sortingOrder = i1699[9]
  i1698.lightmapIndex = i1699[10]
  i1698.lightmapSceneIndex = i1699[11]
  i1698.lightmapScaleOffset = new pc.Vec4( i1699[12], i1699[13], i1699[14], i1699[15] )
  i1698.lightProbeUsage = i1699[16]
  i1698.reflectionProbeUsage = i1699[17]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.tagId = i1705[1]
  i1704.enabled = !!i1705[2]
  i1704.isStatic = !!i1705[3]
  i1704.layer = i1705[4]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1707 = data
  i1706.name = i1707[0]
  i1706.halfPrecision = !!i1707[1]
  i1706.vertexCount = i1707[2]
  i1706.aabb = i1707[3]
  var i1709 = i1707[4]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( !!i1709[i + 0] );
  }
  i1706.streams = i1708
  i1706.vertices = i1707[5]
  var i1711 = i1707[6]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1711[i + 0]) );
  }
  i1706.subMeshes = i1710
  var i1713 = i1707[7]
  var i1712 = []
  for(var i = 0; i < i1713.length; i += 16) {
    i1712.push( new pc.Mat4().setData(i1713[i + 0], i1713[i + 1], i1713[i + 2], i1713[i + 3],  i1713[i + 4], i1713[i + 5], i1713[i + 6], i1713[i + 7],  i1713[i + 8], i1713[i + 9], i1713[i + 10], i1713[i + 11],  i1713[i + 12], i1713[i + 13], i1713[i + 14], i1713[i + 15]) );
  }
  i1706.bindposes = i1712
  var i1715 = i1707[8]
  var i1714 = []
  for(var i = 0; i < i1715.length; i += 1) {
    i1714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1715[i + 0]) );
  }
  i1706.blendShapes = i1714
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1721 = data
  i1720.triangles = i1721[0]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1727 = data
  i1726.name = i1727[0]
  var i1729 = i1727[1]
  var i1728 = []
  for(var i = 0; i < i1729.length; i += 1) {
    i1728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1729[i + 0]) );
  }
  i1726.frames = i1728
  return i1726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'animatorController')
  request.r(i1731[2], i1731[3], 0, i1730, 'avatar')
  i1730.updateMode = i1731[4]
  i1730.hasTransformHierarchy = !!i1731[5]
  i1730.applyRootMotion = !!i1731[6]
  var i1733 = i1731[7]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 2) {
  request.r(i1733[i + 0], i1733[i + 1], 2, i1732, '')
  }
  i1730.humanBones = i1732
  i1730.enabled = !!i1731[8]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1737 = data
  i1736.enabled = !!i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'sharedMaterial')
  var i1739 = i1737[3]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 2) {
  request.r(i1739[i + 0], i1739[i + 1], 2, i1738, '')
  }
  i1736.sharedMaterials = i1738
  i1736.receiveShadows = !!i1737[4]
  i1736.shadowCastingMode = i1737[5]
  i1736.sortingLayerID = i1737[6]
  i1736.sortingOrder = i1737[7]
  i1736.lightmapIndex = i1737[8]
  i1736.lightmapSceneIndex = i1737[9]
  i1736.lightmapScaleOffset = new pc.Vec4( i1737[10], i1737[11], i1737[12], i1737[13] )
  i1736.lightProbeUsage = i1737[14]
  i1736.reflectionProbeUsage = i1737[15]
  request.r(i1737[16], i1737[17], 0, i1736, 'sharedMesh')
  var i1741 = i1737[18]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 2) {
  request.r(i1741[i + 0], i1741[i + 1], 2, i1740, '')
  }
  i1736.bones = i1740
  i1736.updateWhenOffscreen = !!i1737[19]
  i1736.localBounds = i1737[20]
  request.r(i1737[21], i1737[22], 0, i1736, 'rootBone')
  var i1743 = i1737[23]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1743[i + 0]) );
  }
  i1736.blendShapesWeights = i1742
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1747 = data
  i1746.weight = i1747[0]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1749 = data
  i1748.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1749[0], i1748.main)
  i1748.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1749[1], i1748.colorBySpeed)
  i1748.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1749[2], i1748.colorOverLifetime)
  i1748.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1749[3], i1748.emission)
  i1748.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1749[4], i1748.rotationBySpeed)
  i1748.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1749[5], i1748.rotationOverLifetime)
  i1748.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1749[6], i1748.shape)
  i1748.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1749[7], i1748.sizeBySpeed)
  i1748.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1749[8], i1748.sizeOverLifetime)
  i1748.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1749[9], i1748.textureSheetAnimation)
  i1748.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1749[10], i1748.velocityOverLifetime)
  i1748.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1749[11], i1748.noise)
  i1748.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1749[12], i1748.inheritVelocity)
  i1748.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1749[13], i1748.forceOverLifetime)
  i1748.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1749[14], i1748.limitVelocityOverLifetime)
  i1748.useAutoRandomSeed = !!i1749[15]
  i1748.randomSeed = i1749[16]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemMain()
  var i1751 = data
  i1750.duration = i1751[0]
  i1750.loop = !!i1751[1]
  i1750.prewarm = !!i1751[2]
  i1750.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[3], i1750.startDelay)
  i1750.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[4], i1750.startLifetime)
  i1750.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[5], i1750.startSpeed)
  i1750.startSize3D = !!i1751[6]
  i1750.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[7], i1750.startSizeX)
  i1750.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[8], i1750.startSizeY)
  i1750.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[9], i1750.startSizeZ)
  i1750.startRotation3D = !!i1751[10]
  i1750.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[11], i1750.startRotationX)
  i1750.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[12], i1750.startRotationY)
  i1750.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[13], i1750.startRotationZ)
  i1750.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1751[14], i1750.startColor)
  i1750.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[15], i1750.gravityModifier)
  i1750.simulationSpace = i1751[16]
  request.r(i1751[17], i1751[18], 0, i1750, 'customSimulationSpace')
  i1750.simulationSpeed = i1751[19]
  i1750.useUnscaledTime = !!i1751[20]
  i1750.scalingMode = i1751[21]
  i1750.playOnAwake = !!i1751[22]
  i1750.maxParticles = i1751[23]
  i1750.emitterVelocityMode = i1751[24]
  i1750.stopAction = i1751[25]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1752 = root || new pc.MinMaxCurve()
  var i1753 = data
  i1752.mode = i1753[0]
  i1752.curveMin = new pc.AnimationCurve( { keys_flow: i1753[1] } )
  i1752.curveMax = new pc.AnimationCurve( { keys_flow: i1753[2] } )
  i1752.curveMultiplier = i1753[3]
  i1752.constantMin = i1753[4]
  i1752.constantMax = i1753[5]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1754 = root || new pc.MinMaxGradient()
  var i1755 = data
  i1754.mode = i1755[0]
  i1754.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1755[1], i1754.gradientMin)
  i1754.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1755[2], i1754.gradientMax)
  i1754.colorMin = new pc.Color(i1755[3], i1755[4], i1755[5], i1755[6])
  i1754.colorMax = new pc.Color(i1755[7], i1755[8], i1755[9], i1755[10])
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1757 = data
  i1756.mode = i1757[0]
  var i1759 = i1757[1]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1759[i + 0]) );
  }
  i1756.colorKeys = i1758
  var i1761 = i1757[2]
  var i1760 = []
  for(var i = 0; i < i1761.length; i += 1) {
    i1760.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1761[i + 0]) );
  }
  i1756.alphaKeys = i1760
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemColorBySpeed()
  var i1763 = data
  i1762.enabled = !!i1763[0]
  i1762.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1763[1], i1762.color)
  i1762.range = new pc.Vec2( i1763[2], i1763[3] )
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1767 = data
  i1766.color = new pc.Color(i1767[0], i1767[1], i1767[2], i1767[3])
  i1766.time = i1767[4]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1771 = data
  i1770.alpha = i1771[0]
  i1770.time = i1771[1]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1772 = root || new pc.ParticleSystemColorOverLifetime()
  var i1773 = data
  i1772.enabled = !!i1773[0]
  i1772.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1773[1], i1772.color)
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1774 = root || new pc.ParticleSystemEmitter()
  var i1775 = data
  i1774.enabled = !!i1775[0]
  i1774.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[1], i1774.rateOverTime)
  i1774.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1775[2], i1774.rateOverDistance)
  var i1777 = i1775[3]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1777[i + 0]) );
  }
  i1774.bursts = i1776
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1780 = root || new pc.ParticleSystemBurst()
  var i1781 = data
  i1780.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[0], i1780.count)
  i1780.cycleCount = i1781[1]
  i1780.minCount = i1781[2]
  i1780.maxCount = i1781[3]
  i1780.repeatInterval = i1781[4]
  i1780.time = i1781[5]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemRotationBySpeed()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[1], i1782.x)
  i1782.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[2], i1782.y)
  i1782.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[3], i1782.z)
  i1782.separateAxes = !!i1783[4]
  i1782.range = new pc.Vec2( i1783[5], i1783[6] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.x)
  i1784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.y)
  i1784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.z)
  i1784.separateAxes = !!i1785[4]
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemShape()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.shapeType = i1787[1]
  i1786.randomDirectionAmount = i1787[2]
  i1786.sphericalDirectionAmount = i1787[3]
  i1786.randomPositionAmount = i1787[4]
  i1786.alignToDirection = !!i1787[5]
  i1786.radius = i1787[6]
  i1786.radiusMode = i1787[7]
  i1786.radiusSpread = i1787[8]
  i1786.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[9], i1786.radiusSpeed)
  i1786.radiusThickness = i1787[10]
  i1786.angle = i1787[11]
  i1786.length = i1787[12]
  i1786.boxThickness = new pc.Vec3( i1787[13], i1787[14], i1787[15] )
  i1786.meshShapeType = i1787[16]
  request.r(i1787[17], i1787[18], 0, i1786, 'mesh')
  request.r(i1787[19], i1787[20], 0, i1786, 'meshRenderer')
  request.r(i1787[21], i1787[22], 0, i1786, 'skinnedMeshRenderer')
  i1786.useMeshMaterialIndex = !!i1787[23]
  i1786.meshMaterialIndex = i1787[24]
  i1786.useMeshColors = !!i1787[25]
  i1786.normalOffset = i1787[26]
  i1786.arc = i1787[27]
  i1786.arcMode = i1787[28]
  i1786.arcSpread = i1787[29]
  i1786.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[30], i1786.arcSpeed)
  i1786.donutRadius = i1787[31]
  i1786.position = new pc.Vec3( i1787[32], i1787[33], i1787[34] )
  i1786.rotation = new pc.Vec3( i1787[35], i1787[36], i1787[37] )
  i1786.scale = new pc.Vec3( i1787[38], i1787[39], i1787[40] )
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemSizeBySpeed()
  var i1789 = data
  i1788.enabled = !!i1789[0]
  i1788.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[1], i1788.x)
  i1788.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[2], i1788.y)
  i1788.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[3], i1788.z)
  i1788.separateAxes = !!i1789[4]
  i1788.range = new pc.Vec2( i1789[5], i1789[6] )
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1790 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1791 = data
  i1790.enabled = !!i1791[0]
  i1790.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[1], i1790.x)
  i1790.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[2], i1790.y)
  i1790.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1791[3], i1790.z)
  i1790.separateAxes = !!i1791[4]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1792 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1793 = data
  i1792.enabled = !!i1793[0]
  i1792.mode = i1793[1]
  i1792.animation = i1793[2]
  i1792.numTilesX = i1793[3]
  i1792.numTilesY = i1793[4]
  i1792.useRandomRow = !!i1793[5]
  i1792.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[6], i1792.frameOverTime)
  i1792.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1793[7], i1792.startFrame)
  i1792.cycleCount = i1793[8]
  i1792.rowIndex = i1793[9]
  i1792.flipU = i1793[10]
  i1792.flipV = i1793[11]
  i1792.spriteCount = i1793[12]
  var i1795 = i1793[13]
  var i1794 = []
  for(var i = 0; i < i1795.length; i += 2) {
  request.r(i1795[i + 0], i1795[i + 1], 2, i1794, '')
  }
  i1792.sprites = i1794
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1798 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1799 = data
  i1798.enabled = !!i1799[0]
  i1798.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[1], i1798.x)
  i1798.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[2], i1798.y)
  i1798.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[3], i1798.z)
  i1798.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[4], i1798.radial)
  i1798.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[5], i1798.speedModifier)
  i1798.space = i1799[6]
  i1798.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[7], i1798.orbitalX)
  i1798.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[8], i1798.orbitalY)
  i1798.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[9], i1798.orbitalZ)
  i1798.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[10], i1798.orbitalOffsetX)
  i1798.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[11], i1798.orbitalOffsetY)
  i1798.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[12], i1798.orbitalOffsetZ)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemNoise()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.separateAxes = !!i1801[1]
  i1800.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.strengthX)
  i1800.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.strengthY)
  i1800.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[4], i1800.strengthZ)
  i1800.frequency = i1801[5]
  i1800.damping = !!i1801[6]
  i1800.octaveCount = i1801[7]
  i1800.octaveMultiplier = i1801[8]
  i1800.octaveScale = i1801[9]
  i1800.quality = i1801[10]
  i1800.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[11], i1800.scrollSpeed)
  i1800.scrollSpeedMultiplier = i1801[12]
  i1800.remapEnabled = !!i1801[13]
  i1800.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[14], i1800.remapX)
  i1800.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[15], i1800.remapY)
  i1800.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[16], i1800.remapZ)
  i1800.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[17], i1800.positionAmount)
  i1800.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[18], i1800.rotationAmount)
  i1800.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[19], i1800.sizeAmount)
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemInheritVelocity()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.mode = i1803[1]
  i1802.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.curve)
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1804 = root || new pc.ParticleSystemForceOverLifetime()
  var i1805 = data
  i1804.enabled = !!i1805[0]
  i1804.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[1], i1804.x)
  i1804.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[2], i1804.y)
  i1804.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1805[3], i1804.z)
  i1804.space = i1805[4]
  i1804.randomized = !!i1805[5]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1806 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1807 = data
  i1806.enabled = !!i1807[0]
  i1806.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[1], i1806.limit)
  i1806.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[2], i1806.limitX)
  i1806.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[3], i1806.limitY)
  i1806.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[4], i1806.limitZ)
  i1806.dampen = i1807[5]
  i1806.separateAxes = !!i1807[6]
  i1806.space = i1807[7]
  i1806.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1807[8], i1806.drag)
  i1806.multiplyDragByParticleSize = !!i1807[9]
  i1806.multiplyDragByParticleVelocity = !!i1807[10]
  return i1806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1809 = data
  i1808.enabled = !!i1809[0]
  request.r(i1809[1], i1809[2], 0, i1808, 'sharedMaterial')
  var i1811 = i1809[3]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 2) {
  request.r(i1811[i + 0], i1811[i + 1], 2, i1810, '')
  }
  i1808.sharedMaterials = i1810
  i1808.receiveShadows = !!i1809[4]
  i1808.shadowCastingMode = i1809[5]
  i1808.sortingLayerID = i1809[6]
  i1808.sortingOrder = i1809[7]
  i1808.lightmapIndex = i1809[8]
  i1808.lightmapSceneIndex = i1809[9]
  i1808.lightmapScaleOffset = new pc.Vec4( i1809[10], i1809[11], i1809[12], i1809[13] )
  i1808.lightProbeUsage = i1809[14]
  i1808.reflectionProbeUsage = i1809[15]
  request.r(i1809[16], i1809[17], 0, i1808, 'mesh')
  i1808.meshCount = i1809[18]
  i1808.activeVertexStreamsCount = i1809[19]
  i1808.alignment = i1809[20]
  i1808.renderMode = i1809[21]
  i1808.sortMode = i1809[22]
  i1808.lengthScale = i1809[23]
  i1808.velocityScale = i1809[24]
  i1808.cameraVelocityScale = i1809[25]
  i1808.normalDirection = i1809[26]
  i1808.sortingFudge = i1809[27]
  i1808.minParticleSize = i1809[28]
  i1808.maxParticleSize = i1809[29]
  i1808.pivot = new pc.Vec3( i1809[30], i1809[31], i1809[32] )
  request.r(i1809[33], i1809[34], 0, i1808, 'trailMaterial')
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1813 = data
  request.r(i1813[0], i1813[1], 0, i1812, 'clip')
  request.r(i1813[2], i1813[3], 0, i1812, 'outputAudioMixerGroup')
  i1812.playOnAwake = !!i1813[4]
  i1812.loop = !!i1813[5]
  i1812.time = i1813[6]
  i1812.volume = i1813[7]
  i1812.pitch = i1813[8]
  i1812.enabled = !!i1813[9]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1815 = data
  i1814.enabled = !!i1815[0]
  i1814.isTrigger = !!i1815[1]
  request.r(i1815[2], i1815[3], 0, i1814, 'material')
  request.r(i1815[4], i1815[5], 0, i1814, 'sharedMesh')
  i1814.convex = !!i1815[6]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1817 = data
  i1816.enabled = !!i1817[0]
  i1816.aspect = i1817[1]
  i1816.orthographic = !!i1817[2]
  i1816.orthographicSize = i1817[3]
  i1816.backgroundColor = new pc.Color(i1817[4], i1817[5], i1817[6], i1817[7])
  i1816.nearClipPlane = i1817[8]
  i1816.farClipPlane = i1817[9]
  i1816.fieldOfView = i1817[10]
  i1816.depth = i1817[11]
  i1816.clearFlags = i1817[12]
  i1816.cullingMask = i1817[13]
  i1816.rect = i1817[14]
  request.r(i1817[15], i1817[16], 0, i1816, 'targetTexture')
  i1816.usePhysicalProperties = !!i1817[17]
  i1816.focalLength = i1817[18]
  i1816.sensorSize = new pc.Vec2( i1817[19], i1817[20] )
  i1816.lensShift = new pc.Vec2( i1817[21], i1817[22] )
  i1816.gateFit = i1817[23]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1819 = data
  i1818.center = new pc.Vec3( i1819[0], i1819[1], i1819[2] )
  i1818.size = new pc.Vec3( i1819[3], i1819[4], i1819[5] )
  i1818.enabled = !!i1819[6]
  i1818.isTrigger = !!i1819[7]
  request.r(i1819[8], i1819[9], 0, i1818, 'material')
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1821 = data
  i1820.pivot = new pc.Vec2( i1821[0], i1821[1] )
  i1820.anchorMin = new pc.Vec2( i1821[2], i1821[3] )
  i1820.anchorMax = new pc.Vec2( i1821[4], i1821[5] )
  i1820.sizeDelta = new pc.Vec2( i1821[6], i1821[7] )
  i1820.anchoredPosition3D = new pc.Vec3( i1821[8], i1821[9], i1821[10] )
  i1820.rotation = new pc.Quat(i1821[11], i1821[12], i1821[13], i1821[14])
  i1820.scale = new pc.Vec3( i1821[15], i1821[16], i1821[17] )
  return i1820
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i1822 = root || request.c( 'UICrosshairItem' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'CrosshairRectTransform')
  i1822._distanceMax = i1823[2]
  i1822._distanceMin = i1823[3]
  i1822._speedShrink = i1823[4]
  i1822._currentSpeed = i1823[5]
  i1822._rateOnMove = i1823[6]
  i1822._rateOnAttack = i1823[7]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1825 = data
  i1824.cullTransparentMesh = !!i1825[0]
  return i1824
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.UI.Image' )
  var i1827 = data
  request.r(i1827[0], i1827[1], 0, i1826, 'm_Sprite')
  i1826.m_Type = i1827[2]
  i1826.m_PreserveAspect = !!i1827[3]
  i1826.m_FillCenter = !!i1827[4]
  i1826.m_FillMethod = i1827[5]
  i1826.m_FillAmount = i1827[6]
  i1826.m_FillClockwise = !!i1827[7]
  i1826.m_FillOrigin = i1827[8]
  i1826.m_UseSpriteMesh = !!i1827[9]
  i1826.m_PixelsPerUnitMultiplier = i1827[10]
  request.r(i1827[11], i1827[12], 0, i1826, 'm_Material')
  i1826.m_Maskable = !!i1827[13]
  i1826.m_Color = new pc.Color(i1827[14], i1827[15], i1827[16], i1827[17])
  i1826.m_RaycastTarget = !!i1827[18]
  i1826.m_RaycastPadding = new pc.Vec4( i1827[19], i1827[20], i1827[21], i1827[22] )
  return i1826
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i1828 = root || request.c( 'BulletTrail' )
  var i1829 = data
  i1828.Speed = i1829[0]
  i1828.LifeTime = i1829[1]
  request.r(i1829[2], i1829[3], 0, i1828, '_trail')
  i1828._trailStartScale = new pc.Vec3( i1829[4], i1829[5], i1829[6] )
  i1828._trailMaxScale = new pc.Vec3( i1829[7], i1829[8], i1829[9] )
  i1828._trailLengthAtMaxScale = i1829[10]
  return i1828
}

Deserializers["Effect"] = function (request, data, root) {
  var i1830 = root || request.c( 'Effect' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 2) {
  request.r(i1833[i + 0], i1833[i + 1], 2, i1832, '')
  }
  i1830.particles = i1832
  i1830._lifeTime = i1831[1]
  return i1830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1837 = data
  i1836.name = i1837[0]
  i1836.atlasId = i1837[1]
  i1836.mipmapCount = i1837[2]
  i1836.hdr = !!i1837[3]
  i1836.size = i1837[4]
  i1836.anisoLevel = i1837[5]
  i1836.filterMode = i1837[6]
  i1836.wrapMode = i1837[7]
  var i1839 = i1837[8]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 4) {
    i1838.push( UnityEngine.Rect.MinMaxRect(i1839[i + 0], i1839[i + 1], i1839[i + 2], i1839[i + 3]) );
  }
  i1836.rects = i1838
  return i1836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.index = i1843[1]
  i1842.startup = !!i1843[2]
  return i1842
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1844 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'm_FirstSelected')
  i1844.m_sendNavigationEvents = !!i1845[2]
  i1844.m_DragThreshold = i1845[3]
  return i1844
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1846 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1847 = data
  i1846.m_HorizontalAxis = i1847[0]
  i1846.m_VerticalAxis = i1847[1]
  i1846.m_SubmitButton = i1847[2]
  i1846.m_CancelButton = i1847[3]
  i1846.m_InputActionsPerSecond = i1847[4]
  i1846.m_RepeatDelay = i1847[5]
  i1846.m_ForceModuleActive = !!i1847[6]
  i1846.m_SendPointerHoverToParent = !!i1847[7]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1849 = data
  i1848.enabled = !!i1849[0]
  i1848.planeDistance = i1849[1]
  i1848.referencePixelsPerUnit = i1849[2]
  i1848.isFallbackOverlay = !!i1849[3]
  i1848.renderMode = i1849[4]
  i1848.renderOrder = i1849[5]
  i1848.sortingLayerName = i1849[6]
  i1848.sortingOrder = i1849[7]
  i1848.scaleFactor = i1849[8]
  request.r(i1849[9], i1849[10], 0, i1848, 'worldCamera')
  i1848.overrideSorting = !!i1849[11]
  i1848.pixelPerfect = !!i1849[12]
  i1848.targetDisplay = i1849[13]
  i1848.overridePixelPerfect = !!i1849[14]
  return i1848
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1851 = data
  i1850.m_UiScaleMode = i1851[0]
  i1850.m_ReferencePixelsPerUnit = i1851[1]
  i1850.m_ScaleFactor = i1851[2]
  i1850.m_ReferenceResolution = new pc.Vec2( i1851[3], i1851[4] )
  i1850.m_ScreenMatchMode = i1851[5]
  i1850.m_MatchWidthOrHeight = i1851[6]
  i1850.m_PhysicalUnit = i1851[7]
  i1850.m_FallbackScreenDPI = i1851[8]
  i1850.m_DefaultSpriteDPI = i1851[9]
  i1850.m_DynamicPixelsPerUnit = i1851[10]
  i1850.m_PresetInfoIsWorld = !!i1851[11]
  return i1850
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1853 = data
  i1852.m_IgnoreReversedGraphics = !!i1853[0]
  i1852.m_BlockingObjects = i1853[1]
  i1852.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1853[2] )
  return i1852
}

Deserializers["UIManager"] = function (request, data, root) {
  var i1854 = root || request.c( 'UIManager' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'StepText')
  i1854.url = i1855[2]
  request.r(i1855[3], i1855[4], 0, i1854, 'InGame')
  request.r(i1855[5], i1855[6], 0, i1854, 'EndGame')
  return i1854
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.Text' )
  var i1857 = data
  i1856.m_FontData = request.d('UnityEngine.UI.FontData', i1857[0], i1856.m_FontData)
  i1856.m_Text = i1857[1]
  request.r(i1857[2], i1857[3], 0, i1856, 'm_Material')
  i1856.m_Maskable = !!i1857[4]
  i1856.m_Color = new pc.Color(i1857[5], i1857[6], i1857[7], i1857[8])
  i1856.m_RaycastTarget = !!i1857[9]
  i1856.m_RaycastPadding = new pc.Vec4( i1857[10], i1857[11], i1857[12], i1857[13] )
  return i1856
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'm_Font')
  i1858.m_FontSize = i1859[2]
  i1858.m_FontStyle = i1859[3]
  i1858.m_BestFit = !!i1859[4]
  i1858.m_MinSize = i1859[5]
  i1858.m_MaxSize = i1859[6]
  i1858.m_Alignment = i1859[7]
  i1858.m_AlignByGeometry = !!i1859[8]
  i1858.m_RichText = !!i1859[9]
  i1858.m_HorizontalOverflow = i1859[10]
  i1858.m_VerticalOverflow = i1859[11]
  i1858.m_LineSpacing = i1859[12]
  return i1858
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.Button' )
  var i1861 = data
  i1860.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1861[0], i1860.m_OnClick)
  i1860.m_Navigation = request.d('UnityEngine.UI.Navigation', i1861[1], i1860.m_Navigation)
  i1860.m_Transition = i1861[2]
  i1860.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1861[3], i1860.m_Colors)
  i1860.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1861[4], i1860.m_SpriteState)
  i1860.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1861[5], i1860.m_AnimationTriggers)
  i1860.m_Interactable = !!i1861[6]
  request.r(i1861[7], i1861[8], 0, i1860, 'm_TargetGraphic')
  return i1860
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1863 = data
  i1862.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1863[0], i1862.m_PersistentCalls)
  return i1862
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1865 = data
  var i1867 = i1865[0]
  var i1866 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1867.length; i += 1) {
    i1866.add(request.d('UnityEngine.Events.PersistentCall', i1867[i + 0]));
  }
  i1864.m_Calls = i1866
  return i1864
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'm_Target')
  i1870.m_TargetAssemblyTypeName = i1871[2]
  i1870.m_MethodName = i1871[3]
  i1870.m_Mode = i1871[4]
  i1870.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1871[5], i1870.m_Arguments)
  i1870.m_CallState = i1871[6]
  return i1870
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1872 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1873 = data
  request.r(i1873[0], i1873[1], 0, i1872, 'm_ObjectArgument')
  i1872.m_ObjectArgumentAssemblyTypeName = i1873[2]
  i1872.m_IntArgument = i1873[3]
  i1872.m_FloatArgument = i1873[4]
  i1872.m_StringArgument = i1873[5]
  i1872.m_BoolArgument = !!i1873[6]
  return i1872
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1875 = data
  i1874.m_Mode = i1875[0]
  i1874.m_WrapAround = !!i1875[1]
  request.r(i1875[2], i1875[3], 0, i1874, 'm_SelectOnUp')
  request.r(i1875[4], i1875[5], 0, i1874, 'm_SelectOnDown')
  request.r(i1875[6], i1875[7], 0, i1874, 'm_SelectOnLeft')
  request.r(i1875[8], i1875[9], 0, i1874, 'm_SelectOnRight')
  return i1874
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1877 = data
  i1876.m_NormalColor = new pc.Color(i1877[0], i1877[1], i1877[2], i1877[3])
  i1876.m_HighlightedColor = new pc.Color(i1877[4], i1877[5], i1877[6], i1877[7])
  i1876.m_PressedColor = new pc.Color(i1877[8], i1877[9], i1877[10], i1877[11])
  i1876.m_SelectedColor = new pc.Color(i1877[12], i1877[13], i1877[14], i1877[15])
  i1876.m_DisabledColor = new pc.Color(i1877[16], i1877[17], i1877[18], i1877[19])
  i1876.m_ColorMultiplier = i1877[20]
  i1876.m_FadeDuration = i1877[21]
  return i1876
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'm_HighlightedSprite')
  request.r(i1879[2], i1879[3], 0, i1878, 'm_PressedSprite')
  request.r(i1879[4], i1879[5], 0, i1878, 'm_SelectedSprite')
  request.r(i1879[6], i1879[7], 0, i1878, 'm_DisabledSprite')
  return i1878
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1881 = data
  i1880.m_NormalTrigger = i1881[0]
  i1880.m_HighlightedTrigger = i1881[1]
  i1880.m_PressedTrigger = i1881[2]
  i1880.m_SelectedTrigger = i1881[3]
  i1880.m_DisabledTrigger = i1881[4]
  return i1880
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i1882 = root || request.c( 'BotParachute' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, '_animator')
  request.r(i1883[2], i1883[3], 0, i1882, '_muzzle')
  request.r(i1883[4], i1883[5], 0, i1882, 'bullet')
  i1882.target = new pc.Vec3( i1883[6], i1883[7], i1883[8] )
  i1882.moveIndex = i1883[9]
  i1882.isMoveDone = !!i1883[10]
  i1882.isDie = !!i1883[11]
  i1882.isMove = !!i1883[12]
  i1882.parachuteDone = !!i1883[13]
  i1882.isTakeDame = !!i1883[14]
  i1882.maxHealth = i1883[15]
  request.r(i1883[16], i1883[17], 0, i1882, 'healthBarRenderer')
  request.r(i1883[18], i1883[19], 0, i1882, '_audioSource')
  request.r(i1883[20], i1883[21], 0, i1882, '_callTeamAudioSource')
  request.r(i1883[22], i1883[23], 0, i1882, '_hitAudioSource')
  return i1882
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i1884 = root || request.c( 'ParachuteController' )
  var i1885 = data
  i1884.gravity = i1885[0]
  i1884.dragForce = i1885[1]
  i1884.objectMass = i1885[2]
  request.r(i1885[3], i1885[4], 0, i1884, '_botController')
  i1884.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1885[5] )
  request.r(i1885[6], i1885[7], 0, i1884, 'ParachuteScale')
  i1884.scaleAmount = i1885[8]
  i1884.velocity = new pc.Vec3( i1885[9], i1885[10], i1885[11] )
  i1884._distanceOpenParachute = i1885[12]
  i1884._distanceCloseParachute = i1885[13]
  return i1884
}

Deserializers["BotController"] = function (request, data, root) {
  var i1886 = root || request.c( 'BotController' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, '_animator')
  request.r(i1887[2], i1887[3], 0, i1886, '_muzzle')
  request.r(i1887[4], i1887[5], 0, i1886, 'bullet')
  i1886.target = new pc.Vec3( i1887[6], i1887[7], i1887[8] )
  i1886.moveIndex = i1887[9]
  i1886.isMoveDone = !!i1887[10]
  i1886.isDie = !!i1887[11]
  i1886.isTakeDame = !!i1887[12]
  i1886.maxHealth = i1887[13]
  request.r(i1887[14], i1887[15], 0, i1886, 'healthBarRenderer')
  request.r(i1887[16], i1887[17], 0, i1886, '_audioSource')
  request.r(i1887[18], i1887[19], 0, i1886, '_callTeamAudioSource')
  request.r(i1887[20], i1887[21], 0, i1886, '_hitAudioSource')
  return i1886
}

Deserializers["PathManager"] = function (request, data, root) {
  var i1888 = root || request.c( 'PathManager' )
  var i1889 = data
  var i1891 = i1889[0]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('Path', i1891[i + 0]));
  }
  i1888._paths = i1890
  var i1893 = i1889[1]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('Path', i1893[i + 0]));
  }
  i1888._pathsParachute = i1892
  return i1888
}

Deserializers["Path"] = function (request, data, root) {
  var i1896 = root || request.c( 'Path' )
  var i1897 = data
  i1896.IsUse = !!i1897[0]
  var i1899 = i1897[1]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1896.WayPoints = i1898
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1903 = data
  i1902.enabled = !!i1903[0]
  i1902.type = i1903[1]
  i1902.color = new pc.Color(i1903[2], i1903[3], i1903[4], i1903[5])
  i1902.cullingMask = i1903[6]
  i1902.intensity = i1903[7]
  i1902.range = i1903[8]
  i1902.spotAngle = i1903[9]
  i1902.shadows = i1903[10]
  i1902.shadowNormalBias = i1903[11]
  i1902.shadowBias = i1903[12]
  i1902.shadowStrength = i1903[13]
  i1902.shadowResolution = i1903[14]
  i1902.lightmapBakeType = i1903[15]
  i1902.renderMode = i1903[16]
  request.r(i1903[17], i1903[18], 0, i1902, 'cookie')
  i1902.cookieSize = i1903[19]
  return i1902
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i1904 = root || request.c( 'PlayerView' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, '_mainRoot')
  request.r(i1905[2], i1905[3], 0, i1904, '_head')
  i1904._sensitivity = i1905[4]
  i1904._slerpFactor = i1905[5]
  i1904._viewHorizontalThreshold = new pc.Vec2( i1905[6], i1905[7] )
  i1904._viewVerticalThreshold = new pc.Vec2( i1905[8], i1905[9] )
  i1904._initRotate = new pc.Vec2( i1905[10], i1905[11] )
  i1904._totalRotate = new pc.Vec2( i1905[12], i1905[13] )
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1907 = data
  i1906.playAutomatically = !!i1907[0]
  request.r(i1907[1], i1907[2], 0, i1906, 'clip')
  var i1909 = i1907[3]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 2) {
  request.r(i1909[i + 0], i1909[i + 1], 2, i1908, '')
  }
  i1906.clips = i1908
  i1906.wrapMode = i1907[4]
  i1906.enabled = !!i1907[5]
  return i1906
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i1912 = root || request.c( 'WeaponController' )
  var i1913 = data
  i1912.Mask = UnityEngine.LayerMask.FromIntegerValue( i1913[0] )
  i1912.damage = i1913[1]
  request.r(i1913[2], i1913[3], 0, i1912, '_muzzleTrans')
  request.r(i1913[4], i1913[5], 0, i1912, '_animation')
  request.r(i1913[6], i1913[7], 0, i1912, 'bullet')
  request.r(i1913[8], i1913[9], 0, i1912, '_muzzleFlash')
  request.r(i1913[10], i1913[11], 0, i1912, 'audioClip')
  request.r(i1913[12], i1913[13], 0, i1912, 'audioSource')
  i1912.SphereRadius = i1913[14]
  request.r(i1913[15], i1913[16], 0, i1912, 'Effect')
  return i1912
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i1914 = root || request.c( 'SpawnBot' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, '_botPrefab')
  i1914._spawnInterval = i1915[2]
  i1914._upper = i1915[3]
  return i1914
}

Deserializers["BotManager"] = function (request, data, root) {
  var i1916 = root || request.c( 'BotManager' )
  var i1917 = data
  return i1916
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i1918 = root || request.c( 'AudioManager' )
  var i1919 = data
  var i1921 = i1919[0]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 2) {
  request.r(i1921[i + 0], i1921[i + 1], 2, i1920, '')
  }
  i1918.CallTeamOnFireSounds = i1920
  var i1923 = i1919[1]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 2) {
  request.r(i1923[i + 0], i1923[i + 1], 2, i1922, '')
  }
  i1918.CallTeamSounds = i1922
  var i1925 = i1919[2]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 2) {
  request.r(i1925[i + 0], i1925[i + 1], 2, i1924, '')
  }
  i1918.AttackSounds = i1924
  var i1927 = i1919[3]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 2) {
  request.r(i1927[i + 0], i1927[i + 1], 2, i1926, '')
  }
  i1918.MissSounds = i1926
  var i1929 = i1919[4]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 2) {
  request.r(i1929[i + 0], i1929[i + 1], 2, i1928, '')
  }
  i1918.HitSounds = i1928
  return i1918
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i1932 = root || request.c( 'ConfigManager' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = []
  for(var i = 0; i < i1935.length; i += 1) {
    i1934.push( request.d('StepData', i1935[i + 0]) );
  }
  i1932._stepDatas = i1934
  return i1932
}

Deserializers["StepData"] = function (request, data, root) {
  var i1938 = root || request.c( 'StepData' )
  var i1939 = data
  i1938.NumberBot = i1939[0]
  i1938.NumberParachute = i1939[1]
  return i1938
}

Deserializers["StepManager"] = function (request, data, root) {
  var i1940 = root || request.c( 'StepManager' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, '_spawnBotNormal')
  request.r(i1941[2], i1941[3], 0, i1940, '_spawnBotParachute')
  return i1940
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i1942 = root || request.c( 'ObjectPool' )
  var i1943 = data
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1945 = data
  i1944.ambientIntensity = i1945[0]
  i1944.reflectionIntensity = i1945[1]
  i1944.ambientMode = i1945[2]
  i1944.ambientLight = new pc.Color(i1945[3], i1945[4], i1945[5], i1945[6])
  i1944.ambientSkyColor = new pc.Color(i1945[7], i1945[8], i1945[9], i1945[10])
  i1944.ambientGroundColor = new pc.Color(i1945[11], i1945[12], i1945[13], i1945[14])
  i1944.ambientEquatorColor = new pc.Color(i1945[15], i1945[16], i1945[17], i1945[18])
  i1944.fogColor = new pc.Color(i1945[19], i1945[20], i1945[21], i1945[22])
  i1944.fogEndDistance = i1945[23]
  i1944.fogStartDistance = i1945[24]
  i1944.fogDensity = i1945[25]
  i1944.fog = !!i1945[26]
  request.r(i1945[27], i1945[28], 0, i1944, 'skybox')
  i1944.fogMode = i1945[29]
  var i1947 = i1945[30]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1947[i + 0]) );
  }
  i1944.lightmaps = i1946
  i1944.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1945[31], i1944.lightProbes)
  i1944.lightmapsMode = i1945[32]
  i1944.mixedBakeMode = i1945[33]
  i1944.environmentLightingMode = i1945[34]
  i1944.ambientProbe = new pc.SphericalHarmonicsL2(i1945[35])
  i1944.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1945[36])
  i1944.useReferenceAmbientProbe = !!i1945[37]
  request.r(i1945[38], i1945[39], 0, i1944, 'customReflection')
  request.r(i1945[40], i1945[41], 0, i1944, 'defaultReflection')
  i1944.defaultReflectionMode = i1945[42]
  i1944.defaultReflectionResolution = i1945[43]
  i1944.sunLightObjectId = i1945[44]
  i1944.pixelLightCount = i1945[45]
  i1944.defaultReflectionHDR = !!i1945[46]
  i1944.hasLightDataAsset = !!i1945[47]
  i1944.hasManualGenerate = !!i1945[48]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'lightmapColor')
  request.r(i1951[2], i1951[3], 0, i1950, 'lightmapDirection')
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1952 = root || new UnityEngine.LightProbes()
  var i1953 = data
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1961 = data
  var i1963 = i1961[0]
  var i1962 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1963[i + 0]));
  }
  i1960.ShaderCompilationErrors = i1962
  i1960.name = i1961[1]
  i1960.guid = i1961[2]
  var i1965 = i1961[3]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( i1965[i + 0] );
  }
  i1960.shaderDefinedKeywords = i1964
  var i1967 = i1961[4]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1967[i + 0]) );
  }
  i1960.passes = i1966
  var i1969 = i1961[5]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1969[i + 0]) );
  }
  i1960.usePasses = i1968
  var i1971 = i1961[6]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1971[i + 0]) );
  }
  i1960.defaultParameterValues = i1970
  request.r(i1961[7], i1961[8], 0, i1960, 'unityFallbackShader')
  i1960.readDepth = !!i1961[9]
  i1960.isCreatedByShaderGraph = !!i1961[10]
  i1960.usedBatchUniforms = i1961[11]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1975 = data
  i1974.shaderName = i1975[0]
  i1974.errorMessage = i1975[1]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1980 = root || new pc.UnityShaderPass()
  var i1981 = data
  i1980.id = i1981[0]
  i1980.subShaderIndex = i1981[1]
  i1980.name = i1981[2]
  i1980.passType = i1981[3]
  i1980.grabPassTextureName = i1981[4]
  i1980.usePass = !!i1981[5]
  i1980.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[6], i1980.zTest)
  i1980.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[7], i1980.zWrite)
  i1980.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[8], i1980.culling)
  i1980.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1981[9], i1980.blending)
  i1980.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1981[10], i1980.alphaBlending)
  i1980.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[11], i1980.colorWriteMask)
  i1980.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[12], i1980.offsetUnits)
  i1980.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[13], i1980.offsetFactor)
  i1980.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[14], i1980.stencilRef)
  i1980.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[15], i1980.stencilReadMask)
  i1980.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1981[16], i1980.stencilWriteMask)
  i1980.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1981[17], i1980.stencilOp)
  i1980.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1981[18], i1980.stencilOpFront)
  i1980.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1981[19], i1980.stencilOpBack)
  var i1983 = i1981[20]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1983[i + 0]) );
  }
  i1980.tags = i1982
  var i1985 = i1981[21]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( i1985[i + 0] );
  }
  i1980.passDefinedKeywords = i1984
  var i1987 = i1981[22]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1987[i + 0]) );
  }
  i1980.passDefinedKeywordGroups = i1986
  var i1989 = i1981[23]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1989[i + 0]) );
  }
  i1980.variants = i1988
  var i1991 = i1981[24]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1991[i + 0]) );
  }
  i1980.excludedVariants = i1990
  i1980.hasDepthReader = !!i1981[25]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1993 = data
  i1992.val = i1993[0]
  i1992.name = i1993[1]
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1995 = data
  i1994.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1995[0], i1994.src)
  i1994.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1995[1], i1994.dst)
  i1994.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1995[2], i1994.op)
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1997 = data
  i1996.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[0], i1996.pass)
  i1996.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[1], i1996.fail)
  i1996.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[2], i1996.zFail)
  i1996.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[3], i1996.comp)
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2001 = data
  i2000.name = i2001[0]
  i2000.value = i2001[1]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2005 = data
  var i2007 = i2005[0]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( i2007[i + 0] );
  }
  i2004.keywords = i2006
  i2004.hasDiscard = !!i2005[1]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2011 = data
  i2010.passId = i2011[0]
  i2010.subShaderIndex = i2011[1]
  var i2013 = i2011[2]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( i2013[i + 0] );
  }
  i2010.keywords = i2012
  i2010.vertexProgram = i2011[3]
  i2010.fragmentProgram = i2011[4]
  i2010.readDepth = !!i2011[5]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2017 = data
  request.r(i2017[0], i2017[1], 0, i2016, 'shader')
  i2016.pass = i2017[2]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2020 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2021 = data
  i2020.name = i2021[0]
  i2020.type = i2021[1]
  i2020.value = new pc.Vec4( i2021[2], i2021[3], i2021[4], i2021[5] )
  i2020.textureValue = i2021[6]
  return i2020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2023 = data
  i2022.name = i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'texture')
  i2022.aabb = i2023[3]
  i2022.vertices = i2023[4]
  i2022.triangles = i2023[5]
  i2022.textureRect = UnityEngine.Rect.MinMaxRect(i2023[6], i2023[7], i2023[8], i2023[9])
  i2022.packedRect = UnityEngine.Rect.MinMaxRect(i2023[10], i2023[11], i2023[12], i2023[13])
  i2022.border = new pc.Vec4( i2023[14], i2023[15], i2023[16], i2023[17] )
  i2022.transparency = i2023[18]
  i2022.bounds = i2023[19]
  i2022.pixelsPerUnit = i2023[20]
  i2022.textureWidth = i2023[21]
  i2022.textureHeight = i2023[22]
  i2022.nativeSize = new pc.Vec2( i2023[23], i2023[24] )
  i2022.pivot = new pc.Vec2( i2023[25], i2023[26] )
  i2022.textureRectOffset = new pc.Vec2( i2023[27], i2023[28] )
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2025 = data
  i2024.name = i2025[0]
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2027 = data
  i2026.name = i2027[0]
  i2026.wrapMode = i2027[1]
  i2026.isLooping = !!i2027[2]
  i2026.length = i2027[3]
  var i2029 = i2027[4]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2029[i + 0]) );
  }
  i2026.curves = i2028
  var i2031 = i2027[5]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2031[i + 0]) );
  }
  i2026.events = i2030
  i2026.halfPrecision = !!i2027[6]
  i2026.frameRate = i2027[7]
  i2026.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2027[8], i2026.localBounds)
  i2026.hasMuscleCurves = !!i2027[9]
  var i2033 = i2027[10]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( i2033[i + 0] );
  }
  i2026.clipMuscleConstant = i2032
  i2026.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2027[11], i2026.clipBindingConstant)
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2037 = data
  i2036.path = i2037[0]
  i2036.componentType = i2037[1]
  i2036.property = i2037[2]
  i2036.keys = i2037[3]
  var i2039 = i2037[4]
  var i2038 = []
  for(var i = 0; i < i2039.length; i += 1) {
    i2038.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2039[i + 0]) );
  }
  i2036.objectReferenceKeys = i2038
  return i2036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2043 = data
  i2042.time = i2043[0]
  request.r(i2043[1], i2043[2], 0, i2042, 'value')
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2047 = data
  i2046.functionName = i2047[0]
  i2046.floatParameter = i2047[1]
  i2046.intParameter = i2047[2]
  i2046.stringParameter = i2047[3]
  request.r(i2047[4], i2047[5], 0, i2046, 'objectReferenceParameter')
  i2046.time = i2047[6]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2049 = data
  i2048.center = new pc.Vec3( i2049[0], i2049[1], i2049[2] )
  i2048.extends = new pc.Vec3( i2049[3], i2049[4], i2049[5] )
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( i2055[i + 0] );
  }
  i2052.genericBindings = i2054
  var i2057 = i2053[1]
  var i2056 = []
  for(var i = 0; i < i2057.length; i += 1) {
    i2056.push( i2057[i + 0] );
  }
  i2052.pptrCurveMapping = i2056
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.ascent = i2059[1]
  i2058.originalLineHeight = i2059[2]
  i2058.fontSize = i2059[3]
  var i2061 = i2059[4]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2061[i + 0]) );
  }
  i2058.characterInfo = i2060
  request.r(i2059[5], i2059[6], 0, i2058, 'texture')
  i2058.originalFontSize = i2059[7]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2065 = data
  i2064.index = i2065[0]
  i2064.advance = i2065[1]
  i2064.bearing = i2065[2]
  i2064.glyphWidth = i2065[3]
  i2064.glyphHeight = i2065[4]
  i2064.minX = i2065[5]
  i2064.maxX = i2065[6]
  i2064.minY = i2065[7]
  i2064.maxY = i2065[8]
  i2064.uvBottomLeftX = i2065[9]
  i2064.uvBottomLeftY = i2065[10]
  i2064.uvBottomRightX = i2065[11]
  i2064.uvBottomRightY = i2065[12]
  i2064.uvTopLeftX = i2065[13]
  i2064.uvTopLeftY = i2065[14]
  i2064.uvTopRightX = i2065[15]
  i2064.uvTopRightY = i2065[16]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2067 = data
  i2066.name = i2067[0]
  var i2069 = i2067[1]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2069[i + 0]) );
  }
  i2066.states = i2068
  var i2071 = i2067[2]
  var i2070 = []
  for(var i = 0; i < i2071.length; i += 1) {
    i2070.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2071[i + 0]) );
  }
  i2066.layers = i2070
  var i2073 = i2067[3]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 1) {
    i2072.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2073[i + 0]) );
  }
  i2066.parameters = i2072
  i2066.animationClips = i2067[4]
  i2066.HasSubStateMachines = !!i2067[5]
  i2066.avatarUnsupported = i2067[6]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2077 = data
  i2076.cycleOffset = i2077[0]
  i2076.cycleOffsetParameter = i2077[1]
  i2076.cycleOffsetParameterActive = !!i2077[2]
  i2076.mirror = !!i2077[3]
  i2076.mirrorParameter = i2077[4]
  i2076.mirrorParameterActive = !!i2077[5]
  i2076.motionId = i2077[6]
  i2076.nameHash = i2077[7]
  i2076.fullPathHash = i2077[8]
  i2076.speed = i2077[9]
  i2076.speedParameter = i2077[10]
  i2076.speedParameterActive = !!i2077[11]
  i2076.tag = i2077[12]
  i2076.name = i2077[13]
  i2076.layer = i2077[14]
  i2076.writeDefaultValues = !!i2077[15]
  var i2079 = i2077[16]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2079[i + 0]) );
  }
  i2076.transitions = i2078
  var i2081 = i2077[17]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 2) {
  request.r(i2081[i + 0], i2081[i + 1], 2, i2080, '')
  }
  i2076.behaviours = i2080
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2085 = data
  i2084.fullPath = i2085[0]
  i2084.canTransitionToSelf = !!i2085[1]
  i2084.duration = i2085[2]
  i2084.exitTime = i2085[3]
  i2084.hasExitTime = !!i2085[4]
  i2084.hasFixedDuration = !!i2085[5]
  i2084.interruptionSource = i2085[6]
  i2084.offset = i2085[7]
  i2084.orderedInterruption = !!i2085[8]
  i2084.destinationStateNameHash = i2085[9]
  i2084.destinationStateMachineId = i2085[10]
  i2084.isExit = !!i2085[11]
  i2084.mute = !!i2085[12]
  i2084.solo = !!i2085[13]
  var i2087 = i2085[14]
  var i2086 = []
  for(var i = 0; i < i2087.length; i += 1) {
    i2086.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2087[i + 0]) );
  }
  i2084.conditions = i2086
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2091 = data
  i2090.mode = i2091[0]
  i2090.parameter = i2091[1]
  i2090.threshold = i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2097 = data
  i2096.blendingMode = i2097[0]
  i2096.defaultWeight = i2097[1]
  i2096.name = i2097[2]
  i2096.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2097[3], i2096.stateMachine)
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2099 = data
  i2098.id = i2099[0]
  i2098.defaultStateNameHash = i2099[1]
  var i2101 = i2099[2]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2101[i + 0]) );
  }
  i2098.entryTransitions = i2100
  var i2103 = i2099[3]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2103[i + 0]) );
  }
  i2098.anyStateTransitions = i2102
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2107 = data
  i2106.destinationStateNameHash = i2107[0]
  i2106.destinationStateMachineId = i2107[1]
  i2106.isExit = !!i2107[2]
  i2106.mute = !!i2107[3]
  i2106.solo = !!i2107[4]
  var i2109 = i2107[5]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2109[i + 0]) );
  }
  i2106.conditions = i2108
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2113 = data
  i2112.defaultBool = !!i2113[0]
  i2112.defaultFloat = i2113[1]
  i2112.defaultInt = i2113[2]
  i2112.name = i2113[3]
  i2112.nameHash = i2113[4]
  i2112.type = i2113[5]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2117[i + 0]) );
  }
  i2114.files = i2116
  i2114.componentToPrefabIds = i2115[1]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2120 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2121 = data
  i2120.path = i2121[0]
  request.r(i2121[1], i2121[2], 0, i2120, 'unityObject')
  return i2120
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2123 = data
  var i2125 = i2123[0]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2125[i + 0]) );
  }
  i2122.scriptsExecutionOrder = i2124
  var i2127 = i2123[1]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2127[i + 0]) );
  }
  i2122.sortingLayers = i2126
  var i2129 = i2123[2]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2129[i + 0]) );
  }
  i2122.cullingLayers = i2128
  i2122.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2123[3], i2122.timeSettings)
  i2122.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2123[4], i2122.physicsSettings)
  i2122.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2123[5], i2122.physics2DSettings)
  i2122.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2123[6], i2122.qualitySettings)
  i2122.enableRealtimeShadows = !!i2123[7]
  i2122.enableAutoInstancing = !!i2123[8]
  i2122.enableDynamicBatching = !!i2123[9]
  i2122.lightmapEncodingQuality = i2123[10]
  i2122.desiredColorSpace = i2123[11]
  var i2131 = i2123[12]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2122.allTags = i2130
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2135 = data
  i2134.name = i2135[0]
  i2134.value = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2139 = data
  i2138.id = i2139[0]
  i2138.name = i2139[1]
  i2138.value = i2139[2]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2143 = data
  i2142.id = i2143[0]
  i2142.name = i2143[1]
  return i2142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2145 = data
  i2144.fixedDeltaTime = i2145[0]
  i2144.maximumDeltaTime = i2145[1]
  i2144.timeScale = i2145[2]
  i2144.maximumParticleTimestep = i2145[3]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2147 = data
  i2146.gravity = new pc.Vec3( i2147[0], i2147[1], i2147[2] )
  i2146.defaultSolverIterations = i2147[3]
  i2146.bounceThreshold = i2147[4]
  i2146.autoSyncTransforms = !!i2147[5]
  i2146.autoSimulation = !!i2147[6]
  var i2149 = i2147[7]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2149[i + 0]) );
  }
  i2146.collisionMatrix = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2153 = data
  i2152.enabled = !!i2153[0]
  i2152.layerId = i2153[1]
  i2152.otherLayerId = i2153[2]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2155 = data
  request.r(i2155[0], i2155[1], 0, i2154, 'material')
  i2154.gravity = new pc.Vec2( i2155[2], i2155[3] )
  i2154.positionIterations = i2155[4]
  i2154.velocityIterations = i2155[5]
  i2154.velocityThreshold = i2155[6]
  i2154.maxLinearCorrection = i2155[7]
  i2154.maxAngularCorrection = i2155[8]
  i2154.maxTranslationSpeed = i2155[9]
  i2154.maxRotationSpeed = i2155[10]
  i2154.baumgarteScale = i2155[11]
  i2154.baumgarteTOIScale = i2155[12]
  i2154.timeToSleep = i2155[13]
  i2154.linearSleepTolerance = i2155[14]
  i2154.angularSleepTolerance = i2155[15]
  i2154.defaultContactOffset = i2155[16]
  i2154.autoSimulation = !!i2155[17]
  i2154.queriesHitTriggers = !!i2155[18]
  i2154.queriesStartInColliders = !!i2155[19]
  i2154.callbacksOnDisable = !!i2155[20]
  i2154.reuseCollisionCallbacks = !!i2155[21]
  i2154.autoSyncTransforms = !!i2155[22]
  var i2157 = i2155[23]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2157[i + 0]) );
  }
  i2154.collisionMatrix = i2156
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2161 = data
  i2160.enabled = !!i2161[0]
  i2160.layerId = i2161[1]
  i2160.otherLayerId = i2161[2]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2163 = data
  var i2165 = i2163[0]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2165[i + 0]) );
  }
  i2162.qualityLevels = i2164
  var i2167 = i2163[1]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( i2167[i + 0] );
  }
  i2162.names = i2166
  i2162.shadows = i2163[2]
  i2162.anisotropicFiltering = i2163[3]
  i2162.antiAliasing = i2163[4]
  i2162.lodBias = i2163[5]
  i2162.shadowCascades = i2163[6]
  i2162.shadowDistance = i2163[7]
  i2162.shadowmaskMode = i2163[8]
  i2162.shadowProjection = i2163[9]
  i2162.shadowResolution = i2163[10]
  i2162.softParticles = !!i2163[11]
  i2162.softVegetation = !!i2163[12]
  i2162.activeColorSpace = i2163[13]
  i2162.desiredColorSpace = i2163[14]
  i2162.masterTextureLimit = i2163[15]
  i2162.maxQueuedFrames = i2163[16]
  i2162.particleRaycastBudget = i2163[17]
  i2162.pixelLightCount = i2163[18]
  i2162.realtimeReflectionProbes = !!i2163[19]
  i2162.shadowCascade2Split = i2163[20]
  i2162.shadowCascade4Split = new pc.Vec3( i2163[21], i2163[22], i2163[23] )
  i2162.streamingMipmapsActive = !!i2163[24]
  i2162.vSyncCount = i2163[25]
  i2162.asyncUploadBufferSize = i2163[26]
  i2162.asyncUploadTimeSlice = i2163[27]
  i2162.billboardsFaceCameraPosition = !!i2163[28]
  i2162.shadowNearPlaneOffset = i2163[29]
  i2162.streamingMipmapsMemoryBudget = i2163[30]
  i2162.maximumLODLevel = i2163[31]
  i2162.streamingMipmapsAddAllCameras = !!i2163[32]
  i2162.streamingMipmapsMaxLevelReduction = i2163[33]
  i2162.streamingMipmapsRenderersPerFrame = i2163[34]
  i2162.resolutionScalingFixedDPIFactor = i2163[35]
  i2162.streamingMipmapsMaxFileIORequests = i2163[36]
  i2162.currentQualityLevel = i2163[37]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2171 = data
  i2170.name = i2171[0]
  var i2173 = i2171[1]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2173[i + 0]) );
  }
  i2170.tos = i2172
  var i2175 = i2171[2]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( i2175[i + 0] );
  }
  i2170.constant = i2174
  i2170.isValid = !!i2171[3]
  i2170.isHuman = !!i2171[4]
  i2170.hasRootMotion = !!i2171[5]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2179 = data
  i2178.hash = i2179[0]
  i2178.path = i2179[1]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2183 = data
  i2182.weight = i2183[0]
  i2182.vertices = i2183[1]
  i2182.normals = i2183[2]
  i2182.tangents = i2183[3]
  return i2182
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[10],"63":[15],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[73],"74":[73],"75":[73],"76":[73],"77":[73],"78":[73],"79":[73],"80":[73],"81":[73],"82":[73],"83":[73],"84":[73],"85":[73],"86":[15],"87":[5],"88":[89],"90":[89],"29":[18],"91":[18],"92":[5,18],"93":[18,21],"94":[18],"95":[21,18],"96":[5],"97":[21,18],"98":[18],"99":[100],"101":[18],"102":[18],"31":[29],"23":[21,18],"103":[18],"30":[29],"104":[18],"105":[18],"106":[18],"107":[18],"108":[18],"109":[18],"110":[18],"111":[18],"112":[18],"113":[21,18],"114":[18],"115":[18],"116":[18],"117":[18],"33":[21,18],"118":[18],"119":[27],"120":[27],"28":[27],"121":[27],"122":[15],"123":[15],"124":[100],"125":[100]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.RectTransform","UnityEngine.MonoBehaviour","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","BulletTrail","Effect","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UIManager","UnityEngine.UI.Text","UnityEngine.GameObject","UnityEngine.Font","UnityEngine.UI.Button","BotParachute","ParachuteController","UnityEditor.Animations.AnimatorController","BotController","PathManager","UnityEngine.AudioClip","UnityEngine.Light","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","SpawnBot","BotManager","AudioManager","ConfigManager","StepManager","ObjectPool","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

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

Deserializers.buildID = "a9ddc44e-4dcf-4596-84cb-1a7b5186a4da";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

