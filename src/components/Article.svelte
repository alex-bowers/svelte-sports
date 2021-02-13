<script lang="ts">
    import type { iArticle } from "../types"

    export let report: iArticle
</script>

{#if report}
    <a href="{report.url}">
        <h3>{report.title}</h3>
        {#if report.urlToImage}
            <img src="{report.urlToImage}" alt="">
        {/if}
        {#if report.content}
            <p>{report.content}</p>
        {/if}
    </a>
{/if}

<style>
    img {
        width: 100%;
    }
</style>
