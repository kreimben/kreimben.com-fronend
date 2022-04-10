<script lang="ts">
    import {onMount} from 'svelte';
    import Carousel from 'svelte-carousel';

    import Menu from '../components/Menu.svelte';
    import Footer from "../components/Footer.svelte";
    import Card from "../components/Card.svelte";

    let json;
    let success;
    let urls = [];

    let carousel;

    onMount(async () => {
        const res = await fetch(`http://localhost:3000/api/get_photos`);
        const json = await res.json();

        success = json["success"];
        urls = json["url"];

        // let module = await import('svelte-carousel')
        // Carousel = module.default;
    });

    const route_to_images = () => {

    }
</script>

<svelte:head>
    <title>Kremben.com</title>
</svelte:head>

<header>
    <Menu/>
</header>

<main>
    <Carousel
            bind:this={carousel}
            autoplay
            autoplayDuration={2000}
            autoplayProgressVisible
            pauseOnFocus
    >
        {#each urls as url}
            <Card url={url} on:click={route_to_images}/>
        {/each}
    </Carousel>
</main>

<Footer/>

<style>
</style>
