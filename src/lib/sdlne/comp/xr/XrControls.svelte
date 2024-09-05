<script lang="ts">
    import { T, useTask } from "@threlte/core";
    import { XR, Hand, Controller, type XRHandEvent, type XRControllerEvent } from '@threlte/xr'
    import { handJoints, useHandJoint } from '@threlte/xr'
    import { Text } from '@threlte/extras'

    const handleEvent = (event: XRControllerEvent, name: string) => {
        console.log(name, 'Hand', event)
    }
    let test_text = "salama alejkum, alejkum salam"

    const joint = useHandJoint("left", handJoints[0]!)


    useTask((delta) => {
		if(joint.current === undefined){
            test_text = "joint is undefined";
            return;
        }

        const {x,y,z} = joint.current.position;
        test_text = `${handJoints[0]} position is: x-${x}, y-${y}, z-${z}`
	});

</script>

<Controller left 
    on:connected={(event) => handleEvent(event, "left")}
    on:disconnected={(event) => handleEvent(event, "left")}
    on:select={(event) => handleEvent(event, "left")}
    on:squeeze={(event) => handleEvent(event, "left")}>
    <Text
        slot="target-ray"
        fontSize={0.05}
        text={test_text}
        position.x={0.1}
    />
</Controller>
<Hand left></Hand>
<Controller right 
    on:connected={(event) => handleEvent(event, "right")}
    on:disconnected={(event) => handleEvent(event, "right")}
    on:select={(event) => handleEvent(event, "right")}
    on:squeeze={(event) => handleEvent(event, "right")}
    >
</Controller>
<Hand right></Hand>