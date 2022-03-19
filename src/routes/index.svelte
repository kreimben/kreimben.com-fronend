<script lang="ts">
 import { onMount } from 'svelte';

 import Menu from '../components/Menu.svelte';

 let json;
 let success;
 let urls = [];

 onMount(async () => {
     const res = await fetch(`http://localhost:3000/api/get_photos`);
     const json = await res.json();

     success = json["success"];
     //urls = json["url"];
 });
</script>

<svelte:head>
    <title>Kremben.com</title>
</svelte:head>

<header>
    <Menu />
</header>

<main>
    {#each urls as url}
        <!--
        <img alt={url} src={url} />
        -->
    {:else}
        <div class='nothing'>
            Nothing to display :(
        </div>

        <div class="nothing_subscribe">
            Sorry, I'll get back soon!
        </div>
    {/each}

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
