<script>
    import { T } from '@threlte/core'
    import { spring } from 'svelte/motion'
    import { interactivity } from '@threlte/extras'
    import { useTexture, RoundedBoxGeometry, OrbitControls } from '@threlte/extras'
    import { XR } from '@threlte/xr'
    import textture_file from '$lib/assets/icon.png';


    interactivity()
    const obj_scale = spring(1)

    const generated_image = useTexture(textture_file)
    // const generated_image = undefined
    let rotation = 0

</script>

<!-- <XR/>



<T.Mesh 
    scale={$obj_scale}
    position.y={1.8}
    position.x={4}>
    <T.BoxGeometry args={[2, 2, 2]} />
    {#if $generated_image}
        <T.MeshBasicMaterial map={$generated_image} />
    {:else}
        <T.MeshBasicMaterial color="hotpink" />
    {/if}
</T.Mesh> -->


<XR />
<T.AmbientLight />
<T.DirectionalLight
  position.y={10}
  position.z={10}
/>
<T.PerspectiveCamera
  makeDefault
  position.y={1.8}
  position.z={5}
>
  <OrbitControls
    target={[0, 0, 0]}
    enablePan={false}
    enableZoom={false}
  />
</T.PerspectiveCamera>

<T.Mesh
  position.y={1.8}
  rotation.x={rotation}
  rotation.y={rotation}
>
  <RoundedBoxGeometry args={[0.2, 0.2, 0.2]} />
  <T.MeshStandardMaterial color="orange" />
</T.Mesh>
<T.Mesh 
    scale={0.25}
    position.y={1.8}
    position.x={1}>
    <T.BoxGeometry args={[2, 2, 2]} />
    {#if $generated_image}
        <T.MeshBasicMaterial map={$generated_image} />
    {:else}
        <T.MeshBasicMaterial color="hotpink" />
    {/if}
</T.Mesh>
<T.Mesh>
  <T.CylinderGeometry args={[3, 0.01]} />
  <T.MeshStandardMaterial color="turquoise" />
</T.Mesh>