<script lang="ts">
    import type { IArticle } from "../types"

    export let report: IArticle

    function goToArticleWebsite() {
        window.location.href = report.url;
    }
</script>

{#if report}
    <img
        on:click={goToArticleWebsite}
        class="article__image"
        src="{report.urlToImage}"
        alt=""
    >
    <div class="article__text">
        <h3 class="article__text--title">
            <a href="{report.url}">{report.title}</a>
        </h3>
        <div
            on:click={goToArticleWebsite}
            class="article__text--source"
        >
            <span>{report.source.name}</span>,
            <span>{report.author}</span>
        </div>
        <p
            on:click={goToArticleWebsite}
            class="article__text--description"
        >
            {report.description}
        </p>
    </div>
{/if}

<style>
    .article__image,
    .article__text--description,
    .article__text--source {
        cursor: pointer;
    }
    .article__image {
        border-radius: 0.125rem;
        max-width: 400px;
        width: 100%;
    }
    .article__text--description,
    .article__text--source {
        color: grey;
    }
    .article__text--description {
        display: none;
        margin: 0;
    }
    .article__text--source {
        font-size: 0.875rem;
        margin-bottom: 0.25rem;
    }
    .article__text--title {
        margin-bottom: 0.25rem;
    }
    .article__text--title a {
        color: black;
        font-size: 1.25rem;
        font-weight: 500;
        margin-bottom: 0.25rem;
    }

    @media (min-width: 1024px) {
        .article__image {
            border-radius: 0.5rem;
            max-width: 400px;
            order: 2;
            width: 100%;
        }
        .article__text {
            order: 1;
            padding-right: 5rem;
        }
        .article__text--description {
            display: block;
        }
        .article__text--source {
            font-size: 1.25rem;
        }
        .article__text--title {
            margin-bottom: 0.875rem;
        }
        .article__text--title a {
            font-size: 2rem;
            font-weight: 500;
        }
    }
</style>
