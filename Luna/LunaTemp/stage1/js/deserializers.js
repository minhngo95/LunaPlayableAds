var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.JointSpring' )
  var i1741 = data
  i1740.spring = i1741[0]
  i1740.damper = i1741[1]
  i1740.targetPosition = i1741[2]
  return i1740
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.JointMotor' )
  var i1743 = data
  i1742.m_TargetVelocity = i1743[0]
  i1742.m_Force = i1743[1]
  i1742.m_FreeSpin = i1743[2]
  return i1742
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.JointLimits' )
  var i1745 = data
  i1744.m_Min = i1745[0]
  i1744.m_Max = i1745[1]
  i1744.m_Bounciness = i1745[2]
  i1744.m_BounceMinVelocity = i1745[3]
  i1744.m_ContactDistance = i1745[4]
  i1744.minBounce = i1745[5]
  i1744.maxBounce = i1745[6]
  return i1744
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.JointDrive' )
  var i1747 = data
  i1746.m_PositionSpring = i1747[0]
  i1746.m_PositionDamper = i1747[1]
  i1746.m_MaximumForce = i1747[2]
  return i1746
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1749 = data
  i1748.m_Spring = i1749[0]
  i1748.m_Damper = i1749[1]
  return i1748
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1751 = data
  i1750.m_Limit = i1751[0]
  i1750.m_Bounciness = i1751[1]
  i1750.m_ContactDistance = i1751[2]
  return i1750
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1753 = data
  i1752.m_ExtremumSlip = i1753[0]
  i1752.m_ExtremumValue = i1753[1]
  i1752.m_AsymptoteSlip = i1753[2]
  i1752.m_AsymptoteValue = i1753[3]
  i1752.m_Stiffness = i1753[4]
  return i1752
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1755 = data
  i1754.m_LowerAngle = i1755[0]
  i1754.m_UpperAngle = i1755[1]
  return i1754
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1757 = data
  i1756.m_MotorSpeed = i1757[0]
  i1756.m_MaximumMotorTorque = i1757[1]
  return i1756
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1759 = data
  i1758.m_DampingRatio = i1759[0]
  i1758.m_Frequency = i1759[1]
  i1758.m_Angle = i1759[2]
  return i1758
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1761 = data
  i1760.m_LowerTranslation = i1761[0]
  i1760.m_UpperTranslation = i1761[1]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1762 = root || new pc.UnityMaterial()
  var i1763 = data
  i1762.name = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'shader')
  i1762.renderQueue = i1763[3]
  i1762.enableInstancing = !!i1763[4]
  var i1765 = i1763[5]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1765[i + 0]) );
  }
  i1762.floatParameters = i1764
  var i1767 = i1763[6]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1767[i + 0]) );
  }
  i1762.colorParameters = i1766
  var i1769 = i1763[7]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1769[i + 0]) );
  }
  i1762.vectorParameters = i1768
  var i1771 = i1763[8]
  var i1770 = []
  for(var i = 0; i < i1771.length; i += 1) {
    i1770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1771[i + 0]) );
  }
  i1762.textureParameters = i1770
  var i1773 = i1763[9]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1773[i + 0]) );
  }
  i1762.materialFlags = i1772
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.value = i1777[1]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1781 = data
  i1780.name = i1781[0]
  i1780.value = new pc.Color(i1781[1], i1781[2], i1781[3], i1781[4])
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1785 = data
  i1784.name = i1785[0]
  i1784.value = new pc.Vec4( i1785[1], i1785[2], i1785[3], i1785[4] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1789 = data
  i1788.name = i1789[0]
  request.r(i1789[1], i1789[2], 0, i1788, 'value')
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1793 = data
  i1792.name = i1793[0]
  i1792.enabled = !!i1793[1]
  return i1792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1795 = data
  i1794.name = i1795[0]
  i1794.width = i1795[1]
  i1794.height = i1795[2]
  i1794.mipmapCount = i1795[3]
  i1794.anisoLevel = i1795[4]
  i1794.filterMode = i1795[5]
  i1794.hdr = !!i1795[6]
  i1794.format = i1795[7]
  i1794.wrapMode = i1795[8]
  i1794.alphaIsTransparency = !!i1795[9]
  i1794.alphaSource = i1795[10]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1797 = data
  i1796.position = new pc.Vec3( i1797[0], i1797[1], i1797[2] )
  i1796.scale = new pc.Vec3( i1797[3], i1797[4], i1797[5] )
  i1796.rotation = new pc.Quat(i1797[6], i1797[7], i1797[8], i1797[9])
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'animatorController')
  request.r(i1799[2], i1799[3], 0, i1798, 'avatar')
  i1798.updateMode = i1799[4]
  i1798.hasTransformHierarchy = !!i1799[5]
  i1798.applyRootMotion = !!i1799[6]
  var i1801 = i1799[7]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 2) {
  request.r(i1801[i + 0], i1801[i + 1], 2, i1800, '')
  }
  i1798.humanBones = i1800
  i1798.enabled = !!i1799[8]
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1805 = data
  i1804.enabled = !!i1805[0]
  request.r(i1805[1], i1805[2], 0, i1804, 'sharedMaterial')
  var i1807 = i1805[3]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 2, i1806, '')
  }
  i1804.sharedMaterials = i1806
  i1804.receiveShadows = !!i1805[4]
  i1804.shadowCastingMode = i1805[5]
  i1804.sortingLayerID = i1805[6]
  i1804.sortingOrder = i1805[7]
  i1804.lightmapIndex = i1805[8]
  i1804.lightmapSceneIndex = i1805[9]
  i1804.lightmapScaleOffset = new pc.Vec4( i1805[10], i1805[11], i1805[12], i1805[13] )
  i1804.lightProbeUsage = i1805[14]
  i1804.reflectionProbeUsage = i1805[15]
  request.r(i1805[16], i1805[17], 0, i1804, 'sharedMesh')
  var i1809 = i1805[18]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 2, i1808, '')
  }
  i1804.bones = i1808
  i1804.updateWhenOffscreen = !!i1805[19]
  i1804.localBounds = i1805[20]
  request.r(i1805[21], i1805[22], 0, i1804, 'rootBone')
  var i1811 = i1805[23]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1811[i + 0]) );
  }
  i1804.blendShapesWeights = i1810
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1817 = data
  i1816.weight = i1817[0]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.tagId = i1819[1]
  i1818.enabled = !!i1819[2]
  i1818.isStatic = !!i1819[3]
  i1818.layer = i1819[4]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1821 = data
  i1820.name = i1821[0]
  i1820.halfPrecision = !!i1821[1]
  i1820.vertexCount = i1821[2]
  i1820.aabb = i1821[3]
  var i1823 = i1821[4]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( !!i1823[i + 0] );
  }
  i1820.streams = i1822
  i1820.vertices = i1821[5]
  var i1825 = i1821[6]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1825[i + 0]) );
  }
  i1820.subMeshes = i1824
  var i1827 = i1821[7]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 16) {
    i1826.push( new pc.Mat4().setData(i1827[i + 0], i1827[i + 1], i1827[i + 2], i1827[i + 3],  i1827[i + 4], i1827[i + 5], i1827[i + 6], i1827[i + 7],  i1827[i + 8], i1827[i + 9], i1827[i + 10], i1827[i + 11],  i1827[i + 12], i1827[i + 13], i1827[i + 14], i1827[i + 15]) );
  }
  i1820.bindposes = i1826
  var i1829 = i1821[8]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1829[i + 0]) );
  }
  i1820.blendShapes = i1828
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1835 = data
  i1834.triangles = i1835[0]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1841 = data
  i1840.name = i1841[0]
  var i1843 = i1841[1]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1843[i + 0]) );
  }
  i1840.frames = i1842
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1845 = data
  request.r(i1845[0], i1845[1], 0, i1844, 'sharedMesh')
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'additionalVertexStreams')
  i1846.enabled = !!i1847[2]
  request.r(i1847[3], i1847[4], 0, i1846, 'sharedMaterial')
  var i1849 = i1847[5]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 2) {
  request.r(i1849[i + 0], i1849[i + 1], 2, i1848, '')
  }
  i1846.sharedMaterials = i1848
  i1846.receiveShadows = !!i1847[6]
  i1846.shadowCastingMode = i1847[7]
  i1846.sortingLayerID = i1847[8]
  i1846.sortingOrder = i1847[9]
  i1846.lightmapIndex = i1847[10]
  i1846.lightmapSceneIndex = i1847[11]
  i1846.lightmapScaleOffset = new pc.Vec4( i1847[12], i1847[13], i1847[14], i1847[15] )
  i1846.lightProbeUsage = i1847[16]
  i1846.reflectionProbeUsage = i1847[17]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1851 = data
  i1850.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1851[0], i1850.main)
  i1850.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1851[1], i1850.colorBySpeed)
  i1850.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1851[2], i1850.colorOverLifetime)
  i1850.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1851[3], i1850.emission)
  i1850.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1851[4], i1850.rotationBySpeed)
  i1850.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1851[5], i1850.rotationOverLifetime)
  i1850.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1851[6], i1850.shape)
  i1850.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1851[7], i1850.sizeBySpeed)
  i1850.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1851[8], i1850.sizeOverLifetime)
  i1850.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1851[9], i1850.textureSheetAnimation)
  i1850.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1851[10], i1850.velocityOverLifetime)
  i1850.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1851[11], i1850.noise)
  i1850.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1851[12], i1850.inheritVelocity)
  i1850.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1851[13], i1850.forceOverLifetime)
  i1850.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1851[14], i1850.limitVelocityOverLifetime)
  i1850.useAutoRandomSeed = !!i1851[15]
  i1850.randomSeed = i1851[16]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1852 = root || new pc.ParticleSystemMain()
  var i1853 = data
  i1852.duration = i1853[0]
  i1852.loop = !!i1853[1]
  i1852.prewarm = !!i1853[2]
  i1852.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[3], i1852.startDelay)
  i1852.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[4], i1852.startLifetime)
  i1852.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[5], i1852.startSpeed)
  i1852.startSize3D = !!i1853[6]
  i1852.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[7], i1852.startSizeX)
  i1852.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[8], i1852.startSizeY)
  i1852.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[9], i1852.startSizeZ)
  i1852.startRotation3D = !!i1853[10]
  i1852.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[11], i1852.startRotationX)
  i1852.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[12], i1852.startRotationY)
  i1852.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[13], i1852.startRotationZ)
  i1852.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1853[14], i1852.startColor)
  i1852.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1853[15], i1852.gravityModifier)
  i1852.simulationSpace = i1853[16]
  request.r(i1853[17], i1853[18], 0, i1852, 'customSimulationSpace')
  i1852.simulationSpeed = i1853[19]
  i1852.useUnscaledTime = !!i1853[20]
  i1852.scalingMode = i1853[21]
  i1852.playOnAwake = !!i1853[22]
  i1852.maxParticles = i1853[23]
  i1852.emitterVelocityMode = i1853[24]
  i1852.stopAction = i1853[25]
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1854 = root || new pc.MinMaxCurve()
  var i1855 = data
  i1854.mode = i1855[0]
  i1854.curveMin = new pc.AnimationCurve( { keys_flow: i1855[1] } )
  i1854.curveMax = new pc.AnimationCurve( { keys_flow: i1855[2] } )
  i1854.curveMultiplier = i1855[3]
  i1854.constantMin = i1855[4]
  i1854.constantMax = i1855[5]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1856 = root || new pc.MinMaxGradient()
  var i1857 = data
  i1856.mode = i1857[0]
  i1856.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1857[1], i1856.gradientMin)
  i1856.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1857[2], i1856.gradientMax)
  i1856.colorMin = new pc.Color(i1857[3], i1857[4], i1857[5], i1857[6])
  i1856.colorMax = new pc.Color(i1857[7], i1857[8], i1857[9], i1857[10])
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1859 = data
  i1858.mode = i1859[0]
  var i1861 = i1859[1]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1861[i + 0]) );
  }
  i1858.colorKeys = i1860
  var i1863 = i1859[2]
  var i1862 = []
  for(var i = 0; i < i1863.length; i += 1) {
    i1862.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1863[i + 0]) );
  }
  i1858.alphaKeys = i1862
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1864 = root || new pc.ParticleSystemColorBySpeed()
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1865[1], i1864.color)
  i1864.range = new pc.Vec2( i1865[2], i1865[3] )
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1869 = data
  i1868.color = new pc.Color(i1869[0], i1869[1], i1869[2], i1869[3])
  i1868.time = i1869[4]
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1873 = data
  i1872.alpha = i1873[0]
  i1872.time = i1873[1]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1874 = root || new pc.ParticleSystemColorOverLifetime()
  var i1875 = data
  i1874.enabled = !!i1875[0]
  i1874.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1875[1], i1874.color)
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1876 = root || new pc.ParticleSystemEmitter()
  var i1877 = data
  i1876.enabled = !!i1877[0]
  i1876.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[1], i1876.rateOverTime)
  i1876.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1877[2], i1876.rateOverDistance)
  var i1879 = i1877[3]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1879[i + 0]) );
  }
  i1876.bursts = i1878
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1882 = root || new pc.ParticleSystemBurst()
  var i1883 = data
  i1882.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1883[0], i1882.count)
  i1882.cycleCount = i1883[1]
  i1882.minCount = i1883[2]
  i1882.maxCount = i1883[3]
  i1882.repeatInterval = i1883[4]
  i1882.time = i1883[5]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1884 = root || new pc.ParticleSystemRotationBySpeed()
  var i1885 = data
  i1884.enabled = !!i1885[0]
  i1884.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1885[1], i1884.x)
  i1884.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1885[2], i1884.y)
  i1884.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1885[3], i1884.z)
  i1884.separateAxes = !!i1885[4]
  i1884.range = new pc.Vec2( i1885[5], i1885[6] )
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1886 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1887 = data
  i1886.enabled = !!i1887[0]
  i1886.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1887[1], i1886.x)
  i1886.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1887[2], i1886.y)
  i1886.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1887[3], i1886.z)
  i1886.separateAxes = !!i1887[4]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1888 = root || new pc.ParticleSystemShape()
  var i1889 = data
  i1888.enabled = !!i1889[0]
  i1888.shapeType = i1889[1]
  i1888.randomDirectionAmount = i1889[2]
  i1888.sphericalDirectionAmount = i1889[3]
  i1888.randomPositionAmount = i1889[4]
  i1888.alignToDirection = !!i1889[5]
  i1888.radius = i1889[6]
  i1888.radiusMode = i1889[7]
  i1888.radiusSpread = i1889[8]
  i1888.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1889[9], i1888.radiusSpeed)
  i1888.radiusThickness = i1889[10]
  i1888.angle = i1889[11]
  i1888.length = i1889[12]
  i1888.boxThickness = new pc.Vec3( i1889[13], i1889[14], i1889[15] )
  i1888.meshShapeType = i1889[16]
  request.r(i1889[17], i1889[18], 0, i1888, 'mesh')
  request.r(i1889[19], i1889[20], 0, i1888, 'meshRenderer')
  request.r(i1889[21], i1889[22], 0, i1888, 'skinnedMeshRenderer')
  i1888.useMeshMaterialIndex = !!i1889[23]
  i1888.meshMaterialIndex = i1889[24]
  i1888.useMeshColors = !!i1889[25]
  i1888.normalOffset = i1889[26]
  i1888.arc = i1889[27]
  i1888.arcMode = i1889[28]
  i1888.arcSpread = i1889[29]
  i1888.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1889[30], i1888.arcSpeed)
  i1888.donutRadius = i1889[31]
  i1888.position = new pc.Vec3( i1889[32], i1889[33], i1889[34] )
  i1888.rotation = new pc.Vec3( i1889[35], i1889[36], i1889[37] )
  i1888.scale = new pc.Vec3( i1889[38], i1889[39], i1889[40] )
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1890 = root || new pc.ParticleSystemSizeBySpeed()
  var i1891 = data
  i1890.enabled = !!i1891[0]
  i1890.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[1], i1890.x)
  i1890.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[2], i1890.y)
  i1890.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1891[3], i1890.z)
  i1890.separateAxes = !!i1891[4]
  i1890.range = new pc.Vec2( i1891[5], i1891[6] )
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1892 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1893 = data
  i1892.enabled = !!i1893[0]
  i1892.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[1], i1892.x)
  i1892.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[2], i1892.y)
  i1892.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1893[3], i1892.z)
  i1892.separateAxes = !!i1893[4]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1894 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1895 = data
  i1894.enabled = !!i1895[0]
  i1894.mode = i1895[1]
  i1894.animation = i1895[2]
  i1894.numTilesX = i1895[3]
  i1894.numTilesY = i1895[4]
  i1894.useRandomRow = !!i1895[5]
  i1894.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1895[6], i1894.frameOverTime)
  i1894.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1895[7], i1894.startFrame)
  i1894.cycleCount = i1895[8]
  i1894.rowIndex = i1895[9]
  i1894.flipU = i1895[10]
  i1894.flipV = i1895[11]
  i1894.spriteCount = i1895[12]
  var i1897 = i1895[13]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 2) {
  request.r(i1897[i + 0], i1897[i + 1], 2, i1896, '')
  }
  i1894.sprites = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1900 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1901 = data
  i1900.enabled = !!i1901[0]
  i1900.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[1], i1900.x)
  i1900.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[2], i1900.y)
  i1900.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[3], i1900.z)
  i1900.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[4], i1900.radial)
  i1900.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[5], i1900.speedModifier)
  i1900.space = i1901[6]
  i1900.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[7], i1900.orbitalX)
  i1900.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[8], i1900.orbitalY)
  i1900.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[9], i1900.orbitalZ)
  i1900.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[10], i1900.orbitalOffsetX)
  i1900.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[11], i1900.orbitalOffsetY)
  i1900.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1901[12], i1900.orbitalOffsetZ)
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1902 = root || new pc.ParticleSystemNoise()
  var i1903 = data
  i1902.enabled = !!i1903[0]
  i1902.separateAxes = !!i1903[1]
  i1902.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[2], i1902.strengthX)
  i1902.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[3], i1902.strengthY)
  i1902.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[4], i1902.strengthZ)
  i1902.frequency = i1903[5]
  i1902.damping = !!i1903[6]
  i1902.octaveCount = i1903[7]
  i1902.octaveMultiplier = i1903[8]
  i1902.octaveScale = i1903[9]
  i1902.quality = i1903[10]
  i1902.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[11], i1902.scrollSpeed)
  i1902.scrollSpeedMultiplier = i1903[12]
  i1902.remapEnabled = !!i1903[13]
  i1902.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[14], i1902.remapX)
  i1902.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[15], i1902.remapY)
  i1902.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[16], i1902.remapZ)
  i1902.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[17], i1902.positionAmount)
  i1902.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[18], i1902.rotationAmount)
  i1902.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1903[19], i1902.sizeAmount)
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1904 = root || new pc.ParticleSystemInheritVelocity()
  var i1905 = data
  i1904.enabled = !!i1905[0]
  i1904.mode = i1905[1]
  i1904.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1905[2], i1904.curve)
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1906 = root || new pc.ParticleSystemForceOverLifetime()
  var i1907 = data
  i1906.enabled = !!i1907[0]
  i1906.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[1], i1906.x)
  i1906.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[2], i1906.y)
  i1906.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1907[3], i1906.z)
  i1906.space = i1907[4]
  i1906.randomized = !!i1907[5]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1908 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1909 = data
  i1908.enabled = !!i1909[0]
  i1908.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[1], i1908.limit)
  i1908.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[2], i1908.limitX)
  i1908.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[3], i1908.limitY)
  i1908.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[4], i1908.limitZ)
  i1908.dampen = i1909[5]
  i1908.separateAxes = !!i1909[6]
  i1908.space = i1909[7]
  i1908.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1909[8], i1908.drag)
  i1908.multiplyDragByParticleSize = !!i1909[9]
  i1908.multiplyDragByParticleVelocity = !!i1909[10]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1911 = data
  i1910.enabled = !!i1911[0]
  request.r(i1911[1], i1911[2], 0, i1910, 'sharedMaterial')
  var i1913 = i1911[3]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 2) {
  request.r(i1913[i + 0], i1913[i + 1], 2, i1912, '')
  }
  i1910.sharedMaterials = i1912
  i1910.receiveShadows = !!i1911[4]
  i1910.shadowCastingMode = i1911[5]
  i1910.sortingLayerID = i1911[6]
  i1910.sortingOrder = i1911[7]
  i1910.lightmapIndex = i1911[8]
  i1910.lightmapSceneIndex = i1911[9]
  i1910.lightmapScaleOffset = new pc.Vec4( i1911[10], i1911[11], i1911[12], i1911[13] )
  i1910.lightProbeUsage = i1911[14]
  i1910.reflectionProbeUsage = i1911[15]
  request.r(i1911[16], i1911[17], 0, i1910, 'mesh')
  i1910.meshCount = i1911[18]
  i1910.activeVertexStreamsCount = i1911[19]
  i1910.alignment = i1911[20]
  i1910.renderMode = i1911[21]
  i1910.sortMode = i1911[22]
  i1910.lengthScale = i1911[23]
  i1910.velocityScale = i1911[24]
  i1910.cameraVelocityScale = i1911[25]
  i1910.normalDirection = i1911[26]
  i1910.sortingFudge = i1911[27]
  i1910.minParticleSize = i1911[28]
  i1910.maxParticleSize = i1911[29]
  i1910.pivot = new pc.Vec3( i1911[30], i1911[31], i1911[32] )
  request.r(i1911[33], i1911[34], 0, i1910, 'trailMaterial')
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1915 = data
  request.r(i1915[0], i1915[1], 0, i1914, 'clip')
  request.r(i1915[2], i1915[3], 0, i1914, 'outputAudioMixerGroup')
  i1914.playOnAwake = !!i1915[4]
  i1914.loop = !!i1915[5]
  i1914.time = i1915[6]
  i1914.volume = i1915[7]
  i1914.pitch = i1915[8]
  i1914.enabled = !!i1915[9]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1917 = data
  i1916.enabled = !!i1917[0]
  i1916.isTrigger = !!i1917[1]
  request.r(i1917[2], i1917[3], 0, i1916, 'material')
  request.r(i1917[4], i1917[5], 0, i1916, 'sharedMesh')
  i1916.convex = !!i1917[6]
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1919 = data
  i1918.enabled = !!i1919[0]
  i1918.aspect = i1919[1]
  i1918.orthographic = !!i1919[2]
  i1918.orthographicSize = i1919[3]
  i1918.backgroundColor = new pc.Color(i1919[4], i1919[5], i1919[6], i1919[7])
  i1918.nearClipPlane = i1919[8]
  i1918.farClipPlane = i1919[9]
  i1918.fieldOfView = i1919[10]
  i1918.depth = i1919[11]
  i1918.clearFlags = i1919[12]
  i1918.cullingMask = i1919[13]
  i1918.rect = i1919[14]
  request.r(i1919[15], i1919[16], 0, i1918, 'targetTexture')
  i1918.usePhysicalProperties = !!i1919[17]
  i1918.focalLength = i1919[18]
  i1918.sensorSize = new pc.Vec2( i1919[19], i1919[20] )
  i1918.lensShift = new pc.Vec2( i1919[21], i1919[22] )
  i1918.gateFit = i1919[23]
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1921 = data
  i1920.center = new pc.Vec3( i1921[0], i1921[1], i1921[2] )
  i1920.size = new pc.Vec3( i1921[3], i1921[4], i1921[5] )
  i1920.enabled = !!i1921[6]
  i1920.isTrigger = !!i1921[7]
  request.r(i1921[8], i1921[9], 0, i1920, 'material')
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1923 = data
  i1922.pivot = new pc.Vec2( i1923[0], i1923[1] )
  i1922.anchorMin = new pc.Vec2( i1923[2], i1923[3] )
  i1922.anchorMax = new pc.Vec2( i1923[4], i1923[5] )
  i1922.sizeDelta = new pc.Vec2( i1923[6], i1923[7] )
  i1922.anchoredPosition3D = new pc.Vec3( i1923[8], i1923[9], i1923[10] )
  i1922.rotation = new pc.Quat(i1923[11], i1923[12], i1923[13], i1923[14])
  i1922.scale = new pc.Vec3( i1923[15], i1923[16], i1923[17] )
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1925 = data
  i1924.enabled = !!i1925[0]
  i1924.planeDistance = i1925[1]
  i1924.referencePixelsPerUnit = i1925[2]
  i1924.isFallbackOverlay = !!i1925[3]
  i1924.renderMode = i1925[4]
  i1924.renderOrder = i1925[5]
  i1924.sortingLayerName = i1925[6]
  i1924.sortingOrder = i1925[7]
  i1924.scaleFactor = i1925[8]
  request.r(i1925[9], i1925[10], 0, i1924, 'worldCamera')
  i1924.overrideSorting = !!i1925[11]
  i1924.pixelPerfect = !!i1925[12]
  i1924.targetDisplay = i1925[13]
  i1924.overridePixelPerfect = !!i1925[14]
  return i1924
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1927 = data
  i1926.m_UiScaleMode = i1927[0]
  i1926.m_ReferencePixelsPerUnit = i1927[1]
  i1926.m_ScaleFactor = i1927[2]
  i1926.m_ReferenceResolution = new pc.Vec2( i1927[3], i1927[4] )
  i1926.m_ScreenMatchMode = i1927[5]
  i1926.m_MatchWidthOrHeight = i1927[6]
  i1926.m_PhysicalUnit = i1927[7]
  i1926.m_FallbackScreenDPI = i1927[8]
  i1926.m_DefaultSpriteDPI = i1927[9]
  i1926.m_DynamicPixelsPerUnit = i1927[10]
  i1926.m_PresetInfoIsWorld = !!i1927[11]
  return i1926
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1929 = data
  i1928.m_IgnoreReversedGraphics = !!i1929[0]
  i1928.m_BlockingObjects = i1929[1]
  i1928.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1929[2] )
  return i1928
}

