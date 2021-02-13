<script lang="ts">
	import axios from "axios"
	import Router from 'svelte-spa-router'
	import { onMount } from 'svelte'

	import routes from './routes'
	import { hello, news } from "./store"
	import testData from "./test-data.js"

	onMount(async () => {
		await getNewsArticles()
	});

	function getNewsArticles() {
		const url = `${process.env.NEWS_URL}${process.env.NEWS_KEY}`

		// To save requests on the API, we can use some test data in development.
		if (process.env.isProd) {
		axios.get(url)
			.then(function (response) {
				news.set(response.data.articles)
			}).catch(function () {
				news.set([])
				})
		} else {
			news.set(testData.news)
		}
	}
	}
</script>

<main>
	<h1>{$hello}</h1>
	<nav>
		<ul>
			<li><a href="#/">Home</a></li>
			<li><a href="#/news">News</a></li>
			<li><a href="#/videos">Videos</a></li>
		</ul>
	</nav>

	<Router {routes}/>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>
