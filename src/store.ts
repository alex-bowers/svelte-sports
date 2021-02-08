import { writable, Writable } from 'svelte/store'

import type { iArticle } from "./types"

export const hello: Writable<string> = writable("Hello World!")

export const news: Writable<iArticle[]> = writable([])