Deserializers["EndCardController"] = function (request, data, root) {
  var i1930 = root || request.c( 'EndCardController' )
  var i1931 = data
  i1930.alwaysShowEndcardTESTING = !!i1931[0]
  i1930.EndCardOpenedEvent = request.d('UnityEngine.Events.UnityEvent', i1931[1], i1930.EndCardOpenedEvent)
  i1930._backgroundColor = new pc.Color(i1931[2], i1931[3], i1931[4], i1931[5])
  request.r(i1931[6], i1931[7], 0, i1930, '_backgroundTexture')
  request.r(i1931[8], i1931[9], 0, i1930, '_iconTexture')
  i1930._iconColor = new pc.Color(i1931[10], i1931[11], i1931[12], i1931[13])
  request.r(i1931[14], i1931[15], 0, i1930, '_buttonTexture')
  i1930._buttonColor = new pc.Color(i1931[16], i1931[17], i1931[18], i1931[19])
  i1930._endCardDescriptionText = i1931[20]
  i1930._CTAButtonText = i1931[21]
  i1930._useBestFitOnCTA = !!i1931[22]
  i1930._CTAFontColor = new pc.Color(i1931[23], i1931[24], i1931[25], i1931[26])
  i1930._descriptionFontColor = new pc.Color(i1931[27], i1931[28], i1931[29], i1931[30])
  request.r(i1931[31], i1931[32], 0, i1930, '_CTAFont')
  request.r(i1931[33], i1931[34], 0, i1930, '_descriptionFont')
  i1930._CTAFontSize = i1931[35]
  i1930._descriptionFontSize = i1931[36]
  i1930._centerDescriptionX = !!i1931[37]
  i1930._centerDescriptionY = !!i1931[38]
  i1930._centerButtonX = !!i1931[39]
  i1930._centerButtonY = !!i1931[40]
  i1930._descriptionPositionX = i1931[41]
  i1930._descriptionPositionY = i1931[42]
  i1930._buttonPositionX = i1931[43]
  i1930._buttonPositionY = i1931[44]
  i1930._CTAFontSizeLandscape = i1931[45]
  i1930._descriptionFontSizeLandscape = i1931[46]
  i1930._centerDescriptionXLandscape = !!i1931[47]
  i1930._centerDescriptionYLandscape = !!i1931[48]
  i1930._centerButtonXLandscape = !!i1931[49]
  i1930._centerButtonYLandscape = !!i1931[50]
  i1930._descriptionPositionXLandscape = i1931[51]
  i1930._descriptionPositionYLandscape = i1931[52]
  i1930._buttonPositionXLandscape = i1931[53]
  i1930._buttonPositionYLandscape = i1931[54]
  i1930._centerIconX = !!i1931[55]
  i1930._centerIconY = !!i1931[56]
  i1930._iconPositionX = i1931[57]
  i1930._iconPositionY = i1931[58]
  i1930._iconSize = i1931[59]
  i1930._roundEdgesOnIcon = !!i1931[60]
  i1930._centerIconXLandscape = !!i1931[61]
  i1930._centerIconYLandscape = !!i1931[62]
  i1930._iconPositionXLandscape = i1931[63]
  i1930._iconPositionYLandscape = i1931[64]
  i1930._iconSizeLandscape = i1931[65]
  i1930._roundEdgesOnIconLandscape = !!i1931[66]
  i1930._endCardClickableOptions = i1931[67]
  i1930._buttonAnimationType = i1931[68]
  i1930._endCardPortraitAnimationType = i1931[69]
  i1930._endCardLandscapeAnimationType = i1931[70]
  request.r(i1931[71], i1931[72], 0, i1930, '_backgroundImage')
  request.r(i1931[73], i1931[74], 0, i1930, '_CTAButton')
  request.r(i1931[75], i1931[76], 0, i1930, '_ScreenCTAButton')
  request.r(i1931[77], i1931[78], 0, i1930, '_CTAButtonTextText')
  request.r(i1931[79], i1931[80], 0, i1930, '_EndCardDescriptionTextText')
  request.r(i1931[81], i1931[82], 0, i1930, '_maskIcon')
  request.r(i1931[83], i1931[84], 0, i1930, '_iconRect')
  request.r(i1931[85], i1931[86], 0, i1930, '_iconRectMask')
  request.r(i1931[87], i1931[88], 0, i1930, '_descriptionRect')
  request.r(i1931[89], i1931[90], 0, i1930, '_buttonRect')
  request.r(i1931[91], i1931[92], 0, i1930, '_CTAButtonAnimator')
  request.r(i1931[93], i1931[94], 0, i1930, '_endCardAnimator')
  request.r(i1931[95], i1931[96], 0, i1930, '_iconImage')
  request.r(i1931[97], i1931[98], 0, i1930, '_CTAButtonImage')
  return i1930
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1933 = data
  i1932.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1933[0], i1932.m_PersistentCalls)
  return i1932
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1935 = data
  var i1937 = i1935[0]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('UnityEngine.Events.PersistentCall', i1937[i + 0]));
  }
  i1934.m_Calls = i1936
  return i1934
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Target')
  i1940.m_TargetAssemblyTypeName = i1941[2]
  i1940.m_MethodName = i1941[3]
  i1940.m_Mode = i1941[4]
  i1940.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1941[5], i1940.m_Arguments)
  i1940.m_CallState = i1941[6]
  return i1940
}

