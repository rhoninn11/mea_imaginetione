<script>
    import { T } from '@threlte/core'
    import { MeshLineGeometry, MeshLineMaterial} from '@threlte/extras'
    import { CatmullRomCurve3, Vector3 } from 'three'
    // create a smooth curve from 4 points


    export let offset = 3
    export let girth = 1
    export let color = "#345347"

    $: conn_curve = new CatmullRomCurve3([
      new Vector3(-offset, 0, 0),
      new Vector3(-0.33*offset, girth, 0),
      new Vector3(0.33*offset, -girth, 0),
      new Vector3(offset, 0, 0)
    ])
    $: conn_points = conn_curve.getPoints(50)
    const curve = new CatmullRomCurve3([
      new Vector3(-3, 0, 0),
      new Vector3(-1, 0.75, 0),
      new Vector3(1, -0.75, 0),
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
      points={conn_points}
      shape={"taper"}
    />
    <MeshLineMaterial {color} width={0.1} />
  </T.Mesh>
