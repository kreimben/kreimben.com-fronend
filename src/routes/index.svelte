<script lang="ts">
 import { onMount } from 'svelte';

 import Menu from '../components/Menu.svelte';

 let json;

 let success;

 onMount(async () => {
     const res = await fetch(`http://localhost:3000/api/get_photos`);
     json = await res.json();
     success = json["success"];
     console.log('result: ' + JSON.stringify(json));

 });
</script>

<svelte:head>
    <title>Kremben.com</title>
</svelte:head>

<header>
    <Menu />
</header>

<main>
    {#if success === true}
        <div>
            {JSON.stringify(json)}
        </div>
        <br />
        <div>
            {JSON.stringify(json["success"])}
        </div>
        <br />
        <div>
            {json["success"]}
        </div>
    {:else}
        <div class='nothing'>
            Nothing to display!
        </div>
    {/if}

</main>


<style>
 .nothing {
     font-size: 3rem;
     text-align: center;
     margin-top: 20%;
 }
</style>