Deserializers["EndCardSetScale"] = function (request, data, root) {
  var i1942 = root || request.c( 'EndCardSetScale' )
  var i1943 = data
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1945 = data
  i1944.cullTransparentMesh = !!i1945[0]
  return i1944
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1947 = data
  request.r(i1947[0], i1947[1], 0, i1946, 'm_Texture')
  i1946.m_UVRect = UnityEngine.Rect.MinMaxRect(i1947[2], i1947[3], i1947[4], i1947[5])
  request.r(i1947[6], i1947[7], 0, i1946, 'm_Material')
  i1946.m_Maskable = !!i1947[8]
  i1946.m_Color = new pc.Color(i1947[9], i1947[10], i1947[11], i1947[12])
  i1946.m_RaycastTarget = !!i1947[13]
  i1946.m_RaycastPadding = new pc.Vec4( i1947[14], i1947[15], i1947[16], i1947[17] )
  return i1946
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1949 = data
  i1948.m_AspectMode = i1949[0]
  i1948.m_AspectRatio = i1949[1]
  return i1948
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1951 = data
  i1950.m_ShowMaskGraphic = !!i1951[0]
  return i1950
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.UI.Image' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'm_Sprite')
  i1952.m_Type = i1953[2]
  i1952.m_PreserveAspect = !!i1953[3]
  i1952.m_FillCenter = !!i1953[4]
  i1952.m_FillMethod = i1953[5]
  i1952.m_FillAmount = i1953[6]
  i1952.m_FillClockwise = !!i1953[7]
  i1952.m_FillOrigin = i1953[8]
  i1952.m_UseSpriteMesh = !!i1953[9]
  i1952.m_PixelsPerUnitMultiplier = i1953[10]
  request.r(i1953[11], i1953[12], 0, i1952, 'm_Material')
  i1952.m_Maskable = !!i1953[13]
  i1952.m_Color = new pc.Color(i1953[14], i1953[15], i1953[16], i1953[17])
  i1952.m_RaycastTarget = !!i1953[18]
  i1952.m_RaycastPadding = new pc.Vec4( i1953[19], i1953[20], i1953[21], i1953[22] )
  return i1952
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.UI.Text' )
  var i1955 = data
  i1954.m_FontData = request.d('UnityEngine.UI.FontData', i1955[0], i1954.m_FontData)
  i1954.m_Text = i1955[1]
  request.r(i1955[2], i1955[3], 0, i1954, 'm_Material')
  i1954.m_Maskable = !!i1955[4]
  i1954.m_Color = new pc.Color(i1955[5], i1955[6], i1955[7], i1955[8])
  i1954.m_RaycastTarget = !!i1955[9]
  i1954.m_RaycastPadding = new pc.Vec4( i1955[10], i1955[11], i1955[12], i1955[13] )
  return i1954
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'm_Font')
  i1956.m_FontSize = i1957[2]
  i1956.m_FontStyle = i1957[3]
  i1956.m_BestFit = !!i1957[4]
  i1956.m_MinSize = i1957[5]
  i1956.m_MaxSize = i1957[6]
  i1956.m_Alignment = i1957[7]
  i1956.m_AlignByGeometry = !!i1957[8]
  i1956.m_RichText = !!i1957[9]
  i1956.m_HorizontalOverflow = i1957[10]
  i1956.m_VerticalOverflow = i1957[11]
  i1956.m_LineSpacing = i1957[12]
  return i1956
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1958 = root || request.c( 'UnityEngine.UI.Button' )
  var i1959 = data
  i1958.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1959[0], i1958.m_OnClick)
  i1958.m_Navigation = request.d('UnityEngine.UI.Navigation', i1959[1], i1958.m_Navigation)
  i1958.m_Transition = i1959[2]
  i1958.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1959[3], i1958.m_Colors)
  i1958.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1959[4], i1958.m_SpriteState)
  i1958.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1959[5], i1958.m_AnimationTriggers)
  i1958.m_Interactable = !!i1959[6]
  request.r(i1959[7], i1959[8], 0, i1958, 'm_TargetGraphic')
  return i1958
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1960 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1961 = data
  i1960.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1961[0], i1960.m_PersistentCalls)
  return i1960
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1962 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1963 = data
  request.r(i1963[0], i1963[1], 0, i1962, 'm_ObjectArgument')
  i1962.m_ObjectArgumentAssemblyTypeName = i1963[2]
  i1962.m_IntArgument = i1963[3]
  i1962.m_FloatArgument = i1963[4]
  i1962.m_StringArgument = i1963[5]
  i1962.m_BoolArgument = !!i1963[6]
  return i1962
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1964 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1965 = data
  i1964.m_Mode = i1965[0]
  i1964.m_WrapAround = !!i1965[1]
  request.r(i1965[2], i1965[3], 0, i1964, 'm_SelectOnUp')
  request.r(i1965[4], i1965[5], 0, i1964, 'm_SelectOnDown')
  request.r(i1965[6], i1965[7], 0, i1964, 'm_SelectOnLeft')
  request.r(i1965[8], i1965[9], 0, i1964, 'm_SelectOnRight')
  return i1964
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1966 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1967 = data
  i1966.m_NormalColor = new pc.Color(i1967[0], i1967[1], i1967[2], i1967[3])
  i1966.m_HighlightedColor = new pc.Color(i1967[4], i1967[5], i1967[6], i1967[7])
  i1966.m_PressedColor = new pc.Color(i1967[8], i1967[9], i1967[10], i1967[11])
  i1966.m_SelectedColor = new pc.Color(i1967[12], i1967[13], i1967[14], i1967[15])
  i1966.m_DisabledColor = new pc.Color(i1967[16], i1967[17], i1967[18], i1967[19])
  i1966.m_ColorMultiplier = i1967[20]
  i1966.m_FadeDuration = i1967[21]
  return i1966
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1968 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'm_HighlightedSprite')
  request.r(i1969[2], i1969[3], 0, i1968, 'm_PressedSprite')
  request.r(i1969[4], i1969[5], 0, i1968, 'm_SelectedSprite')
  request.r(i1969[6], i1969[7], 0, i1968, 'm_DisabledSprite')
  return i1968
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1970 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1971 = data
  i1970.m_NormalTrigger = i1971[0]
  i1970.m_HighlightedTrigger = i1971[1]
  i1970.m_PressedTrigger = i1971[2]
  i1970.m_SelectedTrigger = i1971[3]
  i1970.m_DisabledTrigger = i1971[4]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasGroup"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasGroup' )
  var i1973 = data
  i1972.m_Alpha = i1973[0]
  i1972.m_Interactable = !!i1973[1]
  i1972.m_BlocksRaycasts = !!i1973[2]
  i1972.m_IgnoreParentGroups = !!i1973[3]
  i1972.enabled = !!i1973[4]
  return i1972
}

