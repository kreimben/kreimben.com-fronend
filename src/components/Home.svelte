<script lang="ts">
 import { onMount } from 'svelte';

 let json;

 onMount(async () => {
     const res = await fetch(`http://localhost:8080/api/`);
     json = await res.json();
     console.log('result: ' + json);
 });
</script>

<div>

    {#if json}
        <div>
            {json}
        </div>
    {:else}
        <div class='nothing'>
            Nothing!
        </div>
    {/if}

</div>


<style>
 .nothing {
     font-size: 3rem;
 }
</style>
