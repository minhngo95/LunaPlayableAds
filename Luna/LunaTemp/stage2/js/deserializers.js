var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1422 = root || request.c( 'UnityEngine.JointSpring' )
  var i1423 = data
  i1422.spring = i1423[0]
  i1422.damper = i1423[1]
  i1422.targetPosition = i1423[2]
  return i1422
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1424 = root || request.c( 'UnityEngine.JointMotor' )
  var i1425 = data
  i1424.m_TargetVelocity = i1425[0]
  i1424.m_Force = i1425[1]
  i1424.m_FreeSpin = i1425[2]
  return i1424
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1426 = root || request.c( 'UnityEngine.JointLimits' )
  var i1427 = data
  i1426.m_Min = i1427[0]
  i1426.m_Max = i1427[1]
  i1426.m_Bounciness = i1427[2]
  i1426.m_BounceMinVelocity = i1427[3]
  i1426.m_ContactDistance = i1427[4]
  i1426.minBounce = i1427[5]
  i1426.maxBounce = i1427[6]
  return i1426
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1428 = root || request.c( 'UnityEngine.JointDrive' )
  var i1429 = data
  i1428.m_PositionSpring = i1429[0]
  i1428.m_PositionDamper = i1429[1]
  i1428.m_MaximumForce = i1429[2]
  return i1428
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1430 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1431 = data
  i1430.m_Spring = i1431[0]
  i1430.m_Damper = i1431[1]
  return i1430
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1432 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1433 = data
  i1432.m_Limit = i1433[0]
  i1432.m_Bounciness = i1433[1]
  i1432.m_ContactDistance = i1433[2]
  return i1432
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1434 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1435 = data
  i1434.m_ExtremumSlip = i1435[0]
  i1434.m_ExtremumValue = i1435[1]
  i1434.m_AsymptoteSlip = i1435[2]
  i1434.m_AsymptoteValue = i1435[3]
  i1434.m_Stiffness = i1435[4]
  return i1434
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1436 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1437 = data
  i1436.m_LowerAngle = i1437[0]
  i1436.m_UpperAngle = i1437[1]
  return i1436
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1438 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1439 = data
  i1438.m_MotorSpeed = i1439[0]
  i1438.m_MaximumMotorTorque = i1439[1]
  return i1438
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1440 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1441 = data
  i1440.m_DampingRatio = i1441[0]
  i1440.m_Frequency = i1441[1]
  i1440.m_Angle = i1441[2]
  return i1440
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1442 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1443 = data
  i1442.m_LowerTranslation = i1443[0]
  i1442.m_UpperTranslation = i1443[1]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1444 = root || new pc.UnityMaterial()
  var i1445 = data
  i1444.name = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'shader')
  i1444.renderQueue = i1445[3]
  i1444.enableInstancing = !!i1445[4]
  var i1447 = i1445[5]
  var i1446 = []
  for(var i = 0; i < i1447.length; i += 1) {
    i1446.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1447[i + 0]) );
  }
  i1444.floatParameters = i1446
  var i1449 = i1445[6]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1449[i + 0]) );
  }
  i1444.colorParameters = i1448
  var i1451 = i1445[7]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1451[i + 0]) );
  }
  i1444.vectorParameters = i1450
  var i1453 = i1445[8]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1453[i + 0]) );
  }
  i1444.textureParameters = i1452
  var i1455 = i1445[9]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1455[i + 0]) );
  }
  i1444.materialFlags = i1454
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1459 = data
  i1458.name = i1459[0]
  i1458.value = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1463 = data
  i1462.name = i1463[0]
  i1462.value = new pc.Color(i1463[1], i1463[2], i1463[3], i1463[4])
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.value = new pc.Vec4( i1467[1], i1467[2], i1467[3], i1467[4] )
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1471 = data
  i1470.name = i1471[0]
  request.r(i1471[1], i1471[2], 0, i1470, 'value')
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1474 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1475 = data
  i1474.name = i1475[0]
  i1474.enabled = !!i1475[1]
  return i1474
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1477 = data
  i1476.name = i1477[0]
  i1476.width = i1477[1]
  i1476.height = i1477[2]
  i1476.mipmapCount = i1477[3]
  i1476.anisoLevel = i1477[4]
  i1476.filterMode = i1477[5]
  i1476.hdr = !!i1477[6]
  i1476.format = i1477[7]
  i1476.wrapMode = i1477[8]
  i1476.alphaIsTransparency = !!i1477[9]
  i1476.alphaSource = i1477[10]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1478 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1479 = data
  i1478.position = new pc.Vec3( i1479[0], i1479[1], i1479[2] )
  i1478.scale = new pc.Vec3( i1479[3], i1479[4], i1479[5] )
  i1478.rotation = new pc.Quat(i1479[6], i1479[7], i1479[8], i1479[9])
  return i1478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1481 = data
  request.r(i1481[0], i1481[1], 0, i1480, 'sharedMesh')
  return i1480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'additionalVertexStreams')
  i1482.enabled = !!i1483[2]
  request.r(i1483[3], i1483[4], 0, i1482, 'sharedMaterial')
  var i1485 = i1483[5]
  var i1484 = []
  for(var i = 0; i < i1485.length; i += 2) {
  request.r(i1485[i + 0], i1485[i + 1], 2, i1484, '')
  }
  i1482.sharedMaterials = i1484
  i1482.receiveShadows = !!i1483[6]
  i1482.shadowCastingMode = i1483[7]
  i1482.sortingLayerID = i1483[8]
  i1482.sortingOrder = i1483[9]
  i1482.lightmapIndex = i1483[10]
  i1482.lightmapSceneIndex = i1483[11]
  i1482.lightmapScaleOffset = new pc.Vec4( i1483[12], i1483[13], i1483[14], i1483[15] )
  i1482.lightProbeUsage = i1483[16]
  i1482.reflectionProbeUsage = i1483[17]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1489 = data
  i1488.name = i1489[0]
  i1488.tagId = i1489[1]
  i1488.enabled = !!i1489[2]
  i1488.isStatic = !!i1489[3]
  i1488.layer = i1489[4]
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1491 = data
  i1490.name = i1491[0]
  i1490.halfPrecision = !!i1491[1]
  i1490.vertexCount = i1491[2]
  i1490.aabb = i1491[3]
  var i1493 = i1491[4]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( !!i1493[i + 0] );
  }
  i1490.streams = i1492
  i1490.vertices = i1491[5]
  var i1495 = i1491[6]
  var i1494 = []
  for(var i = 0; i < i1495.length; i += 1) {
    i1494.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1495[i + 0]) );
  }
  i1490.subMeshes = i1494
  var i1497 = i1491[7]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 16) {
    i1496.push( new pc.Mat4().setData(i1497[i + 0], i1497[i + 1], i1497[i + 2], i1497[i + 3],  i1497[i + 4], i1497[i + 5], i1497[i + 6], i1497[i + 7],  i1497[i + 8], i1497[i + 9], i1497[i + 10], i1497[i + 11],  i1497[i + 12], i1497[i + 13], i1497[i + 14], i1497[i + 15]) );
  }
  i1490.bindposes = i1496
  var i1499 = i1491[8]
  var i1498 = []
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1499[i + 0]) );
  }
  i1490.blendShapes = i1498
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1505 = data
  i1504.triangles = i1505[0]
  return i1504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1511 = data
  i1510.name = i1511[0]
  var i1513 = i1511[1]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1513[i + 0]) );
  }
  i1510.frames = i1512
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1515 = data
  request.r(i1515[0], i1515[1], 0, i1514, 'animatorController')
  request.r(i1515[2], i1515[3], 0, i1514, 'avatar')
  i1514.updateMode = i1515[4]
  i1514.hasTransformHierarchy = !!i1515[5]
  i1514.applyRootMotion = !!i1515[6]
  var i1517 = i1515[7]
  var i1516 = []
  for(var i = 0; i < i1517.length; i += 2) {
  request.r(i1517[i + 0], i1517[i + 1], 2, i1516, '')
  }
  i1514.humanBones = i1516
  i1514.enabled = !!i1515[8]
  return i1514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1521 = data
  i1520.enabled = !!i1521[0]
  request.r(i1521[1], i1521[2], 0, i1520, 'sharedMaterial')
  var i1523 = i1521[3]
  var i1522 = []
  for(var i = 0; i < i1523.length; i += 2) {
  request.r(i1523[i + 0], i1523[i + 1], 2, i1522, '')
  }
  i1520.sharedMaterials = i1522
  i1520.receiveShadows = !!i1521[4]
  i1520.shadowCastingMode = i1521[5]
  i1520.sortingLayerID = i1521[6]
  i1520.sortingOrder = i1521[7]
  i1520.lightmapIndex = i1521[8]
  i1520.lightmapSceneIndex = i1521[9]
  i1520.lightmapScaleOffset = new pc.Vec4( i1521[10], i1521[11], i1521[12], i1521[13] )
  i1520.lightProbeUsage = i1521[14]
  i1520.reflectionProbeUsage = i1521[15]
  request.r(i1521[16], i1521[17], 0, i1520, 'sharedMesh')
  var i1525 = i1521[18]
  var i1524 = []
  for(var i = 0; i < i1525.length; i += 2) {
  request.r(i1525[i + 0], i1525[i + 1], 2, i1524, '')
  }
  i1520.bones = i1524
  i1520.updateWhenOffscreen = !!i1521[19]
  i1520.localBounds = i1521[20]
  request.r(i1521[21], i1521[22], 0, i1520, 'rootBone')
  var i1527 = i1521[23]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1527[i + 0]) );
  }
  i1520.blendShapesWeights = i1526
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1531 = data
  i1530.weight = i1531[0]
  return i1530
}

