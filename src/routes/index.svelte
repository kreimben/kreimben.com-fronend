<script lang="ts">
    import {onMount} from 'svelte';

    import Menu from '../components/Menu.svelte';
    import Footer from "../components/Footer.svelte";

    let Carousel;
    let carousel;

    onMount(async () => {
        const module = await import('svelte-carousel');
        Carousel = module.default;
    });

    const handleNextClick = () => {
        carousel.goToNext();
    }
</script>

<svelte:head>
    <title>Kremben.com</title>
</svelte:head>

<header>
    <Menu/>
</header>

<main>
    <svelte:component
            this={Carousel}
            bind:this={carousel}>
    </svelte:component>

    <button on:click={handleNextClick}>Next</button>
</main>

<Footer/>

<style>
</style>
