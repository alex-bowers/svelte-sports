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
            <ul>
                <Highlight video={video}/>
            </ul>
        </article>
        {/each}
    </div>
    {/await}
</section>

<style>
    .news {
        text-align: left;
    }
</style>
