import { derived, writable, Writable } from 'svelte/store'

import type { iArticle, iVideo } from './types'

export const news: Writable<iArticle[] | iVideo[]> = writable([])

export const articles = derived(
	news,
	$article => $article.filter(item => item.content)
);

export const videos = derived(
	news,
	$article => $article.filter(
        item => !item.content && item.title.toLowerCase().includes('highlights')
    )
);