Deserializers["BulletTrail"] = function (request, data, root) {
  var i1532 = root || request.c( 'BulletTrail' )
  var i1533 = data
  i1532.Speed = i1533[0]
  i1532.LifeTime = i1533[1]
  request.r(i1533[2], i1533[3], 0, i1532, '_trail')
  i1532._trailStartScale = new pc.Vec3( i1533[4], i1533[5], i1533[6] )
  i1532._trailMaxScale = new pc.Vec3( i1533[7], i1533[8], i1533[9] )
  i1532._trailLengthAtMaxScale = i1533[10]
  return i1532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1535 = data
  i1534.enabled = !!i1535[0]
  i1534.isTrigger = !!i1535[1]
  request.r(i1535[2], i1535[3], 0, i1534, 'material')
  request.r(i1535[4], i1535[5], 0, i1534, 'sharedMesh')
  i1534.convex = !!i1535[6]
  return i1534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1537 = data
  i1536.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1537[0], i1536.main)
  i1536.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1537[1], i1536.colorBySpeed)
  i1536.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1537[2], i1536.colorOverLifetime)
  i1536.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1537[3], i1536.emission)
  i1536.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1537[4], i1536.rotationBySpeed)
  i1536.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1537[5], i1536.rotationOverLifetime)
  i1536.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1537[6], i1536.shape)
  i1536.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1537[7], i1536.sizeBySpeed)
  i1536.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1537[8], i1536.sizeOverLifetime)
  i1536.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1537[9], i1536.textureSheetAnimation)
  i1536.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1537[10], i1536.velocityOverLifetime)
  i1536.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1537[11], i1536.noise)
  i1536.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1537[12], i1536.inheritVelocity)
  i1536.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1537[13], i1536.forceOverLifetime)
  i1536.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1537[14], i1536.limitVelocityOverLifetime)
  i1536.useAutoRandomSeed = !!i1537[15]
  i1536.randomSeed = i1537[16]
  return i1536
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1538 = root || new pc.ParticleSystemMain()
  var i1539 = data
  i1538.duration = i1539[0]
  i1538.loop = !!i1539[1]
  i1538.prewarm = !!i1539[2]
  i1538.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[3], i1538.startDelay)
  i1538.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[4], i1538.startLifetime)
  i1538.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[5], i1538.startSpeed)
  i1538.startSize3D = !!i1539[6]
  i1538.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[7], i1538.startSizeX)
  i1538.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[8], i1538.startSizeY)
  i1538.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[9], i1538.startSizeZ)
  i1538.startRotation3D = !!i1539[10]
  i1538.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[11], i1538.startRotationX)
  i1538.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[12], i1538.startRotationY)
  i1538.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[13], i1538.startRotationZ)
  i1538.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1539[14], i1538.startColor)
  i1538.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1539[15], i1538.gravityModifier)
  i1538.simulationSpace = i1539[16]
  request.r(i1539[17], i1539[18], 0, i1538, 'customSimulationSpace')
  i1538.simulationSpeed = i1539[19]
  i1538.useUnscaledTime = !!i1539[20]
  i1538.scalingMode = i1539[21]
  i1538.playOnAwake = !!i1539[22]
  i1538.maxParticles = i1539[23]
  i1538.emitterVelocityMode = i1539[24]
  i1538.stopAction = i1539[25]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1540 = root || new pc.MinMaxCurve()
  var i1541 = data
  i1540.mode = i1541[0]
  i1540.curveMin = new pc.AnimationCurve( { keys_flow: i1541[1] } )
  i1540.curveMax = new pc.AnimationCurve( { keys_flow: i1541[2] } )
  i1540.curveMultiplier = i1541[3]
  i1540.constantMin = i1541[4]
  i1540.constantMax = i1541[5]
  return i1540
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1542 = root || new pc.MinMaxGradient()
  var i1543 = data
  i1542.mode = i1543[0]
  i1542.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1543[1], i1542.gradientMin)
  i1542.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1543[2], i1542.gradientMax)
  i1542.colorMin = new pc.Color(i1543[3], i1543[4], i1543[5], i1543[6])
  i1542.colorMax = new pc.Color(i1543[7], i1543[8], i1543[9], i1543[10])
  return i1542
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1545 = data
  i1544.mode = i1545[0]
  var i1547 = i1545[1]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1547[i + 0]) );
  }
  i1544.colorKeys = i1546
  var i1549 = i1545[2]
  var i1548 = []
  for(var i = 0; i < i1549.length; i += 1) {
    i1548.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1549[i + 0]) );
  }
  i1544.alphaKeys = i1548
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1550 = root || new pc.ParticleSystemColorBySpeed()
  var i1551 = data
  i1550.enabled = !!i1551[0]
  i1550.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1551[1], i1550.color)
  i1550.range = new pc.Vec2( i1551[2], i1551[3] )
  return i1550
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1555 = data
  i1554.color = new pc.Color(i1555[0], i1555[1], i1555[2], i1555[3])
  i1554.time = i1555[4]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1559 = data
  i1558.alpha = i1559[0]
  i1558.time = i1559[1]
  return i1558
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1560 = root || new pc.ParticleSystemColorOverLifetime()
  var i1561 = data
  i1560.enabled = !!i1561[0]
  i1560.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1561[1], i1560.color)
  return i1560
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1562 = root || new pc.ParticleSystemEmitter()
  var i1563 = data
  i1562.enabled = !!i1563[0]
  i1562.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1563[1], i1562.rateOverTime)
  i1562.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1563[2], i1562.rateOverDistance)
  var i1565 = i1563[3]
  var i1564 = []
  for(var i = 0; i < i1565.length; i += 1) {
    i1564.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1565[i + 0]) );
  }
  i1562.bursts = i1564
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1568 = root || new pc.ParticleSystemBurst()
  var i1569 = data
  i1568.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1569[0], i1568.count)
  i1568.cycleCount = i1569[1]
  i1568.minCount = i1569[2]
  i1568.maxCount = i1569[3]
  i1568.repeatInterval = i1569[4]
  i1568.time = i1569[5]
  return i1568
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1570 = root || new pc.ParticleSystemRotationBySpeed()
  var i1571 = data
  i1570.enabled = !!i1571[0]
  i1570.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[1], i1570.x)
  i1570.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[2], i1570.y)
  i1570.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1571[3], i1570.z)
  i1570.separateAxes = !!i1571[4]
  i1570.range = new pc.Vec2( i1571[5], i1571[6] )
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1572 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1573 = data
  i1572.enabled = !!i1573[0]
  i1572.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[1], i1572.x)
  i1572.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[2], i1572.y)
  i1572.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1573[3], i1572.z)
  i1572.separateAxes = !!i1573[4]
  return i1572
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1574 = root || new pc.ParticleSystemShape()
  var i1575 = data
  i1574.enabled = !!i1575[0]
  i1574.shapeType = i1575[1]
  i1574.randomDirectionAmount = i1575[2]
  i1574.sphericalDirectionAmount = i1575[3]
  i1574.randomPositionAmount = i1575[4]
  i1574.alignToDirection = !!i1575[5]
  i1574.radius = i1575[6]
  i1574.radiusMode = i1575[7]
  i1574.radiusSpread = i1575[8]
  i1574.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[9], i1574.radiusSpeed)
  i1574.radiusThickness = i1575[10]
  i1574.angle = i1575[11]
  i1574.length = i1575[12]
  i1574.boxThickness = new pc.Vec3( i1575[13], i1575[14], i1575[15] )
  i1574.meshShapeType = i1575[16]
  request.r(i1575[17], i1575[18], 0, i1574, 'mesh')
  request.r(i1575[19], i1575[20], 0, i1574, 'meshRenderer')
  request.r(i1575[21], i1575[22], 0, i1574, 'skinnedMeshRenderer')
  i1574.useMeshMaterialIndex = !!i1575[23]
  i1574.meshMaterialIndex = i1575[24]
  i1574.useMeshColors = !!i1575[25]
  i1574.normalOffset = i1575[26]
  i1574.arc = i1575[27]
  i1574.arcMode = i1575[28]
  i1574.arcSpread = i1575[29]
  i1574.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1575[30], i1574.arcSpeed)
  i1574.donutRadius = i1575[31]
  i1574.position = new pc.Vec3( i1575[32], i1575[33], i1575[34] )
  i1574.rotation = new pc.Vec3( i1575[35], i1575[36], i1575[37] )
  i1574.scale = new pc.Vec3( i1575[38], i1575[39], i1575[40] )
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1576 = root || new pc.ParticleSystemSizeBySpeed()
  var i1577 = data
  i1576.enabled = !!i1577[0]
  i1576.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[1], i1576.x)
  i1576.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[2], i1576.y)
  i1576.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1577[3], i1576.z)
  i1576.separateAxes = !!i1577[4]
  i1576.range = new pc.Vec2( i1577[5], i1577[6] )
  return i1576
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1578 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1579 = data
  i1578.enabled = !!i1579[0]
  i1578.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[1], i1578.x)
  i1578.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[2], i1578.y)
  i1578.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1579[3], i1578.z)
  i1578.separateAxes = !!i1579[4]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1580 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1581 = data
  i1580.enabled = !!i1581[0]
  i1580.mode = i1581[1]
  i1580.animation = i1581[2]
  i1580.numTilesX = i1581[3]
  i1580.numTilesY = i1581[4]
  i1580.useRandomRow = !!i1581[5]
  i1580.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[6], i1580.frameOverTime)
  i1580.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1581[7], i1580.startFrame)
  i1580.cycleCount = i1581[8]
  i1580.rowIndex = i1581[9]
  i1580.flipU = i1581[10]
  i1580.flipV = i1581[11]
  i1580.spriteCount = i1581[12]
  var i1583 = i1581[13]
  var i1582 = []
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 2, i1582, '')
  }
  i1580.sprites = i1582
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1586 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1587 = data
  i1586.enabled = !!i1587[0]
  i1586.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[1], i1586.x)
  i1586.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[2], i1586.y)
  i1586.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[3], i1586.z)
  i1586.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[4], i1586.radial)
  i1586.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[5], i1586.speedModifier)
  i1586.space = i1587[6]
  i1586.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[7], i1586.orbitalX)
  i1586.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[8], i1586.orbitalY)
  i1586.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[9], i1586.orbitalZ)
  i1586.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[10], i1586.orbitalOffsetX)
  i1586.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[11], i1586.orbitalOffsetY)
  i1586.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1587[12], i1586.orbitalOffsetZ)
  return i1586
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1588 = root || new pc.ParticleSystemNoise()
  var i1589 = data
  i1588.enabled = !!i1589[0]
  i1588.separateAxes = !!i1589[1]
  i1588.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[2], i1588.strengthX)
  i1588.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[3], i1588.strengthY)
  i1588.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[4], i1588.strengthZ)
  i1588.frequency = i1589[5]
  i1588.damping = !!i1589[6]
  i1588.octaveCount = i1589[7]
  i1588.octaveMultiplier = i1589[8]
  i1588.octaveScale = i1589[9]
  i1588.quality = i1589[10]
  i1588.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[11], i1588.scrollSpeed)
  i1588.scrollSpeedMultiplier = i1589[12]
  i1588.remapEnabled = !!i1589[13]
  i1588.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[14], i1588.remapX)
  i1588.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[15], i1588.remapY)
  i1588.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[16], i1588.remapZ)
  i1588.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[17], i1588.positionAmount)
  i1588.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[18], i1588.rotationAmount)
  i1588.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1589[19], i1588.sizeAmount)
  return i1588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1590 = root || new pc.ParticleSystemInheritVelocity()
  var i1591 = data
  i1590.enabled = !!i1591[0]
  i1590.mode = i1591[1]
  i1590.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1591[2], i1590.curve)
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1592 = root || new pc.ParticleSystemForceOverLifetime()
  var i1593 = data
  i1592.enabled = !!i1593[0]
  i1592.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[1], i1592.x)
  i1592.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[2], i1592.y)
  i1592.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1593[3], i1592.z)
  i1592.space = i1593[4]
  i1592.randomized = !!i1593[5]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1594 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1595 = data
  i1594.enabled = !!i1595[0]
  i1594.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[1], i1594.limit)
  i1594.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[2], i1594.limitX)
  i1594.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[3], i1594.limitY)
  i1594.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[4], i1594.limitZ)
  i1594.dampen = i1595[5]
  i1594.separateAxes = !!i1595[6]
  i1594.space = i1595[7]
  i1594.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1595[8], i1594.drag)
  i1594.multiplyDragByParticleSize = !!i1595[9]
  i1594.multiplyDragByParticleVelocity = !!i1595[10]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1597 = data
  i1596.enabled = !!i1597[0]
  request.r(i1597[1], i1597[2], 0, i1596, 'sharedMaterial')
  var i1599 = i1597[3]
  var i1598 = []
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 2, i1598, '')
  }
  i1596.sharedMaterials = i1598
  i1596.receiveShadows = !!i1597[4]
  i1596.shadowCastingMode = i1597[5]
  i1596.sortingLayerID = i1597[6]
  i1596.sortingOrder = i1597[7]
  i1596.lightmapIndex = i1597[8]
  i1596.lightmapSceneIndex = i1597[9]
  i1596.lightmapScaleOffset = new pc.Vec4( i1597[10], i1597[11], i1597[12], i1597[13] )
  i1596.lightProbeUsage = i1597[14]
  i1596.reflectionProbeUsage = i1597[15]
  request.r(i1597[16], i1597[17], 0, i1596, 'mesh')
  i1596.meshCount = i1597[18]
  i1596.activeVertexStreamsCount = i1597[19]
  i1596.alignment = i1597[20]
  i1596.renderMode = i1597[21]
  i1596.sortMode = i1597[22]
  i1596.lengthScale = i1597[23]
  i1596.velocityScale = i1597[24]
  i1596.cameraVelocityScale = i1597[25]
  i1596.normalDirection = i1597[26]
  i1596.sortingFudge = i1597[27]
  i1596.minParticleSize = i1597[28]
  i1596.maxParticleSize = i1597[29]
  i1596.pivot = new pc.Vec3( i1597[30], i1597[31], i1597[32] )
  request.r(i1597[33], i1597[34], 0, i1596, 'trailMaterial')
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1601 = data
  i1600.enabled = !!i1601[0]
  i1600.aspect = i1601[1]
  i1600.orthographic = !!i1601[2]
  i1600.orthographicSize = i1601[3]
  i1600.backgroundColor = new pc.Color(i1601[4], i1601[5], i1601[6], i1601[7])
  i1600.nearClipPlane = i1601[8]
  i1600.farClipPlane = i1601[9]
  i1600.fieldOfView = i1601[10]
  i1600.depth = i1601[11]
  i1600.clearFlags = i1601[12]
  i1600.cullingMask = i1601[13]
  i1600.rect = i1601[14]
  request.r(i1601[15], i1601[16], 0, i1600, 'targetTexture')
  i1600.usePhysicalProperties = !!i1601[17]
  i1600.focalLength = i1601[18]
  i1600.sensorSize = new pc.Vec2( i1601[19], i1601[20] )
  i1600.lensShift = new pc.Vec2( i1601[21], i1601[22] )
  i1600.gateFit = i1601[23]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1603 = data
  i1602.name = i1603[0]
  i1602.atlasId = i1603[1]
  i1602.mipmapCount = i1603[2]
  i1602.hdr = !!i1603[3]
  i1602.size = i1603[4]
  i1602.anisoLevel = i1603[5]
  i1602.filterMode = i1603[6]
  i1602.wrapMode = i1603[7]
  var i1605 = i1603[8]
  var i1604 = []
  for(var i = 0; i < i1605.length; i += 4) {
    i1604.push( UnityEngine.Rect.MinMaxRect(i1605[i + 0], i1605[i + 1], i1605[i + 2], i1605[i + 3]) );
  }
  i1602.rects = i1604
  return i1602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1609 = data
  i1608.center = new pc.Vec3( i1609[0], i1609[1], i1609[2] )
  i1608.size = new pc.Vec3( i1609[3], i1609[4], i1609[5] )
  i1608.enabled = !!i1609[6]
  i1608.isTrigger = !!i1609[7]
  request.r(i1609[8], i1609[9], 0, i1608, 'material')
  return i1608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'clip')
  request.r(i1611[2], i1611[3], 0, i1610, 'outputAudioMixerGroup')
  i1610.playOnAwake = !!i1611[4]
  i1610.loop = !!i1611[5]
  i1610.time = i1611[6]
  i1610.volume = i1611[7]
  i1610.pitch = i1611[8]
  i1610.enabled = !!i1611[9]
  return i1610
}

