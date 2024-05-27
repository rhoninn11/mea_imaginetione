
<script lang="ts">
    export let notify: (value: number) => void;
    let count = 0;
    function handleClick() {
        count += 1;
        if (notify) notify(count);
    }

</script>


<button on:click={handleClick}>
    Clicked {count} {count === 1 ? 'time' : 'times'}
</button>