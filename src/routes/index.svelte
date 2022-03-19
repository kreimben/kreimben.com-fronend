<script lang="ts">
 import { onMount } from 'svelte';

 import Menu from '../components/Menu.svelte';

 let json;
 let success;

 onMount(async () => {
     const json= await fetch(`http://localhost:3000/api/get_photos`);
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
            Nothing to display :(
        </div>

        <div class="nothing_subscribe">
            Sorry, I'll get back soon!
        </div>
    {/if}

</main>


<style>
 .nothing {
     font-size: 3rem;
     text-align: center;
     margin-top: 20%;
 }

 .nothing_subscribe {
     margin-top: 1%;
     font-size: 1.2rem;
     text-align: center;
 }
</style>