Deserializers["PlayerView"] = function (request, data, root) {
  var i1612 = root || request.c( 'PlayerView' )
  var i1613 = data
  request.r(i1613[0], i1613[1], 0, i1612, '_mainRoot')
  request.r(i1613[2], i1613[3], 0, i1612, '_head')
  i1612._sensitivity = i1613[4]
  i1612._slerpFactor = i1613[5]
  i1612._viewHorizontalThreshold = new pc.Vec2( i1613[6], i1613[7] )
  i1612._viewVerticalThreshold = new pc.Vec2( i1613[8], i1613[9] )
  i1612._initRotate = new pc.Vec2( i1613[10], i1613[11] )
  i1612._totalRotate = new pc.Vec2( i1613[12], i1613[13] )
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animation"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animation' )
  var i1615 = data
  i1614.playAutomatically = !!i1615[0]
  request.r(i1615[1], i1615[2], 0, i1614, 'clip')
  var i1617 = i1615[3]
  var i1616 = []
  for(var i = 0; i < i1617.length; i += 2) {
  request.r(i1617[i + 0], i1617[i + 1], 2, i1616, '')
  }
  i1614.clips = i1616
  i1614.wrapMode = i1615[4]
  i1614.enabled = !!i1615[5]
  return i1614
}

Deserializers["WeaponController"] = function (request, data, root) {
  var i1620 = root || request.c( 'WeaponController' )
  var i1621 = data
  i1620.Mask = UnityEngine.LayerMask.FromIntegerValue( i1621[0] )
  i1620.damage = i1621[1]
  request.r(i1621[2], i1621[3], 0, i1620, '_muzzleTrans')
  request.r(i1621[4], i1621[5], 0, i1620, '_animation')
  request.r(i1621[6], i1621[7], 0, i1620, 'bullet')
  request.r(i1621[8], i1621[9], 0, i1620, '_muzzleFlash')
  request.r(i1621[10], i1621[11], 0, i1620, 'audioClip')
  request.r(i1621[12], i1621[13], 0, i1620, 'audioSource')
  i1620.SphereRadius = i1621[14]
  return i1620
}