Deserializers["BotNetwork"] = function (request, data, root) {
  var i1974 = root || request.c( 'BotNetwork' )
  var i1975 = data
  i1974._maxHealth = i1975[0]
  var i1977 = i1975[1]
  var i1976 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1977.length; i += 2) {
  request.r(i1977[i + 0], i1977[i + 1], 1, i1976, '')
  }
  i1974._legalTargets = i1976
  i1974._path = request.d('Path', i1975[2], i1974._path)
  i1974._currentHealth = i1975[3]
  i1974.isDead = !!i1975[4]
  return i1974
}

Deserializers["Path"] = function (request, data, root) {
  var i1980 = root || request.c( 'Path' )
  var i1981 = data
  i1980.IsUse = !!i1981[0]
  var i1983 = i1981[1]
  var i1982 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1983.length; i += 2) {
  request.r(i1983[i + 0], i1983[i + 1], 1, i1982, '')
  }
  i1980.WayPoints = i1982
  return i1980
}

Deserializers["FiniteStateMachine"] = function (request, data, root) {
  var i1984 = root || request.c( 'FiniteStateMachine' )
  var i1985 = data
  request.r(i1985[0], i1985[1], 0, i1984, '_stateTransitionManager')
  return i1984
}

Deserializers["StateTransitionManager"] = function (request, data, root) {
  var i1986 = root || request.c( 'StateTransitionManager' )
  var i1987 = data
  return i1986
}

