<script lang="ts">
 export let url;
</script>

<img alt={url} src={url} class="card_image" />

<style>
 .card_image {
     transition: 0.2s;

     margin:0.3em;

     border: 6px solid #fff;
     border-radius: 16px;
     background: rgba(255, 255, 255, 0.8);
     box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
 }

 .card_image:hover {
     box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.6);
 }
</style>
