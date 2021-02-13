import {
	derived,
	Readable,
	writable,
	Writable
} from 'svelte/store'

import type { IArticle } from './types'

export const news: Writable<IArticle[]> = writable([])

export const articles: Readable<IArticle[]> = derived(
	news,
	$article => $article.filter(item => item.content)
);

export const videos: Readable<IArticle[]> = derived(
	news,
	$article => $article.filter(
        item => !item.content && item.title.toLowerCase().includes('highlights')
    )
);
