<script lang="ts">
 export let url;
</script>

<img alt={url} src={url} class="card_image" />

<style>
 .card_image {
     box-shadow: 0 0 0 0 rgba(0,0,0,0.2);
     transition: 0.2s;

     padding: 1rem;
     background: red;

     margin:0.3em;
 }

 .card_image:hover {
     box-shadow: 0 8px 16px 0 rgba(0,0,0,1);
 }
</style>
