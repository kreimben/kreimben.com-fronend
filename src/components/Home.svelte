<script lang="ts">
 import { onMount } from '*.svelte';

 let json;

 /*onMount(async () => {
   const res = await fetch(`https://api.kreimben.com/get_photos`);
   json = await res.json();
 });*/

</script>

<div>

  {#each json as data}
    <div>
      {data}
    </div>
  {:else}
    <div class='nothing'>
      Nothing!
    </div>
  {/each}

</div>


<style>
 .nothing {
   background: red;
 }
</style>
