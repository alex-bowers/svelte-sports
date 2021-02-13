<script lang="ts">
    import type { iArticle } from "../types"

    export let report: iArticle
</script>

{#if report}
    <a href="{report.url}">
        <h3>{report.title}</h3>
        <img src="{report.urlToImage}" alt="">
        <p>{report.content}</p>
    </a>
{/if}

<style>
    img {
        width: 100%;
    }
</style>