Deserializers["StateConditionManager"] = function (request, data, root) {
  var i1988 = root || request.c( 'StateConditionManager' )
  var i1989 = data
  return i1988
}

Deserializers["BotPlayita"] = function (request, data, root) {
  var i1990 = root || request.c( 'BotPlayita' )
  var i1991 = data
  request.r(i1991[0], i1991[1], 0, i1990, '_finiteStateMachine')
  request.r(i1991[2], i1991[3], 0, i1990, '_stateTransitionManager')
  request.r(i1991[4], i1991[5], 0, i1990, '_stateConditionManager')
  request.r(i1991[6], i1991[7], 0, i1990, '_botNetwork')
  request.r(i1991[8], i1991[9], 0, i1990, '_animator')
  request.r(i1991[10], i1991[11], 0, i1990, '_muzzle')
  request.r(i1991[12], i1991[13], 0, i1990, '_bullet')
  i1990._target = new pc.Vec3( i1991[14], i1991[15], i1991[16] )
  request.r(i1991[17], i1991[18], 0, i1990, '_healthBarRenderer')
  request.r(i1991[19], i1991[20], 0, i1990, '_takeSource')
  request.r(i1991[21], i1991[22], 0, i1990, '_hitSource')
  return i1990
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i1992 = root || request.c( 'BulletTrail' )
  var i1993 = data
  i1992.Speed = i1993[0]
  i1992.LifeTime = i1993[1]
  request.r(i1993[2], i1993[3], 0, i1992, '_trail')
  i1992._trailStartScale = new pc.Vec3( i1993[4], i1993[5], i1993[6] )
  i1992._trailMaxScale = new pc.Vec3( i1993[7], i1993[8], i1993[9] )
  i1992._trailLengthAtMaxScale = i1993[10]
  return i1992
}

Deserializers["BotPlayitaParachute"] = function (request, data, root) {
  var i1994 = root || request.c( 'BotPlayitaParachute' )
  var i1995 = data
  i1994.Speed = i1995[0]
  i1994._groundLayer = UnityEngine.LayerMask.FromIntegerValue( i1995[1] )
  request.r(i1995[2], i1995[3], 0, i1994, '_parachuteScale')
  i1994._distanceOpenParachute = i1995[4]
  i1994._distanceCloseParachute = i1995[5]
  request.r(i1995[6], i1995[7], 0, i1994, '_finiteStateMachine')
  request.r(i1995[8], i1995[9], 0, i1994, '_stateTransitionManager')
  request.r(i1995[10], i1995[11], 0, i1994, '_stateConditionManager')
  request.r(i1995[12], i1995[13], 0, i1994, '_botNetwork')
  request.r(i1995[14], i1995[15], 0, i1994, '_animator')
  request.r(i1995[16], i1995[17], 0, i1994, '_muzzle')
  request.r(i1995[18], i1995[19], 0, i1994, '_bullet')
  i1994._target = new pc.Vec3( i1995[20], i1995[21], i1995[22] )
  request.r(i1995[23], i1995[24], 0, i1994, '_healthBarRenderer')
  request.r(i1995[25], i1995[26], 0, i1994, '_takeSource')
  request.r(i1995[27], i1995[28], 0, i1994, '_hitSource')
  return i1994
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i1996 = root || request.c( 'UICrosshairItem' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'CrosshairRectTransform')
  i1996._distanceMax = i1997[2]
  i1996._distanceMin = i1997[3]
  i1996._speedShrink = i1997[4]
  i1996._currentSpeed = i1997[5]
  i1996._rateOnMove = i1997[6]
  i1996._rateOnAttack = i1997[7]
  return i1996
}

Deserializers["Effect"] = function (request, data, root) {
  var i1998 = root || request.c( 'Effect' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.particles = i2000
  i1998._lifeTime = i1999[1]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i2005 = data
  i2004.name = i2005[0]
  i2004.atlasId = i2005[1]
  i2004.mipmapCount = i2005[2]
  i2004.hdr = !!i2005[3]
  i2004.size = i2005[4]
  i2004.anisoLevel = i2005[5]
  i2004.filterMode = i2005[6]
  i2004.wrapMode = i2005[7]
  var i2007 = i2005[8]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 4) {
    i2006.push( UnityEngine.Rect.MinMaxRect(i2007[i + 0], i2007[i + 1], i2007[i + 2], i2007[i + 3]) );
  }
  i2004.rects = i2006
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2011 = data
  i2010.name = i2011[0]
  i2010.index = i2011[1]
  i2010.startup = !!i2011[2]
  return i2010
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2012 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2013 = data
  request.r(i2013[0], i2013[1], 0, i2012, 'm_FirstSelected')
  i2012.m_sendNavigationEvents = !!i2013[2]
  i2012.m_DragThreshold = i2013[3]
  return i2012
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2014 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2015 = data
  i2014.m_HorizontalAxis = i2015[0]
  i2014.m_VerticalAxis = i2015[1]
  i2014.m_SubmitButton = i2015[2]
  i2014.m_CancelButton = i2015[3]
  i2014.m_InputActionsPerSecond = i2015[4]
  i2014.m_RepeatDelay = i2015[5]
  i2014.m_ForceModuleActive = !!i2015[6]
  i2014.m_SendPointerHoverToParent = !!i2015[7]
  return i2014
}

Deserializers["UIManager"] = function (request, data, root) {
  var i2016 = root || request.c( 'UIManager' )
  var i2017 = data
  i2016.url = i2017[0]
  request.r(i2017[1], i2017[2], 0, i2016, 'InGame')
  request.r(i2017[3], i2017[4], 0, i2016, 'TotalBotText')
  i2016.initBot = i2017[5]
  request.r(i2017[6], i2017[7], 0, i2016, 'process')
  request.r(i2017[8], i2017[9], 0, i2016, 'gameProcess')
  request.r(i2017[10], i2017[11], 0, i2016, 'tapToPlay')
  return i2016
}

Deserializers["UnityEngine.UI.Outline"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Outline' )
  var i2019 = data
  i2018.m_EffectColor = new pc.Color(i2019[0], i2019[1], i2019[2], i2019[3])
  i2018.m_EffectDistance = new pc.Vec2( i2019[4], i2019[5] )
  i2018.m_UseGraphicAlpha = !!i2019[6]
  return i2018
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i2021 = data
  i2020.m_Spacing = i2021[0]
  i2020.m_ChildForceExpandWidth = !!i2021[1]
  i2020.m_ChildForceExpandHeight = !!i2021[2]
  i2020.m_ChildControlWidth = !!i2021[3]
  i2020.m_ChildControlHeight = !!i2021[4]
  i2020.m_ChildScaleWidth = !!i2021[5]
  i2020.m_ChildScaleHeight = !!i2021[6]
  i2020.m_ReverseArrangement = !!i2021[7]
  i2020.m_Padding = UnityEngine.RectOffset.FromPaddings(i2021[8], i2021[9], i2021[10], i2021[11])
  i2020.m_ChildAlignment = i2021[12]
  return i2020
}

Deserializers["BotParachute"] = function (request, data, root) {
  var i2022 = root || request.c( 'BotParachute' )
  var i2023 = data
  request.r(i2023[0], i2023[1], 0, i2022, '_animator')
  request.r(i2023[2], i2023[3], 0, i2022, '_muzzle')
  request.r(i2023[4], i2023[5], 0, i2022, 'bullet')
  i2022.target = new pc.Vec3( i2023[6], i2023[7], i2023[8] )
  i2022.moveIndex = i2023[9]
  i2022.isMoveDone = !!i2023[10]
  i2022.isDie = !!i2023[11]
  i2022.isMove = !!i2023[12]
  i2022.parachuteDone = !!i2023[13]
  i2022.isTakeDame = !!i2023[14]
  i2022.maxHealth = i2023[15]
  request.r(i2023[16], i2023[17], 0, i2022, 'healthBarRenderer')
  request.r(i2023[18], i2023[19], 0, i2022, '_audioSource')
  request.r(i2023[20], i2023[21], 0, i2022, '_hitSource')
  return i2022
}

Deserializers["ParachuteController"] = function (request, data, root) {
  var i2024 = root || request.c( 'ParachuteController' )
  var i2025 = data
  i2024.Speed = i2025[0]
  request.r(i2025[1], i2025[2], 0, i2024, '_botController')
  i2024.groundLayer = UnityEngine.LayerMask.FromIntegerValue( i2025[3] )
  request.r(i2025[4], i2025[5], 0, i2024, 'ParachuteScale')
  i2024.scaleAmount = i2025[6]
  i2024.velocity = new pc.Vec3( i2025[7], i2025[8], i2025[9] )
  i2024._distanceOpenParachute = i2025[10]
  i2024._distanceCloseParachute = i2025[11]
  return i2024
}

