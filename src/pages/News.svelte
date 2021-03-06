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
        align-items: center;
        justify-content: center;
    }
    .news__article {
        display: flex;
        flex-direction: column;
        max-width: 300px;
        text-align: left;
        padding: 0.5rem;
        margin: 1rem 0.5rem;
    }

    @media (min-width: 640px) {
        .news {
            justify-content: space-between;
        }
    }

    @media (min-width: 1024px) {
        .news {
            flex-direction: column;
        }
        .news__article {
            flex-direction: row;
            max-width: 1200px;
        }
        .news__article + .news__article {
            border-top: 1px solid lightgrey;
            margin-top: 3rem;
            padding-top: 3rem;
        }
    }
</style>
