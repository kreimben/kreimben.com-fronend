<script lang="ts">
 import { onMount } from 'svelte';

 import Menu from '../components/Menu.svelte';
 import Card from '../components/Card.svelte';

 let json;
 let success;
 let urls = [];

 onMount(async () => {
     const res = await fetch(`http://localhost:3000/api/get_photos`);
     const json = await res.json();

     success = json["success"];
     urls = json["url"];
 });
</script>

<svelte:head>
    <title>Kremben.com</title>
</svelte:head>


<header>
    <Menu />
</header>

<main>
    {#if urls.length !== 0}
        <div class="base grid gap-4 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 grid-glow-col">
            {#each urls as url}
                <Card url={url} />
            {/each}
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

<footer>
    <div style="text-align: center; margin-bottom: 2em;">
        <div style="font-size: 1.2rem;">
            Copyright 2020-2022 Aksidion Kreimben
        </div>
        <div style="font-size: 1em;">
            All rights reserved.
        </div>
        <div>
            <a href="mailto:aksidion@kreimben.com">
                aksidion@kreimben.com
            </a>
        </div>
    </div>
</footer>

<style>
 .nothing {
     font-size: 3rem;
     text-align: center;
     margin-top: 20%;
     background-color: rgba(255, 255, 255, 0.5);
 }

 .nothing_subscribe {
     margin-top: 1%;
     font-size: 1.2rem;
     text-align: center;
 }

 .base {
     margin-top: 64px;
     margin: 2% 2%;
 }
</style>
