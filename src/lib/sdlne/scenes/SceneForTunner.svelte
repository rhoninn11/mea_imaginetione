<script>
    import { T } from '@threlte/core'
    import { spring } from 'svelte/motion'
    import { interactivity } from '@threlte/extras'
    import NeonTunnel from "$lib/sdlne/comp/3d/NeonTunnel.svelte"


    interactivity()
    const obj_scale = spring(1)

    // const generated_image = undefined

</script>

<T.PerspectiveCamera
  makeDefault
  position={[10, 10, 10]}
  on:create={({ ref }) => {
    ref.lookAt(0, 1, 0)
  }}
/>

<NeonTunnel/>
