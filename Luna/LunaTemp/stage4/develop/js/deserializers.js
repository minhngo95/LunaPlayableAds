var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.JointSpring' )
  var i1435 = data
  i1434.spring = i1435[0]
  i1434.damper = i1435[1]
  i1434.targetPosition = i1435[2]
  return i1434
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointMotor' )
  var i1437 = data
  i1436.m_TargetVelocity = i1437[0]
  i1436.m_Force = i1437[1]
  i1436.m_FreeSpin = i1437[2]
  return i1436
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointLimits' )
  var i1439 = data
  i1438.m_Min = i1439[0]
  i1438.m_Max = i1439[1]
  i1438.m_Bounciness = i1439[2]
  i1438.m_BounceMinVelocity = i1439[3]
  i1438.m_ContactDistance = i1439[4]
  i1438.minBounce = i1439[5]
  i1438.maxBounce = i1439[6]
  return i1438
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointDrive' )
  var i1441 = data
  i1440.m_PositionSpring = i1441[0]
  i1440.m_PositionDamper = i1441[1]
  i1440.m_MaximumForce = i1441[2]
  return i1440
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1443 = data
  i1442.m_Spring = i1443[0]
  i1442.m_Damper = i1443[1]
  return i1442
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1444 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1445 = data
  i1444.m_Limit = i1445[0]
  i1444.m_Bounciness = i1445[1]
  i1444.m_ContactDistance = i1445[2]
  return i1444
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1446 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1447 = data
  i1446.m_ExtremumSlip = i1447[0]
  i1446.m_ExtremumValue = i1447[1]
  i1446.m_AsymptoteSlip = i1447[2]
  i1446.m_AsymptoteValue = i1447[3]
  i1446.m_Stiffness = i1447[4]
  return i1446
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1448 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1449 = data
  i1448.m_LowerAngle = i1449[0]
  i1448.m_UpperAngle = i1449[1]
  return i1448
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1450 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1451 = data
  i1450.m_MotorSpeed = i1451[0]
  i1450.m_MaximumMotorTorque = i1451[1]
  return i1450
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1452 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1453 = data
  i1452.m_DampingRatio = i1453[0]
  i1452.m_Frequency = i1453[1]
  i1452.m_Angle = i1453[2]
  return i1452
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1454 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1455 = data
  i1454.m_LowerTranslation = i1455[0]
  i1454.m_UpperTranslation = i1455[1]
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1456 = root || new pc.UnityMaterial()
  var i1457 = data
  i1456.name = i1457[0]
  request.r(i1457[1], i1457[2], 0, i1456, 'shader')
  i1456.renderQueue = i1457[3]
  i1456.enableInstancing = !!i1457[4]
  var i1459 = i1457[5]
  var i1458 = []
  for(var i = 0; i < i1459.length; i += 1) {
    i1458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1459[i + 0]) );
  }
  i1456.floatParameters = i1458
  var i1461 = i1457[6]
  var i1460 = []
  for(var i = 0; i < i1461.length; i += 1) {
    i1460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1461[i + 0]) );
  }
  i1456.colorParameters = i1460
  var i1463 = i1457[7]
  var i1462 = []
  for(var i = 0; i < i1463.length; i += 1) {
    i1462.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1463[i + 0]) );
  }
  i1456.vectorParameters = i1462
  var i1465 = i1457[8]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1465[i + 0]) );
  }
  i1456.textureParameters = i1464
  var i1467 = i1457[9]
  var i1466 = []
  for(var i = 0; i < i1467.length; i += 1) {
    i1466.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1467[i + 0]) );
  }
  i1456.materialFlags = i1466
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.value = i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.value = new pc.Color(i1475[1], i1475[2], i1475[3], i1475[4])
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1479 = data
  i1478.name = i1479[0]
  i1478.value = new pc.Vec4( i1479[1], i1479[2], i1479[3], i1479[4] )
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1483 = data
  i1482.name = i1483[0]
  request.r(i1483[1], i1483[2], 0, i1482, 'value')
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.enabled = !!i1487[1]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.width = i1489[1]
  i1488.height = i1489[2]
  i1488.mipmapCount = i1489[3]
  i1488.anisoLevel = i1489[4]
  i1488.filterMode = i1489[5]
  i1488.hdr = !!i1489[6]
  i1488.format = i1489[7]
  i1488.wrapMode = i1489[8]
  i1488.alphaIsTransparency = !!i1489[9]
  i1488.alphaSource = i1489[10]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1491 = data
  i1490.position = new pc.Vec3( i1491[0], i1491[1], i1491[2] )
  i1490.scale = new pc.Vec3( i1491[3], i1491[4], i1491[5] )
  i1490.rotation = new pc.Quat(i1491[6], i1491[7], i1491[8], i1491[9])
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1493 = data
  request.r(i1493[0], i1493[1], 0, i1492, 'animatorController')
  request.r(i1493[2], i1493[3], 0, i1492, 'avatar')
  i1492.updateMode = i1493[4]
  i1492.hasTransformHierarchy = !!i1493[5]
  i1492.applyRootMotion = !!i1493[6]
  var i1495 = i1493[7]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 2) {
  request.r(i1495[i + 0], i1495[i + 1], 2, i1494, '')
  }
  i1492.humanBones = i1494
  i1492.enabled = !!i1493[8]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1499 = data
  i1498.name = i1499[0]
  i1498.tagId = i1499[1]
  i1498.enabled = !!i1499[2]
  i1498.isStatic = !!i1499[3]
  i1498.layer = i1499[4]
  return i1498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1501 = data
  i1500.enabled = !!i1501[0]
  request.r(i1501[1], i1501[2], 0, i1500, 'sharedMaterial')
  var i1503 = i1501[3]
  var i1502 = []
  for(var i = 0; i < i1503.length; i += 2) {
  request.r(i1503[i + 0], i1503[i + 1], 2, i1502, '')
  }
  i1500.sharedMaterials = i1502
  i1500.receiveShadows = !!i1501[4]
  i1500.shadowCastingMode = i1501[5]
  i1500.sortingLayerID = i1501[6]
  i1500.sortingOrder = i1501[7]
  i1500.lightmapIndex = i1501[8]
  i1500.lightmapSceneIndex = i1501[9]
  i1500.lightmapScaleOffset = new pc.Vec4( i1501[10], i1501[11], i1501[12], i1501[13] )
  i1500.lightProbeUsage = i1501[14]
  i1500.reflectionProbeUsage = i1501[15]
  request.r(i1501[16], i1501[17], 0, i1500, 'sharedMesh')
  var i1505 = i1501[18]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 2) {
  request.r(i1505[i + 0], i1505[i + 1], 2, i1504, '')
  }
  i1500.bones = i1504
  i1500.updateWhenOffscreen = !!i1501[19]
  i1500.localBounds = i1501[20]
  request.r(i1501[21], i1501[22], 0, i1500, 'rootBone')
  var i1507 = i1501[23]
  var i1506 = []
  for(var i = 0; i < i1507.length; i += 1) {
    i1506.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1507[i + 0]) );
  }
  i1500.blendShapesWeights = i1506
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1513 = data
  i1512.weight = i1513[0]
  return i1512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1515 = data
  i1514.name = i1515[0]
  i1514.halfPrecision = !!i1515[1]
  i1514.vertexCount = i1515[2]
  i1514.aabb = i1515[3]
  var i1517 = i1515[4]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 1) {
    i1516.push( !!i1517[i + 0] );
  }
  i1514.streams = i1516
  i1514.vertices = i1515[5]
  var i1519 = i1515[6]
  var i1518 = []
  for(var i = 0; i < i1519.length; i += 1) {
    i1518.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1519[i + 0]) );
  }
  i1514.subMeshes = i1518
  var i1521 = i1515[7]
  var i1520 = []
  for(var i = 0; i < i1521.length; i += 16) {
    i1520.push( new pc.Mat4().setData(i1521[i + 0], i1521[i + 1], i1521[i + 2], i1521[i + 3],  i1521[i + 4], i1521[i + 5], i1521[i + 6], i1521[i + 7],  i1521[i + 8], i1521[i + 9], i1521[i + 10], i1521[i + 11],  i1521[i + 12], i1521[i + 13], i1521[i + 14], i1521[i + 15]) );
  }
  i1514.bindposes = i1520
  var i1523 = i1515[8]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 1) {
    i1522.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1523[i + 0]) );
  }
  i1514.blendShapes = i1522
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1529 = data
  i1528.triangles = i1529[0]
  return i1528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1535 = data
  i1534.name = i1535[0]
  var i1537 = i1535[1]
  var i1536 = []
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1537[i + 0]) );
  }
  i1534.frames = i1536
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'sharedMesh')
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'additionalVertexStreams')
  i1540.enabled = !!i1541[2]
  request.r(i1541[3], i1541[4], 0, i1540, 'sharedMaterial')
  var i1543 = i1541[5]
  var i1542 = []
  for(var i = 0; i < i1543.length; i += 2) {
  request.r(i1543[i + 0], i1543[i + 1], 2, i1542, '')
  }
  i1540.sharedMaterials = i1542
  i1540.receiveShadows = !!i1541[6]
  i1540.shadowCastingMode = i1541[7]
  i1540.sortingLayerID = i1541[8]
  i1540.sortingOrder = i1541[9]
  i1540.lightmapIndex = i1541[10]
  i1540.lightmapSceneIndex = i1541[11]
  i1540.lightmapScaleOffset = new pc.Vec4( i1541[12], i1541[13], i1541[14], i1541[15] )
  i1540.lightProbeUsage = i1541[16]
  i1540.reflectionProbeUsage = i1541[17]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1545 = data
  i1544.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1545[0], i1544.main)
  i1544.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1545[1], i1544.colorBySpeed)
  i1544.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1545[2], i1544.colorOverLifetime)
  i1544.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1545[3], i1544.emission)
  i1544.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1545[4], i1544.rotationBySpeed)
  i1544.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1545[5], i1544.rotationOverLifetime)
  i1544.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1545[6], i1544.shape)
  i1544.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1545[7], i1544.sizeBySpeed)
  i1544.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1545[8], i1544.sizeOverLifetime)
  i1544.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1545[9], i1544.textureSheetAnimation)
  i1544.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1545[10], i1544.velocityOverLifetime)
  i1544.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1545[11], i1544.noise)
  i1544.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1545[12], i1544.inheritVelocity)
  i1544.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1545[13], i1544.forceOverLifetime)
  i1544.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1545[14], i1544.limitVelocityOverLifetime)
  i1544.useAutoRandomSeed = !!i1545[15]
  i1544.randomSeed = i1545[16]
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1546 = root || new pc.ParticleSystemMain()
  var i1547 = data
  i1546.duration = i1547[0]
  i1546.loop = !!i1547[1]
  i1546.prewarm = !!i1547[2]
  i1546.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[3], i1546.startDelay)
  i1546.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[4], i1546.startLifetime)
  i1546.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[5], i1546.startSpeed)
  i1546.startSize3D = !!i1547[6]
  i1546.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[7], i1546.startSizeX)
  i1546.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[8], i1546.startSizeY)
  i1546.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[9], i1546.startSizeZ)
  i1546.startRotation3D = !!i1547[10]
  i1546.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[11], i1546.startRotationX)
  i1546.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[12], i1546.startRotationY)
  i1546.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[13], i1546.startRotationZ)
  i1546.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1547[14], i1546.startColor)
  i1546.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1547[15], i1546.gravityModifier)
  i1546.simulationSpace = i1547[16]
  request.r(i1547[17], i1547[18], 0, i1546, 'customSimulationSpace')
  i1546.simulationSpeed = i1547[19]
  i1546.useUnscaledTime = !!i1547[20]
  i1546.scalingMode = i1547[21]
  i1546.playOnAwake = !!i1547[22]
  i1546.maxParticles = i1547[23]
  i1546.emitterVelocityMode = i1547[24]
  i1546.stopAction = i1547[25]
  return i1546
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1548 = root || new pc.MinMaxCurve()
  var i1549 = data
  i1548.mode = i1549[0]
  i1548.curveMin = new pc.AnimationCurve( { keys_flow: i1549[1] } )
  i1548.curveMax = new pc.AnimationCurve( { keys_flow: i1549[2] } )
  i1548.curveMultiplier = i1549[3]
  i1548.constantMin = i1549[4]
  i1548.constantMax = i1549[5]
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1550 = root || new pc.MinMaxGradient()
  var i1551 = data
  i1550.mode = i1551[0]
  i1550.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1551[1], i1550.gradientMin)
  i1550.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1551[2], i1550.gradientMax)
  i1550.colorMin = new pc.Color(i1551[3], i1551[4], i1551[5], i1551[6])
  i1550.colorMax = new pc.Color(i1551[7], i1551[8], i1551[9], i1551[10])
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1552 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1553 = data
  i1552.mode = i1553[0]
  var i1555 = i1553[1]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1555[i + 0]) );
  }
  i1552.colorKeys = i1554
  var i1557 = i1553[2]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1557[i + 0]) );
  }
  i1552.alphaKeys = i1556
  return i1552
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1558 = root || new pc.ParticleSystemColorBySpeed()
  var i1559 = data
  i1558.enabled = !!i1559[0]
  i1558.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1559[1], i1558.color)
  i1558.range = new pc.Vec2( i1559[2], i1559[3] )
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1563 = data
  i1562.color = new pc.Color(i1563[0], i1563[1], i1563[2], i1563[3])
  i1562.time = i1563[4]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1567 = data
  i1566.alpha = i1567[0]
  i1566.time = i1567[1]
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemColorOverLifetime()
  var i1569 = data
  i1568.enabled = !!i1569[0]
  i1568.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1569[1], i1568.color)
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemEmitter()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[1], i1570.rateOverTime)
  i1570.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.rateOverDistance)
  var i1573 = i1571[3]
  var i1572 = []
  for(var i = 0; i < i1573.length; i += 1) {
    i1572.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1573[i + 0]) );
  }
  i1570.bursts = i1572
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1576 = root || new pc.ParticleSystemBurst()
  var i1577 = data
  i1576.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[0], i1576.count)
  i1576.cycleCount = i1577[1]
  i1576.minCount = i1577[2]
  i1576.maxCount = i1577[3]
  i1576.repeatInterval = i1577[4]
  i1576.time = i1577[5]
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1578 = root || new pc.ParticleSystemRotationBySpeed()
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[1], i1578.x)
  i1578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[2], i1578.y)
  i1578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[3], i1578.z)
  i1578.separateAxes = !!i1579[4]
  i1578.range = new pc.Vec2( i1579[5], i1579[6] )
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1581 = data
  i1580.enabled = !!i1581[0]
  i1580.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[1], i1580.x)
  i1580.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[2], i1580.y)
  i1580.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[3], i1580.z)
  i1580.separateAxes = !!i1581[4]
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1582 = root || new pc.ParticleSystemShape()
  var i1583 = data
  i1582.enabled = !!i1583[0]
  i1582.shapeType = i1583[1]
  i1582.randomDirectionAmount = i1583[2]
  i1582.sphericalDirectionAmount = i1583[3]
  i1582.randomPositionAmount = i1583[4]
  i1582.alignToDirection = !!i1583[5]
  i1582.radius = i1583[6]
  i1582.radiusMode = i1583[7]
  i1582.radiusSpread = i1583[8]
  i1582.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[9], i1582.radiusSpeed)
  i1582.radiusThickness = i1583[10]
  i1582.angle = i1583[11]
  i1582.length = i1583[12]
  i1582.boxThickness = new pc.Vec3( i1583[13], i1583[14], i1583[15] )
  i1582.meshShapeType = i1583[16]
  request.r(i1583[17], i1583[18], 0, i1582, 'mesh')
  request.r(i1583[19], i1583[20], 0, i1582, 'meshRenderer')
  request.r(i1583[21], i1583[22], 0, i1582, 'skinnedMeshRenderer')
  i1582.useMeshMaterialIndex = !!i1583[23]
  i1582.meshMaterialIndex = i1583[24]
  i1582.useMeshColors = !!i1583[25]
  i1582.normalOffset = i1583[26]
  i1582.arc = i1583[27]
  i1582.arcMode = i1583[28]
  i1582.arcSpread = i1583[29]
  i1582.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1583[30], i1582.arcSpeed)
  i1582.donutRadius = i1583[31]
  i1582.position = new pc.Vec3( i1583[32], i1583[33], i1583[34] )
  i1582.rotation = new pc.Vec3( i1583[35], i1583[36], i1583[37] )
  i1582.scale = new pc.Vec3( i1583[38], i1583[39], i1583[40] )
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1584 = root || new pc.ParticleSystemSizeBySpeed()
  var i1585 = data
  i1584.enabled = !!i1585[0]
  i1584.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[1], i1584.x)
  i1584.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[2], i1584.y)
  i1584.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1585[3], i1584.z)
  i1584.separateAxes = !!i1585[4]
  i1584.range = new pc.Vec2( i1585[5], i1585[6] )
  return i1584
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[1], i1586.x)
  i1586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[2], i1586.y)
  i1586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[3], i1586.z)
  i1586.separateAxes = !!i1587[4]
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.mode = i1589[1]
  i1588.animation = i1589[2]
  i1588.numTilesX = i1589[3]
  i1588.numTilesY = i1589[4]
  i1588.useRandomRow = !!i1589[5]
  i1588.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[6], i1588.frameOverTime)
  i1588.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[7], i1588.startFrame)
  i1588.cycleCount = i1589[8]
  i1588.rowIndex = i1589[9]
  i1588.flipU = i1589[10]
  i1588.flipV = i1589[11]
  i1588.spriteCount = i1589[12]
  var i1591 = i1589[13]
  var i1590 = []
  for(var i = 0; i < i1591.length; i += 2) {
  request.r(i1591[i + 0], i1591[i + 1], 2, i1590, '')
  }
  i1588.sprites = i1590
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1594 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1595 = data
  i1594.enabled = !!i1595[0]
  i1594.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[1], i1594.x)
  i1594.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[2], i1594.y)
  i1594.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[3], i1594.z)
  i1594.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[4], i1594.radial)
  i1594.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[5], i1594.speedModifier)
  i1594.space = i1595[6]
  i1594.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[7], i1594.orbitalX)
  i1594.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[8], i1594.orbitalY)
  i1594.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[9], i1594.orbitalZ)
  i1594.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[10], i1594.orbitalOffsetX)
  i1594.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[11], i1594.orbitalOffsetY)
  i1594.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[12], i1594.orbitalOffsetZ)
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1596 = root || new pc.ParticleSystemNoise()
  var i1597 = data
  i1596.enabled = !!i1597[0]
  i1596.separateAxes = !!i1597[1]
  i1596.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[2], i1596.strengthX)
  i1596.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[3], i1596.strengthY)
  i1596.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[4], i1596.strengthZ)
  i1596.frequency = i1597[5]
  i1596.damping = !!i1597[6]
  i1596.octaveCount = i1597[7]
  i1596.octaveMultiplier = i1597[8]
  i1596.octaveScale = i1597[9]
  i1596.quality = i1597[10]
  i1596.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[11], i1596.scrollSpeed)
  i1596.scrollSpeedMultiplier = i1597[12]
  i1596.remapEnabled = !!i1597[13]
  i1596.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[14], i1596.remapX)
  i1596.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[15], i1596.remapY)
  i1596.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[16], i1596.remapZ)
  i1596.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[17], i1596.positionAmount)
  i1596.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[18], i1596.rotationAmount)
  i1596.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1597[19], i1596.sizeAmount)
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1598 = root || new pc.ParticleSystemInheritVelocity()
  var i1599 = data
  i1598.enabled = !!i1599[0]
  i1598.mode = i1599[1]
  i1598.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1599[2], i1598.curve)
  return i1598
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1600 = root || new pc.ParticleSystemForceOverLifetime()
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[1], i1600.x)
  i1600.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[2], i1600.y)
  i1600.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1601[3], i1600.z)
  i1600.space = i1601[4]
  i1600.randomized = !!i1601[5]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1602 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[1], i1602.limit)
  i1602.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[2], i1602.limitX)
  i1602.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[3], i1602.limitY)
  i1602.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[4], i1602.limitZ)
  i1602.dampen = i1603[5]
  i1602.separateAxes = !!i1603[6]
  i1602.space = i1603[7]
  i1602.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1603[8], i1602.drag)
  i1602.multiplyDragByParticleSize = !!i1603[9]
  i1602.multiplyDragByParticleVelocity = !!i1603[10]
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1605 = data
  i1604.enabled = !!i1605[0]
  request.r(i1605[1], i1605[2], 0, i1604, 'sharedMaterial')
  var i1607 = i1605[3]
  var i1606 = []
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 2, i1606, '')
  }
  i1604.sharedMaterials = i1606
  i1604.receiveShadows = !!i1605[4]
  i1604.shadowCastingMode = i1605[5]
  i1604.sortingLayerID = i1605[6]
  i1604.sortingOrder = i1605[7]
  i1604.lightmapIndex = i1605[8]
  i1604.lightmapSceneIndex = i1605[9]
  i1604.lightmapScaleOffset = new pc.Vec4( i1605[10], i1605[11], i1605[12], i1605[13] )
  i1604.lightProbeUsage = i1605[14]
  i1604.reflectionProbeUsage = i1605[15]
  request.r(i1605[16], i1605[17], 0, i1604, 'mesh')
  i1604.meshCount = i1605[18]
  i1604.activeVertexStreamsCount = i1605[19]
  i1604.alignment = i1605[20]
  i1604.renderMode = i1605[21]
  i1604.sortMode = i1605[22]
  i1604.lengthScale = i1605[23]
  i1604.velocityScale = i1605[24]
  i1604.cameraVelocityScale = i1605[25]
  i1604.normalDirection = i1605[26]
  i1604.sortingFudge = i1605[27]
  i1604.minParticleSize = i1605[28]
  i1604.maxParticleSize = i1605[29]
  i1604.pivot = new pc.Vec3( i1605[30], i1605[31], i1605[32] )
  request.r(i1605[33], i1605[34], 0, i1604, 'trailMaterial')
  return i1604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'clip')
  request.r(i1609[2], i1609[3], 0, i1608, 'outputAudioMixerGroup')
  i1608.playOnAwake = !!i1609[4]
  i1608.loop = !!i1609[5]
  i1608.time = i1609[6]
  i1608.volume = i1609[7]
  i1608.pitch = i1609[8]
  i1608.enabled = !!i1609[9]
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1611 = data
  i1610.enabled = !!i1611[0]
  i1610.isTrigger = !!i1611[1]
  request.r(i1611[2], i1611[3], 0, i1610, 'material')
  request.r(i1611[4], i1611[5], 0, i1610, 'sharedMesh')
  i1610.convex = !!i1611[6]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1613 = data
  i1612.enabled = !!i1613[0]
  i1612.aspect = i1613[1]
  i1612.orthographic = !!i1613[2]
  i1612.orthographicSize = i1613[3]
  i1612.backgroundColor = new pc.Color(i1613[4], i1613[5], i1613[6], i1613[7])
  i1612.nearClipPlane = i1613[8]
  i1612.farClipPlane = i1613[9]
  i1612.fieldOfView = i1613[10]
  i1612.depth = i1613[11]
  i1612.clearFlags = i1613[12]
  i1612.cullingMask = i1613[13]
  i1612.rect = i1613[14]
  request.r(i1613[15], i1613[16], 0, i1612, 'targetTexture')
  i1612.usePhysicalProperties = !!i1613[17]
  i1612.focalLength = i1613[18]
  i1612.sensorSize = new pc.Vec2( i1613[19], i1613[20] )
  i1612.lensShift = new pc.Vec2( i1613[21], i1613[22] )
  i1612.gateFit = i1613[23]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1615 = data
  i1614.center = new pc.Vec3( i1615[0], i1615[1], i1615[2] )
  i1614.size = new pc.Vec3( i1615[3], i1615[4], i1615[5] )
  i1614.enabled = !!i1615[6]
  i1614.isTrigger = !!i1615[7]
  request.r(i1615[8], i1615[9], 0, i1614, 'material')
  return i1614
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i1616 = root || request.c( 'PlayerView' )
  var i1617 = data
  request.r(i1617[0], i1617[1], 0, i1616, '_mainRoot')
  request.r(i1617[2], i1617[3], 0, i1616, '_head')
  i1616._sensitivity = i1617[4]
  i1616._slerpFactor = i1617[5]
  i1616._viewHorizontalThreshold = new pc.Vec2( i1617[6], i1617[7] )
  i1616._viewVerticalThreshold = new pc.Vec2( i1617[8], i1617[9] )
  i1616._initRotate = new pc.Vec2( i1617[10], i1617[11] )
  i1616._totalRotate = new pc.Vec2( i1617[12], i1617[13] )
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1619 = data
  i1618.playAutomatically = !!i1619[0]
  request.r(i1619[1], i1619[2], 0, i1618, 'clip')
  var i1621 = i1619[3]
  var i1620 = []
  for(var i = 0; i < i1621.length; i += 2) {
  request.r(i1621[i + 0], i1621[i + 1], 2, i1620, '')
  }
  i1618.clips = i1620
  i1618.wrapMode = i1619[4]
  i1618.enabled = !!i1619[5]
  return i1618
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i1624 = root || request.c( 'WeaponController' )
  var i1625 = data
  i1624.Mask = UnityEngine.LayerMask.FromIntegerValue( i1625[0] )
  i1624.damage = i1625[1]
  request.r(i1625[2], i1625[3], 0, i1624, '_muzzleTrans')
  request.r(i1625[4], i1625[5], 0, i1624, '_animation')
  request.r(i1625[6], i1625[7], 0, i1624, 'bullet')
  request.r(i1625[8], i1625[9], 0, i1624, '_muzzleFlash')
  request.r(i1625[10], i1625[11], 0, i1624, 'audioClip')
  request.r(i1625[12], i1625[13], 0, i1624, 'audioSource')
  i1624.SphereRadius = i1625[14]
  request.r(i1625[15], i1625[16], 0, i1624, 'Effect')
  return i1624
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i1626 = root || request.c( 'BulletTrail' )
  var i1627 = data
  i1626.Speed = i1627[0]
  i1626.LifeTime = i1627[1]
  request.r(i1627[2], i1627[3], 0, i1626, '_trail')
  i1626._trailStartScale = new pc.Vec3( i1627[4], i1627[5], i1627[6] )
  i1626._trailMaxScale = new pc.Vec3( i1627[7], i1627[8], i1627[9] )
  i1626._trailLengthAtMaxScale = i1627[10]
  return i1626
}