Deserializers["PathSigleton"] = function (request, data, root) {
  var i1622 = root || request.c( 'PathSigleton' )
  var i1623 = data
  var i1625 = i1623[0]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('Path')))
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 1, i1624, '')
  }
  i1622._paths = i1624
  return i1622
}

Deserializers["Path"] = function (request, data, root) {
  var i1628 = root || request.c( 'Path' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Transform')))
  for(var i = 0; i < i1631.length; i += 2) {
  request.r(i1631[i + 0], i1631[i + 1], 1, i1630, '')
  }
  i1628.points = i1630
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

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.index = i1643[1]
  i1642.startup = !!i1643[2]
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1645 = data
  i1644.enabled = !!i1645[0]
  i1644.type = i1645[1]
  i1644.color = new pc.Color(i1645[2], i1645[3], i1645[4], i1645[5])
  i1644.cullingMask = i1645[6]
  i1644.intensity = i1645[7]
  i1644.range = i1645[8]
  i1644.spotAngle = i1645[9]
  i1644.shadows = i1645[10]
  i1644.shadowNormalBias = i1645[11]
  i1644.shadowBias = i1645[12]
  i1644.shadowStrength = i1645[13]
  i1644.shadowResolution = i1645[14]
  i1644.lightmapBakeType = i1645[15]
  i1644.renderMode = i1645[16]
  request.r(i1645[17], i1645[18], 0, i1644, 'cookie')
  i1644.cookieSize = i1645[19]
  return i1644
}

Deserializers["ObjectPool"] = function (request, data, root) {
  var i1646 = root || request.c( 'ObjectPool' )
  var i1647 = data
  return i1646
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1648 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1649 = data
  request.r(i1649[0], i1649[1], 0, i1648, 'm_FirstSelected')
  i1648.m_sendNavigationEvents = !!i1649[2]
  i1648.m_DragThreshold = i1649[3]
  return i1648
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1650 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1651 = data
  i1650.m_HorizontalAxis = i1651[0]
  i1650.m_VerticalAxis = i1651[1]
  i1650.m_SubmitButton = i1651[2]
  i1650.m_CancelButton = i1651[3]
  i1650.m_InputActionsPerSecond = i1651[4]
  i1650.m_RepeatDelay = i1651[5]
  i1650.m_ForceModuleActive = !!i1651[6]
  i1650.m_SendPointerHoverToParent = !!i1651[7]
  return i1650
}

Deserializers["SpawnBot"] = function (request, data, root) {
  var i1652 = root || request.c( 'SpawnBot' )
  var i1653 = data
  request.r(i1653[0], i1653[1], 0, i1652, 'botPrefab')
  i1652.spawnInterval = i1653[2]
  i1652.UPPER = i1653[3]
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1655 = data
  i1654.enabled = !!i1655[0]
  i1654.planeDistance = i1655[1]
  i1654.referencePixelsPerUnit = i1655[2]
  i1654.isFallbackOverlay = !!i1655[3]
  i1654.renderMode = i1655[4]
  i1654.renderOrder = i1655[5]
  i1654.sortingLayerName = i1655[6]
  i1654.sortingOrder = i1655[7]
  i1654.scaleFactor = i1655[8]
  request.r(i1655[9], i1655[10], 0, i1654, 'worldCamera')
  i1654.overrideSorting = !!i1655[11]
  i1654.pixelPerfect = !!i1655[12]
  i1654.targetDisplay = i1655[13]
  i1654.overridePixelPerfect = !!i1655[14]
  return i1654
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1656 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1657 = data
  i1656.m_UiScaleMode = i1657[0]
  i1656.m_ReferencePixelsPerUnit = i1657[1]
  i1656.m_ScaleFactor = i1657[2]
  i1656.m_ReferenceResolution = new pc.Vec2( i1657[3], i1657[4] )
  i1656.m_ScreenMatchMode = i1657[5]
  i1656.m_MatchWidthOrHeight = i1657[6]
  i1656.m_PhysicalUnit = i1657[7]
  i1656.m_FallbackScreenDPI = i1657[8]
  i1656.m_DefaultSpriteDPI = i1657[9]
  i1656.m_DynamicPixelsPerUnit = i1657[10]
  i1656.m_PresetInfoIsWorld = !!i1657[11]
  return i1656
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1658 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1659 = data
  i1658.m_IgnoreReversedGraphics = !!i1659[0]
  i1658.m_BlockingObjects = i1659[1]
  i1658.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1659[2] )
  return i1658
}

