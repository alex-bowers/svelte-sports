<script lang="ts">
    import Article from "../components/Article.svelte"
    import { news } from "../store"

    let pageName:string = "News Page"
</script>

<main>
    <h2>{pageName}</h2>

    {#await $news}
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
</main>

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