Deserializers["BotController"] = function (request, data, root) {
  var i2026 = root || request.c( 'BotController' )
  var i2027 = data
  request.r(i2027[0], i2027[1], 0, i2026, '_animator')
  request.r(i2027[2], i2027[3], 0, i2026, '_muzzle')
  request.r(i2027[4], i2027[5], 0, i2026, 'bullet')
  i2026.target = new pc.Vec3( i2027[6], i2027[7], i2027[8] )
  i2026.moveIndex = i2027[9]
  i2026.isMoveDone = !!i2027[10]
  i2026.isDie = !!i2027[11]
  i2026.isTakeDame = !!i2027[12]
  i2026.maxHealth = i2027[13]
  request.r(i2027[14], i2027[15], 0, i2026, 'healthBarRenderer')
  request.r(i2027[16], i2027[17], 0, i2026, '_audioSource')
  request.r(i2027[18], i2027[19], 0, i2026, '_hitSource')
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i2029 = data
  i2028.enabled = !!i2029[0]
  i2028.type = i2029[1]
  i2028.color = new pc.Color(i2029[2], i2029[3], i2029[4], i2029[5])
  i2028.cullingMask = i2029[6]
  i2028.intensity = i2029[7]
  i2028.range = i2029[8]
  i2028.spotAngle = i2029[9]
  i2028.shadows = i2029[10]
  i2028.shadowNormalBias = i2029[11]
  i2028.shadowBias = i2029[12]
  i2028.shadowStrength = i2029[13]
  i2028.shadowResolution = i2029[14]
  i2028.lightmapBakeType = i2029[15]
  i2028.renderMode = i2029[16]
  request.r(i2029[17], i2029[18], 0, i2028, 'cookie')
  i2028.cookieSize = i2029[19]
  return i2028
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i2030 = root || request.c( 'PlayerView' )
  var i2031 = data
  request.r(i2031[0], i2031[1], 0, i2030, '_mainRoot')
  request.r(i2031[2], i2031[3], 0, i2030, '_head')
  i2030._sensitivity = i2031[4]
  i2030._slerpFactor = i2031[5]
  i2030._viewHorizontalThreshold = new pc.Vec2( i2031[6], i2031[7] )
  i2030._viewVerticalThreshold = new pc.Vec2( i2031[8], i2031[9] )
  i2030._initRotate = new pc.Vec2( i2031[10], i2031[11] )
  i2030._totalRotate = new pc.Vec2( i2031[12], i2031[13] )
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i2033 = data
  i2032.playAutomatically = !!i2033[0]
  request.r(i2033[1], i2033[2], 0, i2032, 'clip')
  var i2035 = i2033[3]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 2) {
  request.r(i2035[i + 0], i2035[i + 1], 2, i2034, '')
  }
  i2032.clips = i2034
  i2032.wrapMode = i2033[4]
  i2032.enabled = !!i2033[5]
  return i2032
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i2038 = root || request.c( 'WeaponController' )
  var i2039 = data
  i2038.Mask = UnityEngine.LayerMask.FromIntegerValue( i2039[0] )
  i2038.damage = i2039[1]
  request.r(i2039[2], i2039[3], 0, i2038, '_muzzleTrans')
  request.r(i2039[4], i2039[5], 0, i2038, '_animation')
  request.r(i2039[6], i2039[7], 0, i2038, 'bullet')
  request.r(i2039[8], i2039[9], 0, i2038, '_muzzleFlash')
  request.r(i2039[10], i2039[11], 0, i2038, 'audioClip')
  request.r(i2039[12], i2039[13], 0, i2038, 'audioSource')
  i2038.SphereRadius = i2039[14]
  request.r(i2039[15], i2039[16], 0, i2038, 'Effect')
  return i2038
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i2040 = root || request.c( 'SpawnBot' )
  var i2041 = data
  request.r(i2041[0], i2041[1], 0, i2040, '_botPrefab')
  i2040._spawnInterval = i2041[2]
  i2040._upper = i2041[3]
  return i2040
}

Deserializers["BotManager"] = function (request, data, root) {
  var i2042 = root || request.c( 'BotManager' )
  var i2043 = data
  return i2042
}

Deserializers["AudioManager"] = function (request, data, root) {
  var i2044 = root || request.c( 'AudioManager' )
  var i2045 = data
  var i2047 = i2045[0]
  var i2046 = []
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 2, i2046, '')
  }
  i2044.AttackSounds = i2046
  var i2049 = i2045[1]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 2) {
  request.r(i2049[i + 0], i2049[i + 1], 2, i2048, '')
  }
  i2044.HitSounds = i2048
  return i2044
}

Deserializers["ConfigManager"] = function (request, data, root) {
  var i2052 = root || request.c( 'ConfigManager' )
  var i2053 = data
  var i2055 = i2053[0]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('StepData', i2055[i + 0]) );
  }
  i2052._stepDatas = i2054
  return i2052
}

Deserializers["StepData"] = function (request, data, root) {
  var i2058 = root || request.c( 'StepData' )
  var i2059 = data
  i2058.NumberBot = i2059[0]
  i2058.NumberParachute = i2059[1]
  return i2058
}

Deserializers["GamePlayManager"] = function (request, data, root) {
  var i2060 = root || request.c( 'GamePlayManager' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, '_spawnBotNormal')
  request.r(i2061[2], i2061[3], 0, i2060, '_spawnBotParachute')
  request.r(i2061[4], i2061[5], 0, i2060, '_a')
  return i2060
}

Deserializers["PathManager"] = function (request, data, root) {
  var i2062 = root || request.c( 'PathManager' )
  var i2063 = data
  var i2065 = i2063[0]
  var i2064 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.add(request.d('Path', i2065[i + 0]));
  }
  i2062._paths = i2064
  var i2067 = i2063[1]
  var i2066 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.add(request.d('Path', i2067[i + 0]));
  }
  i2062._pathsParachute = i2066
  return i2062
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i2070 = root || request.c( 'ObjectPool' )
  var i2071 = data
  return i2070
}

Deserializers["BotManagerTest"] = function (request, data, root) {
  var i2072 = root || request.c( 'BotManagerTest' )
  var i2073 = data
  var i2075 = i2073[0]
  var i2074 = new (System.Collections.Generic.List$1(Bridge.ns('BotNetwork')))
  for(var i = 0; i < i2075.length; i += 2) {
  request.r(i2075[i + 0], i2075[i + 1], 1, i2074, '')
  }
  i2072._botNetworks = i2074
  return i2072
}

