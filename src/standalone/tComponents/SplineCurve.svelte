<script>
    import { T } from '@threlte/core'
    import { MeshLineGeometry, MeshLineMaterial} from '@threlte/extras'
    import { CatmullRomCurve3, Vector3 } from 'three'
    // create a smooth curve from 4 points
    const curve = new CatmullRomCurve3([
      new Vector3(-3, 0, 0),
      new Vector3(-1, 1, 0),
      new Vector3(1, -1, 0),
      new Vector3(3, 0, 0)
    ])
    const curve1 = new CatmullRomCurve3([
      new Vector3(-3, 0, 0),
      new Vector3(-1, 0.75, 0),
      new Vector3(1, -0.75, 0),
      new Vector3(3, 0, 0)
    ])

    const curve2 = new CatmullRomCurve3([
      new Vector3(-3, 0, 0),
      new Vector3(-1, 0.5, 0),
      new Vector3(1, -0.5, 0),
      new Vector3(3, 0, 0)
    ])


    // convert curve to an array of 100 points
    const points = curve.getPoints(50)
    const points1 = curve1.getPoints(50)
    const points2 = curve2.getPoints(50)
  </script>

  <T.Mesh
    position.y={3}
    scale={2}
  >
    <MeshLineGeometry
      points={points2}
      shape={"taper"}
    />
    <MeshLineMaterial color="#345347" width={0.1} />
  </T.Mesh>

  <T.Mesh
    position.y={3}
    scale={2}
  >
    <MeshLineGeometry
      points={points1}
      shape={"taper"}
    />
    <MeshLineMaterial color="#637d9e" width={0.1} />
  </T.Mesh>

  <T.Mesh
  position.y={3}
  scale={2}
>
  <MeshLineGeometry
    {points}
    shape={"taper"}
  />
  <MeshLineMaterial color="#fe3d00" width={0.1} />
</T.Mesh>