<script lang="ts">
    import Highlight from "../components/Highlight.svelte"

    import { videos } from "../store"
</script>

<section>
    <h2>Videos</h2>

    {#await $videos}
        <div>Loading news videos...</div>
    {:then result}
    <div class="news">
    {#each result as video, i}
        <article class="news__article">
            <Highlight video={video}/>
        </article>
        {/each}
    </div>
    {/await}
</section>

<style>
    .news {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .news__article {
        border: 5px solid black;
        margin: 1rem;
        max-width: 400px;
        padding: 1rem;
    }
</style>
