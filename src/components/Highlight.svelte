<script lang="ts">
    import type { IArticle } from "../types"

    export let video: IArticle
</script>

{#if video}
    <li>
        <a href="{video.url}">
            {video.title}
        </a>
    </li>
{/if}

<style>
    a {
        color: black;
    }
</style>
