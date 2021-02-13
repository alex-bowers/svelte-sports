<script lang="ts">
    import Article from "../components/Article.svelte"
    import { articles } from "../store"
</script>

<section>
    <h2>News</h2>

    {#await $articles}
        <div>Loading news articles...</div>
    {:then result}
    <div class="news">
    {#each result as article, i}
        <article class="news__article">
            <Article report={article}/>
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
