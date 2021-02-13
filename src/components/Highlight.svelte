<script lang="ts">
    import type { iVideo } from "../types"

    export let video: iVideo
</script>

{#if video}
    <a href="{video.url}">
        <h3>{video.title}</h3>
    </a>
{/if}

<style>
</style>
