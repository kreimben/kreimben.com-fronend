<script lang="ts">
    import {onMount} from 'svelte';
    import Gallery from 'svelte-image-gallery';

    import Menu from '../components/Menu.svelte';
    import Footer from "../components/Footer.svelte";

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
    <Menu/>
</header>

<main>
    {#if urls.length !== 0}
        <div class="main_gallery">
            <Gallery class="mt-32" gap={16} maxColumnWidth={350}>
                {#each urls as url}
                    <img src={url} alt="images from instagram."/>
                {/each}
            </Gallery>
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

<Footer/>

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

    .main_gallery {
        margin-top: 64px;
        margin: 2% 2%;
    }
</style>