Deserializers["Effect"] = function (request, data, root) {
  var i1628 = root || request.c( 'Effect' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 2, i1630, '')
  }
  i1628.particles = i1630
  i1628._lifeTime = i1629[1]
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1635 = data
  i1634.pivot = new pc.Vec2( i1635[0], i1635[1] )
  i1634.anchorMin = new pc.Vec2( i1635[2], i1635[3] )
  i1634.anchorMax = new pc.Vec2( i1635[4], i1635[5] )
  i1634.sizeDelta = new pc.Vec2( i1635[6], i1635[7] )
  i1634.anchoredPosition3D = new pc.Vec3( i1635[8], i1635[9], i1635[10] )
  i1634.rotation = new pc.Quat(i1635[11], i1635[12], i1635[13], i1635[14])
  i1634.scale = new pc.Vec3( i1635[15], i1635[16], i1635[17] )
  return i1634
}

Deserializers["UICrosshairItem"] = function (request, data, root) {
  var i1636 = root || request.c( 'UICrosshairItem' )
  var i1637 = data
  request.r(i1637[0], i1637[1], 0, i1636, 'CrosshairRectTransform')
  i1636._distanceMax = i1637[2]
  i1636._distanceMin = i1637[3]
  i1636._speedShrink = i1637[4]
  i1636._currentSpeed = i1637[5]
  i1636._rateOnMove = i1637[6]
  i1636._rateOnAttack = i1637[7]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1639 = data
  i1638.cullTransparentMesh = !!i1639[0]
  return i1638
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.UI.Image' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'm_Sprite')
  i1640.m_Type = i1641[2]
  i1640.m_PreserveAspect = !!i1641[3]
  i1640.m_FillCenter = !!i1641[4]
  i1640.m_FillMethod = i1641[5]
  i1640.m_FillAmount = i1641[6]
  i1640.m_FillClockwise = !!i1641[7]
  i1640.m_FillOrigin = i1641[8]
  i1640.m_UseSpriteMesh = !!i1641[9]
  i1640.m_PixelsPerUnitMultiplier = i1641[10]
  request.r(i1641[11], i1641[12], 0, i1640, 'm_Material')
  i1640.m_Maskable = !!i1641[13]
  i1640.m_Color = new pc.Color(i1641[14], i1641[15], i1641[16], i1641[17])
  i1640.m_RaycastTarget = !!i1641[18]
  i1640.m_RaycastPadding = new pc.Vec4( i1641[19], i1641[20], i1641[21], i1641[22] )
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.atlasId = i1643[1]
  i1642.mipmapCount = i1643[2]
  i1642.hdr = !!i1643[3]
  i1642.size = i1643[4]
  i1642.anisoLevel = i1643[5]
  i1642.filterMode = i1643[6]
  i1642.wrapMode = i1643[7]
  var i1645 = i1643[8]
  var i1644 = []
  for(var i = 0; i < i1645.length; i += 4) {
    i1644.push( UnityEngine.Rect.MinMaxRect(i1645[i + 0], i1645[i + 1], i1645[i + 2], i1645[i + 3]) );
  }
  i1642.rects = i1644
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.index = i1649[1]
  i1648.startup = !!i1649[2]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1651 = data
  i1650.enabled = !!i1651[0]
  i1650.type = i1651[1]
  i1650.color = new pc.Color(i1651[2], i1651[3], i1651[4], i1651[5])
  i1650.cullingMask = i1651[6]
  i1650.intensity = i1651[7]
  i1650.range = i1651[8]
  i1650.spotAngle = i1651[9]
  i1650.shadows = i1651[10]
  i1650.shadowNormalBias = i1651[11]
  i1650.shadowBias = i1651[12]
  i1650.shadowStrength = i1651[13]
  i1650.shadowResolution = i1651[14]
  i1650.lightmapBakeType = i1651[15]
  i1650.renderMode = i1651[16]
  request.r(i1651[17], i1651[18], 0, i1650, 'cookie')
  i1650.cookieSize = i1651[19]
  return i1650
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i1652 = root || request.c( 'ObjectPool' )
  var i1653 = data
  return i1652
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1654 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1655 = data
  request.r(i1655[0], i1655[1], 0, i1654, 'm_FirstSelected')
  i1654.m_sendNavigationEvents = !!i1655[2]
  i1654.m_DragThreshold = i1655[3]
  return i1654
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1657 = data
  i1656.m_HorizontalAxis = i1657[0]
  i1656.m_VerticalAxis = i1657[1]
  i1656.m_SubmitButton = i1657[2]
  i1656.m_CancelButton = i1657[3]
  i1656.m_InputActionsPerSecond = i1657[4]
  i1656.m_RepeatDelay = i1657[5]
  i1656.m_ForceModuleActive = !!i1657[6]
  i1656.m_SendPointerHoverToParent = !!i1657[7]
  return i1656
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i1658 = root || request.c( 'PathSigleton' )
  var i1659 = data
  var i1661 = i1659[0]
  var i1660 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 1, i1660, '')
  }
  i1658._paths = i1660
  return i1658
}