Deserializers["SpawnBotTest"] = function (request, data, root) {
  var i2078 = root || request.c( 'SpawnBotTest' )
  var i2079 = data
  request.r(i2079[0], i2079[1], 0, i2078, '_botPrefab')
  i2078._spawnInterval = i2079[2]
  i2078._upper = i2079[3]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2081 = data
  i2080.ambientIntensity = i2081[0]
  i2080.reflectionIntensity = i2081[1]
  i2080.ambientMode = i2081[2]
  i2080.ambientLight = new pc.Color(i2081[3], i2081[4], i2081[5], i2081[6])
  i2080.ambientSkyColor = new pc.Color(i2081[7], i2081[8], i2081[9], i2081[10])
  i2080.ambientGroundColor = new pc.Color(i2081[11], i2081[12], i2081[13], i2081[14])
  i2080.ambientEquatorColor = new pc.Color(i2081[15], i2081[16], i2081[17], i2081[18])
  i2080.fogColor = new pc.Color(i2081[19], i2081[20], i2081[21], i2081[22])
  i2080.fogEndDistance = i2081[23]
  i2080.fogStartDistance = i2081[24]
  i2080.fogDensity = i2081[25]
  i2080.fog = !!i2081[26]
  request.r(i2081[27], i2081[28], 0, i2080, 'skybox')
  i2080.fogMode = i2081[29]
  var i2083 = i2081[30]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2083[i + 0]) );
  }
  i2080.lightmaps = i2082
  i2080.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2081[31], i2080.lightProbes)
  i2080.lightmapsMode = i2081[32]
  i2080.mixedBakeMode = i2081[33]
  i2080.environmentLightingMode = i2081[34]
  i2080.ambientProbe = new pc.SphericalHarmonicsL2(i2081[35])
  i2080.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i2081[36])
  i2080.useReferenceAmbientProbe = !!i2081[37]
  request.r(i2081[38], i2081[39], 0, i2080, 'customReflection')
  request.r(i2081[40], i2081[41], 0, i2080, 'defaultReflection')
  i2080.defaultReflectionMode = i2081[42]
  i2080.defaultReflectionResolution = i2081[43]
  i2080.sunLightObjectId = i2081[44]
  i2080.pixelLightCount = i2081[45]
  i2080.defaultReflectionHDR = !!i2081[46]
  i2080.hasLightDataAsset = !!i2081[47]
  i2080.hasManualGenerate = !!i2081[48]
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2087 = data
  request.r(i2087[0], i2087[1], 0, i2086, 'lightmapColor')
  request.r(i2087[2], i2087[3], 0, i2086, 'lightmapDirection')
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2088 = root || new UnityEngine.LightProbes()
  var i2089 = data
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2097 = data
  var i2099 = i2097[0]
  var i2098 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2099[i + 0]));
  }
  i2096.ShaderCompilationErrors = i2098
  i2096.name = i2097[1]
  i2096.guid = i2097[2]
  var i2101 = i2097[3]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( i2101[i + 0] );
  }
  i2096.shaderDefinedKeywords = i2100
  var i2103 = i2097[4]
  var i2102 = []
  for(var i = 0; i < i2103.length; i += 1) {
    i2102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2103[i + 0]) );
  }
  i2096.passes = i2102
  var i2105 = i2097[5]
  var i2104 = []
  for(var i = 0; i < i2105.length; i += 1) {
    i2104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2105[i + 0]) );
  }
  i2096.usePasses = i2104
  var i2107 = i2097[6]
  var i2106 = []
  for(var i = 0; i < i2107.length; i += 1) {
    i2106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2107[i + 0]) );
  }
  i2096.defaultParameterValues = i2106
  request.r(i2097[7], i2097[8], 0, i2096, 'unityFallbackShader')
  i2096.readDepth = !!i2097[9]
  i2096.isCreatedByShaderGraph = !!i2097[10]
  i2096.usedBatchUniforms = i2097[11]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2111 = data
  i2110.shaderName = i2111[0]
  i2110.errorMessage = i2111[1]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2116 = root || new pc.UnityShaderPass()
  var i2117 = data
  i2116.id = i2117[0]
  i2116.subShaderIndex = i2117[1]
  i2116.name = i2117[2]
  i2116.passType = i2117[3]
  i2116.grabPassTextureName = i2117[4]
  i2116.usePass = !!i2117[5]
  i2116.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[6], i2116.zTest)
  i2116.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[7], i2116.zWrite)
  i2116.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[8], i2116.culling)
  i2116.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2117[9], i2116.blending)
  i2116.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2117[10], i2116.alphaBlending)
  i2116.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[11], i2116.colorWriteMask)
  i2116.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[12], i2116.offsetUnits)
  i2116.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[13], i2116.offsetFactor)
  i2116.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[14], i2116.stencilRef)
  i2116.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[15], i2116.stencilReadMask)
  i2116.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2117[16], i2116.stencilWriteMask)
  i2116.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[17], i2116.stencilOp)
  i2116.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[18], i2116.stencilOpFront)
  i2116.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2117[19], i2116.stencilOpBack)
  var i2119 = i2117[20]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2119[i + 0]) );
  }
  i2116.tags = i2118
  var i2121 = i2117[21]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( i2121[i + 0] );
  }
  i2116.passDefinedKeywords = i2120
  var i2123 = i2117[22]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2123[i + 0]) );
  }
  i2116.passDefinedKeywordGroups = i2122
  var i2125 = i2117[23]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 1) {
    i2124.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2125[i + 0]) );
  }
  i2116.variants = i2124
  var i2127 = i2117[24]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2127[i + 0]) );
  }
  i2116.excludedVariants = i2126
  i2116.hasDepthReader = !!i2117[25]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2129 = data
  i2128.val = i2129[0]
  i2128.name = i2129[1]
  return i2128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2131 = data
  i2130.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[0], i2130.src)
  i2130.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[1], i2130.dst)
  i2130.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2131[2], i2130.op)
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2133 = data
  i2132.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[0], i2132.pass)
  i2132.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[1], i2132.fail)
  i2132.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[2], i2132.zFail)
  i2132.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2133[3], i2132.comp)
  return i2132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2137 = data
  i2136.name = i2137[0]
  i2136.value = i2137[1]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( i2143[i + 0] );
  }
  i2140.keywords = i2142
  i2140.hasDiscard = !!i2141[1]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2147 = data
  i2146.passId = i2147[0]
  i2146.subShaderIndex = i2147[1]
  var i2149 = i2147[2]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( i2149[i + 0] );
  }
  i2146.keywords = i2148
  i2146.vertexProgram = i2147[3]
  i2146.fragmentProgram = i2147[4]
  i2146.readDepth = !!i2147[5]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2153 = data
  request.r(i2153[0], i2153[1], 0, i2152, 'shader')
  i2152.pass = i2153[2]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2157 = data
  i2156.name = i2157[0]
  i2156.type = i2157[1]
  i2156.value = new pc.Vec4( i2157[2], i2157[3], i2157[4], i2157[5] )
  i2156.textureValue = i2157[6]
  return i2156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2158 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2159 = data
  i2158.name = i2159[0]
  request.r(i2159[1], i2159[2], 0, i2158, 'texture')
  i2158.aabb = i2159[3]
  i2158.vertices = i2159[4]
  i2158.triangles = i2159[5]
  i2158.textureRect = UnityEngine.Rect.MinMaxRect(i2159[6], i2159[7], i2159[8], i2159[9])
  i2158.packedRect = UnityEngine.Rect.MinMaxRect(i2159[10], i2159[11], i2159[12], i2159[13])
  i2158.border = new pc.Vec4( i2159[14], i2159[15], i2159[16], i2159[17] )
  i2158.transparency = i2159[18]
  i2158.bounds = i2159[19]
  i2158.pixelsPerUnit = i2159[20]
  i2158.textureWidth = i2159[21]
  i2158.textureHeight = i2159[22]
  i2158.nativeSize = new pc.Vec2( i2159[23], i2159[24] )
  i2158.pivot = new pc.Vec2( i2159[25], i2159[26] )
  i2158.textureRectOffset = new pc.Vec2( i2159[27], i2159[28] )
  return i2158
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2161 = data
  i2160.name = i2161[0]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2163 = data
  i2162.name = i2163[0]
  i2162.wrapMode = i2163[1]
  i2162.isLooping = !!i2163[2]
  i2162.length = i2163[3]
  var i2165 = i2163[4]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2165[i + 0]) );
  }
  i2162.curves = i2164
  var i2167 = i2163[5]
  var i2166 = []
  for(var i = 0; i < i2167.length; i += 1) {
    i2166.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2167[i + 0]) );
  }
  i2162.events = i2166
  i2162.halfPrecision = !!i2163[6]
  i2162.frameRate = i2163[7]
  i2162.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2163[8], i2162.localBounds)
  i2162.hasMuscleCurves = !!i2163[9]
  var i2169 = i2163[10]
  var i2168 = []
  for(var i = 0; i < i2169.length; i += 1) {
    i2168.push( i2169[i + 0] );
  }
  i2162.clipMuscleConstant = i2168
  i2162.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2163[11], i2162.clipBindingConstant)
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2173 = data
  i2172.path = i2173[0]
  i2172.componentType = i2173[1]
  i2172.property = i2173[2]
  i2172.keys = i2173[3]
  var i2175 = i2173[4]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2175[i + 0]) );
  }
  i2172.objectReferenceKeys = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2179 = data
  i2178.functionName = i2179[0]
  i2178.floatParameter = i2179[1]
  i2178.intParameter = i2179[2]
  i2178.stringParameter = i2179[3]
  request.r(i2179[4], i2179[5], 0, i2178, 'objectReferenceParameter')
  i2178.time = i2179[6]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2181 = data
  i2180.center = new pc.Vec3( i2181[0], i2181[1], i2181[2] )
  i2180.extends = new pc.Vec3( i2181[3], i2181[4], i2181[5] )
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2185 = data
  var i2187 = i2185[0]
  var i2186 = []
  for(var i = 0; i < i2187.length; i += 1) {
    i2186.push( i2187[i + 0] );
  }
  i2184.genericBindings = i2186
  var i2189 = i2185[1]
  var i2188 = []
  for(var i = 0; i < i2189.length; i += 1) {
    i2188.push( i2189[i + 0] );
  }
  i2184.pptrCurveMapping = i2188
  return i2184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2193 = data
  i2192.time = i2193[0]
  request.r(i2193[1], i2193[2], 0, i2192, 'value')
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2195 = data
  i2194.name = i2195[0]
  i2194.ascent = i2195[1]
  i2194.originalLineHeight = i2195[2]
  i2194.fontSize = i2195[3]
  var i2197 = i2195[4]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2197[i + 0]) );
  }
  i2194.characterInfo = i2196
  request.r(i2195[5], i2195[6], 0, i2194, 'texture')
  i2194.originalFontSize = i2195[7]
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2201 = data
  i2200.index = i2201[0]
  i2200.advance = i2201[1]
  i2200.bearing = i2201[2]
  i2200.glyphWidth = i2201[3]
  i2200.glyphHeight = i2201[4]
  i2200.minX = i2201[5]
  i2200.maxX = i2201[6]
  i2200.minY = i2201[7]
  i2200.maxY = i2201[8]
  i2200.uvBottomLeftX = i2201[9]
  i2200.uvBottomLeftY = i2201[10]
  i2200.uvBottomRightX = i2201[11]
  i2200.uvBottomRightY = i2201[12]
  i2200.uvTopLeftX = i2201[13]
  i2200.uvTopLeftY = i2201[14]
  i2200.uvTopRightX = i2201[15]
  i2200.uvTopRightY = i2201[16]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2203 = data
  i2202.name = i2203[0]
  var i2205 = i2203[1]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2205[i + 0]) );
  }
  i2202.states = i2204
  var i2207 = i2203[2]
  var i2206 = []
  for(var i = 0; i < i2207.length; i += 1) {
    i2206.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2207[i + 0]) );
  }
  i2202.layers = i2206
  var i2209 = i2203[3]
  var i2208 = []
  for(var i = 0; i < i2209.length; i += 1) {
    i2208.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2209[i + 0]) );
  }
  i2202.parameters = i2208
  i2202.animationClips = i2203[4]
  i2202.HasSubStateMachines = !!i2203[5]
  i2202.avatarUnsupported = i2203[6]
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2213 = data
  i2212.cycleOffset = i2213[0]
  i2212.cycleOffsetParameter = i2213[1]
  i2212.cycleOffsetParameterActive = !!i2213[2]
  i2212.mirror = !!i2213[3]
  i2212.mirrorParameter = i2213[4]
  i2212.mirrorParameterActive = !!i2213[5]
  i2212.motionId = i2213[6]
  i2212.nameHash = i2213[7]
  i2212.fullPathHash = i2213[8]
  i2212.speed = i2213[9]
  i2212.speedParameter = i2213[10]
  i2212.speedParameterActive = !!i2213[11]
  i2212.tag = i2213[12]
  i2212.name = i2213[13]
  i2212.layer = i2213[14]
  i2212.writeDefaultValues = !!i2213[15]
  var i2215 = i2213[16]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2215[i + 0]) );
  }
  i2212.transitions = i2214
  var i2217 = i2213[17]
  var i2216 = []
  for(var i = 0; i < i2217.length; i += 2) {
  request.r(i2217[i + 0], i2217[i + 1], 2, i2216, '')
  }
  i2212.behaviours = i2216
  return i2212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2221 = data
  i2220.fullPath = i2221[0]
  i2220.canTransitionToSelf = !!i2221[1]
  i2220.duration = i2221[2]
  i2220.exitTime = i2221[3]
  i2220.hasExitTime = !!i2221[4]
  i2220.hasFixedDuration = !!i2221[5]
  i2220.interruptionSource = i2221[6]
  i2220.offset = i2221[7]
  i2220.orderedInterruption = !!i2221[8]
  i2220.destinationStateNameHash = i2221[9]
  i2220.destinationStateMachineId = i2221[10]
  i2220.isExit = !!i2221[11]
  i2220.mute = !!i2221[12]
  i2220.solo = !!i2221[13]
  var i2223 = i2221[14]
  var i2222 = []
  for(var i = 0; i < i2223.length; i += 1) {
    i2222.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2223[i + 0]) );
  }
  i2220.conditions = i2222
  return i2220
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2226 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2227 = data
  i2226.mode = i2227[0]
  i2226.parameter = i2227[1]
  i2226.threshold = i2227[2]
  return i2226
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2233 = data
  i2232.blendingMode = i2233[0]
  i2232.defaultWeight = i2233[1]
  i2232.name = i2233[2]
  i2232.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2233[3], i2232.stateMachine)
  return i2232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2234 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2235 = data
  i2234.id = i2235[0]
  i2234.defaultStateNameHash = i2235[1]
  var i2237 = i2235[2]
  var i2236 = []
  for(var i = 0; i < i2237.length; i += 1) {
    i2236.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2237[i + 0]) );
  }
  i2234.entryTransitions = i2236
  var i2239 = i2235[3]
  var i2238 = []
  for(var i = 0; i < i2239.length; i += 1) {
    i2238.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2239[i + 0]) );
  }
  i2234.anyStateTransitions = i2238
  return i2234
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2242 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2243 = data
  i2242.destinationStateNameHash = i2243[0]
  i2242.destinationStateMachineId = i2243[1]
  i2242.isExit = !!i2243[2]
  i2242.mute = !!i2243[3]
  i2242.solo = !!i2243[4]
  var i2245 = i2243[5]
  var i2244 = []
  for(var i = 0; i < i2245.length; i += 1) {
    i2244.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2245[i + 0]) );
  }
  i2242.conditions = i2244
  return i2242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2248 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2249 = data
  i2248.defaultBool = !!i2249[0]
  i2248.defaultFloat = i2249[1]
  i2248.defaultInt = i2249[2]
  i2248.name = i2249[3]
  i2248.nameHash = i2249[4]
  i2248.type = i2249[5]
  return i2248
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2251 = data
  var i2253 = i2251[0]
  var i2252 = []
  for(var i = 0; i < i2253.length; i += 1) {
    i2252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2253[i + 0]) );
  }
  i2250.files = i2252
  i2250.componentToPrefabIds = i2251[1]
  return i2250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2257 = data
  i2256.path = i2257[0]
  request.r(i2257[1], i2257[2], 0, i2256, 'unityObject')
  return i2256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2259 = data
  var i2261 = i2259[0]
  var i2260 = []
  for(var i = 0; i < i2261.length; i += 1) {
    i2260.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2261[i + 0]) );
  }
  i2258.scriptsExecutionOrder = i2260
  var i2263 = i2259[1]
  var i2262 = []
  for(var i = 0; i < i2263.length; i += 1) {
    i2262.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2263[i + 0]) );
  }
  i2258.sortingLayers = i2262
  var i2265 = i2259[2]
  var i2264 = []
  for(var i = 0; i < i2265.length; i += 1) {
    i2264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2265[i + 0]) );
  }
  i2258.cullingLayers = i2264
  i2258.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2259[3], i2258.timeSettings)
  i2258.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2259[4], i2258.physicsSettings)
  i2258.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2259[5], i2258.physics2DSettings)
  i2258.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2259[6], i2258.qualitySettings)
  i2258.enableRealtimeShadows = !!i2259[7]
  i2258.enableAutoInstancing = !!i2259[8]
  i2258.enableDynamicBatching = !!i2259[9]
  i2258.lightmapEncodingQuality = i2259[10]
  i2258.desiredColorSpace = i2259[11]
  var i2267 = i2259[12]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( i2267[i + 0] );
  }
  i2258.allTags = i2266
  return i2258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2271 = data
  i2270.name = i2271[0]
  i2270.value = i2271[1]
  return i2270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2275 = data
  i2274.id = i2275[0]
  i2274.name = i2275[1]
  i2274.value = i2275[2]
  return i2274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2279 = data
  i2278.id = i2279[0]
  i2278.name = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2280 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2281 = data
  i2280.fixedDeltaTime = i2281[0]
  i2280.maximumDeltaTime = i2281[1]
  i2280.timeScale = i2281[2]
  i2280.maximumParticleTimestep = i2281[3]
  return i2280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2283 = data
  i2282.gravity = new pc.Vec3( i2283[0], i2283[1], i2283[2] )
  i2282.defaultSolverIterations = i2283[3]
  i2282.bounceThreshold = i2283[4]
  i2282.autoSyncTransforms = !!i2283[5]
  i2282.autoSimulation = !!i2283[6]
  var i2285 = i2283[7]
  var i2284 = []
  for(var i = 0; i < i2285.length; i += 1) {
    i2284.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2285[i + 0]) );
  }
  i2282.collisionMatrix = i2284
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2289 = data
  i2288.enabled = !!i2289[0]
  i2288.layerId = i2289[1]
  i2288.otherLayerId = i2289[2]
  return i2288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2291 = data
  request.r(i2291[0], i2291[1], 0, i2290, 'material')
  i2290.gravity = new pc.Vec2( i2291[2], i2291[3] )
  i2290.positionIterations = i2291[4]
  i2290.velocityIterations = i2291[5]
  i2290.velocityThreshold = i2291[6]
  i2290.maxLinearCorrection = i2291[7]
  i2290.maxAngularCorrection = i2291[8]
  i2290.maxTranslationSpeed = i2291[9]
  i2290.maxRotationSpeed = i2291[10]
  i2290.baumgarteScale = i2291[11]
  i2290.baumgarteTOIScale = i2291[12]
  i2290.timeToSleep = i2291[13]
  i2290.linearSleepTolerance = i2291[14]
  i2290.angularSleepTolerance = i2291[15]
  i2290.defaultContactOffset = i2291[16]
  i2290.autoSimulation = !!i2291[17]
  i2290.queriesHitTriggers = !!i2291[18]
  i2290.queriesStartInColliders = !!i2291[19]
  i2290.callbacksOnDisable = !!i2291[20]
  i2290.reuseCollisionCallbacks = !!i2291[21]
  i2290.autoSyncTransforms = !!i2291[22]
  var i2293 = i2291[23]
  var i2292 = []
  for(var i = 0; i < i2293.length; i += 1) {
    i2292.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2293[i + 0]) );
  }
  i2290.collisionMatrix = i2292
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2297 = data
  i2296.enabled = !!i2297[0]
  i2296.layerId = i2297[1]
  i2296.otherLayerId = i2297[2]
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2299 = data
  var i2301 = i2299[0]
  var i2300 = []
  for(var i = 0; i < i2301.length; i += 1) {
    i2300.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2301[i + 0]) );
  }
  i2298.qualityLevels = i2300
  var i2303 = i2299[1]
  var i2302 = []
  for(var i = 0; i < i2303.length; i += 1) {
    i2302.push( i2303[i + 0] );
  }
  i2298.names = i2302
  i2298.shadows = i2299[2]
  i2298.anisotropicFiltering = i2299[3]
  i2298.antiAliasing = i2299[4]
  i2298.lodBias = i2299[5]
  i2298.shadowCascades = i2299[6]
  i2298.shadowDistance = i2299[7]
  i2298.shadowmaskMode = i2299[8]
  i2298.shadowProjection = i2299[9]
  i2298.shadowResolution = i2299[10]
  i2298.softParticles = !!i2299[11]
  i2298.softVegetation = !!i2299[12]
  i2298.activeColorSpace = i2299[13]
  i2298.desiredColorSpace = i2299[14]
  i2298.masterTextureLimit = i2299[15]
  i2298.maxQueuedFrames = i2299[16]
  i2298.particleRaycastBudget = i2299[17]
  i2298.pixelLightCount = i2299[18]
  i2298.realtimeReflectionProbes = !!i2299[19]
  i2298.shadowCascade2Split = i2299[20]
  i2298.shadowCascade4Split = new pc.Vec3( i2299[21], i2299[22], i2299[23] )
  i2298.streamingMipmapsActive = !!i2299[24]
  i2298.vSyncCount = i2299[25]
  i2298.asyncUploadBufferSize = i2299[26]
  i2298.asyncUploadTimeSlice = i2299[27]
  i2298.billboardsFaceCameraPosition = !!i2299[28]
  i2298.shadowNearPlaneOffset = i2299[29]
  i2298.streamingMipmapsMemoryBudget = i2299[30]
  i2298.maximumLODLevel = i2299[31]
  i2298.streamingMipmapsAddAllCameras = !!i2299[32]
  i2298.streamingMipmapsMaxLevelReduction = i2299[33]
  i2298.streamingMipmapsRenderersPerFrame = i2299[34]
  i2298.resolutionScalingFixedDPIFactor = i2299[35]
  i2298.streamingMipmapsMaxFileIORequests = i2299[36]
  i2298.currentQualityLevel = i2299[37]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2307 = data
  i2306.name = i2307[0]
  var i2309 = i2307[1]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2309[i + 0]) );
  }
  i2306.tos = i2308
  var i2311 = i2307[2]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( i2311[i + 0] );
  }
  i2306.constant = i2310
  i2306.isValid = !!i2307[3]
  i2306.isHuman = !!i2307[4]
  i2306.hasRootMotion = !!i2307[5]
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2314 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2315 = data
  i2314.hash = i2315[0]
  i2314.path = i2315[1]
  return i2314
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2318 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2319 = data
  i2318.weight = i2319[0]
  i2318.vertices = i2319[1]
  i2318.normals = i2319[2]
  i2318.tangents = i2319[3]
  return i2318
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

Deserializers.buildID = "340c9c7f-e3c0-4f00-a45a-739d347356da";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

