<script lang='ts'>
    import { onMount } from 'svelte';
    import Menu from '@/components/Menu.svelte';

    onMount(async () => {
        console.log('about me page!');
    });
</script>

<div>
    <Menu />
    About me!
</div>