Deserializers["Path"] = function (request, data, root) {
  var i1664 = root || request.c( 'Path' )
  var i1665 = data
  var i1667 = i1665[0]
  var i1666 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1667.length; i += 2) {
  request.r(i1667[i + 0], i1667[i + 1], 1, i1666, '')
  }
  i1664.points = i1666
  return i1664
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i1670 = root || request.c( 'SpawnBot' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'botPrefab')
  i1670.spawnInterval = i1671[2]
  i1670.UPPER = i1671[3]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1673 = data
  i1672.enabled = !!i1673[0]
  i1672.planeDistance = i1673[1]
  i1672.referencePixelsPerUnit = i1673[2]
  i1672.isFallbackOverlay = !!i1673[3]
  i1672.renderMode = i1673[4]
  i1672.renderOrder = i1673[5]
  i1672.sortingLayerName = i1673[6]
  i1672.sortingOrder = i1673[7]
  i1672.scaleFactor = i1673[8]
  request.r(i1673[9], i1673[10], 0, i1672, 'worldCamera')
  i1672.overrideSorting = !!i1673[11]
  i1672.pixelPerfect = !!i1673[12]
  i1672.targetDisplay = i1673[13]
  i1672.overridePixelPerfect = !!i1673[14]
  return i1672
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1675 = data
  i1674.m_UiScaleMode = i1675[0]
  i1674.m_ReferencePixelsPerUnit = i1675[1]
  i1674.m_ScaleFactor = i1675[2]
  i1674.m_ReferenceResolution = new pc.Vec2( i1675[3], i1675[4] )
  i1674.m_ScreenMatchMode = i1675[5]
  i1674.m_MatchWidthOrHeight = i1675[6]
  i1674.m_PhysicalUnit = i1675[7]
  i1674.m_FallbackScreenDPI = i1675[8]
  i1674.m_DefaultSpriteDPI = i1675[9]
  i1674.m_DynamicPixelsPerUnit = i1675[10]
  i1674.m_PresetInfoIsWorld = !!i1675[11]
  return i1674
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1677 = data
  i1676.m_IgnoreReversedGraphics = !!i1677[0]
  i1676.m_BlockingObjects = i1677[1]
  i1676.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1677[2] )
  return i1676
}