Deserializers["test"] = function (request, data, root) {
  var i1660 = root || request.c( 'test' )
  var i1661 = data
  return i1660
}

Deserializers["BotController"] = function (request, data, root) {
  var i1662 = root || request.c( 'BotController' )
  var i1663 = data
  request.r(i1663[0], i1663[1], 0, i1662, '_animator')
  i1662.moveSpeed = i1663[2]
  request.r(i1663[3], i1663[4], 0, i1662, '_muzzle')
  request.r(i1663[5], i1663[6], 0, i1662, 'bullet')
  request.r(i1663[7], i1663[8], 0, i1662, 'target')
  i1662.moveIndex = i1663[9]
  i1662.isMoveDone = !!i1663[10]
  i1662.isDie = !!i1663[11]
  i1662.isTakeDame = !!i1663[12]
  i1662.maxHealth = i1663[13]
  i1662.currentHealth = i1663[14]
  request.r(i1663[15], i1663[16], 0, i1662, 'healthBarRenderer')
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1665 = data
  i1664.ambientIntensity = i1665[0]
  i1664.reflectionIntensity = i1665[1]
  i1664.ambientMode = i1665[2]
  i1664.ambientLight = new pc.Color(i1665[3], i1665[4], i1665[5], i1665[6])
  i1664.ambientSkyColor = new pc.Color(i1665[7], i1665[8], i1665[9], i1665[10])
  i1664.ambientGroundColor = new pc.Color(i1665[11], i1665[12], i1665[13], i1665[14])
  i1664.ambientEquatorColor = new pc.Color(i1665[15], i1665[16], i1665[17], i1665[18])
  i1664.fogColor = new pc.Color(i1665[19], i1665[20], i1665[21], i1665[22])
  i1664.fogEndDistance = i1665[23]
  i1664.fogStartDistance = i1665[24]
  i1664.fogDensity = i1665[25]
  i1664.fog = !!i1665[26]
  request.r(i1665[27], i1665[28], 0, i1664, 'skybox')
  i1664.fogMode = i1665[29]
  var i1667 = i1665[30]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1667[i + 0]) );
  }
  i1664.lightmaps = i1666
  i1664.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1665[31], i1664.lightProbes)
  i1664.lightmapsMode = i1665[32]
  i1664.mixedBakeMode = i1665[33]
  i1664.environmentLightingMode = i1665[34]
  i1664.ambientProbe = new pc.SphericalHarmonicsL2(i1665[35])
  i1664.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1665[36])
  i1664.useReferenceAmbientProbe = !!i1665[37]
  request.r(i1665[38], i1665[39], 0, i1664, 'customReflection')
  request.r(i1665[40], i1665[41], 0, i1664, 'defaultReflection')
  i1664.defaultReflectionMode = i1665[42]
  i1664.defaultReflectionResolution = i1665[43]
  i1664.sunLightObjectId = i1665[44]
  i1664.pixelLightCount = i1665[45]
  i1664.defaultReflectionHDR = !!i1665[46]
  i1664.hasLightDataAsset = !!i1665[47]
  i1664.hasManualGenerate = !!i1665[48]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'lightmapColor')
  request.r(i1671[2], i1671[3], 0, i1670, 'lightmapDirection')
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1672 = root || new UnityEngine.LightProbes()
  var i1673 = data
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1681 = data
  var i1683 = i1681[0]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1683[i + 0]));
  }
  i1680.ShaderCompilationErrors = i1682
  i1680.name = i1681[1]
  i1680.guid = i1681[2]
  var i1685 = i1681[3]
  var i1684 = []
  for(var i = 0; i < i1685.length; i += 1) {
    i1684.push( i1685[i + 0] );
  }
  i1680.shaderDefinedKeywords = i1684
  var i1687 = i1681[4]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1687[i + 0]) );
  }
  i1680.passes = i1686
  var i1689 = i1681[5]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1689[i + 0]) );
  }
  i1680.usePasses = i1688
  var i1691 = i1681[6]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1691[i + 0]) );
  }
  i1680.defaultParameterValues = i1690
  request.r(i1681[7], i1681[8], 0, i1680, 'unityFallbackShader')
  i1680.readDepth = !!i1681[9]
  i1680.isCreatedByShaderGraph = !!i1681[10]
  i1680.usedBatchUniforms = i1681[11]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1695 = data
  i1694.shaderName = i1695[0]
  i1694.errorMessage = i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1700 = root || new pc.UnityShaderPass()
  var i1701 = data
  i1700.id = i1701[0]
  i1700.subShaderIndex = i1701[1]
  i1700.name = i1701[2]
  i1700.passType = i1701[3]
  i1700.grabPassTextureName = i1701[4]
  i1700.usePass = !!i1701[5]
  i1700.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[6], i1700.zTest)
  i1700.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[7], i1700.zWrite)
  i1700.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[8], i1700.culling)
  i1700.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1701[9], i1700.blending)
  i1700.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1701[10], i1700.alphaBlending)
  i1700.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[11], i1700.colorWriteMask)
  i1700.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[12], i1700.offsetUnits)
  i1700.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[13], i1700.offsetFactor)
  i1700.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[14], i1700.stencilRef)
  i1700.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[15], i1700.stencilReadMask)
  i1700.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1701[16], i1700.stencilWriteMask)
  i1700.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[17], i1700.stencilOp)
  i1700.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[18], i1700.stencilOpFront)
  i1700.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1701[19], i1700.stencilOpBack)
  var i1703 = i1701[20]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1703[i + 0]) );
  }
  i1700.tags = i1702
  var i1705 = i1701[21]
  var i1704 = []
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.push( i1705[i + 0] );
  }
  i1700.passDefinedKeywords = i1704
  var i1707 = i1701[22]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 1) {
    i1706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1707[i + 0]) );
  }
  i1700.passDefinedKeywordGroups = i1706
  var i1709 = i1701[23]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1709[i + 0]) );
  }
  i1700.variants = i1708
  var i1711 = i1701[24]
  var i1710 = []
  for(var i = 0; i < i1711.length; i += 1) {
    i1710.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1711[i + 0]) );
  }
  i1700.excludedVariants = i1710
  i1700.hasDepthReader = !!i1701[25]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1713 = data
  i1712.val = i1713[0]
  i1712.name = i1713[1]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1715 = data
  i1714.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[0], i1714.src)
  i1714.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[1], i1714.dst)
  i1714.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1715[2], i1714.op)
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1717 = data
  i1716.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[0], i1716.pass)
  i1716.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[1], i1716.fail)
  i1716.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[2], i1716.zFail)
  i1716.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1717[3], i1716.comp)
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1721 = data
  i1720.name = i1721[0]
  i1720.value = i1721[1]
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1725 = data
  var i1727 = i1725[0]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( i1727[i + 0] );
  }
  i1724.keywords = i1726
  i1724.hasDiscard = !!i1725[1]
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1731 = data
  i1730.passId = i1731[0]
  i1730.subShaderIndex = i1731[1]
  var i1733 = i1731[2]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( i1733[i + 0] );
  }
  i1730.keywords = i1732
  i1730.vertexProgram = i1731[3]
  i1730.fragmentProgram = i1731[4]
  i1730.readDepth = !!i1731[5]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1737 = data
  request.r(i1737[0], i1737[1], 0, i1736, 'shader')
  i1736.pass = i1737[2]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1741 = data
  i1740.name = i1741[0]
  i1740.type = i1741[1]
  i1740.value = new pc.Vec4( i1741[2], i1741[3], i1741[4], i1741[5] )
  i1740.textureValue = i1741[6]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1743 = data
  i1742.name = i1743[0]
  request.r(i1743[1], i1743[2], 0, i1742, 'texture')
  i1742.aabb = i1743[3]
  i1742.vertices = i1743[4]
  i1742.triangles = i1743[5]
  i1742.textureRect = UnityEngine.Rect.MinMaxRect(i1743[6], i1743[7], i1743[8], i1743[9])
  i1742.packedRect = UnityEngine.Rect.MinMaxRect(i1743[10], i1743[11], i1743[12], i1743[13])
  i1742.border = new pc.Vec4( i1743[14], i1743[15], i1743[16], i1743[17] )
  i1742.transparency = i1743[18]
  i1742.bounds = i1743[19]
  i1742.pixelsPerUnit = i1743[20]
  i1742.textureWidth = i1743[21]
  i1742.textureHeight = i1743[22]
  i1742.nativeSize = new pc.Vec2( i1743[23], i1743[24] )
  i1742.pivot = new pc.Vec2( i1743[25], i1743[26] )
  i1742.textureRectOffset = new pc.Vec2( i1743[27], i1743[28] )
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1745 = data
  i1744.name = i1745[0]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.wrapMode = i1747[1]
  i1746.isLooping = !!i1747[2]
  i1746.length = i1747[3]
  var i1749 = i1747[4]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1749[i + 0]) );
  }
  i1746.curves = i1748
  var i1751 = i1747[5]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1751[i + 0]) );
  }
  i1746.events = i1750
  i1746.halfPrecision = !!i1747[6]
  i1746.frameRate = i1747[7]
  i1746.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1747[8], i1746.localBounds)
  i1746.hasMuscleCurves = !!i1747[9]
  var i1753 = i1747[10]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 1) {
    i1752.push( i1753[i + 0] );
  }
  i1746.clipMuscleConstant = i1752
  i1746.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1747[11], i1746.clipBindingConstant)
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1757 = data
  i1756.path = i1757[0]
  i1756.componentType = i1757[1]
  i1756.property = i1757[2]
  i1756.keys = i1757[3]
  var i1759 = i1757[4]
  var i1758 = []
  for(var i = 0; i < i1759.length; i += 1) {
    i1758.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1759[i + 0]) );
  }
  i1756.objectReferenceKeys = i1758
  return i1756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1763 = data
  i1762.time = i1763[0]
  request.r(i1763[1], i1763[2], 0, i1762, 'value')
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1767 = data
  i1766.functionName = i1767[0]
  i1766.floatParameter = i1767[1]
  i1766.intParameter = i1767[2]
  i1766.stringParameter = i1767[3]
  request.r(i1767[4], i1767[5], 0, i1766, 'objectReferenceParameter')
  i1766.time = i1767[6]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1769 = data
  i1768.center = new pc.Vec3( i1769[0], i1769[1], i1769[2] )
  i1768.extends = new pc.Vec3( i1769[3], i1769[4], i1769[5] )
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1773 = data
  var i1775 = i1773[0]
  var i1774 = []
  for(var i = 0; i < i1775.length; i += 1) {
    i1774.push( i1775[i + 0] );
  }
  i1772.genericBindings = i1774
  var i1777 = i1773[1]
  var i1776 = []
  for(var i = 0; i < i1777.length; i += 1) {
    i1776.push( i1777[i + 0] );
  }
  i1772.pptrCurveMapping = i1776
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1779 = data
  i1778.name = i1779[0]
  var i1781 = i1779[1]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1781[i + 0]) );
  }
  i1778.states = i1780
  var i1783 = i1779[2]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1783[i + 0]) );
  }
  i1778.layers = i1782
  var i1785 = i1779[3]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1785[i + 0]) );
  }
  i1778.parameters = i1784
  i1778.animationClips = i1779[4]
  i1778.HasSubStateMachines = !!i1779[5]
  i1778.avatarUnsupported = i1779[6]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1789 = data
  i1788.cycleOffset = i1789[0]
  i1788.cycleOffsetParameter = i1789[1]
  i1788.cycleOffsetParameterActive = !!i1789[2]
  i1788.mirror = !!i1789[3]
  i1788.mirrorParameter = i1789[4]
  i1788.mirrorParameterActive = !!i1789[5]
  i1788.motionId = i1789[6]
  i1788.nameHash = i1789[7]
  i1788.fullPathHash = i1789[8]
  i1788.speed = i1789[9]
  i1788.speedParameter = i1789[10]
  i1788.speedParameterActive = !!i1789[11]
  i1788.tag = i1789[12]
  i1788.name = i1789[13]
  i1788.layer = i1789[14]
  i1788.writeDefaultValues = !!i1789[15]
  var i1791 = i1789[16]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1791[i + 0]) );
  }
  i1788.transitions = i1790
  var i1793 = i1789[17]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 2) {
  request.r(i1793[i + 0], i1793[i + 1], 2, i1792, '')
  }
  i1788.behaviours = i1792
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1797 = data
  i1796.fullPath = i1797[0]
  i1796.canTransitionToSelf = !!i1797[1]
  i1796.duration = i1797[2]
  i1796.exitTime = i1797[3]
  i1796.hasExitTime = !!i1797[4]
  i1796.hasFixedDuration = !!i1797[5]
  i1796.interruptionSource = i1797[6]
  i1796.offset = i1797[7]
  i1796.orderedInterruption = !!i1797[8]
  i1796.destinationStateNameHash = i1797[9]
  i1796.destinationStateMachineId = i1797[10]
  i1796.isExit = !!i1797[11]
  i1796.mute = !!i1797[12]
  i1796.solo = !!i1797[13]
  var i1799 = i1797[14]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1799[i + 0]) );
  }
  i1796.conditions = i1798
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1803 = data
  i1802.mode = i1803[0]
  i1802.parameter = i1803[1]
  i1802.threshold = i1803[2]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1809 = data
  i1808.blendingMode = i1809[0]
  i1808.defaultWeight = i1809[1]
  i1808.name = i1809[2]
  i1808.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1809[3], i1808.stateMachine)
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1811 = data
  i1810.id = i1811[0]
  i1810.defaultStateNameHash = i1811[1]
  var i1813 = i1811[2]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1813[i + 0]) );
  }
  i1810.entryTransitions = i1812
  var i1815 = i1811[3]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 1) {
    i1814.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1815[i + 0]) );
  }
  i1810.anyStateTransitions = i1814
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1819 = data
  i1818.destinationStateNameHash = i1819[0]
  i1818.destinationStateMachineId = i1819[1]
  i1818.isExit = !!i1819[2]
  i1818.mute = !!i1819[3]
  i1818.solo = !!i1819[4]
  var i1821 = i1819[5]
  var i1820 = []
  for(var i = 0; i < i1821.length; i += 1) {
    i1820.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1821[i + 0]) );
  }
  i1818.conditions = i1820
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1825 = data
  i1824.defaultBool = !!i1825[0]
  i1824.defaultFloat = i1825[1]
  i1824.defaultInt = i1825[2]
  i1824.name = i1825[3]
  i1824.nameHash = i1825[4]
  i1824.type = i1825[5]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1829[i + 0]) );
  }
  i1826.files = i1828
  i1826.componentToPrefabIds = i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1833 = data
  i1832.path = i1833[0]
  request.r(i1833[1], i1833[2], 0, i1832, 'unityObject')
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1835 = data
  var i1837 = i1835[0]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1837[i + 0]) );
  }
  i1834.scriptsExecutionOrder = i1836
  var i1839 = i1835[1]
  var i1838 = []
  for(var i = 0; i < i1839.length; i += 1) {
    i1838.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1839[i + 0]) );
  }
  i1834.sortingLayers = i1838
  var i1841 = i1835[2]
  var i1840 = []
  for(var i = 0; i < i1841.length; i += 1) {
    i1840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1841[i + 0]) );
  }
  i1834.cullingLayers = i1840
  i1834.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1835[3], i1834.timeSettings)
  i1834.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1835[4], i1834.physicsSettings)
  i1834.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1835[5], i1834.physics2DSettings)
  i1834.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1835[6], i1834.qualitySettings)
  i1834.enableRealtimeShadows = !!i1835[7]
  i1834.enableAutoInstancing = !!i1835[8]
  i1834.enableDynamicBatching = !!i1835[9]
  i1834.lightmapEncodingQuality = i1835[10]
  i1834.desiredColorSpace = i1835[11]
  var i1843 = i1835[12]
  var i1842 = []
  for(var i = 0; i < i1843.length; i += 1) {
    i1842.push( i1843[i + 0] );
  }
  i1834.allTags = i1842
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1847 = data
  i1846.name = i1847[0]
  i1846.value = i1847[1]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1851 = data
  i1850.id = i1851[0]
  i1850.name = i1851[1]
  i1850.value = i1851[2]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1855 = data
  i1854.id = i1855[0]
  i1854.name = i1855[1]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1857 = data
  i1856.fixedDeltaTime = i1857[0]
  i1856.maximumDeltaTime = i1857[1]
  i1856.timeScale = i1857[2]
  i1856.maximumParticleTimestep = i1857[3]
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1859 = data
  i1858.gravity = new pc.Vec3( i1859[0], i1859[1], i1859[2] )
  i1858.defaultSolverIterations = i1859[3]
  i1858.bounceThreshold = i1859[4]
  i1858.autoSyncTransforms = !!i1859[5]
  i1858.autoSimulation = !!i1859[6]
  var i1861 = i1859[7]
  var i1860 = []
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1861[i + 0]) );
  }
  i1858.collisionMatrix = i1860
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1865 = data
  i1864.enabled = !!i1865[0]
  i1864.layerId = i1865[1]
  i1864.otherLayerId = i1865[2]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1867 = data
  request.r(i1867[0], i1867[1], 0, i1866, 'material')
  i1866.gravity = new pc.Vec2( i1867[2], i1867[3] )
  i1866.positionIterations = i1867[4]
  i1866.velocityIterations = i1867[5]
  i1866.velocityThreshold = i1867[6]
  i1866.maxLinearCorrection = i1867[7]
  i1866.maxAngularCorrection = i1867[8]
  i1866.maxTranslationSpeed = i1867[9]
  i1866.maxRotationSpeed = i1867[10]
  i1866.baumgarteScale = i1867[11]
  i1866.baumgarteTOIScale = i1867[12]
  i1866.timeToSleep = i1867[13]
  i1866.linearSleepTolerance = i1867[14]
  i1866.angularSleepTolerance = i1867[15]
  i1866.defaultContactOffset = i1867[16]
  i1866.autoSimulation = !!i1867[17]
  i1866.queriesHitTriggers = !!i1867[18]
  i1866.queriesStartInColliders = !!i1867[19]
  i1866.callbacksOnDisable = !!i1867[20]
  i1866.reuseCollisionCallbacks = !!i1867[21]
  i1866.autoSyncTransforms = !!i1867[22]
  var i1869 = i1867[23]
  var i1868 = []
  for(var i = 0; i < i1869.length; i += 1) {
    i1868.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1869[i + 0]) );
  }
  i1866.collisionMatrix = i1868
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1873 = data
  i1872.enabled = !!i1873[0]
  i1872.layerId = i1873[1]
  i1872.otherLayerId = i1873[2]
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1875 = data
  var i1877 = i1875[0]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1877[i + 0]) );
  }
  i1874.qualityLevels = i1876
  var i1879 = i1875[1]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1874.names = i1878
  i1874.shadows = i1875[2]
  i1874.anisotropicFiltering = i1875[3]
  i1874.antiAliasing = i1875[4]
  i1874.lodBias = i1875[5]
  i1874.shadowCascades = i1875[6]
  i1874.shadowDistance = i1875[7]
  i1874.shadowmaskMode = i1875[8]
  i1874.shadowProjection = i1875[9]
  i1874.shadowResolution = i1875[10]
  i1874.softParticles = !!i1875[11]
  i1874.softVegetation = !!i1875[12]
  i1874.activeColorSpace = i1875[13]
  i1874.desiredColorSpace = i1875[14]
  i1874.masterTextureLimit = i1875[15]
  i1874.maxQueuedFrames = i1875[16]
  i1874.particleRaycastBudget = i1875[17]
  i1874.pixelLightCount = i1875[18]
  i1874.realtimeReflectionProbes = !!i1875[19]
  i1874.shadowCascade2Split = i1875[20]
  i1874.shadowCascade4Split = new pc.Vec3( i1875[21], i1875[22], i1875[23] )
  i1874.streamingMipmapsActive = !!i1875[24]
  i1874.vSyncCount = i1875[25]
  i1874.asyncUploadBufferSize = i1875[26]
  i1874.asyncUploadTimeSlice = i1875[27]
  i1874.billboardsFaceCameraPosition = !!i1875[28]
  i1874.shadowNearPlaneOffset = i1875[29]
  i1874.streamingMipmapsMemoryBudget = i1875[30]
  i1874.maximumLODLevel = i1875[31]
  i1874.streamingMipmapsAddAllCameras = !!i1875[32]
  i1874.streamingMipmapsMaxLevelReduction = i1875[33]
  i1874.streamingMipmapsRenderersPerFrame = i1875[34]
  i1874.resolutionScalingFixedDPIFactor = i1875[35]
  i1874.streamingMipmapsMaxFileIORequests = i1875[36]
  i1874.currentQualityLevel = i1875[37]
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1883 = data
  i1882.name = i1883[0]
  var i1885 = i1883[1]
  var i1884 = []
  for(var i = 0; i < i1885.length; i += 1) {
    i1884.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1885[i + 0]) );
  }
  i1882.tos = i1884
  var i1887 = i1883[2]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( i1887[i + 0] );
  }
  i1882.constant = i1886
  i1882.isValid = !!i1883[3]
  i1882.isHuman = !!i1883[4]
  i1882.hasRootMotion = !!i1883[5]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1891 = data
  i1890.hash = i1891[0]
  i1890.path = i1891[1]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1895 = data
  i1894.weight = i1895[0]
  i1894.vertices = i1895[1]
  i1894.normals = i1895[2]
  i1894.tangents = i1895[3]
  return i1894
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animation":{"playAutomatically":0,"clip":1,"clips":3,"wrapMode":4,"enabled":5},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"usedBatchUniforms":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4,"HasSubStateMachines":5,"avatarUnsupported":6},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"layer":14,"writeDefaultValues":15,"transitions":16,"behaviours":17},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"47":[48],"49":[48],"50":[48],"51":[48],"52":[48],"53":[48],"54":[10],"55":[16],"56":[57],"58":[57],"59":[57],"60":[57],"61":[57],"62":[57],"63":[57],"64":[65],"66":[65],"67":[65],"68":[65],"69":[65],"70":[65],"71":[65],"72":[65],"73":[65],"74":[65],"75":[65],"76":[65],"77":[65],"78":[16],"79":[5],"80":[81],"82":[81],"39":[28],"83":[28],"84":[5,28],"85":[28,30],"86":[28],"87":[30,28],"88":[5],"89":[30,28],"90":[28],"91":[92],"93":[28],"94":[28],"41":[39],"32":[30,28],"95":[28],"40":[39],"96":[28],"97":[28],"98":[28],"99":[28],"100":[28],"101":[28],"102":[28],"103":[28],"104":[28],"105":[30,28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[30,28],"111":[28],"112":[36],"113":[36],"37":[36],"114":[36],"115":[16],"116":[16],"117":[92],"118":[92]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.Animator","UnityEngine.Avatar","UnityEngine.LODGroup","UnityEngine.SkinnedMeshRenderer","UnityEngine.MonoBehaviour","BulletTrail","UnityEngine.MeshCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.BoxCollider","UnityEngine.AudioSource","PlayerView","UnityEngine.Animation","UnityEngine.AnimationClip","WeaponController","UnityEngine.GameObject","UnityEngine.AudioClip","PathSigleton","Path","UnityEngine.RectTransform","UICrosshairItem","UnityEngine.CanvasRenderer","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Light","ObjectPool","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","SpawnBot","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","test","BotController","UnityEditor.Animations.AnimatorController","UnityEngine.Cubemap","UnityEditor.MonoScript","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Rigidbody","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Scrollbar","UnityEngine.UI.ScrollRect","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.StateMachine","Unity.VisualScripting.SceneVariables"]

Deserializers.unityVersion = "2021.3.33f1";

Deserializers.productName = "Luna";

Deserializers.lunaInitializationTime = "01/29/2024 09:48:25";

Deserializers.lunaDaysRunning = "0.8";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1624";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3484";

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

Deserializers.buildID = "be5e6ea9-f6d7-4049-b3a7-214b54820833";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

