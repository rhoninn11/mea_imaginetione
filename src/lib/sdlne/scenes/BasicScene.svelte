<script>
    import { T } from '@threlte/core'
    import { spring } from 'svelte/motion'
    import { interactivity } from '@threlte/extras'
    import { useTexture } from '@threlte/extras'

    import textture_file from '$lib/assets/img/icon.png';


    interactivity()
    const obj_scale = spring(1)

    const generated_image = useTexture(textture_file)
    // const generated_image = undefined

</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<T.Mesh 
    scale={$obj_scale}
    on:pointerenter={() => obj_scale.set(1.5)}
    on:pointerleave={() => obj_scale.set(1)}
    on:wheel={(e) => console.log('wheel', e)}
    position.y={1}>
    <T.BoxGeometry args={[2, 2, 2]} />
    {#if $generated_image}
        <T.MeshBasicMaterial map={$generated_image} />
    {:else}
        <T.MeshBasicMaterial color="hotpink" />
    {/if}
    
</T.Mesh>z