Deserializers["BotController"] = function (request, data, root) {
  var i1678 = root || request.c( 'BotController' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, '_animator')
  request.r(i1679[2], i1679[3], 0, i1678, '_muzzle')
  request.r(i1679[4], i1679[5], 0, i1678, 'bullet')
  request.r(i1679[6], i1679[7], 0, i1678, 'target')
  i1678.moveIndex = i1679[8]
  i1678.isMoveDone = !!i1679[9]
  i1678.isDie = !!i1679[10]
  i1678.isTakeDame = !!i1679[11]
  i1678.maxHealth = i1679[12]
  request.r(i1679[13], i1679[14], 0, i1678, 'healthBarRenderer')
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1681 = data
  i1680.ambientIntensity = i1681[0]
  i1680.reflectionIntensity = i1681[1]
  i1680.ambientMode = i1681[2]
  i1680.ambientLight = new pc.Color(i1681[3], i1681[4], i1681[5], i1681[6])
  i1680.ambientSkyColor = new pc.Color(i1681[7], i1681[8], i1681[9], i1681[10])
  i1680.ambientGroundColor = new pc.Color(i1681[11], i1681[12], i1681[13], i1681[14])
  i1680.ambientEquatorColor = new pc.Color(i1681[15], i1681[16], i1681[17], i1681[18])
  i1680.fogColor = new pc.Color(i1681[19], i1681[20], i1681[21], i1681[22])
  i1680.fogEndDistance = i1681[23]
  i1680.fogStartDistance = i1681[24]
  i1680.fogDensity = i1681[25]
  i1680.fog = !!i1681[26]
  request.r(i1681[27], i1681[28], 0, i1680, 'skybox')
  i1680.fogMode = i1681[29]
  var i1683 = i1681[30]
  var i1682 = []
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1683[i + 0]) );
  }
  i1680.lightmaps = i1682
  i1680.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1681[31], i1680.lightProbes)
  i1680.lightmapsMode = i1681[32]
  i1680.mixedBakeMode = i1681[33]
  i1680.environmentLightingMode = i1681[34]
  i1680.ambientProbe = new pc.SphericalHarmonicsL2(i1681[35])
  i1680.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1681[36])
  i1680.useReferenceAmbientProbe = !!i1681[37]
  request.r(i1681[38], i1681[39], 0, i1680, 'customReflection')
  request.r(i1681[40], i1681[41], 0, i1680, 'defaultReflection')
  i1680.defaultReflectionMode = i1681[42]
  i1680.defaultReflectionResolution = i1681[43]
  i1680.sunLightObjectId = i1681[44]
  i1680.pixelLightCount = i1681[45]
  i1680.defaultReflectionHDR = !!i1681[46]
  i1680.hasLightDataAsset = !!i1681[47]
  i1680.hasManualGenerate = !!i1681[48]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1687 = data
  request.r(i1687[0], i1687[1], 0, i1686, 'lightmapColor')
  request.r(i1687[2], i1687[3], 0, i1686, 'lightmapDirection')
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1688 = root || new UnityEngine.LightProbes()
  var i1689 = data
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1697 = data
  var i1699 = i1697[0]
  var i1698 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1699.length; i += 1) {
    i1698.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1699[i + 0]));
  }
  i1696.ShaderCompilationErrors = i1698
  i1696.name = i1697[1]
  i1696.guid = i1697[2]
  var i1701 = i1697[3]
  var i1700 = []
  for(var i = 0; i < i1701.length; i += 1) {
    i1700.push( i1701[i + 0] );
  }
  i1696.shaderDefinedKeywords = i1700
  var i1703 = i1697[4]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1703[i + 0]) );
  }
  i1696.passes = i1702
  var i1705 = i1697[5]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1705[i + 0]) );
  }
  i1696.usePasses = i1704
  var i1707 = i1697[6]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1707[i + 0]) );
  }
  i1696.defaultParameterValues = i1706
  request.r(i1697[7], i1697[8], 0, i1696, 'unityFallbackShader')
  i1696.readDepth = !!i1697[9]
  i1696.isCreatedByShaderGraph = !!i1697[10]
  i1696.usedBatchUniforms = i1697[11]
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1711 = data
  i1710.shaderName = i1711[0]
  i1710.errorMessage = i1711[1]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1716 = root || new pc.UnityShaderPass()
  var i1717 = data
  i1716.id = i1717[0]
  i1716.subShaderIndex = i1717[1]
  i1716.name = i1717[2]
  i1716.passType = i1717[3]
  i1716.grabPassTextureName = i1717[4]
  i1716.usePass = !!i1717[5]
  i1716.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[6], i1716.zTest)
  i1716.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[7], i1716.zWrite)
  i1716.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[8], i1716.culling)
  i1716.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[9], i1716.blending)
  i1716.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1717[10], i1716.alphaBlending)
  i1716.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[11], i1716.colorWriteMask)
  i1716.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[12], i1716.offsetUnits)
  i1716.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[13], i1716.offsetFactor)
  i1716.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[14], i1716.stencilRef)
  i1716.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[15], i1716.stencilReadMask)
  i1716.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[16], i1716.stencilWriteMask)
  i1716.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[17], i1716.stencilOp)
  i1716.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[18], i1716.stencilOpFront)
  i1716.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1717[19], i1716.stencilOpBack)
  var i1719 = i1717[20]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1719[i + 0]) );
  }
  i1716.tags = i1718
  var i1721 = i1717[21]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( i1721[i + 0] );
  }
  i1716.passDefinedKeywords = i1720
  var i1723 = i1717[22]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1723[i + 0]) );
  }
  i1716.passDefinedKeywordGroups = i1722
  var i1725 = i1717[23]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 1) {
    i1724.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1725[i + 0]) );
  }
  i1716.variants = i1724
  var i1727 = i1717[24]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1727[i + 0]) );
  }
  i1716.excludedVariants = i1726
  i1716.hasDepthReader = !!i1717[25]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1729 = data
  i1728.val = i1729[0]
  i1728.name = i1729[1]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1731 = data
  i1730.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[0], i1730.src)
  i1730.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[1], i1730.dst)
  i1730.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1731[2], i1730.op)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1733 = data
  i1732.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[0], i1732.pass)
  i1732.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[1], i1732.fail)
  i1732.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[2], i1732.zFail)
  i1732.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1733[3], i1732.comp)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1737 = data
  i1736.name = i1737[0]
  i1736.value = i1737[1]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1741 = data
  var i1743 = i1741[0]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( i1743[i + 0] );
  }
  i1740.keywords = i1742
  i1740.hasDiscard = !!i1741[1]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1747 = data
  i1746.passId = i1747[0]
  i1746.subShaderIndex = i1747[1]
  var i1749 = i1747[2]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( i1749[i + 0] );
  }
  i1746.keywords = i1748
  i1746.vertexProgram = i1747[3]
  i1746.fragmentProgram = i1747[4]
  i1746.readDepth = !!i1747[5]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'shader')
  i1752.pass = i1753[2]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1757 = data
  i1756.name = i1757[0]
  i1756.type = i1757[1]
  i1756.value = new pc.Vec4( i1757[2], i1757[3], i1757[4], i1757[5] )
  i1756.textureValue = i1757[6]
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1759 = data
  i1758.name = i1759[0]
  request.r(i1759[1], i1759[2], 0, i1758, 'texture')
  i1758.aabb = i1759[3]
  i1758.vertices = i1759[4]
  i1758.triangles = i1759[5]
  i1758.textureRect = UnityEngine.Rect.MinMaxRect(i1759[6], i1759[7], i1759[8], i1759[9])
  i1758.packedRect = UnityEngine.Rect.MinMaxRect(i1759[10], i1759[11], i1759[12], i1759[13])
  i1758.border = new pc.Vec4( i1759[14], i1759[15], i1759[16], i1759[17] )
  i1758.transparency = i1759[18]
  i1758.bounds = i1759[19]
  i1758.pixelsPerUnit = i1759[20]
  i1758.textureWidth = i1759[21]
  i1758.textureHeight = i1759[22]
  i1758.nativeSize = new pc.Vec2( i1759[23], i1759[24] )
  i1758.pivot = new pc.Vec2( i1759[25], i1759[26] )
  i1758.textureRectOffset = new pc.Vec2( i1759[27], i1759[28] )
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1761 = data
  i1760.name = i1761[0]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1763 = data
  i1762.name = i1763[0]
  i1762.wrapMode = i1763[1]
  i1762.isLooping = !!i1763[2]
  i1762.length = i1763[3]
  var i1765 = i1763[4]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1765[i + 0]) );
  }
  i1762.curves = i1764
  var i1767 = i1763[5]
  var i1766 = []
  for(var i = 0; i < i1767.length; i += 1) {
    i1766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1767[i + 0]) );
  }
  i1762.events = i1766
  i1762.halfPrecision = !!i1763[6]
  i1762.frameRate = i1763[7]
  i1762.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1763[8], i1762.localBounds)
  i1762.hasMuscleCurves = !!i1763[9]
  var i1769 = i1763[10]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( i1769[i + 0] );
  }
  i1762.clipMuscleConstant = i1768
  i1762.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1763[11], i1762.clipBindingConstant)
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1773 = data
  i1772.path = i1773[0]
  i1772.componentType = i1773[1]
  i1772.property = i1773[2]
  i1772.keys = i1773[3]
  var i1775 = i1773[4]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1775[i + 0]) );
  }
  i1772.objectReferenceKeys = i1774
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1779 = data
  i1778.time = i1779[0]
  request.r(i1779[1], i1779[2], 0, i1778, 'value')
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1783 = data
  i1782.functionName = i1783[0]
  i1782.floatParameter = i1783[1]
  i1782.intParameter = i1783[2]
  i1782.stringParameter = i1783[3]
  request.r(i1783[4], i1783[5], 0, i1782, 'objectReferenceParameter')
  i1782.time = i1783[6]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1785 = data
  i1784.center = new pc.Vec3( i1785[0], i1785[1], i1785[2] )
  i1784.extends = new pc.Vec3( i1785[3], i1785[4], i1785[5] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1789 = data
  var i1791 = i1789[0]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( i1791[i + 0] );
  }
  i1788.genericBindings = i1790
  var i1793 = i1789[1]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( i1793[i + 0] );
  }
  i1788.pptrCurveMapping = i1792
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1795 = data
  i1794.name = i1795[0]
  var i1797 = i1795[1]
  var i1796 = []
  for(var i = 0; i < i1797.length; i += 1) {
    i1796.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1797[i + 0]) );
  }
  i1794.states = i1796
  var i1799 = i1795[2]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1799[i + 0]) );
  }
  i1794.layers = i1798
  var i1801 = i1795[3]
  var i1800 = []
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1801[i + 0]) );
  }
  i1794.parameters = i1800
  i1794.animationClips = i1795[4]
  i1794.HasSubStateMachines = !!i1795[5]
  i1794.avatarUnsupported = i1795[6]
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1805 = data
  i1804.cycleOffset = i1805[0]
  i1804.cycleOffsetParameter = i1805[1]
  i1804.cycleOffsetParameterActive = !!i1805[2]
  i1804.mirror = !!i1805[3]
  i1804.mirrorParameter = i1805[4]
  i1804.mirrorParameterActive = !!i1805[5]
  i1804.motionId = i1805[6]
  i1804.nameHash = i1805[7]
  i1804.fullPathHash = i1805[8]
  i1804.speed = i1805[9]
  i1804.speedParameter = i1805[10]
  i1804.speedParameterActive = !!i1805[11]
  i1804.tag = i1805[12]
  i1804.name = i1805[13]
  i1804.layer = i1805[14]
  i1804.writeDefaultValues = !!i1805[15]
  var i1807 = i1805[16]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1807[i + 0]) );
  }
  i1804.transitions = i1806
  var i1809 = i1805[17]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 2) {
  request.r(i1809[i + 0], i1809[i + 1], 2, i1808, '')
  }
  i1804.behaviours = i1808
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1813 = data
  i1812.fullPath = i1813[0]
  i1812.canTransitionToSelf = !!i1813[1]
  i1812.duration = i1813[2]
  i1812.exitTime = i1813[3]
  i1812.hasExitTime = !!i1813[4]
  i1812.hasFixedDuration = !!i1813[5]
  i1812.interruptionSource = i1813[6]
  i1812.offset = i1813[7]
  i1812.orderedInterruption = !!i1813[8]
  i1812.destinationStateNameHash = i1813[9]
  i1812.destinationStateMachineId = i1813[10]
  i1812.isExit = !!i1813[11]
  i1812.mute = !!i1813[12]
  i1812.solo = !!i1813[13]
  var i1815 = i1813[14]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1815[i + 0]) );
  }
  i1812.conditions = i1814
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1819 = data
  i1818.mode = i1819[0]
  i1818.parameter = i1819[1]
  i1818.threshold = i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1825 = data
  i1824.blendingMode = i1825[0]
  i1824.defaultWeight = i1825[1]
  i1824.name = i1825[2]
  i1824.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1825[3], i1824.stateMachine)
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1827 = data
  i1826.id = i1827[0]
  i1826.defaultStateNameHash = i1827[1]
  var i1829 = i1827[2]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1829[i + 0]) );
  }
  i1826.entryTransitions = i1828
  var i1831 = i1827[3]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1831[i + 0]) );
  }
  i1826.anyStateTransitions = i1830
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1835 = data
  i1834.destinationStateNameHash = i1835[0]
  i1834.destinationStateMachineId = i1835[1]
  i1834.isExit = !!i1835[2]
  i1834.mute = !!i1835[3]
  i1834.solo = !!i1835[4]
  var i1837 = i1835[5]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1837[i + 0]) );
  }
  i1834.conditions = i1836
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1841 = data
  i1840.defaultBool = !!i1841[0]
  i1840.defaultFloat = i1841[1]
  i1840.defaultInt = i1841[2]
  i1840.name = i1841[3]
  i1840.nameHash = i1841[4]
  i1840.type = i1841[5]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = []
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1845[i + 0]) );
  }
  i1842.files = i1844
  i1842.componentToPrefabIds = i1843[1]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1849 = data
  i1848.path = i1849[0]
  request.r(i1849[1], i1849[2], 0, i1848, 'unityObject')
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1851 = data
  var i1853 = i1851[0]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1853[i + 0]) );
  }
  i1850.scriptsExecutionOrder = i1852
  var i1855 = i1851[1]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1855[i + 0]) );
  }
  i1850.sortingLayers = i1854
  var i1857 = i1851[2]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1857[i + 0]) );
  }
  i1850.cullingLayers = i1856
  i1850.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1851[3], i1850.timeSettings)
  i1850.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1851[4], i1850.physicsSettings)
  i1850.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1851[5], i1850.physics2DSettings)
  i1850.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1851[6], i1850.qualitySettings)
  i1850.enableRealtimeShadows = !!i1851[7]
  i1850.enableAutoInstancing = !!i1851[8]
  i1850.enableDynamicBatching = !!i1851[9]
  i1850.lightmapEncodingQuality = i1851[10]
  i1850.desiredColorSpace = i1851[11]
  var i1859 = i1851[12]
  var i1858 = []
  for(var i = 0; i < i1859.length; i += 1) {
    i1858.push( i1859[i + 0] );
  }
  i1850.allTags = i1858
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1863 = data
  i1862.name = i1863[0]
  i1862.value = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1867 = data
  i1866.id = i1867[0]
  i1866.name = i1867[1]
  i1866.value = i1867[2]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1871 = data
  i1870.id = i1871[0]
  i1870.name = i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1873 = data
  i1872.fixedDeltaTime = i1873[0]
  i1872.maximumDeltaTime = i1873[1]
  i1872.timeScale = i1873[2]
  i1872.maximumParticleTimestep = i1873[3]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1875 = data
  i1874.gravity = new pc.Vec3( i1875[0], i1875[1], i1875[2] )
  i1874.defaultSolverIterations = i1875[3]
  i1874.bounceThreshold = i1875[4]
  i1874.autoSyncTransforms = !!i1875[5]
  i1874.autoSimulation = !!i1875[6]
  var i1877 = i1875[7]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1877[i + 0]) );
  }
  i1874.collisionMatrix = i1876
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1881 = data
  i1880.enabled = !!i1881[0]
  i1880.layerId = i1881[1]
  i1880.otherLayerId = i1881[2]
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'material')
  i1882.gravity = new pc.Vec2( i1883[2], i1883[3] )
  i1882.positionIterations = i1883[4]
  i1882.velocityIterations = i1883[5]
  i1882.velocityThreshold = i1883[6]
  i1882.maxLinearCorrection = i1883[7]
  i1882.maxAngularCorrection = i1883[8]
  i1882.maxTranslationSpeed = i1883[9]
  i1882.maxRotationSpeed = i1883[10]
  i1882.baumgarteScale = i1883[11]
  i1882.baumgarteTOIScale = i1883[12]
  i1882.timeToSleep = i1883[13]
  i1882.linearSleepTolerance = i1883[14]
  i1882.angularSleepTolerance = i1883[15]
  i1882.defaultContactOffset = i1883[16]
  i1882.autoSimulation = !!i1883[17]
  i1882.queriesHitTriggers = !!i1883[18]
  i1882.queriesStartInColliders = !!i1883[19]
  i1882.callbacksOnDisable = !!i1883[20]
  i1882.reuseCollisionCallbacks = !!i1883[21]
  i1882.autoSyncTransforms = !!i1883[22]
  var i1885 = i1883[23]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1885[i + 0]) );
  }
  i1882.collisionMatrix = i1884
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1889 = data
  i1888.enabled = !!i1889[0]
  i1888.layerId = i1889[1]
  i1888.otherLayerId = i1889[2]
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1891 = data
  var i1893 = i1891[0]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1893[i + 0]) );
  }
  i1890.qualityLevels = i1892
  var i1895 = i1891[1]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 1) {
    i1894.push( i1895[i + 0] );
  }
  i1890.names = i1894
  i1890.shadows = i1891[2]
  i1890.anisotropicFiltering = i1891[3]
  i1890.antiAliasing = i1891[4]
  i1890.lodBias = i1891[5]
  i1890.shadowCascades = i1891[6]
  i1890.shadowDistance = i1891[7]
  i1890.shadowmaskMode = i1891[8]
  i1890.shadowProjection = i1891[9]
  i1890.shadowResolution = i1891[10]
  i1890.softParticles = !!i1891[11]
  i1890.softVegetation = !!i1891[12]
  i1890.activeColorSpace = i1891[13]
  i1890.desiredColorSpace = i1891[14]
  i1890.masterTextureLimit = i1891[15]
  i1890.maxQueuedFrames = i1891[16]
  i1890.particleRaycastBudget = i1891[17]
  i1890.pixelLightCount = i1891[18]
  i1890.realtimeReflectionProbes = !!i1891[19]
  i1890.shadowCascade2Split = i1891[20]
  i1890.shadowCascade4Split = new pc.Vec3( i1891[21], i1891[22], i1891[23] )
  i1890.streamingMipmapsActive = !!i1891[24]
  i1890.vSyncCount = i1891[25]
  i1890.asyncUploadBufferSize = i1891[26]
  i1890.asyncUploadTimeSlice = i1891[27]
  i1890.billboardsFaceCameraPosition = !!i1891[28]
  i1890.shadowNearPlaneOffset = i1891[29]
  i1890.streamingMipmapsMemoryBudget = i1891[30]
  i1890.maximumLODLevel = i1891[31]
  i1890.streamingMipmapsAddAllCameras = !!i1891[32]
  i1890.streamingMipmapsMaxLevelReduction = i1891[33]
  i1890.streamingMipmapsRenderersPerFrame = i1891[34]
  i1890.resolutionScalingFixedDPIFactor = i1891[35]
  i1890.streamingMipmapsMaxFileIORequests = i1891[36]
  i1890.currentQualityLevel = i1891[37]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1899 = data
  i1898.name = i1899[0]
  var i1901 = i1899[1]
  var i1900 = []
  for(var i = 0; i < i1901.length; i += 1) {
    i1900.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1901[i + 0]) );
  }
  i1898.tos = i1900
  var i1903 = i1899[2]
  var i1902 = []
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.push( i1903[i + 0] );
  }
  i1898.constant = i1902
  i1898.isValid = !!i1899[3]
  i1898.isHuman = !!i1899[4]
  i1898.hasRootMotion = !!i1899[5]
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1907 = data
  i1906.hash = i1907[0]
  i1906.path = i1907[1]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1911 = data
  i1910.weight = i1911[0]
  i1910.vertices = i1911[1]
  i1910.normals = i1911[2]
  i1910.tangents = i1911[3]
  return i1910
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"46":[47],"48":[47],"49":[47],"50":[47],"51":[47],"52":[47],"53":[6],"54":[15],"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[56],"63":[64],"65":[64],"66":[64],"67":[64],"68":[64],"69":[64],"70":[64],"71":[64],"72":[64],"73":[64],"74":[64],"75":[64],"76":[64],"77":[15],"78":[10],"79":[80],"81":[80],"40":[27],"82":[27],"83":[10,27],"84":[27,29],"85":[27],"86":[29,27],"87":[10],"88":[29,27],"89":[27],"90":[91],"92":[27],"93":[27],"42":[40],"31":[29,27],"94":[27],"41":[40],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[27],"101":[27],"102":[27],"103":[27],"104":[29,27],"105":[27],"106":[27],"107":[27],"108":[27],"109":[29,27],"110":[27],"111":[35],"112":[35],"36":[35],"113":[35],"114":[15],"115":[15],"116":[91],"117":[91]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.AudioSource","UnityEngine.MeshCollider","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","BulletTrail","Effect","UnityEngine.RectTransform","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","ObjectPool","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","PathSigleton","Path","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","BotController","UnityEditor.Animations.AnimatorController","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "1.0";

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

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1620";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3486";

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

Deserializers.buildID = "cc107ddb-611b-43f1-8112-588062679188";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

